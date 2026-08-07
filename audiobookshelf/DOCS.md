# Home Assistant app: Audiobookshelf 🎧 by Fabio Garavini

[Audiobookshelf](https://www.audiobookshelf.org/) is a self-hosted audiobook
and podcast server. This app packages the upstream project into a single,
ready-to-run container for Home Assistant — **all-in-one**, no external
database or web server required.

> [!IMPORTANT]
> A **new authentication system** was introduced in
> [Audiobookshelf v2.26.0](https://github.com/advplyr/audiobookshelf/releases/tag/v2.26.0).
> See the
> [official discussion](https://github.com/advplyr/audiobookshelf/discussions/4460)
> for details on how accounts, sessions and API keys now work.

[Official Audiobookshelf documentation](https://www.audiobookshelf.org/guides)

---

## 📥 Installation

1. **Add this repository** to your Home Assistant app store (if you have not
   already):

   [![Open your Home Assistant instance and show the app add repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

2. Navigate to **Home Assistant → Settings → Apps → App Store**, search for
   **Audiobookshelf** and click **Install**.
3. *(Optional)* Open the **Configuration** tab and adjust the options
   described below.
4. **Start** the app.
5. Click **OPEN WEB UI** and create your admin account on first launch.

---

## ⚙️ Configuration Options

| Option     | Type    | Required | Default          | Description                                                                                                                                                                                  |
| ---------- | ------- | -------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TZ`       | string  | No       | `Etc/UTC`        | Timezone used by the app for logs and scheduled tasks (e.g. `Europe/Rome`). Use any [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).                       |
| `ssl`      | boolean | Yes      | `true`           | Serve the Web UI over HTTPS. If `certfile`/`keyfile` are not provided, a self-signed certificate is generated automatically (your browser will show a warning the first time).                |
| `certfile` | string  | No       | `fullchain.pem`  | Name of the SSL certificate file inside `/ssl/` (typically provided by the Let's Encrypt app). Example: `fullchain.pem`.                                                                     |
| `keyfile`  | string  | No       | `privkey.pem`    | Name of the SSL private key file inside `/ssl/`. Example: `privkey.pem`.                                                                                                                     |

---

## 🔌 Ports

| Port       | Protocol | Description                  |
| ---------- | -------- | ---------------------------- |
| `8080/tcp` | TCP      | Web UI / streaming API (HTTPS when `ssl: true`) |

The internal port `8080` is published on the host as **`13378`** by default.
You only need to open it on your router if you want to access Audiobookshelf
from outside your home network — otherwise the Web UI button in Home Assistant
is enough.

---

## 💾 Storage

The app maps several Home Assistant folders inside the container:

| Home Assistant folder | Container path | Purpose                                  |
| --------------------- | -------------- | ---------------------------------------- |
| App config            | `/config`      | App metadata, settings and database      |
| App data              | `/data`        | Persistent app data                      |
| Media                 | `/media`       | Read access to your media library        |
| Share                 | `/share`       | Shared files between apps                |
| SSL                   | `/ssl`         | SSL certificates for HTTPS               |

### Where do my books and podcasts go?

Drop your audio files into `/media` or `/share` (any subfolder) and point an
Audiobookshelf **library** at that folder from inside the Web UI.

> [!TIP]
> Never move, rename or edit files inside the Audiobookshelf library folder
> directly on disk. Always add, remove or update media through the
> Audiobookshelf UI — otherwise the database will get out of sync with the
> files on disk.

### Storing your library on a NAS

You have two options:

- **Mount a share through Home Assistant** — go to
  *Settings → System → Storage*, add a network share (SMB or NFS) and then
  point your Audiobookshelf library at that mount path.
- **Use the app's `storage_mounts` helper** — add the share directly in the
  app's Configuration tab if such an option is exposed (see the schema of
  your installed version).

A NAS is strongly recommended for libraries larger than a few hundred
gigabytes.

---

## 🔒 HTTPS / SSL

HTTPS is **enabled by default** (`ssl: true`).

- **Self-signed certificate (default)** — generated automatically the first
  time the app starts. Your browser will warn you about an untrusted
  certificate; this is expected.
- **Trusted certificate (recommended)** — install the
  [Let's Encrypt](https://github.com/home-assistant/addons/tree/main/letsencrypt)
  app (or any other ACME client) so that `fullchain.pem` and `privkey.pem`
  end up in `/ssl/`. Audiobookshelf will pick them up automatically on the
  next start.

---

## 🛟 Backup & Restore

This app uses the **cold** backup mode, which means it is stopped before the
backup is taken. That guarantees a consistent snapshot of the database and
library metadata. Log files are excluded from backups.

To restore, simply restore the Home Assistant backup that contains the
Audiobookshelf app data — the app will come back up exactly as it was.

---

## 🚨 Troubleshooting

- **Web UI shows a certificate warning** — this is normal if you are using
  the default self-signed certificate. Either accept the warning locally or
  install a trusted certificate (see *HTTPS / SSL* above).
- **Library scan does not pick up new files** — make sure your files live
  under a path the app can see (`/media` or `/share`) and trigger a manual
  scan from the Web UI.
- **Cannot log in after upgrading from a pre-2.26.0 version** — read the
  [authentication migration discussion](https://github.com/advplyr/audiobookshelf/discussions/4460)
  and reset your account if necessary.
- **App fails to start** — check the app logs in Home Assistant
  (*Apps → Audiobookshelf → Log*).

---

## ❓ Support

- [Open an issue on GitHub](https://github.com/fabio-garavini/hassio-addons/issues)
- [Audiobookshelf community](https://www.audiobookshelf.org/)
- [Audiobookshelf GitHub discussions](https://github.com/advplyr/audiobookshelf/discussions)
