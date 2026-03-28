# Tools and technologies quick points (301-400)

!!! note "Format: concept, answer, example, or tool"
    Each row gives you a clean definition you can say in an interview, plus a concrete control, example, or tool.

---

## Scanning and exploitation (301-340)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 301. Nmap | Network-discovery and port-scanning tool used to identify hosts, services, versions, and sometimes operating systems. | `nmap -sV -O 192.168.1.1` during enumeration or exposure review |
| 302. Wireshark | Graphical packet analyzer used to capture and inspect network traffic in detail. | Filter like `http.request.method == GET` to study application traffic |
| 303. Metasploit | Framework for developing, testing, and launching exploits in authorized security assessments. | `msfconsole` using `exploit/ms17_010_eternalblue` in a lab or pentest |
| 304. Burp Suite | Web application testing platform for intercepting, modifying, replaying, and scanning HTTP traffic. | Used to test authentication, XSS, SQLi, and session handling in web apps |
| 305. Nessus | Commercial vulnerability scanner that identifies known CVEs, missing patches, and risky configurations. | Tenable Nessus or Tenable.io reporting exploitable findings across hosts |
| 306. OpenVAS | Open-source vulnerability scanner and management platform for identifying known weaknesses and misconfigurations | Greenbone/OpenVAS scan reporting CVEs across internal hosts |
| 307. Nikto | Web server scanner checking for 6,700+ dangerous files/CGIs | `nikto -h http://target.com` |
| 308. Aircrack-ng | WiFi security tool for WEP/WPA2 cracking | `aircrack-ng -w rockyou.txt capture.cap` |
| 309. John the Ripper | Password-cracking tool used to recover plaintext from hashes through wordlists, rules, and brute-force techniques | `john --wordlist=rockyou.txt hashes.txt` against leaked password hashes |
| 310. Hashcat | GPU-accelerated password-cracking tool optimized for speed against many hash formats. | `hashcat -m 0 hash.txt rockyou.txt` in a password-audit lab |
| 311. Hydra | Online password brute-force tool for login forms | `hydra -l admin -P pass.txt ssh://target` |
| 312. Netcat | Flexible networking utility used for port testing, banner grabbing, file transfer, and simple shells. | `nc -lvp 4444` listening for a reverse-shell connection |
| 313. Tcpdump | Command-line packet-capture tool for collecting and filtering raw network traffic on Unix-like systems | `tcpdump -i eth0 port 80 -w capture.pcap` during network troubleshooting |
| 314. Snort | Open-source IDS/IPS using signature detection | Monitors traffic for known attack patterns |
| 315. Suricata | High-performance IDS/IPS and network-security monitoring engine for signature and protocol analysis | Inline Suricata blocking malicious traffic in `drop` mode |
| 316. OSSEC | Host-based intrusion detection system that monitors logs, integrity changes, and suspicious endpoint activity. | Alerting when `/etc/passwd` or other critical files are modified |
| 317. Security Onion | Linux distribution built for network monitoring, detection, and threat-hunting workflows. | Bundles Zeek, Suricata, Elasticsearch, and supporting SOC tools |
| 318. Kali Linux | Penetration testing distro with 600+ pre-installed tools | Standard for pen testers and CTF players |
| 319. Parrot OS | Privacy- and security-focused Linux distribution often used for penetration testing and research. | Lighter alternative to Kali for anonymity and offensive labs |
| 320. BackBox Linux | Ubuntu-based security distribution with preinstalled penetration-testing and forensic tools | Lightweight alternative to Kali for security labs and assessments |
| 321. Firewall | Filters traffic based on IP, port, protocol rules | `iptables`, Windows Firewall, pfSense |
| 322. Next-Gen Firewall (NGFW) | Firewall platform combining traditional filtering with deep inspection, application awareness, and intrusion prevention. | Palo Alto, Fortinet FortiGate, or Cisco FTD |
| 323. WAF (Web App Firewall) | Filters HTTP traffic to block OWASP Top 10 attacks | Cloudflare WAF, AWS WAF, ModSecurity |
| 324. Network Firewall | Protects network perimeter from external threats | Checkpoint, Sophos XG |
| 325. Host-based Firewall | Firewall running directly on an endpoint to control inbound and outbound traffic for that specific machine. | Windows Defender Firewall, `ufw`, or macOS Application Firewall |
| 326. Proxy Firewall | Firewall that proxies connections and inspects traffic at the application layer before forwarding it. | Squid proxy with filtering and inspection policies |
| 327. Stateful Firewall | Firewall that tracks connection state so it can distinguish legitimate return traffic from unsolicited packets. | Most modern enterprise firewalls and cloud security groups |
| 328. Packet Filtering | Traffic-control method that evaluates packet headers such as IP, port, and protocol against rules. | Router ACLs or simple stateless firewall policies |
| 329. Deep Packet Inspection | Technique that inspects packet payloads and protocol details beyond basic headers. | Detecting and blocking BitTorrent, malware signatures, or risky application traffic |
| 330. IDS | Intrusion Detection System that monitors activity and raises alerts without necessarily blocking traffic. | Snort or Suricata running in alert-only mode |
| 331. IPS | Intrusion Prevention System deployed inline so it can actively block malicious traffic. | Suricata in `drop` mode or a dedicated IPS appliance |
| 332. EDR | Endpoint Detection and Response platform that monitors devices and supports investigation, containment, and automated response. | CrowdStrike Falcon, SentinelOne, or Microsoft Defender for Endpoint |
| 333. XDR | Extended Detection and Response combining endpoint, identity, network, email, or cloud telemetry in one detection platform. | Palo Alto Cortex XDR or Microsoft Defender XDR |
| 334. SIEM | Aggregates logs, correlates events, raises alerts | Splunk, IBM QRadar, Microsoft Sentinel |
| 335. SOAR | Automates IR playbooks triggered by SIEM alerts | XSOAR (Palo Alto), IBM Resilient |
| 336. Threat Intel Platform | Platform that ingests, enriches, correlates, and shares threat intelligence from many sources | MISP, ThreatConnect, or Recorded Future feeding indicators into a SOC |
| 337. Vulnerability Scanner | Scans systems for known CVEs and misconfigurations | Nessus, Qualys, OpenVAS |
| 338. Patch Management Tool | Pushes patches to multiple systems automatically | WSUS, Ansible, ManageEngine |
| 339. IAM | Identity and Access Management used to create identities, control permissions, and govern authentication. | Active Directory, Okta, or Microsoft Entra ID |
| 340. PAM | Privileged Access Management focused on controlling, monitoring, and reducing high-risk administrative access. | CyberArk, BeyondTrust, or Delinea privileged-access workflows |

