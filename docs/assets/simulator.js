(function() {
  const SIM_BANK_URL = '../assets/questions-bank.json';
  let questionBank = [];
  let currentQuestion = null;
  let sessionCount = 0;
  let sessionStreak = 0;

  async function loadBank() {
    try {
      const resp = await fetch(SIM_BANK_URL);
      if (!resp.ok) throw new Error('Question bank could not be loaded.');
      questionBank = await resp.json();
      initUI();
    } catch (e) {
      document.getElementById('sim-question').textContent = 'Error loading simulator. Please try again later.';
      console.error(e);
    }
  }

  function initUI() {
    const revealBtn = document.getElementById('sim-reveal-btn');
    const nextBtn = document.getElementById('sim-next-btn');

    revealBtn.addEventListener('click', () => {
      document.getElementById('sim-answer-box').style.display = 'block';
      revealBtn.disabled = true;
      sessionStreak++;
      updateStats();
    });

    nextBtn.addEventListener('click', showNext);

    showNext();
  }

  function showNext() {
    if (questionBank.length === 0) return;
    
    // Choose random
    const idx = Math.floor(Math.random() * questionBank.length);
    currentQuestion = questionBank[idx];
    
    // Reset UI
    const answerBox = document.getElementById('sim-answer-box');
    answerBox.style.display = 'none';
    
    document.getElementById('sim-question').textContent = currentQuestion.concept;
    document.getElementById('sim-answer-text').textContent = currentQuestion.answer;
    document.getElementById('sim-example-text').textContent = currentQuestion.example;
    document.getElementById('sim-category').textContent = currentQuestion.category || 'General Security';
    document.getElementById('sim-id').textContent = '#' + String(currentQuestion.id).padStart(3, '0');
    
    document.getElementById('sim-reveal-btn').disabled = false;
    
    sessionCount++;
    updateStats();
  }

  function updateStats() {
    document.getElementById('sim-stat-count').textContent = sessionCount;
    document.getElementById('sim-stat-streak').textContent = sessionStreak;
  }

  // MkDocs Navigation support
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(() => {
        if (document.getElementById('sim-container')) loadBank();
    });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('sim-container')) loadBank();
    });
  }
})();
