# Home Assistant app: Calibre Web 📚 by Fabio Garavini

[Calibre Web](https://github.com/janeczku/calibre-web) is a lightweight web
app that provides a clean, browser-based reader and librarian for an
**existing Calibre library** (`metadata.db`). Use it when you want to browse
and read your books on any device — phone, tablet, e-reader — without
running the full Calibre desktop.

If you don't already have a Calibre library, build one first with the
companion **Calibre** app from this repository, then point Calibre Web at
its library folder.

This app is built on the
[LinuxServer.io Calibre Web image](https://docs.linuxserver.io/images/docker-calibre-web/)
with a **full Calibre install bundled in** (extracted from the upstream
Calibre release), so ebook conversion, metadata management and OPDS serving
all work out of the box. An NGINX front-end handles TLS and the Ingress
auto-login.

> [!IMPORTANT]
> The default admin credentials on first launch are:
>
> - **Username:** `admin`
> - **Password:** `admin123`
>
> Change them immediately from *Admin → Edit users* after the first login.

[Official Calibre Web wiki](https://github.com/janeczku/calibre-web/wiki)

---

## 📥 Installation

1. **Add this repository** to your Home Assistant app store (if you have not
   already):

   [![Open your Home Assistant instance and show the app add repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

2. Navigate to **Settings → Apps → App Store**, search for **Calibre Web**
   and click **Install**.
3. *(Optional)* Open the **Configuration** tab and adjust the options
   described below.
4. **Start** the app.
5. Use the **Calibre Web** panel that appears in the Home Assistant sidebar
   (Ingress), or click **OPEN WEB UI** to open it in a new tab.
6. Log in with the default credentials (`admin` / `admin123`) and change
   them immediately.

---

## ⚙️ Configuration Options

| Option         | Type    | Required | Default          | Description                                                                                                                                                                  |
| -------------- | ------- | -------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ssl`          | boolean | Yes      | `true`           | Serve the Web UI over HTTPS through the built-in NGINX front-end. If `certfile`/`keyfile` are not present in `/ssl/`, a self-signed certificate is generated automatically.  |
| `certfile`     | string  | No       | `fullchain.pem`  | Name of the SSL certificate file inside `/ssl/` (typically provided by the Let's Encrypt app). Only used when `ssl: true` and the files exist.                               |
| `keyfile`      | string  | No       | `privkey.pem`    | Name of the SSL private key file inside `/ssl/`. Only used together with `certfile`.                                                                                         |
| `ingress_user` | string  | No       | `admin`          | Calibre Web username that will be automatically logged in when accessing through the Home Assistant Ingress sidebar panel. Leave as `admin` for first setup, then change it. |
| `PUID`         | integer | Yes      | `1000`           | **User ID** under which Calibre Web runs. Match this to a real user on your host if you want files on mounted storage to be owned by that user.                              |
| `PGID`         | integer | Yes      | `1000`           | **Group ID** under which Calibre Web runs. See `PUID` above.                                                                                                                 |
| `TZ`           | string  | No       | `Etc/UTC`        | Timezone used by the app for logs and timestamps. Example: `Europe/Rome`.                                                                                                    |

> [!TIP]
> After creating your own user in Calibre Web, set `ingress_user` to that
> username so you're logged in automatically when opening the sidebar panel.
> Keep `ingress_user` as `admin` only while you still need the default
> account to do the first login.

---

## 🔌 Ports

| Port       | Protocol | Default host port | Description                                                                                  |
| ---------- | -------- | ----------------- | -------------------------------------------------------------------------------------------- |
| `8080/tcp` | TCP      | `null` (disabled)  | Direct access to the NGINX front-end. **Not needed for Ingress** — only enable it if you want to expose Calibre Web outside Home Assistant (e.g. for an OPDS feed). |

Calibre Web is wired into Home Assistant's Ingress system, so it appears as
a panel in the sidebar and you don't need to expose any port for normal
browser use. Only enable `8080/tcp` if:

- you want to access Calibre Web from outside Home Assistant, or
- you want external e-reader apps to reach the **OPDS catalog** at
  `https://<home-assistant-ip>:<port>/opds`.

---

## 💾 Storage

The app maps the following Home Assistant folders inside the container:

| Home Assistant folder | Container path | Typical use                              |
| --------------------- | -------------- | ---------------------------------------- |
| App config            | `/config`      | Calibre Web settings, database and session data |
| Media                 | `/media`       | Read/write access to your media library  |
| Share                 | `/share`       | Shared files between apps                |

> [!NOTE]
> This app does **not** use the Home Assistant `ssl` / `certfile` / `keyfile`
> options. The Web UI is served over HTTPS by the LinuxServer base image
> using its own self-signed certificate (that's why your browser shows a
> warning). If you need a trusted certificate, place Calibre behind a
> reverse proxy (the Cloudflared app from this repository works well).

### Pointing Calibre Web at your Calibre library

Calibre Web needs read access to a Calibre `metadata.db` file:

1. Build your library with the **Calibre** app (or any desktop Calibre).
2. Note the folder containing `metadata.db` — for example `/media/calibre`.
3. Open Calibre Web and go to **Admin → Edit Calibre Database Location**
   (or *Admin → Basic Configuration → Location of Calibre database* on
   older versions).
4. Enter the container path of that folder (e.g. `/media/calibre`).

> [!TIP]
> Avoid pointing two apps at the same `metadata.db` for **writing** at the
> same time. Calibre Web is great for reading and uploading, but heavy
> library operations (mass conversion, large imports) should be done from
> the dedicated Calibre app.

---

## 🔒 HTTPS / SSL

HTTPS is **enabled by default** (`ssl: true`).

The app ships with an NGINX front-end that terminates TLS. When `ssl: true`:

- **Self-signed certificate (default)** — if `certfile`/`keyfile` are not
  present in `/ssl/` (or `/ssl/` isn't mapped), NGINX automatically
  generates and uses a self-signed certificate. Your browser will warn you
  about an untrusted certificate the first time; this is expected and safe
  to accept locally.
- **Trusted certificate (recommended for remote access)** — install the
  [Let's Encrypt](https://github.com/home-assistant/addons/tree/main/letsencrypt)
  app (or any other ACME client) so that `fullchain.pem` and `privkey.pem`
  end up in `/ssl/`. The app will pick them up automatically on the next
  start.

> [!NOTE]
> Ingress traffic (the sidebar panel) is encrypted by Home Assistant itself,
  so the certificate only matters when you access Calibre Web directly via
  `http(s)://<home-assistant-ip>:8080`.

---

## 🔑 Default Credentials & First Login

| Step | Action |
| ---- | ------ |
| 1 | Open the **Calibre Web** panel in the Home Assistant sidebar (or click **OPEN WEB UI**). |
| 2 | Log in with **username** `admin` and **password** `admin123`. Through Ingress the username is auto-filled from `ingress_user`, so you may skip straight into the UI. |
| 3 | Go to **Admin → Edit users** and set a strong password for the `admin` account. |
| 4 | *(Optional)* Create extra users for family or friends with their own permissions. |
| 5 | Update `ingress_user` in the app Configuration tab to match the username you want to auto-login as through Ingress. |

---

## 📱 OPDS Feed (e-reader integration)

Calibre Web exposes an **OPDS catalog** so e-reader apps can browse and
download books from your library. To use it:

1. Enable the `8080/tcp` port in the app Configuration tab.
2. Point your e-reader app to:

   `https://<home-assistant-ip>:8080/opds`

3. Authenticate with a Calibre Web username and password (the default
   `admin`/`admin123` works but should be changed first).

Compatible apps include [KyBook](https://kybook-reader.com/),
[Moon+ Reader](https://www.moondownload.com/),
[Calibre Companion](https://calibrecompanion.wordpress.com/) and any app
that supports the OPDS 1.x protocol.

---

## 🚨 Troubleshooting

- **"Could not connect to Calibre database"** — check that the path you
  entered in *Admin → Basic Configuration* exists inside the container and
  actually contains a `metadata.db` file. The library must be on a folder
  the app can see (`/config`, `/media` or `/share`).
- **Login loop through Ingress** — make sure `ingress_user` matches an
  existing Calibre Web username. The default `admin` works for first setup.
- **Ingress auto-login uses the wrong account** — change `ingress_user` in
  the app Configuration tab to the desired username and restart the app.
- **Uploaded files won't save / show as read-only** — match `PUID` and
  `PGID` to a user that owns the target folder on the host.
- **Ebook conversion fails** — a full Calibre is bundled with this app, so
  conversion should work out of the box. If it doesn't, check the app log
  for missing library errors.
- **OPDS feed not reachable from outside Home Assistant** — expose the
  `8080/tcp` port in the app configuration and access it via
  `https://<home-assistant-ip>:<port>/opds`.
- **Certificate warning** — expected with the default self-signed
  certificate; see *HTTPS / SSL* above.

---

## ❓ Support

- [Open an issue on GitHub](https://github.com/fabio-garavini/hassio-addons/issues)
- [Calibre Web wiki](https://github.com/janeczku/calibre-web/wiki)
- [Calibre Web issues](https://github.com/janeczku/calibre-web/issues)
- [LinuxServer.io Calibre Web image](https://docs.linuxserver.io/images/docker-calibre-web/)

---

## 📚 Related apps

- **[Calibre](../calibre/DOCS.md)** — the full Calibre desktop suite,
  recommended for building and maintaining the library that Calibre Web
  reads from.
