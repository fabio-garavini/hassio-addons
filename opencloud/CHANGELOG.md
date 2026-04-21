> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Releasenotes OpenCloud 6.1.0

## [6.1.0](https://github.com/opencloud-eu/opencloud/releases/tag/v6.1.0) - 2026-04-20

### ❤️ Thanks to all contributors! ❤️

@JammingBen, @ScharfViktor, @aduffeck, @dragonchaser, @pedropintosilva, @rhafer, @AlexAndBear, @FrankM64, @kulmann, @pascalwengerter, @pedropintosilva, @tammi-23, @tiran133, @aduffeck, @fschade

## Opencloud

### 📚 Documentation

- docs(web): deprecation notices for cern related feature flags [[#2629](https://github.com/opencloud-eu/opencloud/pull/2629)]
- Update CI badge URL in README.md [[#2614](https://github.com/opencloud-eu/opencloud/pull/2614)]

### 🐛 Bug Fixes

- Add a flag to the reindex command to force a full reindex [[#2606](https://github.com/opencloud-eu/opencloud/pull/2606)]

### 📈 Enhancement

- proxy: Allow mapping from an external tenant id to the internal id [[#2569](https://github.com/opencloud-eu/opencloud/pull/2569)]
- feat: enable EnableInsertRemoteFile WOPI flag for Collabora [[#2555](https://github.com/opencloud-eu/opencloud/pull/2555)]
- feat(multi-tenancy): verify tenant via OIDC claim [[#2559](https://github.com/opencloud-eu/opencloud/pull/2559)]

### 📦️ Dependencies

- Bump reva  [[#2611](https://github.com/opencloud-eu/opencloud/pull/2611)]
- chore(idp): clean up js dependencies [[#2607](https://github.com/opencloud-eu/opencloud/pull/2607)]
- build(deps-dev): bump dotenv from 16.4.7 to 17.4.2 in /services/idp [[#2603](https://github.com/opencloud-eu/opencloud/pull/2603)]
- chore: bump IDP javascript dependencies [[#2600](https://github.com/opencloud-eu/opencloud/pull/2600)]
- build(deps): bump github.com/nats-io/nats.go from 1.49.0 to 1.50.0 [[#2587](https://github.com/opencloud-eu/opencloud/pull/2587)]
- build(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.42.0 to 1.43.0 [[#2586](https://github.com/opencloud-eu/opencloud/pull/2586)]
- chore: bump reva to latest main [[#2584](https://github.com/opencloud-eu/opencloud/pull/2584)]
- build(deps): bump golang.org/x/image from 0.36.0 to 0.38.0 [[#2581](https://github.com/opencloud-eu/opencloud/pull/2581)]
- build(deps-dev): bump css-minimizer-webpack-plugin from 7.0.4 to 8.0.0 in /services/idp [[#2551](https://github.com/opencloud-eu/opencloud/pull/2551)]
- build(deps): bump github.com/go-ldap/ldap/v3 from 3.4.12 to 3.4.13 [[#2526](https://github.com/opencloud-eu/opencloud/pull/2526)]
- build(deps): bump github.com/open-policy-agent/opa from 1.14.1 to 1.15.0 [[#2535](https://github.com/opencloud-eu/opencloud/pull/2535)]

## Web
### 📈 Enhancement

- change: exchange icons [[#2385](https://github.com/opencloud-eu/web/pull/2385)]
-  Merge header and file info in file sidebar [[#2377](https://github.com/opencloud-eu/web/pull/2377)]
- feat: set global color-scheme [[#2379](https://github.com/opencloud-eu/web/pull/2379)]
- feat: adjust mobile nav bar [[#2372](https://github.com/opencloud-eu/web/pull/2372)]
- feat(preview): play next audio file automatically after current track… [[#2351](https://github.com/opencloud-eu/web/pull/2351)]
- feat: active state for navigation in sidebar [[#2374](https://github.com/opencloud-eu/web/pull/2374)]
- Scroll selected mail into view after reload [[#2341](https://github.com/opencloud-eu/web/pull/2341)]
- Add contact details view [[#2322](https://github.com/opencloud-eu/web/pull/2322)]
- perf: use standalone silent redirect instead of bootstrapping the app [[#2333](https://github.com/opencloud-eu/web/pull/2333)]
- feat(design-system): add support for nuxt-link [[#2318](https://github.com/opencloud-eu/web/pull/2318)]
- feat: add drop with truncated items to oc-breadcrumb [[#2309](https://github.com/opencloud-eu/web/pull/2309)]
- feat: redesign share sidebar panel [[#2293](https://github.com/opencloud-eu/web/pull/2293)]
- feat: handle UI_InsertFile postMessage from Collabora [[#2270](https://github.com/opencloud-eu/web/pull/2270)]
- feat: focus global search bar via keyboard shortcut [[#2274](https://github.com/opencloud-eu/web/pull/2274)]
- feat: redesign sidebar file/space details panel [[#2273](https://github.com/opencloud-eu/web/pull/2273)]
- feat(design-system): redesign checkbox active state [[#2266](https://github.com/opencloud-eu/web/pull/2266)]
- feat: move favorite resource indicator to resource name [[#2261](https://github.com/opencloud-eu/web/pull/2261)]
- feat: add to favorites in preview app [[#2251](https://github.com/opencloud-eu/web/pull/2251)]

### 🐛 Bug Fixes

- fix: favorites list, undo delte doesn't return item to the favorites … [[#2382](https://github.com/opencloud-eu/web/pull/2382)]
- fix: extension action 'context' category  [[#2369](https://github.com/opencloud-eu/web/pull/2369)]
- fix: prevent scroll when opening resource context menu [[#2375](https://github.com/opencloud-eu/web/pull/2375)]
- fix: mobile floating action button is too small [[#2353](https://github.com/opencloud-eu/web/pull/2353)]
- fix(runtime): optimize auth flow with expired token [[#2346](https://github.com/opencloud-eu/web/pull/2346)]
- fix(extension-sdk): add missing color roles [[#2339](https://github.com/opencloud-eu/web/pull/2339)]
- fix: optimize route change announcer [[#2328](https://github.com/opencloud-eu/web/pull/2328)]
- fix: prevent accidental space reset on public links [[#2319](https://github.com/opencloud-eu/web/pull/2319)]
- fix: markdown editor: incorrect rendering of unordered lists [[#2315](https://github.com/opencloud-eu/web/pull/2315)]
- Fix: #2262 accesssToken tripe S event [[#2271](https://github.com/opencloud-eu/web/pull/2271)]
- fix: preview app doesn't show video and mp3 meta data preview in phot… [[#2302](https://github.com/opencloud-eu/web/pull/2302)]
- fix(extension-sdk): do not run federation plugin in test mode [[#2291](https://github.com/opencloud-eu/web/pull/2291)]
- fix: v-oc-tooltip not reactive [[#2255](https://github.com/opencloud-eu/web/pull/2255)]

### ✅ Tests

- e2e-tests: favorites [[#2370](https://github.com/opencloud-eu/web/pull/2370)]

### 📦️ Dependencies

- fix(deps): update dependency @casl/ability to v6.8.1 [[#2396](https://github.com/opencloud-eu/web/pull/2396)]
- fix(deps): update dependency axios to v1.15.1 [[#2392](https://github.com/opencloud-eu/web/pull/2392)]
- chore(deps): update dependency filesize to v11.0.16 [[#2395](https://github.com/opencloud-eu/web/pull/2395)]
- chore(deps): update dependency fast-xml-parser to v5.7.1 [[#2388](https://github.com/opencloud-eu/web/pull/2388)]
- fix(deps): update dependency @sentry/vue to v10.49.0 [[#2381](https://github.com/opencloud-eu/web/pull/2381)]
- chore(deps): update node.js to v24.15.0 [[#2380](https://github.com/opencloud-eu/web/pull/2380)]
- chore(deps): update devdependencies (non-major) - autoclosed [[#2387](https://github.com/opencloud-eu/web/pull/2387)]
- fix(deps): update dependency uuid to v14 [[#2393](https://github.com/opencloud-eu/web/pull/2393)]
- chore(deps): update devdependencies (non-major) [[#2378](https://github.com/opencloud-eu/web/pull/2378)]
- chore(deps): update dependency @cucumber/cucumber to v12.8.1 [[#2362](https://github.com/opencloud-eu/web/pull/2362)]
- chore(deps): update dependency fast-xml-parser to v5.6.0 [[#2373](https://github.com/opencloud-eu/web/pull/2373)]
- chore(deps): update dependency dompurify to v3.4.0 [[#2363](https://github.com/opencloud-eu/web/pull/2363)]
- chore(deps): update typescript-eslint monorepo to v8.58.2 [[#2360](https://github.com/opencloud-eu/web/pull/2360)]
- chore(deps): update devdependencies (non-major) [[#2358](https://github.com/opencloud-eu/web/pull/2358)]
- chore(deps): update tiptap monorepo to v3.22.3 [[#2320](https://github.com/opencloud-eu/web/pull/2320)]
- chore(deps): update dependency globals to v17.5.0 [[#2352](https://github.com/opencloud-eu/web/pull/2352)]
- chore(deps): update dependency fast-xml-parser to v5.5.12 [[#2354](https://github.com/opencloud-eu/web/pull/2354)]
- chore(deps): update devdependencies (non-major) [[#2350](https://github.com/opencloud-eu/web/pull/2350)]
- chore(deps): update dependency @types/node to v25.6.0 [[#2338](https://github.com/opencloud-eu/web/pull/2338)]
- fix(deps): update dependency @unhead/vue to v3 [[#2337](https://github.com/opencloud-eu/web/pull/2337)]
- fix(deps): update dependency @sentry/vue to v10.48.0 [[#2336](https://github.com/opencloud-eu/web/pull/2336)]
- fix(deps): update dependency qs to v6.15.1 [[#2327](https://github.com/opencloud-eu/web/pull/2327)]
- chore(deps): update devdependencies (non-major) [[#2331](https://github.com/opencloud-eu/web/pull/2331)]
- chore(deps): update dependency fast-xml-parser to v5.5.11 [[#2324](https://github.com/opencloud-eu/web/pull/2324)]
- fix(deps): update dependency axios to v1.15.0 [[#2330](https://github.com/opencloud-eu/web/pull/2330)]
- chore(deps): update devdependencies (non-major) [[#2325](https://github.com/opencloud-eu/web/pull/2325)]
- chore(deps): update traefik docker tag to v3.6.13 [[#2316](https://github.com/opencloud-eu/web/pull/2316)]
- chore(deps): update typescript-eslint monorepo to v8.58.1 [[#2317](https://github.com/opencloud-eu/web/pull/2317)]
- chore(deps): update devdependencies (non-major) [[#2313](https://github.com/opencloud-eu/web/pull/2313)]
- chore(deps): update devdependencies (non-major) [[#2307](https://github.com/opencloud-eu/web/pull/2307)]
- fix(deps): update dependency p-queue to v9.1.2 [[#2308](https://github.com/opencloud-eu/web/pull/2308)]
- fix(deps): update dependency typescript to v6 [[#2204](https://github.com/opencloud-eu/web/pull/2204)]
- chore(deps): update dependency @unhead/vue to v2.1.13 [[#2303](https://github.com/opencloud-eu/web/pull/2303)]
- fix(deps): update dependency fuse.js to v7.3.0 [[#2297](https://github.com/opencloud-eu/web/pull/2297)]
- chore(deps): update tiptap monorepo to v3.22.2 [[#2285](https://github.com/opencloud-eu/web/pull/2285)]
- chore(deps): update dependency @panzoom/panzoom to v4.6.2 [[#2295](https://github.com/opencloud-eu/web/pull/2295)]
- chore(deps): update dependency fast-xml-parser to v5.5.10 [[#2299](https://github.com/opencloud-eu/web/pull/2299)]
- chore(deps): update dependency md-editor-v3 to v6.4.2 [[#2304](https://github.com/opencloud-eu/web/pull/2304)]
- chore(deps): update devdependencies (non-major) [[#2294](https://github.com/opencloud-eu/web/pull/2294)]
- fix(deps): update dependency vitest-mock-extended to v4 [[#2306](https://github.com/opencloud-eu/web/pull/2306)]
- chore(deps): update dependency vite to v8.0.5 [security] [[#2305](https://github.com/opencloud-eu/web/pull/2305)]
- chore(deps): update dependency vitest-mock-extended to v3.1.1 [[#2289](https://github.com/opencloud-eu/web/pull/2289)]
- fix(deps): update dependency lodash-es to v4.18.1 [security] [[#2282](https://github.com/opencloud-eu/web/pull/2282)]
- chore(deps): update tiptap monorepo to v3.22.0 [[#2248](https://github.com/opencloud-eu/web/pull/2248)]
- chore(deps): update dependency @playwright/test to v1.59.1 [[#2277](https://github.com/opencloud-eu/web/pull/2277)]
- fix(deps): update dependency p-queue to v9.1.1 [[#2278](https://github.com/opencloud-eu/web/pull/2278)]
- chore(deps): update dependency @codemirror/view to v6.41.0 [[#2275](https://github.com/opencloud-eu/web/pull/2275)]
- chore(deps): update devdependencies (non-major) [[#2268](https://github.com/opencloud-eu/web/pull/2268)]
- fix(deps): update dependency @sentry/vue to v10.47.0 [[#2269](https://github.com/opencloud-eu/web/pull/2269)]
- chore(deps): update dependency filesize to v11.0.15 [[#2223](https://github.com/opencloud-eu/web/pull/2223)]
- fix(deps): update dependency axios to v1.14.0 [[#2250](https://github.com/opencloud-eu/web/pull/2250)]
- chore(deps): update dependency @module-federation/vite to v1.13.6 [[#2264](https://github.com/opencloud-eu/web/pull/2264)]
- chore(deps): update typescript-eslint monorepo to v8.58.0 [[#2265](https://github.com/opencloud-eu/web/pull/2265)]
- chore(deps): update devdependencies (non-major) [[#2257](https://github.com/opencloud-eu/web/pull/2257)]

## Reva
### 🐛 Bug Fixes

- Fix race conditions in the hybrid metadata backend [[#594](https://github.com/opencloud-eu/reva/pull/594)]
- fix: error handling in upload session cleanup [[#582](https://github.com/opencloud-eu/reva/pull/582)]

### 📈 Enhancement

- experimental: add darwin watchfs support [[#471](https://github.com/opencloud-eu/reva/pull/471)]
- Tracing [[#596](https://github.com/opencloud-eu/reva/pull/596)]

### 📦️ Dependencies

- chore(deps): bump github.com/nats-io/nats.go from 1.49.0 to 1.51.0 [[#591](https://github.com/opencloud-eu/reva/pull/591)]
- chore(deps): bump github.com/coreos/go-oidc/v3 from 3.17.0 to 3.18.0 [[#586](https://github.com/opencloud-eu/reva/pull/586)]
- chore(deps): bump github.com/go-git/go-git/v5 from 5.17.1 to 5.18.0 in the go_modules group across 1 directory [[#595](https://github.com/opencloud-eu/reva/pull/595)]
- chore(deps): bump github.com/go-playground/validator/v10 from 10.30.1 to 10.30.2 [[#589](https://github.com/opencloud-eu/reva/pull/589)]
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.42.0 to 1.43.0 [[#585](https://github.com/opencloud-eu/reva/pull/585)]
- chore(deps): bump go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc from 0.65.0 to 0.68.0 [[#584](https://github.com/opencloud-eu/reva/pull/584)]
- chore(deps): bump github.com/rs/zerolog from 1.34.0 to 1.35.0 [[#583](https://github.com/opencloud-eu/reva/pull/583)]
- chore(deps): bump github.com/go-jose/go-jose/v4 from 4.1.3 to 4.1.4 in the go_modules group across 1 directory [[#581](https://github.com/opencloud-eu/reva/pull/581)]
- chore(deps): bump github.com/onsi/ginkgo/v2 from 2.28.0 to 2.28.1 [[#580](https://github.com/opencloud-eu/reva/pull/580)]
- chore(deps): bump github.com/samber/slog-zerolog/v2 from 2.9.1 to 2.9.2 [[#569](https://github.com/opencloud-eu/reva/pull/569)]
- chore(deps): bump github.com/go-git/go-git/v5 from 5.16.5 to 5.17.1 in the go_modules group across 1 directory [[#579](https://github.com/opencloud-eu/reva/pull/579)]
- chore(deps): bump golang.org/x/image from 0.24.0 to 0.38.0 in the go_modules group across 1 directory [[#577](https://github.com/opencloud-eu/reva/pull/577)]