# Home Assistant app: Immich OpenVINO (all in one) 📷 by Fabio Garavini

[Immich](https://immich.app) is a high-performance self-hosted solution for
managing personal photos and videos — automatic mobile backup, AI-powered
search (object, scene and face recognition), timeline, shared albums and RAW
support — packaged as a single Home Assistant app.

It's the **all-in-one** solution: no external database, no separate machine
learning container. This monolithic package bundles:

* **Immich Core** — photo/video management server and web interface
* **Machine Learning** — object/scene recognition & facial recognition
* **PostgreSQL with VectorChord** — vector-optimized database
* **Redis** — real-time notifications and caching

Connections from Immich to Postgres and Redis use Unix sockets, which
**reduce overhead and improve performance**.

[Official Immich documentation](https://immich.app/docs)

---

## 📥 Installation

1. **Add this repository** to your Home Assistant app store (if you have not
   already):

   [![Open your Home Assistant instance and show the app add repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

1. Navigate to **Settings → Apps → App Store**, search for **Immich** and
   click **Install**.
1. *(Optional)* Open the **Configuration** tab and adjust the options
   described below — especially `Media Location` if you want your library on
   a specific folder, or `storage_mounts` to mount an external disk/NAS.
1. **Start** the app.
1. Click **OPEN WEB UI** and follow the **first-run wizard** to create your
   admin account.
   <br>Check out the [post installation guide](https://immich.app/docs/install/post-install).

---

## ⚙️ Configuration Options

| Option                                            | Type    | Required | Default          | Description                                                                                                                                         |
| ------------------------------------------------- | ------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUID`                                            | integer | Yes      | `0`              | **User ID** under which Immich runs. Match this to a real user on your host if you want files on mounted storage to be owned by that user. Leave at `0` if unsure. |
| `PGID`                                            | integer | Yes      | `0`              | **Group ID** under which Immich runs. See `PUID` above.                                                                                              |
| `TZ`                                              | string  | No       | `Etc/UTC`        | Timezone used for correct photo/video timestamps. Example: `Europe/Rome`.                                                                             |
| `Log Level`                                       | string  | No       | `log`            | How detailed the Immich logs are (`verbose`, `debug`, `log`, `warn`, `error`). Useful for troubleshooting.                                             |
| `ssl`                                             | boolean | Yes      | `false`          | Enable HTTPS for the Web UI. If `certfile` and `keyfile` are not specified, a self-signed certificate will be generated automatically. See the *HTTPS/SSL* section. |
| `certfile`                                        | string  | No       | `fullchain.pem`  | Name of the SSL certificate file stored in `/ssl/`.                                                                                                   |
| `keyfile`                                         | string  | No       | `privkey.pem`    | Name of the SSL private key file stored in `/ssl/`.                                                                                                    |
| `Storage type`                                    | string  | Yes      | `HDD`            | Type of storage the database runs on (`SSD` or `HDD`). Set it to match the underlying storage so PostgreSQL is tuned accordingly.                      |
| `Media Location`                                  | string  | Yes      | `/media/immich`  | Path where Immich stores photos and videos. Must be a subfolder of `/media/` or `/share/` (or `/config/library` to include it in app backups).        |
| `Thumbnail processes invalid images`              | boolean | No       | —                | When true, generate thumbnails for invalid images.                                                                                                     |
| `Machine Learning Model TTL`                      | integer | Yes      | `300`            | How long (in seconds) a machine learning model stays loaded in memory after not being used. `0` = always keep loaded.                                  |
| `Machine Learning Workers`                        | integer | No       | —                | Number of machine learning worker processes to spawn.                                                                                                   |
| `Machine Learning Worker Timeout`                 | integer | No       | `300`            | If a machine learning worker doesn't respond in this time (seconds), it will be restarted.                                                              |
| `Preload CLIP Textual Models`                     | string  | No       | —                | Preload text-based AI models for **Smart Search** (searching photos/videos by description). Use only if you want faster searches.                       |
| `Preload CLIP Visual Models`                      | string  | No       | —                | Preload image-based AI models for **Smart Search**. This helps Immich understand image content faster.                                                  |
| `Face Recognition Models`                         | string  | No       | —                | Preload face **recognition** models (used to match faces to known people). Preloading = faster results but uses more RAM.                                |
| `Face Detection Models`                           | string  | No       | —                | Preload face **detection** models (used to find faces in images/videos). Same note about RAM applies.                                                    |
| `Trusted Proxies`                                 | string  | No       | `172.30.32.0/23` | Comma-separated list of proxy IP addresses Immich should trust (e.g. if using NGINX or another reverse proxy).                                           |
| `Storage Mounts`                                  | list    | No       | `[]`             | External storage mounts (USB disk, SMB/CIFS or NFS share) to mount inside the app. See the *Storage Mounts* section below.                              |
| `Clean Redis Cache`                               | boolean | No       | `false`          | Always start Redis with a clean new db. Use only if you are facing problems that need cleaning Redis.                                                    |
| `Apply permissions`                               | boolean | No       | `false`          | Apply permissions to all files inside the Immich media location during boot. It can increase boot times.                                                 |
| `Backup location`                                 | string  | No       | —                | Path to the database dump to restore (e.g. `/media/immich/backups/backup-1700000000.sql.gz`). See the *Manual Dump Restore* section.                     |
| `Restore backup`                                  | boolean | No       | `false`          | Enable to restore the database dump from `Backup location` on start. **Disable it again** after the restore completed.                                   |
| `DELETE DB!`                                      | boolean | No       | `false`          | ⚠️ Delete the PostgreSQL database before restoring. Only used together with `Restore backup`.                                                            |
| `env_vars`                                        | list    | No       | `[]`             | Additional environment variables to inject into the container. Each entry has a `key` (must match `^[A-Za-z0-9_-]+$`) and a `value`.                     |

---

## 🔌 Ports

| Port       | Protocol | Default host port | Description                                                                                     |
| ---------- | -------- | ----------------- | ------------------------------------------------------------------------------------------------ |
| `8080/tcp` | TCP      | `8080`            | **Immich Web UI** — the photo/video management interface. This is the port opened by **OPEN WEB UI**. |
| `5432/tcp` | TCP      | `null` (disabled) | **PostgreSQL database** — internal use only (Immich connects over a Unix socket).                 |
| `6379/tcp` | TCP      | `null` (disabled) | **Redis database** — internal use only (Immich connects over a Unix socket).                      |

> [!NOTE]
> The PostgreSQL and Redis ports are **disabled by default** and don't need to
> be opened — everything communicates inside the app through Unix sockets.

---

## 💾 Storage

The app maps several Home Assistant folders inside the container:

| Home Assistant folder | Container path | Typical use                                            |
| --------------------- | -------------- | ------------------------------------------------------- |
| App config            | `/config`      | Immich settings and (if configured) the media library   |
| Media                 | `/media`       | Read/write access to your media library (default)       |
| Share                 | `/share`       | Shared files between apps                               |
| SSL                   | `/ssl`         | SSL certificates (only used if `ssl` is enabled)        |

### Immich Library

* By default, Immich stores everything inside `/media/immich` (set by
  `Media Location`).
* If you want the library to be included in the app backup and not in the
  media folder, you can change it to `/config/library`. Depending on your
  library size **this will increase the app backup size by a lot!**
* ⚠️ **Don't** manually move or change files inside this folder — always
  manage them via the Immich UI. Immich doesn't scan the media location
  looking for new or changed files, so editing files on disk will lead to
  errors.

### External Libraries

* You can store photos/videos on external folders mounted under `/media` or
  `/share` and add them as *external libraries* from the Immich UI.

---

## 📦 Storage Mounts

You can attach external storage directly from the app config — useful for a
USB hard disk or a NAS share. You can specify as many storage mounts as you
want.

```yaml
storage_mounts:
  # Local USB disk — auto-format and mount
  - type: local
    mount: sda                    # device name printed in the app log at boot
    path: storage                 # mounted under /mnt/storage
    auto_format: true             # create an ext4 partition
    erase: true                   # ⚠️ wipe the disk first

  # SMB / Windows share
  - type: smb
    mount: //192.168.1.10/photos  # server and share
    path: nas-photos              # mounted under /mnt/nas-photos
    username: user                # optional, defaults to guest
    password: secret              # optional

  # NFS share
  - type: nfs
    mount: 192.168.1.10:/export/photos
    path: nfs-photos              # mounted under /mnt/nfs-photos
    options: "ro,soft"            # optional extra mount options
```

**Mount types:** `local`, `smb`, `cifs`, `nfs`.

**Fields per mount:**

| Field         | Type    | Applies to          | Description                                                                             |
| ------------- | ------- | ------------------- | ---------------------------------------------------------------------------------------- |
| `path`        | string  | all                 | Name of the folder mounted under `/mnt/`.                                                |
| `type`        | string  | all                 | One of `local`, `smb`, `cifs`, `nfs`.                                                    |
| `mount`       | string  | all                 | Device name (local) or server/share path (SMB/NFS).                                      |
| `options`     | string  | all                 | Optional extra mount options. For SMB you can pass things like `domain=WORKGROUP` here.  |
| `auto_format` | boolean | `local`             | Create an ext4 primary partition on the disk.                                             |
| `erase`       | boolean | `local`             | ⚠️ Wipe the disk before formatting.                                                       |
| `username`    | string  | `smb`, `cifs`       | Username for the share. Defaults to `guest` if not set.                                    |
| `password`    | string  | `smb`, `cifs`       | Password for the share.                                                                   |

> [!TIP]
> When formatting a local disk for the first time, set `auto_format: true`
> and `erase: true`. On the next start the app will create the partition and
> print the disk's UUID in the log. Replace `mount: sda` with
> `mount: disk/by-uuid/<UUID>` and remove `auto_format` / `erase` to keep
> the disk stable across reboots.

I strongly recommend storing your library on a NAS, which is usually more
reliable. See the *NAS Storage Setup* section below.

### 🖴 Mount a Hard Disk

Step-by-step guide to format and use a local disk:

1. **Connect the hard disk** to the Home Assistant server.
2. **Start Immich** and check the logs — identify your hard disk, it should
   look something like this (maybe with a different device name; if you're
   not sure, double-check with the drive serial printed on the disk):

   ```text
   ════════════════════════════════════════════════════════════════════
                       LOCAL STORAGE DEVICES
   ════════════════════════════════════════════════════════════════════
   DEVICE   SIZE     MODEL                          PT TABLE   PARTITIONS SERIAL
   ────────────────────────────────────────────────────────────────────
   sda      20G      QEMU HARDDISK                  none       0          QM00001
   ────────────────────────────────────────────────────────────────────
   ```

3. **Erase and create a primary partition** — add this to your
   `Storage Mounts` config to let Immich format the disk:

   ```yaml
   - type: local
     mount: sda         # your disk device name
     path: storage      # mounted under /mnt/ (in this case /mnt/storage)
     auto_format: true  # makes the primary partition ext4
     erase: true
   ```

4. **Start Immich** and wait for the disk to be initialized. You should see
   in the logs something like:

   ```text
   Disk partition created. Please update your storage_mounts config with:
   - type: local
     mount: disk/by-uuid/11c83a29-04e7-453d-8fd4-f3022ea3b0ca
     path: storage
   ```

5. **Copy it and replace** your storage mount config — ⚠️ remove
   `auto_format: true` and `erase: true` too.
6. **Move your Immich library to the disk** — set
   `Media Location` to `/mnt/<path>` (for this example `/mnt/storage`).
7. Start Immich and check the logs to make sure everything is working fine.

> [!TIP]
> You can set `path: storage/immich` to create a subdirectory in the root disk folder
> and then change the `Media Location` to `/mnt/storage/immich`.
> Or whatever other `storage` subfolder location

---

## 🖥️ NAS Storage Setup

There are two ways of connecting Immich to a NAS.

### Home Assistant Network Storage

1. **Stop Immich**.
2. Navigate to **Settings → System → Storage** and add a new **Network
   storage** (⚠️ don't mount the share on your `Media Location` path —
   default `/media/immich`):
   * **Name**: `immich` (name of the folder to mount the share on)
   * **Usage**: `Share` (you can choose `Media` or `Share`)
   * **Protocol**: SMB or NFS (enter login credentials if required)
3. Update the app's `Media Location` configuration with `/<usage>/<name>`
   (for the example above: `/share/immich`).
4. **Start Immich** and wait for the migration to complete (see the
   *Media Library Migration* section below).

### App Config Mount

1. Add a storage mount to the app config:

   ```yaml
   # SMB share
   - type: smb
     mount: //192.168.1.242/test # your smb server and shared folder
     path: immich-test           # mounted under /mnt/ (in this case /mnt/immich-test)
     username: user              # optional, defaults to guest
     password: password          # optional
     domain: WORKGROUP           # optional
     #options: <you can add additional smb options here>
   ```

   or

   ```yaml
   # NFS share
   - type: nfs
     mount: 192.168.1.242:/storage/test   # your nfs server and path
     path: nfs-test                       # mounted under /mnt/ (in this case /mnt/nfs-test)
     #options: <you can add additional nfs options here>
   ```

2. *(Optional)* Update `Media Location` to transfer your library to the
   external storage (e.g. `/mnt/immich-test` or `/mnt/nfs-test`).
3. Restart Immich and check the logs.

---

## 📦 Media Library Migration

If you want Immich to move your media library to a new folder:

1. **Prepare the new folder** — ensure the new folder is either **empty** or
   **does not exist** (Immich will create it).
2. **Update the configuration** — change `Media Location` to the new folder
   (e.g. `/share/immich`).
3. **Start Immich** — it will automatically perform checks and migrate all
   media from the old location to the new one.

> [!IMPORTANT]
> * Only subfolders of `/media/` and `/share/` are supported for
>   `Media Location` (or `/config/library` if you want to include your media
>   library in the app backup).
> * Migration may take time depending on your library size.
> * Once complete, all new uploads will be stored in the new location.

---

## 🔒 Enabling HTTPS/SSL

1. **Default (self-signed certificate)** — enable `ssl` without specifying
   `certfile`/`keyfile` and Immich will automatically generate and use a
   self-signed certificate. You may see a browser warning the first time you
   connect — this is expected with self-signed certificates.
2. **Using trusted certificates (recommended)** — if you use Home
   Assistant's **Let's Encrypt app**, the certificates are stored in `/ssl/`
   (`fullchain.pem` certificate and `privkey.pem` private key):

   ```yaml
   ssl: true
   certfile: fullchain.pem
   keyfile: privkey.pem
   ```

3. **Restart Immich** and open the Web UI.

---

## ➡️ Manual Dump Restore

1. Make sure to back up everything first by
   [triggering a dump](https://docs.immich.app/administration/backup-and-restore/#trigger-dump).

   If you are migrating Immich from **any other source other than this app**,
   make sure to use the
   [VectorChord extension](https://docs.immich.app/administration/postgres-standalone/#migrating-to-vectorchord).
2. Mount or copy your Immich media library folder to Home Assistant (more
   information above).
3. Open the **Configuration** tab:
   * Set `Backup location` to the database dump you want to restore
     (e.g. `/media/immich/backups/backup-1700000000.sql.gz`).
   * Enable `Restore backup`.
   * Enable `DELETE DB!` to delete the PostgreSQL database, and
     `Clean Redis Cache`.
4. **Start Immich** and check the logs.
5. Wait for Immich to start and the restore to complete.
6. **Disable** `Restore backup`, `DELETE DB!` and `Clean Redis Cache`, then
   restart Immich.

---

## 🚨 Troubleshooting

- **Uploads failing** — check the storage has enough free space and that
  permissions match `PUID`/`PGID` (you can enable `Apply permissions` once
  to fix ownership on the media location).
- **Slow AI processing** — usually caused by a machine learning model too
  big for your machine, or by the time it takes to load the model: consider
  preloading models (but this may use more RAM). If the database is the
  bottleneck instead, check `Storage type` matches the storage the database
  runs on.
- **Web UI not loading** — if using HTTPS, confirm your SSL certificate and
  key files are valid; if using the self-signed certificate, accept the
  browser warning.
- **Files on USB disk show as read-only / wrong owner** — set `PUID` and
  `PGID` to a user that owns the files on the disk, and remount the disk.
- **Can't see my NAS share** — double-check the `mount` path, credentials
  and that the share is reachable from the Home Assistant host.
- **App fails to start** — check the app log in Home Assistant
  (*Apps → Immich → Log*). Common causes are a typo in `storage_mounts`, a
  disk that doesn't exist, or an invalid `Media Location` (only subfolders
  of `/media/` and `/share/` are supported).

---

## ❓ Support

- [Open an issue on GitHub](https://github.com/fabio-garavini/hassio-addons/issues)
- [Immich documentation](https://immich.app/docs)
- [Immich troubleshooting guide](https://immich.app/docs/install/post-install)
- [Home Assistant Community Forum](https://community.home-assistant.io)

---

## 📚 Related apps

- **[Immich OpenVINO](../immich_openvino/DOCS.md)** — GPU-accelerated machine
  learning via Intel OpenVINO.
- **[Immich Cuda](../immich_cuda/DOCS.md)** — GPU-accelerated machine
  learning via NVIDIA CUDA.
- **[Immich NoML](../immich_noml/DOCS.md)** — lightweight variant **without**
  machine learning, for low-resource devices.
- **[Immich Power Tools](../immich_power_tools/DOCS.md)** — companion tools
  for bulk managing people, albums and duplicates.
- **[ImmichFrame](../immich_frame/README.md)** — turn a spare screen into a
  photo frame powered by your Immich library.
