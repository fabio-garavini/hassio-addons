Grimoire 1.2.0 adds browser Companion support, Homebrew installation, and fixes for everyday search and model setup.

## Highlights

- Connect browser integrations with separately named, revocable tokens under **Settings → Browser Integration**.
- Discover the versioned Companion protocol and capture pages or selected tabs with titles, notes, categories, tags, selected text, Pin, and Read Later.
- Install with Homebrew and manage the daemon with `brew services`. The primary command is now `grimoire`; `littleimp` remains a compatibility alias.
- Search defaults to **Relevance**, so AI and mixed searches no longer inherit the library's date ordering. Explicit search sorts remain available, and clearing a query restores the library sort.
- Retry model-connection tests after a failed attempt.
- Homebrew-managed installations use `brew upgrade grimoire` instead of the native updater.

## Install

```sh
brew trust --formula goniszewski/grimoire/grimoire
brew tap goniszewski/grimoire https://github.com/goniszewski/grimoire.git
brew install grimoire
brew services start grimoire
```

Native macOS and Linux archives are attached. Homebrew data lives under `$(brew --prefix)/var/little-imp`, separately from native data under `~/.local/share/littleimp`; changing installation methods does not automatically migrate a library.

The archives include SHA-256 checksums and detached GPG signatures. Import the attached `grimoire-release-key.asc`; the expected fingerprint is:

`DB04 AD8F 2F2C B775 3F0D FA3F ED72 EFB5 8D92 8945`

## Validation and limits

Validated with frontend and daemon tests, Chromium E2E checks, native macOS installed-app smoke, macOS Homebrew install/reinstall and v1.1→v1.2 upgrade with data preservation, and Ubuntu 24.04/Debian 12 systemd installer checks. Production dependency audits reported no vulnerabilities at release preparation.

AI and mixed searches rank indexed candidates; their result count can include the full indexed library. This release fixes ranking, not model-specific similarity thresholds.

Companion distribution is tracked separately in [grimoire-web-extension](https://github.com/goniszewski/grimoire-web-extension). This release does not submit Chrome or Firefox store updates or include a signed Safari app. Docker Hub legacy rolling tags are not changed by this release; use the documented source Compose build for the current application.

**Full Changelog**: https://github.com/goniszewski/grimoire/compare/v1.1.0...v1.2.0