---

## Encryption, DLP, and cloud tools (341-380)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 341. MFA Tool | Tool that adds a second or stronger authentication factor to user sign-in flows | Google Authenticator, Duo, Authy, or FIDO2 security keys |
| 342. Password Manager | Securely stores unique passwords for every site | Bitwarden (open source), 1Password, KeePass |
| 343. Encryption Software | Encrypts files and drives to protect data at rest | VeraCrypt, BitLocker, GnuPG |
| 344. Disk Encryption | Technology that encrypts an entire disk or volume so stolen hardware does not expose data | BitLocker on Windows or FileVault on macOS laptops |
| 345. Email Encryption | Encrypts email content so only recipient can read | PGP/GPG, S/MIME, ProtonMail |
| 346. DLP | Data Loss Prevention controls that detect and stop sensitive information from leaving approved boundaries. | Symantec DLP, Microsoft Purview, or email and endpoint DLP rules |
| 347. Backup Software | Software that automates backup creation, scheduling, retention, and restore workflows | Veeam, Acronis, or AWS Backup protecting servers and databases |
| 348. DR Tool | Automates disaster recovery testing and failover | Zerto, VMware Site Recovery Manager |
| 349. Cloud Security Tool | Tool that monitors or enforces cloud configuration, identity, workload, and compliance controls | AWS Security Hub, Prisma Cloud, or Microsoft Defender for Cloud |
| 350. Container Security | Tooling and controls that scan, harden, and monitor container images and runtimes | Trivy, Anchore, or Aqua Security scanning Docker images |
| 351. Kubernetes Security | Security controls and tools focused on clusters, pods, RBAC, admission, and runtime behavior | Falco, kube-bench, OPA Gatekeeper, or Kyverno in Kubernetes |
| 352. DevSecOps Tools | Integrates security into CI/CD pipelines | SonarQube, Snyk, GitLab SAST |
| 353. SAST | Static Application Security Testing that analyzes source code or compiled code without executing the application. | Checkmarx, Veracode, or SonarQube in CI pipelines |
| 354. DAST | Dynamic Application Security Testing that probes a running application from the outside to find exploitable weaknesses. | OWASP ZAP or Burp Suite testing a live web app |
| 355. Pen Test Tools | Tools used in authorised security assessments | Metasploit, Burp Suite, Nmap, BloodHound |
| 356. Red Team Tools | Offensive tools that simulate real attacker TTPs | Cobalt Strike, Brute Ratel, Empire |
| 357. Blue Team Tools | Defensive tools for detection and response | Splunk, CrowdStrike, OSSEC, Zeek |
| 358. Purple Team Tools | Combined attack-defense measurement tools | Atomic Red Team, Caldera (MITRE) |
| 359. Digital Forensics Tools | Collect and preserve evidence after incidents | Autopsy, FTK, dd, KAPE |
| 360. IR Tools | Tools specifically for incident response workflow | TheHive, Velociraptor, Cuckoo |

