# Home Assistant add-on: ![Logo](https://github.com/varun-raj/immich-power-tools/raw/main/public/favicon-32x32.png) Immich Power Tools by Fabio Garavini

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
| `TZ`      | Yes      | `Etc/UTC`       | Timezone (e.g., `Europe/London`) |
