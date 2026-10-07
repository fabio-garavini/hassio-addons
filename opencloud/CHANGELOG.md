> [!IMPORTANT]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

## [8.1.0](https://github.com/opencloud-eu/opencloud/releases/tag/v8.1.0) - 2026-10-05

# Highlights

## 🎨 Excalidraw: draw together on a whiteboard

OpenCloud gets a collaborative whiteboard. The Excalidraw app started as a proof of concept and now ships as a web extension.

- **Create and open:** create a new whiteboard file from the "New" menu and open it like any other file.
- **Draw together:** share the file, and everyone in the session sees every stroke instantly.
- **Follow a collaborator:** click their avatar to follow their cursor across the canvas.
- **Same backend as the editor:** syncing runs through the OpenCloud Yjs service introduced in 8.0.0.

## 🚀 Web UI loads 40% faster

**First content appears 40% sooner** (1.5 s → 0.9 s), the full page 35% sooner (2.0 s → 1.3 s). The Lighthouse score goes from 85 to 96. Nothing was removed, the web UI just loads less, and later.

- **Fonts:** only the weights we use, split by Unicode range. The preloaded Latin subset is 7x smaller (337.5 KB → 48.5 KB). Other scripts such as Cyrillic or Greek load on demand.
- **Translations:** only the selected language is loaded, for German 12x less (419 KB → 34 KB). English needs no download.
- **Chunking:** smaller JavaScript chunks that load in parallel or later.

## 🏗️ Create a space in one step

The "New space" dialog has an **Options** button, just like the public link dialog:

- **Customization:** image or emoji, subtitle, description, header.
- **Advanced options:** quota and members.

If you don't open the options, the dialog stays as simple as before.

## 📝 Editor

- **Table of contents:** for Markdown and `.ocnote`. It follows your scroll position, jumps to a heading on click and updates live.
- **Markdown copy &amp; paste:** pasted Markdown is rendered. Copied content carries both HTML and Markdown, so GitHub issues and other plain text targets get the Markdown source. Community reported.
- **External changes:** if a file is changed on the server while it is open, for example by a desktop client sync, all participants get a conflict notification right away. You can "Save as" or reload.
- **Code blocks with syntax highlighting:** insert a code block from the "Turn into" menu or with `/`. The language is detected automatically, or you pick it from the list. Tab inserts spaces, and pressing Enter three times leaves the block. Screen readers announce the shortcut. The YAML frontmatter uses the same highlighting.
- **Mobile:** a slider picks the table size on mobile.

## 🧭 Consistent web UI

- **Right sidebar:** one look across the Files app and the admin settings.
- **Activities and versions:** a calmer timeline that fits many more versions on one screen. Community feedback.
- **Tiles:** a larger click area for selecting a tile.
- **Sorting:** folders always stay above files, in both directions.
- **Spaces:** appearance settings are grouped under "Customize" in the context menu.
- **Account pages:** two-column layout.
- **Vaults:** the breadcrumb shows the vault icon in every subfolder.

## 👥 Admin settings

- **Search:** by user name and email, not only by first and last name.
- **Users:** the quota shows used space. User and group edit panels are redesigned, and "Login allowed" is a toggle.


### ❤️ Thanks to all contributors! ❤️

@NickWalters, @aduffeck, @butonic, @dschmidt, @fschade, @maki5, @micbar, @pascalwengerter, @pbleser-oc, @rhafer, @saw-jan, @schweigisito, @v-scharf, @zerox80, @AlexAndBear, @JammingBen, @flimmy, @fredrikblau, @kulmann, @tammi-23, @pReya

## Opencloud

### 🔒 Security

