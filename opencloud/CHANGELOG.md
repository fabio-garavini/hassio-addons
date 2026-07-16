> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Release Notes OpenCloud 7.3.0

## 🎨 A Calmer, More Focused Web Interface

The design refinement makes the interface feel more open and puts the focus on your content. The surrounding background now matches the sidebar (Material Design surface color), the **"New" button is far more prominent** with a subtle gradient, and there's a **brand-new set of custom-designed file type icons**.

## 📝 Editor Improvements (Markdown & Rich Text)

The editor gains several improvements: the block menu ("Turn into") now supports paragraphs, blockquotes and code blocks; **text alignment** is available for rich-text content; the color pickers now preview the actual color; and a new **source view** lets you edit the raw content directly.

## ✏️ Cleaner Editing / Viewing Experience

The top app bar got a fresh layout that prioritizes your essential info so you can focus entirely on your work. We also removed its border, giving the whole header a much lighter, more open feel.

## ✅ Grouped Batch Actions & Deselect

When you select multiple files, the available actions are now grouped together in a single bar at the top of the view — and a new **Deselect** button lets you clear your selection in one click.

## 💬 Mentions in Documents

Mention colleagues directly inside a document just like you're used to from other office suites. Mentioned people receive an in-app notification and an email pointing them to the document. Mentions resolve against the members of the space (including via groups), so you only ever notify people who already have access.

### ❤️ Thanks to all contributors! ❤️

@aduffeck, @AlexAndBear, @butonic, @cheneyveron, @dragonchaser, @dschmidt, @flash7777, @fschade, @JammingBen, @kulmann, @micbar, @michaelstingl, @openclouders, @pbleser-oc, @rhafer, @saw-jan, @schweigisito, @stonith404, @tammi-23, @tbsbdr, @tralph3, @v-scharf

## Opencloud
### 🐛 Bug Fixes

