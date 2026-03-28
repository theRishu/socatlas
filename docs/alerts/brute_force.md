# 🔑 Brute Force & Password Spray

!!! note "What is a Brute Force / Password Spray Attack?"
    A **Brute Force** attack is when an attacker tries hundreds or thousands of passwords against a *single* user account very quickly. A **Password Spray** is when an attacker tries just a few common passwords against *many* different accounts simultaneously to avoid triggering lockout policies.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP & Destination IP**
*   **Username** & **Affected System / Hostname**
*   How many failed attempts happened in a short time?
*   Did the attacker eventually get a "Successful Login"?

### Interview Answer

**Q: How do you handle a brute-force attack?**

When a brute-force alert is triggered, I first **review the authentication logs** to check details such as the source IP address, targeted username, number of login attempts, and timestamp.

Then I perform **initial triage** by checking whether there are multiple failed login attempts within a short time. I also verify whether the attempts are coming from the same IP address or from multiple IPs, which may indicate **password spraying**.

Next, I **investigate further** by analyzing authentication logs and checking if the login attempts are coming from unusual geographic locations or suspicious networks. I also check the **IP reputation** using threat intelligence sources.

If the activity is confirmed as a brute-force attack, I take **containment actions**, such as blocking the malicious IP address, locking or disabling the targeted account, and enforcing account lockout policies.

After that, I **escalate the incident** to the L2 team with details such as the attacking IP address, targeted accounts, number of login attempts, and investigation findings.

Finally, I **document the incident properly** in the ticketing system with all the analysis and actions taken.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I analyze authentication logs for multiple failed login attempts.
    *   **Investigate:** I check the source IP, targeted accounts, and verify the IP reputation.
    *   **Contain & Escalate:** If confirmed as a brute-force or spray attack, I block the attacking IP, secure the affected account, escalate to L2, and document the incident.
