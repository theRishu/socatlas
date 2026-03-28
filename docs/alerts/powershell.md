# 🐚 Suspicious PowerShell

!!! note "What is Suspicious PowerShell?"
    Attackers frequently use PowerShell (a built-in Windows admin tool) to execute malicious commands purely in memory, avoiding writing malware files to the disk. This is known as "Living off the Land."

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP & Destination IP** (Did PowerShell try to download something?)
*   **Username** & **Affected System / Hostname**
*   The specific PowerShell command that was executed
*   Is the command completely unreadable (e.g., Base64 encoded gibberish)?
*   Did PowerShell open automatically after the user opened a Word document?

### Interview Answer

**Q: How do you handle a suspicious PowerShell alert?**

When an EDR or SIEM alert triggers for suspicious PowerShell, I first **look at the process tree** to identify the parent process. If I see Microsoft Word or Excel launching PowerShell, that is a massive red flag indicating a malicious macro.

Next, I **analyze the command-line arguments**. Attackers often use flags like `-WindowStyle Hidden` and `-ExecutionPolicy Bypass`. If the script is Base64 encoded using the `-enc` flag, I extract the string and use a tool like CyberChef to **decode it** and read the actual payload.

I also check if PowerShell initiated any **outbound network connections** to download a secondary payload or communicate with a Command & Control IP. 

If the script is malicious, I immediately **isolate the infected host** using EDR network containment to sever the attacker's access.

After containment, I **escalate the decoded payload**, the C2 IP addresses, and the process tree to the IR team for deep analysis, and document all IOCs and my containment steps in the ticketing system.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I heavily review the process tree to see exactly what parent process launched PowerShell.
    *   **Investigate:** I extract and decode any Base64 encoded commands and analyze the raw payload for malicious intent.
    *   **Contain & Escalate:** If confirmed malicious, I isolate the host via EDR, escalate the decoded IOCs to L2, and document the incident.
