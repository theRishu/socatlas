# SIEM & SOAR

A SIEM is the central nervous system of a security programme — it collects, correlates, and alerts on log data from across the environment. SOAR extends that by automating the response actions that analysts would otherwise perform by hand.
{ .page-lead }

!!! note "Interview answer"
    *"A SIEM aggregates logs from all sources, correlates events using rules, and surfaces alerts for analysts to investigate. SOAR takes those alerts and triggers automated playbooks — isolating hosts, creating tickets, enriching indicators, and notifying teams — reducing manual workload and speeding up response."*

## SIEM — Security Information and Event Management

### What it does

A SIEM ingests logs from firewalls, servers, endpoints, cloud services, identity systems, and applications. It normalises them into a common format, applies correlation rules to link related events, and generates alerts when suspicious patterns emerge.

| Capability | Description |
|-----------|-------------|
| Log collection | Centralised ingestion from all sources — syslog, API, agent, or cloud connector |
| Normalisation | Converting diverse log formats into a searchable common schema |
| Correlation | Linking events across sources to detect multi-step attack patterns |
| Alerting | Firing on rules or thresholds — e.g. brute force, impossible travel |
| Search & investigation | Full log search for threat hunting and incident analysis |
| Compliance reporting | Log retention and audit trails for PCI DSS, ISO 27001, and others |

### Real-world example

A SIEM rule fires when the same user account attempts to log in from two countries within 10 minutes. The rule correlates an Azure AD sign-in log with a VPN access log, identifies the impossible travel anomaly, and raises a high-priority alert.

### Common SIEM platforms

| Platform | Notes |
|---------|-------|
| Splunk Enterprise Security | Market leader; powerful search language (SPL); on-prem and cloud |
| Microsoft Sentinel | Cloud-native; deep integration with Microsoft 365 and Azure |
| IBM QRadar | Enterprise SIEM with strong network flow analysis |
| Elastic SIEM | Open-source stack with Kibana and detection rules |
| Google Chronicle | Cloud-scale SIEM with fast retrohunt across years of data |

### Key SIEM concepts

- **Use case**: A specific detection scenario the SIEM is tuned to find — e.g. lateral movement, admin account misuse
- **Detection rule**: Logic that triggers an alert when event patterns match known bad behaviour
- **MTTD**: Mean Time to Detect — how long from attacker action to alert
- **False positive**: Alert that fires on benign activity; tuning reduces alert fatigue
- **Log source coverage**: The breadth of telemetry feeding the SIEM — gaps here mean blind spots

---

## SOAR — Security Orchestration, Automation, and Response

### What it does

SOAR platforms automate repetitive response tasks triggered by SIEM alerts or other signals. They connect to security tools via APIs and execute playbooks without requiring a human at every step.

| Capability | Description |
|-----------|-------------|
| Orchestration | Coordinating actions across SIEM, EDR, ticketing, firewall, and identity tools |
| Automation | Running playbooks automatically — enrich IP, isolate host, create ticket, notify analyst |
| Case management | Tracking incident timelines, evidence, and escalation status |
| Analyst-assisted | Some steps are human decisions; SOAR presents enriched context to speed decisions |

### How SIEM and SOAR work together

```
SIEM alert fired
      │
      ▼
SOAR playbook triggered
      │
      ├── Enrich IP against threat intel
      ├── Check user's recent activity in IdP logs
      ├── Query EDR for process tree on the host
      ├── Create Jira ticket with all findings
      └── If high confidence → auto-isolate endpoint
```

### Common SOAR platforms

| Platform | Notes |
|---------|-------|
| Palo Alto Cortex XSOAR | Market leader; 700+ integrations; rich playbook builder |
| Splunk SOAR | Tight SIEM integration; formerly Phantom |
| Microsoft Sentinel + Logic Apps | Cloud-native automation within Sentinel |
| IBM Resilient | Enterprise case management with automation |
| Swimlane | Low-code playbooks; strong audit trail |

## Common interview questions

#### What is the difference between SIEM and SOAR?
> A SIEM collects, correlates, and alerts on security data. SOAR automates the response to those alerts — running playbooks, enriching context, and coordinating actions across tools. SIEM is detection; SOAR is automated response.

#### What causes alert fatigue?
> Alert fatigue happens when analysts receive so many low-quality or duplicate alerts that they start ignoring or missing real ones. The solution is to tune detection rules, correlate related alerts, and use SOAR to auto-close confirmed false positives.

#### What is a SOAR playbook?
> A playbook is an automated workflow that defines the exact steps to take in response to a specific type of alert — for example, a phishing playbook might extract links, detonate them in a sandbox, block the sender domain, and notify the user's manager.
