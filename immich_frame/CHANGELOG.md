# 📦 ImmichFrame Release v1.0.40.0 – November 16, 2026

<!-- Release notes generated using configuration in .github/release.yml at v1.0.40.0 -->

ImmichFrame now requires Immich v3.3.0 or newer, can show birthday memories and Immich's edited crops and rotations, and can take its settings from a file again. Frames on LG webOS that broke in v1.0.38.0 display correctly again.

---

## What's Changed

### ✨ New Features

#### 🎂 Birthday memories, without emptying the frame
**PR [#730](https://github.com/immichFrame/ImmichFrame/pull/730) by @Squixx**

Update Immich to v3.3.0 or newer before upgrading. An older server is logged as unsupported: the frame still starts, so the account can be fixed in the admin UI, but the slideshow may not work. Immich 3.3 birthday memories used to fail every photo request on v1.0.39.0 when Memories was on, so the frame stayed empty. `ShowMemories` is still the main switch. `ShowOnThisDayMemories` and `ShowBirthdayMemories` both default to on, in the config and in the admin UI, so existing setups keep both. A birthday caption uses the year the photo was taken, not the person's birth year.

```yaml
ShowMemories: true
ShowOnThisDayMemories: true # boolean, only used when ShowMemories is set
ShowBirthdayMemories: true # boolean, needs a birth date on the person
```

---

#### 🖼️ Crops and rotations from Immich
**PR [#736](https://github.com/immichFrame/ImmichFrame/pull/736) by @johnmathews**

Immich stores a crop or rotation as a non-destructive edit, and the frame was still asking for the original preview. Photos you edited in Immich now show that edit. A photo without edits is unchanged. Nothing to configure.

---

#### 📄 Settings from a file again
**PR [#739](https://github.com/immichFrame/ImmichFrame/pull/739) by @JW-CH**

Set `IMMICHFRAME_CONFIG_SOURCE=file` to make `Settings.json`, `Settings.yml` or `Settings.yaml` the only source of truth. That fits NixOS, Ansible, and a read-only config mount: the file is read once at startup, the admin UI is off, and ImmichFrame does not create `immichframe.db`. A missing file, an invalid file, an unknown key, or more than one settings file stops startup instead of falling back to defaults. Restart to apply edits. An existing database next to the file is left untouched. Unset the variable to use that database again. If it already has settings, the file is then ignored.

```yaml
environment:
  IMMICHFRAME_CONFIG_SOURCE: file
volumes:
  - ./config:/app/Config:ro
```

---

### ⚡ Fixes

#### 📺 Layout on LG webOS and older Chromium
**PR [#720](https://github.com/immichFrame/ImmichFrame/pull/720) by @JW-CH**

Since v1.0.38.0, LG webOS 23 and older (Chromium before 99) ignored Tailwind's CSS layers. The frame no longer fit the screen: scrollbars appeared, and the clock, photos and videos sat off to the right. Those layers are removed at build time, so the same styles apply on those TVs again. Nothing to configure.

---

### 🔨 Maintenance

#### 📦 Web and docs dependencies
**PR [#716](https://github.com/immichFrame/ImmichFrame/pull/716) by @JW-CH**

Frontend and documentation dependencies were updated. No settings or slideshow behavior change.

---

#### 🔧 .NET 10
**PR [#741](https://github.com/immichFrame/ImmichFrame/pull/741) by @JW-CH**

The application and the container image now run on .NET 10. Pulling the image is enough. Building from source or running the tests needs the .NET 10 SDK.

---

## New Contributors

- 🎉 @Squixx made their first contribution in [#730](https://github.com/immichFrame/ImmichFrame/pull/730) — welcome!
- 🎉 @johnmathews made their first contribution in [#736](https://github.com/immichFrame/ImmichFrame/pull/736) — welcome!

---

**Full Changelog**: https://github.com/immichFrame/ImmichFrame/compare/v1.0.39.0...v1.0.40.0
