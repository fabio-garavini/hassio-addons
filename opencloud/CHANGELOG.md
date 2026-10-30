> [!CAUTION]
> Action required: Follow the [upgrade instructions](https://docs.opencloud.eu/docs/next/admin/maintenance/upgrade/upgrade-9.x.x) before upgrading to this release.

> [!IMPORTANT]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

## 🌍 Guest access: share with anyone by email

Share files, folders and spaces with people who have no account on your OpenCloud. Enter their email address in the share dialog, pick a role, done. The guest gets an email with a link and starts working right away.

Guest access is built for external collaboration where you must know who accessed what.

- **Passwordless:** no account to set up, no password to forget or reset. The guest proves who they are by receiving the email.
- **Identified:** every guest access is logged with the email address. A public link cannot tell you who used it, a guest is always a known person.
- **Same roles as internal users:** from viewer to editor, on files, folders and spaces.

How it works:

- **Personal links:** every link is single-use and valid for 30 minutes. A used or expired link stops working, the guest requests a new one and gets it instantly.
- **Sessions:** a guest session lasts 24 hours. 15 minutes before it ends, the web client warns the guest, who renews it with a PIN sent by email.
- **Expiry:** like any share, guest access can have an expiry date. After that date, no new links are issued.
- **Admin settings:** session lifetime, link and PIN lifetime and rate limits for renewals are configurable.



**Sharing options compared**


|                           | Public link                                      | Guest access                                    | Full account                  |
| ------------------------- | ------------------------------------------------ | ----------------------------------------------- | ----------------------------- |
| **Best for**              | One-time sending or collecting files from anyone | Ongoing work with a named external partner      | Daily work of your own team   |
| **Needs password**        | No (optional)                                    | No                                              | Yes                           |
| **Authentication factor** | One link for all                                 | Personal, single-use links in the guest's inbox | Password / MFA                |
| **Who is identified**     | Nobody                                           | The guest's email address                       | The user, via the directory   |
| **Expiration**            | None (optional)                                  | Link 30 min, session 24 h, renewable by email   | None                          |
| **Restrictions**          | Web only, no desktop or mobile sync              | Web only, no desktop or mobile sync             | None                          |
| **Personal data needed**  | None                                             | Email address only                              | Profile data in the directory |


**Why guest access and not public links**
A public link is anonymous. Anyone who holds it has access, and nobody can say who that is. A guest is a known person, identified by their email address. Sharers and admins see who has access, can revoke it and can show it in an audit.

## 🔎 Tags in search

Search now covers tags: a search term matches tag names as well as file names and content, and tags are a filter in the search results, next to the other filters.

- **Filter by tag:** the filter lists all your tags, so you can show only files tagged "Private" or "Work".
- **Search for a tag:** typing a tag name finds files with that tag, even if file name and content do not match.

The matching tag is shown below each result, so you see why a file was found.

## 📂 Folders first, for every sort order

Folders stay at the top of the file list when you sort by name, size or modified date, in both directions. A new option "Folders first" lets you turn this off and sort files and folders together. It is on by default, so nothing changes unless you switch it off.

## 🔄 Live updates for shares

When someone shares a folder with you, it appears in "Shared with me" right away, without a reload. Revoked shares disappear the same way. This also works for guests.

## 🔍 Search results show the match

When you open a file from the search results, the matching text is now shown in the middle of the preview, so it does not scroll out of view. The details view shows why the file was found, either the matching text or the tag.

## 🖼️ Redesigned App Store

- **Grid or list:** switch between both views, like in the Files app.
- **Official badge:** apps maintained by OpenCloud are marked, so you see at a glance which apps are supported.
- **Tags and filter:** apps have tags, for example "File Actions", and you can filter by them.
- **Download button:** now prominent in the app details.

## ✅ Apps show version compatibility

Find out at a glance why an app stopped working after an update.

- **Version range:** each app can declare a minimum and a maximum OpenCloud version.
- **Admin overview:** the compatible range is shown next to each installed app.
- **Mismatch warning:** if an app does not match your OpenCloud version, its status turns red and a short hint explains the likely cause.

## 🖼️ Preview support for HEIC, HEIF and AVIF

Preview HEIC, HEIF and AVIF images directly in the web client. Requires additional configuration.

## 📐 Apollon: UML diagrams

Apollon is a new app for UML and modeling diagrams. It supports 13 diagram types, including class, component, activity and BPMN.

- **Create:** choose "UML Diagram" from the "New" menu.
- **Edit together:** diagrams sync in real time, and you see the cursors of the other people in the diagram.

## ↔️ Full right-to-left support

For languages read from right to left, such as Arabic and Hebrew, the whole interface is now mirrored. Previously only parts were, for example the settings but not the spaces view.

## ✉️ New email design

Notification emails have a new look based on the OpenCloud Design System.

- **Layout:** OpenCloud logo, a heading and a button that opens the shared item, space or link.
- **Dark mode:** logo and colors follow the mode of mail clients that support it.
- **Guest links:** the PIN is shown in a highlighted box.
- **Daily and weekly summaries:** events appear as a timeline with their time and a link to each shared item or space. Times are in UTC, because OpenCloud does not know the time zone of the recipient.
- **Compatibility:** the templates reach 94 percent in an HTML email client check, well above the usual result for HTML emails.

Plain-text emails and all existing translations stay the same.

**Custom templates:** the HTML email now consists of `layout.html.tmpl`, `message.html.tmpl` and `digest.html.tmpl` in `templates/html/`. Existing custom template folders that only contain `email.html.tmpl` keep working as before. See the notifications service README for the new template values.

## 🚢 OpenCloud runs on OpenShift

The Helm chart supports OpenShift, based on customer feedback, and the setup is documented. The chart test suite simulates an OpenShift cluster and checks its security restrictions on every run, for allowed and for rejected workloads.

## 🧪 146 bug fixes from more testing

Before every rolling release, we run upgrade tests, exploratory tests and the existing API and UI tests. AI-supported exploratory testing found many issues nobody had reported. The latest web release contains 146 bug fixes, most of them found this way.



## [9.0.0](https://github.com/opencloud-eu/opencloud/releases/tag/v9.0.0) - 2026-10-27

### ❤️ Thanks to all contributors! ❤️

@aduffeck, @AlexAndBear, @BloomyInDev, @butonic, @dragonchaser, @dschmidt, @eriktews, @fredrikblau, @fschade, @jay23606, @JammingBen, @junkerderprovinz, @kulmann, @LetsDrinkSomeTea, @maki5, @micbar, @NickWalters, @pbleser-oc, @rhafer, @saw-jan, @Svanvith, @tammi-23, @tbsbdr, @v-scharf, @VicDeo

## Opencloud:
### 💥 Breaking changes

- Push based thumbnailer architecture [[#3397](https://github.com/opencloud-eu/opencloud/pull/3397)]
- feat(guestlinks)!: auth-guest service [[#3609](https://github.com/opencloud-eu/opencloud/pull/3609)]

### 🐛 Bug Fixes

- Skip extraction for directories before checking the size limit [[#3832](https://github.com/opencloud-eu/opencloud/pull/3832)]
- log errors when a personal space is deleted [[#3710](https://github.com/opencloud-eu/opencloud/pull/3710)]
- fix(cli): detect storage driver from storage path in revisions and trash commands [[#3776](https://github.com/opencloud-eu/opencloud/pull/3776)]
- fix(idp): show keyboard focus on every control [[#3732](https://github.com/opencloud-eu/opencloud/pull/3732)]
- fix: show the lilac logo on the login page [[#3773](https://github.com/opencloud-eu/opencloud/pull/3773)]
- fix(frontend): report content search only when full-text search is enabled [[#3760](https://github.com/opencloud-eu/opencloud/pull/3760)]
- fix: allow guests to list role definitions [[#3729](https://github.com/opencloud-eu/opencloud/pull/3729)]
- fix: nats checks were missing the configured auth [[#3724](https://github.com/opencloud-eu/opencloud/pull/3724)]
- fix(collaboration): answer a wopi lock in a read-only session with 200 instead of locking [[#3711](https://github.com/opencloud-eu/opencloud/pull/3711)]
- fix(collaboration): show the secure view watermark only for view-only tokens [[#3712](https://github.com/opencloud-eu/opencloud/pull/3712)]
- fix: add restart command output [[#3706](https://github.com/opencloud-eu/opencloud/pull/3706)]

### 📈 Enhancement

- feat: new mail notifications based on design system [[#3789](https://github.com/opencloud-eu/opencloud/pull/3789)]
- feat(search): configurable query filter, leaves the personal space root and .space out by default [[#3787](https://github.com/opencloud-eu/opencloud/pull/3787)]
- feat: expose the default project space quota in the capabilities [[#3719](https://github.com/opencloud-eu/opencloud/pull/3719)]
- feat(collaboration): close the CheckFileInfo gaps for the office apps [[#3730](https://github.com/opencloud-eu/opencloud/pull/3730)]
- fix(proxy): allow guest link auth for app open and new endpoints [[#3737](https://github.com/opencloud-eu/opencloud/pull/3737)]
- feat: make space2share migration repeatable [[#3669](https://github.com/opencloud-eu/opencloud/pull/3669)]
- feat: run the decomposed drivers on foreign metadata via metadata_prefix [[#3670](https://github.com/opencloud-eu/opencloud/pull/3670)]
- feat: add more cli options to unified roles [[#3658](https://github.com/opencloud-eu/opencloud/pull/3658)]
- feat(web): use the OpenCloud brand colors for the primary color role [[#3631](https://github.com/opencloud-eu/opencloud/pull/3631)]

### ✅ Tests

- ci: disable async uploads for litmus tests [[#3777](https://github.com/opencloud-eu/opencloud/pull/3777)]
- tests: add acceptance tests for renewing guest links [[#3753](https://github.com/opencloud-eu/opencloud/pull/3753)]
- tests: check that a guest can only access the shared resource [[#3752](https://github.com/opencloud-eu/opencloud/pull/3752)]
- tests: add acceptance tests for sharing with guests via email [[#3751](https://github.com/opencloud-eu/opencloud/pull/3751)]
- Bump reva and add some tests for new features [[#3715](https://github.com/opencloud-eu/opencloud/pull/3715)]
- api-test: check PROPFIND/REPORT has-preview [[#3714](https://github.com/opencloud-eu/opencloud/pull/3714)]
- test(api): simply HTTP request retry conditions [[#3696](https://github.com/opencloud-eu/opencloud/pull/3696)]
- test: retry acceptance requests while share manager is migrating [[#3681](https://github.com/opencloud-eu/opencloud/pull/3681)]
- api-test: extend search tests [[#3634](https://github.com/opencloud-eu/opencloud/pull/3634)]

### 📚 Documentation

- docs: update unified Roles [[#3738](https://github.com/opencloud-eu/opencloud/pull/3738)]
- fix(proxy): make metrics table MDX-compatible [[#3680](https://github.com/opencloud-eu/opencloud/pull/3680)]

## Web
### 📈 Enhancement

- feat(preview): open heic, heif and avif images [[#4009](https://github.com/opencloud-eu/web/pull/4009)]
- fix(preview): truncate long file names in the photo roll [[#4018](https://github.com/opencloud-eu/web/pull/4018)]
- Zoom images in the preview app with ctrl/cmd + mouse wheel [[#3996](https://github.com/opencloud-eu/web/pull/3996)]
- feat: disable guest sharing on spaces [[#3994](https://github.com/opencloud-eu/web/pull/3994)]
- fix: improve readability of the archive and vault icons [[#3991](https://github.com/opencloud-eu/web/pull/3991)]
- set folder color to blue 587DAB [[#3972](https://github.com/opencloud-eu/web/pull/3972)]
- feat: open permanent links as a guest [[#3908](https://github.com/opencloud-eu/web/pull/3908)]
- feat: list all shares for guest users [[#3829](https://github.com/opencloud-eu/web/pull/3829)]
- feat(extension-sdk): add the base element in unit tests [[#3800](https://github.com/opencloud-eu/web/pull/3800)]
- feat(web-pkg): allow following users in the yjs collaborators list [[#3803](https://github.com/opencloud-eu/web/pull/3803)]
- feat(app-store): add sorting and release dates [[#3825](https://github.com/opencloud-eu/web/pull/3825)]
- feat: accept route locations in buildUrl [[#3798](https://github.com/opencloud-eu/web/pull/3798)]
- Handle SSEs for resources in incoming shares [[#3898](https://github.com/opencloud-eu/web/pull/3898)]
- feat: resolve guest links into file listing [[#3816](https://github.com/opencloud-eu/web/pull/3816)]
- feat: renew expired guest sessions [[#3811](https://github.com/opencloud-eu/web/pull/3811)]
- feat: Guest auth [[#3338](https://github.com/opencloud-eu/web/pull/3338)]
- feat: folder first sorting [[#3792](https://github.com/opencloud-eu/web/pull/3792)]
- feat: custom font size and type [[#3649](https://github.com/opencloud-eu/web/pull/3649)]
- [full-ci] feat: support Apple Live Photos [[#3548](https://github.com/opencloud-eu/web/pull/3548)]
- feat: add norwegian nynorsk [[#3623](https://github.com/opencloud-eu/web/pull/3623)]
- feat(web-runtime): show the status of app tokens [[#3607](https://github.com/opencloud-eu/web/pull/3607)]
- feat(external): close the app via the collabora back button [[#3612](https://github.com/opencloud-eu/web/pull/3612)]
- feat: support image icons for apps and extensions [[#3580](https://github.com/opencloud-eu/web/pull/3580)]
- feat: add whiteboard icon for excalidraw files [[#3584](https://github.com/opencloud-eu/web/pull/3584)]
- feat: search for tags in the global search and enhance the visually reasoning for matching results [[#3558](https://github.com/opencloud-eu/web/pull/3558)]
- feat: add app version compatibility checks [[#3568](https://github.com/opencloud-eu/web/pull/3568)]
- feat(app-store): redesign the app store [[#3534](https://github.com/opencloud-eu/web/pull/3534)]
- feat: apply the OpenCloud brand colors to the CTA [[#3521](https://github.com/opencloud-eu/web/pull/3521)]
- feat(preview): preload next and previous image [[#3529](https://github.com/opencloud-eu/web/pull/3529)]
- feat(preview): add support for mkv video files [[#3564](https://github.com/opencloud-eu/web/pull/3564)]
- feat: filter favorites by tags and always show the tag filter [[#3554](https://github.com/opencloud-eu/web/pull/3554)]
- feat: remove condensed list view and switch view modes with toggle buttons [[#3538](https://github.com/opencloud-eu/web/pull/3538)]
- perf: load group memberships only on the account page [[#3553](https://github.com/opencloud-eu/web/pull/3553)]
- chore: use line icons for all sidebar panel actions [[#3539](https://github.com/opencloud-eu/web/pull/3539)]
- feat: add font and app illustrations to the empty states [[#3556](https://github.com/opencloud-eu/web/pull/3556)]
- feat(rclone-crypt): use the password generator and policy for vault passwords [[#3537](https://github.com/opencloud-eu/web/pull/3537)]

### 🐛 Bug Fixes

- fix(editor): patch y-tiptap crash when typing into a new heading [[#4032](https://github.com/opencloud-eu/web/pull/4032)]
- fix(editor): open non-UTF-8 text files read-only in editors [[#4022](https://github.com/opencloud-eu/web/pull/4022)]
- fix: improve a11y semantics across files, sharing, editor and forms [[#3970](https://github.com/opencloud-eu/web/pull/3970)]
- Keep the file extension attached to a wrapping resource name [[#4017](https://github.com/opencloud-eu/web/pull/4017)]
- fix: save unsaved changes before deleting the open file [[#3783](https://github.com/opencloud-eu/web/pull/3783)]
- fix: announce search results to screen readers [[#3990](https://github.com/opencloud-eu/web/pull/3990)]
- fix(yjs): keep debounced keystrokes when a peer's recovery lands [[#3582](https://github.com/opencloud-eu/web/pull/3582)]
- fix: show a cancel button in confirmations of destructive actions [[#3958](https://github.com/opencloud-eu/web/pull/3958)]
- fix: revert the share role dropdown when the role change fails [[#3909](https://github.com/opencloud-eu/web/pull/3909)]
- fix: use the secondary color for markdown links and sync the default primary color [[#3974](https://github.com/opencloud-eu/web/pull/3974)]
- fix: sort space members and managers by name within a role [[#3927](https://github.com/opencloud-eu/web/pull/3927)]
- fix: check the matching actions before keyboard copy, cut and paste [[#3925](https://github.com/opencloud-eu/web/pull/3925)]
- fix: handle sse share events for guests [[#3981](https://github.com/opencloud-eu/web/pull/3981)]
- fix: let collaborator names use the full row width [[#3926](https://github.com/opencloud-eu/web/pull/3926)]
- fix: send isMobile information to server for collaboration service [[#3971](https://github.com/opencloud-eu/web/pull/3971)]
- fix(yjs): renew expired token [[#3966](https://github.com/opencloud-eu/web/pull/3966)]
- fix: keyboard focus and space handling from accessibility audit [[#3824](https://github.com/opencloud-eu/web/pull/3824)]
- fix: re-root unlocked vault engines when a vault or its parent folder is renamed [[#3964](https://github.com/opencloud-eu/web/pull/3964)]
- fix: keep filter values from the URL that no longer exist [[#3951](https://github.com/opencloud-eu/web/pull/3951)]
- fix: show a not found message for links to inaccessible project spaces [[#3953](https://github.com/opencloud-eu/web/pull/3953)]
- fix: update tab title and search location chip on language change [[#3923](https://github.com/opencloud-eu/web/pull/3923)]
- fix: drop the search app's /search/list route [[#3965](https://github.com/opencloud-eu/web/pull/3965)]
- fix: address partly fixed accessibility audit findings [[#3939](https://github.com/opencloud-eu/web/pull/3939)]
- fix: update the current folder when changing a resource field [[#3948](https://github.com/opencloud-eu/web/pull/3948)]
- fix: show a no results message in share views when only filters match nothing [[#3919](https://github.com/opencloud-eu/web/pull/3919)]
- fix: only undo the latest deletion with Ctrl+Z [[#3949](https://github.com/opencloud-eu/web/pull/3949)]
- fix: filter and search all shares before paginating the share views [[#3875](https://github.com/opencloud-eu/web/pull/3875)]
- fix: only change sync for the shares that need it in a mixed selection [[#3906](https://github.com/opencloud-eu/web/pull/3906)]
- fix: scale SVG previews to fit the preview stage [[#3911](https://github.com/opencloud-eu/web/pull/3911)]
- fix: address attribute-only accessibility audit findings [[#3823](https://github.com/opencloud-eu/web/pull/3823)]
- fix: reject a whitespace-only password when editing a user [[#3907](https://github.com/opencloud-eu/web/pull/3907)]
- fix: copy link without ClipboardItem and keep the clipboard when there is no single link [[#3871](https://github.com/opencloud-eu/web/pull/3871)]
- fix: show a clear message when a file drop link was deleted [[#3905](https://github.com/opencloud-eu/web/pull/3905)]
- Fix Guest SVG previews across Web and API origins [[#3835](https://github.com/opencloud-eu/web/pull/3835)]
- fix: deselect hidden files when they get hidden [[#3870](https://github.com/opencloud-eu/web/pull/3870)]
- fix: show an error when the user details can't be loaded in admin Users [[#3775](https://github.com/opencloud-eu/web/pull/3775)]
- fix: give the search list its own task so the preview can't cancel it [[#3869](https://github.com/opencloud-eu/web/pull/3869)]
- fix: normalize shortcut URLs without HTML sanitization [[#3814](https://github.com/opencloud-eu/web/pull/3814)]
- fix: keep Save as in folder edit links after a reload [[#3784](https://github.com/opencloud-eu/web/pull/3784)]
- fix: keep search scope in sync across reloads and view changes [[#3703](https://github.com/opencloud-eu/web/pull/3703)]
- fix: offer only keep both and skip for upload conflicts between file and folder [[#3735](https://github.com/opencloud-eu/web/pull/3735)]
- fix: distinguish default and unlimited space quotas [[#3728](https://github.com/opencloud-eu/web/pull/3728)]
- fix: follow the current folder when it is moved [[#3873](https://github.com/opencloud-eu/web/pull/3873)]
- fix: show errors for failed drag and drop moves [[#3872](https://github.com/opencloud-eu/web/pull/3872)]
- Make archiver work with guest link auth [[#3900](https://github.com/opencloud-eu/web/pull/3900)]
- Fix background flash with automatic theme [[#3843](https://github.com/opencloud-eu/web/pull/3843)]
- Keep Preview photo-roll icons centered when the sidebar opens [[#3840](https://github.com/opencloud-eu/web/pull/3840)]
- fix: don't confirm a modal while its confirm button is disabled [[#3880](https://github.com/opencloud-eu/web/pull/3880)]
- fix: leave a space when it gets disabled or deleted [[#3774](https://github.com/opencloud-eu/web/pull/3774)]
- fix: only renew the login when admins rename themselves [[#3882](https://github.com/opencloud-eu/web/pull/3882)]
- fix: wrap long names in notifications and keep placeholders in activity names [[#3892](https://github.com/opencloud-eu/web/pull/3892)]
- fix: show epub content in dark theme in chromium [[#3888](https://github.com/opencloud-eu/web/pull/3888)]
- fix: keep notifications and show an error when marking all as read fails [[#3886](https://github.com/opencloud-eu/web/pull/3886)]
- fix: show the no results message for a tag-only search [[#3885](https://github.com/opencloud-eu/web/pull/3885)]
- fix(preview): show an error for a deep link to a file that can't be previewed [[#3773](https://github.com/opencloud-eu/web/pull/3773)]
- fix: avoid batch name collisions when keeping both on paste and upload [[#3697](https://github.com/opencloud-eu/web/pull/3697)]
- fix: skip the conflict when closing the resource conflict modal [[#3742](https://github.com/opencloud-eu/web/pull/3742)]
- fix: let space toggle a focused checkbox in lists [[#3752](https://github.com/opencloud-eu/web/pull/3752)]
- fix: refresh files list and quota after cancelling uploads [[#3701](https://github.com/opencloud-eu/web/pull/3701)]
- fix: follow the search term in the admin users route query [[#3753](https://github.com/opencloud-eu/web/pull/3753)]
- fix: keep create user and group dialogs open while the name check runs and on errors [[#3694](https://github.com/opencloud-eu/web/pull/3694)]
- fix: address small optional accessibility audit findings [[#3822](https://github.com/opencloud-eu/web/pull/3822)]
- fix: address small accessibility audit findings [[#3821](https://github.com/opencloud-eu/web/pull/3821)]
- fix: only show the link copied message after a successful clipboard write [[#3763](https://github.com/opencloud-eu/web/pull/3763)]
- fix: use a separate upload endpoint per file in public file drops [[#3762](https://github.com/opencloud-eu/web/pull/3762)]
- fix: don't add a tag when only spaces are entered [[#3764](https://github.com/opencloud-eu/web/pull/3764)]
- fix: keep the public link token in the preferences link [[#3778](https://github.com/opencloud-eu/web/pull/3778)]
- Fix small WCAG accessibility failures [[#3820](https://github.com/opencloud-eu/web/pull/3820)]
- Fix modal Escape handling after focus loss [[#3805](https://github.com/opencloud-eu/web/pull/3805)]
- fix: name the existing item's type in the conflict dialog [[#3776](https://github.com/opencloud-eu/web/pull/3776)]
- fix: share the clicked folder from the breadcrumb menu, not the selection [[#3813](https://github.com/opencloud-eu/web/pull/3813)]
- fix: link space notifications once the space is loaded [[#3777](https://github.com/opencloud-eu/web/pull/3777)]
- fix: open the parent folder when a folder url points to a file [[#3779](https://github.com/opencloud-eu/web/pull/3779)]
- fix: show app not found for app store links with a percent sign [[#3787](https://github.com/opencloud-eu/web/pull/3787)]
- fix: show an error when the app store apps can't be loaded [[#3789](https://github.com/opencloud-eu/web/pull/3789)]
- fix: show and hide hidden search results without searching again [[#3716](https://github.com/opencloud-eu/web/pull/3716)]
- fix: keep shift-click ranges contiguous in admin settings lists [[#3744](https://github.com/opencloud-eu/web/pull/3744)]
- fix: ignore spaces around search terms [[#3730](https://github.com/opencloud-eu/web/pull/3730)]
- fix: start on the first page after a new search or filter change [[#3708](https://github.com/opencloud-eu/web/pull/3708)]
- fix: no unhandled error when the server rejects a link password [[#3712](https://github.com/opencloud-eu/web/pull/3712)]
- fix: reject whitespace-only public link names [[#3731](https://github.com/opencloud-eu/web/pull/3731)]
- fix: show a space's size in the details only inside the space [[#3715](https://github.com/opencloud-eu/web/pull/3715)]
- fix: sort unrestricted spaces as largest total quota [[#3729](https://github.com/opencloud-eu/web/pull/3729)]
- fix: show the last page instead of an empty list when the page is out of range [[#3711](https://github.com/opencloud-eu/web/pull/3711)]
- fix: close the notifications drop when a notification is clicked [[#3734](https://github.com/opencloud-eu/web/pull/3734)]
- fix: reject whitespace-only app token notes [[#3732](https://github.com/opencloud-eu/web/pull/3732)]
- fix: stop sending the cached space name on space and quota updates [[#3705](https://github.com/opencloud-eu/web/pull/3705)]
- fix: keep open context menus when a file in the list changes [[#3785](https://github.com/opencloud-eu/web/pull/3785)]
- fix: keep filter chips in sync with the URL on back and forward [[#3699](https://github.com/opencloud-eu/web/pull/3699)]
- fix: don't limit the length of vault passwords [[#3727](https://github.com/opencloud-eu/web/pull/3727)]
- fix: sum up all files in the upload quota check [[#3698](https://github.com/opencloud-eu/web/pull/3698)]
- fix: keep both on upload for special-character and same-named folders [[#3693](https://github.com/opencloud-eu/web/pull/3693)]
- fix: wait for user data before showing the user batch actions [[#3733](https://github.com/opencloud-eu/web/pull/3733)]
- fix: stop the share recipient search spinner when the search fails [[#3717](https://github.com/opencloud-eu/web/pull/3717)]
- fix: show the file name instead of the share id for single file shares in apps [[#3714](https://github.com/opencloud-eu/web/pull/3714)]
- fix: split pasted tags on commas [[#3713](https://github.com/opencloud-eu/web/pull/3713)]
- fix: show the new link type only after the link was updated [[#3704](https://github.com/opencloud-eu/web/pull/3704)]
- fix: no error when a drop is hidden while updating its position [[#3702](https://github.com/opencloud-eu/web/pull/3702)]
- fix(editor): keep escaped thematic breaks as paragraph text [[#3765](https://github.com/opencloud-eu/web/pull/3765)]
- fix: open mobile bottom drawers as named modal dialogs [[#3645](https://github.com/opencloud-eu/web/pull/3645)]
- fix: open external notification links in a new tab [[#3743](https://github.com/opencloud-eu/web/pull/3743)]
- fix: allow svg and webp images in the editor cloud image picker [[#3707](https://github.com/opencloud-eu/web/pull/3707)]
- fix: ignore desktop file drops on breadcrumb items [[#3706](https://github.com/opencloud-eu/web/pull/3706)]
- fix: round custom quotas to whole bytes [[#3695](https://github.com/opencloud-eu/web/pull/3695)]
- fix: keep the selection after link changes in shared via link and shared with others [[#3696](https://github.com/opencloud-eu/web/pull/3696)]
- fix: keep folder and extensionless names intact when renaming with hidden extensions [[#3687](https://github.com/opencloud-eu/web/pull/3687)]
- fix: reload app tokens once a token is created [[#3692](https://github.com/opencloud-eu/web/pull/3692)]
- fix: apply delegated token updates in embed mode [[#3686](https://github.com/opencloud-eu/web/pull/3686)]
- fix: don't add already selected rows again on shift arrow in admin settings [[#3691](https://github.com/opencloud-eu/web/pull/3691)]
- fix: stop the search preview from hanging when a provider search fails [[#3690](https://github.com/opencloud-eu/web/pull/3690)]
- fix(web-runtime): handle wrong passwords on the public link page [[#3592](https://github.com/opencloud-eu/web/pull/3592)]
- fix: select shares from notifications and show the highest share role [[#3598](https://github.com/opencloud-eu/web/pull/3598)]
- fix: make upload actions reactive [[#3651](https://github.com/opencloud-eu/web/pull/3651)]
- fix(editor): keep task list content and indented code fences in markdown [[#3616](https://github.com/opencloud-eu/web/pull/3616)]
- fix: keep public link uploads on the server origin after entering the password [[#3688](https://github.com/opencloud-eu/web/pull/3688)]
- fix: keep skipped files out of uploads [[#3689](https://github.com/opencloud-eu/web/pull/3689)]
- fix: ignore space key in admin settings lists without a selected row [[#3685](https://github.com/opencloud-eu/web/pull/3685)]
- fix: close embedded pickers with Escape [[#3630](https://github.com/opencloud-eu/web/pull/3630)]
- fix: list links on space roots as spaces in shared via link [[#3605](https://github.com/opencloud-eu/web/pull/3605)]
- fix: no image from the cloud in the text editor on public links [[#3632](https://github.com/opencloud-eu/web/pull/3632)]
- fix(design-system): OcSwitch keeps its focus, OcMobileDrop takes it when opened [[#3627](https://github.com/opencloud-eu/web/pull/3627)]
- fix: show folder loading errors in the app wrapper instead of an endless spinner [[#3603](https://github.com/opencloud-eu/web/pull/3603)]
- fix: wait for the sidebar resource before rendering the shares panel [[#3639](https://github.com/opencloud-eu/web/pull/3639)]
- fix(web-pkg): enforce the maximum password length of the password policy [[#3599](https://github.com/opencloud-eu/web/pull/3599)]
- fix: reject images that can't be decoded before cropping [[#3600](https://github.com/opencloud-eu/web/pull/3600)]
- fix: keep the file list up to date after uploads [[#3587](https://github.com/opencloud-eu/web/pull/3587)]
- fix: keep spaces in changed passwords and log out from the profile page without errors [[#3597](https://github.com/opencloud-eu/web/pull/3597)]
- fix(admin-settings): keep users and groups whose deletion failed [[#3596](https://github.com/opencloud-eu/web/pull/3596)]
- fix: let space managers enable disabled spaces [[#3602](https://github.com/opencloud-eu/web/pull/3602)]
- fix(web-pkg): check the event target for disabled key bindings [[#3595](https://github.com/opencloud-eu/web/pull/3595)]
- fix(search): fall back to the first provider on the search list [[#3594](https://github.com/opencloud-eu/web/pull/3594)]
- fix(rclone-crypt): skip the unlock page in the browser history [[#3593](https://github.com/opencloud-eu/web/pull/3593)]
- fix: public link actions and the password policy for anonymous visitors [[#3591](https://github.com/opencloud-eu/web/pull/3591)]
- fix(web-runtime): keep the public link context when unlocking a vault [[#3606](https://github.com/opencloud-eu/web/pull/3606)]
- fix: limit expiration dates to 100 years in the future [[#3601](https://github.com/opencloud-eu/web/pull/3601)]
- fix: update the sidebar preview when switching to a resource with the same mdate [[#3615](https://github.com/opencloud-eu/web/pull/3615)]
- fix: handle deep links to deleted or missing files [[#3590](https://github.com/opencloud-eu/web/pull/3590)]
- fix: show the whole image in the file details preview [[#3609](https://github.com/opencloud-eu/web/pull/3609)]
- fix(files): report moved files after cut & paste and block pasting into own subfolders [[#3588](https://github.com/opencloud-eu/web/pull/3588)]
- fix(web-runtime): keep upload progress sane after resume and show failed upload details [[#3586](https://github.com/opencloud-eu/web/pull/3586)]
- fix(tests): authenticate basic auth requests with the username [[#3318](https://github.com/opencloud-eu/web/pull/3318)]
- fix(design-system): derive a valid color for every icon name [[#3585](https://github.com/opencloud-eu/web/pull/3585)]
- fix(web-pkg): limit resource names to 255 bytes [[#3589](https://github.com/opencloud-eu/web/pull/3589)]
- fix: mobile fixes for form messages, the page size select, the floating action button, batch icons, preview swiping and Save as [[#3578](https://github.com/opencloud-eu/web/pull/3578)]
- fix(yjs): run initial hydration only on the first sync [[#3581](https://github.com/opencloud-eu/web/pull/3581)]
- fix(design-system): stop raw buttons from filling stroke-only shapes in resource icons [[#3575](https://github.com/opencloud-eu/web/pull/3575)]
- fix: mobile layout fixes for long names, search fields and space icons [[#3573](https://github.com/opencloud-eu/web/pull/3573)]
- fix: improve mobile usability of tooltips, switches, editor menus and admin tables [[#3550](https://github.com/opencloud-eu/web/pull/3550)]
- fix(admin-settings): respect the app icon fill type in the apps list [[#3567](https://github.com/opencloud-eu/web/pull/3567)]
- fix: prevent app token from being generated more than once [[#3541](https://github.com/opencloud-eu/web/pull/3541)]
- fix: text editor bugs found during exploratory testing [[#3533](https://github.com/opencloud-eu/web/pull/3533)]
- fix(web-pkg): align the rename button with the name when the path is shown [[#3551](https://github.com/opencloud-eu/web/pull/3551)]
- fix(web-app-files): highlight the search term in the names of the search results [[#3555](https://github.com/opencloud-eu/web/pull/3555)]
- fix: improve mobile layouts with css-only adjustments [[#3549](https://github.com/opencloud-eu/web/pull/3549)]

### ✅ Tests

- test(e2e): only fail on critical and serious best-practice a11y findings [[#3980](https://github.com/opencloud-eu/web/pull/3980)]
- test(e2e): extend a11y coverage and add keyboard checks [[#3795](https://github.com/opencloud-eu/web/pull/3795)]
- test: exclude Claude worktrees from Vitest discovery [[#3815](https://github.com/opencloud-eu/web/pull/3815)]
- test(e2e): cover sse events for share recipients [[#3799](https://github.com/opencloud-eu/web/pull/3799)]
- fix(e2e): retry open-with submenu click to fix flaky context menu [[#3757](https://github.com/opencloud-eu/web/pull/3757)]
- test: remove duplicated sidebar/context-menu variant coverage in e2e [[#3520](https://github.com/opencloud-eu/web/pull/3520)]


## Reva

### 🐛 Bug Fixes

- fix(sharesstorageprovider): reject a share deleted by its mount point [[#917](https://github.com/opencloud-eu/reva/pull/917)]
- Require parent permissions to delete or move a resource [[#916](https://github.com/opencloud-eu/reva/pull/916)]
- fix(storageprovider): restrict possibility for sharee to remove the owner resource [[#897](https://github.com/opencloud-eu/reva/pull/897)]
- fix: unlock the OS thread when ScopeUserByIds fails [[#899](https://github.com/opencloud-eu/reva/pull/899)]
- fix(ocdav): send basic auth challenge for password protected links followup [[#915](https://github.com/opencloud-eu/reva/pull/915)]
- fix(mime): normalise the extension RegisterMime is handed [[#908](https://github.com/opencloud-eu/reva/pull/908)]
- fix(ocdav): send basic auth challenge for password protected links [[#904](https://github.com/opencloud-eu/reva/pull/904)]
- fix(mime): map the rw2 extension [[#905](https://github.com/opencloud-eu/reva/pull/905)]
- fix(wopi): register the zmd extension the way the mime table spells it [[#907](https://github.com/opencloud-eu/reva/pull/907)]
- fix: do not delete the destination of a move across spaces [[#891](https://github.com/opencloud-eu/reva/pull/891)]
- fix move return [[#892](https://github.com/opencloud-eu/reva/pull/892)]
- fix(ocm): use a public-only client for WAYF provider discovery [[#814](https://github.com/opencloud-eu/reva/pull/814)]
- rename the space root before purging it [[#876](https://github.com/opencloud-eu/reva/pull/876)]
- fix(posix): retry a failed file once its ctime changes [[#809](https://github.com/opencloud-eu/reva/pull/809)]
- fix(posix): re-assimilate moved and changed files during a scan [[#808](https://github.com/opencloud-eu/reva/pull/808)]
- fix: add config to skip share manager migrations [[#877](https://github.com/opencloud-eu/reva/pull/877)]
- fix: status code during share removal [[#878](https://github.com/opencloud-eu/reva/pull/878)]
- fix: return not found when deleting unknown shares or spaces without … [[#874](https://github.com/opencloud-eu/reva/pull/874)]
- fix(posix): keep files findable by id after their folder is renamed on disk [[#850](https://github.com/opencloud-eu/reva/pull/850)]
- fix(posix): stop on-disk deletes and moves from resetting tree sizes to 0 [[#849](https://github.com/opencloud-eu/reva/pull/849)]
- fix(posix): keep a handle on the blob for the copy target [[#807](https://github.com/opencloud-eu/reva/pull/807)]
- test: wait for the DeleteRevision handler before redelivering [[#861](https://github.com/opencloud-eu/reva/pull/861)]
- fix filedescriptor leaks [[#847](https://github.com/opencloud-eu/reva/pull/847)]

### 📈 Enhancement

- fix(mime): add the OOXML Visio types [[#900](https://github.com/opencloud-eu/reva/pull/900)]
- Map .hif files to image/heif [[#911](https://github.com/opencloud-eu/reva/pull/911)]
- feat: add default_quota to the spaces capability [[#880](https://github.com/opencloud-eu/reva/pull/880)]
- fix(appprovider): pick a deterministic app when open with web names none [[#875](https://github.com/opencloud-eu/reva/pull/875)]
- feat: make space2share migration repeatable [[#864](https://github.com/opencloud-eu/reva/pull/864)]
- Harden unshare [[#856](https://github.com/opencloud-eu/reva/pull/856)]
- feat: run decomposedfs on foreign metadata via metadata_prefix [[#859](https://github.com/opencloud-eu/reva/pull/859)]

### ✅ Tests

- fix: retry removing the tombstone of a purged space [[#889](https://github.com/opencloud-eu/reva/pull/889)]
- try to remove the share migration lock on SIGTERM [[#869](https://github.com/opencloud-eu/reva/pull/869)]
- fix: separate cronjobs for different tasks [[#868](https://github.com/opencloud-eu/reva/pull/868)]
- fix: wait for inotify to react [[#863](https://github.com/opencloud-eu/reva/pull/863)]