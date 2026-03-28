# 💥 Denial of Service (DoS & DDoS)

!!! note "What is DoS/DDoS?"
    A Denial of Service (DoS) attack aims to shut down a machine or network, making it inaccessible to its intended users. A Distributed Denial of Service (DDoS) utilizes a massive botnet of thousands of infected computers to completely overwhelm the target with junk traffic.

### How it Works
1. **Volumetric Attacks:** The attacker floods the target's network bandwidth with massive amounts of data (e.g., UDP floods or ICMP floods).
2. **Protocol Attacks:** The attacker consumes actual server resources, state tables, or firewalls (e.g., TCP SYN floods).
3. **Application Layer (Layer 7):** The attacker sends thousands of seemingly legitimate HTTP GET/POST requests that crash the backend web server or database (e.g., HTTP Floods).

### Real-World Example
An attacker rents an "IoT Botnet" made up of 100,000 compromised smart cameras. They point the botnet at a competitor's small e-commerce website, sending 50 Gigabits of traffic per second. The web server crashes instantly, costing the business thousands of dollars in lost sales.

### How to Mitigate
*   **Edge Scrubbing Networks:** Use cloud-based anti-DDoS providers (like Cloudflare or Akamai) that act as massive sponges to absorb and filter out junk traffic far away from your physical servers.
*   **Rate Limiting:** Implement strict WAF rules limiting the number of HTTP requests a single IP can make per second.
*   **Anycast Routing:** Scatter incoming traffic globally across a distributed network of servers so no single location is overwhelmed.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Overwhelming a website or server with massive amounts of junk traffic to intentionally crash it.
    *   **Impact:** Complete service outage, loss of revenue, and massive network downtime.
    *   **Fix:** Route traffic through global Cloud Anti-DDoS providers (Cloudflare), implement strict rate-limiting, and use Anycast routing.
