(function() {
  /* --- SOCAtlas Universal Progress Tracker --- */
  
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

  // --- 1. QUICK PATH LOGIC (Tables) ---
  function initQuickPath() {
    const content = document.querySelector('.md-content__inner');
    if (!content || !window.location.pathname.includes('/quick/')) return;

    const statsContainer = document.createElement('div');
    statsContainer.className = 'quick-stats-card';
    statsContainer.innerHTML = `
      <div class="quick-stats-main">
        <div class="quick-stats-info">
          <span class="quick-stats-label">Quick Path Mastery</span>
          <h2 class="quick-stats-value" id="quick-path-pct">0%</h2>
        </div>
        <div class="quick-stats-progress-bg">
          <div class="quick-stats-progress-fill" id="quick-path-bar" style="width: 0%"></div>
        </div>
      </div>
      <div class="quick-stats-meta">
        <span id="quick-path-count">0 of 0 points mastered</span>
        <button id="quick-clear-page" class="quick-stats-btn">Reset Page</button>
      </div>
    `;
    
    const firstTable = content.querySelector('table');
    content.insertBefore(statsContainer, firstTable || content.firstChild);

    // Search wrap
    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'quick-search-wrapper';
    searchWrapper.innerHTML = `
      <input type="text" id="quick-page-search" placeholder="Filter these points..." class="quick-search-input">
      <span class="quick-search-icon">🔍</span>
    `;
    content.insertBefore(searchWrapper, statsContainer);

    const tables = content.querySelectorAll('table');
    const stored = getStorage(QUICK_PATH_KEY);
    let totalOnPage = 0;

    tables.forEach((table, tIdx) => {
      const thead = table.querySelector('thead tr');
      if (thead) {
        const th = document.createElement('th');
        th.innerHTML = 'Done';
        th.style.width = '60px';
        thead.insertBefore(th, thead.firstChild);
      }

      table.querySelectorAll('tbody tr').forEach((row, rIdx) => {
        const pointMatch = row.cells[0]?.textContent.match(/^(\d+)/);
        const pid = pointMatch ? pointMatch[1] : `p-${window.location.pathname}-${tIdx}-${rIdx}`;
        
        const td = document.createElement('td');
        const cb = document.createElement('input');
        cb.type = 'checkbox';
        cb.className = 'quick-point-check';
        cb.checked = !!stored[pid];
        if (cb.checked) row.classList.add('point-mastered');

        cb.addEventListener('change', () => {
          const fresh = getStorage(QUICK_PATH_KEY);
          if (cb.checked) {
            fresh[pid] = true;
            row.classList.add('point-mastered');
          } else {
            delete fresh[pid];
            row.classList.remove('point-mastered');
          }
          setStorage(QUICK_PATH_KEY, fresh);
          updatePageStats();
        });

        td.appendChild(cb);
        row.insertBefore(td, row.firstChild);
        totalOnPage++;
      });
    });

    function updatePageStats() {
      const fresh = getStorage(QUICK_PATH_KEY);
      const checks = document.querySelectorAll('.quick-point-check');
      const onPageMastered = Array.from(checks).filter(c => c.checked).length;
      const pct = Math.round((onPageMastered / totalOnPage) * 100) || 0;
      
      document.getElementById('quick-path-pct').textContent = pct + '%';
      document.getElementById('quick-path-bar').style.width = pct + '%';
      document.getElementById('quick-path-count').textContent = `${onPageMastered} of ${totalOnPage} points mastered on this page`;
    }

    // Search
    document.getElementById('quick-page-search').addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase();
      tables.forEach(t => {
        t.querySelectorAll('tbody tr').forEach(r => {
          r.style.display = r.textContent.toLowerCase().includes(q) ? '' : 'none';
        });
      });
    });

    document.getElementById('quick-clear-page').addEventListener('click', () => {
      if (confirm('Clear progress for this page?')) {
        const fresh = getStorage(QUICK_PATH_KEY);
        document.querySelectorAll('.quick-point-check').forEach(c => {
          c.checked = false;
          c.closest('tr').classList.remove('point-mastered');
          const pm = c.closest('tr').cells[1]?.textContent.match(/^(\d+)/);
          const pid = pm ? pm[1] : null;
          if (pid) delete fresh[pid];
        });
        setStorage(QUICK_PATH_KEY, fresh);
        updatePageStats();
      }
    });

    updatePageStats();
  }

  // --- 2. GUIDED PATH LOGIC (Individual Pages) ---
  function initGuidedPath() {
    const content = document.querySelector('.md-content__inner');
    const path = window.location.pathname;
    
    // 2a. Indicators in Sidebar
    const stored = getStorage(GUIDED_PATH_KEY);
    const navLinks = document.querySelectorAll('.md-nav__link');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (!linkPath || linkPath === '/' || linkPath.includes('index.html')) return;
      
      // Clean link path for matching
      const cleanLinkPath = linkPath.replace(/^\./, '').split('#')[0];
      const isNavDone = !!stored[cleanLinkPath] || !!stored[window.location.origin + cleanLinkPath] || !!stored[cleanLinkPath.replace('.html', '.md')];

      // Remove existing check if any
      const existing = link.querySelector('.nav-check');
      if (existing) existing.remove();

      if (isNavDone) {
        const check = document.createElement('span');
        check.className = 'nav-check';
        check.innerHTML = ' ✓';
        check.style.color = '#0abf53';
        check.style.fontWeight = '800';
        link.appendChild(check);
      }
    });

    // 2b. Page Footer (Mark as Complete)
    if (!content || path === '/' || path.includes('/quick/') || path.includes('index.html')) return;

    const footerId = 'guided-completion-footer';
    if (document.getElementById(footerId)) document.getElementById(footerId).remove();

    const isDone = !!stored[path];

    const footer = document.createElement('div');
    footer.id = footerId;
    footer.className = 'guided-footer-card';
    footer.innerHTML = `
      <div class="guided-footer-text">
        <h3>Finished this topic?</h3>
        <p>Mark it as complete to see it tracked on your dashboard and sidebar.</p>
      </div>
      <button class="md-button ${isDone ? '' : 'md-button--primary'} guided-toggle-btn">
        ${isDone ? '✓ Completed' : 'Mark as Complete'}
      </button>
    `;

    content.appendChild(footer);

    footer.querySelector('button').addEventListener('click', function() {
      const fresh = getStorage(GUIDED_PATH_KEY);
      const isNowDone = !fresh[path];
      if (isNowDone) fresh[path] = true; else delete fresh[path];
      setStorage(GUIDED_PATH_KEY, fresh);
      
      this.textContent = isNowDone ? '✓ Completed' : 'Mark as Complete';
      this.classList.toggle('md-button--primary', !isNowDone);
      
      // Re-run indicators to update sidebar immediately
      initGuidedPath();
      if (typeof initDashboard === 'function') initDashboard();
    });
  }

  // --- 3. HOMEPAGE DASHBOARD ---
  function initDashboard() {
    const path = window.location.pathname;
    const isHome = path === '/' || path.includes('index.html');
    if (!isHome) return;

    const dashId = 'socatlas-mastery-dashboard';
    let container = document.getElementById(dashId);
    if (!container) {
      container = document.createElement('div');
      container.id = dashId;
      const hero = document.querySelector('.hero-actions') || document.querySelector('h1');
      if (hero) hero.insertAdjacentElement('afterend', container);
    }

    const quickTotal = 1200;
    const guideTotal = 40; // Approx total pages in guide excluding home/quick
    
    const quickMastered = Object.keys(getStorage(QUICK_PATH_KEY)).length;
    const guideMastered = Object.keys(getStorage(GUIDED_PATH_KEY)).length;
    
    const qPct = Math.min(100, Math.round((quickMastered / quickTotal) * 100));
    const gPct = Math.min(100, Math.round((guideMastered / guideTotal) * 100));

    // Get last 3 completed for the dashboard
    const completedList = Object.keys(getStorage(GUIDED_PATH_KEY))
      .map(p => p.split('/').pop().replace('.html', '').replace(/_/g, ' '))
      .filter(p => !['', 'index'].includes(p))
      .slice(-3);

    container.innerHTML = `
      <div class="mastery-dashboard">
        <div class="mastery-card">
          <div class="mastery-card-header">
            <span class="mastery-badge">Guided Path</span>
            <h3>Progress Summary</h3>
          </div>
          <div class="mastery-stats">
            <span class="mastery-pct">${gPct}%</span>
            <div class="mastery-bar-bg"><div class="mastery-bar-fill" style="width: ${gPct}%"></div></div>
            <span class="mastery-meta">${guideMastered} of ${guideTotal} topics complete</span>
            ${completedList.length ? `<div class="mastery-recent">Recently: ${completedList.join(', ')}</div>` : ''}
          </div>
        </div>
        <div class="mastery-card">
          <div class="mastery-card-header">
            <span class="mastery-badge">Quick Points</span>
            <h3>Progress Summary</h3>
          </div>
          <div class="mastery-stats">
            <span class="mastery-pct">${qPct}%</span>
            <div class="mastery-bar-bg" style="--bar-color: #0abf53"><div class="mastery-bar-fill" style="width: ${qPct}%; background: #0abf53"></div></div>
            <span class="mastery-meta">${quickMastered} of ${quickTotal} points mastered</span>
            <div class="mastery-recent">Across 12 focused domains</div>
          </div>
        </div>
      </div>
    `;
  }

  function start() {
    initQuickPath();
    initGuidedPath();
    initDashboard();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(() => start());
  } else {
    start();
  }
})();

