> [!IMPORTANT]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Release Notes OpenCloud 7.5.0

## 🔐 E2EE - End to end encrypted vaults for folders and spaces

You can now create a vault, which is a single folder or a whole space where all files are encrypted. The encryption happens in your browser before the data reaches the server. File names are encrypted as well. The server never gets the key, so nobody with access to the server can read the content.

To create one, open "New", then "Folder", turn on the switch "end to end encrypt this folder" and set a passphrase. The folder gets a lock icon. When you open it you enter the passphrase once, and the vault stays unlocked for the current browser session. The passphrase is not stored anywhere.

Vaults are built on rclone crypt and are fully compatible with it. A folder that you encrypted locally with the rclone command line can be uploaded and opened in OpenCloud, and a vault that was synced to your computer can be mounted with rclone. Your data stays readable with a free standard tool, also without OpenCloud.

There are limits, because the server cannot read the files. Collabora and collaborative editing do not work inside a vault. Thumbnails are not shown in the file list, but you can still open images in the preview app. You cannot share single files out of a vault, only the vault itself. Encrypted spaces have no space image and no description yet.

There is no passphrase recovery. If you lose the passphrase, the content is lost. Please use a password manager.

## 📖 EPUB reader

The reader has a fullscreen mode, full text search inside the book, and search inside the table of contents. Search results are highlighted and take you to the right position. The table of contents now highlights the chapter you are reading. An EPUB has no fixed pages, because the number of pages changes with the font size, so you navigate with a position slider.

On small screens the content width now adapts to the screen. Before that the text stayed too wide and reading on a phone was not practical. When the arrows on the left and right are hidden, navigation stays available at the top, and the chapter list opens as a drawer from the bottom. You can read and search a book, a manual or a standard directly in OpenCloud on a phone, without a download and without installing an app.

## Editor Improvements

### 📊 Tables in the editor

You can insert a table with the number of rows and columns that you need, instead of always starting with 3x3. When the cursor is inside a table, a small menu appears at the table. It lets you add a row above or below, add a column left or right, delete the current row or column, and delete the whole table. You can also switch the header row on and off. If you deleted the header row before, the only way back was to edit the raw file by hand. Documents with tables can now be finished in OpenCloud without opening another program.

### 🖇️ Insert an image from your cloud

"Insert image" has a third option next to "from file" and "from URL": you can pick an image that is already in your OpenCloud. You no longer have to download an image and upload it again to use it in a document.

### 🔍 Find and replace

The editor has find and replace. There are options for match case and whole words.

### 📝 New rich text format .ocnote

Markdown has no syntax for text color, background color, line spacing, subscript and superscript, so these buttons cannot be offered for a .md file. OpenCloud now has its own rich text format with the extension .ocnote, which supports them. The editor also got subscript and superscript, which is enough for footnote marks, units and simple formulas.

An .ocnote file is a normal text based json-file in your own storage. It syncs, you can share it, and search finds it, like any other file. You can write a short formatted text or a note without starting a big office application first. .ocnote follows the tiptap json format.

## ▶️ Media controls in the preview app

The playback controls were reworked. The actions are grouped by function now and separated visually, so it is easier to see what belongs together.

## 🖌️ SVG files in the preview app

SVG files are now displayed in the preview app. They are loaded in the browser and go through a sanitizer first, so script code inside an SVG cannot run. Two limits: SVG files do not show up in the photo roll, and unusual SVG files, for example files with an embedded bitmap, may not render.

## ⭐ Filters in the favorites view

The favorites view now filters like in the search results page. You can filter by type, for example folders or documents, and by last modified, for example last 7 days or last year.

## 🎨 Smaller space header

The space header with image, name and description uses less height, so more files are visible without scrolling. You can still expand it, and long descriptions are still fully readable with "show more".

## 🗂️ More file type icons

There are icons for more file types now, including .drawio, .ifc, .odg, .oform and .root.

--

## OpenCloud [7.5.0](https://github.com/opencloud-eu/opencloud/releases/tag/v7.5.0) - 2026-08-25

### ❤️ Thanks to all contributors! ❤️

@AlexAndBear, @JammingBen, @Svanvith, @aduffeck, @butonic, @fschade, @junkerderprovinz, @kulmann, @maki5, @pbleser-oc, @rhafer, @saw-jan, @schweigisito, @v-scharf

