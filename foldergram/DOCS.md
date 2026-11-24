# Foldergram 🖼️

[![Source: Foldergram](https://img.shields.io/badge/Source-Foldergram-blue?logo=git)](https://github.com/foldergram/foldergram)

Foldergram indexes photo and video folders into an Instagram-inspired gallery. Originals remain in their existing folders; the SQLite database, thumbnails, previews, and other app state are stored persistently in `/config/foldergram`.

## Installation

1. Install and start the app.
2. Create an album folder such as `/media/foldergram/example-album` using your preferred Home Assistant file access method.
3. Add photos or videos directly inside that album folder.
4. Open the Web UI through Home Assistant Ingress and configure an administrator password in **Settings**. You can also enable **Show in sidebar**.
5. Run a scan from **Settings → Scan & Library** after adding or changing media.

Files placed directly in the primary gallery root are ignored. Each non-hidden folder containing supported media becomes an App Folder. Nested folders are indexed separately.

The primary gallery defaults to `/media/foldergram`. You can change **Primary Gallery Path** to another accessible absolute path under `/media` or `/share`.

Ingress does not require any network configuration. For optional direct access, map port `8080` in the app's network settings. HTTPS is enabled by default for direct access; set `ssl` to `false` for HTTP. The `ssl` option does not affect Ingress.

## Additional galleries

Open **Settings → Sources → Add local folder** to index another absolute container path, for example `/share/photos` or `/media/external/photos`. Home Assistant's `/media` and `/share` folders are available to the app. Adding a source does not copy or move its original files.

A `.nofoldergram` file inside a folder excludes that folder and all descendants. Folder names or relative paths can also be added to **Excluded Folders**.

## Configuration

- **Derivative Generation:** `eager` creates thumbnails and previews during scans; `lazy` creates missing derivatives on first request.
- **Image Detail Source:** `preview` uses generated previews; `original` streams original images on detail pages.
- **Video Delivery Mode:** `streaming` plays compatible originals or converts short sections on demand for newly imported local videos; `previews` saves full MP4 previews when needed. Changing this option does not switch existing videos automatically. Use **Settings → Scan & Library** in Foldergram to switch existing local videos.
- **Streaming Cache Path:** optional path for temporary streaming segments. Leave it blank to use `/config/foldergram/hls-cache`. A custom path must be writable and separate from galleries, the database, thumbnails, previews, and other Foldergram storage.
- **Streaming Cache Size Limit:** total space available to cached segments and conversions in progress; defaults to `2147483648` bytes (2 GiB).
- **Streaming Cache Maximum Age:** how long unused segments can stay in the cache; defaults to `24` hours and must be greater than zero.
- **Video Transcoding Concurrency:** number of simultaneous video conversions, from `1` to `8`; defaults to `1`.
- **Additional Trusted Origins:** usually unnecessary for the built-in Web UI. Set comma-separated origins only when an external reverse proxy requires them.
- **Additional Environment Variables:** advanced upstream settings. Each entry needs a `key` and a string `value`.

For optional Immich integration, set the required `IMMICH_URL` and API-key variables through **Additional Environment Variables**, then follow **Settings → Sources** in Foldergram. Keep the database in `/config/foldergram` backed up because it also contains the Immich encryption key.

Refer to the [upstream Foldergram documentation](https://github.com/foldergram/foldergram#configuration) for all supported environment variables, media formats, access modes, and scanning behavior.

> [!WARNING]
> The app has write access to `/media` and `/share`. Foldergram deletion and trash actions can affect original media. Keep backups and use read-only originals for additional sources when appropriate.

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
