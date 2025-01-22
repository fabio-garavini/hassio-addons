# Home Assistant add-on: Immich (all in one) 📷 by Fabio Garavini

**Immich** is a high-performance self-hosted solution for managing personal photos and videos. This all-in-one addon bundles essential services for immediate use.

> [!WARNING]  
> **Project Status**: Immich is under active development.  
> Do not use as your sole photo/video storage solution!  
> *Official developer advisory*

## 🧩 All-in-One Components

This monolithic package includes:

- **Immich Core**: Photo/video management interface
- **Machine Learning**: Object/scene recognition & facial recognition
- **PostgreSQL with pgvecto.rs**: Vector-optimized database
- **Redis**: Real-time notifications and caching

[Official Immich Documentation](https://immich.app/docs)

---

## 🛠 Installation Guide

1. **Add Repository** (if not in your add-on store)
2. **Install the Add-on**:
   - Navigate to **Home Assistant Supervisor** → **Add-on Store**
   - Search for "Immich All-in-One" → Click **Install**
3. **Initial Setup**:
   - Start the add-on
   - Click **OPEN WEB UI** and follow first-run wizard
4. **Configure Libraries** (see Storage section below)

---

## ⚙️ Configuration Options

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `PUID`    | No       | `0`     | User ID for file permissions |
| `PGID`    | No       | `0`     | Group ID for file permissions |
| `TZ`      | Yes      | -       | Timezone (e.g., `Europe/London`) |

---

## 📚 Storage Management

### External Libraries

- Can be used as external storage any path mounted under:
  - `/media`
  - `/share`

### Immich library

Everything inside the main Immich library will be stored under `/media/immich`  
It's not recommended to move or modify the contents inside this folder manually

---

## 💾 NAS Storage Setup

To store documents on a NAS:

1. **Existing Users**:
   - Stop Immich
   - Manually move contents from `/media/immich` to your NAS.
1. **Mount Share Folder**:
   - Add a network storage via **Supervisor** → **System** → **Storage**.
   - Configure with:
     - **Name**: `immich`
     - **Usage**: `Media`
     - Protocol: SMB/NFS (configure credentials as needed).
1. **Start the addon**

⚠️ **Warning**: Failure to set up NAS storage before initial startup will default to local storage. Changing later requires manual file migration.

---

## 🚨 Troubleshooting

### Common Issues

- **Upload Errors:**

  - Confirm storage permissions match PUID/PGID
  - Check free space on target storage

---

## ❓ Support

For assistance:

- [GitHub Issues](https://github.com/fabio-garavini/hassio-addons/issues)
- [Home Assistant Community Forum](https://community.home-assistant.io)
