# Paperless (all-in-one) 📄

[![Source: Paperless](https://img.shields.io/badge/Source-Paperless-blue?logo=git)](https://docs.paperless-ngx.com)

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
4. **Start** the Add-on
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
| `Allowed hosts`               | No       | `[]`    | Additional hostnames or IP addresses allowed to access Paperless. The app and `Paperless URL` hostnames are allowed automatically. |
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
- **Additional hostnames or IP addresses**: Starting with Paperless 3.5.0, setting `PAPERLESS_URL` restricts requests to that URL's hostname and `localhost`. If you also access Paperless through a Home Assistant hostname, IP address, or another reverse-proxy hostname, add each one as a separate `Allowed hosts` entry:

  ```yaml
  PAPERLESS_ALLOWED_HOSTS:
    - homeassistant.local
    - 192.168.1.10
    - paperless.example.com
  ```

  Enter hostnames or IP addresses without URL schemes or ports. The add-on automatically allows its own app hostname, while Paperless automatically allows the hostname from `PAPERLESS_URL` and `localhost`; you do not need to add those entries yourself.

  If neither `PAPERLESS_URL` nor any allowed hosts are configured, Paperless keeps its default of accepting all hosts. Adding `*` as the only allowed-host entry also enables unrestricted access, but this is not recommended for internet-exposed installations.

---

## ⬆️ Upgrading from 3.4.x

- Create a Home Assistant backup before upgrading.
- Paperless applies its database migrations automatically during startup. Existing workflows are not rewritten, and existing document notes remain plain text unless you change their format.
- Review the allowed-hosts behavior above if `PAPERLESS_URL` is configured.
- If you customized `PAPERLESS_OCR_USER_ARGS`, remove the Paperless-managed arguments `input_file_or_options`, `output_file`, and `sidecar`; these are now rejected or ignored.
- Expired sessions are now cleared automatically every day at 03:00. Use `PAPERLESS_SESSION_CLEANUP_TASK_CRON` through `env_vars` to customize the schedule.
- OIDC deployments using `PAPERLESS_SOCIAL_ACCOUNT_MFA_TRUSTED_AMR` should review their trusted values; the default now correctly resolves to `mfa`.
- AI users do not need to rebuild or re-embed their index. To apply the new on-disk layout and performance improvements to an existing index, optionally run `document_llmindex compact` inside the add-on container after the upgrade.

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

<!-- APP_AUTHOR_START -->
<hr>
<table>
  <tr>
    <td width="120" align="center" valign="bottom">
      <a href="https://github.com/fabio-garavini">
        <img src="https://www.gravatar.com/avatar/0237c9a30faa34297c155c9f794fe47e?s=112" alt="Fabio Garavini" width="112" height="112" style="border-radius: 50%;">
      </a>
    </td>
    <td valign="middle">
      <h3>App made by Fabio Garavini</h3>
      <p><sub>Help me create free and open-source Home Assistant apps for everyone!</sub></p>
      <a href="https://github.com/sponsors/fabio-garavini">
        <img src="https://img.shields.io/badge/support%20my%20work-GitHub%20Sponsors-fe8e86?style=for-the-badge&logo=github" alt="support my work">
      </a>
    </td>
  </tr>
</table>
<!-- APP_AUTHOR_END -->
