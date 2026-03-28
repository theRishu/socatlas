# ⚡ Core Fundamentals — Points 101–200

!!! note "Format: Point & Concept → Interview Answer → Example / Tool"
    Each row gives you a clean, speakable interview answer plus a real-world example or tool.

---

## 🔐 Identity, Access & Authentication (101–140)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 101. Identity | A verifiable digital representation of a person, service, or device used to authenticate and control access. | User account in Entra ID or a service account with a JWT |
| 102. Credential | Any piece of evidence used to prove identity — password, token, certificate, key, or biometric. | Username + password; FIDO2 key; client TLS certificate |
| 103. Password Policy | A rule set defining the minimum length, complexity, rotation, and restrictions that make passwords harder to guess. | Policy requiring 14+ characters and blocking breached values |
| 104. Password Hashing | Storing passwords as one-way cryptographic digests so the plaintext is never held in readable form. | Argon2id or bcrypt with per-user salt in the user database |
| 105. Multi-Factor Authentication | Requiring two or more independent factors — something you know, have, or are — to verify identity. | Password plus Microsoft Authenticator TOTP or YubiKey |
| 106. Single Sign-On | Authenticating once to gain access to multiple connected applications without re-entering credentials each time. | Okta SSO letting staff access Slack, GitHub, and AWS in one login |
| 107. OAuth 2.0 | An authorisation framework that lets one application act on a user's behalf without exposing the user's password. | "Sign in with Google" giving an app access to calendar data |
| 108. SAML 2.0 | An XML-based identity federation standard that passes authenticated identity between a provider and an application. | Enterprise IdP passing a signed assertion to a Salesforce login |
| 109. OpenID Connect | An identity layer built on top of OAuth 2.0 that returns a verifiable ID token containing user profile claims. | Microsoft Entra ID issuing an OIDC token for a web app login |
| 110. JWT | JSON Web Token — a compact, signed token used to prove identity or carry authorisation claims between systems. | API returns a signed JWT; the client sends it in every request |
| 111. RBAC | Role-Based Access Control — permissions tied to a job role, not an individual user. | Admin, analyst, and read-only viewer roles in a cloud console |
| 112. ABAC | Attribute-Based Access Control — access granted based on user attributes, device state, time, or location. | Allow access to payroll only from managed devices 9–5 on weekdays |
| 113. Privileged Account | An account with elevated rights — local admin, domain admin, root, or service account — that carries greater risk if compromised. | Domain admin used only through a PAM vault with session recording |
| 114. Privilege Escalation | An attacker gaining higher access than their initial foothold, moving from user to admin or from local to domain. | Token impersonation or kernel exploit raising user to SYSTEM |
| 115. Just-in-Time Access | Granting elevated access only when needed for a specific task and revoking it automatically afterwards. | CyberArk issuing a 60-minute admin session that expires automatically |
| 116. Access Review | Periodic audit of who has access to what to ensure permissions stay accurate and least-privilege is maintained. | Quarterly Entra ID access review removing stale role assignments |
| 117. Service Account | A non-human identity used by applications, scripts, or automated processes to authenticate to systems or APIs. | SQL server service account with read-only access to one database |
| 118. API Key | A shared secret token used to authenticate programmatic access to an API without user interaction. | AWS access key used by a script — should be rotated and scoped |
| 119. Session Token | A temporary credential issued after authentication that represents an active session. | HTTPOnly secure cookie holding a session ID valid for 24 hours |
| 120. Session Hijacking | Stealing a valid session token to impersonate an authenticated user without knowing their password. | Attacker copies a browser cookie and replays it to gain access |
| 121. Brute Force | Systematically trying every possible credential combination until the correct one is found. | Script trying all four-digit PINs against an admin portal |
| 122. Credential Stuffing | Using username-password pairs leaked from one breach to try logging in to other services. | Attacker tests 500,000 LinkedIn credentials against Gmail and PayPal |
| 123. Account Lockout | Automatically blocking sign-in after a set number of failed attempts to slow brute-force attacks. | Five failures triggers a 15-minute lockout on the portal |
| 124. CAPTCHA | A challenge designed to distinguish humans from bots, slowing automated credential attacks. | Google reCAPTCHA on a login form preventing automated spraying |
| 125. Zero Trust | Security model that removes implicit trust — every access request is verified regardless of network location. | Conditional Access checking device compliance before every login |
| 126. Least Privilege | Granting only the minimum access needed for a role, and nothing more. | Developer gets read access to logs but cannot modify DB records |
| 127. Need to Know | Principle that sensitive information is only shared with people who genuinely require it for their specific task. | Only the IR team can view forensic images during an investigation |
| 128. Separation of Duties | Splitting a sensitive process across two or more people so no single individual can abuse it alone. | One person requests a payment; a different person approves it |
| 129. Account Takeover | When an attacker gains full control of a legitimate user account, usually through credential theft or phishing. | Attacker logs in with Magecart-stolen credentials and changes email |
| 130. Identity Theft | Stealing personal information to impersonate someone for financial gain or access to their accounts. | Fraudster uses stolen SSN to open a credit card account |
| 131. Impersonation | Pretending to be another person, brand, or system to trick someone into sharing information or granting access. | Fake IT helpdesk call asking for password reset confirmation |
| 132. PAM | Privileged Access Management — securing, monitoring, and minimising the use of high-risk administrative accounts. | CyberArk vaulting credentials; Delinea recording all admin sessions |
| 133. IAM | Identity and Access Management — the system that governs digital identities, credentials, permissions, and lifecycle. | Okta Workforce Identity managing SSO, MFA, and provisioning |
| 134. Directory Service | Centralised system that stores identity, group, and policy data for managing users and computers. | Active Directory; LDAP; Apple Open Directory |
| 135. Active Directory | Microsoft's directory service that manages Windows users, computers, groups, and policy across a domain. | Group Policy deploying security settings to all domain machines |
| 136. LDAP | Protocol used to query and modify directory entries on Active Directory or other directory services. | Application authenticating users against corporate LDAP on port 389 |
| 137. Kerberos | Authentication protocol used in Active Directory that issues encrypted tickets instead of passing passwords. | User logs in → gets a TGT → exchanges it for a service ticket |
| 138. Kerberoasting | Extracting Kerberos service tickets for offline cracking to recover service-account passwords. | BloodHound identifies a spn-set service account; GetUserSPNs harvests tickets |
| 139. Pass-the-Hash | Replaying a captured NTLM password hash to authenticate as another user without knowing the plaintext. | Mimikatz extracts hash; attacker laterally authenticates to SMB shares |
| 140. Golden Ticket | A forged Kerberos TGT created using the KRBTGT account hash, granting persistent domain-wide access. | Attacker forges 10-year TGT with any SID; effective until KRBTGT reset |

