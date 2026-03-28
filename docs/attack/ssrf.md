# 🧱 Server-Side Request Forgery (SSRF)

!!! note "What is SSRF?"
    Server-Side Request Forgery is a vulnerability where an attacker forces a backend server to make outward HTTP requests on their behalf. This is extremely dangerous in cloud environments, as it allows attackers to read internal cloud metadata and pivot into the internal network.

### How it Works
If a web application has a feature that fetches remote images (e.g., pulling a profile picture from a URL), an attacker can supply an internal IP address instead. The server blindly fetches that internal resource and returns the result to the attacker, bypassing external firewalls.

### Real-World Example
An attacker exploits a PDF generator on a website. Instead of giving it a normal URL, they input `http://169.254.169.254/latest/meta-data/` (the AWS Cloud Metadata endpoint). The server fetches this URL and accidentally displays the company's AWS root API credentials back to the attacker. (This was the exact attack path used in the massive Capital One breach).

### How to Mitigate
*   **Strict Allow-Lists:** Only allow the server to fetch URLs from a specific, hardcoded list of trusted domains.
*   **Network Segmentation:** Prevent the web server from being able to physically route to internal databases, administrative panels, or cloud metadata endpoints.
*   **Cloud Metadata Protections:** Enforce AWS IMDSv2, which requires a specific token header to fetch metadata, completely blocking basic SSRF attempts.

---

!!! success "Very Short Version (Easy to Remember)"
    *   **Concept:** Forcing a backend web server to make an HTTP request to an internal system on the attacker's behalf.
    *   **Impact:** Stealing internal cloud API keys (AWS Metadata), bypassing firewalls, and pivot scanning.
    *   **Fix:** Use strict URL allow-lists, disable internal routing for the web app, and enforce AWS IMDSv2.
