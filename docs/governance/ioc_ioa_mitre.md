# IOC, IOA, and MITRE ATT&CK

IOCs, IOAs, and MITRE ATT&CK help analysts describe suspicious activity in a structured way. They are common interview topics because they connect threat detection, incident response, and threat hunting.
{ .page-lead }

!!! note "Interview answer"
    *"An IOC, or Indicator of Compromise, is evidence that a system has already been compromised, such as a malicious hash or IP address. An IOA, or Indicator of Attack, is a behavioral sign that an attack is happening or being attempted, such as unusual lateral movement. MITRE ATT&CK is a knowledge base of attacker tactics and techniques used to map detections and analyze adversary behavior."*

## IOC versus IOA

| Feature | IOC | IOA |
| --- | --- | --- |
| Focus | Evidence of compromise | Evidence of attack behavior |
| Timing | Usually after compromise | During or before full compromise |
| Style | Reactive | More proactive |
| Example | Malicious file hash | Suspicious PowerShell execution |

## MITRE ATT&CK

MITRE ATT&CK documents attacker tactics and techniques based on real-world observations.

### Common ATT&CK tactics

1. Reconnaissance
2. Resource Development
3. Initial Access
4. Execution
5. Persistence
6. Privilege Escalation
7. Defense Evasion
8. Credential Access
9. Discovery
10. Lateral Movement
11. Collection
12. Command and Control
13. Exfiltration
14. Impact

## Tactic versus technique

- A tactic is the attacker's goal.
- A technique is the specific method used to achieve that goal.
- A procedure is how a real attacker or group actually carries it out.

## Why security teams use them

- IOCs are shared to block known threats quickly
- IOAs help detect attacker behavior earlier
- ATT&CK helps map alerts to known tactics and techniques
- SOC teams use ATT&CK to improve detections and coverage

## Common interview questions

#### Why are IOAs often more powerful than IOCs?
> Because attackers can easily change IPs, domains, or hashes, but it is much harder for them to change the underlying behavior they need to achieve their goals.

#### What is MITRE gap analysis?
> It is the process of mapping your current detections and telemetry to ATT&CK techniques to see which behaviors you can detect and which ones you are missing.
