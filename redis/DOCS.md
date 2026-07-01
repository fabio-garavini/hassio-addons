# Home Assistant add-on: Redis DB in-memory database

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
instead of typing many UI lines. With `map: addon_config` that folder is:

- inside the container: `/config/redis.conf`
- on the Home Assistant host: `/addon_configs/<slug>/redis.conf` (browse
  `/addon_configs/` with the File Editor, Studio Code Server or Samba add-on;
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