---

## 🌐 Network Protocols & Controls (141–170)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 141. TCP Three-Way Handshake | SYN → SYN-ACK → ACK — the connection establishment process before data is sent over TCP. | Every browser HTTP request starts with this exchange |
| 142. UDP | Connectionless transport protocol — fast but no delivery guarantee or ordering, suitable for real-time data. | DNS queries, VoIP, video streaming all use UDP |
| 143. ICMP | Control protocol used for diagnostics — ping uses ICMP echo request and reply. | `ping 8.8.8.8` tests reachability; `traceroute` maps hops |
| 144. DNS | Translates domain names into IP addresses — the phone book of the internet. | `nslookup google.com` resolves to 142.250.x.x |
| 145. DNSSEC | Extension that digitally signs DNS records to prevent tampering and cache poisoning attacks. | Signing a zone so resolvers reject forged DNS responses |
| 146. HTTPS | HTTP over TLS — encrypts web traffic so it cannot be read or tampered with in transit. | Browser shows padlock; traffic encrypted from client to server |
| 147. TLS Handshake | Client and server negotiate cipher suite and exchange keys to establish an encrypted session. | ClientHello → ServerHello → Certificate → Key Exchange → Finished |
| 148. Certificate Authority | Trusted entity that issues and signs digital certificates, establishing a verifiable chain of trust. | Let's Encrypt, DigiCert, GlobalSign issuing web server certificates |
| 149. NAT | Network Address Translation — maps private IP addresses to public ones allowing multiple devices to share one IP. | Home router translating 192.168.1.x to a single public IP |
| 150. Routing | The process of forwarding packets between networks based on IP destination using routing tables. | BGP between ISPs; OSPF within an enterprise network |
| 151. BGP | Border Gateway Protocol — the routing protocol that exchanges routes between autonomous systems on the internet. | BGP hijacking caused Amazon Route 53 DNS traffic rerouting in 2018 |
| 152. ARP | Address Resolution Protocol — maps an IP address to a MAC address on a local network. | `arp -a` shows cached IP-to-MAC mappings on a host |
| 153. ARP Poisoning | Sending fake ARP replies to link an attacker's MAC to another host's IP, enabling MITM attacks. | `arpspoof` tool pointing gateway traffic through attacker machine |
| 154. VLAN | Virtual LAN — logical network segmentation on a switch, separating traffic without physical cabling. | Guest Wi-Fi isolated from production servers on the same switch |
| 155. DMZ | Demilitarised Zone — network segment for public-facing servers, isolated from the internal corporate network. | Web server in DMZ; database server behind second firewall inside |
| 156. Proxy Server | Intermediary that forwards requests on behalf of clients, enabling filtering, caching, and anonymity. | Zscaler Internet Access as a cloud proxy inspecting all web traffic |
| 157. Reverse Proxy | Server-side proxy that receives client requests and forwards them to backend servers, hiding their addresses. | nginx or AWS ALB distributing HTTPS traffic to app containers |
| 158. Load Balancer | Distributes incoming traffic across multiple backend servers to prevent overload and improve availability. | AWS Application Load Balancer balancing HTTPS across three EC2s |
| 159. CDN | Content Delivery Network — distributes content from edge servers near users to reduce latency and absorb DDoS. | Cloudflare CDN caching static assets and absorbing volumetric attacks |
| 160. BGP Hijacking | Attacker announces a more-specific route to redirect internet traffic through their infrastructure. | Pakistan Telecom accidentally hijacking YouTube's prefix in 2008 |
| 161. NTP | Network Time Protocol — synchronises clocks across systems, which is critical for accurate log correlation. | Kerberos requires clocks within 5 minutes to prevent replay attacks |
| 162. SMTP | Simple Mail Transfer Protocol — used to send email between servers on port 25 (or 587 with auth). | Mail server relaying email; SMTPS encrypts with TLS |
| 163. IMAP/POP3 | Protocols for retrieving email — IMAP syncs mailbox server-side, POP3 downloads and deletes. | Outlook using IMAP to sync folders across devices |
| 164. SFTP | Secure file transfer over SSH — encrypted alternative to plain FTP, running on port 22. | Admin uploading config files to a Linux server securely |
| 165. SMB | Server Message Block — Windows file-sharing protocol; exploited by EternalBlue in WannaCry. | Disabling SMBv1 eliminates the WannaCry attack vector |
| 166. RDP | Remote Desktop Protocol — Windows remote access on port 3389; common attack target when exposed online. | Brute-forcing exposed RDP is a primary ransomware initial access method |
| 167. SSH | Secure Shell — encrypted remote command-line access, default port 22. | `ssh -i key.pem ec2-user@10.0.0.1` connecting to a Linux server |
| 168. Zero Trust Network Access | Replacing VPN with identity-verified, context-aware per-application access instead of full network access. | Cloudflare Access granting only app-level access to authorised users |
| 169. Network Segmentation | Dividing a network into separate zones so a compromise in one zone cannot freely spread to others. | Finance VLAN isolated from HR; no lateral movement possible |
| 170. Egress Filtering | Controlling what traffic is allowed to leave the network — limits exfiltration and C2 communication. | Firewall blocking all outbound except 80, 443, and DNS |

