## [6.2.0](https://github.com/opencloud-eu/opencloud/releases/tag/v6.2.0) - 2026-05-11

### ❤️ Thanks to all contributors! ❤️

@JammingBen, @ScharfViktor, @Sweeistaken, @aduffeck, @dragonchaser, @dschmidt, @fschade, @pedropintosilva, @rhafer, @schweigisito, @butonic, @AlexAndBear, @Cassolette, @JammingBen, @kulmann, @tammi-23


## Opencloud

### 📈 Enhancement

- feat: enable EnableRemoteLinkPicker WOPI flag for Collabora Online [[#2663](https://github.com/opencloud-eu/opencloud/pull/2663)]
- feat(kql): support dotted keys in property restrictions [[#2632](https://github.com/opencloud-eu/opencloud/pull/2632)]

### 🐛 Bug Fixes

- Set new defaults for caches and stores [[#2702](https://github.com/opencloud-eu/opencloud/pull/2702)]
- fix: remove typo in error message [[#2701](https://github.com/opencloud-eu/opencloud/pull/2701)]
- fix(search): preserve value case for non-lowercased bleve fields [[#2633](https://github.com/opencloud-eu/opencloud/pull/2633)]
- More graceful shutdown fixes [[#2690](https://github.com/opencloud-eu/opencloud/pull/2690)]
- Hotfix for https://github.com/opencloud-eu/opencloud/issues/2282 [[#2631](https://github.com/opencloud-eu/opencloud/pull/2631)]
- fix(search): read --force-rescan flag with its registered name [[#2639](https://github.com/opencloud-eu/opencloud/pull/2639)]
- fix(search): parse tika xmpDM:duration as a float [[#2638](https://github.com/opencloud-eu/opencloud/pull/2638)]

### ✅ Tests

- [api-tests] delete PROPATCH favorite tests [[#2689](https://github.com/opencloud-eu/opencloud/pull/2689)]

### 📚 Documentation

- enhancement: increase display size of graph flow diagram [[#2620](https://github.com/opencloud-eu/opencloud/pull/2620)]

### 📦️ Dependencies

- build(deps): bump go.opentelemetry.io/contrib/zpages from 0.67.0 to 0.68.0 [[#2666](https://github.com/opencloud-eu/opencloud/pull/2666)]
- build(deps): bump @types/node from 22.19.17 to 25.6.0 in /services/idp [[#2687](https://github.com/opencloud-eu/opencloud/pull/2687)]
- build(deps): bump go.opentelemetry.io/otel/exporters/stdout/stdouttrace from 1.42.0 to 1.43.0 [[#2601](https://github.com/opencloud-eu/opencloud/pull/2601)]
- build(deps): bump github.com/davidbyttow/govips/v2 from 2.17.0 to 2.18.0 [[#2656](https://github.com/opencloud-eu/opencloud/pull/2656)]
- build(deps): bump i18next from 25.10.10 to 26.0.4 in /services/idp [[#2609](https://github.com/opencloud-eu/opencloud/pull/2609)]
- build(deps): bump github.com/testcontainers/testcontainers-go/modules/opensearch from 0.41.0 to 0.42.0 [[#2645](https://github.com/opencloud-eu/opencloud/pull/2645)]
- build(deps): bump github.com/open-policy-agent/opa from 1.15.1 to 1.15.2 [[#2602](https://github.com/opencloud-eu/opencloud/pull/2602)]

## Reva
### 🐛 Bug Fixes

- Skip internal dirs entirely, including all children [[#622](https://github.com/opencloud-eu/reva/pull/622)]
- Fix nats ttl [[#614](https://github.com/opencloud-eu/reva/pull/614)]
- Fix invalidating the id cache recursively [[#610](https://github.com/opencloud-eu/reva/pull/610)]
- Fix performance issue by changingthe  key format of the id cache in posix fs [[#602](https://github.com/opencloud-eu/reva/pull/602)]

### 📈 Enhancement

- Expose WarmupIDCache, it's gonna be used by a "scan" command later [[#621](https://github.com/opencloud-eu/reva/pull/621)]
- fix(users): improve LDAP error handling [[#618](https://github.com/opencloud-eu/reva/pull/618)]

### 📦️ Dependencies

- chore(deps): bump github.com/hashicorp/go-plugin from 1.7.0 to 1.8.0 [[#623](https://github.com/opencloud-eu/reva/pull/623)]
- chore(deps): bump github.com/minio/minio-go/v7 from 7.0.99 to 7.1.0 [[#624](https://github.com/opencloud-eu/reva/pull/624)]
- chore(deps): bump github.com/onsi/gomega from 1.39.1 to 1.40.0 [[#620](https://github.com/opencloud-eu/reva/pull/620)]
- chore(deps): bump github.com/go-sql-driver/mysql from 1.9.3 to 1.10.0 [[#619](https://github.com/opencloud-eu/reva/pull/619)]
- chore(deps): bump github.com/nats-io/nats-server/v2 from 2.12.6 to 2.14.0 [[#612](https://github.com/opencloud-eu/reva/pull/612)]
- chore(deps): bump go.etcd.io/etcd/client/v3 from 3.6.8 to 3.6.10 [[#603](https://github.com/opencloud-eu/reva/pull/603)]
- chore(deps): bump github.com/Azure/go-ntlmssp from 0.0.0-20221128193559-754e69321358 to 0.1.1 in the go_modules group across 1 directory [[#605](https://github.com/opencloud-eu/reva/pull/605)]
- chore(deps): bump golang.org/x/sys from 0.42.0 to 0.43.0 [[#601](https://github.com/opencloud-eu/reva/pull/601)]
- chore(deps): bump github.com/mattn/go-sqlite3 from 1.14.37 to 1.14.42 [[#598](https://github.com/opencloud-eu/reva/pull/598)]
- chore(deps): bump github.com/ceph/go-ceph from 0.38.0 to 0.39.0 [[#599](https://github.com/opencloud-eu/reva/pull/599)]

## Web

### Migration

### For admins

Support for AMD apps has been removed, meaning apps need to be built as ESM. Make sure to update to the newest app versions available.

### For developers (extension system)

#### General

Support for AMD apps has been removed, meaning apps need to be built as ESM. Make sure to use the latest `extension-sdk` to ensure full compatibility for your app going forward.

#### Text Editor

The `TextEditor` component has been removed from `web-pkg` in favor of the new Tiptap editor. You can use it like so:

```vue
<template>
	<TextEditorProvider :editor="textEditor">
		<TextEditorToolbar />
		<TextEditorContent />
	</TextEditorProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
	useTextEditor,
	TextEditorProvider,
	TextEditorContent,
	TextEditorToolbar
} from '@opencloud-eu/web-pkg/editor'

const content = ref('Some content')

const textEditor = useTextEditor({
	contentType: 'markdown',
	modelValue: content
})
</script>
```

See the [`TextEditorOptions` interface](https://github.com/opencloud-eu/web/blob/main/packages/web-pkg/src/editor/types.ts#L7) for more details on the possible options.
#### File & Space actions

Several file & space actions have been moved from `web-pkg` to the files app, meaning you can't import them directly anymore. Instead, you need to retrieve them via the extension system by their ID.

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useExtensionRegistry, ActionExtension } from '@opencloud-eu/web-pkg'

const extensionRegistry = useExtensionRegistry()

const extension = extensionRegistry.getExtensionById<ActionExtension>('com.github.opencloud-eu.web.files.context-action.rename')
const action = computed(() => extension?.action)
</script>
```

For a full list of moved actions, please refer to the following files. You can also use them to retrieve extension IDs.

- [File actions](https://github.com/opencloud-eu/web/blob/main/packages/web-app-files/src/composables/extensions/useFileActions.ts)
- [Space actions](https://github.com/opencloud-eu/web/blob/main/packages/web-app-files/src/composables/extensions/useSpaceActions.ts)
- [Upload actions](https://github.com/opencloud-eu/web/blob/main/packages/web-app-files/src/composables/extensions/useUploadActions.ts)

Furthermore, the `category` property of file & space actions has changed its signature. It now expects one of these values: `'primary' | 'secondary' | 'tertiary' | 'quaternary'`.
This was done to better reflect the effect this property has, since it determines the position of an action in the context menu. Defaults to `tertiary`.
#### Misc

**Removed methods from `web-pkg`**

- `isResourceAccessible` (`useGetMatchingSpace` composable). Resources are always accessible if the user has access to the space.

**Changed signatures in `web-pkg`**

- removed `loading` from `useDriveResolver`
- removed `space` from `breadcrumbsFromPath` (`useBreadcrumbsFromPath` composable)
- removed `configStore` from `getSpacesByType`
- removed `options` from `createFileRouteOptions`

**Removed options from config store**

- `routing`
- `ocm`
- `cernFeatures`


### 💥 Breaking changes

- refactor!: move downloadArchive move copy actions to web-app-files [[#2471](https://github.com/opencloud-eu/web/pull/2471)]
- refactor!: add extension point for right sidebar actions, move enable and disable sync actions to web-app-files [[#2466](https://github.com/opencloud-eu/web/pull/2466)]
- refactor!: move certain file and space actions to files app [[#2456](https://github.com/opencloud-eu/web/pull/2456)]
- feat!: tiptap integration [[#2195](https://github.com/opencloud-eu/web/pull/2195)]
- feat!: remove amd app loading [[#2405](https://github.com/opencloud-eu/web/pull/2405)]
- feat!: remove unmaintained project specific features [[#2399](https://github.com/opencloud-eu/web/pull/2399)]

### 📈 Enhancement

- feat: adds client-side search to the contact list [[#2472](https://github.com/opencloud-eu/web/pull/2472)]
- feat: handle UI_PickLink postMessage from Collabora Online [[#2435](https://github.com/opencloud-eu/web/pull/2435)]
- feat: retrieve extensions by their id [[#2468](https://github.com/opencloud-eu/web/pull/2468)]
- feat: create new contacts [[#2458](https://github.com/opencloud-eu/web/pull/2458)]
- feat(search): clear on esc keypress + misc fixes [[#2423](https://github.com/opencloud-eu/web/pull/2423)]
- perf: improve initial loading times [[#2414](https://github.com/opencloud-eu/web/pull/2414)]
- feat: show mobile sidebar and FAB on tablets in portrait mode [[#2433](https://github.com/opencloud-eu/web/pull/2433)]
- feat: redesign file input [[#2416](https://github.com/opencloud-eu/web/pull/2416)]
- feat: redesign color picker [[#2407](https://github.com/opencloud-eu/web/pull/2407)]
- feat: reduce mobile sidebar width to make it easier to dismiss [[#2410](https://github.com/opencloud-eu/web/pull/2410)]
- feat: add the ability to show critical badge to version check if CVE … [[#2397](https://github.com/opencloud-eu/web/pull/2397)]

### 🐛 Bug Fixes

- fix: prevent 'keep both' conflict handling from losing files [[#2474](https://github.com/opencloud-eu/web/pull/2474)]
- fix: context actions is using wrong extension point [[#2463](https://github.com/opencloud-eu/web/pull/2463)]
- fix: spaces view doesn't have a dedicated multipe select context menu [[#2464](https://github.com/opencloud-eu/web/pull/2464)]
- fix(extension-sdk): use posix path to support windows build [[#2404](https://github.com/opencloud-eu/web/pull/2404)]
- fix: sorting of spaces is faulty when space names contain numbers [[#2429](https://github.com/opencloud-eu/web/pull/2429)]

### ✅ Tests

- fix-flaky: safari upload test [[#2417](https://github.com/opencloud-eu/web/pull/2417)]

### 📦️ Dependencies

- chore(deps): update dependency fast-xml-parser to v5.7.3 [[#2480](https://github.com/opencloud-eu/web/pull/2480)]
- chore(deps): update dependency eslint-plugin-vue to v10.9.1 [[#2479](https://github.com/opencloud-eu/web/pull/2479)]
- chore(deps): update tiptap monorepo to v3.22.5 [[#2448](https://github.com/opencloud-eu/web/pull/2448)]
- chore(deps): update devdependencies (non-major) [[#2449](https://github.com/opencloud-eu/web/pull/2449)]
- chore(deps): update dependency vue-router to v5.0.6 [[#2451](https://github.com/opencloud-eu/web/pull/2451)]
- chore(deps): update typescript-eslint monorepo to v8.59.1 [[#2446](https://github.com/opencloud-eu/web/pull/2446)]
- chore(deps): update dependency filesize to v11.0.17 [[#2445](https://github.com/opencloud-eu/web/pull/2445)]
- chore(deps): update dependency @vue/test-utils to v2.4.9 [[#2444](https://github.com/opencloud-eu/web/pull/2444)]
- fix(deps): update dependency @sentry/vue to v10.50.0 [[#2436](https://github.com/opencloud-eu/web/pull/2436)]
- chore(deps): update dependency dompurify to v3.4.1 [[#2418](https://github.com/opencloud-eu/web/pull/2418)]
- fix(deps): update dependency axios to v1.15.2 [[#2419](https://github.com/opencloud-eu/web/pull/2419)]
- chore(deps): update dependency eslint-plugin-vue to v10.9.0 [[#2421](https://github.com/opencloud-eu/web/pull/2421)]
- chore(deps): update dependency fast-xml-parser to v5.7.2 [[#2440](https://github.com/opencloud-eu/web/pull/2440)]
- fix(deps): update dependency p-queue to v9.2.0 [[#2442](https://github.com/opencloud-eu/web/pull/2442)]
- chore(deps): update traefik docker tag to v3.6.14 [[#2431](https://github.com/opencloud-eu/web/pull/2431)]
- fix(deps): update dependency vue-router to v5.0.6 [[#2432](https://github.com/opencloud-eu/web/pull/2432)]
- chore(deps): update pnpm to v10.33.2 [[#2427](https://github.com/opencloud-eu/web/pull/2427)]
- chore(deps): update devdependencies (non-major) [[#2425](https://github.com/opencloud-eu/web/pull/2425)]
- chore(deps): update devdependencies (non-major) [[#2415](https://github.com/opencloud-eu/web/pull/2415)]
- chore(deps): update tiptap monorepo to v3.22.4 [[#2389](https://github.com/opencloud-eu/web/pull/2389)]
- chore(deps): update dependency @codemirror/view to v6.41.1 [[#2390](https://github.com/opencloud-eu/web/pull/2390)]
- chore(deps): update typescript-eslint monorepo to v8.59.0 [[#2406](https://github.com/opencloud-eu/web/pull/2406)]
- chore(deps): update devdependencies (non-major) to v4.2.3 [[#2409](https://github.com/opencloud-eu/web/pull/2409)]
