# 0.33.1

Welcome to the `0.33` release of Karakeep! The headline of this release is **semantic search**. Karakeep can now generate embeddings for your bookmarks, letting you search by meaning instead of exact keywords (and making auto-tagging noticeably more consistent along the way). The mobile app gets **offline reading**, so you can save articles to your device and read them on a plane, along with new layouts, sorting, and one-tap clipboard saving. **Cookie and GDPR consents** should be something of the past with this release (finally). Plus a big batch of crawler, security and performance fixes.

Thanks to everyone who contributed to this release: @esimkowitz, @joestump, @zerone0x, @ElectricTea, @optix2000, @thiswillbeyourgithub, @jcgoodwin86, @InventorB, @VrtxOmega, @pike00, @KayMi, @TanishValesha, @mahirhir, @moduvoice, @eviaaaaa, @archit-goyal, @CertStone, and everyone who shipped code, triaged bugs, or shared feedback.

*Note: the changes mentioned here for the extension and mobile releases will need to go through the different store (apple, google, mozilla) reviews. So it might take a couple of days until all of them are released.*

> If you enjoy using Karakeep, consider supporting the project [here ☕️](https://buymeacoffee.com/mbassem) or via GitHub [here](https://github.com/sponsors/MohamedBassem). Also share Karakeep's managed offering (☁️ [link](https://cloud.karakeep.app)) with your friends who're not into selfhosting.

<a href="https://www.buymeacoffee.com/mbassem" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="auto" height="50" ></a>


# New Features 🚀

* **Semantic Search** (#2959, #2960) - Search is no longer limited to exact keyword matching. There are now three search modes, switchable from a dropdown in the search bar:
  * `Full text` - the existing keyword search (still the default).
  * `Semantic` [Experimental] - pure meaning-based search powered by embeddings. Searching for "how to make coffee" will find your espresso bookmarks even if they never use those words.
  * `Hybrid` [Experimental] - fuses the results of both.
  * The new mode is also available in the API, MCP and CLI which is going to be the most useful with agents.
  * Semantic search is still new and experimental, so results might not be super accurate yet, but it's a start.
  * ⚠️ Semantic search requires embeddings to be enabled, read the upgrade notes for details about how to enable them.
* **Smarter auto-tagging using embeddings** (#2858) - When tagging a new bookmark, Karakeep now looks up semantically similar bookmarks and feeds their existing tags into the LLM prompt as suggestions. The result is a lot less tag sprawl (no more `k8s`, `kubernetes` and `Kubernetes` all coexisting). This also requires embeddings to be enabled, read the upgrade notes for details about how them.
* **Cleaner saved pages** (#2973): the crawler now detects common consent dialogs (cookies and GDPR) and automatically opts out before capturing the article, screenshot and PDF.
* **Offline reading on mobile** (#2957) - The mobile app can now work without a connection:
  * **Save articles for offline**: from a bookmark's "…" menu, pick *Make available offline*. The full article is downloaded and kept on device until you remove it.
  * **Recent cache**: everything you browse (bookmark lists, tags, lists, highlights) is now persisted for 7 days, so recently visited screens still open when you're offline.
* **Mobile app improvements**:
  * **New layouts** (#2837): switch between the existing card layout and a new compact list layout. *Note: the default is now the list layout.*
  * **Sorting** (#2777): sort your bookmarks newest-first or oldest-first (overdue, sorry!).
  * **Save from clipboard** (#2868): a new *Clipboard* entry in the "+" menu saves whatever is in your clipboard in one tap. Thanks @InventorB!
  * The manage bookmark sheet now has favourite, archive, share and highlights actions instead of just delete.
* **Karakeep for agentic usage** - continuing where 0.32 left off:
  * **MCP server went from 8 to 29 tools**. Newly added: full list CRUD, full tag CRUD, highlights, `delete-bookmark`, and `get-asset`. Big thanks to @joestump for the list/tag CRUD work (#2917)!
  * **New readable content API** (#2660): `GET /api/v1/bookmarks/{bookmarkId}/content` returns a bookmark's article content as markdown or plain text, cursor-paginated in LLM-friendly chunks that snap to paragraph boundaries.
* **Much faster bookmark metadata** (#2932): Karakeep's pre-flight http request to the website can now contribute to its metadata extraction. This results into some metadata (e.g. title) appearing much faster. A new `CRAWLER_PREFLIGHT_USER_AGENT` option lets you set a user agent for that probe request, and let's just say that a good user agent makes a huge difference.
* The default OpenAI model has changed from `gpt-4.1-mini` to `gpt-5.6-luna` which is half as cheap, though a bit slower given that it's a reasoning model.

# UX Improvements ✨

* **Re-saving an existing bookmark now actually does something** (#2962) - Saving a link you've saved before used to just tell you "Bookmark already exists" and do nothing. Now it re-saves it: the bookmark is un-archived and bumped back to the top of your list.
* **Smarter bookmark previews** (#2975) - Newly crawled pages are now assessed for how well they work in Reader View. Articles continue to open in the clean reader, while homepages, search results, product pages and other non-article content default to a screenshot or a new page-overview panel instead of showing a poor text extraction. You can still switch among the overview, Reader View, screenshot, PDF and archived page from the preview selector.
* **Bulk edit is now one hover away**: instead of first switching bulk edit on from the toolbar, a selection circle appears directly on a bookmark card when you hover it. Selecting one card puts you into bulk edit mode for the rest.
* The sidebar is now wider on large screens, and its scrollbar only appears when you hover it instead of sitting there permanently.
* Mobile polish: a proper loading state while an article is still being crawled, better reader contrast in dark mode, a rebuilt login screen with much clearer connection errors, faster Manage Tags page on large libraries (server-side search instead of loading every tag), iPad/tablet reader toolbar and FAB fixes by @esimkowitz (#2788, #2793, #2794), and a bunch of redundant success toasts removed.
* Karakeep is now installable as a PWA in Chrome again, allowing you to use karakeep on your desktop as if it's one of the apps.
* New **Instagram renderer** (#2836): Instagram posts and reels now render as the actual embedded post in the bookmark preview, joining the existing YouTube, X, TikTok and Amazon renderers.


# Fixes 🐛

* **Security fixes**:
  * Fixed a DNS rebinding / TOCTOU hole in the crawler's SSRF protection (#2945). Reported by @celinke97 (GHSA-vc53-r298-c6h6).
  * API key and signed asset token verification now use timing-safe comparisons, reported by @xancyber (GHSA-hjm9-gc55-5hgv).
  * Bookmark URLs are now restricted to `http`/`https` on create and update. Reported by @therawdev and @shukla304 (GHSA-6mfw-xrw2-h5x3).
  * Legacy bookmarks with unsafe schemes are filtered out of RSS feeds and Netscape HTML exports, and the exported URLs are HTML-escaped. Reported by @karen93shieh and @MuxiLyuLucy (GHSA-4vx2-9j8p-jg8v).
  * Tag names are now HTML-escaped in Netscape bookmark exports, preventing a crafted or AI-generated tag from breaking out of the `TAGS` attribute when the export is opened in a browser.
  * User-supplied names (user names, list names, inviter names) are HTML-escaped in outgoing emails, fixing HTML injection in the list invitation email. Reported by @therawdev and @shukla304 (GHSA-pvj2-rgwm-r7f8).
  * Password logins are now rate limited (10 attempts per 15 minutes per IP + email). Note that this requires `RATE_LIMITING_ENABLED=true`.
  * Closed account-enumeration side channels in login and password reset.
* Much faster bookmark deletion (#2669): added the missing indexes that should make deletions less IO intensive for large libraries.
* Old completed import sessions are now archived after 30 days: their summary counts are kept, but the per-bookmark staging rows are deleted, which keeps the DB from growing unboundedly after big imports.
* YouTube/video downloads work again - yt-dlp now uses the bundled node as its JS runtime, by @pike00 (#2805).
* Fixed `BROWSER_WEB_URL` failing to resolve on IPv6-only Docker networks by @VrtxOmega (#2863).
* Fixed the X/Twitter renderer, which broke after the API changed its response shape.
* Inline images in SingleFile archives are no longer clobbered by the lazy-load normalization, by @zerone0x (#2928).
* Banner/preview image extraction now works for SingleFile and precrawled archives that inline the image as a data URI.
* Fixed summarization producing garbled output for users running with `INFERENCE_OUTPUT_SCHEMA=json`, by @eviaaaaa (#2926).
* New `OPENAI_TIMEOUT_SEC` option to control the per-request inference timeout, useful for slow self-hosted providers, by @optix2000 (#2876).
* Hardened the tagging prompt: tags are now capped to 1–3 words, and Karakeep explicitly returns no tags for error pages, Cloudflare/CAPTCHA interstitials, cookie banners and login walls - so no more `just a moment` or `cloudflare` tags on failed crawls.
* Fixed the MCP `get-bookmark-content` tool crashing on bookmarks that haven't been crawled yet, by @joestump (#2915).
* Fixed scrolling in the bookmark preview's screenshot view by @VrtxOmega (#2864).
* The browser extension now requests host permissions at runtime for client-side crawling (#2784), instead of asking for them up front.
* Added missing Japanese translations by @mahirhir (#2903) and filled in the missing Korean translation keys by @moduvoice (#2938).
* PDF previews now render via `<embed>` so they display in Safari, by @KayMi (#2806).
* Import progress is now tracked per import job (#2950), so running two imports at once no longer makes their progress bars fight each other. Thanks @jcgoodwin86!


# For Developers 🛠️

* Docker healthchecks now respect a custom `PORT` by @zerone0x (#2948).
* OAuth providers can now use a configurable ID token signing algorithm via `OAUTH_ID_TOKEN_SIGNED_RESPONSE_ALG`, by @CertStone (#2850).

# Community Projects 💡

*Checkout our community projects page [here](https://docs.karakeep.app/community-projects).*

* [wdoc](https://github.com/thiswillbeyourgithub/wdoc): A RAG-powered document/knowledge querying tool with Karakeep support, by @thiswillbeyourgithub (#2904)


# Screenshots 📸


### Offline Reading

<img width="603" height="1311" alt="Screenshot 2026-08-01 at 7 41 17 PM" src="https://github.com/user-attachments/assets/15eca558-2fa9-44d2-9c75-c7e6042b44c1" />



### New Mobile List Layouts

*Please don't judge my saved content*

<img width="603" height="1258" alt="Screenshot 2026-08-01 at 7 38 55 PM" src="https://github.com/user-attachments/assets/bf5aa418-b80f-4d75-968a-2b99914df803" />


# Upgrading 📦

To upgrade:
* If you're using `KARAKEEP_VERSION=release`, run `docker compose pull && docker compose up -d`.
* If you're pinning it to a specific version, upgrade the version and then run `docker compose pull && docker compose up -d`.


## Enabling Embeddings

1. Karakeep's embedding uses your existing meilisearch installation as the default vector store. If you're an OG, and running an old meilisearch version, you'll need to ensure you're on meilisearch version (1.13 or higher). Check [this guide](https://www.meilisearch.com/docs/resources/migration/updating#updating-a-self-hosted-meilisearch-instance) for info on how to update.
2. If you're using the default OpenAI based configuration, auto embeddings of new bookmarks will be enabled automatically and will use the `text-embedding-3-small` model.
3. If you're using a custom provider, you'll need to pass in the `EMBEDDING_TEXT_MODEL=<your_mode>`, the size of the dimension of the model via `EMBEDDING_DIMENSIONS` and then pass `EMBEDDING_ENABLE_AUTO_INDEXING=true` to enable embeddings. Check out [our docs](https://docs.karakeep.app/configuration/different-ai-providers) for example models and configurations.

Once you've enabled embeddings, you'll need to regenerate embeddings for all existing bookmarks. Head to the admin panel's Background Jobs page (new "Embeddings" card) and regenerate embeddings for all/pending bookmarks. This might take a while depending on how many bookmarks you have, and will cost you money (though embeddings are usually pretty cheap).

NOTE: Changing the model or its dimension after embedding even a single bookmark will require you to regenerate embeddings for *all* bookmarks.


# All Commits

* fix(tagging): loosen the captcha rejection in the prompt a bit - @MohamedBassem in 8550eb09
* fix(workers): wait for autoconsent in parallel with page load - @MohamedBassem in 98c52b85
* fix(tests): fix failing test after changing default model - @MohamedBassem in f249307b
* feat: change default inference model to gpt-5.6-luna - @MohamedBassem in 1bc351a7
* fix: enable auto embedding by default for default inference configuration (#2976) - @MohamedBassem in bcbb5776
* fix: enable auto embedding by default for default inference configurations - @MohamedBassem in 7722c6ae
* deps: upgrade docusaurus - @MohamedBassem in ccddfcf3
* feat: Add support for configurable ID token signing algorithm in OAuth (#2850) - @CertStone in b2b2579b
* feat(landing): 28k starts - @MohamedBassem in 385ec1df
* feat: add new article quality assessment (#2975) - @MohamedBassem in 76b477c4
* fix: make queue registration idempotent - @MohamedBassem in 6f120133
* i18n: some translation fixes - @MohamedBassem in 3b7982c1
* i18n: Sync weblate translations - Hosted Weblate in 590c6700
* feat(web): some UX improvements in signin and password forms - @MohamedBassem in b4b94740
* feat(workers): auto-dismiss consent dialogs with autoconsent (#2973) - @MohamedBassem in c333f240
* deps: upgrade nextjs to 16.2.12 - @MohamedBassem in 11488896
* fix(workers): fix workers in dev mode - @MohamedBassem in 3a0421d0
* deps: bump a bunch of deps - @MohamedBassem in a90034d1
* i18n: Sync weblate translations - Hosted Weblate in 8b4b9170
* docs: hide the chat flags for now - @MohamedBassem in 36c36e3e
* fix(auth): close account enumeration oracles in login and password reset - @MohamedBassem in 036da4c0
* fix(mobile): don't silently swallow mutations fired while offline - @MohamedBassem in 9188958c
* fix(plugins): don't cache a rejected init promise in the meilisearch providers - @MohamedBassem in 64ec6cbc
* fix(export): escape tag names in the netscape bookmark export - @MohamedBassem in f0381b42
* feat: add support for resaving already existing bookmarks (#2962) - @MohamedBassem in f2f6431d
* feat(web): move keyboard shortcuts inside the profile options menu - @MohamedBassem in a6987247
* fix(web): fix preview screenshot scrolling (#2864) - @VrtxOmega in 595392a9
* feat(web): allow triggering bulk edit on hover - @MohamedBassem in 28a48ec5
* fix(workers): denoise the log messages coming from the feedWorker - @MohamedBassem in d155fa0e
* fix(ux): make the sidebar wider on larger screens - @MohamedBassem in f417b900
* feat: make it possible to trigger admin jobs for a certain duration - @MohamedBassem in 0a1821ba
* release(mobile): release mobile v1.10.0-1 - @MohamedBassem in 369f5a68
* fix(mobile): improve reader contrast in dark mode - @MohamedBassem in c007bc76
* feat(mobile): add semantic search mode selector - @MohamedBassem in 8175539e
* feat(mobile): show offline storage usage - @MohamedBassem in ec810158
* release(mobile): release mobile v1.10.0 - @MohamedBassem in 3a6f2822
* feat(web): add semantic search to the UI (#2960) - @MohamedBassem in 2f740d00
* feat: add semantic search (#2959) - @MohamedBassem in 71ea4d9b
* feat(mcp): more MCP tools - @MohamedBassem in 8de38d48
* feat(cli): expose assets and readable conent in the CLI - @MohamedBassem in a2968718
* feat(api): add an api for fetching readable content of a bookmark. #2660 - @MohamedBassem in f3911139
* feat(mcp): add ability to fetch assets via signed URLs - @MohamedBassem in 06d99bd6
* fix(mobile): better error message in the login page - @MohamedBassem in e88a606c
* fix(mobile): fix formsheet colors - @MohamedBassem in b8fe26ad
* feat(mobile): offline reading (#2957) - @MohamedBassem in 2075c33a
* feat(mobile): minor cleanups to the login page - @MohamedBassem in 9b1b2b73
* fix(mobile): add a loading indicator to article content - @MohamedBassem in 198ea1e5
* readme: drop heavy dev notice now that it's stable enough - @MohamedBassem in bc506307
* ci: fix failing trpc test - @MohamedBassem in bf2749e8
* fix: add timeSafe checks for signed tokens and api keys - @MohamedBassem in e8a138f1
* fix: drop redundant db indicies - @MohamedBassem in 7ced044b
* feat: archive old completed sessions - @MohamedBassem in 1717af84
* fix: upgrade some packages - @MohamedBassem in f0d254d0
* fix: respect PORT in Docker healthchecks (#2948) - @zerone0x in 7d703b8b
* fix: track import progress per-job (#2950) - @jcgoodwin86 in 4224da4f
* feat: prep for sub tier overrides - @MohamedBassem in 5e5692f7
* feat: add chat configuration and persistence schema - @MohamedBassem in 28cb149d
* refactor(web): replace AI Elements message components with shadcn chat components - @MohamedBassem in 4423da19
* [mobile] Upgrade mobile app to Expo SDK 56 (#2946) - @MohamedBassem in 08fd866b
* fix: rename root package to @karakeep/root. fixes #2939 - @MohamedBassem in 7ff5a46f
* [network] fix dns rebinding problems post internal hostname validation (#2945) - @MohamedBassem in 978544df
* fix: add missing indicies needed for bookmark deletion. #2669 - @MohamedBassem in eb1f4727
* i18n: fill missing Korean (ko) translation keys (#2938) - @moduvoice in 7b19b0da
* fix(mobile): propagate error message in sharing screen - @MohamedBassem in 1b7b2477
* revert: remove --headless=new flag from default chrome docker compose (#2936) - @MohamedBassem in 4af8bb2f
* release(mcp): Bump mcp server to 0.32.1 - @MohamedBassem in aa78aa8f
* feat(mcp): add list CRUD, tag CRUD, delete-bookmark (#2917) - @joestump in 831d6bf5
* refactor: split crawler file into separate modules (#2933) - @MohamedBassem in b2c52c9c
* feat: add extra metadata parse in the probe fetch (#2932) - @MohamedBassem in 84399288
* fix(crawler): preserve inline GIF data images (#2928) - @zerone0x in 28d321ce
* feat: add a script to adhocly test the crawler + improve chrome flags (#2929) - @MohamedBassem in 5b0d7fe6
* fix(inference): only set JSON response_format for schema requests (#2926) - @eviaaaaa in 545e6f80
* fix: fix banner extraction of singlefile archives - @MohamedBassem in ba6adfce
* fix: ratelimit password login attempts - @MohamedBassem in f7d04297
* fix: sanitize input url and list names - @MohamedBassem in ffd10589
* feat: tagging prompt hardening - @MohamedBassem in 9ceb077c
* fix(mcp): coerce null htmlContent before turndown in get-bookmark-content (#2915) - @joestump in 1ebf5b08
* [codex] Document browser extension dev port (#2918) - @archit-goyal in fc1c127d
* fix: forget password workflow - @MohamedBassem in c3d60280
* feat(stripe): add a trpc command for force syncing customer detail - @MohamedBassem in a787ee47
* fix(billing): pick the latest active subscription when user has multiple subs - @MohamedBassem in 9bcac9cc
* ci: disable plugin tests - @MohamedBassem in 43425e1d
* chore: drop jemalloc support - @MohamedBassem in e862bf3b
* fix(restate): lower inactivity timeouts on dispatchers (#2911) - @MohamedBassem in ac51b359
* feat(i18n): add missing Japanese (ja) translations (keyboard shortcuts, admin embeddings) (#2903) - @mahirhir in 475483e3
* docs(community): add wdoc to community projects (#2904) - @thiswillbeyourgithub in c93cbc2a
* feat(landing): 26k stars. Take 2 - @MohamedBassem in 9879eb5d
* docker: fix monolith build in docker - @MohamedBassem in 05c4e04a
* feat(landing): 26k stars - @MohamedBassem in 3afe675a
* fix(inference): add OpenAI request timeout config (#2876) - @optix2000 in c0ac8a47
* feat(mobile): easy clipboard saving (#2868) - @InventorB in 207016e8
* fix(workers): Fix BROWSER_WEB_URL IPv6 host resolution (#2863) - @VrtxOmega in cf1964ff
* chore: AI assistant component prep (#2861) - @MohamedBassem in 76cbbf39
* fix(api): make metrics registration idempotent - @MohamedBassem in 4ae50c52
* fix: fast track tagging after embedding generation (#2860) - @MohamedBassem in 63694167
* feat: add embeddings-based potentially relevant tags to LLM context d… (#2858) - @MohamedBassem in 2fbd77bd
* feat: add bookmark embedding support (#2857) - @MohamedBassem in 84ab354d
* deps: upgrade meilisearch client package - @MohamedBassem in af3677a1
* feat(cli): add --description flag to bookmarks update command (#2856) - @TanishValesha in 8463ad07
* fix: fix twitter renderer - @MohamedBassem in dc268202
* fix: fix plugin and stats registration in nextjs across reloads - @MohamedBassem in a043c889
* fix(workers): fix misleading error message when rss import fails to create bookmark. fixes #2838 - @MohamedBassem in 9651c79c
* release(mobile): release mobile v1.9.5-2 - @MohamedBassem in 78e012f2
* fix(mobile): fix taglist skeleton - @MohamedBassem in 8d9a0154
* release(mobile): release mobile v1.9.5-1 - @MohamedBassem in a031d433
* fix(mobile): remove redundant toasts in the bookmarks info page - @MohamedBassem in 4e677c55
* fix(mobile): change default layout to be list layout - @MohamedBassem in 5332ca33
* fix(mobile): add bookmark grid settings to favs and archive pages - @MohamedBassem in c2720375
* release(mobile): release mobile v1.9.5 - @MohamedBassem in 5d292292
* feat(mobile): add mobile sorting support. fixes #2777 - @MohamedBassem in d5ea3f5a
* fix(mobile): fix the padding of the tag pills - @MohamedBassem in 0fe7d706
* feat(mobile): add different mobile layouts to the mobile app (#2837) - @MohamedBassem in bc29d61d
* feat(mobile): change tag colors - @MohamedBassem in 633016c7
* feat(mobile): add archive,fav,share and highlights to info page - @MohamedBassem in c32b7f99
* refactor(mobile): use a composite component for the bookmark card - @MohamedBassem in 77c6523c
* feat: instagram renderer (#2836) - @MohamedBassem in 3c1a0201
* fix(web): fix PWA installaiblity in chrome - @MohamedBassem in 95555f1f
* fix(web): fix alignment of keyboard button in global actions - @MohamedBassem in 0893e512
* fix(web): change sidebar collapse toggle to chevrons - @MohamedBassem in e6756e05
* fix(mobile): remove unncessary toast from manage list actions on mobile - @MohamedBassem in 199d0327
* fix(docker): set yt-dlp to use bundled node as JS runtime (#2805) - @pike00 in e92f2f02
* fix(web): render PDFs via <embed> so Safari can display them (#2806) - @KayMi in ff288613
* chore: upgrade to pnpm 11 (#2833) - @MohamedBassem in 8f199631
* build: stop update old personal docker images - @MohamedBassem in d10effa2
* chore: pin github action deps (#2832) - @MohamedBassem in 341f7217
* chore: Add seed snapshot generator (#2829) - @MohamedBassem in 53da5e2b
* deps: upgrade nextjs to 16 (#2827) - @MohamedBassem in ff57d9c2
* chore: improve AGENTS.md (#2826) - @ElectricTea in b45d41cc
* fix: fix error on admin user list due to react query hydration (#2824) - @MohamedBassem in 1997bd38
* chore: add a .ignore file to filter out noisy dirs from search - @MohamedBassem in 37b37124
* docs: update SECURITY.md - @MohamedBassem in 4b22229d
* deps: upgrade nextjs to 15.5.18 - @MohamedBassem in f8237243
* fix: serve unoptimized nextjs images - @MohamedBassem in 61a2bdeb
* release(mobile): release mobile v1.9.4 - @MohamedBassem in 01d636f2
* fix(mobile): improve perf of manage_tags page - @MohamedBassem in 84dfea5e
* fix(mobile): fix color of list separator in recent searches list - @MohamedBassem in d426cdb2
* fix(mobile): fix formsheet padding in manage_lists, manage_tags and info sheets - @MohamedBassem in 41633c2a
* feat(mobile): tablet/iPad UI polish for toolbar and FAB (#2788) - @esimkowitz in d871f57b
* fix(mobile): stack Upload Image Quality slider on two lines (#2794) - @esimkowitz in 75b6e910
* fix(mobile): fix insets on new iOS settings formSheet modal (#2793) - @esimkowitz in 7ce940a5
* docs: update screenshots in the docs - @MohamedBassem in 66a7ac48
* release(extension): Release version 1.2.11 - @MohamedBassem in f638064e
* feat(browser-extension): request host permission at runtime for client side crawling (#2784) - @MohamedBassem in 1a7a2fef
* docs: minor docs update to mention the skills and the new singlefile integration - @MohamedBassem in 1c7872ce
* release(cli): release CLI 0.32.0 - @MohamedBassem in ad9ef514
* release: release cli, sdk, mobile and extension - @MohamedBassem in 58f9b302
* release(docs): release the 0.32 docs - @MohamedBassem in d28ff5fd