# Niket Kumar — Portfolio Website

This repository contains the source code for the personal portfolio of Niket Kumar (Graphic & Brand Identity Designer), containerized using Docker and Nginx Alpine.

---

## Docker Containerization

### Architecture & Design
- **Base Image:** `nginx:alpine` — minimal, security-hardened Alpine Linux footprint (~23-40 MB total).
- **Web Server:** Nginx configured for static asset serving, high throughput, and low memory usage (< 10 MB RAM).
- **Optimization:**
  - Gzip compression enabled for HTML, CSS, JavaScript, and SVG assets.
  - Efficient caching headers (`Cache-Control: public, max-age=604800, immutable`) for static assets.
  - Cache prevention (`no-store, no-cache`) for PWA Service Worker (`sw.js`) and Web Manifest (`manifest.json`) to guarantee instant updates.
  - Docker healthcheck built into the image to verify HTTP responsiveness.
  - `.dockerignore` configured to strip `.git`, logs, editor configs, and docs from the build context.

---

### Prerequisites
- Docker Engine / Docker Desktop, OR Docker in WSL2.

---

### Quick Start

#### Option A: Using Docker CLI

1. **Build the Docker Image:**
   ```bash
   docker build -t portfolio-site .
   ```

2. **Run the Container:**
   ```bash
   docker run -d -p 8080:80 --name portfolio-website portfolio-site
   ```

3. **Open in Browser:**
   Visit: [http://localhost:8080](http://localhost:8080)

4. **Stop & Remove Container:**
   ```bash
   docker stop portfolio-website
   docker rm portfolio-website
   ```

---

#### Option B: Using Docker Compose

1. **Start the Service:**
   ```bash
   docker compose up -d --build
   ```

2. **Open in Browser:**
   Visit: [http://localhost:8080](http://localhost:8080)

3. **Check Status & Logs:**
   ```bash
   docker compose ps
   docker compose logs
   ```

4. **Stop the Service:**
   ```bash
   docker compose down
   ```

---

### Verification & Healthcheck

- **Check running container:**
  ```bash
  docker ps -f name=portfolio-website
  ```

- **Verify HTTP response:**
  ```bash
  curl -I http://localhost:8080
  ```
