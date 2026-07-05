# Home Assistant add-on: FUTO Notes  by Fabio Garavini

**FUTO Notes** is an end-to-end encrypted notes app. This add-on runs the self-hosted **sync server**: it stores opaque encrypted blobs of your notes and never sees plaintext content.

- Upstream: [gitlab.futo.org/futo-notes/futo-notes-server](https://gitlab.futo.org/futo-notes/futo-notes-server)
- All-in-one: bundles the FUTO Notes server **and** its own PostgreSQL 16

---

## 🛠 Installation

1. **Add the repository** (if not already added) from the Add-on Store.
2. **Install** this add-on.
3. Open **Configuration** and set:
   - **FUTO Notes Password** — the admin password you'll also enter in the
     FUTO Notes app.
   - **Postgres Password** — any strong random string (used internally for
     the bundled DB; recommend `openssl rand -hex 32`).
4. **Start** the add-on.
5. In the FUTO Notes app, go to **Settings → Sync** and enter:
   - **Server URL**: `http://<HOME_ASSISTANT_IP>:3005`
   - **Password**: the same admin password from step 3.

---

## ⚙️ Configuration

| Parameter | Required | Default | Description |
|---|---|---|---|
| `FUTO_NOTES_PASSWORD` | Yes | — | Admin password. Hashed at startup with scrypt via the server's own `hash` helper; the plaintext is never written to disk. Also the password you enter in the FUTO Notes app. |
| `LOG_LEVEL` | No | `info` | Server log verbosity: `debug` \| `info` \| `warn` \| `error` |
| `TRUST_PROXY` | No | `true` | Trust `X-Forwarded-For` for the login rate-limiter. Leave on when fronted by Home Assistant or another reverse proxy. |
| `AUTH_RATE_LIMIT` | No | `10` | Max login attempts per client per window. `0` disables rate limiting. |
| `AUTH_RATE_LIMIT_WINDOW_MS` | No | `60000` | Rate-limit window in milliseconds. |
| `MAX_BLOB_BYTES` | No | `104857600` | Max note blob upload size, in bytes (default 100 MiB). |
| `BLOB_RETENTION_DAYS` | No | unset | Optional blob GC retention window in days. |
| `ssl` / `certfile` / `keyfile` | No | `true` / `fullchain.pem` / `privkey.pem` | Cosmetic SSL toggle for the add-on web UI link; FUTO Notes itself speaks HTTP (use a reverse proxy for HTTPS). |

---

## 🌐 Accessing the server

- **Default**: `http://<HOME_ASSISTANT_IP>:3005`
- Container port `3000` ↔ host port `3005`.

### HTTPS

FUTO Notes speaks HTTP only. For remote access, place a reverse proxy in front that terminates TLS — e.g. the **Cloudflared** add-on, Caddy, or your existing nginx. With `TRUST_PROXY: true` (the default), the login rate-limiter keys on the real client IP from `X-Forwarded-For`.

---

## 💾 Where your data lives

- `/data/blobs/` — encrypted note content (opaque to the server)
- `/data/postgres/` — Postgres data (sync metadata)

Both are inside the add-on data folder and are included in **cold backups**.

---

## 🛡 Backup & Restore

- **Backup**: take a Home Assistant backup of the add-on.
- **Restore**: restore from backup and re-set `FUTO_NOTES_PASSWORD` (the
  password is *not* stored on disk; the hash stored by postgres +
  `/data/postgres` is what identifies the admin).

---

## 🚨 Troubleshooting

- **Won't start**: check **Supervisor → FUTO Notes → Logs**. Most common cause:
  `FUTO_NOTES_PASSWORD` or `POSTGRES_PASSWORD` is empty.
- **Can't log in from the app**: confirm the **Server URL** is reachable from
  the device running FUTO Notes and that the password matches.
- **Login returns `429`**: built-in rate-limit (10/min) tripped. Tune or
  disable with `AUTH_RATE_LIMIT`.

---

## ❓ Support

- [GitHub Issues](https://github.com/fabio-garavini/hassio-addons/issues)
- [Home Assistant Community Forum](https://community.home-assistant.io)
