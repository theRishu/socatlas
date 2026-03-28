# Advanced topics quick points (901-1000)

!!! note "Format: concept, answer, example, or tool"
    Each row gives you a clean definition you can say in an interview, plus a real-world example, attack, or tool.

---

## Architecture and modern threat concepts (901-950)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 901. Zero Trust | Security model that eliminates implicit trust — every user, device, and request must be verified continuously regardless of network location. | BeyondCorp, Zscaler ZTNA, Conditional Access |
| 902. Defense in Depth | Layering multiple independent security controls so no single failure exposes the whole environment. | Firewall + EDR + MFA + network segmentation |
| 903. Least Privilege | Granting identities and processes only the minimum access they need to perform their task, nothing more. | PAM vaults, just-in-time admin access, scoped IAM roles |
| 904. Secure by Design | Embedding security requirements into a system's architecture from the start rather than bolting them on later. | Threat modeling conducted before the first line of code is written |
| 905. Security by Default | Shipping products in the safest reasonable configuration so users are protected before they change any settings. | Cloud storage private-by-default; admin MFA required out of the box |
| 906. Risk-Based Security | Prioritizing controls based on likelihood and impact of harm rather than treating all risks equally. | NIST RMF workshop maps threats to business impact |
| 907. Threat Modeling | Structured analysis of how a system could be attacked, what assets matter most, and which controls reduce risk most efficiently. | STRIDE model applied to a new payment API during design |
| 908. Attack Surface Reduction | Removing unnecessary services, open ports, permissions, and features that attackers could exploit. | Disable SMBv1, close unused ports, restrict admin interfaces |
| 909. Security Posture | Snapshot of an organization's overall security health — covering controls in place, known gaps, and remediation progress. | CSPM dashboard showing critical misconfigs and unpatched assets |
| 910. Cyber Resilience | The ability to absorb a significant attack or outage and restore normal operations with minimal lasting damage. | Recovering production from clean backups after ransomware without paying |
| 911. Security Maturity Model | Structured framework for assessing how repeatable, measurable, and well-governed a security program is. | CMMI or SSE-CMM maturity levels from ad hoc to optimized |
| 912. Security Metrics | Quantitative measures that show whether security controls are working and risk is trending up or down. | MTTD, MTTR, patch SLA compliance, phishing click rate |
| 913. KRI | Key Risk Indicator — a metric that signals growing exposure before it becomes an incident. | Rising number of critical unpatched internet-facing systems |
| 914. KPI | Key Performance Indicator for security — measures whether program goals are being achieved. | 95 % of high-severity findings patched within SLA |
| 915. Security Analytics | Applying statistical and ML-based analysis to large security datasets to find patterns humans would miss. | UEBA baselines normal login time; flags 3 AM access from a new country |
| 916. Big Data Security | Protecting the collection, storage, and processing of large-scale data from breaches, misuse, and privacy violations. | Data classification labels + encryption + retention controls on a data lake |
| 917. AI in Cybersecurity | Using machine learning and AI to speed up detection, automate triage, and improve defensive decisions at scale. | LLM-assisted alert summarization; AI-driven phishing URL classification |
| 918. ML Security | Defending machine-learning models, training pipelines, and inference endpoints against poisoning, theft, or adversarial evasion. | Adversarial-input testing of a fraud-detection model |
| 919. Blockchain Security | Protecting wallets, smart contracts, consensus nodes, and private keys from theft, exploitation, or manipulation. | Smart-contract audit with Slither; multi-sig wallet for treasury |
| 920. Post-Quantum Cryptography | Algorithms designed to remain secure against attacks from quantum computers. | NIST PQC candidates: CRYSTALS-Kyber, CRYSTALS-Dilithium |
| 921. Threat Intelligence | Curated knowledge about attacker infrastructure, tactics, indicators, and motivations used to improve defenses. | MISP, Recorded Future, commercial intel feeds |
| 922. APT | Advanced Persistent Threat — a well-resourced adversary that maintains stealthy, long-term access to achieve strategic goals. | Nation-state group persisting inside a network for months before exfiltration |
| 923. Nation-State Attack | Highly capable operation backed by a government, aimed at espionage, sabotage, or strategic disruption. | SolarWinds SUNBURST — months of stealthy access before discovery |
| 924. Hacktivism | Politically or socially motivated cyber activity used to protest, embarrass, or disrupt a target. | Anonymous DDoS campaigns and website defacements |
| 925. Cyber Espionage | Stealthy theft of sensitive information, intellectual property, or state secrets for intelligence advantage. | APT10 exfiltrating defense contractor blueprints over months |
| 926. Cyber Terrorism | Cyber operations intended to cause fear, panic, or major disruption to critical infrastructure for ideological aims. | Attack on power grid or water treatment systems |
| 927. Insider Risk | Security risk created by employees, contractors, or partners who misuse legitimate access — intentionally or accidentally. | Disgruntled admin exporting database backups before resignation |
| 928. Supply Chain Risk | Threats introduced through vendors, software dependencies, hardware suppliers, or integrators before reaching the target. | Compromised software build tool injecting malware into signed updates |
| 929. Third-Party Risk | Security exposure created by outside organizations that have data access, integrations, or operational influence. | MSP with privileged access to client networks and no MFA |
| 930. Vendor Risk Management | Ongoing program for identifying, assessing, and reducing risk from external suppliers and service providers. | Annual vendor questionnaires and contractual security requirements |
| 931. Bug Bounty | Programme that invites security researchers to responsibly report vulnerabilities under defined rules and rewards. | HackerOne or Bugcrowd operating a public program |
| 932. Vulnerability Disclosure | Reporting a discovered security flaw to the affected owner so they can fix it safely. | CVE filed → vendor notified → patch released → public advisory |
| 933. Responsible Disclosure | Coordinated approach where a researcher privately gives the vendor time to patch before publishing findings publicly. | Researcher reports flaw to vendor, agrees on 90-day disclosure window |
| 934. Red Team | Group that simulates real-world adversaries to test whether defenses actually hold up under realistic attacks. | Week-long red team exercise simulating phishing, lateral movement, and data theft |
| 935. Blue Team | Internal security group responsible for monitoring, detecting, and responding to threats in the environment. | SOC analysts reviewing SIEM alerts and EDR telemetry continuously |
| 936. Purple Team | Collaborative exercise where red and blue teams work together to test detections and improve response in real time. | Attack simulation run while blue team tunes SIEM rules alongside |
| 937. SOC | Security Operations Centre — the team and processes responsible for 24/7 threat monitoring, triage, and escalation. | L1 alert triage → L2 investigation → L3 incident escalation |
| 938. Threat Intel Sharing | Distributing attacker IOCs, TTPs, and context between trusted organizations to accelerate collective defense. | ISACs sharing indicators between sector members via STIX/TAXII |
| 939. Kill Chain | Sequential model of an intrusion showing each phase from reconnaissance through to attacker impact. | Recon → Weaponise → Deliver → Exploit → Install → C2 → Act |
| 940. MITRE ATT&CK | Globally accessible knowledge base of adversary tactics and techniques built from real-world observations. | Map detections and hunt queries to ATT&CK technique IDs |
| 941. Lockheed Kill Chain | Specific seven-phase kill-chain model developed by Lockheed Martin for structured intrusion analysis. | Breaking an intrusion at Delivery prevents all later phases |
| 942. Security Automation | Automating repetitive security tasks so responses are faster, consistent, and free analysts for higher-value work. | SOAR playbook auto-isolating an endpoint on an EDR alert |
| 943. Security Orchestration | Linking security tools and response steps together so actions happen in the right sequence with the right context. | SOAR coordinates SIEM alert → EDR isolation → Jira ticket |
| 944. DevSecOps | Integrating security controls directly into development and deployment pipelines so security ships with every release. | CI/CD with SAST, SCA, container scanning, and secrets detection |
| 945. Secure SDLC | Applying security activities — threat modeling, code review, testing, and release gates — throughout the software lifecycle. | Threat model at design, SAST in CI, DAST in staging, pentest before launch |
| 946. Code Security | Practices that keep source code, dependencies, secrets, and build outputs free from exploitable weakness. | GitHub Advanced Security with SAST, secret scanning, and Dependabot |
| 947. API Security | Protecting APIs from unauthorised access, injection attacks, excessive data exposure, and abuse. | API gateway enforcing OAuth 2.0, rate limits, and schema validation |
| 948. Microservices Security | Securing inter-service communication and identity in distributed architectures where each service is independently deployed. | Mutual TLS between services plus service-mesh policy enforcement |
| 949. Container Security | Scanning container images for vulnerabilities, hardening runtime configurations, and monitoring running containers. | Trivy image scanning in CI; Falco detecting suspicious syscalls at runtime |
| 950. Kubernetes Security | Applying admission control, network policies, RBAC, and runtime monitoring across Kubernetes clusters. | OPA Gatekeeper blocking privileged pods; network policies isolating namespaces |

