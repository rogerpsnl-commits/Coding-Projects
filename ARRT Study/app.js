// ================================================================
//  APP STATE
// ================================================================
let mode       = 'flashcard';
let category   = 'all';
let filteredQ  = [];
let cardIndex  = 0;
let isFlipped  = false;
let quizIndex  = 0;
let quizAnswered = false;
let score      = 0;
let streak     = 0;
let bestStreak = 0;
let totalAnswered = 0;
let totalCorrect  = 0;
let catStats = {};

// ================================================================
//  TIMER
// ================================================================
let timerInterval = null;
let timerStart    = 0;

function startTimer() {
  stopTimer();
  timerStart = Date.now();
  const el = document.getElementById('quiz-timer');
  el.classList.remove('slow');
  timerInterval = setInterval(() => {
    const secs = Math.floor((Date.now() - timerStart) / 1000);
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    el.textContent = m + ':' + String(s).padStart(2, '0');
    el.classList.toggle('slow', secs >= 30);
  }, 500);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function elapsedLabel() {
  const secs = Math.floor((Date.now() - timerStart) / 1000);
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

// ================================================================
//  PERSISTENCE
// ================================================================
const STORAGE_KEY = 'arrt_stats';

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveStats() {
  const data = {
    totalAnswered, totalCorrect, score,
    bestStreak: Math.max(bestStreak, streak),
    catStats,
    savedAt: new Date().toLocaleDateString()
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function resetSaved() {
  localStorage.removeItem(STORAGE_KEY);
  totalAnswered = 0; totalCorrect = 0; score = 0; bestStreak = 0; streak = 0;
  ['Patient Care','Safety','Image Production','Procedures'].forEach(c => {
    catStats[c] = { answered:0, correct:0 };
  });
  document.getElementById('hdr-score').textContent  = 0;
  document.getElementById('hdr-streak').textContent = 0;
  renderStats();
}

// ================================================================
//  INIT
// ================================================================
function init() {
  ['Patient Care','Safety','Image Production','Procedures'].forEach(c => {
    catStats[c] = { answered:0, correct:0 };
  });
  const saved = loadSaved();
  if (saved) {
    totalAnswered = saved.totalAnswered || 0;
    totalCorrect  = saved.totalCorrect  || 0;
    score         = saved.score         || 0;
    bestStreak    = saved.bestStreak    || 0;
    ['Patient Care','Safety','Image Production','Procedures'].forEach(c => {
      if (saved.catStats && saved.catStats[c]) catStats[c] = saved.catStats[c];
    });
    document.getElementById('hdr-score').textContent  = score;
    document.getElementById('hdr-streak').textContent = bestStreak;
  }
  filterQuestions();
  renderFlashcard();
  renderStats();
}

function filterQuestions() {
  filteredQ = category === 'all'
    ? [...QUESTIONS]
    : QUESTIONS.filter(q => q.cat === category);
  for (let i = filteredQ.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredQ[i], filteredQ[j]] = [filteredQ[j], filteredQ[i]];
  }
}

// ================================================================
//  MODE & CATEGORY
// ================================================================
function setMode(m) {
  mode = m;
  document.querySelectorAll('.tab-btn').forEach((b,i) => {
    b.classList.toggle('active', ['flashcard','quiz','stats'][i] === m);
  });
  document.getElementById('flashcard-mode').style.display = m==='flashcard' ? '' : 'none';
  document.getElementById('quiz-mode').style.display      = m==='quiz'      ? '' : 'none';
  document.getElementById('stats-mode').style.display     = m==='stats'     ? '' : 'none';
  if (m==='quiz')  startQuiz();
  if (m==='stats') renderStats();
}

function setCategory(c) {
  category = c;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === c);
  });
  filterQuestions();
  cardIndex = 0;
  isFlipped = false;
  quizIndex = 0;
  if (mode==='flashcard') renderFlashcard();
  if (mode==='quiz')      startQuiz();
}

// ================================================================
//  FLASHCARD
// ================================================================
function renderFlashcard() {
  if (!filteredQ.length) return;
  const q = filteredQ[cardIndex];

  isFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');

  document.getElementById('card-cat-badge').textContent      = q.cat + ' · ' + q.sub;
  document.getElementById('card-cat-badge-back').textContent = q.cat;
  document.getElementById('card-question').textContent       = q.q;
  document.getElementById('card-answer').textContent         = q.opts[q.a];
  document.getElementById('card-explanation').textContent    = q.exp;
  document.getElementById('card-sub').textContent            = q.sub;

  updateProgress(cardIndex + 1, filteredQ.length);
}

function flipCard() {
  isFlipped = !isFlipped;
  document.getElementById('flashcard').classList.toggle('flipped', isFlipped);
}

