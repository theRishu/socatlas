# Extra advanced quick points (1001-1100)

!!! note "Format: concept, answer, example, or tool"
    Each row gives you a clean definition you can say in an interview, plus a concrete control, example, or tool.

---

## 💀 Stealth & Hardware Attacks (1001–1050)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 1001. Zero-Day Exploit | Exploit used against a vulnerability before a patch or broad defensive coverage exists. | New browser flaw exploited in the wild before the vendor patch |
| 1002. Zero-Day Patching | Emergency process for testing and rolling out fixes or mitigations for newly disclosed critical flaws. | Out-of-band patch deployment for an actively exploited VPN bug |
| 1003. APT | Advanced Persistent Threat, a well-resourced attacker that maintains stealthy long-term access to achieve strategic goals. | Nation-state campaign persisting for months |
| 1004. Fileless Malware | Malware technique built around malicious code and malicious execution patterns to hide, persist, or execute code. | Defender for Endpoint or CrowdStrike |
| 1005. Living off the Land (LotL) | Using built-in administrative tools and normal system features for malicious activity to avoid detection. | PowerShell, WMI, and PsExec used instead of custom malware |
| 1006. Polymorphic Malware | Malware technique built around malicious code and malicious execution patterns to hide, persist, or execute code. | Defender for Endpoint or CrowdStrike |
| 1007. Metamorphic Malware | Malware technique built around malicious code and malicious execution patterns to hide, persist, or execute code. | Defender for Endpoint or CrowdStrike |
| 1008. Rootkit Persistence | Methods attackers use to remain present on a system after reboots or initial remediation. | Scheduled task or registry run key for malware restart |
| 1009. Bootkit | Malware that infects the boot process so it launches before the operating system. | Compromised bootloader loading attacker code before Windows starts |
| 1010. Firmware Attack | Attack targeting device firmware so malicious code runs below or before the operating system. | Compromised firmware persisting on a server motherboard or peripheral |
| 1011. BIOS Attack | Attack that modifies BIOS code or settings so control is gained before the operating system starts. | Malicious BIOS persistence that survives disk replacement |
| 1012. UEFI Attack | Attack against the UEFI boot process to gain stealthy and durable pre-OS persistence. | UEFI rootkit loading before the kernel |
| 1013. Hardware Trojan | Hidden malicious change in hardware or firmware introduced during design, manufacture, or maintenance. | Modified component that leaks data or bypasses trust checks |
| 1014. Side-Channel Attack | Attack that steals secrets by measuring indirect signals like timing, power use, or cache behavior. | Key extraction through cache-timing observations |
| 1015. Timing Attack | Side-channel attack that infers secrets by observing differences in response time. | Comparing signature-check timing to recover valid bytes |
| 1016. Power Analysis | Side-channel analysis that studies power-consumption patterns to infer secrets or internal operations. | Recovering a cryptographic key from smart-card power traces |
| 1017. Spectre | CPU side-channel attack that abuses speculative execution to read data across trust boundaries. | Leaking data from another process through cache side effects |
| 1018. Meltdown | Microarchitectural attack that reads privileged memory by exploiting out-of-order execution behavior. | Reading kernel memory from user space on vulnerable CPUs |
| 1019. Rowhammer | Hardware attack that flips memory bits by repeatedly accessing adjacent DRAM rows. | Inducing bit flips to alter memory-protected data |
| 1020. Cold Boot Attack | Attack that recovers sensitive data from memory immediately after a system is powered off or rebooted. | Extracting encryption keys from residual RAM contents |
| 1021. Supply Chain Compromise | Successful breach of software, hardware, or service dependencies so downstream victims inherit the compromise. | Malicious update pushed through a trusted vendor channel |
| 1022. Dependency Confusion | Package attack where the wrong dependency is installed because naming or source priority is abused. | Public package with an internal name gets pulled into a build |
| 1023. Open Source Vulnerability | Weakness in an open-source dependency or project that can expose downstream systems to risk. | Vulnerable library version pulled into a production build |
| 1024. Package Poisoning | Tampering with a package or dependency so users install malicious code from a trusted source. | Compromised npm release pushing a backdoor update |
| 1025. Code Injection | Attack or flaw that lets untrusted input be interpreted as commands or executable code. | SQL injection or OS command injection in a web app |
| 1026. Memory Corruption | Bug class where unsafe memory handling lets attackers crash software or alter execution flow. | Use-after-free or out-of-bounds write leading to RCE |
| 1027. Heap Overflow | Memory-corruption flaw where writes exceed the intended heap buffer boundary. | Corrupting adjacent heap metadata to hijack execution |
| 1028. Stack Buffer Overflow | Memory-corruption flaw where data written past a stack buffer overwrites control data. | Overwriting a return address to redirect execution |
| 1029. Race Condition (TOCTTOU) | Timing flaw where state changes between a security check and later use of that result. | File replaced after permission check but before open call |
| 1030. Deadlock Vulnerability | Concurrency flaw where competing operations can block each other and create instability or denial of service. | Two resources waiting on each other indefinitely |
| 1031. Logic Flaw | Security weakness caused by broken business logic rather than parser or memory bugs. | Discount or approval flow bypass through unexpected request order |
| 1032. Authentication Bypass | Technique that defeats login or identity-verification controls without valid proof of identity. | Session-fixation or logic flaw allowing access without reauthentication |
| 1033. Authorization Bypass | Technique that skips or breaks permission checks after a user is authenticated. | Changing an object ID to access another user's records |
| 1034. Broken Access Control | Determining and enforcing which identities can access a resource, from where, and under what conditions. | Conditional Access and least-privilege IAM rules |
| 1035. IDOR | Insecure Direct Object Reference where changing an identifier exposes another user's data without proper authorization. | Changing /invoice/1001 to /invoice/1002 to view another account |
| 1036. Sensitive Data Exposure | Managing data through classification, access control, encryption, retention, and privacy requirements. | Data labels, encryption, and retention rules |
| 1037. Security Misconfiguration | Unsafe default or accidental configuration that exposes systems, data, or interfaces unnecessarily. | Public admin panel left accessible without MFA |
| 1038. Cross-Origin Attack | Attack that abuses browser trust relationships across origins, often through CORS or origin confusion. | Misconfigured cross-origin rules exposing sensitive API data |
| 1039. Cross-Site Request Forgery (CSRF) | Attack that tricks a logged-in user’s browser into sending an unwanted authenticated request. | Hidden form submits a transfer from the victim session |
| 1040. Click Fraud | Fraud that generates fake clicks to steal ad spend or manipulate metrics. | Botnet clicking pay-per-click ads for revenue |
| 1041. Ad Fraud | Manipulation of online advertising metrics, traffic, or installs for illegitimate profit. | Fake impressions and installs generated by automated traffic |
| 1042. Cryptojacking | Unauthorized use of someone else's compute resources to mine cryptocurrency. | Hijacked Kubernetes pods mining Monero |
| 1043. Browser Hijacking | Tampering with browser settings, extensions, or sessions to redirect or spy on the user. | Malicious extension changes search engine and injects ads |
| 1044. Malvertising | Using malicious advertisements to redirect victims, scam them, or deliver malware. | Online ad sending users to an exploit-kit landing page |
| 1045. SEO Poisoning | Manipulating search rankings so victims click malicious pages that look legitimate. | Fake software download site pushed to the top of results |
| 1046. Fake App | Malicious or deceptive app that imitates a real one to steal data or execute code. | Trojanized banking app sideloaded onto an Android device |
| 1047. Mobile Malware | Malware technique built around malicious code and malicious execution patterns to hide, persist, or execute code. | Defender for Endpoint or CrowdStrike |
| 1048. SIM Swapping | Fraudulent transfer of a phone number to an attacker-controlled SIM card. | Attacker intercepts SMS OTPs after convincing the carrier to move the number |
| 1049. OTP Bypass | Technique that avoids one-time-password verification despite MFA being present. | Fraudulent SIM swap or logic flaw in MFA reset flow |
| 1050. SS7 Attack | Attack that abuses signaling weaknesses in telecom infrastructure to intercept or redirect mobile communications. | Intercepting SMS-based OTP traffic through SS7 abuse |

