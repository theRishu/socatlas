# Networking basics

Networking is the foundation that lets devices communicate, share data, and reach services inside an organization and across the internet.
{ .page-lead }

!!! note "Interview answer"
    *"A network is a group of connected devices that exchange data using agreed protocols. In cybersecurity, networking matters because most attacks, detections, and defenses depend on how systems communicate."*

## Core terms

| Term | Meaning |
| --- | --- |
| IP address | Logical network address, such as `192.168.1.10` |
| MAC address | Hardware address used on the local network |
| Port | Logical endpoint used by a service, such as 443 for HTTPS |
| Protocol | Agreed set of communication rules |
| Packet | Small unit of data sent across the network |
| Router | Connects networks and forwards traffic |
| Switch | Connects devices inside the same local network |
| DNS | Translates names into IP addresses |
| DHCP | Automatically assigns IP settings |

## Common network types

| Type | What it means | Example |
| --- | --- | --- |
| LAN | Local Area Network in a small area | Home Wi-Fi or office floor |
| WAN | Wide Area Network across large distances | Branch offices linked across cities |
| MAN | Metropolitan Area Network across a city-scale area | Campus or municipal fiber network |
| VPN | Encrypted tunnel over another network | Remote worker connecting to company resources |

## Common protocols and ports

| Protocol | Port | Main purpose |
| --- | --- | --- |
| HTTP | 80 | Standard web traffic |
| HTTPS | 443 | Encrypted web traffic |
| FTP | 21 | File transfer |
| SSH | 22 | Secure remote administration |
| SMTP | 25 | Sending email |
| DNS | 53 | Name resolution |
| DHCP | 67/68 | IP configuration |
| RDP | 3389 | Remote desktop access |

## IPv4 and IPv6

| Version | Description | Example |
| --- | --- | --- |
| IPv4 | 32-bit addressing, still widely used | `192.168.1.1` |
| IPv6 | 128-bit addressing with a much larger address space | `2001:db8::1` |

## Common private IPv4 ranges

| Range | Common use |
| --- | --- |
| `10.0.0.0 - 10.255.255.255` | Large private networks |
| `172.16.0.0 - 172.31.255.255` | Medium-size internal networks |
| `192.168.0.0 - 192.168.255.255` | Home and small office networks |

## Why Networking Matters in Security

Security teams use these basics every day to:

- identify suspicious traffic
- understand which systems are talking to each other
- trace attacker movement
- block risky ports and protocols
- segment networks to limit blast radius

If you can read IPs, ports, protocols, and traffic patterns comfortably, you can understand both attacks and defenses much faster.
