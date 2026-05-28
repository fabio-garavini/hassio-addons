
> This release adds richer link previews, notification email settings, shortcut and memo workflow improvements, and a set of security, media, and editor fixes. It also adds new instance statistics APIs and performance improvements for the initial screen.

## New Features

### Link Previews and Metadata

- **Link metadata APIs** - Memos now includes endpoints for fetching and batching metadata for links attached to memos.
- **Rendered link cards** - The web app can render metadata cards for shared links, making memo references easier to scan.
- **DNS rebinding protection** - Link metadata fetching now rejects DNS rebinding attempts.

### Notification and Transcription Settings

- **SMTP email settings** - Instance notification settings now include SMTP email configuration.
- **Email test endpoint** - Admins can test notification email settings through the instance API.
- **Explicit speech-to-text settings** - Transcription settings now expose provider, model, and prompt configuration.

### Memo and Workspace Improvements

- **Task list quick actions** - Memos with task lists now support faster task interactions.
- **Calendar-aware memo creation** - Creating a memo from the calendar uses the selected calendar date.
- **Dedicated shortcuts page** - Shortcut management is available from a dedicated page.
- **About page and placeholder refresh** - The app includes a refreshed about page and new placeholder states.

### Administration and Statistics

- **Instance resource statistics** - Admin instance stats now include resource statistics.
- **Filtered all-user stats** - All-user statistics can be filtered for more focused administration views.
- **Configurable log level** - The server now accepts a `--log-level` flag.

## Bug Fixes

- **Attachment ownership enforcement** - Memo updates now enforce attachment ownership.
- **Comment visibility** - Comments now respect parent memo visibility.
- **User response privacy** - User list responses omit internal settings.
- **Memo creation events** - Creating memos with attachments no longer emits an extra update event.
- **Avatar sync** - Profile avatar changes sync immediately after update.
- **Release media handling** - HDR image metadata is preserved in thumbnails, and motion media payloads are preserved through S3 presigned uploads.
- **Editor and markdown polish** - URL paste wrapping and task-list alignment are improved.
- **Static cache and sitemap paths** - Frontend static cache headers and public memo sitemap paths are corrected.
- **SSE refresh behavior** - Initial SSE responses stream correctly and refresh tokens are handled.

## Performance Improvements

- **Initial screen loading** - Heavy first-screen dependencies are lazy loaded.

## New Contributors
* @Moustafaa91 made their first contribution in https://github.com/usememos/memos/pull/5902
* @wally-an made their first contribution in https://github.com/usememos/memos/pull/5903
* @tokenicrat made their first contribution in https://github.com/usememos/memos/pull/5921
* @mayanksaini18 made their first contribution in https://github.com/usememos/memos/pull/5934
* @santoshyadavdev made their first contribution in https://github.com/usememos/memos/pull/5954

**Full Changelog**: https://github.com/usememos/memos/compare/v0.28.0...v0.29.0