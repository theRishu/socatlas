# ⚡ Domains & Kill Chain — Points 501–600

!!! note "Format: Point & Concept → Interview Answer → Example / Tool"
    Each row gives you a clean definition you can say in an interview, plus a real-world example or tool.

---

## 🏢 Security Domains (501–550)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 501. Network Security | Protecting the confidentiality, integrity, and availability of data as it moves across or sits within networks. | VLANs, firewalls, IDS/IPS, and network segmentation |
| 502. Application Security | Discipline focused on building and testing software so vulnerabilities are prevented, found, and fixed throughout its lifecycle. | SAST, DAST, dependency scanning, and secure code review |
| 503. Cloud Security | Protecting cloud workloads, identities, configurations, and data under the shared responsibility model. | AWS Security Hub, Defender for Cloud, cloud CSPM tools |
| 504. Endpoint Security | Detecting and preventing threats on user devices, servers, and workstations using behaviour-based controls. | CrowdStrike Falcon, SentinelOne, Microsoft Defender |
| 505. Mobile Security | Protecting mobile devices, apps, and data from malware, data leakage, and unauthorised access. | MDM policy enforcement plus mobile app attestation |
| 506. IoT Security | Protecting connected devices, firmware, telemetry channels, and management interfaces from abuse and takeover. | Signed firmware, device identity certificates, network isolation |
| 507. Data Security | Keeping data confidential, accurate, and available through classification, encryption, access control, and retention rules. | Azure Purview labels, AES-256, role-based access |
| 508. Identity Management | Provisioning, governing, and deprovisioning digital identities and their access rights over time. | Okta lifecycle management, Microsoft Entra ID |
| 509. Access Management | Determining and enforcing which identities can access which resources, from where, and under what conditions. | Conditional Access policies, zero trust access controls |
| 510. Risk Management | Identifying, assessing, prioritising, and treating security risks so the business makes informed decisions about acceptable exposure. | NIST RMF, FAIR model, business impact workshops |
| 511. Governance | Oversight structure that sets security direction, assigns accountability, and aligns security decisions with business objectives. | Security steering committee with named policy owners |
| 512. Compliance | Meeting legal, regulatory, contractual, or policy obligations and being able to prove it with evidence. | Passing a PCI DSS QSA assessment with documented controls |
| 513. Incident Response | Coordinated actions to detect, contain, eradicate, and recover from security events while minimising business impact. | PICERL lifecycle using TheHive, XSOAR, or Jira |
| 514. Threat Intelligence | Curated knowledge about adversary infrastructure, TTPs, and indicators used to improve defence and investigation. | MISP feeds, Recorded Future, MITRE ATT&CK mapping |
| 515. Digital Forensics | Collecting and analysing digital evidence in a way that preserves integrity and maintains a legal chain of custody. | Volatility for memory forensics; Autopsy for disk analysis |
| 516. Cryptography | Mathematical techniques — encryption, hashing, and digital signatures — that protect data and verify trust. | AES-256 for storage, TLS 1.3 for transit, RSA for signatures |
| 517. Physical Security | Protecting facilities, hardware, and physical access points from unauthorised entry, theft, or damage. | Mantraps, RFID badge access, CCTV on server room entry |
| 518. Operational Security | Protecting day-to-day processes and handling practices so sensitive operational details are not leaked or misused. | Restricting internal topology diagrams and change schedules |
| 519. Business Continuity | Planning and capability that keeps critical business functions operating during a disruption or disaster. | Manual fallback procedures, alternate processing sites |
| 520. Disaster Recovery | Technical process of restoring systems, applications, and data after a major failure or destructive event. | Restore core infrastructure in a secondary region within RTO |
| 521. Security Architecture | High-level design of how controls, trust boundaries, data flows, and systems fit together to reduce risk. | Reference architecture showing IAM, segmentation, and logging |
| 522. Security Engineering | Building and maintaining technical controls, secure platforms, and integrations that implement the architecture. | Deploying SSO, SIEM pipelines, and EDR at enterprise scale |
| 523. Security Operations | Day-to-day monitoring, alert triage, investigation, and response executed by the SOC or security team. | L1 triage, L2 investigation, L3 threat hunting in the SOC |
| 524. Security Analytics | Applying statistical and ML methods to large security datasets to identify patterns and anomalies humans would miss. | UEBA flagging impossible travel or unusual admin activity |
| 525. Security Monitoring | Continuous collection, review, and alerting on telemetry to detect misuse, control failure, or drift in near real time. | Splunk dashboards, Microsoft Sentinel analytics rules |
| 526. Security Testing | Activities that validate whether systems are secure and controls actually work under attack conditions. | Penetration tests, red team exercises, SAST, configuration review |
| 527. Vulnerability Management | Ongoing programme for discovering, prioritising, remediating, and verifying security weaknesses across the environment. | Weekly Nessus scan results tracked to remediation SLA |
| 528. Patch Management | Process for testing and deploying vendor-released fixes to eliminate known vulnerabilities across systems. | WSUS, Microsoft Intune, or Ansible for patch automation |
| 529. Configuration Management | Defining approved secure baselines, controlling changes, and detecting drift from those baselines. | Group Policy enforcing hardened OS builds across the fleet |
| 530. Asset Management | Maintaining an accurate, up-to-date inventory of all systems, software, owners, and criticality ratings. | CMDB linked to endpoint discovery and owner assignments |
| 531. Identity Federation | Trust relationship that allows an identity provider in one organisation to authenticate users into another's systems. | SAML 2.0 trust between enterprise Entra ID and a partner's SaaS |
| 532. Access Control | Determining and enforcing who can access resources, what they can do, and what context is required. | RBAC in IAM; Conditional Access requiring compliant device |
| 533. Authentication | Verifying that a user, device, or service is genuinely who or what it claims to be. | Password plus FIDO2 hardware key |
| 534. Authorization | Deciding what an authenticated identity is permitted to access or do, based on roles or attributes. | IAM role granting read-only access to CloudWatch logs |
| 535. Accounting | Recording what authenticated identities actually did so activity can be audited and investigated. | AAA server logging admin commands on network devices |
| 536. Secure Development | Writing and reviewing code with security requirements in mind from the start, not added at the end. | Threat modeling in design phase, SAST in CI, pentest pre-release |
| 537. DevSecOps | Integrating security checks and controls directly into developer workflows and CI/CD pipelines. | GitHub Advanced Security blocking a push with leaked credentials |
| 538. API Security | Protecting APIs from unauthorised access, injection attacks, excessive data exposure, and request abuse. | API gateway enforcing OAuth 2.0, schema validation, rate limits |
| 539. Database Security | Protecting databases from injection, unauthorised access, privilege abuse, and data theft. | Least-privilege DB roles, TDE encryption, query monitoring |
| 540. Web Security | Securing browser-facing applications and HTTP services from injection, session attacks, and abuse. | WAF, Content Security Policy, server-side input validation |
| 541. Email Security | Stopping phishing, spoofing, malware attachments, and spam before they reach users. | Proofpoint or Mimecast with DMARC, DKIM, and SPF enforcement |
| 542. Endpoint Detection | Monitoring endpoints continuously for behavioural indicators of compromise and raising alerts for investigation. | CrowdStrike Falcon detecting a living-off-the-land PowerShell |
| 543. Network Detection | Identifying malicious traffic patterns, anomalous flows, and lateral movement on the network. | Zeek or Suricata flagging DNS tunnelling or C2 beaconing |
| 544. Cloud Workload Security | Protecting virtual machines, containers, and serverless functions running in cloud environments. | Trivy scanning container images; Defender for Servers on VMs |
| 545. Container Security | Scanning images for vulnerabilities, hardening runtime settings, and monitoring container behaviour. | Trivy, Falco, and admission policies via OPA Gatekeeper |
| 546. Kubernetes Security | Applying RBAC, network policies, pod security, admission control, and runtime monitoring in Kubernetes. | kube-bench for CIS benchmark; Falco for runtime alerts |
| 547. SIEM Domain | Security function centred on centralised log analytics, correlation, and detection — the brain of the SOC. | Splunk ES or Microsoft Sentinel running detection rules |
| 548. SOAR Domain | Security function focused on automating response actions triggered by SIEM or other alerts via playbooks. | Cortex XSOAR playbook auto-isolating a host on EDR alert |
| 549. Threat Hunting | Proactive, hypothesis-driven search for attacker behaviour that automated detections have not yet caught. | Hunter searches EDR data for suspicious WMI use and LOLbins |
| 550. Purple Teaming | Collaborative exercise where offensive and defensive teams work together to test and improve detections simultaneously. | Red team runs ATT&CK technique; blue team tunes SIEM rule live |

