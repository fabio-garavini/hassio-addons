# 📦 ImmichFrame Release v1.0.37.0 – July 17, 2026

  <!-- Release notes generated using configuration in .github/release.yml at v1.0.37.0 -->

  This release rolls back the memories timezone workaround now that Immich fixes memory date handling upstream.

  ---

  ## What's Changed

  ### ⚡ Fixes

  #### 🐛 Revert memories timezone fix
  **PR [#678](https://github.com/immichFrame/ImmichFrame/pull/678) by @JW-CH**

  ImmichFrame previously appended a timezone offset to the Immich memories `for` query parameter ([#660](https://github.com/immichFrame/ImmichFrame/pull/660)) to work around inconsistent date handling. Immich has since fixed memory search date validation upstream
  ([immich-app/immich#29907](https://github.com/immich-app/immich/pull/29907)), so that workaround is no longer needed and now conflicts with the server-side behavior. This release reverts it, restoring plain calendar-date filtering so your memories show up correctly again. The bundled Immich
  OpenAPI spec was refreshed as part of the revert.

  ---

  **Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.36.0...v1.0.37.0