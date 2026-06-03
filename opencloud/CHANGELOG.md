> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Release Notes OpenCloud 7.1.0

## ⏳ First startup may take a few minutes

After the update, the first container startup may take a few minutes before all Spaces are available. Feel free to grab a cup of coffee meanwhile.
**Background: Share-Manager migration**
Due to an issue in OpenCloud 7.0.0 the migration task to convert existing space memberships will run a second time to also migrate space that have been disabled when the migration ran for the first time. This task can take up to a few minutes. During that time the member listing of spaces might be incorrect. Also it is not possible to change space memberships or create/delete spaces while the task is running. When the loglevel of the `sharing` service is set to `info` (`OC_LOG_LEVEL=info` or `SHARING_LOG_LEVEL=info`) the task will report progress of the migration via the logfile.

## [7.1.0](https://github.com/opencloud-eu/opencloud/releases/tag/v7.1.0) - 2026-06-02 OpenCloud

### ❤️ Thanks to all contributors! ❤️

@ScharfViktor, @aduffeck, @dragonchaser, @kulmann, @micbar, @openclouders, @rhafer

### 📚 Documentation

- 🎉 Release 7.1.0 [[#2820](https://github.com/opencloud-eu/opencloud/pull/2820)]
- docs(adr): Remove erroneous mention of kanidm [[#2783](https://github.com/opencloud-eu/opencloud/pull/2783)]

### 🐛 Bug Fixes

- Prevent personal space creation for service- and lightweight users [[#2876](https://github.com/opencloud-eu/opencloud/pull/2876)]
- chore: bump reva to 2.46.1 [[#2869](https://github.com/opencloud-eu/opencloud/pull/2869)]
- fix: Send SSE events for SpaceCreated/-Disabled/-Deleted [[#2851](https://github.com/opencloud-eu/opencloud/pull/2851)]
- Only try to limit search to spaces if there's a space id to limit to [[#2834](https://github.com/opencloud-eu/opencloud/pull/2834)]
- fix(init): Only log admin password if it was generated [[#2839](https://github.com/opencloud-eu/opencloud/pull/2839)]
- fix: translations for activities and others [[#2836](https://github.com/opencloud-eu/opencloud/pull/2836)]
- fix-2824. run tests without remote.php [[#2826](https://github.com/opencloud-eu/opencloud/pull/2826)]

### 📈 Enhancement

- chore: bump web to v7.1.0 [[#2870](https://github.com/opencloud-eu/opencloud/pull/2870)]

## Web

### 📦️ Dependencies

- build(deps): bump go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc from 1.43.0 to 1.44.0 [[#2855](https://github.com/opencloud-eu/opencloud/pull/2855)]
- build(deps-dev): bump license-checker-rseidelsohn from 4.4.2 to 5.0.1 in /services/idp [[#2854](https://github.com/opencloud-eu/opencloud/pull/2854)]
- build(deps-dev): bump cldr from 7.9.0 to 8.0.0 in /services/idp [[#2853](https://github.com/opencloud-eu/opencloud/pull/2853)]
- build(deps): bump i18next from 26.1.0 to 26.3.0 in /services/idp [[#2849](https://github.com/opencloud-eu/opencloud/pull/2849)]
- build(deps-dev): bump sass-loader from 16.0.8 to 17.0.0 in /services/idp [[#2845](https://github.com/opencloud-eu/opencloud/pull/2845)]
- build(deps): bump google.golang.org/grpc from 1.80.0 to 1.81.1 [[#2848](https://github.com/opencloud-eu/opencloud/pull/2848)]
- build(deps): bump go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc from 0.68.0 to 0.69.0 [[#2847](https://github.com/opencloud-eu/opencloud/pull/2847)]
- build(deps-dev): bump typescript from 5.9.3 to 6.0.3 in /services/idp [[#2846](https://github.com/opencloud-eu/opencloud/pull/2846)]
- build(deps-dev): bump postcss-loader from 4.3.0 to 8.2.1 in /services/idp [[#2830](https://github.com/opencloud-eu/opencloud/pull/2830)]
- build(deps): bump github.com/riandyrn/otelchi from 0.12.2 to 0.12.3 [[#2814](https://github.com/opencloud-eu/opencloud/pull/2814)]
- build(deps-dev): bump workbox-webpack-plugin from 7.4.0 to 7.4.1 in /services/idp [[#2781](https://github.com/opencloud-eu/opencloud/pull/2781)]

### 🐛 Bug Fixes

- fix: help to translate text breaks settings page layout [[#2625](https://github.com/opencloud-eu/web/pull/2625)]
- fix: sse event on space delete has no effect [[#2614](https://github.com/opencloud-eu/web/pull/2614)]
- fix: prevent components from being proxied in Vue's reactivity system [[#2588](https://github.com/opencloud-eu/web/pull/2588)]
- fix: video loading inside share spaces [[#2613](https://github.com/opencloud-eu/web/pull/2613)]
- fix: legacy WebDav url [[#2577](https://github.com/opencloud-eu/web/pull/2577)]
- fix: account settings, extension names not translated [[#2595](https://github.com/opencloud-eu/web/pull/2595)]
- fix: missing undo and redo actions in plain text editor [[#2592](https://github.com/opencloud-eu/web/pull/2592)]
- fix(design-system): add id to OcSearchBar [[#2587](https://github.com/opencloud-eu/web/pull/2587)]
- fix: cleanup event listener [[#2532](https://github.com/opencloud-eu/web/pull/2532)]
- fix(editor): json rendering, plaintext serialization [[#2573](https://github.com/opencloud-eu/web/pull/2573)]
- fix: tags contextual helper text is out of viewport [[#2582](https://github.com/opencloud-eu/web/pull/2582)]
- fix: view mode not translated [[#2581](https://github.com/opencloud-eu/web/pull/2581)]
- fix: remove all folders from file drop upload queue [[#2510](https://github.com/opencloud-eu/web/pull/2510)]
- fix(editor): slash menu scroll [[#2572](https://github.com/opencloud-eu/web/pull/2572)]
- fix(public-links): rename expiry date label to expiration date [[#2575](https://github.com/opencloud-eu/web/pull/2575)]
- fix: disabled space has navigate actions [[#2569](https://github.com/opencloud-eu/web/pull/2569)]
- fix: cancel generic space folder loading  [[#2567](https://github.com/opencloud-eu/web/pull/2567)]
- fix: upload overlay wording [[#2564](https://github.com/opencloud-eu/web/pull/2564)]
- fix(client): dedupe search results [[#2555](https://github.com/opencloud-eu/web/pull/2555)]
- fix: prevent csp error logs in browser console [[#2562](https://github.com/opencloud-eu/web/pull/2562)]
- fix(design-system): silence OcDrop attr-inheritance warning storm [[#2560](https://github.com/opencloud-eu/web/pull/2560)]
- fix: empty markdown documents [[#2553](https://github.com/opencloud-eu/web/pull/2553)]
- fix: prevents unsightly line breaks [[#2546](https://github.com/opencloud-eu/web/pull/2546)]
- fix: readme.md header content won't get rendered on public link access [[#2542](https://github.com/opencloud-eu/web/pull/2542)]
- fix: upload overlay when merging folders [[#2544](https://github.com/opencloud-eu/web/pull/2544)]

### 📈 Enhancement

- feat: use embed mode for copy and move actions [[#2599](https://github.com/opencloud-eu/web/pull/2599)]

## Reva

### 🐛 Bug Fixes

- Migrate disabled spaces [[#649](https://github.com/opencloud-eu/reva/pull/649)]
- fix: added /dav/public-files/ to Unprotected routes [[#648](https://github.com/opencloud-eu/reva/pull/648)]

### 📦️ Dependencies

- chore(deps): bump golang.org/x/text from 0.36.0 to 0.37.0 [[#643](https://github.com/opencloud-eu/reva/pull/643)]