
## What's Changed

- Fix spurious logout on page reload with expired access token
- Fix explore page showing private tags and improve stats hook
- Fix calendar navigation to use current page path (#5605)
- Fix default memo visibility not being correctly applied (#5623)
- Fix delete memo errors — only run post-delete actions on success
- Fix infinite view transition loop by memoizing `useNavigateTo`
- Fix task list item index scoping to memo content container
- Fix cross-tab session loss by persisting auth token in localStorage
- Fix spurious `GetCurrentUser` call on init when no token is stored
- Fix SSRF vulnerability in webhook dispatcher (security)
- Fix MemoEditor layout and timestamp popover styling
- Fix attachment/memo deletion when local file is missing
- Fix MonthNavigator month label not reacting to language changes
- Fix truncation of memo batch attachments (#5654)
- Fix comment reactions and deletion not invalidating comments query (#5641)
- Fix calendar year picker to allow navigation back to 1970
- Fix redirect to auth page instead of explore on session expiry
- Fix PAT handling in PostgreSQL — handle missing data gracefully, add tests (#5605)
- Fix ampersand support in tags to enable compound tags
- Eliminate redundant fetch when opening inline memo editor
- Replace `EditableTimestamp` with inline editor timestamp popover

## 💎 Featured Sponsors

[**Warp** — The AI-powered terminal built for speed and collaboration](https://go.warp.dev/memos)

<a href="https://go.warp.dev/memos" target="_blank" rel="noopener">
  <img src="https://raw.githubusercontent.com/warpdotdev/brand-assets/main/Github/Sponsor/Warp-Github-LG-02.png" alt="Warp - The AI-powered terminal built for speed and collaboration" width="512" />
</a>

<p></p>

[**TestMu AI** - The world’s first full-stack Agentic AI Quality Engineering platform](https://www.testmuai.com/?utm_medium=sponsor&utm_source=memos)
  
<a href="https://www.testmuai.com/?utm_medium=sponsor&utm_source=memos" target="_blank" rel="noopener">
  <img src="https://usememos.com/sponsors/testmu.svg" alt="TestMu AI" height="36" />
</a>

<p></p>

[**SSD Nodes** - Affordable VPS hosting for self-hosters](https://ssdnodes.com/?utm_source=memos&utm_medium=sponsor)
  
<a href="https://ssdnodes.com/?utm_source=memos&utm_medium=sponsor" target="_blank" rel="noopener">
  <img src="https://usememos.com/sponsors/ssd-nodes.svg" alt="SSD Nodes" height="72" />
</a>

## New Contributors
* @CharyeahOwO made their first contribution in https://github.com/usememos/memos/pull/5605
* @Kaki021 made their first contribution in https://github.com/usememos/memos/pull/5623
* @milvasic made their first contribution in https://github.com/usememos/memos/pull/5641

**Full Changelog**: https://github.com/usememos/memos/compare/v0.26.1...v0.26.2