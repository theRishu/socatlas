# OSI and TCP/IP models

The OSI model is a seven-layer reference model used to explain how communication works across a network. The TCP/IP model is the practical model used by the internet. Security teams use both models to describe where a problem exists and which controls apply.
{ .page-lead }

![OSI model diagram](../assets/osi_model.png){ .page-image }

*Use the OSI model to explain communication layer by layer. Use the TCP/IP model to explain how internet protocols work in practice.*
{ .image-caption }

!!! note "Interview answer"
    *"The OSI model is a seven-layer reference model for understanding network communication. The TCP/IP model is a simpler four-layer model used in real-world networking. In cybersecurity, these models help us identify where attacks happen and which controls should respond at each layer."*

## OSI layers

| Layer | Main purpose | Common examples | Security examples |
| --- | --- | --- | --- |
| 7. Application | User-facing network services | HTTP, DNS, SMTP, SSH | Phishing, SQL injection, malicious requests |
| 6. Presentation | Data formatting and encryption | TLS, encoding formats | SSL stripping, weak encryption handling |
| 5. Session | Session creation and management | RPC, session handling | Session hijacking |
| 4. Transport | End-to-end delivery | TCP, UDP | SYN floods, port scanning |
| 3. Network | Logical addressing and routing | IP, ICMP | IP spoofing, routing abuse |
| 2. Data link | Local delivery using MAC addresses | Ethernet, Wi-Fi | ARP poisoning, MAC spoofing |
| 1. Physical | Transmission of bits over media | Cable, fiber, radio | Jamming, cable tapping |

## Common Attacks by OSI Layer

| Layer | Attack Type | Description |
| --- | --- | --- |
| **7. Application** | Cross-Site Scripting (XSS), SQLi, HTTP Flood | Exploiting vulnerabilities in the software logic or sending overwhelming HTTP requests. |
| **6. Presentation** | SSL Stripping, Ransomware (Encryption) | Forcing the connection to drop from HTTPS to HTTP, or malicious encryption of data. |
| **5. Session** | Session Hijacking, Man-in-the-Middle (MitM) | Stealing active session cookies to impersonate a legitimate authenticated user. |
| **4. Transport** | SYN Flood, UDP Flood, Port Scanning | Exhausting server connection state tables or mapping exposed services. |
| **3. Network** | Ping of Death, IP Spoofing, Route Poisoning | overwhelming routers/firewalls with fragmented ICMP packets or spoofing source IPs. |
| **2. Data Link** | ARP Spoofing, MAC Flooding, VLAN Hopping | Poisoning the ARP cache to intercept LAN traffic, or overwhelming switch MAC tables. |
| **1. Physical** | Wiretapping, RF Jamming, USB Drops | Physically cutting cables, jamming Wi-Fi signals, or plugging in malicious USB rubber duckies. |

## TCP/IP mapping

| OSI model | TCP/IP model |
| --- | --- |
| Application, presentation, session | Application |
| Transport | Transport |
| Network | Internet |
| Data link and physical | Network access |

The OSI model is more detailed for teaching and troubleshooting. TCP/IP is the more practical model for explaining how network traffic actually moves.

## TCP versus UDP

| Feature | TCP | UDP |
| --- | --- | --- |
| Connection | Connection-oriented | Connectionless |
| Reliability | Reliable delivery and retransmission | Best-effort delivery |
| Ordering | Preserves order | Order is not guaranteed |
| Typical uses | Web, email, remote administration, file transfer | Streaming, VoIP, DNS, gaming |

## TCP three-way handshake

TCP connections normally begin with three steps:

1. SYN: the client requests a connection.
2. SYN-ACK: the server acknowledges and responds.
3. ACK: the client confirms and the session begins.

This matters in security because attacks such as SYN floods abuse this connection setup process.

## Common interview questions

#### At what layer does ping operate?
> **Answer:** Ping uses ICMP, which is typically discussed at the network layer, or Layer 3, because it operates directly over IP rather than using transport-layer ports.

#### What is the difference between a hub, a switch, and a router?
> **Answer:** A hub repeats traffic to every connected device. A switch forwards traffic within a local network using MAC addresses. A router forwards traffic between different networks using IP addresses.

#### What is the order of volatility in forensics?
> **Answer:** It is the order in which evidence should be collected based on how quickly it disappears, usually starting with volatile data such as memory and active network state before moving to disks and long-term logs.
