# The CIA triad

The CIA Triad is the foundational model of cybersecurity. Nearly every security control, policy, and architecture decision can be mapped back to confidentiality, integrity, or availability.
{ .page-lead }

![CIA Triad Diagram](../assets/cia_triad.png){ .page-image }

*The three goals of cybersecurity are keeping data private, accurate, and available.*
{ .image-caption }

!!! note "Interview answer"
    *"The CIA Triad stands for Confidentiality, Integrity, and Availability. Confidentiality means data is accessible only to authorized users. Integrity means data remains accurate and untampered. Availability means systems and data are accessible when needed. Together, these three principles form the foundation of cybersecurity."*

## 1. Confidentiality

Confidentiality means protecting sensitive information from unauthorized access.

- Encryption such as AES and TLS
- Strong passwords and MFA
- Access controls such as RBAC and ACLs
- Data classification and least privilege

Example: Only authorized bank employees should be able to view customer account details.

## 2. Integrity

Integrity means keeping data accurate, complete, and protected from unauthorized changes.

- Hashing such as SHA-256
- Digital signatures
- Checksums and audit logs
- File-integrity monitoring

Example: A downloaded file is hashed and compared with the publisher's hash to confirm it was not tampered with.

## 3. Availability

Availability means systems and data are accessible when authorized users need them.

- Backups and disaster recovery
- Load balancing and failover
- DDoS protection
- High-availability design

Example: A hospital's patient record system must remain available around the clock for doctors and staff.

## Quick summary table

| Principle | Goal | Common Control | Main Threat |
| --- | --- | --- | --- |
| Confidentiality | Keep data private | Encryption, MFA, access control | Data breach |
| Integrity | Keep data accurate | Hashing, signatures, audit logs | Tampering |
| Availability | Keep systems accessible | Backups, failover, DDoS protection | Outage or disruption |

## How to talk about it in interviews

When asked about the CIA Triad, do not only expand the acronym. Explain each part with one control and one example. That makes the answer sound practical instead of memorized.

### Example Answer

> "Confidentiality is about preventing unauthorized access, so we use controls like encryption and MFA. Integrity is about making sure data is not changed without permission, so we use hashing and digital signatures. Availability is about keeping systems accessible, so we use backups, failover, and DDoS protection."

!!! note "Related concept"
    AAA helps enforce the CIA Triad in real systems: authentication verifies identity, authorization controls access, and accounting records activity.
