## Bug Fixes

* Avoid inbox crashes by gracefully handling deleted memos in the activity service. ([984d9b46](https://github.com/usememos/memos/commit/984d9b46))
* Correctly parse environment variables that contain underscores. ([a69056a1](https://github.com/usememos/memos/commit/a69056a1))
* Return gRPC-style errors consistently instead of Echo HTTP errors. ([d9dc5be2](https://github.com/usememos/memos/commit/d9dc5be2))
* Fix video attachment handling. ([c4176b4e](https://github.com/usememos/memos/commit/c4176b4e))
* Prevent 401 errors on window focus when an access token expires. ([81ef53b3](https://github.com/usememos/memos/commit/81ef53b3))
* Ensure the shortcut edit button opens the edit dialog (not create). ([e7605d90](https://github.com/usememos/memos/commit/e7605d90))
* Block `Ctrl+Enter` from saving while the editor is still loading content (#5581). ([6bb383a4](https://github.com/usememos/memos/commit/6bb383a4))
* Fix nested task list rendering and checkbox interactions (#5575). ([b4fea8c6](https://github.com/usememos/memos/commit/b4fea8c6))
* Make OAuth PKCE optional during sign-in (#5570). ([cf0a285e](https://github.com/usememos/memos/commit/cf0a285e))
* Prevent private memos from disappearing during token refresh (#5565). ([6db58fae](https://github.com/usememos/memos/commit/6db58fae))
* Add Unicode case-insensitive search support for SQLite (#5559). ([8770b186](https://github.com/usememos/memos/commit/8770b186))
* Correct handling of pasted files in the memo editor. ([2db57b13](https://github.com/usememos/memos/commit/2db57b13))
* Restore the access token creation flow. ([0dbc35a2](https://github.com/usememos/memos/commit/0dbc35a2))
* Preserve tag case when extracting Markdown tags. ([e1c8101d](https://github.com/usememos/memos/commit/e1c8101d))
* Auto-fix permission issues when upgrading from 0.25.3 to 0.26.0. ([d14cfa1c](https://github.com/usememos/memos/commit/d14cfa1c))

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
* @d-jankowski made their first contribution in https://github.com/usememos/memos/pull/5569
* @MemoryClear made their first contribution in https://github.com/usememos/memos/pull/5573

**Full Changelog**: https://github.com/usememos/memos/compare/v0.26.0...v0.26.1