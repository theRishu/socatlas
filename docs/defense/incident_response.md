# Incident response cycle

Incident response is the structured process security teams follow to prepare for, detect, contain, eradicate, and recover from security incidents while minimizing business impact.
{ .page-lead }

!!! note "Interview answer"
    *"Incident response is a repeatable lifecycle used to handle security incidents effectively. The common phases are Preparation, Identification, Containment, Eradication, Recovery, and Lessons Learned. The goal is to reduce damage, restore operations, and improve defenses after the incident."*

## The six phases

### 1. Preparation

- Build the incident response plan
- Define roles and communication paths
- Make sure logging, SIEM, EDR, and backups are ready
- Train staff and run exercises

### 2. Identification

- Review alerts from SIEM, IDS, and EDR
- Confirm whether an incident is real
- Determine scope, severity, and affected assets

### 3. Containment

- Isolate infected hosts
- Block malicious IPs or domains
- Disable compromised accounts
- Preserve evidence where needed

### 4. Eradication

- Remove malware and attacker persistence
- Patch the exploited weakness
- Reset compromised credentials

### 5. Recovery

- Restore from clean backups
- Return systems to production carefully
- Monitor for reinfection or follow-on activity

### 6. Lessons Learned

- Document the timeline and root cause
- Review what worked and what failed
- Update playbooks, controls, and training

## Example severity levels

| Level | Meaning | Example |
| --- | --- | --- |
| P1 | Critical | Active ransomware on business-critical systems |
| P2 | High | Confirmed data breach |
| P3 | Medium | Malware on one endpoint without wider spread |
| P4 | Low | Routine suspicious event or unsuccessful attempt |

## Common interview questions

#### What is the first thing you do in a ransomware incident?
> The first priority is containment. Isolate the infected system quickly to stop lateral movement and prevent more systems from being encrypted.

#### Why are lessons learned important?
> Because incident response is not finished when systems come back online. The lessons learned phase is what turns an incident into improved detection, better playbooks, and stronger prevention.