- feat(proxy): add optional OIDC access token audience validation [[#3466](https://github.com/opencloud-eu/opencloud/pull/3466)]

### 🐛 Bug Fixes

- Reindex disabled spaces once they get enabled again [[#3579](https://github.com/opencloud-eu/opencloud/pull/3579)]
- fix(search): tika key fixes [[#3651](https://github.com/opencloud-eu/opencloud/pull/3651)]
- fix(search): keep trashed and live folders at the same path apart [[#3602](https://github.com/opencloud-eu/opencloud/pull/3602)]
- Fix/uploads cli no async consumer [[#3603](https://github.com/opencloud-eu/opencloud/pull/3603)]
- Remove the timeout when reindexing spaces [[#3543](https://github.com/opencloud-eu/opencloud/pull/3543)]
- fix(shares): not auto accepting shares created by guest users [[#3533](https://github.com/opencloud-eu/opencloud/pull/3533)]
- fix(graph): fix PatchMe method to prevent password change [[#3526](https://github.com/opencloud-eu/opencloud/pull/3526)]

### 📈 Enhancement

- feat: add new editor roles [[#3637](https://github.com/opencloud-eu/opencloud/pull/3637)]
- feat(collaboration): let admins disable wopi extensions [[#3633](https://github.com/opencloud-eu/opencloud/pull/3633)]
- fix(collaboration): send LastModifiedTime and the EuroOffice file size [[#3636](https://github.com/opencloud-eu/opencloud/pull/3636)]
- feat(collaboration): mobile web view for EuroOffice [[#3635](https://github.com/opencloud-eu/opencloud/pull/3635)]
- fix(collaboration): harden wopi token handling [[#3630](https://github.com/opencloud-eu/opencloud/pull/3630)]
- add posixfs index command [[#3068](https://github.com/opencloud-eu/opencloud/pull/3068)]
- feat(proxy): add per-service metrics to the proxy service [[#3521](https://github.com/opencloud-eu/opencloud/pull/3521)]

### ✅ Tests

- fix(search): ellipsize parity matrix labels by runes, not bytes [[#3643](https://github.com/opencloud-eu/opencloud/pull/3643)]
- fix(collaboration): mint the mobile view test token with the token manager secret [[#3647](https://github.com/opencloud-eu/opencloud/pull/3647)]
- run cli tests with decomposed nightly [[#3580](https://github.com/opencloud-eu/opencloud/pull/3580)]
-  [decomposed] test(api): remove passing notification tests from expected failure [[#3555](https://github.com/opencloud-eu/opencloud/pull/3555)]
- api-test: add CLI test for reindexing all spaces including disabled [[#3560](https://github.com/opencloud-eu/opencloud/pull/3560)]

### 📚 Documentation

- [SKIP CI] fix: add file_read documentation to audit log docu [[#3503](https://github.com/opencloud-eu/opencloud/pull/3503)]

## Web

### 🐛 Bug Fixes

- fix(web-pkg): paste text/plain in plain text editor to keep markdown syntax [[#3526](https://github.com/opencloud-eu/web/pull/3526)]
- fix(web-pkg): embed pasted images in rich text editors [[#3527](https://github.com/opencloud-eu/web/pull/3527)]
- fix(design-system): don't break icons if process is not defined [[#3525](https://github.com/opencloud-eu/web/pull/3525)]
- fix(web-pkg): show resource table columns if any resource has the field [[#3512](https://github.com/opencloud-eu/web/pull/3512)]
- fix: load indirect shares in editors [[#3313](https://github.com/opencloud-eu/web/pull/3313)]
- fix: make current breadcrumb item clickable on mobile [[#3476](https://github.com/opencloud-eu/web/pull/3476)]
- fix(yjs): let the server grant stale recovery to one client [[#3433](https://github.com/opencloud-eu/web/pull/3433)]
- fix: reload favorites and shares when clicking the current breadcrumb or shares tab [[#3477](https://github.com/opencloud-eu/web/pull/3477)]
- fix: select only the clicked space when opening admin space details [[#3487](https://github.com/opencloud-eu/web/pull/3487)]
- fix: show space quota progress bar background in sidebar [[#3491](https://github.com/opencloud-eu/web/pull/3491)]
- fix: move rename action below download in context menu [[#3485](https://github.com/opencloud-eu/web/pull/3485)]
- fix: use full width search inputs on mobile screens [[#3474](https://github.com/opencloud-eu/web/pull/3474)]
- fix: respect file extension setting and validate file name in save as dialog [[#3468](https://github.com/opencloud-eu/web/pull/3468)]
- fix: shift-click multi select in favorites, shares and trash views [[#3472](https://github.com/opencloud-eu/web/pull/3472)]
- fix: prevent truncated resource names from overflowing into adjacent elements [[#3469](https://github.com/opencloud-eu/web/pull/3469)]
- fix: hide announcement banner in embed mode [[#3467](https://github.com/opencloud-eu/web/pull/3467)]
- fix(files): apply the picked member role when creating a space [[#3459](https://github.com/opencloud-eu/web/pull/3459)]
- ci: fix error when trying to delete nonexisting cache [[#3455](https://github.com/opencloud-eu/web/pull/3455)]
- fix: keep editor drops inside the create space modal's focus trap [[#3450](https://github.com/opencloud-eu/web/pull/3450)]
- Lock an encrypted space when it gets disabled [[#3408](https://github.com/opencloud-eu/web/pull/3408)]
- Remove the vault unlock actions and hide the lock action for disabled spaces [[#3404](https://github.com/opencloud-eu/web/pull/3404)]
- Show the action title in mobile text editor toolbar drops [[#3399](https://github.com/opencloud-eu/web/pull/3399)]
- fix: keep editor open when saving fails on close [[#3396](https://github.com/opencloud-eu/web/pull/3396)]
- Fix nested mobile drops in overflow menus [[#3392](https://github.com/opencloud-eu/web/pull/3392)]
- fix(web-pkg): keep full folder names when file extensions are hidden [[#3369](https://github.com/opencloud-eu/web/pull/3369)]

### 📈 Enhancement

- perf: lazy load translations [[#3522](https://github.com/opencloud-eu/web/pull/3522)]
- feat(admin-settings): search users by user name and email as well [[#3517](https://github.com/opencloud-eu/web/pull/3517)]
- refactor(admin-settings): show avatars and space images in the name column [[#3516](https://github.com/opencloud-eu/web/pull/3516)]
- feat(admin-settings): use the web-pkg spaces store, add the customize menu and space images [[#3501](https://github.com/opencloud-eu/web/pull/3501)]
- perf: subset and preload inter font [[#3500](https://github.com/opencloud-eu/web/pull/3500)]
- feat: show breadcrumb context menu on mobile [[#3497](https://github.com/opencloud-eu/web/pull/3497)]
- feat: redesign admin user and group edit panels [[#3489](https://github.com/opencloud-eu/web/pull/3489)]
- feat: show used quota in admin user details [[#3492](https://github.com/opencloud-eu/web/pull/3492)]
- feat: mute verbs and lighten highlighted values in activities panel [[#3494](https://github.com/opencloud-eu/web/pull/3494)]
- feat: explain why the new button is disabled in unsupported views [[#3443](https://github.com/opencloud-eu/web/pull/3443)]
- feat: sort app tokens by creation and expiration date [[#3488](https://github.com/opencloud-eu/web/pull/3488)]
- feat: rename view mode labels to grid and list [[#3486](https://github.com/opencloud-eu/web/pull/3486)]
- feat: make search results breadcrumb consistent with other views [[#3475](https://github.com/opencloud-eu/web/pull/3475)]
- feat: remove actions panel from right sidebar [[#3484](https://github.com/opencloud-eu/web/pull/3484)]
- feat(editor): keep table of contents toggle size and follow active heading [[#3473](https://github.com/opencloud-eu/web/pull/3473)]
- feat: add icon for excalidraw files [[#3483](https://github.com/opencloud-eu/web/pull/3483)]
- feat(office-settings): polish fonts table to match overall design [[#3479](https://github.com/opencloud-eu/web/pull/3479)]
- Guest invite [[#2915](https://github.com/opencloud-eu/web/pull/2915)]
- feat: harmonize the right sidebar panels [[#3470](https://github.com/opencloud-eu/web/pull/3470)]
- feat: add hoverable selection zone to tile checkboxes [[#3471](https://github.com/opencloud-eu/web/pull/3471)]
- feat(editor): add table of contents for markdown and tiptap-json [[#3440](https://github.com/opencloud-eu/web/pull/3440)]
- feat(runtime): show the help to translate link under the language select [[#3464](https://github.com/opencloud-eu/web/pull/3464)]
- feat(admin-settings): persist sorting of users, groups and extensions tables [[#3441](https://github.com/opencloud-eu/web/pull/3441)]
- feat(design-system): round buttons inside the bubble menu [[#3456](https://github.com/opencloud-eu/web/pull/3456)]
- feat: polish announcement banner and details modal [[#3442](https://github.com/opencloud-eu/web/pull/3442)]
- feat: improve readability of the activities and versions timelines [[#3423](https://github.com/opencloud-eu/web/pull/3423)]
- feat: group space customization actions in context menu [[#3444](https://github.com/opencloud-eu/web/pull/3444)]
- feat: show tiles view first in view mode options [[#3454](https://github.com/opencloud-eu/web/pull/3454)]
- feat(files): use NoContentMessage for resource not found message [[#3447](https://github.com/opencloud-eu/web/pull/3447)]
- feat: consistent sorting for spaces and resources [[#3432](https://github.com/opencloud-eu/web/pull/3432)]
- feat(account): improve readability and consistency of account pages [[#3430](https://github.com/opencloud-eu/web/pull/3430)]
- feat: declutter the announcement banner settings [[#3426](https://github.com/opencloud-eu/web/pull/3426)]
- feat(admin-settings): make apps sortable by status [[#3427](https://github.com/opencloud-eu/web/pull/3427)]
- feat(yjs): immediately notify peers about external doc updates [[#3397](https://github.com/opencloud-eu/web/pull/3397)]
- feat: keep modal actions out of the scrollable body [[#3419](https://github.com/opencloud-eu/web/pull/3419)]
- feat: share yjs with external apps [[#3398](https://github.com/opencloud-eu/web/pull/3398)]
- feat: create a space with quota, subtitle, description, image and members [[#3413](https://github.com/opencloud-eu/web/pull/3413)]
- feat: always sort folders above files [[#3411](https://github.com/opencloud-eu/web/pull/3411)]
- Improve mobile table size picker [[#3393](https://github.com/opencloud-eu/web/pull/3393)]
- perf: optimize chunk sizes [[#3378](https://github.com/opencloud-eu/web/pull/3378)]
- perf: load the editor chunk lazily [[#3373](https://github.com/opencloud-eu/web/pull/3373)]
- Editor: preserve markdown when copying and pasting [[#3371](https://github.com/opencloud-eu/web/pull/3371)]
- Show vault breadcrumb icons from breadcrumb item props [[#3367](https://github.com/opencloud-eu/web/pull/3367)]

### ✅ Tests

- e2e-tests: move resources in received shares [[#3506](https://github.com/opencloud-eu/web/pull/3506)]
- e2e: simplify e2e project space creation steps [[#3457](https://github.com/opencloud-eu/web/pull/3457)]
- e2e: create space with options [[#3458](https://github.com/opencloud-eu/web/pull/3458)]
- refactor(e2e): clean up test structure [[#3425](https://github.com/opencloud-eu/web/pull/3425)]
- e2e: mentioning collaborator in file [[#3389](https://github.com/opencloud-eu/web/pull/3389)]


## Reva

### ✨ Features

- Add "guestlinks" authmanager [[#822](https://github.com/opencloud-eu/reva/pull/822)]

### ✅ Tests

- remove flakiness from tests [[#846](https://github.com/opencloud-eu/reva/pull/846)]

### 📈 Enhancement

- Add new editor roles [[#834](https://github.com/opencloud-eu/reva/pull/834)]
- feat(appprovider): forward the mobile parameter to the app [[#830](https://github.com/opencloud-eu/reva/pull/830)]

### 🐛 Bug Fixes

- Issue/827 [[#829](https://github.com/opencloud-eu/reva/pull/829)]