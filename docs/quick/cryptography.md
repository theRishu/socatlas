# Cryptography quick points (701-750)

!!! note "Format: concept, answer, example, or tool"
    Each row gives you a clean definition you can say in an interview, plus a concrete control, example, or tool.

---

## 🔑 Core & Symmetric (701–730)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 701. Cryptography | Practice of protecting data with ciphers, keys, hashes, and signatures so only trusted parties can read or verify it. | AES, RSA, TLS, and digital signatures |
| 702. Encryption | Process of converting readable data into ciphertext using an algorithm and key. | AES-256 encrypting a file or database column |
| 703. Decryption | Process of turning ciphertext back into readable data with the correct key. | A browser decrypting TLS traffic from a website |
| 704. Plaintext | Original readable data before encryption is applied. | A password file before it is encrypted |
| 705. Ciphertext | Unreadable encrypted output produced by a cryptographic algorithm. | An AES-encrypted file blob |
| 706. Symmetric Encryption | Encryption model where the same secret key is used for both encryption and decryption. | AES in disk encryption and VPN tunnels |
| 707. Asymmetric Encryption | Encryption model that uses a public key to encrypt or verify and a private key to decrypt or sign. | RSA or ECC in certificates and digital signatures |
| 708. Public Key Crypto | Branch of cryptography that uses public and private key pairs for encryption, signatures, and key exchange. | TLS certificates and SSH keys |
| 709. Private Key Crypto | Use of a secret private key that must be protected because compromise breaks confidentiality or signature trust. | A server's TLS private key stored in an HSM |
| 710. Key Exchange | Method for safely establishing a shared secret between parties over an untrusted network. | Diffie-Hellman during a TLS handshake |
| 711. AES | Modern symmetric block cipher widely used because it is fast, strong, and hardware-accelerated. | AES-256 in BitLocker or TLS |
| 712. DES | Older symmetric block cipher with a short key size that is now considered insecure. | Legacy systems phased out because 56-bit DES can be brute-forced |
| 713. 3DES | Transitional cipher that applies DES three times to improve security, but is now deprecated for modern use. | Older payment or banking systems migrating away from 3DES |
| 714. RSA | Public-key algorithm used for encryption, key exchange support, and digital signatures. | RSA certificates and signed software packages |
| 715. ECC | Public-key cryptography based on elliptic curves that gives strong security with smaller keys than RSA. | ECDSA certificates and mobile-device cryptography |
| 716. Blowfish | Legacy symmetric block cipher designed as a fast DES alternative but now mostly replaced by AES. | Older encrypted archives or embedded systems |
| 717. Twofish | Symmetric block cipher from the AES competition that remains secure but is less commonly deployed than AES. | Some file-encryption products and research tools |
| 718. ChaCha20 | Modern stream cipher optimized for software performance and often paired with Poly1305 for integrity. | ChaCha20-Poly1305 in TLS and mobile apps |
| 719. RC4 | Deprecated stream cipher once used in TLS and Wi-Fi, but now broken by multiple biases and attacks. | Legacy protocols where RC4 must be disabled |
| 720. IDEA | Older symmetric block cipher once used in PGP, now mostly of historical interest. | Legacy encrypted email tooling |
| 721. Hashing | One-way transformation that produces a fixed-length digest used for integrity checks and secure verification. | SHA-256 verifying file integrity |
| 722. SHA | Secure Hash Algorithm family used to create digests for integrity and signature workflows. | SHA-2 family in certificates and software downloads |
| 723. SHA-256 | 256-bit member of the SHA-2 family commonly used for integrity checks and blockchain-style hashing. | File checksum verification with SHA-256 |
| 724. SHA-512 | 512-bit SHA-2 variant used where longer digests or stronger margin are preferred. | Password storage or certificate tooling using SHA-512 |
| 725. MD5 | Legacy hash function that is fast but collision-broken and unsuitable for security-sensitive use. | Only acceptable for non-security checksums on trusted data |
| 726. HMAC | Keyed hashing method that proves integrity and authenticity when both sides share a secret. | Signed API requests using HMAC-SHA256 |
| 727. Digital Signature | Cryptographic proof that a message or file came from a specific signer and was not altered. | Code signing and signed PDFs |
| 728. MAC | Short for Message Authentication Code, a keyed integrity check used to detect tampering and confirm message origin. | HMAC on API traffic or tokens |
| 729. Certificate Authority | Trusted entity that issues and signs certificates binding identities to public keys. | Let's Encrypt or an enterprise internal CA |
| 730. PKI | Public Key Infrastructure that manages certificates, trust chains, revocation, and key lifecycle. | Internal CA hierarchy with certificate issuance and renewal |

