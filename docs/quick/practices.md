# ⚡ Security Practices — Points 401–500

!!! note "Format: Point & Concept → Interview Answer → Example / Tool"
    Each row gives you a clean definition you can say in an interview, plus a real-world example or tool.

---

## 🔑 Authentication & Access Controls (401–430)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 401. Strong Password Policy | Enforcing length, uniqueness, and checking against breached databases to prevent credential guessing. | Entra ID blocking passwords on the banned password list |
| 402. Password Complexity | Requiring mixed character types to increase the mathematical difficulty of brute-core cracking. | Policy requiring uppercase, lowercase, numbers, and symbols |
| 403. Password Length | The most critical factor in password strength; longer passwords defeat brute-force exponentially better than complex short ones. | Minimum 14 characters for admin accounts |
| 404. Password Rotation | Forcing users to change passwords periodically — though modern guidelines advise against this unless a breach is suspected. | NIST SP 800-63B recommends ending arbitrary 90-day rotations |
| 405. Password Hashing | Storing credentials using a one-way mathematical function so the original plaintext is never saved. | Argon2id, bcrypt, or PBKDF2 |
| 406. Password Salting | Adding random data to a password before hashing to defeat pre-computed rainbow table attacks. | A unique 16-byte salt appended to each user's password before hashing |
| 407. MFA Usage | Verifying identity using at least two independent factors: something you know, have, or are. | Password (know) + YubiKey hardware token (have) |
| 408. Biometric Auth | Using physical or behavioural characteristics to verify identity (something you are). | Windows Hello face recognition or Apple Touch ID |
| 409. Token-Based Auth | Issuing a short-lived digital token after login that the user presents for subsequent authentication without sending credentials again. | OAuth 2.0 access token or signed JWT |
| 410. Secure Login | A sign-in process protected by encryption, rate limiting, MFA, and secure session generation. | Authenticating over TLS 1.3 with anti-CSRF tokens |
| 411. Account Lockout | Automatically disabling an account for a set period after too many failed login attempts to stop brute-forcing. | Account locked for 15 minutes after 5 bad attempts |
| 412. Session Timeout | Automatically killing an active session after a period of inactivity to reduce the risk of session hijacking. | Banking app logging out after 10 minutes idle |
| 413. Secure Session | Protecting session identifiers so they cannot be intercepted, stolen, or replayed by attackers. | Setting `HttpOnly` and `Secure` flags on session cookies |
| 414. Least Privilege | Giving users and services only the absolute minimum permissions required to perform their job. | Developer gets read access to logs, but no access to customer data |
| 415. Need-to-Know | Restricting access to sensitive information strictly to those whose current duties require it, regardless of clearance. | Only the lead investigator has access to a live forensic image |
| 416. RBAC (Role-Based) | Grouping permissions into defined roles and assigning users to the roles, rather than assigning permissions directly. | "Helpdesk" role has password reset rights; "Analyst" role only has read-access |
| 417. ABAC (Attribute-Based) | Making access decisions based on the context of the user, device, environment, and data sensitivity. | Allowing access only from a managed laptop during business hours |
| 418. MAC (Mandatory) | A strict access model where the system enforces clearance levels and labels; users cannot change permissions. | Top Secret data access using SELinux in government networks |
| 419. DAC (Discretionary) | An access model where the creator or owner of a file decides who else is allowed to access it. | Standard Windows NTFS file permissions where owner grants read/write |
| 420. Privilege Escalation Prevention | Controls that stop a user or process from gaining higher-level rights than they were initially assigned. | Removing local admin rights and enforcing UAC (User Account Control) |
| 421. Network Segmentation | Dividing a network into separate zones isolated by firewalls to prevent lateral movement. | Guest WiFi completely segregated from the corporate LAN |
| 422. Micro-segmentation | Isolating workloads down to the individual host or container level, usually in cloud or virtualised environments. | VMware NSX restricting a web server from talking to any other web server |
| 423. Zero Trust | Removing implicit trust; every access request is authenticated and authorised regardless of network location. | BeyondCorp model where enterprise apps are accessed without a VPN |
| 424. Firewall Config | Defining rule sets that block all traffic by default and explicitly allow only required business traffic. | Denying all inbound traffic except ports 80 and 443 |
| 425. IDS Config | Setting up sensors to monitor network traffic for malicious signatures or anomalous behaviour and generate alerts. | Snort or Suricata inspecting traffic on a SPAN port |
| 426. IPS Config | Deploying sensors inline so they can actively drop malicious packets before they reach the target. | Palo Alto threat prevention dropping an exploit payload |
| 427. Secure Network Design | Architecting the network with DMZs, segmentation, and choke points to isolate untrusted traffic. | Placing web servers in a DMZ and databases in a locked-down internal zone |
| 428. VPN Implementation | Creating an encrypted tunnel over the internet to allow remote workers secure access to internal systems. | OpenVPN or WireGuard terminating at a secure gateway |
| 429. Secure WiFi Setup | Protecting wireless networks using strong encryption, RADIUS authentication, and physical access controls. | WPA3-Enterprise authenticating clients against Active Directory |
| 430. WPA3 | The latest Wi-Fi security standard using Simultaneous Authentication of Equals (SAE) to defeat offline dictionary attacks. | Replacing WPA2-PSK to protect against KRACK attacks |

