# AAA, DNS, and DHCP

AAA, DNS, and DHCP are core networking concepts that come up constantly in cybersecurity interviews. AAA controls identity and access, DNS resolves names to IP addresses, and DHCP assigns IP configuration automatically.
{ .page-lead }

!!! note "Interview answer"
    *"AAA stands for Authentication, Authorization, and Accounting. DNS translates domain names into IP addresses. DHCP automatically assigns IP addresses and related network settings to devices. Together, they help users connect, authenticate, and communicate on a network."*

## AAA

AAA is a security framework used to control and monitor access.

| Pillar | What it means | Example |
| --- | --- | --- |
| Authentication | Verifying identity | Password, OTP, smart card, biometric |
| Authorization | Deciding what the user can do | RBAC, ACLs, admin vs normal user |
| Accounting | Recording activity | Login history, command logs, session records |

### RADIUS vs TACACS+

| Protocol | Common use | Key difference |
| --- | --- | --- |
| RADIUS | Wi-Fi, VPN, user network access | Common for user access control |
| TACACS+ | Router and switch administration | Often preferred for device administration |

## DNS

DNS, or Domain Name System, translates human-readable names into IP addresses.

### Common DNS record types

| Record | Purpose | Example |
| --- | --- | --- |
| A | Maps a name to an IPv4 address | `example.com` to `203.0.113.10` |
| AAAA | Maps a name to an IPv6 address | `example.com` to an IPv6 address |
| CNAME | Alias for another name | `docs.company.com` to another hostname |
| MX | Mail server record | Routing email for a domain |
| TXT | Text data such as SPF or DKIM | Email security records |

### Common DNS threats

- DNS spoofing
- Cache poisoning
- DNS tunneling
- DNS hijacking

## DHCP

DHCP, or Dynamic Host Configuration Protocol, automatically gives devices network settings such as an IP address, subnet mask, default gateway, and DNS server.

### The DORA process

1. Discover
2. Offer
3. Request
4. Acknowledge

### Common DHCP threats

- Rogue DHCP server
- DHCP starvation
- DHCP spoofing

## Common interview questions

#### What is a DHCP lease?
> A DHCP lease is the amount of time a device is allowed to use an assigned IP address before it renews or returns it to the pool.

#### What is the difference between an authoritative and a recursive DNS server?
> A recursive server looks up the answer on behalf of the client. An authoritative server holds the final records for a domain.
