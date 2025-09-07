# Home Assistant add-on: Jellyfin 📷 by Fabio Garavini

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
