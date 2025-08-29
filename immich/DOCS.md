# Home Assistant add-on: Immich (all in one) 📷 by Fabio Garavini

**Immich** is a high-performance self-hosted solution for managing personal photos and videos. This all-in-one addon bundles essential services for immediate use.

> \[!WARNING]
> **Project Status**: Immich is under active development.
> Do not use as your sole photo/video storage solution!
> *Official developer advisory*

## 🧩 All-in-One Components

This monolithic package includes:

* **Immich Core**: Photo/video management interface
* **Machine Learning**: Object/scene recognition & facial recognition
* **PostgreSQL with VectorChord**: Vector-optimized database
* **Redis**: Real-time notifications and caching

[Official Immich Documentation](https://immich.app/docs)

---

## 🛠 Installation Guide

1. **Install the Add-on**:

   * Navigate to **Home Assistant Supervisor** → **Add-on Store**
   * Search for "Immich" → Click **Install**
2. **Initial Setup**:

   * Start the add-on
   * Click **OPEN WEB UI** and follow first-run wizard
3. **Configure Libraries** (see Storage section below)

---

## ⚙️ Configuration Options

Below are all the configuration settings you can customize. Most users can leave defaults, but advanced users may fine-tune.

| Parameter                                                   | Required | Default   | Description                                                                                                                       |
| ----------------------------------------------------------- | -------- | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `PUID`                                                      | Yes      | `0`       | **User ID** used to run Immich. If you don’t know what this is, leave at default.                                                 |
| `PGID`                                                      | Yes      | `0`       | **Group ID** used to run Immich. Same as above—leave default if unsure.                                                           |
| `TZ`                                                        | Yes      | `Etc/UTC` | **Timezone** for correct photo/video timestamps. Example: `Europe/London`.                                                        |
| `Log Level`                                                 | No       | `info`    | Sets how detailed Immich logs are (e.g., `verbose`, `debug`, `log`, `warn`, `error`). Useful for troubleshooting.                 |
| `ssl`                                                       | Yes      | `true`    | Enable HTTPS for secure connections. If `certfile` and `keyfile` are not specified, a self-signed certificate will be generated automatically. |
| `certfile`                                                  | No       | -         | Name of SSL certificate file stored in `/ssl/`. Example: `fullchain.pem`.                                                         |
| `keyfile`                                                   | No       | -         | Name of SSL private key file stored in `/ssl/`. Example: `privkey.pem`.                                                           |
| `Storage type`                                              | Yes      | `HDD`     | Type of storage Immich uses (`SSD` or `HDD`).                                                                                     |
| `Machine Learning Model TTL`                                | Yes      | `300`     | How long (in seconds) a machine learning model stays loaded in memory after not being used. `0` = always keep loaded.             |
| `Machine Learning Worker Timeout`                           | Yes      | `300`     | If a machine learning worker doesn’t respond in this time (seconds), it will be restarted.                                        |
| `Preload CLIP Textual Models`                               | No       | -         | Preload text-based AI models for **Smart Search** (searching photos/videos by description). Use only if you want faster searches. |
| `Preload CLIP Visual Models`                                | No       | -         | Preload image-based AI models for **Smart Search**. This helps Immich understand image content faster.                            |
| `Face Recognition Models`                                   | No       | -         | Preload face **recognition** models (used to match faces to known people). Preloading = faster results but uses more RAM.         |
| `Face Detection Models`                                     | No       | -         | Preload face **detection** models (used to find faces in images/videos). Same note about RAM applies.                             |
| `Trusted Proxies`                                           | No       | -         | List of proxy IP addresses Immich should trust (e.g., if using NGINX or another reverse proxy).                                   |

### 🔌 Network Ports

* **8080/tcp** → Immich web interface
* **5432/tcp** → PostgreSQL database
* **6379/tcp** → Redis database

---

## 📚 Storage Management

### External Libraries

* You can store photos/videos on external folders mounted under:

  * `/media`
  * `/share`

### Immich Library

* By default, Immich stores everything inside `/media/immich`.
* ⚠️ Do **not** manually move or change files inside this folder—always manage via Immich UI.

---

## 💾 NAS Storage Setup

To store your photo library on a NAS (recommended for large libraries):

1. **Existing Users**:

   * Stop Immich
   * Move the contents of `/media/immich` to your NAS folder
2. **Mount Share Folder**:

   * Go to **Supervisor** → **System** → **Storage**
   * Add a new network storage:

     * **Name**: `immich`
     * **Usage**: `Media`
     * **Protocol**: SMB/NFS (enter NAS login info if needed)
3. **Restart Immich**

⚠️ **Important**: If you don’t set this up before first start, Immich will default to local storage. Changing later requires moving files manually.

---

## 🔒 Enabling HTTPS/SSL

HTTPS is enabled **by default** (`ssl: true`).  

1. **Default (Self-Signed Certificate)**  
   * If you don’t specify `certfile` and `keyfile`, Immich will automatically generate and use a self-signed SSL certificate.  
   * You may see a browser warning the first time you connect—this is expected with self-signed certificates.  

2. **Using Trusted Certificates (Recommended)**  
   * If using Home Assistant’s **Let’s Encrypt add-on**, certificates will be stored in `/ssl/`.
   * You should see two files:
     * `fullchain.pem` (certificate)
     * `privkey.pem` (private key)

   Example configuration:

   ```yaml
   ssl: true
   certfile: fullchain.pem
   keyfile: privkey.pem
````

3. **Restart Immich**

4. **Open Web UI**

---

## 🚨 Troubleshooting

### Common Issues

* **Uploads Failing**

  * Check storage has enough free space
  * Ensure storage permissions match `PUID`/`PGID`

* **Slow AI Processing**

  * Consider preloading machine learning models (but this may use more RAM)

* **Web UI Not Loading**

  * If using HTTPS, confirm your SSL certificate and key files are valid
  * If using the self-signed default certificate, accept the browser warning

---

## ❓ Support

For assistance:

* [GitHub Issues](https://github.com/fabio-garavini/hassio-addons/issues)
* [Home Assistant Community Forum](https://community.home-assistant.io)
