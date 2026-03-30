<div align="center">
  <img src="https://socatlas.vercel.app/assets/logo.png" width="120" alt="SOCAtlas Logo">
  <h1>🛡️ SOCAtlas</h1>
  <p><b>The ultimate high-performance cybersecurity training & interview platform.</b></p>

  [![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployment-blue?style=for-the-badge&logo=vercel)](https://socatlas.vercel.app/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
  [![Mastery System](https://img.shields.io/badge/Mastery-System-indigo?style=for-the-badge)](https://socatlas.vercel.app/fundamentals/introduction)
</div>

<br>

Welcome to **SOCAtlas**, an open-source, high-fidelity cybersecurity knowledge base designed for the modern security professional. This platform combines structured playbooks, deep technical walkthroughs, and **1200 high-yield revision points** into a gamified, mastery-based learning experience.

## 🌐 Live Platform
View the fully interactive, hosted version of **SOCAtlas** directly in your browser:

👉 **[https://socatlas.vercel.app/](https://socatlas.vercel.app/)**

---

## 🚀 Key Features

### 🏁 **Mastery-Based Learning**
Stop "speed-clicking" through documentation. SOCAtlas uses a **time-gated completion system** calibrated to technical reading speeds (200 WPM). You must engage with the content to certify mastery and earn your progress checkmarks.

### ⏯️ **Guided Flow (Autoplay)**
Prefer a hands-free experience? Turn on **Guided Flow** with adjustable speed (1x to 5x). The platform will slowly auto-scroll through the lesson and automatically advance you to the next topic once mastery is achieved.

### 🎯 **Mock Interview Simulator**
Ready for the hot seat? Use the **Interview Simulator** to test your knowledge against randomized questions pulled from our vast 1200-point database. Practice defining concepts, explaining mechanisms, and providing real-world examples.

### ⚡ **The "1200 Quick Points"**
Rapid-revision concepts spanning **Cloud Security, Cryptography, Defensive Frameworks (NIST/ISO), and SIEM tooling**. Each point is structured into an Interview-Ready format: *Concept ➜ Answer ➜ Example*.

---

## 🏗️ Technical Architecture

SOCAtlas is a high-performance static site built with **MkDocs Material** and a custom **JavaScript Success Engine**.

### **Core Technologies:**
- **Markdown:** All content is managed in simple, accessible markdown files.
- **Python Build Pipeline:** Custom scripts automate the generation of the 1200-point question bank and the consolidated "Full Guide" printable PDF.
- **Progress Tracking:** Universal `localStorage` based state management with robust path normalization for consistent production tracking.

---

## 💻 Local Development

### 1️⃣ Setup
```bash
git clone https://github.com/theRishu/socatlas
cd socatlas
python3 -m venv .venv
source .venv/bin/activate
pip install -r deps.txt
```

### 2️⃣ Run
```bash
# Start development server with hot-reload
sh dev.sh

# Re-build consolidated guides and question banks
sh build.sh
```

---

## 🔎 CLI Power Tools
Search across the **1200 Quick Points** directly from your terminal:
```bash
./search.sh "firewall"
```

---

## 🤝 Contributing
We believe that cybersecurity knowledge should be universally accessible. PRs are encouraged for:
- New **Major Attack** walkthroughs.
- Refining **SOC Alert** triage steps.
- Expanding the **1200 Quick Points** database.

---
<div align="center">
  <p>Built for Analysts. Powered by the Community.</p>
</div>
