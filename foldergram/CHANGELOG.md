## Foldergram v1.4.1 - Caption preservation hotfix

This release fixes an upgrade issue where captions edited in older versions could be replaced by companion metadata files after upgrading to v1.4.0 and rescanning.

### Preserve existing captions on upgrade

- Captions saved in v1.3.x are now protected from older `.txt` and `.nfo` companion files, including captions on photos, videos and carousel posts.
- Protection applies automatically when upgrading directly from v1.3.x or from v1.4.0.
- Posts without saved captions continue to import companion captions normally.
- Existing v1.4.0 caption edits, deliberately cleared captions and metadata imports keep their current behavior.

Changed companion caption text can still replace a protected caption when the file’s modification time is newer than the recorded edit time. For legacy captions, the upgrade time provides that protection boundary.

### Before upgrading

- Captions already overwritten by a v1.4.0 scan cannot be restored automatically. Restore the previous text from a pre-scan backup or edit the caption again in Foldergram.
- Captions deliberately cleared before v1.4.0 cannot be distinguished from captions that were never set. Companion captions may still be imported for those posts.

Thanks to [[@nmfretz](https://github.com/nmfretz)](https://github.com/nmfretz) for reporting [[#133](https://github.com/foldergram/foldergram/issues/133)](https://github.com/foldergram/foldergram/issues/133) while testing the Foldergram update for Umbrel.

**Full changelog:** https://github.com/foldergram/foldergram/compare/v1.4.0...v1.4.1