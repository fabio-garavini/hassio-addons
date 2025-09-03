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
| `User ID` | integer | Yes | User ID for the Gitea process (≥1000) | `1000` |
| `Group ID` | integer | Yes | Group ID for the Gitea process (≥1000) | `1000` |
| `TZ` | string | No | Timezone (e.g., "America/New_York") | System default |
| `Disable registration` | boolean | No | Disable new user registration | `false` |
| `Git LFS support` | boolean | No | Enable Git LFS support | `true` |
| `Disable SSH` | boolean | No | Disable built-in SSH server | `false` |
| `Global secret key` | string | No | Secret key for secure operations (recommended to change) | Randomly generated |

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

- Set `Disable registration` to `true` after initial setup
- Use a strong custom `Global secret key`
- Disable SSH (`Disable SSH: true`) if not needed

### Troubleshooting Permission Issues

1. Check addon logs for permission errors
1. Verify UID/GID exists on host system:

    ```bash
    id 1000  # Replace with your configured UID
    ```

1. Ensure storage directory has correct ownership