## 🎓 Emerging Concepts & Security Careers (951–1000)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 951. Cloud-Native Security | Security design built for ephemeral, API-driven cloud environments rather than adapted from on-prem models. | AWS Security Hub, Azure Defender for Cloud, GCP Security Command Centre |
| 952. Identity-Centric Security | Treating verified identity as the primary security boundary in modern environments where perimeter controls are insufficient. | Okta or Microsoft Entra ID as the control plane for all access decisions |
| 953. Passwordless Authentication | Replacing reusable passwords with phishing-resistant methods like passkeys, hardware tokens, or biometrics. | FIDO2 passkeys; YubiKey WebAuthn; Windows Hello for Business |
| 954. Biometric Security | Using unique physical characteristics — fingerprints, face, voice — to authenticate identity. | Windows Hello facial recognition; Apple Face ID; mobile fingerprint sensors |
| 955. Behavioral Analytics | Establishing a baseline of normal user and entity activity then flagging statistically unusual deviations. | UEBA tool detects impossible-travel or after-hours bulk file access |
| 956. UEBA | User and Entity Behavior Analytics — systems that baseline activity and score risk when behavior deviates from normal. | Splunk UBA or Microsoft Sentinel analytics raising alerts on outlier sessions |
| 957. XDR | Extended Detection and Response that correlates signals across endpoint, identity, email, and cloud into one detection view. | Microsoft Defender XDR correlating endpoint, email, and identity signals |
| 958. Data-Centric Security | Protecting data itself — through classification, encryption, and access controls — regardless of where it is stored or moves. | Azure Purview labels data; Microsoft Information Protection encrypts by sensitivity |
| 959. Privacy by Design | Building data-minimisation, consent, and privacy controls into systems during design rather than retrofitting them after. | Only collect required fields; implement DSAR workflows; enforce retention limits |
| 960. Data Governance | The policies, ownership structure, and processes that define how data is classified, retained, accessed, and protected. | Data stewards enforce classification policy; retention automation deletes expired data |
| 961. Encryption Everywhere | Applying encryption consistently across data at rest, in transit, and in use to eliminate unprotected data paths. | AES-256 at rest, TLS 1.3 in transit, AWS KMS for key management |
| 962. Secure Communication | Ensuring all message channels use authenticated encryption and trusted protocols to prevent interception or tampering. | TLS 1.3 for HTTPS; SMTPS/STARTTLS for email relays; Signal protocol for messaging |
| 963. Digital Identity | A verifiable electronic representation of a person, service, or device used to authenticate and authorise access. | OIDC identity token from Entra ID; service account with a JWT assertion |
| 964. Identity Lifecycle | The end-to-end process of provisioning, maintaining, reviewing, and deprovisioning digital identities. | HR triggers Entra ID provisioning → role review quarterly → instant offboarding |
| 965. Access Lifecycle | The process of granting, adjusting, reviewing, and revoking access rights over time as roles and needs change. | Access review campaign removes stale permissions every 90 days |
| 966. PAM | Privileged Access Management — controlling, vaulting, and monitoring high-risk administrative access to reduce blast radius. | CyberArk or Delinea vaulting credentials; session recording for admin activity |
| 967. Identity Federation | A trust relationship that allows one identity provider to authenticate users into another organization's system. | SAML 2.0 trust between corporate Entra ID and a partner's Salesforce org |
| 968. SSO | Single Sign-On — one authentication session grants access to multiple connected applications without re-entering credentials. | Log in once via Okta to access Slack, GitHub, and AWS console |
| 969. Multi-Cloud Security | Securing workloads and identities consistently across two or more public cloud providers. | Unified CSPM scanning AWS, Azure, and GCP from one console |
| 970. Hybrid Cloud Security | Protecting environments that mix on-premises infrastructure with public cloud services. | On-prem AD synced to Entra ID; Defender for Servers covering both |
| 971. EDR | Endpoint Detection and Response — continuous monitoring of device behavior with detection, investigation, and containment capability. | CrowdStrike Falcon, SentinelOne, Microsoft Defender for Endpoint |
| 972. MDR | Managed Detection and Response — a third-party service that monitors, investigates, and helps contain threats on the customer's behalf. | Arctic Wolf or CrowdStrike MDR providing 24/7 threat monitoring |
| 973. SASE | Secure Access Service Edge — combining network security and WAN capability into a cloud-delivered service. | Zscaler Internet Access replacing on-prem web proxies |
| 974. Threat Intel Lifecycle | The process of collecting, processing, analysing, disseminating, and reviewing threat intelligence continuously. | Planning → collection → processing → analysis → dissemination → feedback |
| 975. Cybersecurity Framework | A structured set of guidelines and controls used to build and measure a security program. | NIST CSF, ISO 27001, CIS Controls |
| 976. ISO 27001 | International standard specifying requirements for an Information Security Management System and its continuous improvement. | Certification audit validating controls across people, process, and technology |
| 977. NIST CSF | Voluntary framework organizing security work around five functions: Identify, Protect, Detect, Respond, and Recover. | CSF profile used to benchmark current state and set target maturity |
| 978. Compliance Audit | Independent evidence-based review confirming that required controls exist and are operating effectively. | PCI QSA reviewing evidence across all 12 PCI DSS requirements |
| 979. Risk Methodology | A defined process for identifying, rating, prioritizing, and treating security risks consistently across the organization. | FAIR model quantifying financial impact; NIST RMF for federal systems |
| 980. Security Governance | The oversight structure that assigns accountability, sets direction, and ensures security aligns with business objectives. | CISO reports to board; policy owners assigned; steering committee reviews quarterly |
| 981. Security Leadership | Setting strategy, priorities, budgets, and executive communication so the security program aligns with business risk. | CISO presenting risk posture and investment roadmap to the board |
| 982. Security Awareness | Training users to recognize and report phishing, social engineering, and risky requests before acting on them. | KnowBe4 phishing simulations; mandatory annual awareness training |
| 983. Security Culture | Shared norms and behaviors that make secure decisions habitual rather than an occasional compliance exercise. | Employees report suspicious emails within minutes; engineers raise security issues in code review |
| 984. Human Factor | The influence of human behavior, psychology, stress, and mistakes on security outcomes. | User approves an MFA push after an attacker applies social-engineering pressure |
| 985. Social Engineering Defense | Combination of awareness training, process controls, and verification steps that reduce social-engineering success rates. | Callback verification policy; phishing drill results driving targeted retraining |
| 986. Phishing Simulation | Controlled test that sends realistic-looking phishing messages to employees to measure and improve detection rates. | KnowBe4 campaign; click data drives targeted coaching for at-risk users |
| 987. Continuous Monitoring | Ongoing collection, review, and alerting on security telemetry to detect misuse, drift, or control failure in near real time. | Splunk dashboards tracking login anomalies, file access, and patching gaps |
| 988. Continuous Improvement | Systematic cycle of using incident findings, audit outputs, and metrics to strengthen security controls over time. | Post-incident review feeds remediation backlog; SIEM rules tuned quarterly |
| 989. Security Innovation | Adopting or developing new methods that measurably improve prevention, detection, response, or usability. | Piloting AI-assisted detection engineering; deploying passwordless auth |
| 990. Future of Cybersecurity | The evolving direction of the field, shaped by AI, identity-centric models, cloud, and quantum computing threats. | Zero Trust as the baseline; AI-augmented SOC; post-quantum migration planning |
| 991. Cybersecurity Careers | The broad range of roles spanning offensive, defensive, cloud, governance, and leadership security work. | SOC analyst, pentester, cloud security engineer, GRC specialist, CISO |
| 992. Ethical Hacking | Authorised offensive testing performed by a skilled practitioner to discover and safely report security weaknesses. | Penetration tester scoping a black-box web application assessment |
| 993. Security Analyst | Practitioner who monitors alerts, investigates suspicious events, and coordinates containment when incidents occur. | SOC L2 analyst pivoting from a SIEM alert to EDR telemetry and threat intel |
| 994. SOC Analyst Tiers | L1 triage, L2 investigation, L3 escalation and advanced hunting — a tiered model for efficient alert handling. | L1 closes false positive; L2 confirms compromise; L3 hunts related infrastructure |
| 995. Penetration Tester | Offensive security specialist who safely exploits weaknesses within a defined scope to prove business impact. | Web pentest using Burp Suite, manual testing, and authenticated fuzzing |
| 996. Security Engineer | Practitioner who designs, builds, and maintains security controls, integrations, and secure-by-default platforms. | Building SSO federation, SIEM pipelines, and EDR deployment at scale |
| 997. Incident Responder | Security role specialising in triage, containment, evidence collection, eradication, and recovery during active incidents. | IR coordinator isolating hosts, resetting credentials, and preserving forensic images |
| 998. Digital Forensics Expert | Specialist who collects, preserves, and analyses digital evidence in ways that maintain integrity for potential legal use. | Volatility memory analysis; Autopsy disk forensics; chain of custody documentation |
| 999. CISO | Chief Information Security Officer — the senior executive responsible for enterprise security strategy, governance, and risk communication. | CISO presenting board-level risk posture, program investment, and ransomware readiness |
| 1000. Cybersecurity Professional | Anyone working in technical, governance, or leadership security roles — a broad term covering the full spectrum of the field. | Analyst, engineer, auditor, responder, compliance lead, or security architect |
