# Home Assistant app: HomeLogger 🏠 by Fabio Garavini

[![](https://img.shields.io/static/v1?label=Support+me&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/fabio-garavini)

**HomeLogger** is a simple home maintenance and asset tracker for homeowners. It centralizes appliances, repairs, and maintenance tasks so you can record work, receipts, and schedules for things around your home.

![logo](https://github.com/FrancisLaboratories/homelogger/raw/main/client/public/logoname.png)

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
