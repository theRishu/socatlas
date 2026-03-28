# 🔒 Ransomware Attack

!!! note "What is Ransomware?"
    Ransomware is a severe type of malware that uses strong cryptography to encrypt an organisation's files, databases, or systems, making them inaccessible. The attacker then extorts the victim, demanding a ransom payment in exchange for the decryption key, and often threatens to leak stolen data publicly (double extortion).

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP & Destination IP**
*   **Username** & **Affected System / Hostname**
*   Did multiple files suddenly change to a weird extension (like `.locked`)?
*   Is there a text file on the desktop demanding money (ransom note)?
*   Are other computers on the network throwing similar alerts?

### Interview Answer

**Q: How do you respond to a ransomware outbreak?**

When a ransomware outbreak is detected, the absolute first priority is **strict and immediate containment**. I use the EDR to aggressively isolate any affected hosts from the network. If the outbreak is spreading rapidly, I work with the network team to drop internal routing or shut down VPN access to cut off lateral movement.

Once containment is achieved, I begin the **investigation**. I look for the initial entry vector, such as a phishing email, unpatched external server, or compromised RDP credentials. I identify the specific ransomware variant and extract IOCs from the isolated systems.

For **eradication**, I assume the infected hosts cannot be trusted again. I identify and revoke all compromised admin accounts and persistence mechanisms. I coordinate with the infrastructure team to wipe the affected systems completely.

Finally, I work with the **disaster recovery team** to verify that offline, immutable backups are safe. We meticulously restore the affected services from clean backups onto rebuilt servers, monitoring closely for any signs of reinfection.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Immediate Containment:** I aggressively isolate infected hosts via EDR to immediately stop the spread.
    *   **Investigate & Eradicate:** I investigate the entry vector and reset any compromised administrative credentials.
    *   **Recovery:** I work directly with the infrastructure team to wipe the machines completely and restore them strictly from offline, immutable backups.
