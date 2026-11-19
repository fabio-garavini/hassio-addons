# Home Assistant app: n8n (all in one) ✨ by Fabio Garavini

**n8n** is a workflow automation platform that gives technical teams the flexibility of code with the speed of no-code. With 400+ integrations, native AI capabilities, and a fair-code license, n8n lets you build powerful automations while maintaining full control over your data and deployments.

## 🧩 All-in-One Components

This monolithic package includes:

- **n8n**: workflow automations
- **Redis**: Real-time notifications and caching

[Official n8n Documentation](https://docs.n8n.io/)

---

## 🛠 Installation Guide

1. **Install the Add-on**:
   - Navigate to **Home Assistant Supervisor** → **Add-on Store**
   - Search for "n8n" → Click **Install**
1. **Initial Setup**:
   - Start the add-on
   - Click **OPEN WEB UI** and follow first-run wizard
1. **Configure Libraries** (see Storage section below)

## ⬆️ Upgrade Notes

### Deprecated nodes (n8n 2.43.3 and later)

The **Function**, **Function Item**, and **LangChain Code** nodes are deprecated. By default, n8n blocks adding or editing these nodes and may block imports or sub-workflows that contain them. Existing, unchanged workflows generally continue to run. Migrate affected workflows to supported nodes before making changes.

If you need more time to migrate, you can temporarily disable this enforcement in the add-on configuration:

```yaml
env_vars:
  - key: N8N_DEPRECATED_NODES_BLOCK
    value: "false"
```

This is only a temporary opt-out; remove it after migrating your workflows.

### Other behavior changes

- **n8n 2.43.0:** Workflow publishing validates required inputs more strictly.
- **n8n 2.45.0:** The durable scheduler is enabled. `N8N_SCHEDULER_MIN_INTERVAL` was removed and no longer has any effect.
- **n8n 2.46.0:** Granular credential sharing is always enabled.

## 📄 Redis

Redis is running on `localhost` or `127.0.0.1` with port `6379`