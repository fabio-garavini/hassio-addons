# ⚠️ Breaking Change: Immich V3 support

**v0.22.0 and above only support Immich V3.** Upgrade your Immich server to v3.0 before updating.

## Immich V3 migration

The whole app has been migrated to Immich's V3 API and DB schema. This is a clean cutover — v2.x compatibility has been dropped.

**Highlights of what changed under the hood:**

- **Albums** — album ownership moved from the `album` table to `album_user` rows; owner lookups now resolve via the `owner` role. Affects album list, merge, info, and people views.
- **Assets** — `duration` is now an integer (milliseconds); the removed `deviceId` / `deviceAssetId` columns are no longer read anywhere.
- **Import dedup** — the removed `/api/assets/exist` endpoint is replaced with checksum-based `/api/assets/bulk-upload-check`. Shared-link imports now dedup by checksum before download.
- **Album enumeration** — shared album assets are now enumerated via the V3 timeline-bucket endpoints (`AlbumResponseDto` no longer embeds assets).
- **Uploads** — the asset upload form drops the removed fields; archived assets now use `visibility: "archive"` instead of `isArchived`.

## Fixes

**Asset grid selection visual**
Non-selected assets are now dimmed while you're in selection mode, making the current selection much easier to see.

**Robust null/NaN handling for V3 data**
Album thumbnails with no cover now render a clean placeholder instead of a broken image, and byte/duration formatting no longer shows `NaN` for empty albums.

**Video duration overlays**
Duration overlays are fixed for V3's millisecond-integer duration format (legacy `HH:MM:SS` strings still parse).

---

## What's Changed
* fix(AssetGrid): dim non-selected siblings during selection mode by @dgilperez in https://github.com/immich-power-tools/immich-power-tools/pull/269
* Prerelease by @sai80082 in https://github.com/immich-power-tools/immich-power-tools/pull/293

**Full Changelog**: https://github.com/immich-power-tools/immich-power-tools/compare/v0.21.4...v0.22.0
