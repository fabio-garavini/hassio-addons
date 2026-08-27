# Home Assistant app: BookOrbit (all-in-one) 📚 by Fabio Garavini

[BookOrbit](https://bookorbit.app/) is a self-hosted home for your ebooks,
audiobooks, comics and PDFs. It organizes your library and reads it back to
you anywhere: the built-in **web reader**, a **Kobo**, or **KOReader** — with
progress, highlights and reading status kept in sync across all of them.

This app packages the full stack into a single Home Assistant container based
on the [official BookOrbit image](https://github.com/bookorbit/bookorbit),
with a **PostgreSQL 18 database (pgvector)** and **Redis** bundled in — no
external database or extra containers required.

Highlights:

- **Multi-format readers** — EPUB, KEPUB, MOBI, AZW3/AZW, FB2, PDF, CBZ/CBR/CB7
  and audiobooks (M4B, MP3, M4A, OPUS, OGG, FLAC)
- **Multi-user** with per-user libraries, granular permissions and isolated
  reading progress
- **Powerful metadata** — 9 providers, bulk editing and field-level rules
- **Book Dock** — a staging area where uploads are reviewed before finalizing
- **Kobo + KOReader two-way progress sync** and a private **OPDS catalog**
- **Reading analytics** — goals, streaks, heatmaps and charts

[Official BookOrbit documentation](https://bookorbit.app/what-is-bookorbit)

> [!IMPORTANT]
> On first launch BookOrbit shows a **signup form** where you create the
> administrator account. It asks for a **Setup token** one single time — this
> app pre-configures it, and the value is:
>
> ```
> bookorbit
> ```

---

## 📥 Installation

1. **Add this repository** to your Home Assistant app store (if you have not
   already):

   [![Open your Home Assistant instance and show the app add repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

2. Navigate to **Settings → Apps → App Store**, search for **BookOrbit** and
   click **Install**.
3. *(Optional)* Open the **Configuration** tab and adjust the options
   described below — especially `LIBRARY_BROWSE_ROOT` if your books live on a
   specific folder or NAS share.
4. **Start** the app. The first start takes a little longer while PostgreSQL
   initializes.
5. Click **OPEN WEB UI** (or open `https://<your-home-assistant-ip>:3013`
   directly). Your browser will warn you about the self-signed certificate —
   this is expected. Accept it and the **signup form** will appear.
6. Fill in the **Setup token** (`bookorbit`) and create your administrator
   account. This is only asked once.
7. Create your first library.

---

## ⚙️ Configuration Options

| Option               | Type    | Required | Default           | Description                                                                                                                                                           |
| -------------------- | ------- | -------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ssl`                | boolean | Yes      | `true`            | Serve the Web UI over HTTPS through the built-in NGINX front-end. If `certfile`/`keyfile` are not present in `/ssl/`, a self-signed certificate is generated automatically. |
| `certfile`           | string  | No       | `fullchain.pem`   | Name of the SSL certificate file inside `/ssl/` (typically provided by the Let's Encrypt app). Only used when `ssl: true` and the file exists.                         |
| `keyfile`            | string  | No       | `privkey.pem`     | Name of the SSL private key file inside `/ssl/`. Only used together with `certfile`.                                                                                   |
| `APP_URL`            | string  | No       | —                 | External/public URL used by emails and the Kobo endpoints (e.g. `https://books.example.com`). Leave empty for plain LAN access.                                        |
| `CLIENT_URL`         | string  | No       | —                 | CORS origin for the frontend when it is served from a different domain than `APP_URL`. Leave empty in most setups.                                                     |
| `LIBRARY_BROWSE_ROOT`| string  | Yes      | `/media/bookorbit`          | Folder used as the top of the library creation folder picker.                                                                                                |
| `BOOKORBIT_FIX_PERMISSIONS` | boolean | Yes | `true`          | Automatically repair ownership of the app data folder (`/data`) at startup. Set to `false` only if your platform manages bind-mount ownership externally.               |
| `BOOK_DOCK_PATH`     | string  | No       | `/media/bookorbit/dock` | Book Dock staging folder: uploaded files land here first, BookOrbit extracts metadata and covers, optionally fetches provider metadata, and then you finalize them into a library. |
| `PUID`               | integer | Yes      | `0`               | **User ID** under which BookOrbit runs. Match this to a real user on your host if your books live on mounted storage owned by that user. Leave at `0` if unsure.        |
| `PGID`               | integer | Yes      | `0`               | **Group ID** under which BookOrbit runs. See `PUID` above.                                                                                                             |
| `JWT_SECRET`         | string  | Yes      | random value               | **App secrets** should be set to a unique long random secret                                                                                                |
| `TZ`                 | string  | No       | `Etc/UTC`         | Timezone used for displaying dates and times. Example: `Europe/Rome`.                                                                                                  |
| `env_vars`           | list    | No       | `[]`              | Additional environment variables to inject into the container. Each entry has a `key` (must match `^[A-Za-z0-9_-]+$`) and a `value`. Useful for advanced settings. |

> [!TIP]
> SMTP (email delivery to Kindle), OIDC / SSO and metadata providers are
> configured **inside the app** — no configuration options needed here. Log
> in as an administrator and go to **Settings → Email** or
> **Settings → OIDC / SSO**.

---

## 🔌 Ports

BookOrbit is **not** served through Home Assistant Ingress, so it does not
appear in the sidebar. Instead it lives on its own address — by default
port **3013**:

```
https://<your-home-assistant-ip>:3013
```

That's the same page that opens when you click **OPEN WEB UI**, so normally
you never have to type it. E-reader apps (Kobo, KOReader) connect to this
same address too.

> [!IMPORTANT]
> Remember to set `APP_URL` in the app **Configuration** tab to the exact
> address above (for example `https://192.168.1.10:3013`, or your public
> domain if you have one). BookOrbit uses it to build links — e.g. in emails
> and for Kobo sync — so if it's wrong those features won't work.

---

## 🔒 HTTPS / SSL

HTTPS is **enabled by default** (`ssl: true`).

The app ships with an NGINX front-end that terminates TLS. When `ssl: true`:

- **Self-signed certificate (default)** — if `certfile`/`keyfile` are not
  present in `/ssl/`, NGINX automatically generates a self-signed
  certificate. Your browser will warn you about an untrusted certificate the
  first time; this is expected and safe to accept locally.
- **Trusted certificate (recommended for remote access)** — install the
  [Let's Encrypt](https://github.com/home-assistant/addons/tree/main/letsencrypt)
  app (or any other ACME client) so that `fullchain.pem` and `privkey.pem`
  end up in `/ssl/`. The app will pick them up automatically on the next
  start.

> [!TIP]
> E-reader devices (Kobo, KOReader) validate certificates strictly. If you
> sync them over WAN, use a trusted certificate and set `APP_URL` to your
> public URL.

---

## 📱 Integrations (e-readers & sync)

All endpoints below are reachable through the same port as the Web UI
(`https://<your-home-assistant-ip>:3013`):

| Integration | How to connect |
| ----------- | -------------- |
| **OPDS catalog** | Enable it under **Settings → OPDS**, create an OPDS account there, then point any OPDS-compatible reader app (KOReader, Thorium, Moon+ Reader…) at `https://<home-assistant-ip>:3013/api/v1/opds`. The user needs the `opds_access` permission. |
| **Kobo sync** | Follow the [official Kobo guide](https://bookorbit.app/kobo). Set `APP_URL` to the URL your Kobo uses to reach the app. |
| **KOReader sync** | Follow the [official KOReader guide](https://bookorbit.app/koreader). Two-way progress sync; a dedicated plugin is also available. |
| **Email delivery** | Configure SMTP in **Settings → Email** to send books to Kindle or any email-based workflow. |

[All integrations](https://bookorbit.app/#sync-integrations) are documented in
the official BookOrbit guides (Hardcover sync, OIDC / SSO, authentication
proxies…).

---

## 🚨 Troubleshooting

- **Browser warns about an untrusted certificate** — expected with the
  default self-signed certificate; see *HTTPS / SSL* above.
- **A scan finishes but finds no books** — verify
  `LIBRARY_BROWSE_ROOT` doesn't exclude the folder you picked.
- **Uploads fail / Book Dock cannot finalize files** — the books folder must
  be **writable** by `PUID`:`PGID`. Match them to the user that owns the
  folder on the host (`ls -ldn /media/bookorbit` to check ownership).
- **Permission errors in the log (`EACCES`, `permission denied`)** — same as
  above: fix ownership or adjust `PUID`/`PGID`, then restart the app. Note
  that the app only auto-repairs permissions inside `/data`, never inside
  your books folder (it may be shared with other apps).
- **App fails to start** — check the app log in Home Assistant
  (*Apps → BookOrbit → Log*). On very low-memory systems the Node.js heap is
  sized down automatically; large libraries may benefit from more RAM.
- **Kobo device cannot reach the sync endpoint** — set `APP_URL` to the
  address the device actually uses (public domain or LAN IP) and use a
  trusted certificate for WAN sync.

---

## ❓ Support

- [Open an issue on GitHub](https://github.com/fabio-garavini/hassio-addons/issues)
- [BookOrbit documentation](https://bookorbit.app/what-is-bookorbit)
