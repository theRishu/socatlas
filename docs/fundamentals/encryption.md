# Encryption

Encryption protects data by converting readable information into ciphertext so that only someone with the correct key can read it. It is one of the main controls used to protect confidentiality.
{ .page-lead }

!!! note "Interview answer"
    *"Encryption is the process of converting plaintext into ciphertext using an algorithm and a key. Its main purpose is to protect confidentiality so that even if data is intercepted or stolen, it cannot be read without the correct decryption key."*

## Symmetric and asymmetric encryption

| Type | How it works | Strength | Common examples |
| --- | --- | --- | --- |
| Symmetric | Uses the same key for encryption and decryption | Fast and efficient for large amounts of data | AES |
| Asymmetric | Uses a public key and a private key | Solves the key-sharing problem | RSA, ECC |

In practice, symmetric encryption is used for speed, while asymmetric encryption is used for identity, key exchange, and digital signatures.

## How encryption is used in TLS

HTTPS uses both styles together:

1. Asymmetric cryptography helps the client verify the server and agree on session secrets.
2. Symmetric encryption protects the actual data exchanged during the session.

This hybrid approach gives both security and performance.

## Data at rest, in transit, and in use

| Data state | Meaning | Common protection |
| --- | --- | --- |
| Data at rest | Data stored on disk, database, or backup media | Full-disk encryption, database encryption, key management |
| Data in transit | Data moving across a network | TLS, VPNs, SSH |
| Data in use | Data being processed in memory | Process isolation, secure enclaves, confidential computing |

## Related terms

- **AES:** Common symmetric encryption standard used for files, disks, and sessions.
- **RSA:** Common asymmetric algorithm used in certificates, signatures, and key exchange scenarios.
- **ECC:** An efficient asymmetric approach that gives strong security with smaller key sizes.
- **KMS:** A key management service used to generate, store, rotate, and control encryption keys.

## Common interview questions

#### What is the difference between symmetric and asymmetric encryption?
> **Answer:** Symmetric encryption uses one shared key for both encryption and decryption. Asymmetric encryption uses a public and private key pair. Symmetric encryption is faster, while asymmetric encryption is better for key exchange and identity-related use cases.

#### Why might an organization choose ECC over RSA?
> **Answer:** ECC can provide comparable security with smaller key sizes, which often means lower computational overhead and better efficiency on mobile, cloud, and constrained devices.

#### What is a Key Management Service, or KMS?
> **Answer:** A KMS is a centralized system for generating, storing, rotating, and controlling encryption keys so applications do not need to embed or expose those keys directly.
