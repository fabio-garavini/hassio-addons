# Home Assistant add-on: Immich (all in one) 📷 by Fabio Garavini

**Immich** is a high-performance self-hosted solution for managing personal photos and videos. This all-in-one addon bundles essential services for immediate use.

## 🧩 All-in-One Components

This monolithic package includes:

* **Immich Core**: Photo/video management interface
* **Machine Learning**: Object/scene recognition & facial recognition
* **PostgreSQL with VectorChord**: Vector-optimized database
* **Redis**: Real-time notifications and caching

Connections from Immich to Postgres and Redis use Unix sockets, which **reduce overhead and improve performance**

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
1.  (optional) If you're already using the Home Assistant backup system, you can disable *Database Dumps*
1.  (optional) **Checkout** the [post installation guide](https://immich.app/docs/install/post-install)

---

## ⚙️ Configuration Options

Below are all the configuration settings you can customize. Most users can leave defaults, but advanced users may fine-tune.

| Parameter                                                   | Required | Default         | Description                                                                                                                       |
| ----------------------------------------------------------- | -------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `PUID`                                                      | Yes      | `0`             | **User ID** used to run Immich. If you don’t know what this is, leave at default                                                  |
| `PGID`                                                      | Yes      | `0`             | **Group ID** used to run Immich. Same as above—leave default if unsure                                                            |
| `TZ`                                                        | Yes      | `Etc/UTC`       | **Timezone** for correct photo/video timestamps. Example: `Europe/London`                                                         |
| `Log Level`                                                 | No       | `info`          | Sets how detailed Immich logs are (e.g., `verbose`, `debug`, `log`, `warn`, `error`). Useful for troubleshooting                  |
| `ssl`                                                       | Yes      | `true`          | Enable HTTPS for secure connections. If `certfile` and `keyfile` are not specified, a self-signed certificate will be generated automatically |
| `certfile`                                                  | No       | -               | Name of SSL certificate file stored in `/ssl/`. Example: `fullchain.pem`                                                          |
| `keyfile`                                                   | No       | -               | Name of SSL private key file stored in `/ssl/`. Example: `privkey.pem`                                                            |
| `Storage type`                                              | Yes      | `HDD`           | Type of storage Immich uses (`SSD` or `HDD`)                                                                                      |
| `Media Location`                                            | Yes      | `/media/immich` | Path where Immich stores photos and videos. Must be a subfolder of `/media/` or `/share/` (the only persistent folders accessible inside the add-on) |
| `Thumbnail processes invalid images`                        | No       | -               | When true, generate thumbnails for invalid images                                                                                 |
| `Machine Learning Model TTL`                                | Yes      | `300`           | How long (in seconds) a machine learning model stays loaded in memory after not being used. `0` = always keep loaded              |
| `Machine Learning Workers`                                  | No       | `1`             | Number of machine learning worker processes to spawn                                                                              |
| `Machine Learning Worker Timeout`                           | No       | `300`           | If a machine learning worker doesn’t respond in this time (seconds), it will be restarted                                         |
| `Preload CLIP Textual Models`                               | No       | -               | Preload text-based AI models for **Smart Search** (searching photos/videos by description). Use only if you want faster searches  |
| `Preload CLIP Visual Models`                                | No       | -               | Preload image-based AI models for **Smart Search**. This helps Immich understand image content faster                             |
| `Face Recognition Models`                                   | No       | -               | Preload face **recognition** models (used to match faces to known people). Preloading = faster results but uses more RAM          |
| `Face Detection Models`                                     | No       | -               | Preload face **detection** models (used to find faces in images/videos). Same note about RAM applies                              |
| `Trusted Proxies`                                           | No       | -               | List of proxy IP addresses Immich should trust (e.g., if using NGINX or another reverse proxy)                                    |
| `Storage Mounts`                                            | No       | -               | List of external storage mounts to be mounted inside the addon check the `External Storage Mounts` section below                  |
| `Clean Redis Cache`                                         | No       | `false`         | This will always start Redis with a clean new db.Use only if you are facing problems that needs cleaning Redis                    |
| `Apply permissions`                                         | No       | `false`         | Apply permissions to all files inside the Immich Media location during boot, it can increase boot times                           |

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

## 📦 Storage Mounts

You can also store your Immich library on an external storage device (like a usb hard disk or NAS)

You can specify as many "storage mounts" as you want in the addon config

I strongly recommend storing your library on a NAS, which is usually more reliable. You can find how in the `NAS Storage Setup`

### Mount Hard Disk

I will guide you through how to format the disk

1. connect the hard disk to Home Assistant server
1. start Immich and check the logs

   identify your hard disk, it should look something like this (maybe with a different device name)
   if you're not shure, you can always double check with the drive serial printed on the disk
   ```
   ════════════════════════════════════════════════════════════════════
                        LOCAL STORAGE DEVICES
   ════════════════════════════════════════════════════════════════════
   DEVICE   SIZE     MODEL                          PT TABLE   PARTITIONS SERIAL
   ────────────────────────────────────────────────────────────────────
   sda      20G      QEMU HARDDISK                  none       0          QM00001
   ────────────────────────────────────────────────────────────────────
   ```

1. **Erase and create a primary partition on your disk**

   add to your `Storage Mounts` config this to let Immich know to format the disk

   ```yaml
   - type: local
     mount: sda         # your disk device name
     path: storage      # name of the folder which will be mounted under /mnt/ (in this case /mnt/storage)
     auto_format: true  # makes the primary partition ext4
     erase: true
   ```

1. Start Immich and wait for the disk to be initialized

   Then you should see in the logs something like this
   ```
   Disk partition created. Please update your storage_mounts config with:
   - type: local
     mount: disk/by-uuid/11c83a29-04e7-453d-8fd4-f3022ea3b0ca
     path: storage
   ```

1. Copy it and replace your device storage mount config

   ⚠️ replace also `auto_format: true` and `erase: true`

1. (Optional) Move your Immich library to the external disk

   you can now set `Media Location` to your `/mnt/<path>` (for this example `/mnt/storage`)

1. Start Immich and check the logs to make shure everything is working fine

---

## 💾 NAS Storage Setup

There are two ways of connecting Immich to a NAS

### Home Assistant Storage mount

1. **Stop Immich**
1. Navigate to **Supervisor** → **System** → **Storage**.
1. Add a new network storage: ( ⚠️ don't mount the share on your `Media Location` path, default: `/media/immich`)
   * **Name**: `immich` (name of the folder to mount share on)
   * **Usage**: `Share` (you can choose `Media` or `Share`)
   * **Protocol**: SMB or NFS (enter login credentials if required).
1. Update your addon `Media Location` configuration with `/<usage>/<name>` (for the example above `/share/immich`)
1. **Start Immich**
1. **Check logs** and wait for the migration to complete

Check also `Media Library Migration` section to know more ⤵️

### Addon config

1. add to your addon `storage mounts` config

   ```yaml
   - type: smb
     mount: //192.168.1.242/test # your smb server and shared folder
     path: immich-test           # name of the folder which will be mounted under /mnt/
     username: user              # optional default to guest
     password: password          # optional
     domain: WORKGROUP           # optional
     #options: <you can add additional smb options here>
   ```

   or

   ```yaml
   - type: nfs
     mount: 192.168.1.242:/storage/test   # your nfs server and path
     path: nfs-test                       # name of the folder which will be mounted under /mnt/
     #options: <you can add additional nfs options here>
   ```
1. update your `Media Location` (if you want to transfer your library to the external storage)

   ```
   /mnt/immich-test # or /mnt/nfs-test
   ```
1. restart Immich

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

## ➡️ Immich manual dump restore

1. Make sure to backup everything by [triggering a dump](https://docs.immich.app/administration/backup-and-restore/#trigger-dump)

   If you are trying to migrate Immich from **any other source other than this addon**, make sure to use [**VectorChord** extension](https://docs.immich.app/administration/postgres-standalone/#migrating-to-vectorchord)

1. Mount or Copy your Immich media library folder to Home Assistant (more information above)
1. Open the `Configuration` tab

   1. Edit `Backup location` to the database dump that you want to restore (ex: `/media/immich/backups/backup.sql.gz`)
   1. Enable `Restore backup`
   1. Enable `DELETE DB!` to delete Postgres db and `Clean Redis`

1. Start Immich and check the logs
1. Wait for Immich to start
1. **DISABLE** `Restore backup`, `DELETE DB!` and `Clean Redis` and restart Immich

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
