# Home Assistant app: Calibre 📚 by Fabio Garavini

[Calibre](https://calibre-ebook.com/) is a powerful and easy-to-use e-book
manager. This app packages the full Calibre desktop — library management,
format conversion, metadata editor and e-book viewer — into a single Home
Assistant container based on the
[LinuxServer.io Calibre image](https://docs.linuxserver.io/images/docker-calibre/).

The desktop GUI is served through KasmVNC over HTTPS on port **8181**. By
default there is **no login** — opening the Web UI drops you straight into
the **Calibre setup wizard**, where you create your first library.

It's the **all-in-one** solution: no external database, no reverse proxy,
no separate VNC client. Just install, start and point your browser at
`https://<your-home-assistant-ip>:8181`.

[Official Calibre documentation](https://manual.calibre-ebook.com/)

---

## 📥 Installation

1. **Add this repository** to your Home Assistant app store (if you have not
   already):

   [![Open your Home Assistant instance and show the app add repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

2. Navigate to **Settings → Apps → App Store**, search for **Calibre** and
   click **Install**.
3. *(Optional)* Open the **Configuration** tab and adjust the options
   described below — especially `FILE_MANAGER_PATH` if you want your library
   on a specific folder, or `storage_mounts` to mount an external disk/NAS.
4. **Start** the app.
5. Click **OPEN WEB UI** (or open `https://<your-home-assistant-ip>:8181`
   directly). Your browser will warn you about the self-signed certificate
   — this is expected. Accept it and the **Calibre setup wizard** will
   appear.

---

## ⚙️ Configuration Options

| Option              | Type    | Required | Default          | Description                                                                                                                                                                                          |
| ------------------- | ------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUID`              | integer | Yes      | `0`              | **User ID** under which Calibre runs. Match this to a real user on your host if you want files on mounted storage to be owned by that user. Leave at `0` if unsure.                                  |
| `PGID`              | integer | Yes      | `0`              | **Group ID** under which Calibre runs. See `PUID` above.                                                                                                                                             |
| `TZ`                | string  | No       | `Etc/UTC`        | Timezone used by Calibre for logs and metadata timestamps. Example: `Europe/Rome`.                                                                                                                   |
| `FILE_MANAGER_PATH` | string  | No       | `/share/calibre` | Default folder Calibre opens when browsing for books. Must be a path the app can see (typically under `/media`, `/share` or a mounted storage device).                                               |
| `CUSTOM_USER`       | string  | No       | —                | Optional custom username for the Web UI. Not set by default — leave empty for the standard unauthenticated access (the setup wizard on first launch).                                                |
| `PASSWORD`          | string  | No       | —                | Optional password for the Web UI. **Strongly recommended** if you expose the app outside your local network.                                                                                         |
| `CLI_ARGS`          | string  | No       | —                | Extra command-line arguments passed to Calibre at startup.                                                                                                                                           |
| `storage_mounts`    | list    | No       | `[]`             | External storage mounts (USB disk, SMB/CIFS or NFS share) to mount inside the container. See the *Storage Mounts* section below.                                                                     |
| `env_vars`          | list    | No       | `[]`             | Additional environment variables to inject into the container. Each entry has a `key` (must match `^[A-Za-z0-9_-]+$`) and a `value`.                                                                 |

> [!NOTE]
> This app does **not** use the Home Assistant `ssl` / `certfile` / `keyfile`
> options. The Web UI is served over HTTPS by the LinuxServer base image
> using its own self-signed certificate (that's why your browser shows a
> warning). If you need a trusted certificate, place Calibre behind a
> reverse proxy (the Cloudflared app from this repository works well).

---

## 🔌 Ports

| Port       | Protocol | Default host port | Description                                                                                          |
| ---------- | -------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| `8181/tcp` | TCP      | `8181`            | **Calibre Administration** — the KasmVNC Web UI where you use the desktop Calibre. This is the port opened by **OPEN WEB UI**. |
| `8081/tcp` | TCP      | `null` (disabled) | **Calibre web server** — Calibre's built-in content server, optional. Enable it only if you want to serve books to an e-reader app without the desktop UI. |

---

## 💾 Storage

The app maps several Home Assistant folders inside the container:

| Home Assistant folder | Container path | Typical use                                 |
| --------------------- | -------------- | ------------------------------------------- |
| App config            | `/config`      | Calibre settings and metadata database      |
| App data              | `/data`        | Persistent app data                         |
| Media                 | `/media`       | Read/write access to your media library     |
| Share                 | `/share`       | Shared files between apps                   |
| SSL                   | `/ssl`         | (Mapped but not used by this app — see note) |

By default, Calibre opens `FILE_MANAGER_PATH` (`/share/calibre`) when you
browse for books. Point it at any folder the app can see.

### 📦 Storage Mounts

You can attach external storage directly from the app config — useful for a
USB hard disk or a NAS share.

```yaml
storage_mounts:
  # Local USB disk — auto-format and mount
  - type: local
    mount: sda                    # device name printed in the app log at boot
    path: books                   # mounted under /mnt/books
    auto_format: true             # create an ext4 partition
    erase: true                   # ⚠️ wipe the disk first

  # SMB / Windows share
  - type: smb
    mount: //192.168.1.10/books   # server and share
    path: nas-books               # mounted under /mnt/nas-books
    username: user                # optional, defaults to guest
    password: secret              # optional

  # NFS share
  - type: nfs
    mount: 192.168.1.10:/export/books
    path: nfs-books               # mounted under /mnt/nfs-books
    options: "ro,soft"           # optional extra mount options (e.g. workgroup/domain)
```

**Mount types:** `local`, `smb`, `cifs`, `nfs`.

**Fields per mount:**

| Field         | Type    | Applies to          | Description                                                                                       |
| ------------- | ------- | ------------------- | ------------------------------------------------------------------------------------------------- |
| `path`        | string  | all                 | Name of the folder mounted under `/mnt/`.                                                         |
| `type`        | string  | all                 | One of `local`, `smb`, `cifs`, `nfs`.                                                             |
| `mount`       | string  | all                 | Device name (local) or server/share path (SMB/NFS).                                               |
| `options`     | string  | all                 | Optional extra mount options. For SMB you can pass things like `domain=WORKGROUP` here.           |
| `auto_format` | boolean | `local`             | Create an ext4 primary partition on the disk.                                                                 |
| `erase`       | boolean | `local`             | ⚠️ Wipe the disk before formatting.                                                              |
| `username`    | string  | `smb`, `cifs`       | Username for the share. Defaults to `guest` if not set.                                            |
| `password`    | string  | `smb`, `cifs`       | Password for the share.                                                                           |

> [!TIP]
> When formatting a local disk for the first time, set `auto_format: true`
> and `erase: true`. On the next start the app will create the partition and
> print the disk's UUID in the log. Replace `mount: sda` with
> `mount: disk/by-uuid/<UUID>` and remove `auto_format` / `erase` to keep
> the disk stable across reboots.

---

## 🖥️ Using Calibre

- The Web UI gives you the **full Calibre desktop experience** — exactly the
  same as the desktop app, just rendered through your browser via KasmVNC.
- The first start can take a few extra seconds while the VNC session
  initialises — you may briefly see a black or loading screen.
- If the desktop looks small, resize the browser window or use the
  fullscreen button in the KasmVNC toolbar.
- Books added through the UI are stored under your library folder. Avoid
  editing files on disk directly — Calibre keeps its own metadata database
  (`metadata.db`) which can get out of sync.

---

## 🔐 Securing the Web UI

By default the Web UI has **no password** — it opens straight into Calibre
so you can run the setup wizard. This is fine on a trusted home network but
**not safe if your Home Assistant instance is reachable from the internet**.

If you need to expose the app:

1. Set `PASSWORD` in the app configuration to a strong value.
2. *(Optional)* Set `CUSTOM_USER` to a non-default username.
3. Restart the app.
4. For encrypted access, place Calibre behind a reverse proxy (the
   Cloudflared app from this repository works well) rather than opening
   port `8181` directly on your router.

---

## 🚨 Troubleshooting

- **Browser warns about an untrusted certificate** — this is expected. The
  Web UI is served over HTTPS with a self-signed certificate generated by
  the base image. Accept the warning locally, or put the app behind a
  reverse proxy with a trusted certificate.
- **Files on USB disk show as read-only / wrong owner** — set `PUID` and
  `PGID` to a user that owns the files on the disk, and remount the disk.
- **Can't see my NAS share** — double-check the `mount` path, credentials
  and that the share is reachable from the Home Assistant host.
- **App fails to start** — check the app log in Home Assistant
  (*Apps → Calibre → Log*). Common causes are a typo in `storage_mounts`
  or a disk that doesn't exist.

---

## ❓ Support

- [Open an issue on GitHub](https://github.com/fabio-garavini/hassio-addons/issues)
- [Calibre user manual](https://manual.calibre-ebook.com/)
- [Calibre forum](https://www.mobileread.com/forums/forumdisplay.php?f=166)
- [LinuxServer.io Calibre image](https://docs.linuxserver.io/images/docker-calibre/)

---

## 📚 Related apps

- **[Calibre Web](../calibre-web/DOCS.md)** — a lightweight web reader for an
  existing Calibre library, ideal when you don't need the full desktop suite.
