(function() {
  /* --- SOCAtlas Core Engine (v3.0 - Clean Documentation Mode) --- */
  
  // This engine is currently in 'Plain Mode' per user request.
  // No Autoplay, No Mastery Lock, No UI Overlays.

  const STORAGE_PREFIX = 'socatlas-progress-';
  const GUIDED_PATH_KEY = 'guided-pages';

  function getStorage(key) {
    try {
      const data = localStorage.getItem(STORAGE_PREFIX + key); return data ? JSON.parse(data) : {};
    } catch { return {}; }
  }

  function getPathId(p) {
    if (!p) return 'none';
    try {
        let clean = p.split('#')[0].split('?')[0]; if (clean.includes('://')) clean = new URL(clean).pathname;
        clean = clean.replace(/^\/socatlas\//, '/').replace(/\.html$|\.md$/g, '').replace(/\/$/, '').replace(/^\//, '');
        return clean || 'home';
    } catch (e) { return 'none'; }
  }

  // Purely visual sidebar checkmarks (non-intrusive)
  function updateSidebar() {
    const stored = getStorage(GUIDED_PATH_KEY);
    document.querySelectorAll('.md-nav__link').forEach(link => {
      const href = link.getAttribute('href'); if (!href) return;
      const id = getPathId(new URL(href, window.location.href).pathname);
      const ex = link.querySelector('.nav-check'); if (ex) ex.remove();
      if (stored[id]) {
        const c = document.createElement('span'); c.className = 'nav-check'; c.innerHTML = ' ✓'; c.style.color = '#0abf53'; link.appendChild(c);
      }
    });
  }

  function start() { 
    try { 
        updateSidebar(); 
        // All mastery panels and auto-flow code has been removed for a clean doc experience.
    } catch (e) {} 
  }

  if (typeof window.document$ !== "undefined") window.document$.subscribe(start);
  else document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
