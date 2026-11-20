## Home Assistant app 1.3.3-ha0

- Add Home Assistant Ingress support for the gallery, client-side navigation, API, media, and PWA assets.
- Include ingress credentials when loading the PWA manifest.
- Keep optional direct HTTP/HTTPS access with automatic HTTP-to-HTTPS redirects.

## Foldergram v1.3.3 - Immich compatibility and display preferences

Connect to compatible **Immich v3.2.0 or later** and personalize browser appearance and Home layout through **More → Display preferences**.

### Immich compatibility

* Removes the v3.3.x-only restriction, allowing newer minor and major releases while their read APIs and response formats remain compatible. Older versions and v3.2.0 prereleases are rejected.
* Clearer errors identify invalid server versions, failed requests, and API key or account permission issues.
* Invalid asset responses or missing/repeated pagination cursors stop sync before replacing the index, preserving existing media.

### Display preferences

* **Personal appearance:** Admins and viewers can choose **App default**, **System**, **Light**, or **Dark** from More on desktop and mobile. Changes apply immediately, persist in the current browser, and remain separate from the instance theme and accent color in Settings. Storage failures show when changes last only for the session.
* **Wider desktop feed:** Turn off **Show suggested folders on desktop** to hide Home's right-hand panel and center posts up to **600 px** wide at the default browser text size. Suggested folders remain enabled by default.
* **Fit tall media to screen:** An independent option, off by default, scales oversized photos, videos, and carousels while preserving aspect ratios. It responds to window and text-size changes without enlarging media that already fits. Mobile sizing is unchanged.
* Updated interface copy in English, German, Spanish, and Chinese.

See the [upstream release notes](https://github.com/foldergram/foldergram/releases/tag/v1.3.3) for upgrade instructions and validation details.