---

## 🔒 Security Controls & Architecture (171–200)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|-----------------|----------------|
| 171. Security Control | A safeguard or countermeasure designed to reduce risk by protecting assets, detecting threats, or responding to incidents. | MFA, encryption, a firewall rule, or a security awareness programme |
| 172. Preventive Control | Stops an attack or incident before it can occur. | Firewall blocking inbound RDP from the internet |
| 173. Detective Control | Identifies that an attack or incident has occurred or is in progress. | SIEM alert firing on multiple failed logins followed by a success |
| 174. Corrective Control | Restores systems or data to a known-good state after an incident. | Restoring from clean backup after ransomware encryption |
| 175. Deterrent Control | Discourages attackers by making the cost or risk of attacking too high. | Warning banners, visible cameras, published legal consequences |
| 176. Compensating Control | An alternative control used when the ideal control is not feasible. | Network isolation of unpatched legacy machine that cannot be updated |
| 177. Technical Control | Hardware- or software-based safeguard. | Firewall, EDR, encryption, MFA token |
| 178. Administrative Control | Policy, procedure, or training-based safeguard. | Acceptable use policy, mandatory phishing training |
| 179. Physical Control | Tangible barrier that restricts or monitors physical access. | Locked server room, mantrap, CCTV, security guard at reception |
| 180. Defence in Depth | Layering multiple independent controls so no single failure exposes everything. | Phishing filter + MFA + EDR + SIEM + backup — five layers |
| 181. Security Baseline | Minimum hardened configuration that every system must meet before going into production. | CIS Benchmark applied to all new server builds |
| 182. Hardening | Removing unnecessary features, services, and default credentials to reduce a system's attack surface. | Disabling SMBv1, removing unused services, setting strong passwords |
| 183. Patch Priority | Scoring which patches to apply first based on severity, exploitability, and asset criticality. | CVSS 9.8 + actively exploited = emergency patch within 24 hours |
| 184. CVSS | Common Vulnerability Scoring System — rates vulnerability severity from 0 to 10 based on exploitability and impact. | Log4Shell scored CVSS 10.0 — maximum severity |
| 185. CVE | Common Vulnerabilities and Exposures — unique identifier for a publicly known security flaw. | CVE-2021-44228 is the Log4Shell vulnerability in Log4j |
| 186. NVD | National Vulnerability Database — US government database enriching CVEs with CVSS scores and references. | Security teams check NVD for official severity rating before patching |
| 187. CWE | Common Weakness Enumeration — catalogue of software and hardware weakness types (not specific instances). | CWE-89 is SQL Injection; CWE-79 is Cross-Site Scripting |
| 188. Threat Model | Structured analysis of a system to identify what could go wrong, who would attack it, and how to mitigate it. | STRIDE model run on a new payment API before development starts |
| 189. Attack Surface | The complete set of paths an attacker could use to enter or extract data from a system. | Every open port, public API, and admin interface is part of the surface |
| 190. Attack Vector | The specific path or mechanism an attacker uses to reach and exploit a vulnerability. | Email attachment delivering ransomware via macro execution |
| 191. Exploit | The technique or code used to take advantage of a vulnerability and achieve the attacker's goal. | EternalBlue exploit triggering a buffer overflow in SMBv1 |
| 192. Zero-Day | A vulnerability that is actively exploited before the vendor has produced a patch or effective mitigation. | Log4Shell used in attacks before Log4j developers could release a fix |
| 193. Proof of Concept | Working code that demonstrates a vulnerability is exploitable without necessarily causing harm. | PoC posted on GitHub proving a command injection works |
| 194. Patch Tuesday | Microsoft's monthly second-Tuesday release cycle for security updates. | IT teams plan their patching schedule around Patch Tuesday |
| 195. Mitre ATT&CK | A globally accessible knowledge base of real-world adversary tactics and techniques used for detection mapping. | Map SIEM detections to ATT&CK technique IDs for coverage analysis |
| 196. Indicator of Compromise | Observable artefact suggesting a system has been compromised — hash, IP, domain, or file path. | Malware hash on VirusTotal; C2 IP in firewall logs |
| 197. Indicator of Attack | Behavioural signal suggesting an attack is in progress before a compromise is confirmed. | Unusual admin account running PowerShell at 2 AM |
| 198. False Positive | An alert that fires on benign activity, wasting analyst time and causing alert fatigue. | SIEM flags a legitimate admin running a script as suspicious |
| 199. True Positive | An alert that correctly identifies real malicious activity. | SIEM detects real credential-stuffing attack and SOC confirms it |
| 200. Alert Fatigue | Condition where analysts receive so many alerts that important ones are missed or ignored. | SOC drowning in 50,000 alerts/day tunes rules to focus on high fidelity |
