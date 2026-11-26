# ![Logo](https://github.com/varun-raj/immich-power-tools/raw/main/public/favicon-32x32.png) Immich Power Tools

[![Source: Immich Power Tools](https://img.shields.io/badge/Source-Immich%20Power%20Tools-blue?logo=git)](https://github.com/varun-raj/immich-power-tools)

A unofficial immich client to provide better tools to organize and manage your immich account. Building it to speed up your workflows in Immich to organize your people and albums.

---

## 🛠 Installation Guide

1. **Install the Add-on**:
   - Navigate to **Home Assistant Supervisor** → **Add-on Store**
   - Search for "Immich Power Tools" → Click **Install**
1. **Initial Setup**:
   - Start the add-on
   - Click **OPEN WEB UI**

---

## ⚙️ Configuration Options

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `IMMICH_URL`    | Yes       | -     | Immich URL |
| `EXTERNAL_IMMICH_URL`    | No       | -     | Immich External URL |
| `IMMICH_API_KEY`    | No       | -     | Immich API key [How to obtain the API Key](https://immich.app/docs/features/command-line-interface/#obtain-the-api-key) |
| `JWT_SECRET`    | Yes       | -     | JWT Secret for authentication |
| `IMMICH_SHARE_LINK_KEY`    | No       | -     | Share link key for Immich |
| `POWER_TOOLS_ENDPOINT_URL`    | No       | -     | SURL of the Power Tools endpoint (Used for share links) |
| `GOOGLE_MAPS_API_KEY`    | No       | -     | Google Maps API Key for heatmap |
| `GEMINI_API_KEY`    | No       | -     | Gemini API Key for parsing search query in "Find" |

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
