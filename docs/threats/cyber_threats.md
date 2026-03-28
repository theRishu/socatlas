# Malware types and common cyber threats

Malware is any software designed to harm, disrupt, spy on, extort, or gain unauthorized access to a system. Interviewers often expect you to distinguish the major malware types and explain how they spread or what they are meant to do.
{ .page-lead }

!!! note "Interview answer"
    *"Malware is an umbrella term for malicious software. Different types are usually identified by how they spread, how they enter the system, or what they do after infection. Common examples include viruses, worms, trojans, ransomware, spyware, rootkits, and botnets."*

## Common malware types

| Type | What it means | Example |
| --- | --- | --- |
| Virus | Attaches to a file and spreads when that file is run | ILOVEYOU |
| Worm | Self-replicates and spreads automatically over networks | WannaCry |
| Trojan | Disguises itself as legitimate software | Zeus |
| Ransomware | Encrypts files and demands payment | REvil, LockBit |
| Spyware | Secretly monitors the victim | Pegasus |
| Adware | Displays unwanted ads and may track behavior | Fireball |
| Rootkit | Hides attacker activity and gives stealthy access | Sony BMG rootkit |
| Botnet | Many infected systems controlled remotely | Mirai |

## Important distinctions

### Virus vs Worm

- A virus usually needs user action to spread.
- A worm spreads by itself, often across networks.

### Trojan vs Backdoor

- A trojan is how the attacker tricks the user into running it.
- A backdoor is the hidden access the attacker gets afterward.

### Ransomware

Ransomware is one of the most disruptive malware types because it affects both availability and, in many cases, confidentiality if data is also stolen before encryption.

## How organizations defend against malware

- EDR and antivirus
- Email and web filtering
- Patching and vulnerability management
- Network segmentation
- Least privilege
- Offline or protected backups

## Related threats beyond malware

- Phishing
- Social engineering
- DDoS
- Man-in-the-middle attacks
- Zero-day exploitation

## Common interview questions

#### What is the difference between a virus and a trojan?
> A virus attaches itself to another file and spreads when the file is executed. A trojan pretends to be legitimate software so the user installs it voluntarily.

#### What is fileless malware?
> Fileless malware operates mainly in memory and often abuses legitimate tools such as PowerShell or WMI, which makes it harder for traditional file-based antivirus to detect.
