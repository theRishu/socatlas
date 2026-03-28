# EDR, XDR & MDR

Endpoint Detection and Response, Extended Detection and Response, and Managed Detection and Response are three related but distinct capabilities. Together they form the modern detection and response layer that goes far beyond traditional antivirus.
{ .page-lead }

!!! note "Interview answer"
    *"EDR monitors individual endpoints for suspicious behaviour and enables investigation and containment. XDR extends that by correlating signals across endpoint, identity, email, network, and cloud into a single detection view. MDR is a managed service where a third party operates these capabilities on your behalf."*

## EDR — Endpoint Detection and Response

EDR replaced traditional antivirus by continuously recording what happens on a device — processes, network connections, file changes, script execution, and memory behaviour — and using that data to detect, investigate, and respond to threats.

### What EDR does

| Capability | Description |
|-----------|-------------|
| Continuous monitoring | Records all process activity, script execution, file operations, and registry changes |
| Behavioural detection | Flags suspicious patterns — not just known signatures — so zero-days can be caught |
| Process tree | Shows the full chain of parent → child processes so analysts understand how an attack unfolded |
| Threat hunting | Lets analysts search historical telemetry for indicators of compromise across all endpoints |
| Isolation | Can cut a compromised device off from the network while keeping telemetry flowing |
| Remote response | Analysts can run queries, kill processes, or collect forensic artefacts remotely |

### Real-world example

An EDR agent on a finance laptop observes:

1. `winword.exe` spawning `cmd.exe` (unusual)
2. `cmd.exe` downloading a script from an external IP
3. The script attempting to disable Windows Defender

The EDR detects the behaviour chain, assigns a high-severity alert, and automatically isolates the laptop — stopping lateral movement before the attacker can pivot to other systems.

### Leading EDR platforms

| Platform | Notes |
|---------|-------|
| CrowdStrike Falcon | Cloud-native; lightweight agent; industry-leading threat intelligence |
| SentinelOne | Strong autonomous response; kernel-level visibility |
| Microsoft Defender for Endpoint | Deep Windows integration; part of the Microsoft XDR ecosystem |
| Palo Alto Cortex XDR | Combines EDR with network and cloud telemetry |
| Trellix (McAfee/FireEye) | Enterprise-focused; strong MDR integration |

---

## XDR — Extended Detection and Response

XDR extends EDR by breaking down the silos between security tools. Instead of separate alerts from your EDR, your email gateway, your identity platform, and your network sensors, XDR correlates all of them into unified incidents.

### What XDR adds over EDR

| Capability | EDR | XDR |
|-----------|-----|-----|
| Coverage | Endpoints only | Endpoint + identity + email + network + cloud |
| Alert correlation | Per-endpoint | Cross-signal incident grouping |
| Investigation | Host-centric pivot | Follow attack across all affected systems |
| Context | Process and file data | Full attack chain across multiple layers |

### Example XDR correlation

An XDR platform links:

- **Email:** A phishing email was delivered and a link was clicked
- **Endpoint:** PowerShell ran and downloaded a file seconds later
- **Identity:** The user's account authenticated from a new location 10 minutes later
- **Network:** Outbound connection to a known C2 IP

All four alerts — from four different tools — are grouped into one incident with a single timeline. Without XDR, an analyst would need to manually connect these across four dashboards.

### Leading XDR platforms

| Platform | Notes |
|---------|-------|
| Microsoft Defender XDR | Correlates Defender for Endpoint, Office 365, Entra ID, and Defender for Cloud |
| Palo Alto Cortex XDR | Combines Prisma cloud data with endpoint and network telemetry |
| CrowdStrike Falcon XDR | Extends Falcon EDR to third-party data sources |
| Trellix XDR | Multi-vendor open XDR approach |
| Elastic Security | Open-source XDR with broad integration options |

---

## MDR — Managed Detection and Response

MDR is a service, not a product. An organisation hires an MDR provider who monitors their environment 24/7, investigates threats, and performs containment — essentially running EDR and XDR for them.

### Why organisations use MDR

| Reason | Detail |
|--------|--------|
| No in-house SOC | MDR gives 24/7 monitoring without building a full team |
| Expertise gap | MDR providers bring experienced analysts and threat hunters |
| Technology included | Many MDR services bundle their own EDR platform |
| Speed | MDR providers often respond faster than an internal team that handles other duties |
| Cost | Cheaper than maintaining a fully staffed internal SOC for many organisations |

### MDR vs MSSP

| | MDR | MSSP |
|-|-----|------|
| Focus | Detection and response — active threat hunting | Broader managed security services — firewall, log management, compliance |
| Depth | Deep investigation and containment | Alert forwarding and monitoring |
| Response | Analyst actively contains threats | Typically alerts the customer to act |

### Leading MDR providers

| Provider | Notes |
|---------|-------|
| CrowdStrike Falcon Complete | Full managed EDR from CrowdStrike |
| Arctic Wolf | Network-centric MDR with continuous monitoring |
| Rapid7 MDR | Combines Rapid7 tools with human-led investigation |
| Sophos MDR | Strong SMB focus; integrates with third-party tools |
| Mandiant MDR | Threat-intelligence-led investigation |

---

## How EDR, XDR, and MDR Work Together

```
                    Your environment
       ┌─────────┬───────────┬──────────┬─────────┐
       │Endpoints│  Email    │ Identity │  Cloud  │
       └────┬────┴─────┬─────┴────┬─────┴────┬────┘
            │          │          │           │
            └──────────┴──────────┴───────────┘
                              │
                            EDR               ← monitors endpoints
                              │
                            XDR               ← correlates all signals
                              │
                    MDR (if outsourced)       ← human analysts 24/7
                              │
                      Alert → Investigate → Contain
```

## Interview Questions

#### What is the difference between EDR and antivirus?
> Traditional antivirus uses signatures to detect known malware. EDR monitors all endpoint behaviour continuously so it can catch unknown threats, fileless attacks, and living-off-the-land techniques that have no signature. EDR also provides investigation, hunting, and remote response — antivirus only prevents and removes.

#### What does it mean to isolate a host in EDR?
> Isolation cuts the device's network access so it cannot communicate with other systems or the attacker's C2 infrastructure. The EDR agent itself stays connected so analysts can still run queries, collect evidence, and remediate remotely without physically touching the machine.

#### Why would an analyst look at the process tree?
> The process tree shows which process launched which child process and in what order. It reveals how an attack unfolded — for example, seeing `outlook.exe → powershell.exe → certutil.exe` immediately tells you a macro-enabled email executed a download cradle.

#### When would you choose MDR over building your own SOC?
> When the organisation lacks the budget, staffing, or expertise to run 24/7 monitoring internally. MDR makes sense for organisations without a mature security function who need immediate detection and response capability without a multi-year programme to build it.