---

## ⚙️ Cyber Kill Chain — All Seven Phases (551–600)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 551. Reconnaissance Phase | First kill-chain stage — the attacker researches targets to understand the attack surface before acting. | WHOIS, LinkedIn, Shodan, DNS enumeration |
| 552. Target Identification | Selecting which specific users, systems, or assets to focus on based on reconnaissance findings. | Finance VPN gateway and CFO's email chosen as high-value targets |
| 553. Information Gathering | Collecting details about people, systems, services, and exposures before choosing an attack path. | GitHub leaks, job adverts, and public DNS records |
| 554. OSINT Collection | Gathering intelligence from publicly available sources without touching the target's systems. | Shodan, LinkedIn, Censys, Google Dorking |
| 555. Social Recon | Using open sources to learn personal details about targets to make social-engineering lures more convincing. | Researching a target on LinkedIn before crafting a spear-phish |
| 556. Scanning Phase | Active probing of hosts, ports, and services to map the attack surface and find entry points. | Nmap port scan; banner grabbing on exposed services |
| 557. Footprinting | Building a profile of the target's external systems, domains, and infrastructure. | Mapping IP ranges, hostnames, and ASN ownership |
| 558. Network Scanning | Automated discovery of live hosts, open ports, and reachable services on a network. | Nmap scan showing RDP exposed on 3389, SSH on 22 |
| 559. Port Scanning | Probing specific ports to determine which services are running and potentially exploitable. | Masscan fast-scanning an entire /16 for open 443 |
| 560. Vulnerability Identification | Finding specific flaws, misconfigurations, or missing patches that can be exploited. | Nessus scan revealing CVE-2021-44228 (Log4Shell) on a server |
| 561. Weaponisation | Preparing a deliverable payload by combining an exploit with malware — before any contact with the target. | Macro document containing PowerShell downloader |
| 562. Malware Preparation | Building, obfuscating, or adapting malware so it evades defences and executes reliably on the target. | Encoding shellcode to bypass signature detection |
| 563. Payload Preparation | Creating or configuring the specific malicious code that runs after the exploit achieves execution. | Configuring a Cobalt Strike beacon with attacker C2 address |
| 564. Exploit Development | Writing or adapting code that reliably triggers a vulnerability and gives the attacker code execution. | Developing a reliable PoC for a buffer-overflow vulnerability |
| 565. Attack Planning | Organising targets, lures, infrastructure, tooling, and timing before launching the operation. | Setting up phishing domains, C2 servers, and payload staging |
| 566. Delivery Phase | Sending the weaponised payload or lure to the target environment — the first active contact point. | Phishing email with malicious attachment or link |
| 567. Phishing Delivery | Sending deceptive emails or messages designed to trick users into clicking or opening malicious content. | Spoofed Microsoft 365 login prompt email |
| 568. Attachment Delivery | Sending a malicious file so the recipient opens it and triggers the payload. | Spear-phish with weaponised Excel spreadsheet |
| 569. Drive-by Download | Infecting a user simply by visiting a webpage that hosts malicious code or redirects to an exploit kit. | Booby-trapped news site using a browser exploit |
| 570. USB Delivery | Using removable media as the delivery mechanism — left in car parks or mailed to targets. | Labelled USB drop: "Salary Review 2025.xlsx" |
| 571. Exploitation Phase | Triggering the vulnerability or user action to achieve code execution or access on the target. | Macro enabled → PowerShell downloads second stage |
| 572. Vulnerability Exploitation | Abusing a specific flaw to gain access or execution beyond what is normally permitted. | EternalBlue exploiting SMBv1 to run arbitrary code |
| 573. Code Execution | Running attacker-chosen commands or binaries on the victim system after exploitation. | netcat reverse shell executing commands on the target server |
| 574. Privilege Escalation | Gaining higher-level access than the initial foothold provides. | Token impersonation to move from user to SYSTEM |
| 575. System Compromise | State where the attacker has control over a system or identity beyond their authorised scope. | Domain admin credentials extracted from memory with Mimikatz |
| 576. Installation Phase | Placing malware, backdoors, or persistence mechanisms on the compromised system. | Scheduled task and registry run key added for persistence |
| 577. Malware Installation | Dropping executable malware onto the host and ensuring it runs on startup or trigger. | Ransomware binary copied to startup folder |
| 578. Backdoor Installation | Creating a hidden, durable access method so the attacker can return without re-exploiting. | Web shell dropped at `/uploads/update.php` on the server |
| 579. Persistence Mechanism | Any technique that keeps attacker access alive across reboots, logouts, or initial remediation attempts. | Malicious Windows service configured to start automatically |
| 580. System Modification | Changing system files, registry keys, services, or scheduled tasks to support persistence or evasion. | Registry run key pointing to attacker binary |
| 581. C2 Phase | Stage where the compromised host communicates with attacker infrastructure to receive commands. | Cobalt Strike beacon sending heartbeat over HTTPS every 60s |
| 582. C2 Server | Attacker-controlled infrastructure that issues commands to compromised hosts and receives their output. | VPS behind Cloudflare hosting a Cobalt Strike team server |
| 583. Botnet Communication | Network of compromised hosts all checking in with a C2 server for coordinated instructions. | 50,000 infected hosts polling a C2 for spam or DDoS commands |
| 584. Exfiltration Channel | The path used to move stolen data from the target environment to attacker-controlled storage. | DNS tunnelling exfiltrating data as encoded subdomains |
| 585. Encrypted C2 | Command-and-control traffic protected by encryption to blend with normal HTTPS and evade inspection. | Beacon using malleable C2 profile mimicking legitimate CDN traffic |
| 586. Actions on Objectives | Final kill-chain stage — the attacker executes their primary goal after achieving access and persistence. | Data exfiltration followed by ransomware deployment |
| 587. Data Theft | Copying and exfiltrating sensitive files, credentials, or intellectual property to attacker infrastructure. | 4 TB of source code transferred to an attacker S3 bucket |
| 588. System Damage | Intentionally corrupting, destroying, or wiping data and systems to cause disruption. | Wiper malware erasing the MBR on all domain-joined hosts |
| 589. Service Disruption | Interrupting normal operation of a system, application, or business process. | Ransomware encrypting file shares making payroll system unavailable |
| 590. Financial Fraud | Deceiving victims or systems to steal money or divert payments. | Business email compromise diverting supplier payment to attacker account |
| 591. Lateral Movement | Moving from the first compromised system to other internal targets using stolen credentials or exploits. | PsExec with admin hash to open a shell on the file server |
| 592. Internal Reconnaissance | Mapping internal systems, users, and trust relationships after initial access. | BloodHound graphing Active Directory paths to Domain Admin |
| 593. Credential Harvesting | Collecting passwords, hashes, tokens, or session cookies to authenticate as legitimate users. | Mimikatz dumping LSASS memory for NTLM hashes |
| 594. Internal Privilege Escalation | Gaining higher privileges within the internal environment after the initial foothold is established. | UAC bypass escalating from standard user to local admin |
| 595. Data Exfiltration | Transferring collected data out of the target environment to attacker-controlled locations. | SCP of compressed archive to attacker server over port 443 |
| 596. Covering Tracks | Erasing evidence of the attack to slow investigation and delay remediation. | Clearing Windows Event Log and deleting attacker tools |
| 597. Log Deletion | Deleting or tampering with audit logs to remove evidence of attacker actions. | `wevtutil cl Security` clearing Security event log |
| 598. Persistence Maintenance | Checking and restoring persistence mechanisms if defenders remove them. | Attacker reinstalls backdoor after partial remediation |
| 599. Attack Completion | Stage where the attacker has achieved the primary objective and begins disengaging or preparing exit. | Exfiltration complete; ransomware deployed; tools removed |
| 600. Post-Attack Analysis | Review performed by defenders after the attack to understand timeline, root cause, and missed detections. | After-action report mapping attacker timeline to detection gaps |
