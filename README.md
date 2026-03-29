<div align="center">
  <h1>🛡️ SOCAtlas</h1>
  <p><b>The ultimate cybersecurity operations, alert playbook, and interview guide.</b></p>
</div>

<br>

Welcome to **SOCAtlas**, a comprehensive, open-source cybersecurity knowledge base. This repository holds highly structured playbooks, deep technical walkthroughs, and 1200 high-yield revision points designed specifically for Security Operations Center (SOC) Analysts, Security Engineers, and Infosec students.

## 🌐 View the Live Website
You do not need to download or install anything to read the documentation. You can view the fully interactive, hosted version of **SOCAtlas** directly in your browser right here:

👉 **[https://socatlas.vercel.app/](https://socatlas.vercel.app/)**
*(Backup: [https://theRishu.github.io/socatlas/](https://theRishu.github.io/socatlas/))*

---

## 🏗️ Getting Started

To run SOCAtlas locally or search the knowledge base from your command line, follow these instructions:

### 1. 🚀 Quick Start (Local Preview)
Use this command to build the project and serve it locally on port `8087`. This uses the production-ready static output.
```bash
sh start.sh
```

### 2. ⚡ Live Development Mode
If you are adding new content or editing existing articles, use this command. It provides **hot-reloading**: as soon as you save a `.md` file, the site refreshes in your browser.
```bash
sh dev.sh
```

### 3. 🔎 Instant CLI Search
Search across the **1200 Quick Points** directly from your terminal. No browser required.
```bash
chmod +x search.sh
./search.sh "firewall"
```

### 4. 📦 Build for Production
To manually trigger a production-ready build (outputs to the `./site` directory):
```bash
sh build.sh
```

---

## 🌟 Key Features
* **🚨 SOC Alerts & Playbooks:** Step-by-step triage, investigation, and containment workflows for EDR events, Malware, Ransomware, DDoS, Impossible Travel, and Privilege Escalation.
* **🏴‍☠️ Major Attacks Directory:** Clear technical breakdowns of critical attack vectors (SQLi, XSS, CSRF, SSRF, ARP Spoofing) mapped directly across the OSI Model.
* **⚡ 1200 Quick Points:** Rapid-revision concepts spanning Cloud Security, Cryptography, Defensive Frameworks (NIST/ISO), and SIEM tooling.
* **🌐 Security Fundamentals:** Beautifully structured breakdowns of the CIA Triad, Zero Trust architecture, and core network protocols.

---

## ☁️ Deployment & CI/CD
SOCAtlas is optimized for:
- **Vercel**: Automatically handles production builds via `vercel.json` and `build.sh`.
- **GitHub Pages**: Deployed via GitHub Actions to the `gh-pages` branch on every push to `main`.

---

## 🤝 Contributing
We believe that cybersecurity knowledge should be universally accessible. Whether it's adding new major attack walkthroughs, refining SOC alert triage steps, or expanding the quick revision points, pull requests are heavily encouraged!
