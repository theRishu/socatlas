# 💥 DDoS Attacks

!!! note "What is a DDoS Attack?"
    A Distributed Denial of Service (DDoS) attack is an attempt to disrupt the normal traffic of a targeted server, service, or network by overwhelming the target or its infrastructure with a flood of malicious internet traffic from multiple compromised sources.

### What to check (SOC L1):
*   **Alert Type & Severity** (Low/Medium/High/Critical)
*   **Timestamp** of the event
*   **Source IP** (Thousands of attacking IPs) & **Destination IP** (Your website)
*   Are there thousands of requests coming from many different IPs?
*   Is the website currently down or very slow?
*   Are the IPs coming from unusual countries where you have no customers?
*   Did the Web Application Firewall (WAF) block the surge?

### Interview Answer

**Q: How do you respond to a DDoS alert?**

When a DDoS alert triggers, I **review alerts from the WAF** or network monitoring tools to determine the attack type. I check if it is a volumetric Layer 3/4 attack attempting to choke bandwidth, or a Layer 7 application attack targeting specific endpoints.

I **analyze the firewall access logs** and NetFlow data. For volumetric attacks, I look at the volume of traffic and the protocol being abused. For application attacks, I check WAF logs for patterns in the HTTP requests, such as identical User-Agent strings or abnormal geographic traffic.

For **containment** of a volumetric attack, local firewalls are usually overwhelmed, so I immediately contact our ISP for **blackhole routing** or ensure our cloud Anti-DDoS provider is absorbing the traffic at the edge. 

For a Layer 7 attack, I deploy **strict rate-limiting policies** on the WAF, block specific malicious User-Agents, and geoblock regions that aren't part of our normal customer base.

Finally, I **continuously monitor** application health metrics to verify the mitigations are working, and document the peak volumes and attack patterns in the incident report.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Triage:** I determine if the alert is a volumetric (Layer 3/4) or an application-layer (Layer 7) DDoS attack.
    *   **Volumetric Response:** For volumetric attacks, I rely on upstream cloud scrubbing or ISP blackholing.
    *   **Layer 7 Response:** For Layer 7 attacks, I deploy strict WAF rate-limiting, block malicious User-Agents, implement geoblocking, and continuously monitor application health.
