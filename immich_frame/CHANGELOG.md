# 📦 ImmichFrame Release v1.0.39.0 – October 7, 2026

<!-- Release notes generated using configuration in .github/release.yml at v1.0.39.0 -->

ImmichFrame now asks Immich for assets through the search API, which needs Immich v3.2.0 or newer, and no longer stalls when a large album is excluded. This release also includes a security fix — please upgrade.

---

## What's Changed

### ⚠️ Breaking Changes

#### 💥 Search API, minimum Immich v3.2.0
**PR [#712](https://github.com/immichFrame/ImmichFrame/pull/712) by @JW-CH**

Favorites, albums, people and tags are now one Immich search instead of separate pools. A photo is included when it matches any of those sources, and date, archive, video and excluded-album filters are applied by Immich. Update your Immich server to v3.2.0 or newer before upgrading the frame. An older server is logged as unsupported and the slideshow will not load.

`Rating` is no longer an exact star match. A value of `3` shows images rated 3 or higher. Nothing else in your config has to change. An account with no favorites, albums, people or tags still shows the whole library, and memories-only accounts still skip that search. If the only configured source is a tag name Immich does not know, that account returns no assets.

```yaml
Rating: 3 # int, minimum stars
```

---

### ⚡ Fixes

#### 🔒 Security fix
**Commit [`8c73e4f`](https://github.com/immichFrame/ImmichFrame/commit/8c73e4f) by @JW-CH**

This release includes a security fix. Please upgrade. Details will follow in a separate notice.

---

#### 🐛 Large excluded albums no longer stall the frame
**PR [#706](https://github.com/immichFrame/ImmichFrame/pull/706) by @sheltonial**

Excluding an album used to compare every slideshow asset against every excluded asset, over and over. On a large library that never finished, so `/api/Asset` hung and the frame looked empty. Exclusion is now a single lookup, and with the new search API Immich applies `ExcludedAlbums` itself instead of the frame downloading those assets just to drop them.


<!-- Release notes generated using configuration in .github/release.yml at v1.0.39.0 -->

## What's Changed
### ⚠️ Breaking Changes
* Feat: Use new search api by @JW-CH in https://github.com/immichFrame/ImmichFrame/pull/712
### 🚀 Other changes
* Fix: WhereExcludes is O(n*m) and stalls the asset pool for large excluded albums by @sheltonial in https://github.com/immichFrame/ImmichFrame/pull/706

## New Contributors
* @sheltonial made their first contribution in https://github.com/immichFrame/ImmichFrame/pull/706

**Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.38.0...v1.0.39.0