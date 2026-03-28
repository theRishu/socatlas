# 🪜 Privilege Escalation

!!! note "What is Privilege Escalation?"
    Privilege escalation occurs when a threat actor, having compromised a low-level standard user account, successfully exploits a vulnerability or misconfiguration to gain elevated "Administrator", "root", or "SYSTEM" access.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP & Destination IP**
*   **Username** & **Affected System / Hostname**
*   Did the user recently get added to the `Domain Admins` or `Administrators` group?
*   Did the EDR flag a process suddenly spawning under `NT AUTHORITY\SYSTEM`?

### Interview Answer

**Q: How do you handle a privilege escalation alert?**

When a privilege escalation alert triggers, I first **review the SIEM or identity logs** to confirm which standard user account was flagged and what specific action caused the alert (like modifying a registry key or adding a user to a highly privileged group).

Next, I **investigate the host** using EDR. I look at the process tree to see if the user exploited a known vulnerability (like running a malicious executable or script that bypasses UAC). I simultaneously check Active Directory logs (Event ID 4728) to verify if the attacker granted themselves permanent admin rights.

If the escalation is confirmed malicious and not a planned IT change, I immediately **contain the threat**. I completely disable the compromised user account in AD and isolate the endpoint via the network to prevent the attacker from moving laterally using their newly acquired admin privileges.

Finally, I **escalate the incident** to the L2 and IR teams with the exact timeline of the escalation, revert the unauthorized group changes in AD, and document the investigation steps in the ticketing system.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I check SIEM logs to see which user escalated and how they did it (e.g., AD group change or exploiting a local service).
    *   **Investigate:** I analyze the EDR process tree and verify Active Directory logs to see the extent of their administrative access.
    *   **Contain & Escalate:** If confirmed malicious, I disable the compromised account immediately, isolate the host, escalate to L2, and document the incident.
