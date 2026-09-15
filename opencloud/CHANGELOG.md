> [!IMPORTANT]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

## [8.0.0](https://github.com/opencloud-eu/opencloud/releases/tag/v8.0.0) - 2026-09-15

## 🚨 After you upgrade, you must do this:
tl;dr version

- Run `docker compose exec opencloud opencloud search index --all-spaces --force-rescan --insecure` ([Upgrade details](https://docs.opencloud.eu/docs/admin/maintenance/upgrade/upgrade-8.x.x) )

One command, once. That's the whole migration path from 7.x to 8.0.0.

You could make use of the new [announcement banner](https://opencloud.eu/de/news/rolling-release-zentrale-ankuendigungen-direkt-ueber-opencloud) by informing your end users about the search reindexing.

It is worth it! This release fixes more than 50 search bugs and makes Bleve and OpenSearch return the same results for the same query. Path search, upper and lower case in paths and tokenization of Chinese content all work now. A new parity test suite with over 300 test cases runs every KQL query against both backends and compares the results. On top of that, a community fix cuts Bleve memory usage for around 100,000 files from 1.1 GB to about 120 MB. The default search engine now scales much further.

# Highlights
## 📝 Real-time collaborative editing in the Editor

Several people can now edit the same Markdown or `.ocnote` file at the same time. Everyone sees every keystroke immediately, without locking and without waiting for a save.

- **Participant list:** avatars of all participants are shown in the top right, together with a "Collaboration ready" status. Click the avatars to see who joined.
- **Mentions:** type `@` to mention someone. Only people who actually have access to the document can be mentioned. The mentioned user gets a notification and can jump straight into the document from it. A new config setting chooses between mail and in-app notification.
- **Read-only access:** read-only users join the session and follow the changes live. They get no toolbar.
- **Supported formats:** Markdown files and the `.ocnote` note format.

How it works: the editor uses YJS with CRDTs. The clients sync the document among each other, the server does not merge anything. There is no WOPI and no locking involved, which is a completely different mechanism than the Collabora integration.

A new OpenCloud YJS service handles authentication and makes sure the right user identities are shared in a room. It runs a Hocuspocus server that acts as a pure relay: it stores no content, persists nothing, and holds no data. Clients connect over websockets.

Deployment:

- **Default in compose:** the YJS service is published alongside OpenCloud and becomes the default in `opencloud-compose` after the rolling release. Collaborative editing is then on by default.
- **Optional:** you can deploy without it. In that case the editor behaves as before and there is no collaboration.
- **Scaling:** websockets need sticky sessions. Multiple instances can be synced over Redis or NATS. Both were tested.

Known limitations:

- **Source mode:** not available while collaboration is active. Switching into a plain textarea and back cannot be merged into the shared document.
- **Vaults:** no collaboration inside end-to-end encrypted spaces and folders.
- **Public links:** no collaboration. The public link session has no access token to authenticate against the YJS service, so a recipient only sees the last state that came from the server. With write access they can save, which produces a conflicted copy against the running session and triggers the conflict dialog.
- **Autosave:** runs locally in every participant's browser every two minutes when the editor is dirty, so an active session creates a lot of versions. Leader election is already in place, restricting autosave to the elected leader is planned.
- **Concurrent saves:** if two clients save in the same moment, the server decides the order. The second client can receive a conflict response. No data is lost and the file on disk is correct, but one peer may see a failed save.
- **Permission changes:** losing write permission during a running session is only noticed on reload. This matches the behavior of WOPI based editing.

## 🔍 Search: one behavior across Bleve and OpenSearch

OpenCloud ships Bleve by default and offers OpenSearch for larger installations. The two had drifted apart and returned different results for the same query. This release fixes more than 50 search bugs, independent of the backend.

- **Parity test suite:** KQL queries are defined without naming a backend, then run against both Bleve and OpenSearch, and the results are compared. Over 300 test cases, more than 90 percent of the previously duplicated per-backend tests were replaced, 200 test cases are new.
- **Parity report:** checked into the search package and doubles as documentation of what the search can actually do.
- **Fixed, partly customer reported:** path search, upper and lower case in paths, and tokenization problems with Chinese content.

Bleve memory usage drops massively thanks to a community fix. For around 100,000 files it goes from 1.1 GB to about 120 MB. This matters because an out-of-memory Bleve kills the process, and in the Docker setup NATS runs in the same container, where a failed write can corrupt data. The default search engine now scales much further.

## 📷 Motion photo support

The web client plays motion photos, the short frame sequences almost every modern phone records around a picture.

- **Tile view:** a play icon in the top right marks a motion photo and doubles as play/pause control. On hover the motion photo loops.
- **Preview app:** the motion photo plays once when opening, then the still image remains. A "Play motion photo" button restarts the loop.

This also introduced the building blocks for further preview work on other file types.

## ⚡ Faster scrolling in large file lists

Follow-up to the initial loading work from a previous sprint, this time on scrolling and lazy loading. Triggered by a community bug report about slow scrolling in large folders in Safari.

- **Thumbnail size:** thumbnails were requested far too large, around 1000x1000 px for a small tile. That is fixed.
- **Scrolling:** in a folder with 1000 photos, tiles and previews now keep up with fast scrolling. White areas appear for a fraction of a second instead of blocking the view. Chrome, Chromium and Firefox show the intended shimmer placeholder while loading.
- **Preview app:** benefits as well, less noticeably than the file list.

## 🔗 Redesigned public link and file drop pages

The plain layout, the page people outside your instance see first, was reworked.

- **Public link password page:** cleaner card with an icon in the top left corner, a small lock icon, more spacing, and the button moved into the card with a stronger color. Password protection is the default for public links, so this is the most visible page of the set.
- **Access denied page:** uses the same layout.
- **Secret file drop:** the link type where the recipient can only upload and sees no content got a dotted drop area, a clearer layout, more explanatory text, and a better success message after upload.


### fix: YAML frontmatter

Markdown files with a frontmatter block lost that block on save. The `---` delimiters were rendered as horizontal rules and the metadata as normal content. Frontmatter is now shown as its own editable node at the top of the document with YAML syntax highlighting, both for existing files and for newly written blocks. No more data loss.

## Print action

The editor can now print. The content is written into a new window with print CSS and the system print dialog opens, which also gives you "Save as PDF". Two things to know: this is operating system functionality, not a PDF export by the application, so the file lands on your local disk and not in OpenCloud, and some styling such as the frontmatter syntax highlighting is lost.

## Toolbar overflow

The editor toolbar is wide, especially for `.ocnote`. In narrow windows it scrolled horizontally, and on some devices that scrolling did not work at all, which made actions unreachable. A "More actions" button now moves everything that does not fit into an overflow menu.

## Syntax Highlighting

- Supported Languages (37 Grammars):
⁠apache⁠, ⁠bash⁠, ⁠c⁠, ⁠cpp⁠, ⁠csharp⁠, ⁠css⁠, ⁠diff⁠, ⁠go⁠, ⁠graphql⁠, ⁠ini⁠, ⁠java⁠, ⁠javascript⁠, ⁠json⁠, ⁠kotlin⁠, ⁠less⁠, ⁠lua⁠, ⁠makefile⁠, ⁠markdown⁠, ⁠objectivec⁠, ⁠perl⁠, ⁠php⁠, ⁠php-template⁠, ⁠plaintext⁠, ⁠python⁠, ⁠python-repl⁠, ⁠r⁠, ⁠ruby⁠, ⁠rust⁠, ⁠scss⁠, ⁠shell⁠, ⁠sql⁠, ⁠swift⁠, ⁠typescript⁠, ⁠vbnet⁠, ⁠wasm⁠, ⁠xml⁠, ⁠yaml⁠.
 Triggers: Markdown fences (e.g., ⁠```python⁠ or ⁠~~~js⁠).
 Fallback: Defaults to ⁠plaintext⁠ when no language identifier is specified.


## 📊 Prometheus metrics for the Graph API

The Graph API had no metrics at all. It now exports Prometheus metrics:

- **HTTP requests:** incoming requests with path and status code, so error rates, requests per second and concurrent requests are visible.
- **LDAP calls:** which outgoing operations run and how long they take.
- **Nodes and latencies:** number of Graph API nodes serving HTTP or processing events, plus latencies.

Everything is exported as histograms, so p50, p95 and p99, spread and buckets are available in Grafana, live or over a time window. Grafana alerts can be defined on top of it, for example errors per second, too many concurrent requests, or requests that are too slow.

The Helm chart already ships a Grafana suite with dashboards and about 10 alerts. The new metrics close the biggest blind spot there, LDAP in particular. Which of them become default dashboards in the chart is being decided. The Graph API is the pattern, other services will follow.

## 🎨 Theming through the Helm chart

The theme now ships as its own Docker image in a registry of your choice, including private ones. Set a few values in the Helm values file, enable the theme, and sync the changes. New pods are spawned with a theme sidecar that copies the assets into the OpenCloud container before it starts. After the reload the web UI is branded.

Enterprise documentation describes how to build such an image and where to put it. Building one takes a few minutes. Themes exported by the console need a search and replace in the JSON file for now, because they already target the upcoming console service.

## 🔄 Automated search index migration through Helm hooks

Version 5 was the first release that required a change to the search index on upgrade. The chart now handles this automatically:

- **Pre-upgrade hook:** checks whether the OpenSearch index mapping needs to change and builds the new index.
- **Pod update:** the pods are rolled to the new version.
- **Post-upgrade hook:** triggers the rescan and index update for all spaces.

Admins do not have to run anything by hand. Tested live on an upgrade from OpenCloud 4.0.8 with chart 0.4.1.

Limitation: while a real index update runs, the instance is currently forced down. Avoiding that requires changes in OpenCloud itself.

The generic part matters beyond this case. The charts now have a mechanism to catch and automate breaking changes through pre- and post-upgrade hooks.



### ❤️ Thanks to all contributors! ❤️

@butonic, @dschmidt, @fredrikblau, @fschade, @maki5, @pbleser-oc, @rhafer, @saw-jan, @sigurdvaa, @v-scharf, @zerox80

### 💥 Breaking changes

- fix(search): hierarchy tokenizer for bleve path fields [[#3510](https://github.com/opencloud-eu/opencloud/pull/3510)]
- feat(search): check the index schema on startup and refuse breaking changes [[#3197](https://github.com/opencloud-eu/opencloud/pull/3197)]
- refactor: reflection-based search mapping + location geopoint [[#3345](https://github.com/opencloud-eu/opencloud/pull/3345)]
- fix(search): make openSearch and bleve behave the same [[#3408](https://github.com/opencloud-eu/opencloud/pull/3408)]

### ✅ Tests

- api-test: retry token refresh on transient IDP failures [[#3507](https://github.com/opencloud-eu/opencloud/pull/3507)]
- fix(test): removeAccessToSpace test helper [[#3511](https://github.com/opencloud-eu/opencloud/pull/3511)]
- api-tests: add search retry to all search tests [[#3500](https://github.com/opencloud-eu/opencloud/pull/3500)]
- test(search): fail the parity suite when the committed matrix is stale [[#3423](https://github.com/opencloud-eu/opencloud/pull/3423)]
- ci: run search API and e2e suites against OpenSearch [[#3379](https://github.com/opencloud-eu/opencloud/pull/3379)]
- test(search): engine parity suite for bleve and opensearch [[#3418](https://github.com/opencloud-eu/opencloud/pull/3418)]

### 📈 Enhancement

- add insecure to search reindex [[#3505](https://github.com/opencloud-eu/opencloud/pull/3505)]
- feat(graph): expand thumbnails on driveItems [[#3471](https://github.com/opencloud-eu/opencloud/pull/3471)]
- graph: expose lockInfo on driveItems [[#3444](https://github.com/opencloud-eu/opencloud/pull/3444)]
- graph: expose @libre.graph.shareTypes on driveItems [[#3438](https://github.com/opencloud-eu/opencloud/pull/3438)]
- feat(search): live photo facet [[#3202](https://github.com/opencloud-eu/opencloud/pull/3202)]
- feat: support $expand=children on the driveItem endpoint [[#3445](https://github.com/opencloud-eu/opencloud/pull/3445)]
- feat(search): motion photo facet [[#3200](https://github.com/opencloud-eu/opencloud/pull/3200)]
- feat(search): video facet [[#3201](https://github.com/opencloud-eu/opencloud/pull/3201)]
- graph: expose pendingOperations on driveItems [[#3437](https://github.com/opencloud-eu/opencloud/pull/3437)]
- feat(search): extract more data from tika 4 (if available) [[#3198](https://github.com/opencloud-eu/opencloud/pull/3198)]
- graph: expose following state, tags and allowed actions on driveItems [[#3113](https://github.com/opencloud-eu/opencloud/pull/3113)]
- feat(search): scope searches to a drive via the driveId field [[#3424](https://github.com/opencloud-eu/opencloud/pull/3424)]
- chore(policies): disable gRPC or event handlers by configuration + add metrics [[#3287](https://github.com/opencloud-eu/opencloud/pull/3287)]
- moved ShareCreated event consumer from frontend to shared service [[#3389](https://github.com/opencloud-eu/opencloud/pull/3389)]

### 🐛 Bug Fixes

- fix(search): extract facets from the main tika document only [[#3484](https://github.com/opencloud-eu/opencloud/pull/3484)]
- fix(thumbnails): bound declared image dimensions before decoding [[#3457](https://github.com/opencloud-eu/opencloud/pull/3457)]
- test(search): re-search until the expected files are in the result [[#3488](https://github.com/opencloud-eu/opencloud/pull/3488)]
- fix(config): correct pending version annotations [[#3487](https://github.com/opencloud-eu/opencloud/pull/3487)]
- Activitylog event handler split [[#3241](https://github.com/opencloud-eu/opencloud/pull/3241)]
- test(search): wait for expected properties and documents [[#3486](https://github.com/opencloud-eu/opencloud/pull/3486)]
- fix: log jwt expired on debug level instead of error [[#3463](https://github.com/opencloud-eu/opencloud/pull/3463)]
- fix(proxy): restrict JWT signed urls to the allowed HTTP methods [[#3481](https://github.com/opencloud-eu/opencloud/pull/3481)]
- fix: notification handling for share removal and space membership expiry  [[#3257](https://github.com/opencloud-eu/opencloud/pull/3257)]
- fix: posix cli commands [[#3348](https://github.com/opencloud-eu/opencloud/pull/3348)]

## [Web 8.0.0](https://github.com/opencloud-eu/web/releases/tag/v8.0.0)

### ❤️ Thanks to all contributors! ❤️

@AlexAndBear, @JammingBen, @dschmidt, @fredrikblau, @fschade, @kulmann, @saw-jan, @tammi-23, @v-scharf

### 💥 Breaking changes (for devs)

#### General

- `sentry` config option has been removed
- `oAuth2` config option has been removed

#### `@opencloud-eu/web-pkg`

**Renamed or moved functionality**

- `useFileActionsSaveAs`: use `useFileActionsSave`
- `useFileActionsNavigate`: get from extension system
- `useSpaceActionsCreate`: get from extension system
- `useFileActionFallbackToDownload`: get from extension system
- `useFileActionsDownloadFile`: get from extension system
- `useFileActionsDeleteResources`: get from extension system
- `useFileActionsDelete`: get from extension system
- `useFileActionsRestore`: get from extension system
- `useFileActionsUndoDelete`: get from extension system
- `VisiblityObserver`: use `useIsVisible` from design-system
- `useFilterHighlight` and `mark.js`: use `FilterHighlight` from design-system
- `ImageDimension`: `Tile` has been removed, use `previewDimensions` of `useTileSize`

**Removed functionality**

- `useActionsShowDetails`
- `useOpenEmptyEditor`
- `useIsSearchActive`

**Changed signatures**

- `ConfigStore`: `sentry` has been removed
- `Action`: `img` has been removed
- `Action`: `keepOpen` has been removed
- `AuthServiceInterface.handleAuthError`: the `options` argument has been removed
- `ConfigStore`: `isOIDC` has been removed, it was always `true`
- `ConfigStore`: `isOAuth2` has been removed, it was always `false`
- `ConfigStore`: `oAuth2` has been removed
- `RawConfig`: `auth` has been removed
- `OAuth2Config` type has been removed

#### `@opencloud-eu/design-system`

- `useIsVisible`: the `root` prop is mandatory now

#### `PRs`

- refactor!: useSpaceActionsCreate to files app [[#3303](https://github.com/opencloud-eu/web/pull/3303)]
- refactor!: put save actions into one composable [[#3299](https://github.com/opencloud-eu/web/pull/3299)]
- refactor!: move more file actions from web-pkg [[#3296](https://github.com/opencloud-eu/web/pull/3296)]
- perf!: one shared intersection observer [[#3281](https://github.com/opencloud-eu/web/pull/3281)]
- fix(design-system): useIsVisible observer look-ahead [[#3210](https://github.com/opencloud-eu/web/pull/3210)]
- chore!: remove @sentry/vue [[#3258](https://github.com/opencloud-eu/web/pull/3258)]
- refactor!: drop mark.js [[#3253](https://github.com/opencloud-eu/web/pull/3253)]

### 🔒 Security

- chore(deps): bump @xmldom/xmldom to 0.9.12 [[#3350](https://github.com/opencloud-eu/web/pull/3350)]

### 📈 Enhancement

- feat: add tooltip for fab when creating spaces is disabled [[#3364](https://github.com/opencloud-eu/web/pull/3364)]
- feat(runtime): sync auto theme with system preference changes [[#3363](https://github.com/opencloud-eu/web/pull/3363)]
- feat(editor): show users in active yjs session [[#3345](https://github.com/opencloud-eu/web/pull/3345)]
- feat(editor): rework toolbar [[#3336](https://github.com/opencloud-eu/web/pull/3336)]
- feat: motion photo support [[#2819](https://github.com/opencloud-eu/web/pull/2819)]
- feat: add mention users for TipTap [[#3060](https://github.com/opencloud-eu/web/pull/3060)]
- feat: improve shares navigation, checkbox contrast, search drop [[#3290](https://github.com/opencloud-eu/web/pull/3290)]
- feat(web-pkg): support markdown YAML frontmatter in the text editor [[#3272](https://github.com/opencloud-eu/web/pull/3272)]
- Harden yjs container readiness and shutdown behavior [[#3247](https://github.com/opencloud-eu/web/pull/3247)]
- feat(yjs): improve handling of external file conflicts [[#3246](https://github.com/opencloud-eu/web/pull/3246)]
- Isolate Yjs rooms by web version [[#3243](https://github.com/opencloud-eu/web/pull/3243)]
- feat: redesign secret file drop [[#3238](https://github.com/opencloud-eu/web/pull/3238)]
- feat(text-editor): show collaboration-ready indicator in toolbar [[#3235](https://github.com/opencloud-eu/web/pull/3235)]
- feat: redesign plain layout pages [[#3232](https://github.com/opencloud-eu/web/pull/3232)]
- Disable collaboration for vault files [[#3234](https://github.com/opencloud-eu/web/pull/3234)]
- Add basic print action to text editor toolbar [[#3215](https://github.com/opencloud-eu/web/pull/3215)]

### 🐛 Bug Fixes

- fix (tiptap): enhance mobile toolbar actions [[#3353](https://github.com/opencloud-eu/web/pull/3353)]
- fix: validate shortcut filename when URL is pasted [[#3356](https://github.com/opencloud-eu/web/pull/3356)]
- fix (tiptap): equalize collaborator avatar and indicator icon size [[#3355](https://github.com/opencloud-eu/web/pull/3355)]
- fix (tiptap): toolbar spacing [[#3354](https://github.com/opencloud-eu/web/pull/3354)]
- fix: restore redo for collaborative text editor [[#3360](https://github.com/opencloud-eu/web/pull/3360)]
- fix(yjs): let the server decide who seeds an empty room [[#3331](https://github.com/opencloud-eu/web/pull/3331)]
- fix(preview): re-fetch signed URL when video playback fails [[#3340](https://github.com/opencloud-eu/web/pull/3340)]
- fix: add emoji slash entry and tighten emoji picker modal width [[#3310](https://github.com/opencloud-eu/web/pull/3310)]
- fix: stop re-fetching resources in AppWrapper on every context change [[#3324](https://github.com/opencloud-eu/web/pull/3324)]
- fix: defer sidebar actions until resource loads [[#3312](https://github.com/opencloud-eu/web/pull/3312)]
- Editor: Add Default font-size reset and simplify zoom styling [[#3304](https://github.com/opencloud-eu/web/pull/3304)]
- fix: send mtime metadata for public link uploads [[#3322](https://github.com/opencloud-eu/web/pull/3322)]
- fix: prevent browser login dialog on upload [[#3308](https://github.com/opencloud-eu/web/pull/3308)]
- fix: new button flickering during navigation [[#3293](https://github.com/opencloud-eu/web/pull/3293)]
- fix: table header position overflow [[#3288](https://github.com/opencloud-eu/web/pull/3288)]
- fix(yjs): report why a handshake was refused and keep editing locally [[#3270](https://github.com/opencloud-eu/web/pull/3270)]
- fix: safari file list performance [[#3283](https://github.com/opencloud-eu/web/pull/3283)]
- fix: remove system actions from getAllOpenWithActions [[#3254](https://github.com/opencloud-eu/web/pull/3254)]
- fix: remove pasted text/background colors in Tiptap editor [[#3275](https://github.com/opencloud-eu/web/pull/3275)]
- Hide duplicate 'Insert from cloud' action in text editor toolbar [[#3274](https://github.com/opencloud-eu/web/pull/3274)]
- fix: show trash breadcrumb with one space [[#3271](https://github.com/opencloud-eu/web/pull/3271)]
- Fix default Open action for .url files and add Text Editor support [[#3266](https://github.com/opencloud-eu/web/pull/3266)]
- fix: bound space file ID matching [[#3262](https://github.com/opencloud-eu/web/pull/3262)]
- fix: preserve lazy tile height [[#3264](https://github.com/opencloud-eu/web/pull/3264)]
- fix: share the tooltip escape listener [[#3261](https://github.com/opencloud-eu/web/pull/3261)]
- Fix chapter updates for fast EPUB slider seeks [[#3267](https://github.com/opencloud-eu/web/pull/3267)]
- Persist selected language for plain layout pages [[#3244](https://github.com/opencloud-eu/web/pull/3244)]
- fix(preview): reload thumbnails when preview profile changes [[#3230](https://github.com/opencloud-eu/web/pull/3230)]
- Show cloud image insert action in slash command menu [[#3225](https://github.com/opencloud-eu/web/pull/3225)]

## Reva [Reva 2.50.0](https://github.com/opencloud-eu/reva/releases/edit/v2.50.0)

@dschmidt, @maki5, @rhafer

### ✨ Features

- Add support for mail grantees [[#785](https://github.com/opencloud-eu/reva/pull/785)]

### 🐛 Bug Fixes

- feat(auth): cache Argon2 hash calculations [[#793](https://github.com/opencloud-eu/reva/pull/793)]
- fix(decomposedfs): write arbitrary metadata in one go [[#791](https://github.com/opencloud-eu/reva/pull/791)]

### ✅ Tests

- fix(jsoncs3): wait for init before asserting the migration timeout [[#792](https://github.com/opencloud-eu/reva/pull/792)]

### 📈 Enhancement

- feat(ocdav): expose the video, motionPhoto and livePhoto facets [[#790](https://github.com/opencloud-eu/reva/pull/790)]
- mime: map the Nikon NRW raw extension [[#773](https://github.com/opencloud-eu/reva/pull/773)]
- enhancement(shares/jsoncs3): Shortcut migration on fresh system [[#787](https://github.com/opencloud-eu/reva/pull/787)]
