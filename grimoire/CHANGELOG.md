Grimoire 1.3.0 makes saved links easier to return to and organize.

## Highlights

- **Later / Revisit:** Work through a small stack of saved bookmarks and resume a round later. Skip, mark read, postpone, remove from Later, move to recoverable Trash, or undo the last decision.
- **Save several links at once:** Paste a list of URLs into Add Bookmark, optionally add them to Later, and see which links saved or failed. A single link can include a note.
- **Collapsible sidebar folders:** Expand only the category branches you need.

## Fixes

- Browser bookmarklet capture works on pages whose content security policy blocked the previous embedded frame.
- Failed AI enrichment responses can be retried.
- Docker frontend lockfiles are aligned for builds.

## Install and upgrade

Signed macOS and Linux release archives, SHA-256 files, detached signatures, and the public release key are attached. The signing-key fingerprint is `DB04AD8F2F2CB7753F0DFA3FED72EFB58D928945`. Back up your library before upgrading. Native upgrades preserve data under `~/.local/share/littleimp`.

Homebrew users can run `brew upgrade grimoire`. The public macOS install, service, reinstall, and v1.2 to v1.3 upgrade paths passed with bookmark and configuration preservation. Linux Homebrew has not been verified; use the Linux archive or Docker there.
