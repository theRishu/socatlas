# 🎭 ARP Spoofing (ARP Poisoning)

!!! note "What is ARP Spoofing?"
    ARP Spoofing is a critical Layer 2 network attack where a malicious hacker sends fake Address Resolution Protocol (ARP) messages onto a Local Area Network (LAN). The goal is to secretly associate the attacker's MAC address with the IP address of the default gateway (router).

### How it Works
Computers on a LAN use ARP to translate IP addresses into physical MAC addresses. Because ARP natively lacks any authentication, an attacker can broadcast a lie: *"Hey everyone, I am the Router!"* 
All the victim computers update their ARP cache and start sending their internet traffic directly to the attacker instead of the real router.

### Real-World Example
An employee logs onto their corporate building's internal network. An attacker inside the building poisons the ARP tables of the employee's laptop and the floor's switch. The attacker now passively intercepts and reads all unencrypted data leaving the laptop before seamlessly forwarding it to the real router. (This is a classic enabler for Man-in-the-Middle attacks).

### How to Mitigate
*   **Dynamic ARP Inspection (DAI):** Configure enterprise network switches to automatically inspect and validate all incoming ARP packets and drop malicious/fake ones.
*   **Static ARP Tables:** For critical internal servers, manually hardcode the IP-to-MAC mapping so it can never be dynamically poisoned.
*   **Port Security:** Enable strict MAC address limiting on physical switch ports to prevent attackers from plugging in rogue devices.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Sending fake ARP messages on a local network to trick computers into sending their traffic to the attacker.
    *   **Impact:** Enables Man-in-the-Middle (MitM) traffic interception, session hijacking, and local network DoS.
    *   **Fix:** Enable Dynamic ARP Inspection (DAI) on corporate switches and use Static ARP tables for highly critical servers.
