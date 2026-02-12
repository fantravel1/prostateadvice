/* ============================================
   ProstateAdvice.com — Strength Score Assessment
   Full 8-question interactive assessment logic
   ============================================ */

const StrengthScore = (function() {
  'use strict';

  // ========== ASSESSMENT DATA ==========
  const questions = [
    {
      id: 'sleep',
      key: 'ss_q1',
      category: 'sleep',
      icon: '\uD83D\uDCA4',
      options: [
        { key: 'ss_q1_a1', value: 4, label: 'Excellent' },
        { key: 'ss_q1_a2', value: 3, label: 'Good' },
        { key: 'ss_q1_a3', value: 2, label: 'Fair' },
        { key: 'ss_q1_a4', value: 1, label: 'Poor' }
      ]
    },
    {
      id: 'waist',
      key: 'ss_q2',
      category: 'body_composition',
      icon: '\uD83D\uDC56',
      options: [
        { key: 'ss_q2_a1', value: 4, label: 'Comfortable' },
        { key: 'ss_q2_a2', value: 3, label: 'Snug' },
        { key: 'ss_q2_a3', value: 2, label: 'Tight' },
        { key: 'ss_q2_a4', value: 1, label: 'Very Tight' }
      ]
    },
    {
      id: 'stress',
      key: 'ss_q3',
      category: 'stress',
      icon: '\uD83E\uDDE0',
      options: [
        { key: 'ss_q3_a1', value: 4, label: 'Low' },
        { key: 'ss_q3_a2', value: 3, label: 'Moderate' },
        { key: 'ss_q3_a3', value: 2, label: 'High' },
        { key: 'ss_q3_a4', value: 1, label: 'Very High' }
      ]
    },
    {
      id: 'sitting',
      key: 'ss_q4',
      category: 'activity',
      icon: '\uD83E\uDE91',
      options: [
        { key: 'ss_q4_a1', value: 4, label: 'Less than 4 hours' },
        { key: 'ss_q4_a2', value: 3, label: '4\u20136 hours' },
        { key: 'ss_q4_a3', value: 2, label: '6\u20138 hours' },
        { key: 'ss_q4_a4', value: 1, label: '8+ hours' }
      ]
    },
    {
      id: 'alcohol',
      key: 'ss_q5',
      category: 'nutrition',
      icon: '\uD83C\uDF77',
      options: [
        { key: 'ss_q5_a1', value: 4, label: 'Rarely / Never' },
        { key: 'ss_q5_a2', value: 3, label: '1\u20132 times weekly' },
        { key: 'ss_q5_a3', value: 2, label: '3\u20135 times weekly' },
        { key: 'ss_q5_a4', value: 1, label: 'Daily' }
      ]
    },
    {
      id: 'urinary',
      key: 'ss_q6',
      category: 'urinary',
      icon: '\uD83D\uDCA7',
      optional: true,
      options: [
        { key: 'ss_q6_a1', value: 4, label: 'None' },
        { key: 'ss_q6_a2', value: 3, label: 'Occasional' },
        { key: 'ss_q6_a3', value: 2, label: 'Frequent' },
        { key: 'ss_q6_a4', value: 1, label: 'Constant' }
      ]
    },
    {
      id: 'pelvic',
      key: 'ss_q7',
      category: 'pelvic',
      icon: '\uD83C\uDFCB\uFE0F',
      optional: true,
      options: [
        { key: 'ss_q7_a1', value: 4, label: 'No tension' },
        { key: 'ss_q7_a2', value: 3, label: 'Occasional' },
        { key: 'ss_q7_a3', value: 2, label: 'Frequent' },
        { key: 'ss_q7_a4', value: 1, label: 'Constant' }
      ]
    },
    {
      id: 'erection',
      key: 'ss_q8',
      category: 'sexual_health',
      icon: '\uD83C\uDF05',
      optional: true,
      options: [
        { key: 'ss_q8_a1', value: 4, label: 'Consistent' },
        { key: 'ss_q8_a2', value: 3, label: 'Mostly' },
        { key: 'ss_q8_a3', value: 2, label: 'Sometimes' },
        { key: 'ss_q8_a4', value: 1, label: 'Rarely' }
      ]
    }
  ];

  // ========== RECOMMENDATION ENGINE ==========
  const recommendations = {
    sleep: {
      title_key: 'ss_rec_sleep_title',
      title: 'Improve Sleep Quality',
      actions: [
        { key: 'ss_rec_sleep_1', text: 'Set a consistent bedtime and wake time, even on weekends.' },
        { key: 'ss_rec_sleep_2', text: 'Avoid screens 60 minutes before bed and keep your room cool (65\u201368\u00b0F).' },
        { key: 'ss_rec_sleep_3', text: 'Consider magnesium glycinate (200\u2013400mg) before bed for deeper sleep.' }
      ]
    },
    body_composition: {
      title_key: 'ss_rec_waist_title',
      title: 'Manage Body Composition',
      actions: [
        { key: 'ss_rec_waist_1', text: 'Aim for 150+ minutes of moderate exercise per week.' },
        { key: 'ss_rec_waist_2', text: 'Reduce processed food intake and focus on whole foods, lean protein, and vegetables.' },
        { key: 'ss_rec_waist_3', text: 'Track waist measurements monthly\u2014visceral fat directly impacts prostate inflammation.' }
      ]
    },
    stress: {
      title_key: 'ss_rec_stress_title',
      title: 'Reduce Chronic Stress',
      actions: [
        { key: 'ss_rec_stress_1', text: 'Practice 5\u201310 minutes of daily breathwork or meditation.' },
        { key: 'ss_rec_stress_2', text: 'Take regular breaks during work\u2014try the Pomodoro technique.' },
        { key: 'ss_rec_stress_3', text: 'Chronic cortisol raises inflammation. Prioritize recovery days in your routine.' }
      ]
    },
    activity: {
      title_key: 'ss_rec_sitting_title',
      title: 'Reduce Sitting Time',
      actions: [
        { key: 'ss_rec_sitting_1', text: 'Stand or walk for 5 minutes every 45 minutes of sitting.' },
        { key: 'ss_rec_sitting_2', text: 'Try our Desk Reset Protocol for guided pelvic circulation exercises.' },
        { key: 'ss_rec_sitting_3', text: 'Consider a standing desk or sit-stand converter for your workspace.' }
      ]
    },
    nutrition: {
      title_key: 'ss_rec_alcohol_title',
      title: 'Optimize Alcohol Intake',
      actions: [
        { key: 'ss_rec_alcohol_1', text: 'Limit alcohol to 1\u20132 drinks per occasion, max 2\u20133 days per week.' },
        { key: 'ss_rec_alcohol_2', text: 'Choose red wine over beer or spirits if you do drink\u2014resveratrol may have protective effects.' },
        { key: 'ss_rec_alcohol_3', text: 'Stay hydrated\u2014drink water between alcoholic beverages.' }
      ]
    },
    urinary: {
      title_key: 'ss_rec_urinary_title',
      title: 'Address Urinary Health',
      actions: [
        { key: 'ss_rec_urinary_1', text: 'Practice pelvic floor exercises (Kegels) daily\u2014try our Pelvic Power Trainer.' },
        { key: 'ss_rec_urinary_2', text: 'Stay hydrated but limit fluids 2 hours before bed.' },
        { key: 'ss_rec_urinary_3', text: 'If symptoms persist or worsen, consult a urologist\u2014early evaluation matters.' }
      ]
    },
    pelvic: {
      title_key: 'ss_rec_pelvic_title',
      title: 'Release Pelvic Tension',
      actions: [
        { key: 'ss_rec_pelvic_1', text: 'Practice reverse Kegels and deep diaphragmatic breathing daily.' },
        { key: 'ss_rec_pelvic_2', text: 'Stretch hip flexors and do deep squat holds for 30 seconds, 3 times daily.' },
        { key: 'ss_rec_pelvic_3', text: 'Reduce prolonged sitting and try pelvic floor relaxation before bed.' }
      ]
    },
    sexual_health: {
      title_key: 'ss_rec_erection_title',
      title: 'Support Sexual Health',
      actions: [
        { key: 'ss_rec_erection_1', text: 'Morning erections are a key vascular health marker\u2014prioritize cardiovascular exercise.' },
        { key: 'ss_rec_erection_2', text: 'Optimize sleep, reduce stress, and limit alcohol for hormonal balance.' },
        { key: 'ss_rec_erection_3', text: 'If morning erections are consistently absent, consider discussing testosterone levels with your doctor.' }
      ]
    }
  };

  const trackingPrompts = {
    sleep: { key: 'ss_track_sleep', text: 'Track your bedtime and wake-up time for 7 days.' },
    body_composition: { key: 'ss_track_waist', text: 'Note your belt notch position at the start and end of the week.' },
    stress: { key: 'ss_track_stress', text: 'Rate your daily stress level (1\u201310) each evening this week.' },
    activity: { key: 'ss_track_sitting', text: 'Log your sitting hours each day this week.' },
    nutrition: { key: 'ss_track_alcohol', text: 'Record every drink you have this week\u2014awareness is the first step.' },
    urinary: { key: 'ss_track_urinary', text: 'Note nighttime bathroom trips and any urgency episodes this week.' },
    pelvic: { key: 'ss_track_pelvic', text: 'Do a 2-minute body scan each morning\u2014notice where you hold pelvic tension.' },
    sexual_health: { key: 'ss_track_erection', text: 'Note morning erection presence and quality for 7 consecutive days.' }
  };

  // ========== STATE ==========
  let currentStep = 0;
  let answers = {};
  const totalQuestions = questions.length;

  // ========== DOM REFERENCES ==========
  let assessmentEl, progressFill, progressText, stepsContainer, resultContainer;

  // ========== TRANSLATION HELPER ==========
  function t(key, fallback) {
    if (typeof PA !== 'undefined' && PA.t) {
      const val = PA.t(key);
      return val !== key ? val : (fallback || key);
    }
    return fallback || key;
  }

  // ========== INITIALIZATION ==========
  function init() {
    assessmentEl = document.getElementById('ss-assessment');
    if (!assessmentEl) return;

    progressFill = assessmentEl.querySelector('.ss-progress-fill');
    progressText = assessmentEl.querySelector('.ss-progress-text');
    stepsContainer = assessmentEl.querySelector('.ss-steps');
    resultContainer = assessmentEl.querySelector('.ss-result');

    buildQuestions();
    showStep(0);
    bindKeyboardNav();
  }

  // ========== BUILD QUESTIONS ==========
  function buildQuestions() {
    if (!stepsContainer) return;
    stepsContainer.innerHTML = '';

    questions.forEach(function(q, idx) {
      var step = document.createElement('div');
      step.className = 'ss-step';
      step.dataset.step = idx;
      step.setAttribute('role', 'group');
      step.setAttribute('aria-labelledby', 'ss-q-title-' + idx);

      var questionTitle = t(q.key, getDefaultQuestion(q.id));
      var optionalTag = q.optional
        ? ' <span class="ss-optional-tag" data-i18n="ss_optional">(' + t('ss_optional', 'Optional') + ')</span>'
        : '';

      var html = '<div class="ss-question-header">';
      html += '<span class="ss-question-icon" aria-hidden="true">' + q.icon + '</span>';
      html += '<h3 id="ss-q-title-' + idx + '" class="ss-question-title">';
      html += '<span data-i18n="' + q.key + '">' + questionTitle + '</span>';
      html += optionalTag;
      html += '</h3>';
      html += '</div>';

      html += '<div class="quiz-options ss-options" role="radiogroup" aria-labelledby="ss-q-title-' + idx + '">';
      q.options.forEach(function(opt) {
        var optLabel = t(opt.key, opt.label);
        html += '<div class="quiz-option ss-option" data-value="' + opt.value + '" data-question="' + idx + '" role="radio" tabindex="0" aria-checked="false" aria-label="' + optLabel + '">';
        html += '<div class="quiz-radio"></div>';
        html += '<span class="quiz-label" data-i18n="' + opt.key + '">' + optLabel + '</span>';
        html += '</div>';
      });
      html += '</div>';

      html += '<div class="quiz-nav ss-nav">';
      if (idx > 0) {
        html += '<button class="btn btn-ghost ss-back" type="button" data-i18n="ss_back">' + t('ss_back', 'Back') + '</button>';
      } else {
        html += '<div></div>';
      }
      if (idx < totalQuestions - 1) {
        var nextLabel = q.optional ? t('ss_skip_or_next', 'Skip / Next') : t('ss_next', 'Next');
        var nextKey = q.optional ? 'ss_skip_or_next' : 'ss_next';
        html += '<button class="btn btn-primary ss-next" type="button" data-i18n="' + nextKey + '">' + nextLabel + '</button>';
      } else {
        html += '<button class="btn btn-accent ss-submit" type="button" data-i18n="ss_see_results">' + t('ss_see_results', 'See My Results') + '</button>';
      }
      html += '</div>';

      step.innerHTML = html;
      stepsContainer.appendChild(step);
    });

    // Bind option clicks
    stepsContainer.querySelectorAll('.ss-option').forEach(function(opt) {
      opt.addEventListener('click', function() { selectOption(opt); });
      opt.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectOption(opt);
        }
      });
    });

    // Bind nav buttons
    stepsContainer.querySelectorAll('.ss-back').forEach(function(btn) {
      btn.addEventListener('click', function() { prevStep(); });
    });
    stepsContainer.querySelectorAll('.ss-next').forEach(function(btn) {
      btn.addEventListener('click', function() { nextStep(); });
    });
    stepsContainer.querySelectorAll('.ss-submit').forEach(function(btn) {
      btn.addEventListener('click', function() { submitAssessment(); });
    });
  }

  // ========== DEFAULT QUESTION TEXT ==========
  function getDefaultQuestion(id) {
    var defaults = {
      sleep: 'How would you rate your overall sleep quality?',
      waist: 'How does your belt or waistband typically fit?',
      stress: 'What is your general stress level?',
      sitting: 'How many hours do you sit on a typical day?',
      alcohol: 'How often do you consume alcohol?',
      urinary: 'Do you experience any urinary symptoms?',
      pelvic: 'Are you aware of tension in your pelvic area?',
      erection: 'How consistent are your morning erections?'
    };
    return defaults[id] || '';
  }

  // ========== OPTION SELECTION ==========
  function selectOption(opt) {
    var qIdx = parseInt(opt.dataset.question);
    var value = parseInt(opt.dataset.value);

    // Deselect siblings
    var step = opt.closest('.ss-step');
    step.querySelectorAll('.ss-option').forEach(function(o) {
      o.classList.remove('selected');
      o.setAttribute('aria-checked', 'false');
    });

    opt.classList.add('selected');
    opt.setAttribute('aria-checked', 'true');
    answers[qIdx] = value;

    // Update next button state for required questions
    var q = questions[qIdx];
    var nextBtn = step.querySelector('.ss-next, .ss-submit');
    if (nextBtn && !q.optional) {
      nextBtn.classList.remove('btn-ghost');
      nextBtn.classList.add(qIdx === totalQuestions - 1 ? 'btn-accent' : 'btn-primary');
    }
  }

  // ========== STEP NAVIGATION ==========
  function showStep(idx) {
    currentStep = idx;
    var steps = stepsContainer.querySelectorAll('.ss-step');
    steps.forEach(function(s, i) {
      if (i === idx) {
        s.style.display = 'block';
        s.style.animation = 'fadeInUp 0.4s ease both';
        // Focus first option or selected option
        setTimeout(function() {
          var selected = s.querySelector('.ss-option.selected');
          var target = selected || s.querySelector('.ss-option');
          if (target) target.focus();
        }, 100);
      } else {
        s.style.display = 'none';
      }
    });

    updateProgress(idx);
  }

  function nextStep() {
    var q = questions[currentStep];
    // Require answer for non-optional questions
    if (!q.optional && answers[currentStep] === undefined) {
      shakeOptions(currentStep);
      return;
    }
    if (currentStep < totalQuestions - 1) {
      showStep(currentStep + 1);
    }
  }

  function prevStep() {
    if (currentStep > 0) {
      showStep(currentStep - 1);
    }
  }

  function shakeOptions(stepIdx) {
    var step = stepsContainer.querySelectorAll('.ss-step')[stepIdx];
    if (!step) return;
    var options = step.querySelectorAll('.ss-option');
    options.forEach(function(o) {
      o.style.animation = 'none';
      o.offsetHeight; // trigger reflow
      o.style.animation = 'shake 0.4s ease';
    });
  }

  function updateProgress(idx) {
    var pct = ((idx + 1) / totalQuestions * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) {
      progressText.textContent = t('ss_question', 'Question') + ' ' + (idx + 1) + ' ' + t('ss_of', 'of') + ' ' + totalQuestions;
    }
  }

  // ========== KEYBOARD NAVIGATION ==========
  function bindKeyboardNav() {
    document.addEventListener('keydown', function(e) {
      if (!assessmentEl || resultContainer.style.display === 'block') return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        moveFocusOption(1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        moveFocusOption(-1);
      } else if (e.key === 'Enter') {
        var active = document.activeElement;
        if (active && active.classList.contains('ss-option')) {
          return; // handled by option keydown
        }
      }
    });
  }

  function moveFocusOption(dir) {
    var step = stepsContainer.querySelectorAll('.ss-step')[currentStep];
    if (!step) return;
    var options = Array.from(step.querySelectorAll('.ss-option'));
    var focused = document.activeElement;
    var idx = options.indexOf(focused);
    if (idx === -1) {
      options[0].focus();
      return;
    }
    var next = idx + dir;
    if (next >= 0 && next < options.length) {
      options[next].focus();
    }
  }

  // ========== SUBMIT & CALCULATE ==========
  function submitAssessment() {
    var lastQ = questions[totalQuestions - 1];
    if (!lastQ.optional && answers[totalQuestions - 1] === undefined) {
      shakeOptions(totalQuestions - 1);
      return;
    }

    var result = calculateScore();
    showResults(result);
    saveResults(result);
  }

  function calculateScore() {
    var totalPossible = 0;
    var totalEarned = 0;
    var categoryScores = {};
    var weakest = [];

    questions.forEach(function(q, idx) {
      var val = answers[idx];
      if (val !== undefined) {
        totalPossible += 4;
        totalEarned += val;
        categoryScores[q.category] = val;
      }
    });

    // If no questions answered (shouldn't happen), default
    if (totalPossible === 0) {
      totalPossible = 32;
      totalEarned = 16;
    }

    var percentage = Math.round((totalEarned / totalPossible) * 100);

    // Determine tier
    var tier, tierClass, tierKey;
    if (percentage >= 85) {
      tier = 'Elite'; tierClass = 'elite'; tierKey = 'ss_tier_elite';
    } else if (percentage >= 65) {
      tier = 'Strong'; tierClass = 'strong'; tierKey = 'ss_tier_strong';
    } else if (percentage >= 40) {
      tier = 'Developing'; tierClass = 'developing'; tierKey = 'ss_tier_developing';
    } else {
      tier = 'Foundational'; tierClass = 'foundational'; tierKey = 'ss_tier_foundational';
    }

    // Find weakest areas (lowest scores, up to 3)
    var sortedCategories = Object.keys(categoryScores).sort(function(a, b) {
      return categoryScores[a] - categoryScores[b];
    });

    sortedCategories.forEach(function(cat) {
      if (categoryScores[cat] <= 2 && weakest.length < 3) {
        weakest.push(cat);
      }
    });

    // If we don't have 3, add next lowest
    if (weakest.length < 3) {
      sortedCategories.forEach(function(cat) {
        if (weakest.indexOf(cat) === -1 && categoryScores[cat] <= 3 && weakest.length < 3) {
          weakest.push(cat);
        }
      });
    }

    // If still not 3, just take top 3 sorted
    if (weakest.length < 3) {
      sortedCategories.forEach(function(cat) {
        if (weakest.indexOf(cat) === -1 && weakest.length < 3) {
          weakest.push(cat);
        }
      });
    }

    return {
      totalEarned: totalEarned,
      totalPossible: totalPossible,
      percentage: percentage,
      tier: tier,
      tierClass: tierClass,
      tierKey: tierKey,
      categoryScores: categoryScores,
      weakestAreas: weakest,
      answers: Object.assign({}, answers)
    };
  }

  // ========== DISPLAY RESULTS ==========
  function showResults(result) {
    if (!resultContainer) return;

    // Hide steps, show result
    stepsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.style.animation = 'scaleIn 0.5s ease both';

    // Update progress to 100%
    if (progressFill) progressFill.style.width = '100%';
    if (progressText) progressText.textContent = t('ss_complete', 'Assessment Complete');

    // Animate score ring
    var scoreValue = resultContainer.querySelector('.ss-score-value');
    var scoreFill = resultContainer.querySelector('.ss-score-ring-fill');
    var tierBadge = resultContainer.querySelector('.ss-tier-badge');
    var tierTitle = resultContainer.querySelector('.ss-tier-title');
    var tierDesc = resultContainer.querySelector('.ss-tier-desc');
    var actionsContainer = resultContainer.querySelector('.ss-actions-list');
    var trackingContainer = resultContainer.querySelector('.ss-tracking-list');

    // Animate number count
    if (scoreValue) {
      var current = 0;
      var target = result.percentage;
      var interval = setInterval(function() {
        current += Math.ceil(target / 50);
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        scoreValue.textContent = current;
      }, 20);
    }

    // Animate SVG ring
    if (scoreFill) {
      var circumference = 2 * Math.PI * 80;
      scoreFill.style.strokeDasharray = circumference;
      scoreFill.style.strokeDashoffset = circumference;
      setTimeout(function() {
        scoreFill.style.strokeDashoffset = circumference * (1 - result.percentage / 100);
      }, 100);
    }

    // Set ring color based on tier
    if (scoreFill) {
      var ringColors = {
        elite: 'var(--color-primary)',
        strong: 'var(--color-success)',
        developing: 'var(--color-warning)',
        foundational: 'var(--color-danger)'
      };
      scoreFill.style.stroke = ringColors[result.tierClass] || 'var(--color-primary)';
    }
    if (scoreValue) {
      var valueColors = {
        elite: 'var(--color-primary)',
        strong: 'var(--color-success)',
        developing: 'var(--color-warning)',
        foundational: 'var(--color-danger)'
      };
      scoreValue.style.color = valueColors[result.tierClass] || 'var(--color-primary)';
    }

    // Tier badge
    if (tierBadge) {
      var badgeClasses = {
        elite: 'badge-primary',
        strong: 'badge-success',
        developing: 'badge-warning',
        foundational: 'badge-danger'
      };
      tierBadge.className = 'card-badge ss-tier-badge ' + (badgeClasses[result.tierClass] || 'badge-primary');
      tierBadge.textContent = t(result.tierKey, result.tier);
    }

    // Tier title and description
    if (tierTitle) {
      tierTitle.textContent = t('ss_result_title', 'Your Prostate Strength Score');
    }
    if (tierDesc) {
      var descs = {
        elite: t('ss_tier_elite_desc', 'Outstanding! Your lifestyle strongly supports prostate health. Maintain these habits and inspire others.'),
        strong: t('ss_tier_strong_desc', 'Great foundation! A few targeted improvements can elevate your prostate resilience even further.'),
        developing: t('ss_tier_developing_desc', 'You have room to grow. Focus on 1\u20132 key areas this week for meaningful improvement.'),
        foundational: t('ss_tier_foundational_desc', 'This is your starting point. Small changes compound over time\u2014begin with the top action item below.')
      };
      tierDesc.textContent = descs[result.tierClass] || '';
    }

    // Personalized actions
    if (actionsContainer) {
      actionsContainer.innerHTML = '';
      result.weakestAreas.forEach(function(cat, i) {
        var rec = recommendations[cat];
        if (!rec) return;

        var card = document.createElement('div');
        card.className = 'ss-action-card';
        card.style.animationDelay = (0.2 + i * 0.15) + 's';

        var actionHtml = '<h4 class="ss-action-title">';
        actionHtml += '<span class="ss-action-num">' + (i + 1) + '</span>';
        actionHtml += '<span data-i18n="' + rec.title_key + '">' + t(rec.title_key, rec.title) + '</span>';
        actionHtml += '</h4>';
        actionHtml += '<ul class="ss-action-items">';
        rec.actions.forEach(function(a) {
          actionHtml += '<li data-i18n="' + a.key + '">' + t(a.key, a.text) + '</li>';
        });
        actionHtml += '</ul>';

        card.innerHTML = actionHtml;
        actionsContainer.appendChild(card);
      });
    }

    // Tracking prompts
    if (trackingContainer) {
      trackingContainer.innerHTML = '';
      result.weakestAreas.forEach(function(cat) {
        var prompt = trackingPrompts[cat];
        if (!prompt) return;

        var item = document.createElement('div');
        item.className = 'ss-tracking-item';

        var trackHtml = '<span class="ss-tracking-icon" aria-hidden="true">&#9744;</span>';
        trackHtml += '<span data-i18n="' + prompt.key + '">' + t(prompt.key, prompt.text) + '</span>';

        item.innerHTML = trackHtml;
        trackingContainer.appendChild(item);
      });
    }

    // Scroll to results
    setTimeout(function() {
      resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }

  // ========== SAVE RESULTS ==========
  function saveResults(result) {
    if (typeof PA_Storage !== 'undefined' && PA_Storage.saveScore) {
      PA_Storage.saveScore({
        type: 'strength-score',
        score: result.percentage,
        tier: result.tier,
        tierClass: result.tierClass,
        totalEarned: result.totalEarned,
        totalPossible: result.totalPossible,
        categoryScores: result.categoryScores,
        weakestAreas: result.weakestAreas,
        answers: result.answers
      });
    }
  }

  function saveResultManually() {
    var result = calculateScore();
    saveResults(result);
    // Show feedback
    var saveBtn = resultContainer.querySelector('.ss-save-btn');
    if (saveBtn) {
      var originalText = saveBtn.textContent;
      saveBtn.textContent = t('ss_saved', 'Saved!');
      saveBtn.classList.add('btn-success-flash');
      setTimeout(function() {
        saveBtn.textContent = originalText;
        saveBtn.classList.remove('btn-success-flash');
      }, 2000);
    }
  }

  // ========== RESET ==========
  function reset() {
    currentStep = 0;
    answers = {};

    if (stepsContainer) {
      stepsContainer.style.display = 'block';
      stepsContainer.querySelectorAll('.ss-option').forEach(function(o) {
        o.classList.remove('selected');
        o.setAttribute('aria-checked', 'false');
      });
    }

    if (resultContainer) {
      resultContainer.style.display = 'none';
    }

    showStep(0);

    // Scroll to assessment
    if (assessmentEl) {
      assessmentEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ========== RUN ON LOAD ==========
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  return {
    init: init,
    reset: reset,
    saveResult: saveResultManually
  };
})();
