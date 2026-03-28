# 🕶️ Man-in-the-Middle (MitM)

!!! note "What is MitM?"
    A Man-in-the-Middle (MitM) attack occurs when an attacker secretly intercepts, relays, and possibly alters the communication between two parties who believe they are directly communicating with each other. 

### How it Works
The attacker positions themselves between the client and the server (often utilizing an open or compromised Wi-Fi network). Instead of traffic flowing from `User -> Server`, the traffic routes `User -> Attacker -> Server`.

### Real-World Example
An attacker sets up a fake open Wi-Fi hotspot at a coffee shop named "Free Public Wi-Fi". When a user connects and attempts to log into their bank, the attacker performs an **SSL Stripping** attack. They downgrade the connection from HTTPS to HTTP, allowing them to read the user's banking password in pure plaintext.

### How to Mitigate
*   **HTTPS Everywhere:** Enforce strict HTTPS encryption across all applications to ensure intercepted traffic is unreadable gibberish.
*   **HSTS (HTTP Strict Transport Security):** This forces browsers to *only* connect via HTTPS, explicitly preventing SSL Stripping downgrade attacks.
*   **VPN Tunnels:** Using a Corporate Virtual Private Network encrypts your entire traffic stream, shielding it completely from local Wi-Fi attackers.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Secretly intercepting communication between a user and a server on a local network.
    *   **Impact:** Stealing plaintext passwords, session hijacking, and altering messages in transit.
    *   **Fix:** Enforce strong encryption via HTTPS, implement HSTS, and use secure VPN tunnels on public networks.