function nextCard() {
  cardIndex = (cardIndex + 1) % filteredQ.length;
  renderFlashcard();
}

function prevCard() {
  cardIndex = (cardIndex - 1 + filteredQ.length) % filteredQ.length;
  renderFlashcard();
}

function shuffleCards() {
  for (let i = filteredQ.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredQ[i], filteredQ[j]] = [filteredQ[j], filteredQ[i]];
  }
  cardIndex = 0;
  renderFlashcard();
}

// ================================================================
//  QUIZ
// ================================================================
function startQuiz() {
  filterQuestions();
  for (let i = filteredQ.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredQ[i], filteredQ[j]] = [filteredQ[j], filteredQ[i]];
  }
  quizIndex = 0;
  score = 0; streak = 0; totalAnswered = 0; totalCorrect = 0;
  document.getElementById('score-summary').classList.remove('show');
  document.getElementById('quiz-card').style.display = '';
  hideBanner();
  renderQuizQuestion();
}

function renderQuizQuestion() {
  if (quizIndex >= filteredQ.length) { showSummary(); return; }
  const q = filteredQ[quizIndex];
  quizAnswered = false;

  document.getElementById('quiz-cat-badge').textContent = q.cat + ' · ' + q.sub;

  document.getElementById('quiz-question').textContent = q.q;

  const grid = document.getElementById('options-grid');
  grid.innerHTML = '';
  ['A','B','C','D','E'].slice(0, q.opts.length).forEach((letter, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${letter}</span><span>${q.opts[i]}</span>`;
    btn.onclick = () => answerQuiz(i, q);
    grid.appendChild(btn);
  });

  // Reset drill panel
  document.getElementById('drill-panel').classList.remove('show');
  document.getElementById('quiz-next-btn').classList.remove('show');
  updateProgress(quizIndex + 1, filteredQ.length);
}

function answerQuiz(chosen, q) {
  if (quizAnswered) return;
  quizAnswered = true;
  totalAnswered++;

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  const correct = (chosen === q.a);
  if (correct) {
    totalCorrect++;
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    catStats[q.cat].correct++;
    score += 10;
    showStreak();
    burstPets();
  } else {
    streak = 0;
    hideBanner();
  }
  catStats[q.cat].answered++;

  // Highlight options
  btns.forEach((btn, i) => {
    if (i === q.a) {
      btn.classList.add('correct');
    } else if (i === chosen && !correct) {
      btn.classList.add('wrong-chosen');
    } else {
      btn.classList.add('wrong-unchosen');
    }
  });

  // Build drill-down panel
  const verdict = document.getElementById('drill-verdict');
  verdict.textContent = correct ? '✓ Correct!' : '✗ Incorrect';
  verdict.className   = 'drill-verdict ' + (correct ? 'correct' : 'incorrect');

  document.getElementById('drill-correct-exp').textContent = q.exp;

  const list = document.getElementById('drill-options-list');
  list.innerHTML = '';
  const letters = ['A','B','C','D','E'];
  q.opts.forEach((opt, i) => {
    const row = document.createElement('div');
    const isCorrectOpt  = (i === q.a);
    const wasChosen     = (i === chosen);
    row.className = 'drill-option-row' +
      (isCorrectOpt ? ' was-correct' : '') +
      (!isCorrectOpt && wasChosen ? ' was-chosen' : '');
    row.innerHTML = `
      <div class="drill-opt-letter">${letters[i]}</div>
      <div class="drill-opt-body">
        <div class="drill-opt-text">${opt}</div>
        <div class="drill-opt-exp">${q.oe ? q.oe[i] : ''}</div>
      </div>`;
    list.appendChild(row);
  });

  document.getElementById('drill-panel').classList.add('show');
  document.getElementById('quiz-next-btn').classList.add('show');
  document.getElementById('hdr-score').textContent  = score;
  document.getElementById('hdr-streak').textContent = streak;
  saveStats();
}

function nextQuizQuestion() {
  quizIndex++;
  renderQuizQuestion();
}

function restartQuiz() {
  document.getElementById('score-summary').classList.remove('show');
  document.getElementById('quiz-card').style.display = '';
  startQuiz();
}

function showSummary() {
  document.getElementById('quiz-card').style.display = 'none';
  const summary = document.getElementById('score-summary');
  summary.classList.add('show');

  const pct = Math.round((totalCorrect / totalAnswered) * 100);
  document.getElementById('score-pct-big').textContent = pct + '%';
  document.getElementById('score-fraction').textContent = totalCorrect + '/' + totalAnswered;

  const circle = document.getElementById('score-circle');
  circle.className = 'score-circle';
  let cls, msg;
  if      (pct >= 90) { cls='great';      msg='Outstanding! You\'re exam-ready!'; }
  else if (pct >= 75) { cls='good';       msg='Great work — keep refining weak areas.'; }
  else if (pct >= 60) { cls='needs-work'; msg='Good start — review and try again!'; }
  else                { cls='poor';       msg='More review needed — you\'ve got this!'; }
  circle.classList.add(cls);
  document.getElementById('score-title').textContent   = pct >= 75 ? 'Great Job!' : 'Quiz Complete';
  document.getElementById('score-message').textContent = msg;

  document.getElementById('score-breakdown').innerHTML = `
    <div class="breakdown-item"><div class="label">Score</div><div class="value">${score} pts</div></div>
    <div class="breakdown-item"><div class="label">Best Streak</div><div class="value">${bestStreak} 🔥</div></div>
    <div class="breakdown-item"><div class="label">Correct</div><div class="value" style="color:var(--correct)">${totalCorrect}</div></div>
    <div class="breakdown-item"><div class="label">Incorrect</div><div class="value" style="color:var(--wrong)">${totalAnswered - totalCorrect}</div></div>
  `;
}

// ================================================================
//  STATS
// ================================================================
function renderStats() {
  const cats   = ['Patient Care','Safety','Image Production','Procedures'];
  const shades = ['#c2185b','#ad1457','#880e4f','#e91e63'];
  document.getElementById('cat-stats').innerHTML = cats.map((c,i) => {
    const s   = catStats[c];
    const pct = s.answered > 0 ? Math.round((s.correct / s.answered) * 100) : 0;
    return `<div class="cat-stat-row">
      <span class="cat-stat-label">${c}</span>
      <div class="cat-stat-bar-wrap">
        <div class="cat-stat-bar" style="width:${pct}%;background:${shades[i]}"></div>
      </div>
      <span class="cat-stat-count">${s.answered > 0 ? pct + '%' : '—'}</span>
    </div>`;
  }).join('');

  const saved = loadSaved();
  const since = saved && saved.savedAt ? `<div style="color:var(--rose);margin-top:6px;font-size:0.8rem">Last saved: ${saved.savedAt}</div>` : '';
  document.getElementById('session-stats').innerHTML = `
    <div>Questions attempted: <strong>${totalAnswered}</strong></div>
    <div>Correct answers: <strong>${totalCorrect}</strong></div>
    <div>Overall accuracy: <strong>${totalAnswered > 0 ? Math.round(totalCorrect/totalAnswered*100) : 0}%</strong></div>
    <div>Best streak: <strong>${bestStreak} 🔥</strong></div>
    <div>Total score: <strong>${score} pts</strong></div>
    ${since}
    <button onclick="resetSaved()" style="margin-top:14px;padding:7px 18px;background:var(--pink-light);color:var(--pink-dark);border:1px solid var(--border);border-radius:8px;cursor:pointer;font-size:0.82rem;font-weight:600;">Reset All Stats</button>
  `;
}

// ================================================================
//  HELPERS
// ================================================================
function updateProgress(current, total) {
  const pct = Math.round(((current - 1) / total) * 100);
  document.getElementById('progress-label').textContent = (mode==='quiz' ? 'Question ' : 'Card ') + current + ' of ' + total;
  document.getElementById('progress-fill').style.width  = pct + '%';
  document.getElementById('progress-pct').textContent   = pct + '%';
  document.getElementById('card-counter').textContent   = current + ' / ' + total;
}

function showStreak() {
  if (streak < 3) return;
  const msgs = { 3:'on a roll!', 5:'on fire!', 10:'unstoppable!', 15:'ARRT champion!' };
  const key  = Object.keys(msgs).reverse().find(k => streak >= +k);
  if (key) {
    document.getElementById('streak-text').textContent = streak + ' in a row — ' + msgs[key];
    document.getElementById('streak-banner').classList.add('show');
  }
}

function hideBanner() {
  document.getElementById('streak-banner').classList.remove('show');
}

// ================================================================
//  PET CELEBRATION
// ================================================================
const PETS = ['🐶','🐱','🐾','🐕','🐈','🦴','🐩','😺','🐾','🐶'];

function burstPets() {
  const count = 6;
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className = 'pet-burst';
      el.textContent = PETS[Math.floor(Math.random() * PETS.length)];
      el.style.left = (15 + Math.random() * 70) + 'vw';
      el.style.top  = (30 + Math.random() * 40) + 'vh';
      el.style.animationDelay = (Math.random() * 0.2) + 's';
      document.body.appendChild(el);
      el.addEventListener('animationend', () => el.remove());
    }, i * 80);
  }
}

// ================================================================
init();
