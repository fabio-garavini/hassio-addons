## Highlights

### 🔀 Workflows
- **New conditions for IF/SWITCH nodes** — tag (hierarchical, any/all/none), resolution (megapixels, short/long edge), and five library-cleanup conditions: file size, name/path, extension, face count, and time of day.
- **Remove Tag action** to complement Add Tag.
- **Workflow queries are now paginated** — the silent 10,000-asset cap is gone, so large libraries are fully scanned.

### 🗺️ Potential Albums
- **New Trips view** that groups consecutive away-from-home days into suggested trip albums, with city filtering and pre-filled album names.

### 📦 Ente integration
- Import your Ente library, including shared albums.

### 🔍 Smart Search fixes
- Date-based searches ("photos from June 2011") no longer fail — dates are now sent as the full ISO datetimes the Immich API expects (#330).
- Filter-only searches (a date range or a single `@person` with no search text) no longer error out — they now route to Immich's metadata search. Fixes #284.

### 🛠️ Other fixes
- Correct API key permissions for Immich v3 (`albumAsset.*`, `tag.asset`) and honor "all" keys.
- People page resets to page 1 when filters change.
- `.env` files are excluded from the Docker build context.
- Dependency upgrades and pruning of unused packages.

## What's Changed
* fix(people): reset page to 1 on filter change; drop stale onClick on sort menu by @dgilperez in https://github.com/immich-power-tools/immich-power-tools/pull/270
* fix: API key permissions for Immich v3 (albumAsset.*, tag.asset) and honor "all" in key validation by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/295
* feat: five library-cleanup conditions — file size, name/path, extension, face count, time of day by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/300
* feat: Resolution condition for workflow IF/SWITCH nodes (megapixels, short/long edge) by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/299
* feat: Tag condition for workflow IF/SWITCH nodes (hierarchical, any/all/none) by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/298
* feat: paginate workflow asset queries — remove the silent 10,000-asset cap by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/297
* feat: add support for Ente platform integration by @sai80082 in https://github.com/immich-power-tools/immich-power-tools/pull/275
* feat: Remove Tag workflow action to complement Add Tag by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/301
* feat(potential-albums): add Trips view that groups consecutive away days by @dgilperez in https://github.com/immich-power-tools/immich-power-tools/pull/268
* fix: exclude .env files from the Docker build context by @jonvdveen in https://github.com/immich-power-tools/immich-power-tools/pull/304
* fix(ai): send full ISO datetimes to Immich search API by @papajade55-debug in https://github.com/immich-power-tools/immich-power-tools/pull/330
* fix: route filter-only AI searches to metadata search by @sai80082 in a3357d6

## New Contributors
* @jonvdveen made their first contribution in https://github.com/immich-power-tools/immich-power-tools/pull/295
* @papajade55-debug made their first contribution in https://github.com/immich-power-tools/immich-power-tools/pull/330

**Full Changelog**: https://github.com/immich-power-tools/immich-power-tools/compare/v0.22.0...v0.23.0
