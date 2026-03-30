(function() {
  /* --- SOCAtlas Ultra-Simple Doc Mode --- */
  
  // Entire Success Engine (Mastery, Autoplay, Locks) has been nuked by request.
  // This script is now minimal to ensure zero UI interference.

  function start() {
    console.log("SOCAtlas: Manual Documentation Mode Active.");
    // No Mastery Panels
    // No Unlocking
    // No Autoplay
  }

  if (typeof window.document$ !== "undefined") window.document$.subscribe(start);
  else document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
