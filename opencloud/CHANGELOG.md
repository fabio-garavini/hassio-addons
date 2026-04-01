> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Releasenotes OpenCloud 6.0.0

##  ⭐ Favorite Feature

The Favorites feature in the OpenCloud Web UI allows users to mark important and frequently used files for quick access. Favorite status is stored server-side, so it is available centrally and not tied to a single client. Favorited files are indicated with a star and are visible across personal and project spaces, subfolders, and search results. All favorites are collected on a dedicated Favorites page, supporting both list and grid views, with consistent display of file name, preview/type, status indicators, and available actions. Spaces themselves cannot yet be marked as favorites.

## 🧮 Calculator Extension

The Calculator Extension enables quick calculations directly in the OpenCloud search bar. Users can type a calculation, see the result instantly, and copy it directly. This extension comes from the community, providing practical functionality without leaving the Web UI.

## 📋 Pastebin Extension

The Pastebin Extension allows users to easily share text content. Shared items are automatically stored in a hidden .space folder within the personal area. This extension is also contributed by the community, making it simple to manage and share text snippets securely.

# Changelog

## [6.0.0](https://github.com/opencloud-eu/opencloud/releases/tag/v6.0.0) - 2026-03-31

### ❤️ Thanks to all contributors! ❤️

@ScharfViktor, @aduffeck, @dragonchaser, @micbar, @pascalwengerter, @smoothscholar, @rhafer, @AlexAndBear, @JammingBen, @dschmidt, @kulmann, @saw-jan, @tammi-23

## Opencloud:

### 💥 Breaking changes

