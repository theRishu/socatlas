# Risk management and threat intelligence

Risk management helps an organization decide what to protect first. Threat intelligence helps it understand which attackers, techniques, and indicators matter most right now. Together, they help security teams spend time and budget where it will reduce the most risk.
{ .page-lead }

!!! note "Interview answer"
    *"Risk management is the process of identifying, assessing, and treating security risks based on likelihood and impact. Threat intelligence is the collection and analysis of information about current threats, adversaries, and techniques. In practice, I use threat intelligence to improve risk decisions so we prioritize the threats that are most relevant to our environment."*

## Risk basics

Risk is often explained with a simple model:

`Risk = Threat x Vulnerability x Impact`

That formula is not a full enterprise risk method, but it is useful in interviews because it shows the relationship between exposure and business impact.

## Risk treatment options

Once a risk is identified, teams usually choose one of four responses:

| Treatment | What it means | Example |
| --- | --- | --- |
| Mitigate | Reduce the likelihood or impact | Patch a server, enable MFA, segment a network |
| Transfer | Shift some financial impact to another party | Buy cyber insurance or use a managed service |
| Avoid | Stop the activity that creates the risk | Decommission a vulnerable legacy service |
| Accept | Keep the risk because it is within tolerance | Accept a low-impact internal issue with monitoring |

## Threat intelligence types

| Type | Audience | Example |
| --- | --- | --- |
| Strategic | Executives and leadership | Trends in ransomware against healthcare or banking |
| Operational | Security managers and incident responders | Intelligence about a campaign targeting a region or industry |
| Tactical | SOC analysts and defenders | Common attacker behavior, tools, and procedures |
| Technical | Security tools and analysts | Malicious IPs, domains, file hashes, and URLs |

## Threat intelligence lifecycle

Most threat intelligence programs follow a repeatable cycle:

1. Direction: define what intelligence is needed.
2. Collection: gather data from internal and external sources.
3. Processing: normalize and organize the data.
4. Analysis: turn raw data into useful findings.
5. Dissemination: share the findings with the right audience.
6. Feedback: improve the process based on what was useful.

## How risk management and threat intelligence work together

Threat intelligence becomes useful when it changes decisions. For example:

- if intelligence shows active exploitation of a VPN flaw, that vulnerability moves higher on the patching list
- if a sector is seeing business email compromise, email controls and finance approval processes may need more attention
- if an actor frequently uses a specific technique, SOC teams can map detections to that behavior

## Common interview questions

#### What is residual risk?
> **Answer:** Residual risk is the risk that remains after security controls have been applied. No control removes risk completely, so the remaining risk has to be accepted, monitored, or treated further.

#### What is the difference between an IOC and an IOA?
> **Answer:** An IOC, or indicator of compromise, is evidence that a system has likely already been compromised. An IOA, or indicator of attack, is a sign of suspicious behavior that may show an attack in progress or about to succeed.

#### What is the Pyramid of Pain?
> **Answer:** The Pyramid of Pain shows how difficult it is for an attacker to change different artifacts. Blocking a hash or IP address causes little pain because attackers can replace them quickly. Detecting tactics and techniques causes much more pain because changing behavior is harder.