## 🔒 Key Management, TLS & Attacks (731–750)

| Point & Concept | Interview Answer | Example / Tool |
|-----------------|------------------|----------------|
| 731. Key Management | Process of generating, storing, rotating, revoking, and destroying keys safely. | AWS KMS or HashiCorp Vault |
| 732. Key Rotation | Replacing keys on a schedule or after risk events so leaked keys have limited lifetime. | Automatic KMS key rotation every year |
| 733. Key Storage | Secure protection of keys so they cannot be extracted or misused by attackers. | HSM-backed key storage |
| 734. Key Escrow | Controlled storage of recovery copies of keys so access can be restored under approved conditions. | Enterprise recovery process for encrypted laptops |
| 735. Secure Key Exchange | Safe exchange of cryptographic material while preventing interception or tampering. | ECDHE with certificate validation |
| 736. Diffie-Hellman | Key exchange algorithm that lets two parties derive a shared secret over an untrusted channel. | Ephemeral Diffie-Hellman in TLS 1.3 |
| 737. ECC | Public-key cryptography based on elliptic curves that gives strong security with smaller keys than RSA. | ECDSA certificates and mobile-device cryptography |
| 738. SSL | Older encrypted transport protocol that has known weaknesses and has been replaced by TLS. | Legacy SSL versions disabled on web servers |
| 739. TLS | Modern transport security protocol that protects data in transit with encryption, integrity, and authentication. | TLS 1.3 securing HTTPS |
| 740. HTTPS | HTTP protected by TLS so web traffic is encrypted and server identity can be verified. | Online banking over HTTPS on port 443 |
| 741. TLS Handshake | Initial negotiation step where peers agree on algorithms, authenticate, and derive session keys. | ClientHello, certificate exchange, and ECDHE |
| 742. TLS 1.3 | Latest major TLS version with faster handshakes and stronger default cryptography than older releases. | Modern browsers connecting with forward secrecy by default |
| 743. Email Encryption | Protection of email content so only intended recipients can read it. | S/MIME or PGP-encrypted email |
| 744. File Encryption | Encrypting individual files so stolen copies remain unreadable without the key. | GPG-encrypted documents or 7-Zip AES archives |
| 745. Disk Encryption | Encrypting an entire storage device so data is protected if the hardware is lost or stolen. | BitLocker or FileVault |
| 746. Full Disk Encryption | Disk encryption that covers the full volume, including system files and user data. | Laptop protection with BitLocker TPM mode |
| 747. Encryption at Rest | Protecting stored data so compromise of storage media does not reveal plaintext. | Encrypted databases, backups, and object storage |
| 748. Encryption in Transit | Protecting data while it moves across networks so eavesdroppers cannot read or alter it. | TLS on web sessions or IPSec VPN tunnels |
| 749. Cryptographic Attacks | Techniques that try to break confidentiality or integrity by exploiting weak algorithms, keys, implementations, or side channels. | Brute-force, padding-oracle, and timing attacks |
| 750. Cryptanalysis | Study and practice of analyzing ciphers and protocols to find weaknesses or recover secrets. | Researchers testing a new encryption scheme for flaws |
