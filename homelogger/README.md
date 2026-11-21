# HomeLogger 🏠

[![Source: HomeLogger](https://img.shields.io/badge/Source-HomeLogger-blue?logo=git)](https://github.com/FrancisLaboratories/homelogger)

![logo](https://github.com/FrancisLaboratories/homelogger/raw/main/client/public/logoname.png)

**HomeLogger** is a simple home maintenance and asset tracker for homeowners. It centralizes appliances, repairs, and maintenance tasks so you can record work, receipts, and schedules for things around your home.

**⚠️ HomeLogger is still in version 0.x.x and is subject to major changes from version to version. Expect bugs!**

## Features

- 🧰 Track appliances, repairs and maintenance history
- 📎 Attach files (receipts/photos) to records
- 🗂️ Organize by appliance or by space (room, kitchen, garden, ...)
- ✅ Manage recurring and one-off tasks with due dates and estimated costs
- 💰 Currency-aware cost formatting
- 🗄️ SQLite database stored in the add-on config folder
- 💾 One-click full backup and restore from the app settings page

## Installation

To install the HomeLogger add-on, follow these steps:

1. Open the Home Assistant UI and navigate to the Apps page
1. Click the "HomeLogger" app
1. Click the "Install" button
1. Click the "Open Web UI" button

## Ports

The HomeLogger add-on exposes the following ports:

- `8080/tcp`: The web UI port

## Configuration

| Option | Default | Description |
| --- | --- | --- |
| `CURRENCY` | `USD` | ISO 4217 currency code used to display amounts (e.g. `USD`, `EUR`, `GBP`). Invalid values prevent the app from starting |
| `DEMO_MODE` | `false` | Load sample data and reset the database every 10 minutes to explore the app. Warning: demo data replaces existing records |
| `ssl` | `true` | Enable HTTPS. Uses `certfile` and `keyfile` from the `/ssl` folder if present, otherwise falls back to a self-signed certificate |

Data (database and uploaded files) is stored in the add-on config folder and is included in Home Assistant backups.

<sub>[📖 Upstream documentation](https://github.com/FrancisLaboratories/homelogger#readme)</sub>

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
