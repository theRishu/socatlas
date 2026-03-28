# Vulnerabilities, threats, exploits, and risk

These terms are closely related, but they are not interchangeable. Knowing the difference helps you describe how security problems are found, prioritized, and addressed.
{ .page-lead }

!!! note "Interview answer"
    *"A vulnerability is a weakness in a system, process, or configuration. A threat is something that can take advantage of that weakness. An exploit is the method or code used to trigger the weakness. Risk is the likelihood and impact of that threat successfully causing harm."*

## Core terms

| Term | Meaning | Example |
| --- | --- | --- |
| Vulnerability | A weakness that could be abused | Unpatched software or weak access control |
| Threat | A person, group, event, or condition that could cause harm | Ransomware operator, insider, or exposed internet service |
| Exploit | The technique or code used to abuse a vulnerability | SQL injection payload or remote code execution exploit |
| Risk | The likelihood and impact of harm | High risk of outage, data loss, or compromise |

## Risk in simple terms

Risk is often summarized like this:

`Risk = Threat x Vulnerability x Impact`

That expression is simplified, but it is useful in interviews because it shows that risk depends on both exposure and business consequence.

## CVE and CVSS

When a publicly known vulnerability is documented, it often receives a CVE identifier such as `CVE-2021-44228`. Its severity is commonly described with CVSS scores.

| CVSS range | Severity |
| --- | --- |
| 0.1 to 3.9 | Low |
| 4.0 to 6.9 | Medium |
| 7.0 to 8.9 | High |
| 9.0 to 10.0 | Critical |

CVSS is useful, but teams should also consider asset value, exploit activity, internet exposure, and business impact.

## Zero-day and n-day vulnerabilities

| Type | Meaning | Main challenge |
| --- | --- | --- |
| Zero-day | The vulnerability is unknown to the vendor or has no available fix | Defenders cannot rely on a normal patch yet |
| N-day | The vulnerability is known and usually has a patch available | Attackers may move quickly before organizations patch |

## Vulnerability management lifecycle

Most organizations handle vulnerabilities through a repeatable process:

1. Discover assets and scan for weaknesses.
2. Prioritize based on severity, exposure, and business impact.
3. Remediate by patching, reconfiguring, replacing, or compensating.
4. Verify that the fix worked.
5. Report and track progress over time.

## Common interview questions

#### What is an exposed attack surface?
> **Answer:** The attack surface is the collection of entry points an attacker can try to use, such as public IP addresses, open ports, internet-facing applications, exposed credentials, and weak user workflows.

#### How do you reduce risk if a system cannot be patched?
> **Answer:** Use compensating controls such as network segmentation, strict firewall rules, IPS signatures, application allowlisting, limited access, and closer monitoring until the system can be replaced or remediated properly.

#### What is the difference between a vulnerability assessment and a penetration test?
> **Answer:** A vulnerability assessment focuses on identifying and listing weaknesses, often at scale. A penetration test goes further by attempting controlled exploitation to show whether those weaknesses can actually be used to gain access or cause impact.
