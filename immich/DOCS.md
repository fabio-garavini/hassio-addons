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
1. **Initial Setup**:

   * (Optional) Edit the Configuration
   * Start the add-on
   * Click **OPEN WEB UI**
   * follow first-run wizard
1. **Checkout** the [post installation guide](https://immich.app/docs/install/post-install) (optional)

---

## ⚙️ Configuration Options

Below are all the configuration settings you can customize. Most users can leave defaults, but advanced users may fine-tune.

| Parameter                                                   | Required | Default         | Description                                                                                                                       |
| ----------------------------------------------------------- | -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `PUID`                                                      | Yes      | `0`             | **User ID** used to run Immich. If you don’t know what this is, leave at default                                                 |
| `PGID`                                                      | Yes      | `0`             | **Group ID** used to run Immich. Same as above—leave default if unsure                                                           |
| `TZ`                                                        | Yes      | `Etc/UTC`       | **Timezone** for correct photo/video timestamps. Example: `Europe/London`                                                        |
| `Log Level`                                                 | No       | `info`          | Sets how detailed Immich logs are (e.g., `verbose`, `debug`, `log`, `warn`, `error`). Useful for troubleshooting                 |
| `ssl`                                                       | Yes      | `true`          | Enable HTTPS for secure connections. If `certfile` and `keyfile` are not specified, a self-signed certificate will be generated automatically |
| `certfile`                                                  | No       | -               | Name of SSL certificate file stored in `/ssl/`. Example: `fullchain.pem`                                                         |
| `keyfile`                                                   | No       | -               | Name of SSL private key file stored in `/ssl/`. Example: `privkey.pem`                                                           |
| `Storage type`                                              | Yes      | `HDD`           | Type of storage Immich uses (`SSD` or `HDD`)                                                                                     |
| `Media Location`                                            | Yes      | `/media/immich` | Path where Immich stores photos and videos. Must be a subfolder of `/media/` or `/share/` (the only persistent folders accessible inside the add-on) |
| `Machine Learning Model TTL`                                | Yes      | `300`           | How long (in seconds) a machine learning model stays loaded in memory after not being used. `0` = always keep loaded             |
| `Machine Learning Workers`                           | No      | `1`           | Number of machine learning worker processes to spawn                                        |
| `Machine Learning Worker Timeout`                           | No      | `300`           | If a machine learning worker doesn’t respond in this time (seconds), it will be restarted                                        |
| `Preload CLIP Textual Models`                               | No       | -               | Preload text-based AI models for **Smart Search** (searching photos/videos by description). Use only if you want faster searches |
| `Preload CLIP Visual Models`                                | No       | -               | Preload image-based AI models for **Smart Search**. This helps Immich understand image content faster                            |
| `Face Recognition Models`                                   | No       | -               | Preload face **recognition** models (used to match faces to known people). Preloading = faster results but uses more RAM         |
| `Face Detection Models`                                     | No       | -               | Preload face **detection** models (used to find faces in images/videos). Same note about RAM applies                             |
| `Trusted Proxies`                                           | No       | -               | List of proxy IP addresses Immich should trust (e.g., if using NGINX or another reverse proxy)                                   |

### 🔌 Network Ports

* **8080/tcp** → Immich web interface
* **5432/tcp** → PostgreSQL database
* **6379/tcp** → Redis database

---

## 📚 Storage Management

### Immich Library

* By default, Immich stores everything inside `/media/immich` (set by `Media Location`)
  
   If you want it to be included in the Addon backup and not in the Media folder, you can change it to `config/library`. Depending on your library size **this will increase the addon backup size by a lot!**

* ⚠️ **Don't** manually move or change files inside this folder, always manage them via Immich UI.
   Immich doesn't scan the media location folder looking for new or changed files, so editing files will lead to errors

### External Libraries

* You can store photos/videos on external folders mounted under:

  * `/media`
  * `/share`

---

## 💾 NAS Storage Setup

To use a NAS for photo/video storage, you must first mount the smb or nfs share in Home Assistant:

1. **Stop Immich**
1. Navigate to **Supervisor** → **System** → **Storage**.
1. Add a new network storage: ( ⚠️ don't mount the share on your `Media Location` path default: `/media/immich`)
   * **Name**: `immich` (name of the folder to mount share on)
   * **Usage**: `Share` (you can choose `Media` or `Share`)
   * **Protocol**: SMB or NFS (enter login credentials if required).  
1. Update your addon `Media Location` configuration with `/<usage>/<name>` (for the example above `/share/immich`)
1. **Start Immich**
1. **Check logs** and wait for the migration to complete

Check also `Media Library Migration` section to know more ⤵️

---

## 📦 Media Library Migration

If you want Immich to move your media library to a new folder:

1. **Prepare the New Folder**  
   * Ensure the new folder is either **empty** or **does not exist** (Immich will create it).  

2. **Update Configuration**  
   * Open the **Immich Add-on Configuration Page**.  
   * Change the `Media Location` to the new folder (e.g., `/share/immich`).  

3. **Start Immich**  
   * Immich will automatically perform checks and migrate all media from the old location to the new one.  

❕ **Important Notes**:  
* Only subfolders of `/media/` and `/share/` are supported for `Media Location` (or `/config/library` if you want to include your media library in the addon backup)
* Migration may take time depending on your library size
* Once complete, all new uploads will be stored in the new location

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
   ```

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