- Improve opensearch highlighting, fix favorites [[#2514](https://github.com/opencloud-eu/opencloud/pull/2514)]

### ✅ Tests

- [full-ci] api-test: check that report contains favorites [[#2531](https://github.com/opencloud-eu/opencloud/pull/2531)]
- api-tests: search for favorites [[#2487](https://github.com/opencloud-eu/opencloud/pull/2487)]
- [test-only] favorites tests [[#2474](https://github.com/opencloud-eu/opencloud/pull/2474)]

### 📈 Enhancement

- feat: add userid to spans [[#2536](https://github.com/opencloud-eu/opencloud/pull/2536)]
- feat: add openFilesInNewTab web config option [[#2522](https://github.com/opencloud-eu/opencloud/pull/2522)]
- Always enable favorites, remove FRONTEND_ENABLE_FAVORITES flag [[#2494](https://github.com/opencloud-eu/opencloud/pull/2494)]
- Implement favorites [[#2454](https://github.com/opencloud-eu/opencloud/pull/2454)]

### 🐛 Bug Fixes

- Fix bleve batches [[#2524](https://github.com/opencloud-eu/opencloud/pull/2524)]

### 📦️ Dependencies

- build(deps): bump github.com/nats-io/nats-server/v2 from 2.12.5 to 2.12.6 [[#2525](https://github.com/opencloud-eu/opencloud/pull/2525)]
- build(deps-dev): bump postcss-preset-env from 10.1.3 to 11.2.0 in /services/idp [[#2392](https://github.com/opencloud-eu/opencloud/pull/2392)]
- build(deps): bump github.com/tus/tusd/v2 from 2.8.0 to 2.9.2 [[#2485](https://github.com/opencloud-eu/opencloud/pull/2485)]
- build(deps): bump google.golang.org/grpc from 1.79.2 to 1.79.3 [[#2519](https://github.com/opencloud-eu/opencloud/pull/2519)]
- build(deps): bump github.com/nats-io/nats-server/v2 from 2.12.4 to 2.12.5 [[#2499](https://github.com/opencloud-eu/opencloud/pull/2499)]
- build(deps): bump github.com/russellhaering/goxmldsig from 1.5.0 to 1.6.0 [[#2503](https://github.com/opencloud-eu/opencloud/pull/2503)]
- build(deps): bump golang.org/x/net from 0.51.0 to 0.52.0 [[#2472](https://github.com/opencloud-eu/opencloud/pull/2472)]
- build(deps): bump go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc from 0.65.0 to 0.67.0 [[#2473](https://github.com/opencloud-eu/opencloud/pull/2473)]
- build(deps): bump github.com/olekukonko/tablewriter from 1.1.3 to 1.1.4 [[#2468](https://github.com/opencloud-eu/opencloud/pull/2468)]
- build(deps): bump go.opentelemetry.io/contrib/zpages from 0.65.0 to 0.67.0 [[#2467](https://github.com/opencloud-eu/opencloud/pull/2467)]
- build(deps): bump github.com/testcontainers/testcontainers-go/modules/opensearch from 0.40.0 to 0.41.0 [[#2458](https://github.com/opencloud-eu/opencloud/pull/2458)]
- build(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.41.0 to 1.42.0 [[#2459](https://github.com/opencloud-eu/opencloud/pull/2459)]
- build(deps): bump github.com/testcontainers/testcontainers-go from 0.40.0 to 0.41.0 [[#2453](https://github.com/opencloud-eu/opencloud/pull/2453)]
- build(deps): bump golang.org/x/oauth2 from 0.35.0 to 0.36.0 [[#2452](https://github.com/opencloud-eu/opencloud/pull/2452)]
- build(deps): bump go.opentelemetry.io/otel/exporters/stdout/stdouttrace from 1.40.0 to 1.42.0 [[#2441](https://github.com/opencloud-eu/opencloud/pull/2441)]
- build(deps): bump go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp from 0.65.0 to 0.67.0 [[#2442](https://github.com/opencloud-eu/opencloud/pull/2442)]

## Web

### ⚠️ Deprecation

- The AMD format for external apps is now deprecated. External apps need to be built with the latest `extension-sdk` to use the new ESM format. Support for the AMD format will be removed in an upcoming version. [[#2213](https://github.com/opencloud-eu/web/pull/2213)]

### 🐛 Bug Fixes

- fix: remove search limit from favorites request [[#2245](https://github.com/opencloud-eu/web/pull/2245)]
- fix: add missing breadcrumb in favorites view [[#2243](https://github.com/opencloud-eu/web/pull/2243)]
- fix: idp logout on network errors [[#2230](https://github.com/opencloud-eu/web/pull/2230)]
- fix: breadcrumb in admin settings info section not clickable [[#2237](https://github.com/opencloud-eu/web/pull/2237)]
- fix: metadataUrl in user manager [[#2239](https://github.com/opencloud-eu/web/pull/2239)]
- fix: remove redundant header in admin settings info section [[#2236](https://github.com/opencloud-eu/web/pull/2236)]
- fix: admin settings user avatar take too much space and divergend fro… [[#2222](https://github.com/opencloud-eu/web/pull/2222)]
- Fix password modal can be confirmed even if the password is empty [[#2219](https://github.com/opencloud-eu/web/pull/2219)]
- fix: context menu does not close when favorite item [[#2212](https://github.com/opencloud-eu/web/pull/2212)]
- fix: preserve query params on public link redirect [[#2199](https://github.com/opencloud-eu/web/pull/2199)]
- fix: version check in conjunction with dev docker image leads to left… [[#2156](https://github.com/opencloud-eu/web/pull/2156)]
- fix: sidebar top margin too low when no FAB is present [[#2147](https://github.com/opencloud-eu/web/pull/2147)]
- fix: files with name e.G. .space won't be shown when 'show file extens… [[#2149](https://github.com/opencloud-eu/web/pull/2149)]
- fix: account settings on mobile view [[#2148](https://github.com/opencloud-eu/web/pull/2148)]
- fix: app top bar gets removed, even if unsaved changes modal appears [[#2141](https://github.com/opencloud-eu/web/pull/2141)]
- fix: oc-drop a11y and overflow issues [[#2100](https://github.com/opencloud-eu/web/pull/2100)]
- fix: search bar disappears when entering account preferences [[#2122](https://github.com/opencloud-eu/web/pull/2122)]
- fix: bring back disabled space indicator in tiles view [[#2110](https://github.com/opencloud-eu/web/pull/2110)]
- fix: focus ring for upload buttons [[#2111](https://github.com/opencloud-eu/web/pull/2111)]

### 📈 Enhancement

- feat: add openFilesInNewTab config option [[#2218](https://github.com/opencloud-eu/web/pull/2218)]
- feat: auto-register extension dev servers with host [[#2220](https://github.com/opencloud-eu/web/pull/2220)]
- feat: add logo to admin settings info section [[#2228](https://github.com/opencloud-eu/web/pull/2228)]
- feat: add module federation support for external apps [[#2213](https://github.com/opencloud-eu/web/pull/2213)]
- feat: add empty state icon for favorites [[#2211](https://github.com/opencloud-eu/web/pull/2211)]
- Use favorites from graph api [[#2171](https://github.com/opencloud-eu/web/pull/2171)]
- Implement sending a draft  [[#2193](https://github.com/opencloud-eu/web/pull/2193)]
- Feat/1959 [[#2125](https://github.com/opencloud-eu/web/pull/2125)]
- feat: contacts support full name and name components [[#2187](https://github.com/opencloud-eu/web/pull/2187)]
- feat: add contacts app skeleton [[#2155](https://github.com/opencloud-eu/web/pull/2155)]
- feat: small UI improvements/fixes [[#2177](https://github.com/opencloud-eu/web/pull/2177)]
- feat: add no content images for mail app [[#2165](https://github.com/opencloud-eu/web/pull/2165)]
- feat: webfinger oidc discovery [[#2152](https://github.com/opencloud-eu/web/pull/2152)]
- Added draft state handling [[#1956](https://github.com/opencloud-eu/web/pull/1956)]
- feat: use oc colors in collabora [[#2144](https://github.com/opencloud-eu/web/pull/2144)]
- feat: polish input fields [[#2127](https://github.com/opencloud-eu/web/pull/2127)]
- feat(runtime): add dynamic extension points for sidebar-nav [[#2134](https://github.com/opencloud-eu/web/pull/2134)]
- feat: polish drop menus [[#2133](https://github.com/opencloud-eu/web/pull/2133)]
- feat: polish filters [[#2124](https://github.com/opencloud-eu/web/pull/2124)]
- feat: polish shares page [[#2116](https://github.com/opencloud-eu/web/pull/2116)]
- feat: polish left sidebar [[#2118](https://github.com/opencloud-eu/web/pull/2118)]
- feat: polish space enabled/disabled status indicators [[#2113](https://github.com/opencloud-eu/web/pull/2113)]
- feat: show icon of the current view mode in view mode switch [[#2105](https://github.com/opencloud-eu/web/pull/2105)]

### ✅ Tests

- [full-ci] test(e2e): fix share type label check [[#2191](https://github.com/opencloud-eu/web/pull/2191)]
- [with-tracing] fix: e2e-test public deletes folders [[#2130](https://github.com/opencloud-eu/web/pull/2130)]

### 📦️ Dependencies

- chore(deps): update tiptap monorepo to v3.20.6 [[#2214](https://github.com/opencloud-eu/web/pull/2214)]
- chore(deps): update dependency happy-dom to v20.8.9 [[#2242](https://github.com/opencloud-eu/web/pull/2242)]
- chore(deps): update pnpm to v10.33.0 [[#2215](https://github.com/opencloud-eu/web/pull/2215)]
- chore(deps): update node.js to v24.14.1 [[#2216](https://github.com/opencloud-eu/web/pull/2216)]
- chore(deps): update devdependencies (non-major) [[#2217](https://github.com/opencloud-eu/web/pull/2217)]
- fix(deps): update dependency @sentry/vue to v10.46.0 [[#2225](https://github.com/opencloud-eu/web/pull/2225)]
- chore(deps): update traefik docker tag to v3.6.12 [[#2240](https://github.com/opencloud-eu/web/pull/2240)]
- chore(deps): update dependency happy-dom to v20.8.8 [security] [[#2241](https://github.com/opencloud-eu/web/pull/2241)]
- Dependency bumps across packages [[#2233](https://github.com/opencloud-eu/web/pull/2233)]
- chore(deps): update typescript-eslint monorepo to v8.57.2 [[#2206](https://github.com/opencloud-eu/web/pull/2206)]
- chore(deps): update dependency fast-xml-parser to v5.5.9 [[#2203](https://github.com/opencloud-eu/web/pull/2203)]
- chore(deps): update devdependencies (non-major) [[#2196](https://github.com/opencloud-eu/web/pull/2196)]
- chore(deps): update apache/tika docker tag to v3.3.0.0 [[#2207](https://github.com/opencloud-eu/web/pull/2207)]
- chore(deps): update pnpm to v10.32.1 [[#1875](https://github.com/opencloud-eu/web/pull/1875)]
- chore(deps): update dependency vite-plugin-static-copy to v4 [[#2198](https://github.com/opencloud-eu/web/pull/2198)]
- chore(deps): update dependency fast-xml-parser to v5.5.8 [[#2182](https://github.com/opencloud-eu/web/pull/2182)]
- chore(deps): update dependency md-editor-v3 to v6.4.1 [[#2197](https://github.com/opencloud-eu/web/pull/2197)]
- fix(deps): update dependency vue-router to v5.0.4 [[#2186](https://github.com/opencloud-eu/web/pull/2186)]
- fix(deps): update dependency @sentry/vue to v10.45.0 [[#2181](https://github.com/opencloud-eu/web/pull/2181)]
- chore(deps): update dependency fast-xml-parser to v5.5.7 [security] [[#2190](https://github.com/opencloud-eu/web/pull/2190)]
- chore(deps): update traefik docker tag to v3.6.11 [[#2189](https://github.com/opencloud-eu/web/pull/2189)]
- chore(deps): update tiptap monorepo to v3.20.4 [[#2151](https://github.com/opencloud-eu/web/pull/2151)]
- chore(deps): update devdependencies (non-major) [[#2150](https://github.com/opencloud-eu/web/pull/2150)]
- fix(deps): update dependency @sentry/vue to v10.44.0 [[#2168](https://github.com/opencloud-eu/web/pull/2168)]
- chore(deps): update typescript-eslint monorepo to v8.57.1 [[#2154](https://github.com/opencloud-eu/web/pull/2154)]
- chore(deps): update dependency fast-xml-parser to v5.5.6 [[#2145](https://github.com/opencloud-eu/web/pull/2145)]
- chore(deps): update dependency vite-plugin-static-copy to v3.3.0 [[#2142](https://github.com/opencloud-eu/web/pull/2142)]
- chore(deps): update dependency @codemirror/view to v6.40.0 [[#2131](https://github.com/opencloud-eu/web/pull/2131)]
- chore(deps): update dependency fast-xml-parser to v5.5.4 [[#2140](https://github.com/opencloud-eu/web/pull/2140)]
- chore(deps): update devdependencies (non-major) [[#2138](https://github.com/opencloud-eu/web/pull/2138)]
- chore(deps): update dependency fast-xml-parser to v5.5.3 [[#2121](https://github.com/opencloud-eu/web/pull/2121)]
- chore(deps): update dependency dompurify to v3.3.3 [[#2092](https://github.com/opencloud-eu/web/pull/2092)]
- chore(deps): update typescript-eslint monorepo to v8.57.0 [[#2112](https://github.com/opencloud-eu/web/pull/2112)]
- fix(deps): update dependency @sentry/vue to v10.43.0 [[#2119](https://github.com/opencloud-eu/web/pull/2119)]
- chore(deps): update dependency @codemirror/view to v6.39.17 [[#2115](https://github.com/opencloud-eu/web/pull/2115)]
- chore(deps): update devdependencies (non-major) [[#2103](https://github.com/opencloud-eu/web/pull/2103)]
- chore(deps): update traefik docker tag to v3.6.10 [[#2102](https://github.com/opencloud-eu/web/pull/2102)]
- chore(deps): update tiptap monorepo to v3.20.1 [[#2101](https://github.com/opencloud-eu/web/pull/2101)]

## Reva

### 📦️ Dependencies

- chore(deps): bump github.com/nats-io/nats-server/v2 from 2.12.4 to 2.12.6 in the go_modules group across 1 directory [[#568](https://github.com/opencloud-eu/reva/pull/568)]
- chore(deps): bump golang.org/x/oauth2 from 0.35.0 to 0.36.0 [[#565](https://github.com/opencloud-eu/reva/pull/565)]
- chore(deps): bump github.com/nats-io/nats.go from 1.48.0 to 1.49.0 [[#564](https://github.com/opencloud-eu/reva/pull/564)]
- chore(deps): bump github.com/mattn/go-sqlite3 from 1.14.34 to 1.14.37 [[#563](https://github.com/opencloud-eu/reva/pull/563)]
- chore(deps): bump google.golang.org/grpc from 1.79.2 to 1.79.3 in the go_modules group across 1 directory [[#562](https://github.com/opencloud-eu/reva/pull/562)]
- chore(deps): bump golang.org/x/crypto from 0.48.0 to 0.49.0 [[#559](https://github.com/opencloud-eu/reva/pull/559)]
- chore(deps): bump github.com/ceph/go-ceph from 0.37.0 to 0.38.0 [[#560](https://github.com/opencloud-eu/reva/pull/560)]
- chore(deps): bump golang.org/x/sync from 0.19.0 to 0.20.0 [[#558](https://github.com/opencloud-eu/reva/pull/558)]
- chore(deps): bump github.com/tus/tusd/v2 from 2.8.0 to 2.9.2 [[#557](https://github.com/opencloud-eu/reva/pull/557)]
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.41.0 to 1.42.0 [[#555](https://github.com/opencloud-eu/reva/pull/555)]
- chore(deps): bump github.com/google/renameio/v2 from 2.0.1 to 2.0.2 [[#495](https://github.com/opencloud-eu/reva/pull/495)]
- chore(deps): bump github.com/minio/minio-go/v7 from 7.0.98 to 7.0.99 [[#553](https://github.com/opencloud-eu/reva/pull/553)]
- chore(deps): bump go.opentelemetry.io/otel/trace from 1.41.0 to 1.42.0 [[#550](https://github.com/opencloud-eu/reva/pull/550)]