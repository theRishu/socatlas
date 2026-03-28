# SOC — Security Operations Centre

The SOC is the team and operational structure responsible for monitoring an organisation's environment 24/7, investigating security events, and coordinating response. It is not a tool — it is a function made up of people, processes, and technology working together.
{ .page-lead }

!!! note "Interview answer"
    *"A SOC is the team that monitors alerts from the SIEM and other sources, investigates suspicious activity, and responds to confirmed incidents. It operates in tiers — L1 analysts triage and filter, L2 go deeper on confirmed issues, and L3 handle advanced hunting and complex incidents."*

## SOC Structure & Tiers

| Tier | Role | Main Responsibility |
|------|------|----------------------|
| L1 Analyst | Alert Triage | Review incoming alerts, filter false positives, escalate real events |
| L2 Analyst | Investigation | Investigate escalated events, correlate evidence, determine scope |
| L3 Analyst / Threat Hunter | Advanced Analysis | Hunt for hidden threats, create detection rules, handle complex incidents |
| Incident Responder | Containment & Recovery | Lead active incidents — isolate, eradicate, restore |
| SOC Manager | Operations & Reporting | Manage team, track KPIs, report risk posture to leadership |

## SOC Models

| Model | Description | Best For |
|-------|-------------|---------|
| Internal SOC | In-house team operating within the organisation | Large enterprises with mature security |
| MSSP | Managed Security Service Provider running SOC externally | Organisations without in-house capability |
| Hybrid SOC | Internal team supported by a managed service | Mid-sized organisations building maturity |
| Virtual SOC | Distributed team with no physical SOC floor | Remote-first or budget-constrained setups |

## What a SOC Day Looks Like

### Alert Triage (L1)

1. New alert fires in the SIEM
2. L1 analyst reviews the alert, checks context (user, asset, time, source IP)
3. Query recent activity — is this isolated or part of a pattern?
4. **False positive** → document and close with reason
5. **Potential real event** → escalate to L2 with all gathered context

### Investigation (L2)

1. Receive escalated alert with L1 notes
2. Pull telemetry from EDR — process tree, parent process, child processes, network connections
3. Query SIEM — did this user or IP trigger other alerts recently?
4. Check threat intel feeds — is the IP, domain, or hash known bad?
5. **Confirmed incident** → hand off to IR / escalate to L3
6. **Inconclusive** → escalate to L3 for advanced analysis or close with justification

## Key SOC Metrics

| Metric | What it measures |
|--------|-----------------|
| MTTD | Mean Time to Detect — how quickly a threat is identified |
| MTTR | Mean Time to Respond — time from detection to containment |
| Alert volume | Total alerts per day — rising volume may signal noise or an attack |
| False positive rate | Percentage of alerts that turn out to be benign |
| Escalation rate | Percentage of L1 alerts that become real investigations |
| SLA compliance | Percentage of alerts investigated within the required timeframe |

## SOC Technologies

A SOC doesn't run on one tool. It uses a stack:

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Detection | SIEM (Splunk, Sentinel, QRadar) | Log correlation and alerting |
| Endpoint | EDR (CrowdStrike, SentinelOne) | Host-level visibility and containment |
| Automation | SOAR (XSOAR, Splunk SOAR) | Playbook-driven response automation |
| Threat Intel | MISP, Recorded Future, Mandiant | Enriching indicators with attacker context |
| Ticketing | Jira, ServiceNow, TheHive | Case tracking and escalation management |
| Network | NDR, IDS/IPS, Zeek | Network-level visibility and detection |

## Common Interview Questions

#### What is the difference between the SOC and the IR team?
> The SOC handles ongoing monitoring and triage every day. The incident response team steps in for confirmed, significant incidents requiring deep forensics, containment, and recovery. In smaller organisations the SOC and IR are the same team; in larger ones they are separate.

#### What is alert fatigue and how do you address it?
> Alert fatigue is when analysts are overwhelmed by too many low-quality alerts and start ignoring or missing real ones. You address it by tuning SIEM rules to reduce noise, suppressing known-good activity, using SOAR to auto-close confirmed false positives, and focusing on high-fidelity detections.

#### What makes a good SOC analyst?
> Curiosity — you want to understand why something happened, not just close the ticket. Attention to detail when pivoting through logs and telemetry. Good communication to escalate clearly. And the ability to stay calm under pressure during active incidents.

#### What is threat hunting?
> Threat hunting is a proactive search for attacker behaviour that automated detections have not yet caught. A hunter starts with a hypothesis — "what if an attacker is using living-off-the-land techniques?" — and searches through EDR and SIEM data looking for subtle signs of that behaviour.