## 🛡️ Encryption, Patching, and Monitoring (431–470)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 431. Encryption at Rest | Encrypting data while it is stored on disk so it cannot be read if the physical media is stolen. | BitLocker for Windows laptops or AES-256 for AWS S3 buckets |
| 432. Encryption in Transit | Encrypting data as it moves across a network to prevent interception and eavesdropping. | TLS 1.3 protecting HTTPS traffic between browser and server |
| 433. Full Disk Encryption | Encrypting the entire storage drive, including the OS, swap space, and temporary files. | FileVault 2 on macOS |
| 434. File-Level Encryption | Encrypting specific files or folders rather than the whole disk, allowing granular access controls. | EFS (Encrypting File System) on Windows or GPG for sensitive documents |
| 435. Key Management Policy | Rules governing how encryption keys are generated, stored, rotated, and destroyed securely. | Requiring asymmetric keys to be rotated annually |
| 436. Secure Key Storage | Storing cryptographic keys in isolated, tamper-resistant environments away from the data they encrypt. | AWS KMS or an on-premise Hardware Security Module (HSM) |
| 437. PKI (Public Key Infra) | The framework of hardware, software, roles, and policies needed to create, manage, and revoke digital certificates. | An internal Microsoft CA issuing certificates to corporate devices |
| 438. Certificate Management | Tracking the issuance and expiry of TLS certificates to prevent unexpected system outages. | Using Venafi to monitor and auto-renew certificates before expiry |
| 439. Secure Communication | Ensuring that endpoints verify each other's identity and encrypt their exchange securely. | Mutual TLS (mTLS) where both client and server present certificates |
| 440. HTTPS Enforcement | Forcing all web traffic to use secure TLS connections, preventing plaintext HTTP. | HSTS (HTTP Strict Transport Security) header |
| 441. Regular Updates | Applying routine software updates from vendors to quickly fix known vulnerabilities and bugs. | Windows Update pushing out fixes automatically |
| 442. Patch Management | A formal process of assessing, testing, and deploying updates across an enterprise without breaking applications. | Using Microsoft SCCM/Intune to ring-deploy patches to test groups first |
| 443. Vuln Scan Schedule | Running automated tools regularly to discover missing patches, misconfigurations, and known CVEs. | Weekly authenticated Nessus scanning of the server fleet |
| 444. Pen Test Routine | Hiring ethical hackers to manually exploit systems in a controlled way to find deep logical flaws scanners miss. | An annual web application pentest before a major release |
| 445. Security Audit | An independent evaluation of an organisation's adherence to security policies, controls, and standards. | SOC 2 Type II audit reviewing access control evidence |
| 446. Compliance Verification | Checking that technical settings continuously align with regulatory or framework requirements. | Automated checking of AWS accounts against CIS Foundations Benchmark |
| 447. Risk Assessment | Identifying assets, evaluating threats and vulnerabilities, and calculating the potential impact to the business. | Analysing the risk of a ransomware attack on the core database |
| 448. Risk Mitigation | Implementing security controls to reduce the likelihood or impact of a risk to an acceptable level. | Deploying EDR and offline backups to mitigate ransomware risk |
| 449. Security Monitoring | Continuously collecting and reviewing telemetry from across the environment to spot malicious activity. | 24/7 SOC analysts reviewing Splunk dashboards |
| 450. Log Management | Centralising, protecting, and retaining audit logs so they are available for detection and forensic investigation. | Forwarding all syslogs to a central ELK cluster |
| 451. Incident Detection | Identifying the initial signals that a security breach or policy violation may have occurred. | SIEM generating an alert for "Impossible Travel" |
| 452. Incident Response Plan | Documented procedures defining roles, communication, and step-by-step actions during a cyber crisis. | The corporate ransomware playbook |
| 453. Incident Reporting | The process of notifying internal stakeholders and external regulators about a significant breach. | Informing the ICO within 72 hours under GDPR requirements |
| 454. Incident Analysis | Investigating the scope, root cause, and timeline of an attack to inform containment strategies. | Timeline analysis of EDR logs to see what the attacker executing |
| 455. Threat Intel | Actionable information about attacker motives, infrastructure, and techniques used to proactively defend networks. | Ingesting a Mandiant feed of known-bad C2 IPs into the firewall |
| 456. Threat Hunting | Proactively searching through telemetry to find hidden threats that bypassed automated security alerts. | Searching EDR data for unusual PowerShell executions masking as legitimate admin work |
| 457. Malware Detection | Identifying malicious software on a system using signatures, heuristics, or behavioural analysis. | Antivirus flagging a file because its hash matches a known trojan |
| 458. Malware Prevention | Controls built to stop malicious code from executing or being delivered in the first place. | Application control (allow-listing) blocking all unapproved executables |
| 459. Backup Strategy | Designing backups to ensure data can be recovered even if the primary storage and network are compromised. | 3-2-1 rule: 3 copies, 2 media types, 1 offsite/immutable |
| 460. Data Recovery Plan | The technical steps required to restore systems and data from backups to resume normal operations. | Restoring the payroll database from a snapshot within a 4-hour RTO |

