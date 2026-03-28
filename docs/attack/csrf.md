# 🔄 Cross-Site Request Forgery (CSRF)

!!! note "What is CSRF?"
    Cross-Site Request Forgery forces an authenticated user to execute unwanted actions on a web application where they are currently authenticated. Because the victim's browser automatically sends their active session cookies, the server believes the request is legitimate.

### How it Works
The attacker crafts a hidden link or form that targets a state-changing action (like changing a password or transferring money). They then trick the victim (who is already logged into their bank) into clicking the link or simply opening a malicious webpage containing the hidden request.

### Real-World Example
You are logged into `bank.com`. An attacker sends you an email with a hidden image tag: `<img src="http://bank.com/transfer?amount=1000&toAccount=Hacker">`. When you open the email, your browser automatically tries to load the image, unknowingly authorizing a heavy wire transfer using your valid session cookie.

### How to Mitigate
*   **Anti-CSRF Tokens:** The server generates a unique, unpredictable, and hidden token for every active session. Any state-changing request must include this token. The attacker cannot guess it, so the forgery fails.
*   **SameSite Cookie Attribute:** Set the `SameSite=Strict` or `Lax` flag on session cookies, which strictly prevents the browser from sending cookies along with malicious cross-site requests.
*   **Re-Authentication:** For highly sensitive actions (changing passwords, transferring large funds), require the user to actively re-type their password.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Tricking a logged-in user's browser into secretly executing an unwanted action on a trusted site.
    *   **Impact:** Unauthorized fund transfers, password changes, and account takeovers.
    *   **Fix:** Implement unique, unpredictable Anti-CSRF tokens for every form and utilize the SameSite cookie attribute.