### ✅ Tests

- test(api): update php test dependencies [[#3335](https://github.com/opencloud-eu/opencloud/pull/3335)]
- fix(acceptance): fix running acceptance tests against host on Linux [[#3358](https://github.com/opencloud-eu/opencloud/pull/3358)]
- fix(graph): adding the same user as multiple members in a group (#3354) [[#3356](https://github.com/opencloud-eu/opencloud/pull/3356)]
- test(api): fix share role update test scenario [[#3322](https://github.com/opencloud-eu/opencloud/pull/3322)]
- test: add api tests for cross-space search index mutation [[#3320](https://github.com/opencloud-eu/opencloud/pull/3320)]
- ci: run search acceptance tests against OpenSearch in nightly [[#3302](https://github.com/opencloud-eu/opencloud/pull/3302)]
- api-test: notification settings and getting email notifications [[#3281](https://github.com/opencloud-eu/opencloud/pull/3281)]
- api-test: add posixfs scan and consistency CLI tests [[#3263](https://github.com/opencloud-eu/opencloud/pull/3263)]
- api-test: replace sleeps with WaitHelper poll for async state [[#3239](https://github.com/opencloud-eu/opencloud/pull/3239)]

### 📈 Enhancement

- feat(thumbnails): extend list of default resolutions [[#3386](https://github.com/opencloud-eu/opencloud/pull/3386)]
- ability to disable grpc and/or event consumer for event history service [[#3279](https://github.com/opencloud-eu/opencloud/pull/3279)]
- feat(graph): add LibreGraphContentType on drive [[#3355](https://github.com/opencloud-eu/opencloud/pull/3355)]
- feat: update space template image [[#3324](https://github.com/opencloud-eu/opencloud/pull/3324)]
- feat(web): add rclone-crypt to default apps [[#3313](https://github.com/opencloud-eu/opencloud/pull/3313)]
- enhance: send events for adding/removing favourite items [[#3229](https://github.com/opencloud-eu/opencloud/pull/3229)]
- allow tuning the proxies http client [[#3278](https://github.com/opencloud-eu/opencloud/pull/3278)]
- feat(web): add yjsServerUrl config [[#3259](https://github.com/opencloud-eu/opencloud/pull/3259)]
- feat(posixfs): #3182 add basepath option in the "posixfs scan" command [[#3235](https://github.com/opencloud-eu/opencloud/pull/3235)]

### 🐛 Bug Fixes

- fix(search): refresh the opensearch index after a write [[#3388](https://github.com/opencloud-eu/opencloud/pull/3388)]
- fix(thumbnails): respect the requested height in libvips builds [[#3377](https://github.com/opencloud-eu/opencloud/pull/3377)]
- refactor datagateway into proxy middleware [[#3289](https://github.com/opencloud-eu/opencloud/pull/3289)]
- Only log a debug message when an item is still in processing state [[#3158](https://github.com/opencloud-eu/opencloud/pull/3158)]
- fix(postprocessing): retry publishing events instead of killing the server [[#3347](https://github.com/opencloud-eu/opencloud/pull/3347)]
- actually log error on exit [[#3344](https://github.com/opencloud-eu/opencloud/pull/3344)]
- fix(activitylog): log missing parent id cache entry at debug level [[#3325](https://github.com/opencloud-eu/opencloud/pull/3325)]
- fix restore file version for shared resource [[#3268](https://github.com/opencloud-eu/opencloud/pull/3268)]
- Fix missing favorite flag on opensearch hits [[#3252](https://github.com/opencloud-eu/opencloud/pull/3252)]

### 📚 Documentation

- docs: clarify custom role bootstrap behavior [[#3366](https://github.com/opencloud-eu/opencloud/pull/3366)]

## Web 7.4.0

### 📈 Enhancement

- enhance code block language picker [[#3214](https://github.com/opencloud-eu/web/pull/3214)]
- perf: preview cache optimizations [[#3194](https://github.com/opencloud-eu/web/pull/3194)]
- perf: decode thumbnails asynchronously [[#3204](https://github.com/opencloud-eu/web/pull/3204)]
- feat: add accessibility hint for code block exit [[#3209](https://github.com/opencloud-eu/web/pull/3209)]
- feat(epub-reader): improve chapter resolution and progress slider UX [[#3201](https://github.com/opencloud-eu/web/pull/3201)]
- Tip tap code block tab indetation [[#3208](https://github.com/opencloud-eu/web/pull/3208)]
- feat(editor): add lowlight code blocks [[#3199](https://github.com/opencloud-eu/web/pull/3199)]
- feat: add notebook assets [[#3200](https://github.com/opencloud-eu/web/pull/3200)]
- perf: drop queued previews leaving the viewport [[#3198](https://github.com/opencloud-eu/web/pull/3198)]
- perf: dynamic tile preview dimensions [[#3192](https://github.com/opencloud-eu/web/pull/3192)]
- feat(web-pkg): move text align into toolbar submenu [[#3196](https://github.com/opencloud-eu/web/pull/3196)]
- feat(web-pkg): add text align support to tiptap-json strategy [[#3195](https://github.com/opencloud-eu/web/pull/3195)]
- feat(web-runtime): add sponsor emoji transition on hover [[#3191](https://github.com/opencloud-eu/web/pull/3191)]
- Rename extensions to apps in admin and account settings [[#3190](https://github.com/opencloud-eu/web/pull/3190)]
- perf: introduce cache for active location checks [[#3182](https://github.com/opencloud-eu/web/pull/3182)]
- feat: make space header more compact [[#3173](https://github.com/opencloud-eu/web/pull/3173)]
- perf: remove location checks from resource actions [[#3177](https://github.com/opencloud-eu/web/pull/3177)]
- Wire ocnote to tiptap-json and add Note new-file entry [[#3175](https://github.com/opencloud-eu/web/pull/3175)]
- feat: e2ee vault spaces [[#3115](https://github.com/opencloud-eu/web/pull/3115)]
- add sanitized SVG rendering in preview app [[#3144](https://github.com/opencloud-eu/web/pull/3144)]
- feat: update default space icon [[#3146](https://github.com/opencloud-eu/web/pull/3146)]
- feat: enhance preview media controls layout and migrate to bubble menu [[#3138](https://github.com/opencloud-eu/web/pull/3138)]
- feat: move bubble menu styling to design system [[#3134](https://github.com/opencloud-eu/web/pull/3134)]
- feat(web-pkg): optional unload warning for loading tasks [[#3135](https://github.com/opencloud-eu/web/pull/3135)]
- feat: add filters to favorites view [[#3087](https://github.com/opencloud-eu/web/pull/3087)]
- feat: modernize ebup reader [[#3088](https://github.com/opencloud-eu/web/pull/3088)]
- feat(yjs): collaborative editing framework [[#2785](https://github.com/opencloud-eu/web/pull/2785)]
- feat: update more resource icons [[#2898](https://github.com/opencloud-eu/web/pull/2898)]
- feat: add subscript and superscript support to text editor [[#3068](https://github.com/opencloud-eu/web/pull/3068)]
- feat: enhance text editor table functionality with custom size picker and toggle header action [[#3063](https://github.com/opencloud-eu/web/pull/3063)]
- feat: rework vault setup process [[#3031](https://github.com/opencloud-eu/web/pull/3031)]
- feat(tiptap): add insert image from cloud [[#3024](https://github.com/opencloud-eu/web/pull/3024)]
- enhance: listen on favourite events [[#3019](https://github.com/opencloud-eu/web/pull/3019)]
- feat(vault): use integrity id as passphrase verifier [[#3018](https://github.com/opencloud-eu/web/pull/3018)]
- feat(tiptap): add find and replace [[#3015](https://github.com/opencloud-eu/web/pull/3015)]
- feat(tiptap): add inline table actions toolbar [[#2997](https://github.com/opencloud-eu/web/pull/2997)]

### 🐛 Bug Fixes

- fix: improve code block visibility in dark mode [[#3213](https://github.com/opencloud-eu/web/pull/3213)]
- fix(epub-reader): select first chapter when opening EPUB for the first time [[#3212](https://github.com/opencloud-eu/web/pull/3212)]
- fix(web-pkg): improve text editor action-group consistency [[#3197](https://github.com/opencloud-eu/web/pull/3197)]
- fix(design-system): avoid duplicated SVG ids [[#3157](https://github.com/opencloud-eu/web/pull/3157)]
- Fix empty right sidebar when opening space context menu [[#3153](https://github.com/opencloud-eu/web/pull/3153)]
- fix: improve media controls layout stability [[#3145](https://github.com/opencloud-eu/web/pull/3145)]
- fix: only mark shares nav item active on shares routes [[#3148](https://github.com/opencloud-eu/web/pull/3148)]
- fix: render action buttons in move/copy dialogs [[#3147](https://github.com/opencloud-eu/web/pull/3147)]
- fix: remove delay for vault password error message [[#3140](https://github.com/opencloud-eu/web/pull/3140)]
- fix(extension-sdk): ignore module federation temp files in the dev watcher [[#3136](https://github.com/opencloud-eu/web/pull/3136)]
- fix(files): guard FileDetails against transient null resource [[#3098](https://github.com/opencloud-eu/web/pull/3098)]
- fix: make ESC app close behave like top-bar close [[#3094](https://github.com/opencloud-eu/web/pull/3094)]
- fix: add cache-buster for provided images [[#3082](https://github.com/opencloud-eu/web/pull/3082)]
- fix:  let the drop flip again after its content grew [[#3077](https://github.com/opencloud-eu/web/pull/3077)]
- fix: encode hash character in app route URLs to prevent truncation [[#3075](https://github.com/opencloud-eu/web/pull/3075)]
- fix(admin-settings): opening user sidebar panels  [[#3067](https://github.com/opencloud-eu/web/pull/3067)]
- fix: position versions loading spinner without shifting the details layout [[#3065](https://github.com/opencloud-eu/web/pull/3065)]
- correct resource id in restore file version link [[#3053](https://github.com/opencloud-eu/web/pull/3053)]
- fix: reset shift selection anchor when deselecting all files [[#3061](https://github.com/opencloud-eu/web/pull/3061)]
- fix: keep the file details panel stable while loading [[#3057](https://github.com/opencloud-eu/web/pull/3057)]
- fix: white flash on page relaod when dark theme is applied [[#3055](https://github.com/opencloud-eu/web/pull/3055)]
- fix(web-pkg): keep sidebar panels mounted while loading [[#3056](https://github.com/opencloud-eu/web/pull/3056)]
- fix(tip tap): don't show drag handle on mobile as it's not compatible [[#3052](https://github.com/opencloud-eu/web/pull/3052)]
- fix(sort): explorer-like ordering for leading-zero prefixes [[#3047](https://github.com/opencloud-eu/web/pull/3047)]
- fix (tiptap): slash menu is lacking hover state [[#3035](https://github.com/opencloud-eu/web/pull/3035)]
- fix: improve file sorting to handle duplicates with extensions correctly [[#3046](https://github.com/opencloud-eu/web/pull/3046)]
- fix: autofocus public link pasword input [[#3034](https://github.com/opencloud-eu/web/pull/3034)]
- fix(tip tap): drag handle overflows narrow editors (e.G announcement banner) [[#3030](https://github.com/opencloud-eu/web/pull/3030)]
- fix: keep slash menu open when returning to command [[#3017](https://github.com/opencloud-eu/web/pull/3017)]
- fix: prevent closing editor from slash menu [[#3020](https://github.com/opencloud-eu/web/pull/3020)]

## Reva 2.49.0

### 🐛 Bug Fixes

- fix: CleanupStaleShares to not silently skip errors and migrations waiting [[#775](https://github.com/opencloud-eu/reva/pull/775)]
- Set proper upload status if an upload ends at antivirus [[#779](https://github.com/opencloud-eu/reva/pull/779)]
- Use a time.Duration for the ttl config for consistency [[#777](https://github.com/opencloud-eu/reva/pull/777)]
- fix key propagation in for shared resources when restoring version [[#761](https://github.com/opencloud-eu/reva/pull/761)]

### 📈 Enhancement

- make datagateway optional in events [[#778](https://github.com/opencloud-eu/reva/pull/778)]
- feat: add contentType on space [[#770](https://github.com/opencloud-eu/reva/pull/770)]
- Extend upload sessions to hold more explicit state information [[#764](https://github.com/opencloud-eu/reva/pull/764)]
- expose Nak & Term in raw event interface [[#768](https://github.com/opencloud-eu/reva/pull/768)]