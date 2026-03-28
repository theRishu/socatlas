# Attacks and malware quick points (201-300)

!!! note "Format: concept, answer, example, or tool"
    Each row gives you a clean definition you can say in an interview, plus a concrete control, example, or tool.

---

## 🦠 Malware Types (201–250)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 201. Malware | Umbrella term for software intentionally designed to damage, spy on, extort, disrupt, or provide unauthorized access. | Viruses, worms, trojans, ransomware, and spyware |
| 202. Virus | Malware that attaches to a host file or program and spreads when that infected file is executed. | ILOVEYOU spreading after users opened infected attachments |
| 203. Worm | Self-replicating malware that spreads automatically across systems or networks without direct user action. | WannaCry spreading through vulnerable SMB services using EternalBlue |
| 204. Trojan Horse | Malware disguised as legitimate software to trick the user into installing or running it. | Zeus banking trojan posing as harmless software to steal credentials |
| 205. Ransomware | Malware that encrypts data or locks systems and then demands payment or some concession. | REvil, LockBit, or WannaCry encrypting enterprise files |
| 206. Spyware | Malware that secretly monitors users and collects sensitive information such as keystrokes, messages, or screenshots. | Pegasus surveillance activity on high-value mobile targets |
| 207. Adware | Software that pushes unwanted advertising and may also track browsing behavior or redirect traffic. | Fireball hijacking browsers and injecting advertising content |
| 208. Rootkit | Malware designed to hide malicious activity by manipulating the operating system or low-level components. | Sony BMG rootkit concealing files and processes on Windows systems |
| 209. Keylogger | Malware or hardware that records keystrokes to steal passwords, messages, and other sensitive input. | Olympic Vision capturing typed credentials on compromised endpoints |
| 210. Botnet | Group of compromised devices remotely controlled by an attacker for spam, DDoS, malware delivery, or fraud. | Mirai botnet launching large-scale DDoS attacks against Dyn |
| 211. File Infector Virus | Virus that attaches to executable files and spreads when those infected programs are launched | CIH/Chernobyl infecting `.exe` files and activating when they ran |
| 212. Boot Sector Virus | Virus that infects boot records so malicious code runs before the operating system starts. | Stoned virus infecting the master boot record on legacy systems |
| 213. Macro Virus | Infects Office documents using embedded Visual Basic macros | Melissa virus spread via Word docs |
| 214. Multipartite Virus | Virus able to infect both boot sectors and regular files, giving it multiple spread paths | Invader-style malware infecting startup media and executables |
| 215. Polymorphic Virus | Mutates its code to avoid signature-based detection | Storm Worm — changed signature constantly |
| 216. Metamorphic Virus | Virus that rewrites its own code on each generation so signatures are harder to match | Zmist using code transformation to evade static signatures |
| 217. Resident Virus | Virus that stays loaded in memory and keeps infecting files or processes after execution | CMJ-style resident infection persisting in RAM after launch |
| 218. Non-Resident Virus | Only active when infected file is opened | Simple file infectors |
| 219. Direct Action Virus | Virus that infects files immediately when triggered but does not remain resident in memory | Vienna virus infecting additional executables only during runtime |
| 220. Overwrite Virus | Overwrites file content making file unusable | Trivial family virus |
| 221. Email Virus | Virus or malware family that spreads mainly through email attachments, links, or macro documents | ILOVEYOU or Melissa spreading through users' mailboxes |
| 222. Network Worm | Self-replicating worm that spreads through network shares, vulnerable services, or open ports | Blaster scanning for exposed Windows RPC services |
| 223. Internet Worm | Scans internet for vulnerable systems to infect | Morris Worm (1988) — first major internet worm |
| 224. Mass Mailing Worm | Sends copies of itself to all contacts in address book | Mydoom — fastest-spreading email worm |
| 225. SQL Worm | Exploits SQL Server vulnerabilities to spread | SQL Slammer (2003) — took down internet segments |
| 226. Banking Trojan | Steals financial credentials and session data | Emotet, TrickBot, Dridex |
| 227. RAT (Remote Access Trojan) | Trojan that gives the attacker remote interactive control of the victim system | DarkComet or njRAT for screen control, file access, and command execution |
| 228. Backdoor Trojan | Creates hidden entry point for future attacker access | Back Orifice, Gh0st RAT |
| 229. Fake Antivirus Trojan | Trojan that pretends to be security software while actually installing malware or extorting the user. | Fake pop-up claiming "Your computer is infected" to push scareware |
| 230. Downloader Trojan | Downloads and installs other malware after initial infection | Emotet (downloads TrickBot) |
| 231. Locker Ransomware | Ransomware that locks the device or screen rather than encrypting all files. | WinLocker blocking access to the desktop until payment is demanded |
| 232. Crypto Ransomware | Encrypts files and demands crypto payment for key | WannaCry, REvil, LockBit |
| 233. Double Extortion | Encrypts AND threatens to leak data publicly | Maze ransomware (2019) pioneered this |
| 234. Mobile Ransomware | Ransomware aimed at phones or tablets, often locking the device or threatening to leak data | LeakerLocker targeting Android users with extortion |
| 235. Ransomware as a Service | Ransomware kit sold to affiliates via dark web | REvil, DarkSide RaaS models |
| 236. Tracking Spyware | Spyware that silently records location, messages, calls, or other personal activity | Pegasus surveillance activity on high-value mobile targets |
| 237. Password Stealing Spyware | Spyware focused on capturing credentials, browser data, or form submissions | FormBook or Agent Tesla stealing saved passwords and typed logins |
| 238. Ad Injecting Spyware | Spyware that modifies browser traffic or pages to insert ads and track user behavior | Superfish injecting ads into web-browsing sessions |
| 239. Kernel Rootkit | Rootkit operating in kernel space, making it highly privileged and difficult to detect or remove | Necurs hiding malicious processes and drivers at the kernel level |
| 240. User Mode Rootkit | Rootkit running in user space that hides files, processes, or registry entries without kernel-level control | ZeroAccess-style hiding through user-mode hooks |
| 241. Hardware Keylogger | Physical device placed between keyboard and computer to record keystrokes outside the operating system | KeyGrabber USB collecting typed passwords from a workstation |
| 242. Software Keylogger | Program that records keystrokes without hardware | Actual Keylogger, Spyrix |
| 243. Botnet C2 | Command and Control server that issues commands to bots | Attacker sends "encrypt all files" to 10,000 bots |
| 244. Zombie Computer | Compromised device remotely controlled as part of a botnet or coordinated attack | Infected home PC used in spam or DDoS campaigns without the owner's knowledge |
| 245. Drive-by Download | Malware downloaded automatically by visiting a webpage | Malvertising on legitimate news sites |
| 246. Malicious Attachment | File weaponized to deliver malware when the recipient opens, previews, or enables content | ZIP, ISO, or macro-enabled document dropping a payload |
| 247. Malicious Link | URL that leads to malware download or phishing page | Shortened URL hiding malicious redirect |
| 248. Fake Software Update | Malware disguised as a legitimate update prompt | "Update your Flash Player" popups |
| 249. Watering Hole | Attacker infects websites the target frequently visits | APT groups infecting industry forums |
| 250. Supply Chain Attack | Compromising software or hardware before it reaches victim | SolarWinds ORION backdoor (2020) |

