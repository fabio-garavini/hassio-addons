> [!IMPORTANT]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

## [9.2.0](https://github.com/opencloud-eu/opencloud/releases/tag/v9.2.0) - 2026-11-17

### ❤️ Thanks to all contributors! ❤️

@AlexAndBear, @Pflum, @aduffeck, @asaah262, @butonic, @dragonchaser, @pbleser-oc, @v-scharf, @JammingBen, @kulmann

## Opencloud
### 🔒 Security

- Bump reva to v3.0.1 [[#4031](https://github.com/opencloud-eu/opencloud/pull/4031)]

### 📚 Documentation

- bump opencloud version to 9.2.0 [[#4033](https://github.com/opencloud-eu/opencloud/pull/4033)]

### ✅ Tests

- test(webdav): fix a data race in the thumbnail cache test [[#4011](https://github.com/opencloud-eu/opencloud/pull/4011)]
- test(graph): cover $select on the permissions list endpoints [[#4019](https://github.com/opencloud-eu/opencloud/pull/4019)]
- test(acceptance): fail on responses that are cut off after their headers [[#4009](https://github.com/opencloud-eu/opencloud/pull/4009)]
- test(search): cover trailing NOT operator in invalid KQL patterns [[#3982](https://github.com/opencloud-eu/opencloud/pull/3982)]
- test(guest-link): guest session does not override other credentials [[#3877](https://github.com/opencloud-eu/opencloud/pull/3877)]
- fix(ci): skip the font regeneration that restarts OnlyOffice [[#3996](https://github.com/opencloud-eu/opencloud/pull/3996)]
- test(search): wait for the first debouncer run instead of sleeping [[#3990](https://github.com/opencloud-eu/opencloud/pull/3990)]

### 🐛 Bug Fixes

- fix(graph): hide private user attributes from other users [[#4014](https://github.com/opencloud-eu/opencloud/pull/4014)]
- fix(markdown): create toc anchors like github-slugger [[#4005](https://github.com/opencloud-eu/opencloud/pull/4005)]
- fix(graph): return the drive id in remoteItem.parentReference.driveId [[#4006](https://github.com/opencloud-eu/opencloud/pull/4006)]
- fix(graph): name the space image size limit after space images [[#3993](https://github.com/opencloud-eu/opencloud/pull/3993)]
- fix(graph): succeed when unassigning tags a resource doesn't have [[#3950](https://github.com/opencloud-eu/opencloud/pull/3950)]
- fix(graph): port share permission and link fixes [[#3944](https://github.com/opencloud-eu/opencloud/pull/3944)]
- fix(graph): refuse space images too large for a thumbnail [[#3986](https://github.com/opencloud-eu/opencloud/pull/3986)]
- Fix Reva config to also validate OC_CACHE_* tls settings and fix the disable_persistence key [[#3913](https://github.com/opencloud-eu/opencloud/pull/3913)]
- fix(graph): return the identities of the identity backend on /me [[#3981](https://github.com/opencloud-eu/opencloud/pull/3981)]
- fix(graph): reject empty and invisible drive names on update [[#3946](https://github.com/opencloud-eu/opencloud/pull/3946)]

### 📈 Enhancement

- graph: rate limit the personal data export [[#3973](https://github.com/opencloud-eu/opencloud/pull/3973)]
- feat(graph): add the v1beta1 endpoints for a single drive [[#3941](https://github.com/opencloud-eu/opencloud/pull/3941)]
- feat: merge the workpagages branch into main [[#3956](https://github.com/opencloud-eu/opencloud/pull/3956)]
- feat(graph): allow client-supplied drive IDs when creating spaces [[#3899](https://github.com/opencloud-eu/opencloud/pull/3899)]
- feat(graph): improve logging and tracing for drive item permissions [[#3881](https://github.com/opencloud-eu/opencloud/pull/3881)]
- feat(graph): add GET endpoints for single sharing permissions [[#3928](https://github.com/opencloud-eu/opencloud/pull/3928)]

## Web
### 📈 Enhancement

- feat: bring back ocnote to the new file menu [[#4511](https://github.com/opencloud-eu/web/pull/4511)]
- feat: prefill the space name when creating a space from a selection [[#4508](https://github.com/opencloud-eu/web/pull/4508)]
- feat: add empty state illustrations to activities and versions panels [[#4481](https://github.com/opencloud-eu/web/pull/4481)]

### 🐛 Bug Fixes

- fix: open shortcut targets with noopener [[#4488](https://github.com/opencloud-eu/web/pull/4488)]
- fix: keep focused filter chip below the sticky app bar [[#4480](https://github.com/opencloud-eu/web/pull/4480)]
- fix: show existing recipients in share invite search [[#4477](https://github.com/opencloud-eu/web/pull/4477)]

### 📦️ Dependencies

- chore(deps): update typescript-eslint monorepo to v8.73.0 [[#4492](https://github.com/opencloud-eu/web/pull/4492)]
- chore(deps): update dependency filesize to v11.0.33 [[#4491](https://github.com/opencloud-eu/web/pull/4491)]

## Reva
### 📚 Documentation

- 🎉 Release 3.0.1 [[#1021](https://github.com/opencloud-eu/reva/pull/1021)]

### 🐛 Bug Fixes

- Change module path to github.com/opencloud-eu/reva/v3 [[#1019](https://github.com/opencloud-eu/reva/pull/1019)]
- fix(publicshareprovider): do not fail listing public shares when the metadata space is not accessible [[#996](https://github.com/opencloud-eu/reva/pull/996)]

### 💥 Breaking changes

- Merge Workpackages back to main [[#957](https://github.com/opencloud-eu/reva/pull/957)]

### 🔒 Security

- Reject node ids and revision keys that leave the space [[#1014](https://github.com/opencloud-eu/reva/pull/1014)]

### ✨ Features

- feat(tags): trim tags and add validation before adding them [[#1005](https://github.com/opencloud-eu/reva/pull/1005)]

### 📈 Enhancement

- feat(spaces): allow managing spaces through the server [[#994](https://github.com/opencloud-eu/reva/pull/994)]