- fix(proxy): honor access token cache ttl [[#3056](https://github.com/opencloud-eu/opencloud/pull/3056)]
- chore(idp): update axios [[#3094](https://github.com/opencloud-eu/opencloud/pull/3094)]
- fix: make the collaboration service events optional [[#3001](https://github.com/opencloud-eu/opencloud/pull/3001)]
- Revert "fix: disallow thumbnails for tiff and jpeg2000 images" [[#2973](https://github.com/opencloud-eu/opencloud/pull/2973)]
- bump reva [[#2950](https://github.com/opencloud-eu/opencloud/pull/2950)]
- change error level for trashing items interaction with search [[#2951](https://github.com/opencloud-eu/opencloud/pull/2951)]
- fix: Send SSE events for SpaceEnabled/Disabled to affected users [[#2871](https://github.com/opencloud-eu/opencloud/pull/2871)]

### 📚 Documentation

- update collaboration readme [[#3076](https://github.com/opencloud-eu/opencloud/pull/3076)]
- fix: fix typo in proxy service documentation [[#3089](https://github.com/opencloud-eu/opencloud/pull/3089)]
- roling release template [[#2972](https://github.com/opencloud-eu/opencloud/pull/2972)]
- enhance: fix typos in webfinger service description [[#2958](https://github.com/opencloud-eu/opencloud/pull/2958)]

### ✅ Tests

- [full-ci] gherkin steps refactoring. cleaning code [[#3100](https://github.com/opencloud-eu/opencloud/pull/3100)]
- [decomposed] more cli command tests [[#3087](https://github.com/opencloud-eu/opencloud/pull/3087)]
- test(apiSpaces): a space admin can delete a space with no manager [[#3040](https://github.com/opencloud-eu/opencloud/pull/3040)]
- Update tests for opencloud-eu/reva#655 [[#2889](https://github.com/opencloud-eu/opencloud/pull/2889)]
- api-test: deleting space [[#2970](https://github.com/opencloud-eu/opencloud/pull/2970)]

### 📈 Enhancement

- feat: add disableSponsorLink web config option [[#3093](https://github.com/opencloud-eu/opencloud/pull/3093)]
- feat(graph): add MS Graph colon-syntax path lookup middleware [[#2688](https://github.com/opencloud-eu/opencloud/pull/2688)]
- feat: adjust theme chrome colors and logos [[#2599](https://github.com/opencloud-eu/opencloud/pull/2599)]
- add tls support for all nats connections [[#2063](https://github.com/opencloud-eu/opencloud/pull/2063)]
- feat: add more roles [[#2928](https://github.com/opencloud-eu/opencloud/pull/2928)]
- next to main [[#2924](https://github.com/opencloud-eu/opencloud/pull/2924)]
- feat: add core apps env variable to override the default core apps [[#2930](https://github.com/opencloud-eu/opencloud/pull/2930)]

### 📦️ Dependencies

- build(deps): bump golang.org/x/image from 0.43.0 to 0.44.0 [[#3112](https://github.com/opencloud-eu/opencloud/pull/3112)]
- build(deps): bump golang.org/x/text from 0.39.0 to 0.40.0 [[#3101](https://github.com/opencloud-eu/opencloud/pull/3101)]
- [full-ci] chore: bump web to v7.2.0 [[#3121](https://github.com/opencloud-eu/opencloud/pull/3121)]
- build(deps): bump golang.org/x/term from 0.44.0 to 0.45.0 [[#3103](https://github.com/opencloud-eu/opencloud/pull/3103)]
- build(deps): bump github.com/coreos/go-oidc/v3 from 3.19.0 to 3.20.0 [[#3102](https://github.com/opencloud-eu/opencloud/pull/3102)]
- build(deps): bump golang.org/x/text from 0.38.0 to 0.39.0 [[#3085](https://github.com/opencloud-eu/opencloud/pull/3085)]
- build(deps): bump github.com/go-chi/chi/v5 from 5.3.0 to 5.3.1 [[#3073](https://github.com/opencloud-eu/opencloud/pull/3073)]
- build(deps): bump github.com/nats-io/nats-server/v2 from 2.14.2 to 2.14.3 [[#3063](https://github.com/opencloud-eu/opencloud/pull/3063)]
- build(deps): bump github.com/gookit/config/v2 from 2.2.8 to 2.2.9 [[#3075](https://github.com/opencloud-eu/opencloud/pull/3075)]
- build(deps): bump github.com/open-policy-agent/opa from 1.18.1 to 1.18.2 [[#3061](https://github.com/opencloud-eu/opencloud/pull/3061)]
- build(deps): bump github.com/kovidgoyal/imaging from 1.8.21 to 1.8.22 [[#3060](https://github.com/opencloud-eu/opencloud/pull/3060)]
- build(deps): bump github.com/libregraph/lico from 0.66.0 to 0.67.0 [[#3028](https://github.com/opencloud-eu/opencloud/pull/3028)]
- chore: bump web to v7.2.0-beta.3 [[#2953](https://github.com/opencloud-eu/opencloud/pull/2953)]
- chore: bump reva to latest main [[#2943](https://github.com/opencloud-eu/opencloud/pull/2943)]

## Reva
### 🐛 Bug Fixes

- Fix Metadata locking and Reading for decomposedfs and align defaults with OpenCloud [[#722](https://github.com/opencloud-eu/reva/pull/722)]
- Fix warming up the id cache for the user storage [[#727](https://github.com/opencloud-eu/reva/pull/727)]
- fix(decomposedfs): merge service account permissions with node grants [[#723](https://github.com/opencloud-eu/reva/pull/723)]
- fix: retry xattr.List on ERANGE/E2BIG [[#717](https://github.com/opencloud-eu/reva/pull/717)]
- fix: space delete unit test [[#716](https://github.com/opencloud-eu/reva/pull/716)]
- fix: status codes on DeleteStorageSpace [[#691](https://github.com/opencloud-eu/reva/pull/691)]
- Prevent access to internal files and folders [[#681](https://github.com/opencloud-eu/reva/pull/681)]
- fix(tus): Upload checksum validation [[#677](https://github.com/opencloud-eu/reva/pull/677)]

### 📈 Enhancement

- feat(tus): return etag and permissions after the last TUS chunk [[#718](https://github.com/opencloud-eu/reva/pull/718)]
- Sync uploads incrementally to avoid fsync freezes [[#720](https://github.com/opencloud-eu/reva/pull/720)]
- feat: add more roles [[#671](https://github.com/opencloud-eu/reva/pull/671)]

### 📚 Documentation

- doc: Update docs related to how the changelog works [[#708](https://github.com/opencloud-eu/reva/pull/708)]

### 📦️ Dependencies

- chore(deps): bump go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc from 0.68.0 to 0.69.0 [[#736](https://github.com/opencloud-eu/reva/pull/736)]
- chore(deps): bump github.com/go-ldap/ldap/v3 from 3.4.12 to 3.4.13 [[#733](https://github.com/opencloud-eu/reva/pull/733)]
- chore(deps): bump github.com/minio/minio-go/v7 from 7.1.0 to 7.2.1 [[#734](https://github.com/opencloud-eu/reva/pull/734)]
- chore(deps): bump go.etcd.io/etcd/client/v3 from 3.6.11 to 3.6.13 [[#732](https://github.com/opencloud-eu/reva/pull/732)]
- chore(deps): bump github.com/prometheus/alertmanager from 0.31.1 to 0.33.1 [[#731](https://github.com/opencloud-eu/reva/pull/731)]
- chore(deps): bump golang.org/x/image from 0.38.0 to 0.41.0 in the go_modules group across 1 directory [[#726](https://github.com/opencloud-eu/reva/pull/726)]
- chore(deps): bump google.golang.org/grpc from 1.81.1 to 1.82.0 [[#724](https://github.com/opencloud-eu/reva/pull/724)]
- chore(deps): bump github.com/tus/tusd/v2 from 2.9.2 to 2.10.0 [[#725](https://github.com/opencloud-eu/reva/pull/725)]
- chore(deps): bump github.com/go-chi/chi/v5 from 5.2.5 to 5.3.0 [[#715](https://github.com/opencloud-eu/reva/pull/715)]
- chore(deps): bump github.com/nats-io/nats-server/v2 from 2.14.2 to 2.14.3 [[#721](https://github.com/opencloud-eu/reva/pull/721)]
- chore(deps): bump github.com/rogpeppe/go-internal from 1.14.1 to 1.15.0 [[#719](https://github.com/opencloud-eu/reva/pull/719)]
- chore(deps): bump github.com/nats-io/nats.go from 1.51.0 to 1.52.0 [[#714](https://github.com/opencloud-eu/reva/pull/714)]
- chore(deps): bump github.com/segmentio/kafka-go from 0.4.50 to 0.4.51 [[#706](https://github.com/opencloud-eu/reva/pull/706)]
- chore(deps): bump github.com/onsi/gomega from 1.40.0 to 1.42.1 [[#704](https://github.com/opencloud-eu/reva/pull/704)]
- chore(deps): bump golang.org/x/text from 0.37.0 to 0.38.0 [[#705](https://github.com/opencloud-eu/reva/pull/705)]
- chore(deps): bump github.com/rs/zerolog from 1.35.0 to 1.35.1 [[#699](https://github.com/opencloud-eu/reva/pull/699)]
- chore(deps): bump github.com/ceph/go-ceph from 0.39.0 to 0.40.0 [[#689](https://github.com/opencloud-eu/reva/pull/689)]
- chore(deps): bump go.mongodb.org/mongo-driver from 1.17.6 to 1.17.7 in the go_modules group across 1 directory [[#694](https://github.com/opencloud-eu/reva/pull/694)]
- chore(deps): bump github.com/onsi/ginkgo/v2 from 2.28.1 to 2.31.0 [[#690](https://github.com/opencloud-eu/reva/pull/690)]
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.43.0 to 1.44.0 [[#684](https://github.com/opencloud-eu/reva/pull/684)]
- chore(deps): bump github.com/nats-io/nats-server/v2 from 2.14.0 to 2.14.2 [[#683](https://github.com/opencloud-eu/reva/pull/683)]
- chore(deps): bump go.opentelemetry.io/otel from 1.43.0 to 1.44.0 [[#667](https://github.com/opencloud-eu/reva/pull/667)]
- chore(deps): bump github.com/fsnotify/fsnotify from 1.8.0 to 1.10.1 [[#630](https://github.com/opencloud-eu/reva/pull/630)]

## Web
### 🔒 Security

- chore(deps): bump transitive axios to v1.6 [[#2640](https://github.com/opencloud-eu/web/pull/2640)]

### 📚 Documentation

- 🎉 Release 7.2.0 [[#2660](https://github.com/opencloud-eu/web/pull/2660)]

### 🐛 Bug Fixes

- fix: batch actions space issues [[#2852](https://github.com/opencloud-eu/web/pull/2852)]
- fix: adjust vault to our overall design language [[#2865](https://github.com/opencloud-eu/web/pull/2865)]
- fix (tiptap): no content hint color on dark mode [[#2851](https://github.com/opencloud-eu/web/pull/2851)]
- fix: name sorting in files table is off when folder name contains a dot [[#2843](https://github.com/opencloud-eu/web/pull/2843)]
- fix: include registered extra props in PROPFIND request body [[#2726](https://github.com/opencloud-eu/web/pull/2726)]
- fix: Prevent Enter during IME compose in submission dialogs [[#2803](https://github.com/opencloud-eu/web/pull/2803)]
- fix: fixing mailcompose Tiptap toolbar dropdowns [[#2795](https://github.com/opencloud-eu/web/pull/2795)]
- fix: align inline search inputs & a11y [[#2775](https://github.com/opencloud-eu/web/pull/2775)]
- fix (tiptap): don't render html files via html strategy [[#2774](https://github.com/opencloud-eu/web/pull/2774)]
- fix: isolate module federation shared scope per app [[#2768](https://github.com/opencloud-eu/web/pull/2768)]
- fix: select personal account (isPersonal) instead of first in account… [[#2762](https://github.com/opencloud-eu/web/pull/2762)]
- fix: file list scroll after closing an editor [[#2752](https://github.com/opencloud-eu/web/pull/2752)]
- fix: markdown toggle source [[#2733](https://github.com/opencloud-eu/web/pull/2733)]
- fix: delete space action showing for space managers [[#2649](https://github.com/opencloud-eu/web/pull/2649)]
- fix: hide restore action in the version sidebar panel if the resource permission is missing [[#2704](https://github.com/opencloud-eu/web/pull/2704)]
- fix: reduce fields in Upload-Metadata header [[#2702](https://github.com/opencloud-eu/web/pull/2702)]
- fix: version loading on search and favorite pages [[#2676](https://github.com/opencloud-eu/web/pull/2676)]
- fix: make upload dialog collapsible so it won't overlap certain views [[#2688](https://github.com/opencloud-eu/web/pull/2688)]
- fix: after disabling and enabling space user cannot create resources/… [[#2687](https://github.com/opencloud-eu/web/pull/2687)]
- fix: don't query contacts for space members [[#2678](https://github.com/opencloud-eu/web/pull/2678)]
- fix: listing versions for share receivers [[#2667](https://github.com/opencloud-eu/web/pull/2667)]
- fix: finetune contact invite error messages [[#2669](https://github.com/opencloud-eu/web/pull/2669)]
- fix: load missing space permissions in app wrapper [[#2653](https://github.com/opencloud-eu/web/pull/2653)]
- fix: prevent loosing mailcompose state [[#2618](https://github.com/opencloud-eu/web/pull/2618)]
- fix: some logos won't be shown in top bar [[#2627](https://github.com/opencloud-eu/web/pull/2627)]

### 📈 Enhancement

- feat: LocationPickerModal allow file name suggestions [[#2829](https://github.com/opencloud-eu/web/pull/2829)]
- feat: set icon for game files [[#2856](https://github.com/opencloud-eu/web/pull/2856)]
- feat: add icon for nes files [[#2846](https://github.com/opencloud-eu/web/pull/2846)]
- feat: add sponsor link to left sidebar [[#2839](https://github.com/opencloud-eu/web/pull/2839)]
- feat: new file type icons [[#2822](https://github.com/opencloud-eu/web/pull/2822)]
- feat: adjust no content message image colors design system tokens [[#2805](https://github.com/opencloud-eu/web/pull/2805)]
- feat: remove unnecessary white spaces [[#2806](https://github.com/opencloud-eu/web/pull/2806)]
- feat: redesign app top bar [[#2797](https://github.com/opencloud-eu/web/pull/2797)]
- feat(tiptap): make heading toolbar more versatile (turn into) [[#2786](https://github.com/opencloud-eu/web/pull/2786)]
- feat: add gradient to new fab button [[#2783](https://github.com/opencloud-eu/web/pull/2783)]
- feat(tiptap): add text alignment controls [[#2778](https://github.com/opencloud-eu/web/pull/2778)]
- feat(tiptap): show colors in text color and background color actions [[#2779](https://github.com/opencloud-eu/web/pull/2779)]
- feat (tiptap): enable source mode for html files [[#2760](https://github.com/opencloud-eu/web/pull/2760)]
- feat: redesign batch actions [[#2589](https://github.com/opencloud-eu/web/pull/2589)]
- feat: add extra extensions to text editor app [[#2512](https://github.com/opencloud-eu/web/pull/2512)]
- feat: make collaboration settings app public [[#2654](https://github.com/opencloud-eu/web/pull/2654)]
-  feat: rclone-crypt folder vault [[#2639](https://github.com/opencloud-eu/web/pull/2639)]
- feat: add sse event handler for space enabled [[#2652](https://github.com/opencloud-eu/web/pull/2652)]
- feat: implement user mentions in Collabora docs [[#2601](https://github.com/opencloud-eu/web/pull/2601)]

### ✅ Tests

- e2e-test: add to favorites using batch action [[#2840](https://github.com/opencloud-eu/web/pull/2840)]
- fix(e2e): sync singular/plural wording in step tables [[#2799](https://github.com/opencloud-eu/web/pull/2799)]
- tests: use native locator.drop() [[#2798](https://github.com/opencloud-eu/web/pull/2798)]
- [full-ci] replace cucumber [[#2476](https://github.com/opencloud-eu/web/pull/2476)]
- [e2e-test] Vault test [[#2730](https://github.com/opencloud-eu/web/pull/2730)]
- e2e-test: archive uses folder name [[#2694](https://github.com/opencloud-eu/web/pull/2694)]
- e2e-test: enable-disable-delete sse event [[#2670](https://github.com/opencloud-eu/web/pull/2670)]

### 📦️ Dependencies

- fix(deps): update dependency @sentry/vue to v10.65.0 [[#2859](https://github.com/opencloud-eu/web/pull/2859)]
- chore(deps): update pnpm to v11.12.0 [[#2850](https://github.com/opencloud-eu/web/pull/2850)]
- chore(deps): update devdependencies (non-major) [[#2861](https://github.com/opencloud-eu/web/pull/2861)]
- chore(deps): update dependency @floating-ui/dom to v1.8.0 [[#2862](https://github.com/opencloud-eu/web/pull/2862)]
- chore(deps): update dependency dompurify to v3.4.12 [[#2863](https://github.com/opencloud-eu/web/pull/2863)]
- chore(deps): update dependency fast-xml-parser to v5.10.0 [[#2864](https://github.com/opencloud-eu/web/pull/2864)]
- chore(deps): update devdependencies (non-major) [[#2844](https://github.com/opencloud-eu/web/pull/2844)]
- chore(deps): update tiptap monorepo to v3.27.3 [[#2833](https://github.com/opencloud-eu/web/pull/2833)]
- chore(deps): update dependency filesize to v11.0.22 [[#2848](https://github.com/opencloud-eu/web/pull/2848)]
- chore(deps): update traefik docker tag to v3.7.7 [[#2847](https://github.com/opencloud-eu/web/pull/2847)]
- fix(deps): update dependency @sentry/vue to v10.64.0 [[#2834](https://github.com/opencloud-eu/web/pull/2834)]
- fix(deps): update dependency @casl/ability to v7.0.1 [[#2815](https://github.com/opencloud-eu/web/pull/2815)]
- chore(deps): update dependency @casl/vue to v3.0.1 [[#2813](https://github.com/opencloud-eu/web/pull/2813)]
- chore(deps): update tiptap monorepo to v3.27.2 [[#2809](https://github.com/opencloud-eu/web/pull/2809)]
- chore(deps): update typescript-eslint monorepo to v8.63.0 [[#2811](https://github.com/opencloud-eu/web/pull/2811)]
- chore(deps): update devdependencies (non-major) to v4.1.10 [[#2808](https://github.com/opencloud-eu/web/pull/2808)]
- chore(deps): update pnpm to v11.10.0 [[#2804](https://github.com/opencloud-eu/web/pull/2804)]
- chore(deps): update dependency p-queue to v9.3.1 [[#2802](https://github.com/opencloud-eu/web/pull/2802)]
- chore(deps): update dependency vite to v8.1.3 [[#2801](https://github.com/opencloud-eu/web/pull/2801)]
- chore(deps): update collabora/code docker tag to v26.04.2.1.1 [[#2790](https://github.com/opencloud-eu/web/pull/2790)]
- chore(deps): update collabora/code docker tag to v26.04.2.1.1 [[#2787](https://github.com/opencloud-eu/web/pull/2787)]
- fix(deps): update dependency @sentry/vue to v10.63.0 [[#2788](https://github.com/opencloud-eu/web/pull/2788)]
- chore(deps): update traefik docker tag to v3.7.6 [[#2784](https://github.com/opencloud-eu/web/pull/2784)]
- chore(deps): update devdependencies (non-major) [[#2781](https://github.com/opencloud-eu/web/pull/2781)]
- Update devDependencies (non-major) to v4.3.2 [[#2766](https://github.com/opencloud-eu/web/pull/2766)]
- Update typescript-eslint monorepo to v8.62.1 [[#2769](https://github.com/opencloud-eu/web/pull/2769)]
- Update dependency filesize to v11.0.19 [[#2753](https://github.com/opencloud-eu/web/pull/2753)]
- Update devDependencies (non-major) [[#2749](https://github.com/opencloud-eu/web/pull/2749)]
- Update dependency @sentry/vue to v10.62.0 [[#2754](https://github.com/opencloud-eu/web/pull/2754)]
- Update dependency @sentry/vue to v10.61.0 [[#2751](https://github.com/opencloud-eu/web/pull/2751)]
- Update vue monorepo to v3.5.39 [[#2750](https://github.com/opencloud-eu/web/pull/2750)]
- Update dependency qs to v6.15.3 [[#2747](https://github.com/opencloud-eu/web/pull/2747)]
- Update devDependencies (non-major) [[#2738](https://github.com/opencloud-eu/web/pull/2738)]
- Update devDependencies (non-major) [[#2734](https://github.com/opencloud-eu/web/pull/2734)]
- Update pnpm to v11.9.0 [[#2736](https://github.com/opencloud-eu/web/pull/2736)]
- Update tiptap monorepo to v3.27.1 [[#2717](https://github.com/opencloud-eu/web/pull/2717)]
- Update dependency focus-trap to v8 [[#2685](https://github.com/opencloud-eu/web/pull/2685)]
- Update sentry-javascript monorepo [[#2735](https://github.com/opencloud-eu/web/pull/2735)]
- Update Node.js to v24.18.0 [[#2718](https://github.com/opencloud-eu/web/pull/2718)]
- Update typescript-eslint monorepo to v8.62.0 [[#2732](https://github.com/opencloud-eu/web/pull/2732)]
- Update dependency axios to v1.18.1 [[#2731](https://github.com/opencloud-eu/web/pull/2731)]
- Update devDependencies (non-major) [[#2713](https://github.com/opencloud-eu/web/pull/2713)]
- Update dependency fast-xml-parser to v5.9.3 [[#2716](https://github.com/opencloud-eu/web/pull/2716)]
- Update dependency uuid to v14.0.1 [[#2724](https://github.com/opencloud-eu/web/pull/2724)]
- Update sentry-javascript monorepo [[#2722](https://github.com/opencloud-eu/web/pull/2722)]
- Update pnpm to v11.8.0 [[#2719](https://github.com/opencloud-eu/web/pull/2719)]
- Update dependency dompurify to v3.4.11 [SECURITY] [[#2723](https://github.com/opencloud-eu/web/pull/2723)]
- chore(deps): update devdependencies (non-major) [[#2603](https://github.com/opencloud-eu/web/pull/2603)]
- fix(deps): update dependency vue3-gettext to v4.0.1 [[#2643](https://github.com/opencloud-eu/web/pull/2643)]
- chore(deps): update dependency fast-xml-parser to v5.9.0 [[#2696](https://github.com/opencloud-eu/web/pull/2696)]
- chore(deps): update pnpm to v11.7.0 [[#2697](https://github.com/opencloud-eu/web/pull/2697)]
- chore(deps): update typescript-eslint monorepo to v8.61.1 [[#2701](https://github.com/opencloud-eu/web/pull/2701)]
- fix(deps): update sentry-javascript monorepo to v10.58.0 [[#2698](https://github.com/opencloud-eu/web/pull/2698)]
- chore(deps): update tiptap monorepo to v3.26.1 [[#2673](https://github.com/opencloud-eu/web/pull/2673)]
- chore(deps): update dependency axios to v1.18.0 [[#2689](https://github.com/opencloud-eu/web/pull/2689)]
- Update tailwindcss monorepo to v4.3.1 [[#2681](https://github.com/opencloud-eu/web/pull/2681)]
- Update traefik Docker tag to v3.7.5 [[#2666](https://github.com/opencloud-eu/web/pull/2666)]
- Update pnpm to v11.6.0 [[#2679](https://github.com/opencloud-eu/web/pull/2679)]
- Update dependency dompurify to v3.4.10 [[#2680](https://github.com/opencloud-eu/web/pull/2680)]
- chore(deps): update dependency dompurify to v3.4.9 [[#2663](https://github.com/opencloud-eu/web/pull/2663)]
- chore(deps): update pnpm to v11.5.3 [[#2665](https://github.com/opencloud-eu/web/pull/2665)]
- fix(deps): update sentry-javascript monorepo to v10.57.0 [[#2656](https://github.com/opencloud-eu/web/pull/2656)]
- chore(deps): update collabora/code docker tag to v26 [[#2645](https://github.com/opencloud-eu/web/pull/2645)]
- chore(deps): update typescript-eslint monorepo to v8.61.0 [[#2647](https://github.com/opencloud-eu/web/pull/2647)]
- chore(deps): update dependency axios to v1.17.0 [[#2644](https://github.com/opencloud-eu/web/pull/2644)]
- fix(deps): update sentry-javascript monorepo to v10.56.0 [[#2615](https://github.com/opencloud-eu/web/pull/2615)]
- fix(deps): update dependency vue-router to v5.1.0 [[#2617](https://github.com/opencloud-eu/web/pull/2617)]
- chore(deps): update tiptap monorepo to v3.26.0 [[#2620](https://github.com/opencloud-eu/web/pull/2620)]
- chore(deps): update typescript-eslint monorepo to v8.60.1 [[#2630](https://github.com/opencloud-eu/web/pull/2630)]
- chore(deps): update dependency dompurify to v3.4.8 [[#2641](https://github.com/opencloud-eu/web/pull/2641)]
- chore(deps): update traefik docker tag to v3.7.4 [[#2642](https://github.com/opencloud-eu/web/pull/2642)]
- chore(deps): update apache/tika docker tag to v3.3.1.0 [[#2607](https://github.com/opencloud-eu/web/pull/2607)]
- chore(deps): update pnpm to v11.5.2 [[#2619](https://github.com/opencloud-eu/web/pull/2619)]
- fix(deps): update dependency fuse.js to v7.4.2 [[#2623](https://github.com/opencloud-eu/web/pull/2623)]
- chore(deps): update dependency eslint-plugin-vue to v10.9.2 [[#2635](https://github.com/opencloud-eu/web/pull/2635)]