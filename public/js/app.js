/* ============================================
   ProstateAdvice.com — Core Application
   i18n (EN/ES/FR), navigation, animations,
   theme, scroll observers, interactivity
   ============================================ */

const PA = (function() {
  'use strict';

  // ========== i18n TRANSLATIONS ==========
  const translations = {
    en: {
      // Nav
      nav_home: 'Home',
      nav_score: 'Strength Score',
      nav_pelvic: 'Pelvic Power',
      nav_inflammation: 'Inflammation Audit',
      nav_longevity: 'Sexual Longevity',
      nav_desk: 'Desk Reset',
      nav_supplements: 'Supplements',
      nav_safety: 'Safety',
      nav_about: 'About',

      // Hero
      hero_label: 'Proactive Prostate Health for Men 18\u201340',
      hero_title_1: 'Train Your Prostate',
      hero_title_2: 'Like You Train Your Body',
      hero_description: 'Build prostate strength early. The first science-grounded platform for proactive prostate longevity, pelvic performance, and hormonal resilience\u2014no fear tactics, no supplement hype.',
      hero_cta_primary: 'Take the Strength Score',
      hero_cta_secondary: 'Explore Tools',
      hero_stat_1_num: '7',
      hero_stat_1_label: 'Interactive Tools',
      hero_stat_2_num: '5 min',
      hero_stat_2_label: 'Quick Assessment',
      hero_stat_3_num: '100%',
      hero_stat_3_label: 'Private & Local',

      // Section: How It Works
      how_label: 'How It Works',
      how_title: 'Your Prostate Strength Journey',
      how_subtitle: 'Three steps to take control of your prostate health\u2014starting today, no account needed.',
      how_step1_title: 'Assess Your Baseline',
      how_step1_text: 'Take the 5-minute Prostate Strength Score. Get a personalized tier and actionable recommendations.',
      how_step2_title: 'Train & Optimize',
      how_step2_text: 'Use our Pelvic Power Trainer, Desk Reset Protocol, and Inflammation Audit to build daily habits.',
      how_step3_title: 'Track Your Progress',
      how_step3_text: 'Monitor improvements over time. All data stays on your device\u2014export or delete anytime.',

      // Section: Tools
      tools_label: 'Interactive Tools',
      tools_title: 'Your Complete Prostate Toolkit',
      tools_subtitle: 'Every tool works instantly in your browser. No sign-up. No data leaves your device.',

      tool1_title: 'Prostate Strength Score',
      tool1_text: '5-minute assessment that turns confusion into a clear plan with personalized tier and weekly actions.',
      tool1_time: '5 min',
      tool2_title: 'Pelvic Power Trainer',
      tool2_text: 'Guided strength and relaxation routines for your pelvic floor\u2014the muscle group men never train.',
      tool2_time: 'Daily',
      tool3_title: 'Inflammation Audit',
      tool3_text: 'Evaluate your chronic inflammation risk from stress, diet, sleep, and sitting habits.',
      tool3_time: '3 min',
      tool4_title: 'Sexual Longevity Dashboard',
      tool4_text: 'Private, stigma-free tracking of performance signals as indicators of overall health.',
      tool4_time: 'Optional',
      tool5_title: 'Desk Reset Protocol',
      tool5_text: 'Quick pelvic circulation resets, hip mobility drills, and posture corrections for desk workers.',
      tool5_time: '5 min',
      tool6_title: 'Supplement Reality Library',
      tool6_text: 'Evidence-graded reviews of every prostate supplement\u2014no affiliate bias, no miracle claims.',
      tool6_time: 'Reference',
      tool7_title: 'Red Flags & When to Seek Care',
      tool7_text: 'Clear symptom guidance so you know exactly when casual monitoring becomes a doctor visit.',
      tool7_time: 'Safety',

      // Interactive Demo Section
      demo_label: 'Try It Now',
      demo_title: 'Quick Strength Check',
      demo_subtitle: 'Answer 3 quick questions to get a preview of your Prostate Strength Score.',
      demo_q1: 'How many hours do you sit per day?',
      demo_q1_a1: 'Less than 4 hours',
      demo_q1_a2: '4\u20136 hours',
      demo_q1_a3: '6\u20138 hours',
      demo_q1_a4: 'More than 8 hours',
      demo_q2: 'How would you rate your sleep quality?',
      demo_q2_a1: 'Excellent',
      demo_q2_a2: 'Good',
      demo_q2_a3: 'Fair',
      demo_q2_a4: 'Poor',
      demo_q3: 'How often do you exercise per week?',
      demo_q3_a1: '5+ times',
      demo_q3_a2: '3\u20134 times',
      demo_q3_a3: '1\u20132 times',
      demo_q3_a4: 'Rarely',
      demo_next: 'Next',
      demo_back: 'Back',
      demo_see_score: 'See My Preview Score',
      demo_result_title: 'Your Preview Score',
      demo_result_text: 'This is a quick preview. Take the full 5-minute assessment for detailed insights and personalized recommendations.',
      demo_result_cta: 'Take Full Assessment',
      demo_tier_elite: 'Elite',
      demo_tier_strong: 'Strong',
      demo_tier_developing: 'Developing',
      demo_tier_foundational: 'Foundational',
      demo_question: 'Question',
      demo_of: 'of',

      // Stats Section
      stats_label: 'The Reality',
      stats_title: 'Why Start Now?',
      stats_subtitle: 'Prostate health isn\u2019t just for older men. The foundations are built in your 20s and 30s.',
      stat1_num: '1 in 8',
      stat1_label: 'Men will face prostate issues in their lifetime',
      stat2_num: '30%',
      stat2_label: 'Of men 30\u201340 show early inflammation markers',
      stat3_num: '8+ hrs',
      stat3_label: 'Average daily sitting time for desk workers',
      stat4_num: '73%',
      stat4_label: 'Of young men never discuss prostate health',

      // Desk Reset Preview
      desk_label: 'Desk Workers',
      desk_title: 'Sitting Is a Silent Risk',
      desk_subtitle: 'Extended sitting compresses pelvic blood flow and increases tension. Try a quick reset.',
      desk_start: 'Start 2-Minute Reset',
      desk_pause: 'Pause',
      desk_resume: 'Resume',
      desk_restart: 'Restart',
      desk_step1: 'Stand up and take 3 deep breaths',
      desk_step2: 'Hip circles: 10 rotations each direction',
      desk_step3: 'Deep squat hold for 20 seconds',
      desk_step4: 'Pelvic floor squeeze: hold 5 sec, release 5 sec \u00d7 5',
      desk_complete: 'Reset Complete! Your pelvic circulation thanks you.',

      // CTA
      cta_title: 'Build Prostate Strength Early. Keep It for Life.',
      cta_text: 'Start with the 5-minute Strength Score. No account needed. 100% private.',
      cta_button: 'Start Your Assessment',

      // Footer
      footer_brand_text: 'The lifelong prostate strength and performance companion for men 18\u201340. Science-grounded. Privacy-first. Zero fear tactics.',
      footer_tools: 'Tools',
      footer_resources: 'Resources',
      footer_res_prostate101: 'Prostate 101',
      footer_res_longevity: 'Longevity Plan',
      footer_res_about: 'About Us',
      footer_legal: 'Legal',
      footer_legal_privacy: 'Privacy Policy',
      footer_legal_access: 'Accessibility',
      footer_legal_disclaimer: 'Medical Disclaimer',
      footer_copy: '\u00a9 2025 ProstateAdvice.com. Educational resource. Not medical advice.',
      footer_disclaimer: 'This site provides educational information only. It is not a substitute for professional medical advice, diagnosis, or treatment.',

      // Disclaimer bar
      disclaimer_text: 'This site is for educational purposes only and does not provide medical advice. All data stays on your device.',
      disclaimer_accept: 'I Understand',

      // Accessibility
      skip_to_content: 'Skip to main content',
      menu_open: 'Open menu',
      menu_close: 'Close menu',
    },

    es: {
      nav_home: 'Inicio',
      nav_score: 'Puntuaci\u00f3n',
      nav_pelvic: 'Poder P\u00e9lvico',
      nav_inflammation: 'Auditor\u00eda Inflamaci\u00f3n',
      nav_longevity: 'Longevidad Sexual',
      nav_desk: 'Reset Escritorio',
      nav_supplements: 'Suplementos',
      nav_safety: 'Seguridad',
      nav_about: 'Nosotros',

      hero_label: 'Salud Prost\u00e1tica Proactiva para Hombres 18\u201340',
      hero_title_1: 'Entrena Tu Pr\u00f3stata',
      hero_title_2: 'Como Entrenas Tu Cuerpo',
      hero_description: 'Fortalece tu pr\u00f3stata desde joven. La primera plataforma cient\u00edfica para longevidad prost\u00e1tica proactiva, rendimiento p\u00e9lvico y resiliencia hormonal\u2014sin t\u00e1cticas de miedo, sin promesas falsas.',
      hero_cta_primary: 'Haz la Evaluaci\u00f3n',
      hero_cta_secondary: 'Explorar Herramientas',
      hero_stat_1_num: '7',
      hero_stat_1_label: 'Herramientas Interactivas',
      hero_stat_2_num: '5 min',
      hero_stat_2_label: 'Evaluaci\u00f3n R\u00e1pida',
      hero_stat_3_num: '100%',
      hero_stat_3_label: 'Privado y Local',

      how_label: 'C\u00f3mo Funciona',
      how_title: 'Tu Camino a la Fortaleza Prost\u00e1tica',
      how_subtitle: 'Tres pasos para tomar control de tu salud prost\u00e1tica\u2014empezando hoy, sin necesidad de cuenta.',
      how_step1_title: 'Eval\u00faa Tu Base',
      how_step1_text: 'Realiza la Puntuaci\u00f3n de Fortaleza Prost\u00e1tica en 5 minutos. Obt\u00e9n tu nivel personalizado y recomendaciones.',
      how_step2_title: 'Entrena y Optimiza',
      how_step2_text: 'Usa nuestro Entrenador P\u00e9lvico, Protocolo de Escritorio y Auditor\u00eda de Inflamaci\u00f3n para crear h\u00e1bitos diarios.',
      how_step3_title: 'Sigue Tu Progreso',
      how_step3_text: 'Monitorea mejoras con el tiempo. Todos los datos permanecen en tu dispositivo\u2014exporta o elimina cuando quieras.',

      tools_label: 'Herramientas Interactivas',
      tools_title: 'Tu Kit Completo de Salud Prost\u00e1tica',
      tools_subtitle: 'Cada herramienta funciona instant\u00e1neamente en tu navegador. Sin registro. Tus datos no salen de tu dispositivo.',

      tool1_title: 'Puntuaci\u00f3n de Fortaleza',
      tool1_text: 'Evaluaci\u00f3n de 5 minutos que convierte la confusi\u00f3n en un plan claro con nivel personalizado y acciones semanales.',
      tool1_time: '5 min',
      tool2_title: 'Entrenador P\u00e9lvico',
      tool2_text: 'Rutinas guiadas de fuerza y relajaci\u00f3n para tu suelo p\u00e9lvico\u2014el grupo muscular que los hombres nunca entrenan.',
      tool2_time: 'Diario',
      tool3_title: 'Auditor\u00eda de Inflamaci\u00f3n',
      tool3_text: 'Eval\u00faa tu riesgo de inflamaci\u00f3n cr\u00f3nica por estr\u00e9s, dieta, sue\u00f1o y sedentarismo.',
      tool3_time: '3 min',
      tool4_title: 'Panel de Longevidad Sexual',
      tool4_text: 'Seguimiento privado y sin estigma de se\u00f1ales de rendimiento como indicadores de salud general.',
      tool4_time: 'Opcional',
      tool5_title: 'Protocolo Reset Escritorio',
      tool5_text: 'Resets r\u00e1pidos de circulaci\u00f3n p\u00e9lvica, movilidad de cadera y correcciones posturales para trabajadores de escritorio.',
      tool5_time: '5 min',
      tool6_title: 'Biblioteca de Suplementos',
      tool6_text: 'Rese\u00f1as con grado de evidencia de cada suplemento prost\u00e1tico\u2014sin sesgo comercial, sin milagros.',
      tool6_time: 'Referencia',
      tool7_title: 'Se\u00f1ales de Alerta',
      tool7_text: 'Gu\u00eda clara de s\u00edntomas para saber exactamente cu\u00e1ndo el monitoreo casual se convierte en visita m\u00e9dica.',
      tool7_time: 'Seguridad',

      demo_label: 'Pru\u00e9balo Ahora',
      demo_title: 'Chequeo R\u00e1pido de Fortaleza',
      demo_subtitle: 'Responde 3 preguntas r\u00e1pidas para obtener una vista previa de tu Puntuaci\u00f3n de Fortaleza.',
      demo_q1: '\u00bfCu\u00e1ntas horas al d\u00eda pasas sentado?',
      demo_q1_a1: 'Menos de 4 horas',
      demo_q1_a2: '4\u20136 horas',
      demo_q1_a3: '6\u20138 horas',
      demo_q1_a4: 'M\u00e1s de 8 horas',
      demo_q2: '\u00bfC\u00f3mo calificar\u00edas la calidad de tu sue\u00f1o?',
      demo_q2_a1: 'Excelente',
      demo_q2_a2: 'Buena',
      demo_q2_a3: 'Regular',
      demo_q2_a4: 'Mala',
      demo_q3: '\u00bfCu\u00e1ntas veces haces ejercicio por semana?',
      demo_q3_a1: '5+ veces',
      demo_q3_a2: '3\u20134 veces',
      demo_q3_a3: '1\u20132 veces',
      demo_q3_a4: 'Rara vez',
      demo_next: 'Siguiente',
      demo_back: 'Atr\u00e1s',
      demo_see_score: 'Ver Mi Puntuaci\u00f3n',
      demo_result_title: 'Tu Puntuaci\u00f3n Previa',
      demo_result_text: 'Esta es una vista previa r\u00e1pida. Haz la evaluaci\u00f3n completa de 5 minutos para obtener informaci\u00f3n detallada y recomendaciones personalizadas.',
      demo_result_cta: 'Evaluaci\u00f3n Completa',
      demo_tier_elite: '\u00c9lite',
      demo_tier_strong: 'Fuerte',
      demo_tier_developing: 'En Desarrollo',
      demo_tier_foundational: 'Fundacional',
      demo_question: 'Pregunta',
      demo_of: 'de',

      stats_label: 'La Realidad',
      stats_title: '\u00bfPor Qu\u00e9 Empezar Ahora?',
      stats_subtitle: 'La salud prost\u00e1tica no es solo para hombres mayores. Los cimientos se construyen en los 20 y 30.',
      stat1_num: '1 de 8',
      stat1_label: 'Hombres enfrentar\u00e1n problemas prost\u00e1ticos',
      stat2_num: '30%',
      stat2_label: 'De hombres 30\u201340 muestran marcadores de inflamaci\u00f3n',
      stat3_num: '8+ hrs',
      stat3_label: 'Tiempo promedio sentado para trabajadores de oficina',
      stat4_num: '73%',
      stat4_label: 'De hombres j\u00f3venes nunca hablan de salud prost\u00e1tica',

      desk_label: 'Trabajadores de Escritorio',
      desk_title: 'Estar Sentado Es un Riesgo Silencioso',
      desk_subtitle: 'Estar sentado comprime el flujo sangu\u00edneo p\u00e9lvico y aumenta la tensi\u00f3n. Prueba un reset r\u00e1pido.',
      desk_start: 'Iniciar Reset de 2 Minutos',
      desk_pause: 'Pausar',
      desk_resume: 'Reanudar',
      desk_restart: 'Reiniciar',
      desk_step1: 'Ponte de pie y toma 3 respiraciones profundas',
      desk_step2: 'C\u00edrculos de cadera: 10 rotaciones en cada direcci\u00f3n',
      desk_step3: 'Sentadilla profunda mant\u00e9n 20 segundos',
      desk_step4: 'Contracci\u00f3n del suelo p\u00e9lvico: mant\u00e9n 5 seg, suelta 5 seg \u00d7 5',
      desk_complete: '\u00a1Reset Completo! Tu circulaci\u00f3n p\u00e9lvica te lo agradece.',

      cta_title: 'Fortalece Tu Pr\u00f3stata Desde Joven. Mant\u00e9nla de Por Vida.',
      cta_text: 'Comienza con la Puntuaci\u00f3n de Fortaleza de 5 minutos. Sin cuenta. 100% privado.',
      cta_button: 'Comenzar Evaluaci\u00f3n',

      footer_brand_text: 'El compa\u00f1ero de por vida para la fortaleza y rendimiento prost\u00e1tico de hombres 18\u201340. Base cient\u00edfica. Privacidad primero. Cero t\u00e1cticas de miedo.',
      footer_tools: 'Herramientas',
      footer_resources: 'Recursos',
      footer_res_prostate101: 'Pr\u00f3stata 101',
      footer_res_longevity: 'Plan de Longevidad',
      footer_res_about: 'Sobre Nosotros',
      footer_legal: 'Legal',
      footer_legal_privacy: 'Pol\u00edtica de Privacidad',
      footer_legal_access: 'Accesibilidad',
      footer_legal_disclaimer: 'Aviso M\u00e9dico',
      footer_copy: '\u00a9 2025 ProstateAdvice.com. Recurso educativo. No es consejo m\u00e9dico.',
      footer_disclaimer: 'Este sitio proporciona informaci\u00f3n educativa \u00fanicamente. No sustituye el consejo, diagn\u00f3stico o tratamiento m\u00e9dico profesional.',

      disclaimer_text: 'Este sitio es solo para fines educativos y no proporciona asesoramiento m\u00e9dico. Todos los datos permanecen en tu dispositivo.',
      disclaimer_accept: 'Entendido',

      skip_to_content: 'Saltar al contenido principal',
      menu_open: 'Abrir men\u00fa',
      menu_close: 'Cerrar men\u00fa',
    },

    fr: {
      nav_home: 'Accueil',
      nav_score: 'Score de Force',
      nav_pelvic: 'Puissance Pelvienne',
      nav_inflammation: 'Audit Inflammation',
      nav_longevity: 'Longévité Sexuelle',
      nav_desk: 'Reset Bureau',
      nav_supplements: 'Suppléments',
      nav_safety: 'Sécurité',
      nav_about: 'À Propos',

      hero_label: 'Santé Prostatique Proactive pour Hommes 18\u201340',
      hero_title_1: 'Entraînez Votre Prostate',
      hero_title_2: 'Comme Vous Entraînez Votre Corps',
      hero_description: 'Renforcez votre prostate tôt. La première plateforme scientifique pour la longévité prostatique proactive, la performance pelvienne et la résilience hormonale\u2014sans tactiques de peur, sans battage publicitaire.',
      hero_cta_primary: 'Faire le Score de Force',
      hero_cta_secondary: 'Explorer les Outils',
      hero_stat_1_num: '7',
      hero_stat_1_label: 'Outils Interactifs',
      hero_stat_2_num: '5 min',
      hero_stat_2_label: 'Évaluation Rapide',
      hero_stat_3_num: '100%',
      hero_stat_3_label: 'Privé et Local',

      how_label: 'Comment Ça Marche',
      how_title: 'Votre Parcours de Force Prostatique',
      how_subtitle: 'Trois étapes pour prendre le contrôle de votre santé prostatique\u2014dès aujourd\'hui, sans compte requis.',
      how_step1_title: 'Évaluez Votre Base',
      how_step1_text: 'Faites le Score de Force Prostatique en 5 minutes. Obtenez votre niveau personnalisé et des recommandations.',
      how_step2_title: 'Entraînez et Optimisez',
      how_step2_text: 'Utilisez notre Entraîneur Pelvien, Protocole Bureau et Audit d\'Inflammation pour créer des habitudes quotidiennes.',
      how_step3_title: 'Suivez Vos Progrès',
      how_step3_text: 'Surveillez vos améliorations au fil du temps. Toutes les données restent sur votre appareil\u2014exportez ou supprimez à tout moment.',

      tools_label: 'Outils Interactifs',
      tools_title: 'Votre Boîte à Outils Prostatique Complète',
      tools_subtitle: 'Chaque outil fonctionne instantanément dans votre navigateur. Pas d\'inscription. Vos données ne quittent jamais votre appareil.',

      tool1_title: 'Score de Force Prostatique',
      tool1_text: 'Évaluation de 5 minutes qui transforme la confusion en plan clair avec niveau personnalisé et actions hebdomadaires.',
      tool1_time: '5 min',
      tool2_title: 'Entraîneur Pelvien',
      tool2_text: 'Routines guidées de force et relaxation pour votre plancher pelvien\u2014le groupe musculaire que les hommes n\'entraînent jamais.',
      tool2_time: 'Quotidien',
      tool3_title: 'Audit d\'Inflammation',
      tool3_text: 'Évaluez votre risque d\'inflammation chronique lié au stress, à l\'alimentation, au sommeil et à la sédentarité.',
      tool3_time: '3 min',
      tool4_title: 'Tableau de Longévité Sexuelle',
      tool4_text: 'Suivi privé et sans stigmatisation des signaux de performance comme indicateurs de santé globale.',
      tool4_time: 'Optionnel',
      tool5_title: 'Protocole Reset Bureau',
      tool5_text: 'Resets rapides de circulation pelvienne, exercices de mobilité et corrections posturales pour travailleurs de bureau.',
      tool5_time: '5 min',
      tool6_title: 'Bibliothèque des Suppléments',
      tool6_text: 'Revues classées par niveau de preuve de chaque supplément prostatique\u2014sans biais commercial, sans miracles.',
      tool6_time: 'Référence',
      tool7_title: 'Signaux d\'Alerte',
      tool7_text: 'Guide clair des symptômes pour savoir exactement quand la surveillance devient une visite médicale.',
      tool7_time: 'Sécurité',

      demo_label: 'Essayez Maintenant',
      demo_title: 'Vérification Rapide de Force',
      demo_subtitle: 'Répondez à 3 questions rapides pour obtenir un aperçu de votre Score de Force.',
      demo_q1: 'Combien d\'heures par jour restez-vous assis ?',
      demo_q1_a1: 'Moins de 4 heures',
      demo_q1_a2: '4\u20136 heures',
      demo_q1_a3: '6\u20138 heures',
      demo_q1_a4: 'Plus de 8 heures',
      demo_q2: 'Comment évaluez-vous la qualité de votre sommeil ?',
      demo_q2_a1: 'Excellente',
      demo_q2_a2: 'Bonne',
      demo_q2_a3: 'Moyenne',
      demo_q2_a4: 'Mauvaise',
      demo_q3: 'Combien de fois faites-vous de l\'exercice par semaine ?',
      demo_q3_a1: '5+ fois',
      demo_q3_a2: '3\u20134 fois',
      demo_q3_a3: '1\u20132 fois',
      demo_q3_a4: 'Rarement',
      demo_next: 'Suivant',
      demo_back: 'Retour',
      demo_see_score: 'Voir Mon Score',
      demo_result_title: 'Votre Score Aperçu',
      demo_result_text: 'Ceci est un aperçu rapide. Faites l\'évaluation complète de 5 minutes pour des informations détaillées et des recommandations personnalisées.',
      demo_result_cta: 'Évaluation Complète',
      demo_tier_elite: 'Élite',
      demo_tier_strong: 'Fort',
      demo_tier_developing: 'En Développement',
      demo_tier_foundational: 'Fondamental',
      demo_question: 'Question',
      demo_of: 'de',

      stats_label: 'La Réalité',
      stats_title: 'Pourquoi Commencer Maintenant ?',
      stats_subtitle: 'La santé prostatique n\'est pas réservée aux hommes âgés. Les fondations se construisent à 20 et 30 ans.',
      stat1_num: '1 sur 8',
      stat1_label: 'Hommes feront face à des problèmes prostatiques',
      stat2_num: '30%',
      stat2_label: 'Des hommes 30\u201340 montrent des marqueurs d\'inflammation',
      stat3_num: '8+ hrs',
      stat3_label: 'Temps moyen assis pour les travailleurs de bureau',
      stat4_num: '73%',
      stat4_label: 'Des jeunes hommes ne parlent jamais de santé prostatique',

      desk_label: 'Travailleurs de Bureau',
      desk_title: 'Rester Assis Est un Risque Silencieux',
      desk_subtitle: 'La position assise prolongée comprime le flux sanguin pelvien et augmente la tension. Essayez un reset rapide.',
      desk_start: 'Démarrer Reset de 2 Minutes',
      desk_pause: 'Pause',
      desk_resume: 'Reprendre',
      desk_restart: 'Redémarrer',
      desk_step1: 'Levez-vous et prenez 3 respirations profondes',
      desk_step2: 'Cercles de hanches : 10 rotations dans chaque direction',
      desk_step3: 'Squat profond maintenu 20 secondes',
      desk_step4: 'Contraction du plancher pelvien : maintenir 5 sec, relâcher 5 sec \u00d7 5',
      desk_complete: 'Reset Terminé ! Votre circulation pelvienne vous remercie.',

      cta_title: 'Renforcez Votre Prostate Tôt. Gardez-la pour la Vie.',
      cta_text: 'Commencez avec le Score de Force de 5 minutes. Sans compte. 100% privé.',
      cta_button: 'Commencer l\'Évaluation',

      footer_brand_text: 'Le compagnon à vie pour la force et la performance prostatique des hommes 18\u201340. Fondé sur la science. Vie privée d\'abord. Zéro tactiques de peur.',
      footer_tools: 'Outils',
      footer_resources: 'Ressources',
      footer_res_prostate101: 'Prostate 101',
      footer_res_longevity: 'Plan de Longévité',
      footer_res_about: 'À Propos',
      footer_legal: 'Légal',
      footer_legal_privacy: 'Politique de Confidentialité',
      footer_legal_access: 'Accessibilité',
      footer_legal_disclaimer: 'Avertissement Médical',
      footer_copy: '\u00a9 2025 ProstateAdvice.com. Ressource éducative. Pas un avis médical.',
      footer_disclaimer: 'Ce site fournit des informations éducatives uniquement. Il ne remplace pas les conseils, diagnostics ou traitements médicaux professionnels.',

      disclaimer_text: 'Ce site est à but éducatif uniquement et ne fournit pas de conseils médicaux. Toutes les données restent sur votre appareil.',
      disclaimer_accept: 'J\'ai Compris',

      skip_to_content: 'Aller au contenu principal',
      menu_open: 'Ouvrir le menu',
      menu_close: 'Fermer le menu',
    }
  };

  // ========== STATE ==========
  let currentLang = 'en';
  let currentTheme = 'light';

  // ========== i18n ENGINE ==========
  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    PA_Storage.setPref('lang', lang);

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    // Update aria-labels
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    // Update title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = t(el.getAttribute('data-i18n-title'));
    });

    // Update active lang button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // ========== THEME ENGINE ==========
  function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    PA_Storage.setPref('theme', theme);
    updateThemeIcon();
  }

  function toggleTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  }

  function updateThemeIcon() {
    const btn = document.querySelector('.theme-toggle');
    if (!btn) return;
    btn.innerHTML = currentTheme === 'light'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';
  }

  // ========== NAVIGATION ==========
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Scroll shadow
    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
      }, { passive: true });
    }

    // Mobile menu
    if (toggle && mobileNav) {
      toggle.addEventListener('click', () => {
        const isOpen = mobileNav.classList.contains('open');
        mobileNav.classList.toggle('open');
        toggle.classList.toggle('active');
        document.body.style.overflow = isOpen ? '' : 'hidden';
        toggle.setAttribute('aria-expanded', !isOpen);
      });

      // Close on link click
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          toggle.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Theme toggle
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggleTheme);
    });
  }

  // ========== SCROLL ANIMATIONS ==========
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
  }

  // ========== COUNTER ANIMATION ==========
  function animateCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const final = el.dataset.count;
          if (!final) return;

          // If it contains non-numeric prefix/suffix
          const match = final.match(/^([^\d]*)([\d.]+)(.*)$/);
          if (match) {
            const prefix = match[1];
            const num = parseFloat(match[2]);
            const suffix = match[3];
            let current = 0;
            const step = num / 40;
            const interval = setInterval(() => {
              current += step;
              if (current >= num) {
                current = num;
                clearInterval(interval);
              }
              el.textContent = prefix + (Number.isInteger(num) ? Math.round(current) : current.toFixed(1)) + suffix;
            }, 30);
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
  }

  // ========== SMOOTH SCROLL ==========
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = parseInt(this.dataset.scrollOffset) || 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ========== ACCORDION ==========
  function initAccordions() {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        const body = item.querySelector('.accordion-body');
        const isOpen = item.classList.contains('open');

        // Close siblings
        item.parentElement.querySelectorAll('.accordion-item.open').forEach(openItem => {
          if (openItem !== item) {
            openItem.classList.remove('open');
            openItem.querySelector('.accordion-body').style.maxHeight = '0';
          }
        });

        item.classList.toggle('open');
        body.style.maxHeight = isOpen ? '0' : body.scrollHeight + 'px';
      });
    });
  }

  // ========== TABS ==========
  function initTabs() {
    document.querySelectorAll('.tabs').forEach(tabGroup => {
      const buttons = tabGroup.querySelectorAll('.tab-btn');
      const container = tabGroup.closest('.tabs-container') || tabGroup.parentElement;
      const contents = container.querySelectorAll('.tab-content');

      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.dataset.tab;
          buttons.forEach(b => b.classList.remove('active'));
          contents.forEach(c => c.classList.remove('active'));
          btn.classList.add('active');
          const targetContent = container.querySelector(`[data-tab-content="${target}"]`);
          if (targetContent) targetContent.classList.add('active');
        });
      });
    });
  }

  // ========== INTERACTIVE QUIZ (Homepage Demo) ==========
  function initQuizDemo() {
    const quiz = document.getElementById('quiz-demo');
    if (!quiz) return;

    let step = 0;
    const answers = [null, null, null];
    const steps = quiz.querySelectorAll('.quiz-step');
    const progressFill = quiz.querySelector('.progress-fill');
    const progressText = quiz.querySelector('.quiz-progress-text');

    function showStep(idx) {
      steps.forEach((s, i) => {
        s.style.display = i === idx ? 'block' : 'none';
        if (i === idx) {
          s.style.animation = 'fadeInUp 0.4s ease both';
        }
      });
      if (progressFill) progressFill.style.width = ((idx + 1) / 3 * 100) + '%';
      if (progressText) progressText.textContent = `${t('demo_question')} ${idx + 1} ${t('demo_of')} 3`;
    }

    // Option selection
    quiz.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const stepEl = opt.closest('.quiz-step');
        const stepIdx = parseInt(stepEl.dataset.step);
        stepEl.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        answers[stepIdx] = parseInt(opt.dataset.value);
      });
    });

    // Navigation
    quiz.querySelectorAll('[data-quiz-next]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answers[step] === null) {
          const opts = steps[step].querySelectorAll('.quiz-option');
          opts.forEach(o => { o.style.animation = 'none'; o.offsetHeight; o.style.animation = ''; });
          return;
        }
        step++;
        showStep(step);
      });
    });

    quiz.querySelectorAll('[data-quiz-back]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (step > 0) { step--; showStep(step); }
      });
    });

    quiz.querySelectorAll('[data-quiz-submit]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (answers[step] === null) return;
        showResult();
      });
    });

    function showResult() {
      const total = answers.reduce((s, v) => s + (v || 0), 0);
      const maxScore = 12;
      const pct = Math.round((total / maxScore) * 100);
      const resultStep = quiz.querySelector('.quiz-result');

      let tier, tierClass;
      if (pct >= 85) { tier = t('demo_tier_elite'); tierClass = 'elite'; }
      else if (pct >= 65) { tier = t('demo_tier_strong'); tierClass = 'strong'; }
      else if (pct >= 40) { tier = t('demo_tier_developing'); tierClass = 'developing'; }
      else { tier = t('demo_tier_foundational'); tierClass = 'foundational'; }

      steps.forEach(s => s.style.display = 'none');
      if (resultStep) {
        resultStep.style.display = 'block';
        resultStep.style.animation = 'scaleIn 0.5s ease both';
      }

      const scoreNum = quiz.querySelector('.score-ring-value');
      const scoreFill = quiz.querySelector('.score-ring-fill');
      const tierEl = quiz.querySelector('.result-tier');
      const tierBadge = quiz.querySelector('.result-tier-badge');

      if (scoreNum) {
        let current = 0;
        const interval = setInterval(() => {
          current += 2;
          if (current >= pct) { current = pct; clearInterval(interval); }
          scoreNum.textContent = current;
        }, 20);
      }
      if (scoreFill) {
        const circumference = 2 * Math.PI * 80;
        scoreFill.style.strokeDasharray = circumference;
        setTimeout(() => {
          scoreFill.style.strokeDashoffset = circumference * (1 - pct / 100);
        }, 100);
      }
      if (tierEl) tierEl.textContent = tier;
      if (tierBadge) {
        tierBadge.className = 'result-tier-badge card-badge';
        tierBadge.classList.add('badge-' + (tierClass === 'elite' || tierClass === 'strong' ? 'success' : tierClass === 'developing' ? 'warning' : 'danger'));
        tierBadge.textContent = tier;
      }

      if (progressFill) progressFill.style.width = '100%';
      if (progressText) progressText.textContent = '';
    }

    // Reset
    quiz.querySelectorAll('[data-quiz-reset]').forEach(btn => {
      btn.addEventListener('click', () => {
        step = 0;
        answers.fill(null);
        quiz.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        quiz.querySelector('.quiz-result').style.display = 'none';
        showStep(0);
      });
    });

    showStep(0);
  }

  // ========== DESK RESET TIMER ==========
  function initDeskTimer() {
    const timer = document.getElementById('desk-timer');
    if (!timer) return;

    const display = timer.querySelector('.timer-display');
    const startBtn = timer.querySelector('[data-timer-start]');
    const pauseBtn = timer.querySelector('[data-timer-pause]');
    const restartBtn = timer.querySelector('[data-timer-restart]');
    const stepsContainer = timer.querySelector('.timer-steps');
    const completeMsg = timer.querySelector('.timer-complete');

    let interval = null;
    let seconds = 120;
    let running = false;
    let currentStep = 0;

    const stepTimes = [30, 60, 80, 120]; // cumulative seconds for each step

    function updateDisplay() {
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      if (display) display.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    }

    function updateSteps() {
      const elapsed = 120 - seconds;
      const stepEls = stepsContainer ? stepsContainer.querySelectorAll('.timer-step') : [];
      stepEls.forEach((el, i) => {
        el.classList.toggle('active', elapsed >= (i === 0 ? 0 : stepTimes[i-1]) && elapsed < stepTimes[i]);
        el.classList.toggle('done', elapsed >= stepTimes[i]);
      });
    }

    function start() {
      if (running) return;
      running = true;
      if (startBtn) startBtn.style.display = 'none';
      if (pauseBtn) { pauseBtn.style.display = 'inline-flex'; pauseBtn.textContent = t('desk_pause'); }
      if (restartBtn) restartBtn.style.display = 'inline-flex';
      if (completeMsg) completeMsg.style.display = 'none';

      interval = setInterval(() => {
        seconds--;
        updateDisplay();
        updateSteps();
        if (seconds <= 0) {
          clearInterval(interval);
          running = false;
          if (pauseBtn) pauseBtn.style.display = 'none';
          if (completeMsg) {
            completeMsg.style.display = 'block';
            completeMsg.style.animation = 'scaleIn 0.5s ease both';
          }
        }
      }, 1000);
    }

    function pause() {
      if (running) {
        clearInterval(interval);
        running = false;
        if (pauseBtn) pauseBtn.textContent = t('desk_resume');
      } else {
        start();
      }
    }

    function restart() {
      clearInterval(interval);
      running = false;
      seconds = 120;
      updateDisplay();
      if (stepsContainer) stepsContainer.querySelectorAll('.timer-step').forEach(el => {
        el.classList.remove('active', 'done');
      });
      if (startBtn) startBtn.style.display = 'inline-flex';
      if (pauseBtn) pauseBtn.style.display = 'none';
      if (restartBtn) restartBtn.style.display = 'none';
      if (completeMsg) completeMsg.style.display = 'none';
    }

    if (startBtn) startBtn.addEventListener('click', start);
    if (pauseBtn) pauseBtn.addEventListener('click', pause);
    if (restartBtn) restartBtn.addEventListener('click', restart);

    updateDisplay();
  }

  // ========== DISCLAIMER BAR ==========
  function initDisclaimer() {
    const bar = document.querySelector('.disclaimer-bar');
    if (!bar) return;
    const accepted = PA_Storage.getPref('disclaimer_accepted', false);
    if (accepted) return;

    setTimeout(() => bar.classList.add('visible'), 1500);

    bar.querySelector('[data-accept]')?.addEventListener('click', () => {
      bar.classList.remove('visible');
      PA_Storage.setPref('disclaimer_accepted', true);
    });
  }

  // ========== PARALLAX EFFECT ==========
  function initParallax() {
    const heroImg = document.querySelector('.hero-bg img');
    if (!heroImg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = `translateY(${y * 0.3}px) scale(1.1)`;
      }
    }, { passive: true });
  }

  // ========== INITIALIZE ==========
  function init() {
    // Restore preferences
    const savedLang = PA_Storage.getPref('lang', null);
    const savedTheme = PA_Storage.getPref('theme', null);

    // Detect browser language
    if (!savedLang) {
      const browserLang = navigator.language.slice(0, 2);
      currentLang = translations[browserLang] ? browserLang : 'en';
    } else {
      currentLang = savedLang;
    }

    // Detect system theme
    if (!savedTheme) {
      currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      currentTheme = savedTheme;
    }

    setTheme(currentTheme);
    setLanguage(currentLang);
    initNavbar();
    initSmoothScroll();
    initScrollAnimations();
    animateCounters();
    initAccordions();
    initTabs();
    initQuizDemo();
    initDeskTimer();
    initDisclaimer();
    initParallax();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  return { t, setLanguage, setTheme, toggleTheme };
})();