## Web, cloud, and evasion attacks (1051-1100)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 1051. Email Spoofing | Impersonating email so users or systems trust a false sender, source, or identity. | Proofpoint, DMARC, DKIM, and SPF |
| 1052. Domain Spoofing | Using forged or lookalike domains to trick users into trusting a fake sender or website. | Typo-squatted login domain used in a phishing campaign |
| 1053. DNS Tunneling | Using DNS requests and responses as a covert channel for command traffic or data theft. | Malware exfiltrating data through encoded subdomain lookups |
| 1054. Covert Channel | Hidden communication path that transfers data in ways the system was not meant to allow. | Data smuggled out through DNS, timing, or shared resources |
| 1055. Data Exfiltration | Unauthorized transfer of how information is stored, classified, used, and protected out of a trusted environment. | Data labels, encryption, and retention rules |
| 1056. Data Leakage | Unintended exposure of data to people or systems that should not receive it. | Data labels, encryption, and retention rules |
| 1057. Insider Data Theft | Stealing how information is stored, classified, used, and protected so an attacker can impersonate, monetize, or deepen access. | Data labels, encryption, and retention rules |
| 1058. Privilege Abuse | Misuse of privilege for malicious, deceptive, or unauthorized purposes. | PAM vaults and just-in-time admin access |
| 1059. Account Takeover (ATO) | Unauthorized control of a legitimate user account by abusing stolen or guessed authentication material. | Attacker logs into a customer account with reused credentials |
| 1060. Credential Harvesting | Collecting passwords, session cookies, tokens, or keys so attackers can impersonate users. | Fake login page capturing credentials and MFA tokens |
| 1061. Password Spraying | Password attack that tries a small set of common passwords across many accounts to avoid lockouts. | Testing Spring2025! against hundreds of usernames |
| 1062. Brute Force Automation | Automating repetitive security tasks so response is faster, more consistent, and less error-prone. | Auto-isolating an endpoint from an EDR alert |
| 1063. Session Fixation | Managing and protecting user sessions so stolen or stale session tokens cannot be abused. | HTTPOnly secure cookies with rotation |
| 1064. Cookie Theft | Stealing session cookies so an attacker can hijack an authenticated web session. | Browser malware stealing session cookies for SaaS access |
| 1065. JWT Token Theft | Stealing short-lived or cryptographic tokens used for access so an attacker can impersonate, monetize, or deepen access. | YubiKey, TOTP app, or signed JWT |
| 1066. API Abuse | Misuse of api for malicious, deceptive, or unauthorized purposes. | API gateway plus OAuth 2.0 and rate limits |
| 1067. Rate Limit Bypass | Method of evading throttling controls so repeated requests or guesses can continue. | Rotating IPs and sessions to keep spraying passwords |
| 1068. CAPTCHA Bypass | Method of defeating human-verification challenges through automation, outsourcing, or flaws. | Bot service solving CAPTCHAs during mass account creation |
| 1069. Bot Attack | Abuse carried out automatically at scale by scripts or distributed bot infrastructure. | Credential stuffing or fake account creation by bots |
| 1070. Automation Attack | Attack that scales malicious actions through automation so volume and speed overwhelm defenses. | Automated signup abuse or mass credential attacks |
| 1071. Web Scraping Abuse | Using automated scraping in ways that violate business rules, extract protected data, or overload services. | Bot harvesting prices and inventory from an e-commerce site |
| 1072. Fraud Evasion | Techniques used to avoid transaction monitoring, anti-abuse rules, or identity checks. | Rotating devices and IPs to slip past payment-fraud controls |
| 1073. Anonymity Network | Controlling network paths and segmentation to limit unauthorized traffic and lateral movement. | VLANs, firewalls, and IDS/IPS |
| 1074. Tor Usage | Using the Tor network to hide origin, route traffic anonymously, or reach hidden services. | Attacker signs in through Tor exit nodes to mask source IP |
| 1075. Dark Web | Internet content and marketplaces reachable through anonymity networks rather than normal browsing. | WAF, CSP, and secure headers |
| 1076. Crypto Laundering | Obscuring the origin or destination of illicit cryptocurrency through mixers, chains, or conversion steps. | Stolen funds routed through mixers and cross-chain swaps |
| 1077. Ransom Payment | Money or cryptocurrency paid to extortionists in exchange for decryption or other promises. | Organization transfers Bitcoin after ransomware negotiation |
| 1078. Cyber Extortion | Using threats such as data leaks, encryption, or disruption to force payment or concessions. | Attacker demands payment not to publish stolen customer data |
| 1079. Data Ransom | Managing data through classification, access control, encryption, retention, and privacy requirements. | Data labels, encryption, and retention rules |
| 1080. Double Extortion | Ransom strategy that combines encryption with a threat to leak stolen data. | Files are encrypted and a sample of stolen data is posted online |
| 1081. Triple Extortion | Extortion model that adds another pressure tactic beyond encryption and data leaks. | Ransom group threatens customers and launches DDoS during negotiations |
| 1082. Insider Collusion | Cooperation between an insider and another malicious party to bypass controls or steal data. | Employee shares privileged access with an outside criminal group |
| 1083. Third-Party Breach | Outside parties whose access, integrations, or services can create security risk. | Access review for an external supplier |
| 1084. Vendor Compromise | Security exposure created by vendors, partners, or suppliers with access or operational influence. | Third-party due diligence questionnaire |
| 1085. Cloud Misconfiguration | Unsafe cloud setting that exposes storage, identity, networking, or services unnecessarily. | Public object storage bucket or overly permissive IAM role |
| 1086. Open Storage Bucket | Cloud storage bucket left publicly reachable or overly permissive because of bad configuration. | Public object bucket exposing internal backups |
| 1087. Exposed Database | Database unintentionally reachable or misconfigured so unauthorized users can query or dump data. | Internet-exposed MongoDB without authentication |
| 1088. Weak API Security | Protecting weak api from compromise, misuse, disruption, and unintended exposure. | API gateway plus OAuth 2.0 and rate limits |
| 1089. Broken Authentication | Flawed authentication design or implementation that lets attackers bypass or abuse login controls. | Weak session handling lets an attacker hijack a logged-in session |
| 1090. Weak Encryption | Using encryption to keep sensitive data unreadable to unauthorized parties while stored or transmitted. | AES-256, BitLocker, or TLS 1.3 |
| 1091. Hardcoded Credentials | Secrets embedded directly in code or scripts where attackers may recover and misuse them. | Validated through code review, testing, or secure build pipelines. |
| 1092. Secret Leakage | Accidental or unauthorized exposure of passwords, keys, tokens, or certificates. | Cloud API key committed to a public Git repository |
| 1093. Configuration Drift | Uncontrolled change away from an approved secure baseline over time. | Measured against secure baselines and drift checks. |
| 1094. Shadow IT | Use of unapproved apps or services outside central governance and visibility. | Staff store business files in a personal cloud drive |
| 1095. Rogue Device | Unauthorized device connected to the environment without expected approval or controls. | Unknown laptop plugged into an office switch port |
| 1096. Unauthorized Access | Determining and enforcing which identities can access a resource, from where, and under what conditions. | Conditional Access and least-privilege IAM rules |
| 1097. Lateral Movement | Moving from the first compromised host or account to other internal systems. | PsExec, RDP, or stolen admin tokens used across the network |
| 1098. Persistence Mechanism | Methods attackers use to remain present on a system after reboots or initial remediation. | Scheduled task or registry run key for malware restart |
| 1099. Remote Code Execution (RCE) | Allowing users or admins to connect from outside a trusted network in a controlled way. | ZTNA or WireGuard access |
| 1100. Attack Chain | Linked sequence of attacker actions from initial access through objectives and impact. | Used in anomaly detection, but also reviewed for poisoning or evasion risk. |
