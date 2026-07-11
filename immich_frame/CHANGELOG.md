# 📦 ImmichFrame Release v1.0.35.0 – July 8, 2026

  <!-- Release notes generated using configuration in .github/release.yml at v1.0.35.0 -->

  This release fixes memories failing to load against newer Immich servers, along with a stale QR code/link bug in the info overlay.

  ---

  ## What's Changed

  ### ⚡ Fixes

  #### 🐛 Fixed memories not loading on newer Immich servers
  **PR [#660](https://github.com/immichFrame/ImmichFrame/pull/660) by @JW-CH**

  The "on this day" memories row could fail to load entirely against newer Immich servers, which now strictly require a timezone offset on the date sent to the memories endpoint. ImmichFrame was dropping that offset before sending the request, causing Immich to reject it. The request now correctly includes your local timezone offset, so memories load reliably again.

  ---

  #### 🐛 Fixed stale QR code and "Open in Immich" link during slideshow
  **PR [#666](https://github.com/immichFrame/ImmichFrame/pull/666) by @JoeRu**

  The QR code and "Open in Immich" link in the info overlay could get stuck pointing at the first photo shown, even after the slideshow moved on to new images. Opening the info overlay now always shows the QR code and link for the photo currently on screen.

  ---

  ## New Contributors

  - 🎉 @JoeRu made their first contribution in [#666](https://github.com/immichFrame/ImmichFrame/pull/666) — welcome!

  ---

  **Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.34.0...v1.0.35.0