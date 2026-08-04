> [!IMPORTANT]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Release Notes OpenCloud 7.3.0

📢 Global Announcement Banner

Display a runtime-managed announcement banner across the entire application with rich Markdown details. Admins can create, preview, enable, or disable announcements directly from General Settings, while the backend keeps everything centrally managed and instantly reflected across all users.

<img width="330" height="606" alt="Image" src="https://github.com/user-attachments/assets/652cc035-1a47-4fa8-b77e-2d6c306871a7" />


## Opencloud

## [7.4.0](https://github.com/opencloud-eu/opencloud/releases/tag/v7.4.0) - 2026-08-03

### ❤️ Thanks to all contributors! ❤️

@AlexAndBear, @JammingBen, @aduffeck, @dschmidt, @fschade, @michaelstingl, @pbleser-oc, @rhafer, @schweigisito, @v-scharf,  @Svanvith, @cheneyveron,  @kost, @tammi-23, @tbsbdr

### 📈 Enhancement

- Do not check ignored paths [[#3233](https://github.com/opencloud-eu/opencloud/pull/3233)]
- Extend posixfs consistency check [[#3220](https://github.com/opencloud-eu/opencloud/pull/3220)]
- Improve reindex command [[#3213](https://github.com/opencloud-eu/opencloud/pull/3213)]
- Reindex spaces concurrently [[#3207](https://github.com/opencloud-eu/opencloud/pull/3207)]
- feat: add announcement banner [[#3189](https://github.com/opencloud-eu/opencloud/pull/3189)]
- feat: add space viewer with versions role [[#2961](https://github.com/opencloud-eu/opencloud/pull/2961)]

### 🐛 Bug Fixes

- fix(runtime): log service startup errors instead of printing them beside the log [[#3140](https://github.com/opencloud-eu/opencloud/pull/3140)]
- fix(posixfs scan): Setup logger for scan command [[#3185](https://github.com/opencloud-eu/opencloud/pull/3185)]

### ✅ Tests

- api-test: mark group last-manager removal scenario as flaky [[#3194](https://github.com/opencloud-eu/opencloud/pull/3194)]
- rerun flaky tests [[#3183](https://github.com/opencloud-eu/opencloud/pull/3183)]
- api-test: fix removeAccessToDrive.feature:145 [[#3179](https://github.com/opencloud-eu/opencloud/pull/3179)]
- api-test: cover additional unified roles in acceptance tests [[#3169](https://github.com/opencloud-eu/opencloud/pull/3169)]
- test(apiAuthApp): fix flaky token pattern [[#3163](https://github.com/opencloud-eu/opencloud/pull/3163)]
- test(apiArchiver): the single-resource archive is named after the resource [[#3080](https://github.com/opencloud-eu/opencloud/pull/3080)]
- test(coreApiWebdavUploadTUS): assert etag and permissions on the finalizing TUS chunk [[#3078](https://github.com/opencloud-eu/opencloud/pull/3078)]
- test(coreApiWebdavOperations): download a file with a literal "%" via its oc:downloadURL [[#3079](https://github.com/opencloud-eu/opencloud/pull/3079)]

### 📚 Documentation

- maint: clean-up auth-app documentation [[#3155](https://github.com/opencloud-eu/opencloud/pull/3155)]
- ci: sync tests/README.md to docs [[#3164](https://github.com/opencloud-eu/opencloud/pull/3164)]

## Reva

### 📈 Enhancement

- Add a helper which checks if a resource is still being processed [[#742](https://github.com/opencloud-eu/reva/pull/742)]
- enhancement: Add database name to kv log output [[#748](https://github.com/opencloud-eu/reva/pull/748)]

### 🐛 Bug Fixes

- Do not disregard disabled spaces when propagating changes [[#751](https://github.com/opencloud-eu/reva/pull/751)]
- fix(metadata/hybrid): Avoid resurrecting space root directory [[#739](https://github.com/opencloud-eu/reva/pull/739)]

## Web

### 🐛 Bug Fixes

- Fix pagination and items-per-page behavior in Spaces and Trash overview [[#3007](https://github.com/opencloud-eu/web/pull/3007)]
- fix: loading trash bin overview with lots of spaces [[#2986](https://github.com/opencloud-eu/web/pull/2986)]
- fix: use Inter as the default font [[#2988](https://github.com/opencloud-eu/web/pull/2988)]
- fix: reset custom props not defined by the active theme [[#2972](https://github.com/opencloud-eu/web/pull/2972)]
- fix: retry silent token renewal before logout on auth error [[#2951](https://github.com/opencloud-eu/web/pull/2951)]
- fix: loading user avatars won't get cancelled when changing route [[#2962](https://github.com/opencloud-eu/web/pull/2962)]
- fix: resolve hardcoded absolute image paths under a subpath deployment [[#2956](https://github.com/opencloud-eu/web/pull/2956)]
- fix(pdf-viewer): harden rendering of PDFs [[#2933](https://github.com/opencloud-eu/web/pull/2933)]
- fix(tiptap): prevent images from stretching while increasing size [[#2927](https://github.com/opencloud-eu/web/pull/2927)]
- fix: batch action labels with limited screen size [[#2931](https://github.com/opencloud-eu/web/pull/2931)]
- fix: admin settings icon color in dark mode [[#2911](https://github.com/opencloud-eu/web/pull/2911)]
- fix: topbar left extension point placement [[#2901](https://github.com/opencloud-eu/web/pull/2901)]
- fix: bring back space image submenu grouping [[#2880](https://github.com/opencloud-eu/web/pull/2880)]
- fix: app top bar resource name colors [[#2886](https://github.com/opencloud-eu/web/pull/2886)]
- fix: add space after password label when copying [[#2881](https://github.com/opencloud-eu/web/pull/2881)]
- Vault status indicator icon [[#2873](https://github.com/opencloud-eu/web/pull/2873)]
- fix (vault): cancel button width [[#2872](https://github.com/opencloud-eu/web/pull/2872)]

### 📈 Enhancement

- feat: rework public and permanent link resolving [[#2981](https://github.com/opencloud-eu/web/pull/2981)]
- feat (tiptap): plus menu [[#2973](https://github.com/opencloud-eu/web/pull/2973)]
- feat: add empty extensions state icon [[#2991](https://github.com/opencloud-eu/web/pull/2991)]
- feat: add announcement banner [[#2967](https://github.com/opencloud-eu/web/pull/2967)]
- perf: use pagination in sidebar user lists [[#2965](https://github.com/opencloud-eu/web/pull/2965)]
- feat: tiptap - Insert and edit Links [[#2930](https://github.com/opencloud-eu/web/pull/2930)]
- feat: expose the active theme as html[data-theme] [[#2971](https://github.com/opencloud-eu/web/pull/2971)]
- perf: improve user and groups list loading in admin-settings [[#2963](https://github.com/opencloud-eu/web/pull/2963)]
- perf: improve render times with lots of paginated items [[#2958](https://github.com/opencloud-eu/web/pull/2958)]
- feat (tiptap): move blocks [[#2950](https://github.com/opencloud-eu/web/pull/2950)]
- perf: improve folder loading times in tiles view [[#2945](https://github.com/opencloud-eu/web/pull/2945)]
- perf: improve file selection in table view [[#2940](https://github.com/opencloud-eu/web/pull/2940)]
- perf: improve file selection in tiles view [[#2939](https://github.com/opencloud-eu/web/pull/2939)]
- feat(tiptap): add Tiptap toolbar support [[#2793](https://github.com/opencloud-eu/web/pull/2793)]
- feat(tiptap): add image drag and drop [[#2926](https://github.com/opencloud-eu/web/pull/2926)]
- feat(tiptap): add image resizing [[#2924](https://github.com/opencloud-eu/web/pull/2924)]
- feat(tiptap): add zoom feature [[#2922](https://github.com/opencloud-eu/web/pull/2922)]
- feat(tiptap): add emoji menu [[#2923](https://github.com/opencloud-eu/web/pull/2923)]
- feat(admin-settings): enable name sorting for extension overview [[#2907](https://github.com/opencloud-eu/web/pull/2907)]
- feat(admin-settings): extension overview [[#2889](https://github.com/opencloud-eu/web/pull/2889)]
- feat(extension-sdk): inject package.json metadata into manifest.json [[#2894](https://github.com/opencloud-eu/web/pull/2894)]
- feat: Support registration for submenus on context menu for plugins [[#2830](https://github.com/opencloud-eu/web/pull/2830)]

### 📚 Documentation

- ci: sync e2e/README.md to docs [[#2938](https://github.com/opencloud-eu/web/pull/2938)]
- docs(e2e): add README how to run e2e tests [[#2884](https://github.com/opencloud-eu/web/pull/2884)]

### ✅ Tests

- e2e-fix: a11y flaky in webkit [[#2913](https://github.com/opencloud-eu/web/pull/2913)]
- add settings for e2e tests in vscode [[#2870](https://github.com/opencloud-eu/web/pull/2870)]