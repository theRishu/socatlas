# 🛠️ SOCAtlas Proposed Modernizations (DRAFT)

This file contains my high-perfomance "Polish" suggestions for the SOCAtlas platform. 
**Workflow:** Read the suggestions below, copy the parts you like into your main files, and then **delete this file** once you are done.

---

## 1. Premium Typography (Indigo & Jakarta Sans)
*   **File:** `docs/assets/site-polish.css`
*   **Recommendation:** Use this CSS to give the platform a modern, top-tier technical aesthetic without breaking the standard layout.

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Inter:wght@400;500;600&display=swap');

:root {
  --font-main: 'Inter', -apple-system, system-ui, sans-serif;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --md-primary-fg-color: #4f46e5; /* Indigo 600 */
}

body, .md-typeset { font-family: var(--font-main); font-size: 0.8rem; }
h1, h2, h3, .md-nav__title { font-family: var(--font-heading); font-weight: 800; letter-spacing: -0.02em; }
```

---

## 2. Interview Simulation Cards (Knowledge Check)
*   **File:** `docs/assets/core-ref-v2.js`
*   **Recommendation:** Inject a small, professional "Interview Challenge" card at the bottom of lesson pages.

```javascript
/* Proposed injection logic inside your start() function */
const content = document.querySelector('.md-content__inner');
if (content && !document.getElementById('soc-knowledge-check')) {
  const card = document.createElement('div');
  card.id = 'soc-knowledge-check';
  card.className = 'admonition example';
  card.innerHTML = '<strong>🎯 Interview Challenge:</strong> Explain the 3-way handshake in a SOC triage context.';
  content.appendChild(card);
}
```

---

## 3. Sidebar Cleanup
*   **Goal:** Keep the sidebar completely free of ticks (✓) and progress stars.
*   **Status:** Already enforced in the main `core-ref-v2.js` logic. No further action needed.

---

### End of Suggestions. 
**Delete this file (MODS.md) to close the draft.**
