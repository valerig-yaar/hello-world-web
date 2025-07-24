
# 🌍 Hello-IP-Env Web App

A minimal and secure web application that displays:

- A "Hello World" message
- The Pod's IP address
- A custom environment variable (e.g., ENV=dev)

Deployed in Kubernetes using Helm, with a secure and best-practice Docker image. CI/CD pipeline included via GitHub Actions.

---

```

Hello World 🌍
Environment: dev
Pod IP: 10.244.1.12

````

---

## 🚀 Features

- ✅ Node.js + HTTP server with basic HTML + CSS styling
- ✅ Exposes environment details inside the container
- ✅ Runs as a **non-root user**
- ✅ Optimized for **Kubernetes Ingress** (ALB, NGINX, etc.)
- ✅ CI pipeline with Docker security scanning

---

## 🐳 Docker Image

Builds a secure image using:

- **Alpine base image**
- **Non-root user**
- **Minimal attack surface**
- **Multi-stage build-ready**

```bash
docker build -t ghcr.io/<your-org>/<repo>:latest .
docker push ghcr.io/<your-org>/<repo>:latest
````

## 🔐 GitHub Actions CI/CD

Located in `.github/workflows/docker-build-and-scan.yml`

### ✅ What It Does:

1. **Builds the Docker image**
2. **Lints the Dockerfile** (Hadolint)
3. **Scans the image config** (Dockle)
4. **Scans for CVEs in OS/packages** (Trivy)
5. **Pushes to GitHub Container Registry**

### 🔧 Trigger

* Runs on every `push` to `main` that touches:

  * Dockerfile
  * index.js
  * workflow YAML

---

## 🧪 Security Scanning Tools

| Tool     | Purpose                                  |
| -------- | ---------------------------------------- |
| Hadolint | Dockerfile linter                        |
| Dockle   | Docker image config hardening checks     |
| Trivy    | OS/package vulnerability scan (CVE, OSS) |

---

## 📦 GitHub Container Registry (GHCR)

Images are published as:

```
ghcr.io/valerig-yaar/hello-world-web:latest
```

---

## 📁 Project Structure

```
.
├── index.js                      # Web server
├── Dockerfile                   # Secure container definition
├── .github/workflows/           # CI pipeline
├── charts/simple-website/       # Helm chart for deployment
└── README.md
```

---

## 🙋‍♂️ Customization

You can:

* Change the HTML layout/styling in `index.js`
* Add more env vars to display
* Add TLS or host-based routing via Helm `values.yaml`
* Replace Node.js with Python, Go, etc.
