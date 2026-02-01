## What's Changed

### 🚀 Major Features

- **Refresh Token Rotation with Sliding Window Sessions** - Enhanced authentication security by implementing refresh token rotation and sliding window session expiration for better session management

- **Streaming for Video/Audio Files** - Fixed memory exhaustion issues by implementing streaming for media files instead of loading them entirely into memory

- **EXIF Metadata Stripping for Image Uploads** - Privacy enhancement that automatically strips EXIF metadata (location, camera info, etc.) from uploaded images

- **Role Refactor: HOST → ADMIN** - Migrated the HOST role to ADMIN for clearer terminology and permission naming

- **React Query Migration** ([#5379](https://github.com/usememos/memos/pull/5379)) - Major frontend state management refactor, replacing custom state management with React Query v5 for improved caching, data synchronization, and developer experience

- **Memo Map in User Profile** - Implemented map view in user profiles to visualize memo locations geographically with Google Maps integration

- **HDR Image and Video Support** - Added support for HDR (High Dynamic Range) images and videos

- **Midnight Theme** ([#5288](https://github.com/usememos/memos/pull/5288)) - Added new midnight theme option for users who prefer a darker interface

### ✨ Other Improvements

- feat: contribution New Locale: Galician (gl, gl_ES) ([#5376](https://github.com/usememos/memos/pull/5376))
- feat: add iframe support for embedded videos in markdown content
- feat: enhance attachment handling with MIME type validation
- feat: add glassmorphism map controls with Google Maps integration
- feat: add slash commands tooltip to InsertMenu
- refactor: migrate to connect-rpc ([#5338](https://github.com/usememos/memos/pull/5338))
- refactor: user auth improvements ([#5360](https://github.com/usememos/memos/pull/5360))
- refactor: consolidate MemoEditor components ([#5409](https://github.com/usememos/memos/pull/5409))
- refactor: remove legacy session cookie authentication
- refactor: remove deprecated Sessions and AccessTokens settings
- style: improve code block styling and formatting
- perf: optimize memory usage for statistics and image processing
- perf: optimize backend tests with parallel execution

### 🐛 Bug Fixes

- fix: add access control checks for attachments, comments, and reactions
- fix(ui): math render ([#5549](https://github.com/usememos/memos/pull/5549))
- fix(ui): correct calendar header month parsing ([#5532](https://github.com/usememos/memos/pull/5532))
- fix: improve editor auto-scroll and Safari IME handling ([#5469](https://github.com/usememos/memos/pull/5469))
- fix: prevent browser cache from serving stale memo data ([#5470](https://github.com/usememos/memos/pull/5470))
- fix: return Unauthenticated instead of PermissionDenied on token expiration ([#5454](https://github.com/usememos/memos/pull/5454))
- fix: apply theme and locale changes immediately on login screen ([#5442](https://github.com/usememos/memos/pull/5442))
- fix: allow public memo API access without authentication ([#5451](https://github.com/usememos/memos/pull/5451))
- fix: KaTeX math rendering with underscores ([#5438](https://github.com/usememos/memos/pull/5438))
- fix(frontend): ensure attachments are properly linked when creating memos ([#5428](https://github.com/usememos/memos/pull/5428))
- fix(theme): improve text contrast in default dark mode ([#5323](https://github.com/usememos/memos/pull/5323))
- fix(web): disable setext header syntax ([#5314](https://github.com/usememos/memos/pull/5314))
- fix(ui): fix todo command does nothing ([#5329](https://github.com/usememos/memos/pull/5329))
- fix: clean up memo_relation and attachments when deleting memo
- fix: allow guests to view public memo comments

### 🌍 Localization

- chore(i18n): update British English spelling ([#5529](https://github.com/usememos/memos/pull/5529))
- chore: update Chinese translation ([#5519](https://github.com/usememos/memos/pull/5519))
- chore(i18n): add missing Korean translations ([#5456](https://github.com/usememos/memos/pull/5456))
- chore: update simplified chinese localization ([#5422](https://github.com/usememos/memos/pull/5422))
- Update german translations ([#5419](https://github.com/usememos/memos/pull/5419))
- chore: add missing French locale translations ([#5405](https://github.com/usememos/memos/pull/5405))
- chore: add missing keys to Polish translation ([#5380](https://github.com/usememos/memos/pull/5380))
- chore(locales): update Italian translation ([#5346](https://github.com/usememos/memos/pull/5346))

## 💎 Featured Sponsor

### [Warp - The terminal reimagined with AI and collaborative tools for developers](https://go.warp.dev/memos)

<a href="https://go.warp.dev/memos" target="_blank" rel="noopener">
  <img src="https://raw.githubusercontent.com/warpdotdev/brand-assets/main/Github/Sponsor/Warp-Github-LG-02.png" alt="Warp - The terminal for the 21st century" height="256" />
</a>

### [TestMu - The world’s first full-stack Agentic AI Quality Engineering platform](https://www.testmu.ai/?utm_source=memos&utm_medium=sponsor)
  
<a href="https://www.testmu.ai/?utm_source=memos&utm_medium=sponsor" target="_blank" rel="noopener">
  <img src="https://usememos.com/sponsors/testmu.svg" alt="TestMu AI" height="36" />
</a>

## New Contributors
* @kanghyki made their first contribution in https://github.com/usememos/memos/pull/5280
* @realChriss made their first contribution in https://github.com/usememos/memos/pull/5288
* @seiyap70 made their first contribution in https://github.com/usememos/memos/pull/5294
* @spaghetti-coder made their first contribution in https://github.com/usememos/memos/pull/5328
* @xiaolinny made their first contribution in https://github.com/usememos/memos/pull/5332
* @maishivamhoo123 made their first contribution in https://github.com/usememos/memos/pull/5323
* @catoblepa made their first contribution in https://github.com/usememos/memos/pull/5346
* @dwojtas made their first contribution in https://github.com/usememos/memos/pull/5380
* @xmgz made their first contribution in https://github.com/usememos/memos/pull/5376
* @Linqi1234 made their first contribution in https://github.com/usememos/memos/pull/5404
* @guiguir68 made their first contribution in https://github.com/usememos/memos/pull/5405
* @rteitge made their first contribution in https://github.com/usememos/memos/pull/5419
* @sheep-realms made their first contribution in https://github.com/usememos/memos/pull/5422
* @majiayu000 made their first contribution in https://github.com/usememos/memos/pull/5428
* @Faizaanp made their first contribution in https://github.com/usememos/memos/pull/5438
* @Omcodes23 made their first contribution in https://github.com/usememos/memos/pull/5442
* @myodan made their first contribution in https://github.com/usememos/memos/pull/5456
* @zhongzhong4zz made their first contribution in https://github.com/usememos/memos/pull/5482
* @pgoslatara made their first contribution in https://github.com/usememos/memos/pull/5522
* @salmanmkc made their first contribution in https://github.com/usememos/memos/pull/5528
* @itzmk21 made their first contribution in https://github.com/usememos/memos/pull/5529
* @BrenticusMaximus made their first contribution in https://github.com/usememos/memos/pull/5532
* @cuiweixie made their first contribution in https://github.com/usememos/memos/pull/5539
* @ganeshkumara10 made their first contribution in https://github.com/usememos/memos/pull/5549

**Full Changelog**: https://github.com/usememos/memos/compare/v0.25.3...v0.26.0