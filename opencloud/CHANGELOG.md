> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Releasenotes OpenCloud 5.2.0

## ➕ Floating Action Button for “Create or Upload”

The “Create or Upload” button in the Files app is now implemented as a Floating Action Button (FAB), providing a clear and consistent entry point for the main action of creating or uploading content. This improves usability by making it easier for users to find where to create new content without searching. The available actions open directly from the button as a dropdown or bottom drawer, depending on the device. If the user lacks write permissions, the button is disabled or hidden.

# Changelog

## [5.2.0](https://github.com/opencloud-eu/opencloud/releases/tag/v5.2.0) - 2026-03-09

### ❤️ Thanks to all contributors! ❤️

@AlexAndBear, @JammingBen, @MahdiBaghbani, @ScharfViktor, @aduffeck, @butonic, @dragonchaser, @dragotin, @fschade, @pat-s, @rhafer, @dschmidt, @flimmy, @kulmann, @saw-jan, @micbar

## Opencloud

### 📚 Documentation

- update links and references in CONTRIBUTING.md [[#2411](https://github.com/opencloud-eu/opencloud/pull/2411)]
- adr(webfinger): Align example config with implementation [[#2353](https://github.com/opencloud-eu/opencloud/pull/2353)]

### 📈 Enhancement

- feat(graph/education): Add support of 'eq' filters on users [[#2421](https://github.com/opencloud-eu/opencloud/pull/2421)]
- feat(web): change surface colors to more modern ones [[#2377](https://github.com/opencloud-eu/opencloud/pull/2377)]
- Add openCloudEducationExternalId to user [[#2357](https://github.com/opencloud-eu/opencloud/pull/2357)]
- feat: app-registry adjust default mime-types [[#2354](https://github.com/opencloud-eu/opencloud/pull/2354)]
- feat: support desktop and mobile specific  `client_id` and `scopes` [[#2072](https://github.com/opencloud-eu/opencloud/pull/2072)]

### 🐛 Bug Fixes

- [SKIP CI] Fix simple install script, use admin-password switch [[#2413](https://github.com/opencloud-eu/opencloud/pull/2413)]
- resolve logout token subject:sessions for the idp backchannel logout [[#2328](https://github.com/opencloud-eu/opencloud/pull/2328)]
- fix(oidc_auth): Fix userinfo cache expiration logic [[#2360](https://github.com/opencloud-eu/opencloud/pull/2360)]

### 📦️ Dependencies

- build(deps): bump github.com/open-policy-agent/opa from 1.13.2 to 1.14.0 [[#2427](https://github.com/opencloud-eu/opencloud/pull/2427)]
- build(deps): bump go.opentelemetry.io/otel from 1.40.0 to 1.41.0 [[#2425](https://github.com/opencloud-eu/opencloud/pull/2425)]
- build(deps): bump github.com/davidbyttow/govips/v2 from 2.16.0 to 2.17.0 [[#2420](https://github.com/opencloud-eu/opencloud/pull/2420)]
- build(deps): bump github.com/nats-io/nats.go from 1.48.0 to 1.49.0 [[#2390](https://github.com/opencloud-eu/opencloud/pull/2390)]
- build(deps): bump golang.org/x/net from 0.50.0 to 0.51.0 [[#2412](https://github.com/opencloud-eu/opencloud/pull/2412)]
- build(deps): bump github.com/kovidgoyal/imaging from 1.8.19 to 1.8.20 [[#2391](https://github.com/opencloud-eu/opencloud/pull/2391)]
- build(deps): bump github.com/grpc-ecosystem/grpc-gateway/v2 from 2.27.7 to 2.28.0 [[#2375](https://github.com/opencloud-eu/opencloud/pull/2375)]
- build(deps): bump github.com/open-policy-agent/opa from 1.13.1 to 1.13.2 [[#2374](https://github.com/opencloud-eu/opencloud/pull/2374)]
- build(deps): bump google.golang.org/grpc from 1.78.0 to 1.79.1 [[#2362](https://github.com/opencloud-eu/opencloud/pull/2362)]
- build(deps): bump github.com/onsi/ginkgo/v2 from 2.28.0 to 2.28.1 [[#2366](https://github.com/opencloud-eu/opencloud/pull/2366)]
- build(deps): bump go.opentelemetry.io/contrib/zpages from 0.64.0 to 0.65.0 [[#2363](https://github.com/opencloud-eu/opencloud/pull/2363)]
- build(deps): bump golang.org/x/net from 0.49.0 to 0.50.0 [[#2356](https://github.com/opencloud-eu/opencloud/pull/2356)]
- build(deps): bump github.com/go-resty/resty/v2 from 2.17.1 to 2.17.2 [[#2355](https://github.com/opencloud-eu/opencloud/pull/2355)]
- build(deps): bump go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp from 0.64.0 to 0.65.0 [[#2321](https://github.com/opencloud-eu/opencloud/pull/2321)]
- build(deps): bump github.com/open-policy-agent/opa from 1.12.3 to 1.13.1 [[#2350](https://github.com/opencloud-eu/opencloud/pull/2350)]

## Web
### 💥 Breaking changes

- feat!: remove deprecations for v6.0.0 [[#2093](https://github.com/opencloud-eu/web/pull/2093)]
- refactor!: floating UI [[#1998](https://github.com/opencloud-eu/web/pull/1998)]
- refactor!: port vue-portal to teleport or extension system [[#2015](https://github.com/opencloud-eu/web/pull/2015)]
- refactor!: mobile nav to web-pkg [[#2007](https://github.com/opencloud-eu/web/pull/2007)]

### 🔒 Security

- chore(deps): fix current security alerts [[#2040](https://github.com/opencloud-eu/web/pull/2040)]

### 📈 Enhancement

- feat: use proper size-5 class for medium sized icons  [[#2066](https://github.com/opencloud-eu/web/pull/2066)]
- feat: increase topbar height [[#2070](https://github.com/opencloud-eu/web/pull/2070)]
- Improve empty state icons [[#2094](https://github.com/opencloud-eu/web/pull/2094)]
- feat: ease use of floating action button extension [[#2090](https://github.com/opencloud-eu/web/pull/2090)]
- feat: add polished icons for no content message [[#2033](https://github.com/opencloud-eu/web/pull/2033)]
- feat: add fab to admin settings and spaces overview [[#2025](https://github.com/opencloud-eu/web/pull/2025)]
- feat(ocm): implement WAYF page and enhance invitation workflow [[#1486](https://github.com/opencloud-eu/web/pull/1486)]
- feat: modernize surface colors [[#2023](https://github.com/opencloud-eu/web/pull/2023)]
- feat: create or upload floating action button [[#1997](https://github.com/opencloud-eu/web/pull/1997)]
- feat: eleminate collapsed state of left side bar [[#1993](https://github.com/opencloud-eu/web/pull/1993)]
- feat: unifiy create and upload button [[#1989](https://github.com/opencloud-eu/web/pull/1989)]

### 🐛 Bug Fixes

- fix: don't show 'new' button in secret file drop [[#2086](https://github.com/opencloud-eu/web/pull/2086)]
- Fix broken link to web docs [[#2080](https://github.com/opencloud-eu/web/pull/2080)]
- fix: admin settings layout [[#2062](https://github.com/opencloud-eu/web/pull/2062)]
- fix: backchannel logout react to sid [[#1969](https://github.com/opencloud-eu/web/pull/1969)]
- fix: broken AvatarImage usages [[#2042](https://github.com/opencloud-eu/web/pull/2042)]
- fix(files): prevent selection reset during keyboard navigation [[#2044](https://github.com/opencloud-eu/web/pull/2044)]
- fix: visual active state in preview app (photo roll) [[#2029](https://github.com/opencloud-eu/web/pull/2029)]
- fix: prevent 'New'-button flicker when navigating [[#2026](https://github.com/opencloud-eu/web/pull/2026)]
- fix(web-runtime): cache embed query params across config reloads [[#1977](https://github.com/opencloud-eu/web/pull/1977)]
- fix(web-pkg): guard against missing routes in getEditorRoute [[#1975](https://github.com/opencloud-eu/web/pull/1975)]

### ✅ Tests

- keycloak tests [[#2064](https://github.com/opencloud-eu/web/pull/2064)]
- test(e2e): increase timeout for large file upload step [[#2067](https://github.com/opencloud-eu/web/pull/2067)]
- update keycloak version [[#2051](https://github.com/opencloud-eu/web/pull/2051)]
- [full-ci] test: fix ocm invite token parsing [[#2049](https://github.com/opencloud-eu/web/pull/2049)]

### 📦️ Dependencies

- chore(deps): update dependency eslint to v10 [[#1945](https://github.com/opencloud-eu/web/pull/1945)]
- chore(deps): update dependency md-editor-v3 to v6.4.0 [[#2072](https://github.com/opencloud-eu/web/pull/2072)]
- chore(deps): update devdependencies (non-major) [[#2057](https://github.com/opencloud-eu/web/pull/2057)]
- fix(deps): update dependency @sentry/vue to v10.42.0 - autoclosed [[#2052](https://github.com/opencloud-eu/web/pull/2052)]
- chore(deps): update dependency fast-xml-parser to v5.4.2 [[#2059](https://github.com/opencloud-eu/web/pull/2059)]
- chore(deps): update dependency @floating-ui/dom to v1.7.6 [[#2065](https://github.com/opencloud-eu/web/pull/2065)]
- chore(deps): update dependency dompurify to v3.3.2 [security] [[#2095](https://github.com/opencloud-eu/web/pull/2095)]
- chore(deps): update dependency ejs to v5 [[#2096](https://github.com/opencloud-eu/web/pull/2096)]
- chore(deps): update dependency @codemirror/view to v6.39.16 [[#2050](https://github.com/opencloud-eu/web/pull/2050)]
- chore(deps): update dependency globals to v17.4.0 [[#2048](https://github.com/opencloud-eu/web/pull/2048)]
- chore(deps): update dependency @cucumber/messages to v32.2.0 [[#2047](https://github.com/opencloud-eu/web/pull/2047)]
- fix(deps): update dependency axios to v1.13.6 [[#2046](https://github.com/opencloud-eu/web/pull/2046)]
- chore(deps): update dependency @cucumber/messages to v32.1.0 [[#2043](https://github.com/opencloud-eu/web/pull/2043)]
- chore(deps): update tiptap monorepo to v3.20.0 [[#1999](https://github.com/opencloud-eu/web/pull/1999)]
- chore(deps): update dependency simple-git to v3.32.3 [[#2039](https://github.com/opencloud-eu/web/pull/2039)]
- chore(deps): update devdependencies (non-major) [[#2030](https://github.com/opencloud-eu/web/pull/2030)]
- fix(deps): update dependency @sentry/vue to v10.40.0 [[#2036](https://github.com/opencloud-eu/web/pull/2036)]
- chore(deps): update dependency fast-xml-parser to v5.4.1 [[#2037](https://github.com/opencloud-eu/web/pull/2037)]
- chore(deps): update vue monorepo to v3.5.29 [[#2034](https://github.com/opencloud-eu/web/pull/2034)]
- chore(deps): update node.js to v24.14.0 [[#2035](https://github.com/opencloud-eu/web/pull/2035)]
- chore(deps): update typescript-eslint monorepo to v8.56.1 [[#2031](https://github.com/opencloud-eu/web/pull/2031)]
- chore(deps): update traefik docker tag to v3.6.9 [[#2032](https://github.com/opencloud-eu/web/pull/2032)]
- chore(deps): update dependency @codemirror/view to v6.39.15 [[#2016](https://github.com/opencloud-eu/web/pull/2016)]
- fix(deps): update dependency vue-router to v5.0.3 [[#2013](https://github.com/opencloud-eu/web/pull/2013)]
- chore(deps): update dependency fast-xml-parser to v5.3.7 [[#2014](https://github.com/opencloud-eu/web/pull/2014)]
- chore(deps): update devdependencies (non-major) [[#1996](https://github.com/opencloud-eu/web/pull/1996)]
- chore(deps): update dependency rollup-plugin-visualizer to v7 [[#2024](https://github.com/opencloud-eu/web/pull/2024)]
- chore: adjust dev docker app-registry [[#1995](https://github.com/opencloud-eu/web/pull/1995)]
- chore: adjust dev docker app-registry [[#1994](https://github.com/opencloud-eu/web/pull/1994)]
- chore(deps): update typescript-eslint monorepo to v8.56.0 [[#1955](https://github.com/opencloud-eu/web/pull/1955)]
- chore(deps): update devdependencies (non-major) [[#1962](https://github.com/opencloud-eu/web/pull/1962)]
- fix(deps): update dependency qs to v6.15.0 [[#1968](https://github.com/opencloud-eu/web/pull/1968)]
- chore(deps): update dependency eslint-plugin-vuejs-accessibility to v2.5.0 [[#1976](https://github.com/opencloud-eu/web/pull/1976)]
- fix(deps): update dependency @sentry/vue to v10.39.0 [[#1988](https://github.com/opencloud-eu/web/pull/1988)]
- chore(deps): update dependency fast-xml-parser to v5.3.6 [[#1979](https://github.com/opencloud-eu/web/pull/1979)]
- chore(deps): update dependency @codemirror/view to v6.39.14 [[#1970](https://github.com/opencloud-eu/web/pull/1970)]
- chore(deps): update traefik docker tag to v3.6.8 [[#1967](https://github.com/opencloud-eu/web/pull/1967)]
- chore(deps): update node.js to v24.13.1 [[#1961](https://github.com/opencloud-eu/web/pull/1961)]
- chore(deps): update dependency eslint-plugin-vue to v10.8.0 [[#1980](https://github.com/opencloud-eu/web/pull/1980)]
- chore(deps): update dependency eslint-plugin-n to v17.24.0 [[#1982](https://github.com/opencloud-eu/web/pull/1982)]

## reva

### 🐛 Bug Fixes

- fix: copy mtime [[#535](https://github.com/opencloud-eu/reva/pull/535)]
- Fix concurrent access to app tokens [[#527](https://github.com/opencloud-eu/reva/pull/527)]
- Fix missing events when changing files on disk with watch_fs enabled [[#530](https://github.com/opencloud-eu/reva/pull/530)]

### 📦️ Dependencies

- chore(deps): bump google.golang.org/grpc from 1.79.1 to 1.79.2 [[#548](https://github.com/opencloud-eu/reva/pull/548)]
- chore(deps): bump go.etcd.io/etcd/client/v3 from 3.6.7 to 3.6.8 [[#546](https://github.com/opencloud-eu/reva/pull/546)]
- chore(deps): bump github.com/mattn/go-sqlite3 from 1.14.33 to 1.14.34 [[#544](https://github.com/opencloud-eu/reva/pull/544)]
- chore(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.40.0 to 1.41.0 [[#543](https://github.com/opencloud-eu/reva/pull/543)]
- chore(deps): bump google.golang.org/grpc from 1.78.0 to 1.79.1 [[#542](https://github.com/opencloud-eu/reva/pull/542)]
- chore(deps): bump golang.org/x/crypto from 0.47.0 to 0.48.0 [[#539](https://github.com/opencloud-eu/reva/pull/539)]
- chore(deps): bump golang.org/x/oauth2 from 0.34.0 to 0.35.0 [[#537](https://github.com/opencloud-eu/reva/pull/537)]
- chore(deps): bump github.com/cloudflare/circl from 1.6.1 to 1.6.3 in the go_modules group across 1 directory [[#538](https://github.com/opencloud-eu/reva/pull/538)]
- chore(deps): bump filippo.io/edwards25519 from 1.1.0 to 1.1.1 in the go_modules group across 1 directory [[#534](https://github.com/opencloud-eu/reva/pull/534)]
- chore(deps): bump golang.org/x/term from 0.39.0 to 0.40.0 [[#533](https://github.com/opencloud-eu/reva/pull/533)]
- chore(deps): bump github.com/go-chi/chi/v5 from 5.2.4 to 5.2.5 [[#531](https://github.com/opencloud-eu/reva/pull/531)]