# Home Assistant add-on: Paperless (all-in-one) 📄 by Fabio Garavini

**Paperless-ngx** is a powerful document management system that digitizes your physical documents into a searchable archive. Features include:

- **OCR processing** (Optical Character Recognition)
- Tagging & categorization
- Full-text search
- Email integration
- And more!

[Official Paperless-ngx Documentation](https://docs.paperless-ngx.com)

---

## 🛠 Installation Guide

Follow these steps to install Paperless-ngx in Home Assistant:

1. **Add the Repository** (if not already in your add-on store)
2. **Install the Add-on**:
   - Navigate to **Home Assistant Supervisor** → **Add-on Store**.
   - Search for "Paperless" and click **Install**.
3. **Configure Settings**:
   - Open the **Configuration** tab
   - Define a admin username and password.
4. **Start the Add-on**:
   - Click **Start** and wait for the addon to stop
   - **Start it again**
5. **Open Web UI**

---

## ⚙️ Configuration Options

| Parameter                     | Required | Default | Description                                                                 |
|-------------------------------|----------|---------|-----------------------------------------------------------------------------|
| `Time Zone`         | Yes      | -       | TZ database name (e.g., `America/New_York`). Use `timedatectl list-timezones` for options. |
| `Admin user`        | Yes      | -       | Admin username (e.g., `admin`).                                             |
| `Admin password`    | Yes      | -       | Strong password for admin account.                                          |
| `OCR language`      | No       | `eng`   | OCR language code (e.g., `deu` for German, `fra` for French).               |
| `Paperless URL`               | No       | -       | Full URL (e.g., `http://paperless.example.com:8000`). Required for reverse proxies. |
| `Secret key`        | No       | Auto-generated | Secret key for session security. **Change this if exposed to the internet!** Generate via `openssl rand -hex 32`. |
| `Consumer file polling`    | No      | -       | If paperless won't find documents added to your consume folder, it might not be able to automatically detect filesystem changes. In that case, specify a polling interval in seconds here, which will then cause paperless to periodically check your consumption directory for changes.                                          |

---

## 💾 NAS Storage Setup

To store documents on a NAS:

1. **Existing Users**:
   - Stop Paperless
   - Manually move contents from `/share/paperless` to your NAS.
1. **Mount Share Folder**:
   - Add a network storage via **Supervisor** → **System** → **Storage**.
   - Configure with:
     - **Name**: `paperless`
     - **Usage**: `Share`
     - Protocol: SMB/NFS (configure credentials as needed).
1. **Start the addon**

⚠️ **Warning**: Failure to set up NAS storage before initial startup will default to local storage. Changing later requires manual file migration.

---

## 🌐 Accessing Paperless

- **Default**: `http://[HOME_ASSISTANT_IP]:8000` (replace with your HA IP).
- **Custom Domain**: Set `PAPERLESS_URL` to your domain (e.g., `https://docs.example.com`).

---

## 🛡 Backup & Restore

- **Backup**: Regularly back up the `/share/paperless` directory.
- **Restore**: Replace the directory contents with your backup data.

---

## 🚨 Troubleshooting

- **Add-on Won’t Start**:
  - Verify all required config fields are filled.
  - Check logs in **Supervisor** → **Paperless** → **Logs**.
- **Login Problems**:
  - Reset credentials by stopping the add-on, updating `PAPERLESS_ADMIN_USER`/`PAPERLESS_ADMIN_PASSWORD`, and restarting.

---

## ❓ Support

For issues or feature requests:

- [GitHub Issues](https://github.com/fabio-garavini/hassio-addons/issues)
- [Home Assistant Community Forum](https://community.home-assistant.io)
