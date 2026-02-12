/* ============================================
   ProstateAdvice.com — Storage Abstraction
   localStorage + IndexedDB with graceful fallback
   ============================================ */

const PA_Storage = (function() {
  'use strict';

  const DB_NAME = 'ProstateAdvice';
  const DB_VERSION = 1;
  const STORE_CHECKINS = 'checkins';
  const STORE_SCORES = 'scores';
  const STORE_PREFS = 'preferences';
  let db = null;

  // ---- IndexedDB Setup ----
  function openDB() {
    return new Promise((resolve, reject) => {
      if (db) { resolve(db); return; }
      if (!window.indexedDB) { reject(new Error('IndexedDB not supported')); return; }
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => { db = request.result; resolve(db); };
      request.onupgradeneeded = (e) => {
        const d = e.target.result;
        if (!d.objectStoreNames.contains(STORE_CHECKINS)) {
          const store = d.createObjectStore(STORE_CHECKINS, { keyPath: 'id', autoIncrement: true });
          store.createIndex('type', 'type', { unique: false });
          store.createIndex('date', 'date', { unique: false });
        }
        if (!d.objectStoreNames.contains(STORE_SCORES)) {
          d.createObjectStore(STORE_SCORES, { keyPath: 'id', autoIncrement: true });
        }
        if (!d.objectStoreNames.contains(STORE_PREFS)) {
          d.createObjectStore(STORE_PREFS, { keyPath: 'key' });
        }
      };
    });
  }

  // ---- Generic IDB helpers ----
  async function idbPut(storeName, data) {
    const d = await openDB();
    return new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.put(data);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbGetAll(storeName) {
    const d = await openDB();
    return new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, 'readonly');
      const store = tx.objectStore(storeName);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  async function idbClear(storeName) {
    const d = await openDB();
    return new Promise((resolve, reject) => {
      const tx = d.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      const req = store.clear();
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  }

  // ---- localStorage fallback helpers ----
  function lsGet(key, fallback) {
    try {
      const v = localStorage.getItem('pa_' + key);
      return v !== null ? JSON.parse(v) : fallback;
    } catch { return fallback; }
  }

  function lsSet(key, value) {
    try {
      localStorage.setItem('pa_' + key, JSON.stringify(value));
    } catch { /* quota exceeded - silently fail */ }
  }

  function lsRemove(key) {
    try { localStorage.removeItem('pa_' + key); } catch {}
  }

  // ---- Public API ----
  return {
    // Preferences (simple key-value via localStorage)
    getPref(key, fallback) { return lsGet(key, fallback); },
    setPref(key, value) { lsSet(key, value); },
    removePref(key) { lsRemove(key); },

    // Check-ins (structured data via IndexedDB)
    async saveCheckin(type, data) {
      const record = { type, date: new Date().toISOString(), data };
      try { return await idbPut(STORE_CHECKINS, record); }
      catch {
        const list = lsGet('checkins', []);
        list.push(record);
        lsSet('checkins', list);
      }
    },

    async getCheckins(type) {
      try {
        const all = await idbGetAll(STORE_CHECKINS);
        return type ? all.filter(c => c.type === type) : all;
      } catch {
        const list = lsGet('checkins', []);
        return type ? list.filter(c => c.type === type) : list;
      }
    },

    // Scores
    async saveScore(data) {
      const record = { ...data, date: new Date().toISOString() };
      try { return await idbPut(STORE_SCORES, record); }
      catch {
        const list = lsGet('scores', []);
        list.push(record);
        lsSet('scores', list);
      }
    },

    async getScores() {
      try { return await idbGetAll(STORE_SCORES); }
      catch { return lsGet('scores', []); }
    },

    // Export all data
    async exportAll() {
      const checkins = await this.getCheckins();
      const scores = await this.getScores();
      const prefs = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('pa_')) {
          prefs[k.slice(3)] = JSON.parse(localStorage.getItem(k));
        }
      }
      return { checkins, scores, prefs, exportedAt: new Date().toISOString() };
    },

    // Delete all data
    async deleteAll() {
      try { await idbClear(STORE_CHECKINS); } catch {}
      try { await idbClear(STORE_SCORES); } catch {}
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const k = localStorage.key(i);
        if (k && k.startsWith('pa_')) localStorage.removeItem(k);
      }
    }
  };
})();