## 🏢 Physical, Training & Governance (461–500)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 461. Disaster Recovery | The technical processes and systems used to restore IT infrastructure after a catastrophic failure or event. | Failing over to a hot standby site in a different geographic region |
| 462. Business Continuity | The overarching plan that ensures critical business functions can continue operating during a major disruption. | Moving customer service calls to a backup call centre while IT is down |
| 463. Redundancy | Having duplicate critical components so that if one fails, the system continues to operate without interruption. | RAID 1 for hard drives; dual power supplies in a server |
| 464. Failover Systems | The automatic or manual switching to a redundant system when the primary system goes offline. | Active-passive database cluster switching to the passive node |
| 465. High Availability | Designing a system to remain operational and accessible for an extremely high percentage of time (e.g., 99.999%). | Deploying web servers behind a load balancer across three availability zones |
| 466. Physical Security | Protecting facilities, hardware, and people from physical threats like theft, vandalism, or unauthorised access. | Fences, locks, mantraps, and security guards |
| 467. Access Card System | Using electronic badges to restrict and audit physical entry to buildings and secure zones. | RFID readers logging every time an employee enters the server room |
| 468. CCTV Monitoring | Using video cameras to observe, record, and deter unauthorised access to sensitive physical locations. | Cameras covering the data centre entrances and loading docks |
| 469. Security Guards | Personnel trained to verify identities, monitor physical perimeters, and respond to physical security alarms. | 24/7 security desk checking IDs before allowing building access |
| 470. Secure Data Centre | A facility built specifically to house computing equipment securely, with power, cooling, and access controls. | Raised floors, biometric access, fire suppression, and dual-feed power |
| 471. Security Training | Educating staff on security policies and safe practices to reduce human-error risks. | Annual mandatory security awareness modules for all employees |
| 472. Phishing Awareness | Training users to recognise malicious emails, suspicious links, and social engineering tactics. | Running simulated phishing campaigns via KnowBe4 |
| 473. SE Prevention | Controls designed to prevent attackers from manipulating staff into breaking security procedures. | Strict policy requiring visual confirmation for any password reset |
| 474. Secure Coding | Writing software in a way that inherently avoids introducing common vulnerabilities like SQL injection or buffer overflows. | Following the OWASP Top 10 guidelines during development |
| 475. Input Validation | Ensuring that data entered by a user exactly matches expected formats before it is processed by the application. | Rejecting a username that contains special characters to prevent SQLi |
| 476. Output Encoding | Converting user-supplied data into a safe format before displaying it in a browser to prevent code execution. | Encoding `<script>` as `&lt;script&gt;` to prevent Cross-Site Scripting (XSS) |
| 477. Error Handling | Catching application errors cleanly without displaying sensitive system details to the user. | Showing a generic "An error occurred" page instead of a Java stack trace |
| 478. Code Review | Another developer or security engineer evaluating source code to find bugs and vulnerabilities before release. | GitHub pull request requiring approval before merging to main |
| 479. DevSecOps | Integrating security testing and controls seamlessly into the continuous integration and delivery (CI/CD) pipeline. | Running automated static analysis (SAST) on every code commit |
| 480. Secure SDLC | Embedding security activities—like threat modelling and pentesting—into every phase of software development. | Performing architecture threat modelling during the design phase |
| 481. API Security | Protecting application programming interfaces from unauthorised access, data scraping, and injection attacks. | Requiring OAuth 2.0 tokens and enforcing rate limits on the API Gateway |
| 482. Web App Security | Defending web applications against vulnerabilities, attacks, and abuse over the internet. | Deploying a Web Application Firewall (WAF) to block malicious web requests |
| 483. DB Security | Securing databases against unauthorised access, exfiltration, and destructive commands. | Encrypting databases at rest (TDE) and enforcing strict role-based access |
| 484. Cloud Security | Protecting data, applications, and infrastructure hosted in public, private, or hybrid cloud environments. | Using AWS Security Hub and enforcing secure IAM policies |
| 485. Container Security | Securing the container image, runtime environment, and orchestration platform against exploitation. | Scanning Docker images for vulnerabilities with Trivy before deployment |
| 486. Mobile Security | Securing smartphones and tablets against data leakage, loss, and malicious applications. | Using Mobile Device Management (MDM) to enforce PINs and remote wipe |
| 487. Endpoint Protection | Modern security software that combines antivirus, EDR, and firewall to defend user devices and servers. | Deploying SentinelOne to all corporate laptops |
| 488. Remote Access | Providing a secure method for users to securely connect to the corporate network from outside locations. | A VPN requiring MFA and checking the device posture before connecting |
| 489. Email Security | Protecting the organisation from email-borne threats like phishing, malware attachments, and spoofing. | Setting up DMARC to prevent domain spoofing and using Proofpoint for filtering |
| 490. DLP (Data Loss Prev.) | Tools and processes that monitor and block sensitive data from leaving the corporate boundary. | Blocking the transfer of credit card numbers to USB drives or personal webmail |
| 491. Privacy Protection | Safeguarding personally identifiable information (PII) to ensure it is handled lawfully and ethically. | Implementing data minimisation processes so unnecessary user data is deleted |
| 492. Data Classification | Categorising data based on its sensitivity so appropriate security controls can be applied. | Labelling documents as Public, Internal, Confidential, or Restricted |
| 493. Data Retention | Enforcing policies that dictate exactly how long data must be kept for legal reasons, and when it must be destroyed. | Deleting financial records securely after the required 7-year holding period |
| 494. Secure Disposal | Permanently destroying data and physical media so it cannot be recovered by attackers or scavengers. | Cryptographically wiping disks and physically shredding hard drives |
| 495. Audit Logging | Generating unalterable records of critical security events, access changes, and administrative actions. | Logging every time a user is added to the Domain Admins group |
| 496. Compliance Monitoring | Continuously checking that IT systems adhere to internal policies and external regulatory requirements. | Using CSPM tools to ensure cloud storage remains private and encrypted |
| 497. Governance Policy | High-level directives from management that dictate how security will be managed and enforced in the organisation. | An Acceptable Use Policy signed by all employees upon hiring |
| 498. Security Framework | A structured set of guidelines and best practices used to build and measure a comprehensive security programme. | Adopting the NIST Cybersecurity Framework (CSF) to organise defensive capabilities |
| 499. Continuous Monitoring | The ongoing, real-time observation of the IT environment to quickly detect threats, misconfigurations, or failures. | A 24/7 SOC monitoring SIEM alerts and endpoint telemetry |
| 500. Security Improvement | The iterative process of learning from incidents, audits, and metrics to continually strengthen defences. | Updating incident runbooks after a tabletop exercise reveals a communication gap |
