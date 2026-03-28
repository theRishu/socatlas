# 📤 Data Exfiltration (DLP)

!!! note "What is Data Exfiltration?"
    Data Exfiltration is the unauthorised transfer of sensitive corporate data (like PII, source code, or financial records) out of the network to external storage (like Mega, Dropbox) or via an attacker's C2 channel.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP** (User's laptop) & **Destination IP** (e.g., Dropbox, Mega)
*   **Username** & **Affected System / Hostname**
*   Exactly how much data was uploaded (e.g., 5GB)?
*   Is this normal behavior for this person's job role?

### Interview Answer

**Q: How do you handle a Data Exfiltration alert?**

When a Data Exfiltration or DLP alert triggers, I first **check the firewall or proxy logs** to determine the source host, the logged-in user, and the exact volume of data leaving the network. I also identify the destination domain or IP address to see if it's a known risky file-sharing site.

Next, I **investigate the context**. Is this a normal business process, like marketing uploading a video, or is this an anomalous 10GB transfer at 3 AM to an unknown server? I check endpoint logs to see what specific files were accessed or zipped up before the transfer.

If the transfer is unauthorised and confirmed malicious (either an insider threat or compromised host), I immediately **contain the threat** by blocking the destination IP on the corporate firewall and isolating the source host via EDR to halt any ongoing transfer.

Following containment, I aggressively **escalate the incident** to the Legal, HR, and Incident Response teams because data loss has massive regulatory compliance implications. 

Finally, I **document the exact volume of data**, the destination, the user involved, and the containment actions in the ticketing system.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I review proxy and firewall logs to determine the specific user, the volume of data transferred, and the external destination.
    *   **Investigate:** I check endpoint logs to see if specific files were zipped or bulk accessed before the transfer.
    *   **Contain & Escalate:** If unauthorized, I block the destination IP on the firewall, isolate the host, and critically escalate to Legal and IR due to severe data breach implications.
