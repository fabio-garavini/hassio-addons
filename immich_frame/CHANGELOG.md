# 📦 ImmichFrame Release v1.0.32.0 – March 02, 2026

<!-- Release notes generated using configuration in .github/release.yml at v1.0.32.0 -->

One of the bigger releases in a while — featuring long-awaited video support, a polished animated splash screen, and a handful of quality-of-life improvements and bug fixes.

---

## What's Changed

### ✨ New Features

#### 🎬 [Experimental] Video Support
**PR [#499](https://github.com/immichFrame/ImmichFrame/pull/499) by @JW-CH**

ImmichFrame can now display videos from your Immich library. Videos are streamed directly from Immich rather than buffered into memory, keeping resource usage low and handling large files gracefully. A Service Worker injects the Authorization header so video requests are authenticated transparently — no extra configuration required.

Safari and iOS users will appreciate proper range request handling: video scrubbing and seeking now work correctly, as streams are served in a seekable, cacheable format that satisfies Safari's strict media requirements.

To enable video playback, set `ShowVideos: true` in your config. See the [video playback docs](https://immichframe.github.io/ImmichFrame/docs/features/video-playback) for full details and known limitations.

---

#### 🔒 Basic Auth Support for Calendar
**PR [#363](https://github.com/immichFrame/ImmichFrame/pull/363) by @JW-CH**

The iCal calendar integration now supports password-protected calendars. Credentials can be passed using the standard URL userinfo format:

```
https://user:password@calendar.example.com/path/to/calendar.ics
```

This is optional and fully backwards-compatible — existing calendar URLs without credentials continue to work as before.

---

#### ✨ Animated Splash Logo
**PR [#584](https://github.com/immichFrame/ImmichFrame/pull/584) by @JW-CH**

The loading screen now features a smooth animated SVG splash logo, replacing the static one. A small but noticeable polish touch — especially visible on slower devices or cold starts.

---

#### 🌡️ Cleaner Weather Display
**PR [#594](https://github.com/immichFrame/ImmichFrame/pull/594) by @3rob3**

The weather widget now shows only the degree symbol (°) instead of an explicit unit label, reducing visual clutter. Your configured temperature unit is still respected — this is a display-only change.

---

### ⚡ Fixes

#### 📅 Calendar Date Search Fix
**PR [#589](https://github.com/immichFrame/ImmichFrame/pull/589) by @3rob3**

Calendar event lookup was using `DateTime.UtcNow` instead of `DateTime.Today`, which could cause off-by-one date errors depending on the server's timezone. Now correctly uses local date for event matching.

#### 🧠 Memories Date Fix
**PR [#588](https://github.com/immichFrame/ImmichFrame/pull/588) by @3rob3**

Resolved an edge case where memory dates were calculated incorrectly, causing the wrong assets to surface in the Memories view. This was a recurring issue that is now properly addressed.

#### 🍎 Range Header Forwarding (Safari/iOS Video Fix)
**PR [#595](https://github.com/immichFrame/ImmichFrame/pull/595) by @3rob3**

Safari and iOS require HTTP range requests to load and seek video. This fix ensures range headers are correctly forwarded to Immich and the response is streamed back in a seekable format, resolving playback failures on Apple devices.

---

### 📓 Documentation

#### 🤖 Updated Android / Frameo Setup Instructions
**PR [#575](https://github.com/immichFrame/ImmichFrame/pull/575) by @sabbene**

Android and Frameo setup instructions have been expanded and improved with clearer steps and a direct APK download link, making it easier to get ImmichFrame running on these platforms.

---

### 🚀 Other Changes

#### 🔐 NPM Dependency Security Updates
**PR [#603](https://github.com/immichFrame/ImmichFrame/pull/603) by @JW-CH**

NPM dependencies in the docs site have been updated to resolve known security vulnerabilities.

---

## New Contributors

- 🎉 @sabbene made their first contribution in [#575](https://github.com/immichFrame/ImmichFrame/pull/575) — welcome!

---

**Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.31.0...v1.0.32.0
