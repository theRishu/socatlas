# Hashing

Hashing converts data into a fixed-length value called a hash or digest. Unlike encryption, hashing is designed to be one-way, which makes it useful for integrity checks and password verification.
{ .page-lead }

!!! note "Interview answer"
    *"Hashing is a one-way process that converts data into a fixed-length digest. In cybersecurity, we use it mainly to verify integrity and to store passwords safely without keeping the original plaintext value."*

## Properties of a secure hash

| Property | Meaning | Why it matters |
| --- | --- | --- |
| Deterministic | The same input always gives the same output | Lets you verify files and messages reliably |
| One-way | The original input should not be recoverable from the hash | Protects stored password values |
| Avalanche effect | A small input change causes a very different output | Makes tampering easy to detect |
| Collision resistance | Two different inputs should not produce the same hash | Reduces the chance of malicious substitution |

## Common algorithms

| Algorithm | Typical use | Security status |
| --- | --- | --- |
| MD5 | Legacy file checks | Not suitable for security-sensitive use |
| SHA-1 | Legacy signatures and checks | Considered broken for many security uses |
| SHA-256 | File integrity, certificates, digital systems | Widely accepted |
| SHA-512 | High-strength hashing tasks | Strong when used appropriately |
| bcrypt / Argon2 | Password hashing | Preferred for password storage |

## Hashing versus encryption

| Feature | Hashing | Encryption |
| --- | --- | --- |
| Main purpose | Integrity and verification | Confidentiality |
| Reversible | No | Yes, with the correct key |
| Key required | Usually no | Yes |
| Common use | Password storage, checksums, signatures | HTTPS, VPNs, protected files |

## Common uses

- verify that a file or message has not changed
- store passwords without keeping plaintext values
- support digital signatures
- identify malware samples and files

## Common interview questions

#### What is salt, and why do we use it in hashing?
> **Answer:** A salt is a random value added before hashing a password. It prevents identical passwords from producing identical hashes and makes rainbow-table attacks much less effective.

#### What is a collision in hashing?
> **Answer:** A collision happens when two different inputs produce the same hash value. Good hash algorithms are designed to make collisions extremely difficult to find.

#### How do you slow down brute-force attacks against password hashes?
> **Answer:** Use password-hashing algorithms such as bcrypt, scrypt, or Argon2. They are intentionally slow and often use salting, which makes large-scale guessing attacks more expensive.
