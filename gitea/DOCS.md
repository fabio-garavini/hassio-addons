# Home Assistant add-on: Gitea 🍵 by Fabio Garavini

[Gitea](https://about.gitea.com) is a lightweight Git service integrated with Home Assistant for self-hosted repository management.

---

## ✨ Features

- **User Management**: Custom UID/GID configuration
- **Time Zone Support**: Optional timezone configuration
- **Lightweight**: Minimal configuration required
- **Self-contained**: No external database dependencies

---

## ⚙ Configuration

### Options Schema

| Option | Type | Required | Description | Default |
|--------|------|----------|-------------|---------|
| `USER_UID` | integer | Yes | User ID for the Gitea process (≥1000) | `1000` |
| `USER_GID` | integer | Yes | Group ID for the Gitea process (≥1000) | `1000` |
| `TZ` | string | No | Timezone (e.g., "America/New_York") | System default |
| `DISABLE_REGISTRATION` | boolean | No | Disable new user registration | `false` |
| `LFS_START_SERVER` | boolean | No | Enable Git LFS support | `true` |
| `DISABLE_SSH` | boolean | No | Disable built-in SSH server | `false` |
| `SECRET_KEY` | string | No | Secret key for secure operations (recommended to change) | Randomly generated |

### Example Configuration

```yaml
USER_UID: 1000
USER_GID: 1000
TZ: "Europe/Berlin"
DISABLE_REGISTRATION: false
LFS_START_SERVER: true
DISABLE_SSH: false
SECRET_KEY: "your-strong-secret-key-here"
```

---

## 🛠 Installation & Setup

### Add Repository

1. Go to Settings > Add-ons > Add-on Store
1. Add repository URL:

    [![Open your Home Assistant instance and show the add add-on repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

### Install Addon

1. Search for `Gitea` in the Add-on Store
1. Click Install

### Configure

1. (Optional) Set UID/GID matching your system user
1. Configure timezone if needed
1. (Recommended) Set a custom SECRET_KEY for enhanced security
1. Start the addon

## 🌐 Access

- **Web Interface**: http://[HOME_ASSISTANT_IP]:3080
- **SSH Access**: ssh://[HOME_ASSISTANT_IP]:222 (if enabled)
- First Run:
  1. Create a new user account

## 🔧 Permissions & Security

### Why UID/GID Matter

- Ensures proper file ownership for:

  - Repository data
  - Configuration files
  - Log files

### Security Recommendations

- Set `DISABLE_REGISTRATION` to `true` after initial setup
- Use a strong custom `SECRET_KEY`
- Disable SSH (`DISABLE_SSH: true`) if not needed

### Troubleshooting Permission Issues

1. Check addon logs for permission errors
1. Verify UID/GID exists on host system:

    ```bash
    id 1000  # Replace with your configured UID
    ```

1. Ensure storage directory has correct ownership
