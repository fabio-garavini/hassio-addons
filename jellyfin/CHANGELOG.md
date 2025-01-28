# Changelog

## 10.10.5

We are pleased to announce the latest stable release of Jellyfin, version 10.10.5!

This minor release brings several bugfixes to improve your Jellyfin experience.

As always, please ensure you stop your Jellyfin server and take a full backup before upgrading!

You can find more details about and discuss this release [on our forums](https://forum.jellyfin.org/t-new-jellyfin-server-web-release-10-10-5).

### 📈 General Changes

- Add check to prevent downgrade from future EFCore refactor [PR #13103], by @JPVenson
- Open files with FileShare.Read for BlurHash calculations [PR #13425], by @Bond-009
- Don't select audio stream and codec explicitly for copy when bitrate exceeds limit [PR #13423], by @gnattu
- Fix parallel use of not thread-safe SubtitleFormat instance [PR #13384], by @alltilla
- Use WriteThrough for ImageSaver [PR #13411], by @gnattu
- Catch IOExceptions for GetFileSystemMetadata [PR #13390], by @gnattu
- Fix rating levels [PR #13388], by @Shadowghost
- Fix: handling of elements in NfoParser [PR #13092], by @TheMelmacian
- Fix interface selection [PR #13382], by @Shadowghost
