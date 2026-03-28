# 💉 SQL Injection (WAF Alert)

!!! note "What is SQL Injection (SQLi)?"
    SQL Injection is a web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. Alerts usually fire on the Web Application Firewall (WAF) when malicious SQL characters (`'`, `1=1`, `UNION`) are detected in an HTTP GET/POST request.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP** (Attacker) & **Destination IP** (Web Server)
*   **Targeted URL path**
*   The exact attack payload (Did they type `' OR 1=1`?)
*   Did the WAF block the request automatically?
*   Did the website server reply with a 500 Error (failed) or 200 OK (success)?

### Interview Answer

**Q: How do you handle a SQL Injection alert from the WAF?**

When a SQL Injection alert triggers, I first **review the WAF logs** to check the source IP, the exact malicious payload injected into the web request, the targeted URI path, and most importantly, whether the WAF successfully 'Blocked' the payload or merely 'Alerted' on it.

Next, I look at the **HTTP response code** returned by the backend web server. If I see a 500 Internal Server error, the payload likely broke the SQL syntax, meaning the app is vulnerable but the attack failed. If I see a 200 OK with an unusually large response size, the attacker may have successfully dumped the database using a `UNION SELECT` attack.

If the WAF missed it and the payload hit the backend, I immediately coordinate with the database team to **check the SQL execution logs** and determine if any sensitive data was actually returned to the attacker.

For **containment**, if the WAF was only holding in 'Monitor' mode, I immediately switch it to 'Blocking' mode for that specific signature. I then dynamically block the attacker's source IP across the external load balancer.

Finally, I **escalate the vulnerability** to the AppSec team with the raw HTTP logs so they can implement parameterized queries in the vulnerable code, and I document the incident in the ticketing system.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I review the WAF logs to see the specific malicious payload and verify if the WAF actually 'Blocked' or just 'Monitored' the request.
    *   **Investigate:** I analyze the backend HTTP response code and database logs to verify if a database dump actually succeeded.
    *   **Contain & Escalate:** If the app is vulnerable, I block the attacking IP, switch the WAF to blocking mode, and escalate to AppSec to fix the code using parameterized queries.
