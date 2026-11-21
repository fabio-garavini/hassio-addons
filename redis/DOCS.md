# Redis DB in-memory database

[![Source: Redis DB](https://img.shields.io/badge/Source-Redis%20DB-blue?logo=git)](https://redis.io)

## External access

To access the Redis database externally you need to open the `6379` port

## Redis Insight

To access Redis Insight you need to open the `8001` port

## Configuration

### `redis_config` (UI)

A list of raw `redis.conf` lines, entered from the add-on Configuration tab.
Each entry is one directive, appended verbatim to `/etc/redis.conf` on startup.
Any Redis directive works - nothing is curated or validated by the add-on.

```yaml
redis_config:
  - maxmemory 1gb
  - maxmemory-policy allkeys-lru
  - save 900 1 300 10 60 10000
  - appendonly yes
  - requirepass changeme
```

### `/config/redis.conf` (file, optional)

For larger configs, drop a `redis.conf` into the add-on's own config folder
instead of typing many UI lines. With `map: app_config` that folder is:

- inside the container: `/config/redis.conf`
- on the Home Assistant host: `/app_configs/<slug>/redis.conf` (browse
  `/app_configs/` with the File Editor, Studio Code Server or Samba add-on;
  the `<slug>` folder is prefixed, e.g. `xxxxxxxx_redis`)

The same folder also holds the Redis data files (`dump.rdb`), since the data
dir is `/config`.

### Precedence

Applied low to high, so later entries override earlier ones:

image defaults (`/redis-stack.conf`) -> `/config/redis.conf` -> `redis_config` UI list

### Password / Redis Exporter

`requirepass` (set via the UI list or the file) is picked up automatically so
Redis Exporter can authenticate. Keep the password simple and unquoted - quoted
or escaped passwords may not be parsed correctly for the Exporter (Redis itself
still works; only its metrics scrape breaks).

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
