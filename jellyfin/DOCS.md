# Jellyfin 📷

[![Source: Jellyfin](https://img.shields.io/badge/Source-Jellyfin-blue?logo=git)](https://jellyfin.org)

A user-friendly **Jellyfin Media Server** integration for Home Assistant, designed to simplify streaming your personal media library.

## Installation 💻

1. Install Jellyfin addon.
1. Start Jellyfin

---

## Configuration ⚙️

### Options

Configure via the **Configuration** tab in the add-on UI.  
Below are the available settings:

| Option                     | Type    | Default       | Description                                                                 |
|----------------------------|---------|---------------|-----------------------------------------------------------------------------|
| `Jellyfin URL` | string | (ha ip address)       | Custom URL for Jellyfin clients to discover the server (e.g., `https://jellyfin.example.com`). |

### Ports

| Port       | Protocol | Description                          | Required |
|------------|----------|--------------------------------------|-----------|
| **8096/tcp** | TCP      | HTTP port for web UI.                | No (if using Ingress) |
| **8920/tcp** | TCP      | HTTPS port for secure connections.   | No (if using Ingress) |
| **7359/udp** | UDP      | Client discovery (for local devices).| Yes       |
| **1900/udp** | UDP      | DLNA server (optional).              | No        |

### Data Paths

Home Assistant folders that are available in jellyfin

| HA Directory | Jellyfin path |
|--------------|---------------|
| media        | `/media`      |
| share        | `/share`      |

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
