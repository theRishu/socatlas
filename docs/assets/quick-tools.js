(function() {
  /* --- SOCAtlas Robust Progress & Autoplay Engine --- */
  
  const STORAGE_PREFIX = 'socatlas-progress-';
  const QUICK_PATH_KEY = 'quick-points';
  const GUIDED_PATH_KEY = 'guided-pages';

  function getStorage(key) {
    try {
      const data = localStorage.getItem(STORAGE_PREFIX + key);
      return data ? JSON.parse(data) : {};
    } catch { return {}; }
  }

  function setStorage(key, data) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
    } catch {}
  }

  // Universal ID generator for pages (fundamentals/introduction, etc)
  function getPathId(p) {
    if (!p) return 'none';
    try {
        let clean = p.split('#')[0].split('?')[0];
        if (clean.includes('://')) clean = new URL(clean).pathname;
        
        // Comprehensive normalization
        clean = clean.replace(/^\/socatlas\//, '/')  // Sub-directory host support
                     .replace(/\.html$|\.md$/g, '')  // Extension support
                     .replace(/\/$/, '')             // Trailing slash support
                     .replace(/^\//, '');            // Leading slash support
        
        return clean || 'home';
    } catch (e) {
        return 'none';
    }
  }

  // --- 1. SIDEBAR INDICATORS ---
  function updateSidebar() {
    const stored = getStorage(GUIDED_PATH_KEY);
    document.querySelectorAll('.md-nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href === '#' || href === '') return;
      
      const id = getPathId(new URL(href, window.location.href).pathname);
      if (id === 'none' || id === 'home') return;
      
      const existing = link.querySelector('.nav-check');
      if (existing) existing.remove();

      if (stored[id]) {
        const check = document.createElement('span');
        check.className = 'nav-check';
        check.innerHTML = ' ✓';
        check.style.color = '#0abf53';
        check.style.fontWeight = '800';
        link.appendChild(check);
      }
    });
  }

  // --- 2. GUIDED PATH CONTROLS (Top & Bottom) ---
  function initGuidedPath() {
    const content = document.querySelector('.md-content__inner');
    const pathId = getPathId(window.location.pathname);
    
    // Safety exit
    if (!content || window.location.pathname.includes('/quick/') || pathId === 'home') return;
    updateSidebar();

    const stored = getStorage(GUIDED_PATH_KEY);
    const isDone = !!stored[pathId];
    const wordCount = content.innerText.split(/\s+/).length || 100;
    let waitSeconds = isDone ? 0 : Math.max(5, Math.min(300, Math.round(wordCount / 200 * 60)));

    function createPanel(pos) {
        const panel = document.createElement('div');
        panel.id = `guided-ctrl-${pos}`;
        panel.className = `guided-footer-card guided-${pos}-panel`;
        panel.innerHTML = `
          <div class="guided-footer-text">
            <h3>Mastery Center</h3>
            <p id="note-${pos}"></p>
          </div>
          <div class="guided-footer-controls">
            <div class="guided-flow-settings">
              <label class="guided-flow-toggle"><input type="checkbox" class="flow-check"> <span>Guided Autoplay</span></label>
              <div class="guided-speed-wrapper">
                <input type="range" class="speed-slider" min="1" max="5" value="1" step="1">
                <span class="speed-val">1x</span>
              </div>
            </div>
            <button class="md-button guided-toggle-btn" ${waitSeconds > 0 && !isDone ? 'disabled' : ''}></button>
          </div>
        `;
        return panel;
    }

    if (!document.getElementById('guided-ctrl-top')) {
        const top = createPanel('top');
        const h1 = content.querySelector('h1');
        if (h1) h1.insertAdjacentElement('afterend', top);
    }
    if (!document.getElementById('guided-ctrl-bottom')) {
        const bottom = createPanel('bottom');
        content.appendChild(bottom);
    }

    const els = {
        flow: document.querySelectorAll('.flow-check'),
        speed: document.querySelectorAll('.speed-slider'),
        speedTxt: document.querySelectorAll('.speed-val'),
        btns: document.querySelectorAll('.guided-toggle-btn'),
        notes: document.querySelectorAll('[id^="note-"]')
    };

    let scrollInterval;
    const flowPref = localStorage.getItem('socatlas-flow-enabled') === 'true';
    const speedPref = localStorage.getItem('socatlas-flow-speed') || '1';

    els.flow.forEach(c => c.checked = flowPref);
    els.speed.forEach(s => s.value = speedPref);
    els.speedTxt.forEach(t => t.textContent = speedPref + 'x');

    function startScroll() {
        clearInterval(scrollInterval);
        if (isDone || localStorage.getItem('socatlas-flow-enabled') !== 'true') return;
        const spd = parseInt(localStorage.getItem('socatlas-flow-speed') || '1');
        const intv = Math.max(10, 60 - (spd * 10));
        scrollInterval = setInterval(() => {
            window.scrollBy(0, 1);
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) clearInterval(scrollInterval);
        }, intv);
    }

    function syncUI() {
        const d = !!getStorage(GUIDED_PATH_KEY)[pathId];
        els.btns.forEach(b => {
            b.textContent = d ? '✓ Topic Mastered' : (waitSeconds > 0 ? `Unlocking in ${waitSeconds}s` : 'Mark as Complete');
            b.classList.toggle('md-button--primary', !d);
            b.disabled = (waitSeconds > 0 && !d);
        });
        const txt = d ? 'Great job! You have fully mastered this concept.' : (waitSeconds > 0 ? 'Analyzing engagement levels...' : 'Ready to certify this concept.');
        els.notes.forEach(n => n.textContent = txt);
    }

    if (waitSeconds > 0) {
        const timer = setInterval(() => {
            waitSeconds--;
            if (waitSeconds <= 0) {
                clearInterval(timer); clearInterval(scrollInterval);
                els.btns.forEach(b => b.disabled = false);
                if (localStorage.getItem('socatlas-flow-enabled') === 'true') {
                    els.btns[0].click();
                    setTimeout(() => { const next = document.querySelector('.md-footer__link--next'); if (next) next.click(); }, 1500);
                }
            }
            syncUI();
        }, 1000);
    }

    els.flow.forEach(c => c.onchange = (e) => {
        localStorage.setItem('socatlas-flow-enabled', e.target.checked);
        els.flow.forEach(x => x.checked = e.target.checked);
        if (e.target.checked) startScroll(); else clearInterval(scrollInterval);
    });

    els.speed.forEach(s => s.oninput = (e) => {
        localStorage.setItem('socatlas-flow-speed', e.target.value);
        els.speed.forEach(x => x.value = e.target.value);
        els.speedTxt.forEach(x => x.textContent = e.target.value + 'x');
        if (localStorage.getItem('socatlas-flow-enabled') === 'true') startScroll();
    });

    els.btns.forEach(b => b.onclick = () => {
        const fr = getStorage(GUIDED_PATH_KEY);
        if (!fr[pathId]) fr[pathId] = true; else delete fr[pathId];
        setStorage(GUIDED_PATH_KEY, fr);
        syncUI();
        updateSidebar();
        if (typeof initDashboard === 'function') initDashboard();
    });

    if (flowPref && !isDone) startScroll();
    syncUI();
  }

  // --- 3. HOMEPAGE DASHBOARD (ALREADY STABLE) ---
  function initDashboard() {
    const isHome = getPathId(window.location.pathname) === 'home';
    if (!isHome) return;
    const dashId = 'socatlas-mastery-dashboard';
    let container = document.getElementById(dashId);
    if (!container) {
      container = document.createElement('div');
      container.id = dashId;
      const hero = document.querySelector('.hero-actions') || document.querySelector('h1');
      if (hero) hero.insertAdjacentElement('afterend', container);
    }
    if (!container) return;
    const qCount = Object.keys(getStorage(QUICK_PATH_KEY)).length;
    const gCount = Object.keys(getStorage(GUIDED_PATH_KEY)).length;
    container.innerHTML = `
      <div class="mastery-dashboard">
        <div class="mastery-card"><div class="mastery-card-header"><span class="mastery-badge">Curriculum</span><h3>Learning Roadmap</h3></div><div class="mastery-stats"><span class="mastery-pct">${Math.round(gCount/40*100)}%</span><div class="mastery-bar-bg"><div class="mastery-bar-fill" style="width: ${Math.round(gCount/40*100)}%"></div></div><span class="mastery-meta">${gCount} topics mastered</span></div></div>
        <div class="mastery-card"><div class="mastery-card-header"><span class="mastery-badge" style="background:#d1fae5;color:#065f46">Quick pack</span><h3>Retention Mastery</h3></div><div class="mastery-stats"><span class="mastery-pct">${Math.round(qCount/1200*100)}%</span><div class="mastery-bar-bg" style="background:#f0fdf4"><div class="mastery-bar-fill" style="width: ${Math.round(qCount/1200*100)}%;background:#10b981"></div></div><span class="mastery-meta">${qCount} points complete</span></div></div>
      </div>
    `;
  }

  // --- 4. QUICK PATH (STABLE) ---
  function initQuickPath() {
    if (!window.location.pathname.includes('/quick/')) return;
    const pageId = getPathId(window.location.pathname);
    if (document.getElementById('quick-stats-container')) return;
    const content = document.querySelector('.md-content__inner');
    const container = document.createElement('div');
    container.id = 'quick-stats-container';
    container.className = 'quick-stats-card';
    container.innerHTML = `<div class="quick-stats-main"><div class="quick-stats-info"><span class="quick-stats-label">Quick Path Mastery</span><h2 class="quick-stats-value" id="quick-path-pct">0%</h2></div><div class="quick-stats-progress-bg"><div class="quick-stats-progress-fill" id="quick-path-bar" style="width: 0%"></div></div></div><div class="quick-stats-meta"><span id="quick-path-count">0 points mastered</span><button id="quick-clear-page" class="quick-stats-btn">Reset</button></div>`;
    content.insertBefore(container, content.querySelector('table') || content.firstChild);
    const tables = document.querySelectorAll('.md-content__inner table');
    const stored = getStorage(QUICK_PATH_KEY);
    let total = 0;
    tables.forEach((table, tIdx) => {
      const head = table.querySelector('thead tr');
      if (head) { const th = document.createElement('th'); th.innerHTML = 'Done'; head.insertBefore(th, head.firstChild); }
      table.querySelectorAll('tbody tr').forEach((row, rIdx) => {
        const pid = row.cells[0]?.textContent.match(/^(\d+)/)?.[1] || `p-${pageId}-${tIdx}-${rIdx}`;
        const td = document.createElement('td'); const cb = document.createElement('input'); cb.type = 'checkbox';
        cb.className = 'quick-point-check'; cb.checked = !!stored[pid]; if (cb.checked) row.classList.add('point-mastered');
        cb.onchange = () => {
          const fr = getStorage(QUICK_PATH_KEY);
          if (cb.checked) { fr[pid] = true; row.classList.add('point-mastered'); } else { delete fr[pid]; row.classList.remove('point-mastered'); }
          setStorage(QUICK_PATH_KEY, fr); updateStats();
        };
        td.appendChild(cb); row.insertBefore(td, row.firstChild); total++;
      });
    });
    function updateStats() {
      const mastered = Array.from(document.querySelectorAll('.quick-point-check')).filter(c => c.checked).length;
      const pct = Math.round(mastered / total * 100) || 0;
      document.getElementById('quick-path-pct').textContent = pct + '%';
      document.getElementById('quick-path-bar').style.width = pct + '%';
      document.getElementById('quick-path-count').textContent = `${mastered} of ${total} points mastered`;
    }
    updateStats();
  }

  function start() { try { initQuickPath(); initGuidedPath(); initDashboard(); } catch (e) { console.error('SOCAtlas Crash:', e); } }
  if (typeof window.document$ !== "undefined" && window.document$ !== null) { window.document$.subscribe(start); }
  else if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', start); }
  else { start(); }
})();
