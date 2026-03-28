# 🦅 CrowdStrike (EDR) Alert

!!! note "What is a CrowdStrike Alert?"
    CrowdStrike Falcon is an industry-leading EDR platform. An alert here usually indicates advanced endpoint threats like fileless malware, credential dumping (Mimikatz), lateral movement, or ransomware executing on a host.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP & Destination IP** (If a network connection was made)
*   **Username** & **Affected System / Hostname**
*   The specific file, process, or IOA that CrowdStrike flagged
*   Did CrowdStrike already block or automatically quarantine the threat?

### Interview Answer

**Q: How do you handle a CrowdStrike EDR alert?**

When a CrowdStrike alert triggers, my first step is to open the Falcon console and **review the alert details**. I check the severity, the affected hostname, the specific user logged in, and the exact Indicator of Attack (IOA) that caused the detection.

Next, I **dive into the Process Tree**. This is critical. I trace the execution backward to see the parent process (for example, did Microsoft Word launch PowerShell?), and analyze the command-line parameters to understand exactly what the script or binary was trying to do. If it reached out to an external IP, I grab that IP and check its reputation on VirusTotal.

If the activity is confirmed as malicious, I immediately use CrowdStrike's **Network Containment feature** to isolate the host. This cuts the machine off from the corporate network while leaving a secure tunnel open for me to continue forensic analysis via the Real Time Response (RTR) shell.

After containment, I take **remediation steps** like killing the malicious process or deleting the dropped payload. I then gather all artifacts, process trees, and IOCs.

Finally, I **escalate the findings** cleanly to the incident response team and document the entire investigation timeline inside the ticketing system.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I review the Falcon console for severity and the specific Indicator of Attack (IOA).
    *   **Investigate:** I extensively analyze the process tree and command-line arguments to understand the root cause.
    *   **Contain & Escalate:** If malicious, I instantly initiate Network Containment via CrowdStrike, kill the process, and escalate all IOCs to the IR team while documenting the ticket.
