# 📦 ImmichFrame Release v1.0.34.0 – July 2, 2026

  <!-- Release notes generated using configuration in .github/release.yml at v1.0.34.0 -->

  This release brings ImmichFrame up to date with **Immich v3**, adds a new per-asset faces API
  for richer previews, and fixes long-standing video stall and slideshow transition freezes.

  ---

  ## What's Changed

  ### ⚠️  Breaking Changes

  #### 💥 Update to Immich v3
  **PR [#654](https://github.com/immichFrame/ImmichFrame/pull/654) by @JW-CH**

  ImmichFrame now targets the **Immich v3 API**. This is a major migration that updates the
  OpenAPI spec, standardizes asset identifiers to GUIDs across all selection, filtering, and
  paging flows, and switches album loading (including excluded albums) to paginated metadata
  searches so large libraries are handled reliably. It also adds a new **Asset Faces** endpoint
  that fetches per-asset face details for richer home-page previews, with faces now loaded
  only on zoom/pan and skipped for videos. Make sure your Immich server is running **v3 or 
  newer** before upgrading.

  ---

  ### ⚡ Fixes

  #### 🐛 Asset transition & video stall freezes
  **PR [#637](https://github.com/immichFrame/ImmichFrame/pull/637) by @3rob3**

  Fixes cases where the slideshow could lock up mid-transition or freeze on a stalled video
  (closes [#601](https://github.com/immichFrame/ImmichFrame/issues/601)). Auto-skip now detects
  stalled videos and asset load errors and escalates with throttling, a watchdog recovers from
  hangs, and transition locking plus resource teardown were hardened to avoid stuck states. A
  new asset-error callback lets the frame react cleanly to media load/playback failures.

  ---

  #### 🐛 Memories date
  **PR [#632](https://github.com/immichFrame/ImmichFrame/pull/632) by @3rob3**

  Corrects the date handling for the Memories feature so memory-based assets are selected and
  displayed against the right day.

  ---

  ### 🔨 Maintenance

  #### 🔧 Update NPM packages
  **PR [#658](https://github.com/immichFrame/ImmichFrame/pull/658) by @JW-CH**

  Routine dependency bump for the frontend and docs npm packages to keep the build current and
  pick up upstream security and bug fixes.

  ---

  **Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.33.0...v1.0.34.0