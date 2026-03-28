# 📧 Phishing & Email Threats

!!! note "What is Phishing?"
    Phishing is a social engineering attack where an adversary sends fraudulent emails masquerading as a trusted entity. The goal is to trick the recipient into clicking a malicious link, downloading malware, or surrendering sensitive credentials.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP** (Sender email IP from headers)
*   **Username** (The employee who received it)
*   **URL links inside the email** (Check them safely on URLScan.io)
*   **Attachments** (Check the file hash on VirusTotal)
*   Most importantly: Did the user actually click the link or download the file?

### Interview Answer

**Q: How do you investigate a suspicious phishing email?**

When an email is reported, I immediately **pull the email headers** to identify the true sender IP, the return path, and the timestamp. I evaluate the context for social engineering tactics.

If the email contains a link, I check the **domain reputation** via threat intelligence tools and detonate the link in an isolated sandbox. If there is an attachment, I extract the file hash or detonate it in a malware sandbox to observe its behavior.

The most critical step is **determining if the user actually interacted** with the payload. I query proxy or DNS logs to see if their IP reached out to the malicious domain, and check EDR logs to see if a malicious attachment executed.

If they clicked a credential harvesting link, I force an **immediate password reset** and revoke active sessions. If they ran malware, I isolate their host via EDR.

Finally, I run a search query across the mail server to **purge the phishing email** from all other employee inboxes, block the malicious sender domain globally, and document the entire workflow in the ticket.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I extract email headers to find the true sender and examine the payload safely in an isolated sandbox.
    *   **Investigate:** I check proxy and EDR logs exclusively to see if the user actually clicked the link or executed the attachment.
    *   **Contain & Escalate:** I logically purge the email globally, block the sender domain, and force a password reset or host isolation if the user was compromised.
