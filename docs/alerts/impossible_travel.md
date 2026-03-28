# ✈️ Impossible Travel Alert

!!! note "What is Impossible Travel?"
    An impossible travel alert fires when a user authenticates from two geographically distant locations in an impossibly short timeframe (e.g., logging in from New York, then logging in from Moscow 5 minutes later). It strongly indicates a compromised password or stolen session token.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event (Check the exact time difference)
*   **Source IPs** (The two different geographic locations)
*   **Username** & **Affected System / Hostname**
*   Is the user traveling, or currently using a corporate VPN?
*   Did both logins successfully pass Multi-Factor Authentication (MFA)?

### Interview Answer

**Q: How do you handle an impossible travel alert?**

When an impossible travel alert triggers, I first **review the cloud identity logs** (like Azure AD) to check the two source IP addresses, their geographic locations, and the exact time difference between the logins.

Next, I **check the context** of the logins. Are the IP addresses known Corporate VPN endpoints or Zscaler nodes? I also review the User-Agent strings to see if the device or browser radically changed between the logins. Most importantly, I check if **either login successfully bypassed MFA**. I may also check with the user directly via Slack if they are traveling or using a personal VPN.

If I confirm the logins are not from a legitimate VPN and one of them is truly malicious, I treat it as a **compromised account**.

For **containment**, I immediately disable the user account in Active Directory, revoke all active session tokens to kick the attacker out, and force a mandatory password reset.

Finally, I **escalate the incident** to L2 to check the user's email forwarding rules and OneDrive access logs to ensure no data was stolen, and thoroughly document the response in the ticket.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I review the identity logs to check the source IPs, geographic locations, exact time difference, and MFA status.
    *   **Investigate:** I rule out legitimate VPN usage or proxy routing by the employee.
    *   **Contain & Escalate:** If confirmed as a compromised account, I disable the user, revoke active sessions, force an immediate password reset, and investigate for any exfiltrated data.
