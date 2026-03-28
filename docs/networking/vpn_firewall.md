# VPN, firewall, and proxy

VPNs, firewalls, and proxies all deal with network traffic, but they solve different problems. A firewall filters traffic, a VPN encrypts traffic, and a proxy forwards traffic on behalf of a client or server.
{ .page-lead }

!!! note "Interview answer"
    *"A firewall controls and filters network traffic based on rules. A VPN creates an encrypted tunnel over an untrusted network. A proxy acts as an intermediary between a client and a destination. They are different controls, but they often work together in network security."*

## VPN

A VPN, or Virtual Private Network, creates a secure encrypted tunnel between two points over the internet.

### Why organizations use VPNs

- Secure remote employee access
- Protect traffic on untrusted networks such as public Wi-Fi
- Connect branch offices securely
- Hide internal addressing from the public internet

### Common VPN types

| Type | Best use case | Notes |
| --- | --- | --- |
| Remote Access VPN | Individual users connecting to company resources | Common for remote work |
| Site-to-Site VPN | Connecting two networks or offices | Often built with IPsec |
| SSL or TLS VPN | Browser-based or application-level secure access | Often easier for remote users |

## Firewall

A firewall is a security control that monitors and filters traffic based on predefined rules.

### Common firewall types

| Type | What it checks | Example |
| --- | --- | --- |
| Packet Filtering | IP, port, and protocol | Basic ACL filtering |
| Stateful Inspection | Tracks connection state | Enterprise perimeter firewall |
| Application Layer Firewall | Inspects application traffic | WAF filtering HTTP requests |
| Next-Generation Firewall | Adds deep inspection, app awareness, IDS/IPS features | Palo Alto, Fortinet |

### Real-world firewall uses

- Blocking inbound RDP from the internet
- Allowing HTTPS but denying Telnet
- Restricting traffic between internal network segments
- Blocking malicious IP addresses during incident response

## Proxy

A proxy sits between a client and a destination and forwards requests on behalf of someone else.

### Types of proxy

| Type | Sits in front of | Main purpose |
| --- | --- | --- |
| Forward Proxy | Users or clients | Filtering, anonymity, caching |
| Reverse Proxy | Servers or applications | Load balancing, SSL offload, hiding origin servers |
| Transparent Proxy | User traffic without manual client setup | Filtering and caching |

## VPN versus firewall versus proxy

| Feature | VPN | Firewall | Proxy |
| --- | --- | --- | --- |
| Encrypts traffic | Yes | No | Usually no |
| Filters traffic | Limited | Yes | Yes, often at application level |
| Hides client IP | Yes | No | Often yes |
| Protects a full network path | Yes | Yes | No |
| Common use case | Secure remote access | Traffic control and protection | Web filtering and intermediary access |

## How they work together

In a real environment, these controls often appear together:

1. A remote employee connects through a VPN.
2. Their traffic passes through a firewall that enforces security rules.
3. Web access may be routed through a proxy for filtering, inspection, or caching.

## Common interview questions

#### What is a DMZ?
> A DMZ, or demilitarized zone, is a separate network segment used for internet-facing systems such as web or mail servers. It helps isolate exposed services from the internal network.

#### Does a VPN stop malware?
> No. A VPN encrypts traffic, but it does not stop a malicious file from being downloaded. You still need controls like EDR, email filtering, and web security.

#### What is the difference between a forward proxy and a reverse proxy?
> A forward proxy represents the client, while a reverse proxy represents the server.