---

## 📊 Monitoring, OSINT & Compliance (381–400)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 361. Log Analysis Tool | Tool that parses, indexes, searches, and correlates logs for troubleshooting and security detection | Splunk, ELK Stack, or Graylog searching large event sets |
| 362. Network Monitor | Tracks bandwidth, latency, device health | Nagios, Zabbix, PRTG |
| 363. Security Monitor | Monitoring platform or workflow that surfaces suspicious events, alerts, and security-health signals | SIEM dashboards, SOC monitoring consoles, or EDR alert queues |
| 364. Threat Hunting Tool | Lets analysts search across data for IOCs | Velociraptor, Elastic, Grep-based hunting |
| 365. Malware Analysis Tool | Tool used to inspect suspicious files, behavior, memory, or code to understand malware safely | Cuckoo Sandbox, ANY.RUN, IDA Pro, or Ghidra |
| 366. Sandbox | Isolated environment to safely detonate malware | Cuckoo, VMware Sandbox, ANY.RUN |
| 367. Reverse Engineering Tool | Tool used to disassemble, decompile, and study binaries or malware internals | IDA Pro, Ghidra, Radare2, or Binary Ninja |
| 368. Packet Analyser | Tool that captures and decodes packets so protocols, sessions, and payloads can be examined | Wireshark or Tcpdump for DNS, HTTP, and TLS troubleshooting |
| 369. Traffic Analyser | Tool that studies communication patterns, flows, and anomalies across captured or summarized traffic | Zeek, NetFlow analyzers, or NDR dashboards |
| 370. Wireless Analyser | Tool that discovers and inspects wireless networks, clients, channels, and security settings | Kismet, Airodump-ng, or WiFi Explorer auditing nearby wireless networks |
| 371. Password Cracker | Attempts to recover passwords from hashes | Hashcat, John the Ripper |
| 372. Exploitation Framework | Structured platform for discovering and exploiting vulns | Metasploit, Core Impact |
| 373. Recon Tool | Gathers info about target before attacking | Maltego, Recon-ng, theHarvester |
| 374. OSINT Tool | Gathers intelligence from publicly available sources | Maltego, SpiderFoot, Shodan |
| 375. Web Scanner | Automated tool that crawls web apps and checks for common vulnerabilities and misconfigurations | OWASP ZAP, Nikto, or Burp Suite scanner |
| 376. API Testing Tool | Tests APIs for authentication flaws and injection | Postman + security tests, OWASP ZAP |
| 377. DB Security Tool | Tool that monitors, scans, or hardens databases against misuse, injection, and misconfiguration | Imperva DAM for monitoring or SQLMap during offensive validation |
| 378. FIM | File Integrity Monitoring that detects and alerts when important files are created, changed, or deleted unexpectedly. | Tripwire or the OSSEC FIM module watching system files |
| 379. Config Scanner | Checks system config against security benchmarks | Lynis, CIS-CAT, OpenSCAP |
| 380. Compliance Tool | Automates compliance evidence collection | Drata, Vanta, ServiceNow GRC |
| 381. Risk Assessment Tool | Tool or platform used to score, visualize, and prioritise business and technical risk | RiskLens or FAIR-based tooling for enterprise risk analysis |
| 382. Governance Tool | Manages policies, controls, and frameworks | RSA Archer, ServiceNow GRC |
| 383. Audit Tool | Tool that records evidence, changes, or control status to support audits and accountability | Audit logs, Tenable.sc, or GRC platforms storing review evidence |
| 384. Identity Federation Tool | Manages trust relationships across org boundaries | Okta, Azure AD B2B, Shibboleth |
| 385. Access Control Tool | Tool that enforces, governs, or reviews who can access systems, roles, and sensitive data | CyberArk, SailPoint, or Microsoft Entra ID access reviews |
| 386. Secure Gateway | Controls and monitors traffic at network boundary | Zscaler Internet Access, Cisco Umbrella |
| 387. VPN Gateway | Appliance or service that terminates encrypted VPN tunnels for remote users or site-to-site links | Cisco ASA, Palo Alto GlobalProtect, or WireGuard server |
| 388. Email Security Gateway | Gateway that inspects inbound and outbound email for phishing, spam, malware, and spoofing | Proofpoint, Mimecast, or Microsoft Defender for Office 365 |
| 389. Web Security Gateway | Proxy or cloud gateway that filters web traffic, URLs, and downloads for users | Zscaler Internet Access or Cisco Umbrella enforcing web policy |
| 390. CASB | Enforces security policies for cloud app usage | Microsoft Defender for Cloud Apps |
| 391. EPP | Endpoint Protection Platform combining antivirus, device control, firewall, and other preventative endpoint protections. | Trellix, Symantec Endpoint Protection, or similar endpoint suites |
| 392. Anti-Malware | Detects and removes malware (broader than antivirus) | Malwarebytes, Windows Defender |
| 393. Anti-Spyware | Specifically targets spyware/tracking software | Spybot Search & Destroy |
| 394. Anti-Ransomware | Detects ransomware behavior (file encryption) | Malwarebytes Anti-Ransomware |
| 395. Anti-Phishing Tool | Scans links and emails for phishing indicators | Microsoft Defender, Proofpoint |
| 396. Anti-Spam | Filtering technology that detects and blocks unsolicited or bulk email before it reaches users | SpamAssassin, Proofpoint, or Gmail spam filtering |
| 397. Security Awareness Tool | Delivers phishing simulations and training | KnowBe4, Proofpoint Security Awareness |
| 398. Training Platform | Platform delivering labs, exercises, or courses to build cybersecurity knowledge and skills | TryHackMe, Hack The Box, SANS, or internal awareness portals |
| 399. Bug Bounty Platform | Service that coordinates vulnerability disclosure between companies and approved researchers | HackerOne, Bugcrowd, or Intigriti managing reports and rewards |
| 400. Threat Sharing Platform | Allows sharing of IOCs between organizations | MISP, STIX/TAXII, ISACs |
