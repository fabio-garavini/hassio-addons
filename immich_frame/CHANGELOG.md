# 📦 ImmichFrame Release v1.0.36.0 – July 14, 2026

  <!-- Release notes generated using configuration in .github/release.yml at v1.0.36.0 -->

  This release adds a startup guard that fails fast when ImmichFrame is pointed at an incompatible Immich server, logs each server's version, and cleans up how settings are handled internally.

  ---

  ## What's Changed

  ### ✨ New Features

  #### 🚦 Startup version check enforces Immich v3
  **PR [#676](https://github.com/immichFrame/ImmichFrame/pull/676) by @JW-CH**

  ImmichFrame already targets the Immich **v3** API — this release now **enforces** it at startup. On boot, it checks the version of every configured Immich server and refuses to start if any server is older than v3, is unreachable, or its version can't be determined. Previously, an incompatible (older) server would let ImmichFrame start but then fail later with a cryptic
  deserialization error — for example, Immich changed an asset's `duration` from a string like `"0:00:00.00000"` to integer milliseconds, which broke image loading. Now you get a clear critical log message naming the affected server, and the container stops instead of silently misbehaving.

  **What you need to do:** Make sure your Immich server(s) are on **v3.0 or newer**. If ImmichFrame won't start, check the logs for the offending server.

  > 💡 Tip: In Docker, pair this with a restart policy (e.g. `restart: unless-stopped`) so ImmichFrame retries automatically if an Immich server is still coming up during boot.

  The bundled Immich OpenAPI spec was also bumped to **3.0.2** as part of this change.

  ---

  #### 📋 Immich server version logging
  **PR [#673](https://github.com/immichFrame/ImmichFrame/pull/673) by @JW-CH**

  ImmichFrame now logs the version of each configured Immich server at startup, so you can confirm compatibility at a glance. Previous startup log noise was trimmed at the same time, making the logs easier to read.

  ---

  ### 🔨 Maintenance

  #### 🔧 Simplified settings handling
  **PR [#667](https://github.com/immichFrame/ImmichFrame/pull/667) by @JW-CH**

  Settings are now split into dedicated **client** and **server** interfaces. As a result, the `/api/Config` endpoint is structurally limited to client-safe values only — server-only secrets such as API keys, the webhook URL, the authentication secret, and web-calendar URLs can no longer reach the client. This change also makes the per-account asset tracker (BloomFilter) thread-safe and reworks how the account-selection strategy is constructed for more reliable multi-account setups.

  ---

  **Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.35.0...v1.0.36.0