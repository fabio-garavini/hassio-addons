> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Releasenotes OpenCloud 7.0.0

## ⏳ First startup may take a few minutes

After the update, the first container startup may take a few minutes before all Spaces are available. Feel free to grab a cup of coffee meanwhile.
**Background: Share-Manager migration**
OpenCloud 7.0.0 changes the way how space memberships are managed in the backend. When upgrading from a previous release the "sharing" service will automatically run a migration task to convert existing space memberships to the new mechanism. Depending on the number of spaces and space members this task can take up to a few minutes. During that time the member listing of spaces might be incorrect. Also it is not possible to change space memberships or create/delete spaces while the task is running. When the loglevel of the `sharing` service is set to `info` (`OC_LOG_LEVEL=info` or `SHARING_LOG_LEVEL=info`) the task will report progress of the migration via the logfile.

The upgrade requires an change to the configuration of the "sharing" service. Please follow the steps outlined in the [Upgrade Guide](https://docs.opencloud.eu/docs/admin/maintenance/upgrade/upgrade-guide#verify-configuration-changes) to achieve that.

## [7.0.0](https://github.com/opencloud-eu/opencloud/releases/tag/v7.0.0) - 2026-05-21

### ❤️ Thanks to all contributors! ❤️

@AlexAndBear, @SAY-5, @ScharfViktor, @Svanvith, @butonic, @dragonchaser, @dschmidt, @fschade, @micbar, @michaelstingl, @rhafer, @aduffeck, @JammingBen, @tammi-23 

## Opencloud

### 💥 Breaking changes

- Persist space memberships in share manager [[#2760](https://github.com/opencloud-eu/opencloud/pull/2760)]
- [feature/guest-links] bump reva, add service user config to "sharing" service [[#2735](https://github.com/opencloud-eu/opencloud/pull/2735)]

### 🔒 Security

- fix: disallow thumbnails for tiff and jpeg2000 images [[#2758](https://github.com/opencloud-eu/opencloud/pull/2758)]

### 🐛 Bug Fixes

- fix(notifications): don't re-escape email vars for each recipient [[#2805](https://github.com/opencloud-eu/opencloud/pull/2805)]
- fix: remove unnecessary error log it the oidc access token verify method is set to none [[#2795](https://github.com/opencloud-eu/opencloud/pull/2795)]
- fix(debug): drop duplicate service field from probe fallback log [[#2786](https://github.com/opencloud-eu/opencloud/pull/2786)]
- No registry lookup in cli [[#2755](https://github.com/opencloud-eu/opencloud/pull/2755)]
- fix(webdav): register chi REPORT method in init to avoid race with settings [[#2712](https://github.com/opencloud-eu/opencloud/pull/2712)]
- fix: use runner to start activitylog service [[#2748](https://github.com/opencloud-eu/opencloud/pull/2748)]
- docs(search): fix force-rescan flag name in README [[#2747](https://github.com/opencloud-eu/opencloud/pull/2747)]

### ✅ Tests

- [full-ci] preview-tests. update fixtures for different processors [[#2767](https://github.com/opencloud-eu/opencloud/pull/2767)]
- test: modify exclude list and add coverage upload [[#2762](https://github.com/opencloud-eu/opencloud/pull/2762)]
- fix: cleaner debounce timer test [[#2743](https://github.com/opencloud-eu/opencloud/pull/2743)]

### 📚 Documentation

- Update README with LDAP certificate details [[#2759](https://github.com/opencloud-eu/opencloud/pull/2759)]

### 📈 Enhancement

- feat(graph): populate driveItem.webUrl per Libre Graph spec [[#2744](https://github.com/opencloud-eu/opencloud/pull/2744)]

### 📦️ Dependencies

- build(deps): bump github.com/go-jose/go-jose/v3 from 3.0.4 to 3.0.5 [[#2798](https://github.com/opencloud-eu/opencloud/pull/2798)]
- build(deps): bump golang.org/x/image from 0.38.0 to 0.40.0 [[#2740](https://github.com/opencloud-eu/opencloud/pull/2740)]
- build(deps): bump github.com/tidwall/gjson from 1.18.0 to 1.19.0 [[#2750](https://github.com/opencloud-eu/opencloud/pull/2750)]
- build(deps-dev): bump dotenv-expand from 12.0.3 to 13.0.0 in /services/idp [[#2710](https://github.com/opencloud-eu/opencloud/pull/2710)]
- build(deps): bump github.com/onsi/ginkgo/v2 from 2.28.1 to 2.28.3 [[#2739](https://github.com/opencloud-eu/opencloud/pull/2739)]

## Reva

### ✨ Features

- [feature/guest-links] introduce migration framework and import spacemember shares [[#617](https://github.com/opencloud-eu/reva/pull/617)]
- [feature/guest-links] Manage space membership in shareprovider [[#593](https://github.com/opencloud-eu/reva/pull/593)]

### 🐛 Bug Fixes

- fix(sharing/jsoncs3): Reject Write Requests while migration is running [[#642](https://github.com/opencloud-eu/reva/pull/642)]
- Revert "Fall back to disk if ids aren't available from the cache" [[#644](https://github.com/opencloud-eu/reva/pull/644)]
- Log nats connection issues and trigger a shutdown if reconnecting failed [[#640](https://github.com/opencloud-eu/reva/pull/640)]
- ldap: Set a default request timeout [[#637](https://github.com/opencloud-eu/reva/pull/637)]
- Ignore in-tree lockfiles if collaborative mode is disabled [[#633](https://github.com/opencloud-eu/reva/pull/633)]
- Do not mask real cache errors with "not found" errors [[#635](https://github.com/opencloud-eu/reva/pull/635)]
- fix(jsoncs3-sharemanager): Make migrations interruptible [[#627](https://github.com/opencloud-eu/reva/pull/627)]

### 📈 Enhancement

- Retry nats requests in the id cache [[#641](https://github.com/opencloud-eu/reva/pull/641)]
- Persist space memberships in share manager [[#634](https://github.com/opencloud-eu/reva/pull/634)]

### 📦️ Dependencies

- chore(deps): bump go.etcd.io/etcd/client/v3 from 3.6.10 to 3.6.11 [[#631](https://github.com/opencloud-eu/reva/pull/631)]
- chore(deps): bump the go_modules group across 1 directory with 2 updates [[#636](https://github.com/opencloud-eu/reva/pull/636)]
- chore(deps): bump github.com/go-git/go-git/v5 from 5.18.0 to 5.19.0 in the go_modules group across 1 directory [[#628](https://github.com/opencloud-eu/reva/pull/628)]


## Web
### ✅ Tests

- test(e2e): add expiration date indicator checks for public link and s… [[#2539](https://github.com/opencloud-eu/web/pull/2539)]
- [e2e-tests] waiting upload response [[#2494](https://github.com/opencloud-eu/web/pull/2494)]
- [e2e-tests] upload folder with different options [[#2483](https://github.com/opencloud-eu/web/pull/2483)]

### 🐛 Bug Fixes

- fix: skip upload conflict check when uploads target a non-current folder [[#2513](https://github.com/opencloud-eu/web/pull/2513)]
- fix: expiration date does not get applied when creating a new share [[#2514](https://github.com/opencloud-eu/web/pull/2514)]
- fix: secret file drop share view is cut off on mobile [[#2511](https://github.com/opencloud-eu/web/pull/2511)]
- fix: pixelated space images [[#2509](https://github.com/opencloud-eu/web/pull/2509)]
- fix: mobile bottom drawer is not setting aria attributes [[#2508](https://github.com/opencloud-eu/web/pull/2508)]
- fix: service announcement order [[#2506](https://github.com/opencloud-eu/web/pull/2506)]
- fix: left sidebar doesn't scroll [[#2502](https://github.com/opencloud-eu/web/pull/2502)]
- fix(editor): missing content [[#2501](https://github.com/opencloud-eu/web/pull/2501)]
- fix: search term overlaps filter in global search [[#2497](https://github.com/opencloud-eu/web/pull/2497)]
- fix: modal actions when creating links are missing disable during cre… [[#2498](https://github.com/opencloud-eu/web/pull/2498)]
- fix: rename icon overlaps quota column when space name is truncated [[#2493](https://github.com/opencloud-eu/web/pull/2493)]
- fix: changing username of the current user shows error after successf… [[#2499](https://github.com/opencloud-eu/web/pull/2499)]
- fix: prevent modal title actions from wrapping [[#2495](https://github.com/opencloud-eu/web/pull/2495)]
- Fix mail validation layout issue [[#2492](https://github.com/opencloud-eu/web/pull/2492)]
- fix: missing space actions in favorites and search [[#2488](https://github.com/opencloud-eu/web/pull/2488)]
- fix: FAB overlaps actions in embed mode [[#2489](https://github.com/opencloud-eu/web/pull/2489)]
- fix: checkboxes are not vertically centered in file tables [[#2491](https://github.com/opencloud-eu/web/pull/2491)]

### 📦️ Dependencies

- chore(deps): update dependency p-queue to v9.3.0 [[#2541](https://github.com/opencloud-eu/web/pull/2541)]
- fix(deps): update dependency zod to v4.4.3 [[#2536](https://github.com/opencloud-eu/web/pull/2536)]
- chore(deps): update traefik docker tag to v3.7.1 [[#2534](https://github.com/opencloud-eu/web/pull/2534)]
- chore(deps): update dependency @types/node to v25.9.0 [[#2533](https://github.com/opencloud-eu/web/pull/2533)]
- fix(deps): update dependency vue-router to v5.0.7 [[#2523](https://github.com/opencloud-eu/web/pull/2523)]
- chore(deps): update dependency axios to v1.16.1 [[#2525](https://github.com/opencloud-eu/web/pull/2525)]
- chore(deps): update dependency vue-tsc to v3.3.0 [[#2530](https://github.com/opencloud-eu/web/pull/2530)]
- fix(deps): update dependency @sentry/vue to v10.53.1 [[#2531](https://github.com/opencloud-eu/web/pull/2531)]
- chore(deps): update dependency @vueuse/core to v14.3.0 [[#2524](https://github.com/opencloud-eu/web/pull/2524)]
- chore(deps): update tiptap monorepo to v3.23.4 [[#2528](https://github.com/opencloud-eu/web/pull/2528)]
- chore(deps): update dependency vue-router to v5.0.7 [[#2518](https://github.com/opencloud-eu/web/pull/2518)]
- chore(deps): update dependency fast-xml-parser to v5.8.0 [[#2526](https://github.com/opencloud-eu/web/pull/2526)]
- chore(deps): update typescript-eslint monorepo to v8.59.3 [[#2519](https://github.com/opencloud-eu/web/pull/2519)]
- fix(deps): update dependency qs to v6.15.2 [[#2522](https://github.com/opencloud-eu/web/pull/2522)]
- chore(deps): update dependency dompurify to v3.4.5 [[#2478](https://github.com/opencloud-eu/web/pull/2478)]
- chore(deps): update dependency eslint-plugin-vue to v10.9.1 [[#2516](https://github.com/opencloud-eu/web/pull/2516)]
- chore(deps): update devdependencies (non-major) [[#2481](https://github.com/opencloud-eu/web/pull/2481)]
- chore(deps): update pnpm to v10.33.4 [[#2482](https://github.com/opencloud-eu/web/pull/2482)]