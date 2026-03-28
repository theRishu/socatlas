# IDS and IPS

An IDS, or Intrusion Detection System, monitors activity and raises alerts when it sees suspicious behavior. An IPS, or Intrusion Prevention System, goes a step further by blocking or stopping that activity automatically.
{ .page-lead }

!!! note "Interview answer"
    *"An IDS detects suspicious traffic or behavior and alerts analysts, while an IPS is placed inline and can actively block malicious traffic in real time. IDS is passive monitoring, IPS is active prevention."*

## IDS versus IPS

| Feature | IDS | IPS |
| --- | --- | --- |
| Main role | Detect and alert | Detect and block |
| Position | Out-of-band or monitoring mode | Inline with traffic |
| Response style | Passive | Active |
| Risk | May miss threats if no one responds | May block legitimate traffic if misconfigured |

## Common types

| Type | Meaning | Example |
| --- | --- | --- |
| NIDS | Network-based intrusion detection | Snort, Zeek |
| HIDS | Host-based intrusion detection | OSSEC |
| NIPS | Network-based intrusion prevention | Cisco Firepower, Suricata inline |
| HIPS | Host-based intrusion prevention | Endpoint prevention features on hosts |

## Detection approaches

### Signature-based

Looks for known bad patterns. Good for known attacks, but weak against zero-days.

### Anomaly-based

Looks for behavior that deviates from the normal baseline. Better for unknown threats, but can create more false positives.

## Common interview questions

#### Where is an IPS placed?
> An IPS is typically placed inline so that traffic must pass through it before reaching the protected system.

#### What is a SPAN port?
> A SPAN port, or port mirroring, is a switch port that receives a copy of network traffic so a monitoring tool such as a NIDS can inspect it without sitting inline.