---

## 🎭 Social Engineering (251–270)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 251. Social Engineering | Manipulating humans psychologically to reveal info or grant access | "Call from IT support asking for password" |
| 252. Phishing | Mass email campaign impersonating trusted brands | GoPhish tool for testing |
| 253. Spear Phishing | Targeted phishing using personal details about victim | Attacker researches LinkedIn before emailing |
| 254. Whaling | Spear phishing specifically targeting senior executives | CEO fraud — fake legal notice to CFO |
| 255. Vishing | Voice phishing where attackers use phone calls or voicemail to trick victims into sharing data or taking action | Fake bank or Amazon call asking for OTPs or card details |
| 256. Smishing | SMS-based phishing that uses text messages to lure victims to malicious links or fake support flows | Delivery-scam text leading to a credential-harvesting page |
| 257. Baiting | Leaving infected USB drives in public hoping someone plugs it in | "Salary Details 2024.pdf" USB in car park |
| 258. Pretexting | Creating a believable fake scenario to extract information | Fake survey calling employees for "IT audit" |
| 259. Tailgating | Physically following someone through secured door | Delivery person following employee through badge door |
| 260. Shoulder Surfing | Watching target type credentials or view sensitive data | Watching PIN at ATM or café |
| 261. Dumpster Diving | Going through trash to find sensitive discarded documents | Company invoices, org charts, access codes |
| 262. Impersonation | Pretending to be someone else to gain access or information | Fake IT support badge |
| 263. Quid Pro Quo | Offering something in exchange for information | "We'll fix your PC if you give us your login" |
| 264. Scareware | Fraud technique that uses alarming fake warnings to pressure the victim into unsafe action or payment. | Fake support alert claiming the PC has dozens of viruses |
| 265. Clickjacking | Tricks user into clicking hidden elements on a webpage | Invisible button over "Play" loads malware |
| 266. Deepfake Attack | AI-generated fake audio/video used for social engineering | Deepfake CEO voice authorising wire transfer |
| 267. BEC | Business Email Compromise where attackers impersonate trusted executives or partners to trigger fraudulent payments or disclosures. | Fake CEO email instructing finance staff to send an urgent wire transfer |
| 268. Identity Theft | Stealing personal info to impersonate victim | Tax fraud, credit card fraud |
| 269. Insider Attack | Employee intentionally harms their own organization | Data theft before resignation |
| 270. Human Error | Accidental security breach by well-meaning staff | Employee emails confidential file to wrong person |

---

## Network and web attacks (271-300)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 271. DoS | Single source floods target with traffic causing it to crash | `ping -t -l 65500` (simple flood) |
| 272. DDoS | Millions of bots overwhelm target simultaneously | Mirai botnet DDoS on Dyn (2016) |
| 273. SYN Flood | Sends thousands of SYN packets without completing handshake | Fills server's connection table; `hping3` |
| 274. UDP Flood | Overwhelms server with UDP packets on random ports | UDP amplification attacks |
| 275. ICMP Flood | Denial-of-service attack that overwhelms a target with huge volumes of ICMP echo traffic | Ping flood saturating network bandwidth or CPU on the target |
| 276. Ping of Death | Oversized ICMP packet causes buffer overflow and crash | Classic attack; mostly patched now |
| 277. Smurf Attack | Amplification attack using spoofed ICMP requests to broadcast addresses so many hosts reply to one victim | Spoofed ping to a broadcast network causing every host to flood the victim |
| 278. Fraggle Attack | Same as Smurf but uses UDP instead of ICMP | Targets UDP port 7 (echo) |
| 279. Teardrop Attack | Sends malformed fragmented packets that crash on reassembly | Targets old Windows/Linux kernels |
| 280. HTTP Flood | Layer 7 denial-of-service attack that overwhelms a web service with huge numbers of HTTP requests. | Massive GET or POST traffic that looks similar to legitimate users |
| 281. MITM | Attacker intercepts communication between two parties | `arpspoof` + `ettercap` on LAN |
| 282. Session Hijacking | Steals session token to impersonate authenticated user | Firesheep (stole Facebook sessions on WiFi) |
| 283. Replay Attack | Captures and retransmits valid authentication data | Token replay — replay captured JWT |
| 284. ARP Spoofing | Sends fake ARP replies to link attacker's MAC to victim's IP | Enables MITM; `arpspoof` tool |
| 285. DNS Spoofing | Corrupts DNS cache with fake records to redirect users | Redirects `bank.com` to attacker's site |
| 286. IP Spoofing | Forging the source IP address in packets to hide origin, impersonate hosts, or enable amplification | DDoS amplification or trust-abuse attacks using a fake source IP |
| 287. MAC Spoofing | Changes device's MAC to bypass MAC filtering | `macchanger` on Linux |
| 288. Packet Sniffing | Intercepting and examining network traffic to read data, capture credentials, or study sessions | Wireshark or Tcpdump capturing unencrypted traffic on a LAN |
| 289. Evil Twin | Attacker creates fake WiFi AP with same name as legit one | Victim connects → attacker intercepts all traffic |
| 290. Rogue Access Point | Unauthorised WiFi AP connected to corporate network | Employee plugs in personal router |
| 291. SQL Injection | Malicious SQL inserted into input field to manipulate database | `' OR 1=1 --` bypasses login; `sqlmap` |
| 292. XSS | Script injected into webpage that executes in victim's browser | `<script>document.cookie</script>` steal cookies |
| 293. CSRF | Tricks authenticated user into unknowingly submitting a request | Fake form on attacker's site posts to bank.com |
| 294. Command Injection | Injects OS commands through vulnerable application input | `; rm -rf /` in filename field |
| 295. Code Injection | Injects and executes arbitrary code in application | PHP: `eval($_GET['cmd'])` backdoor |
| 296. File Inclusion | Forces application to include malicious remote or local file | LFI: `?page=../../../../etc/passwd` |
| 297. Directory Traversal | Navigates to directories outside web root using `../` | `../../../../etc/shadow` |
| 298. Buffer Overflow | Sending more data than buffer can hold overwrites memory | EternalBlue exploits SMB buffer overflow |
| 299. Race Condition | Two processes access shared resource simultaneously causing flaw | TOCTTOU (Time of Check to Time of Use) |
| 300. Zero Day Attack | Exploiting unknown, unpatched vulnerability | Stuxnet (multiple zero-days), Log4Shell |
