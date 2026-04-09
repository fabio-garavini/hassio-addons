## Workspace-Level Roles & Permission Inheritance

This release replaces the previous Organization (ORG) model with a unified Default Workspace, introducing a more intuitive and streamlined approach to access management.

Previously, organization-level roles such as ORG Viewer and ORG Creator governed what users could do at a high level, but did not automatically grant access to individual bases. Regardless of their ORG role, users had to be explicitly invited to each base separately — a process that often created unnecessary overhead for administrators.

With this update, workspace-based roles — Owner, Creator, Editor, Commenter, Viewer, and No Access — now serve as the foundation of the permission model. Users invited at the workspace level automatically inherit their assigned role across all resources within that workspace, eliminating the need for redundant base-level invitations. For example, a user granted the Creator role at the workspace level can immediately create and access bases without any additional configuration.

Notably, advanced workspace-level access control, previously limited to paid installations, is now fully available for self-hosted deployments.

Existing permissions are not affected by this change. Any base-level access configured prior to this release will continue to be respected, ensuring a seamless transition with no disruption to current setups.

Learn more about Workspace & Base collaboration [here](https://nocodb.com/docs/product-docs/collaboration)

## 🐛 Closed Issues

- [**closed**] Bug: Infinite reactive loop in columns computed causes complete browser freeze on grid view open [#13269](https://github.com/nocodb/nocodb/issues/13269)
- [**closed**] 🐛 Bug: Error on trying to view Meta Sync: Cannot read properties of null (reading 'getModel') [#13265](https://github.com/nocodb/nocodb/issues/13265)
- [**closed**] 🐛 Bug: View Mode Locked but i can edit [#13241](https://github.com/nocodb/nocodb/issues/13241)
- [**closed**] 🐛 Bug: [Self-hosted] Grid view with Links/Lookup columns is 100x slower than plain columns [#13231](https://github.com/nocodb/nocodb/issues/13231)
- [**closed**] 🔦 Feature: Research for more items/all the table [#13189](https://github.com/nocodb/nocodb/issues/13189)
- [**closed**] 🐛 Bug: Editor Role Cannot Configure Field Visibility in Their Own View [#13173](https://github.com/nocodb/nocodb/issues/13173)
- [**closed**] 🐛 Bug: Metadata-only PATCH on Checkbox columns silently strips NOT NULL and DEFAULT constraints [#13166](https://github.com/nocodb/nocodb/issues/13166)
- [**closed**] 🐛 Bug: PATCH on primary key column metadata fails with HTTP 400 (same class as #12972 / #13044) [#13165](https://github.com/nocodb/nocodb/issues/13165)
- [**closed**] API v2 Meta docs: multiple incorrect/missing endpoints for columns, form views, and view creation [#13164](https://github.com/nocodb/nocodb/issues/13164)
- [**closed**] 🔦 Feature: Support MultiSelect population import [#13156](https://github.com/nocodb/nocodb/issues/13156)
- [**closed**] 🐛 Bug: Text overflows in UI components when switching languages [#13155](https://github.com/nocodb/nocodb/issues/13155)
- [**closed**] 🐛 Bug: Deleting API token fails when there is only one token left in second page [#13154](https://github.com/nocodb/nocodb/issues/13154)
- [**closed**] 🐛 Bug: Knex Timeout acquiring a connection [#13150](https://github.com/nocodb/nocodb/issues/13150)
- [**closed**] 🐛 Bug: Rollup Field doesn't keep Currency format for Formula fields [#13147](https://github.com/nocodb/nocodb/issues/13147)
- [**closed**] 🔦 Feature: Filter View by current user (Assigned only view) [#13102](https://github.com/nocodb/nocodb/issues/13102)
- [**closed**] 🐛 Bug: Data API v3 won't return primary key field [#13077](https://github.com/nocodb/nocodb/issues/13077)
- [**closed**] Broken link in README under Installation [#13028](https://github.com/nocodb/nocodb/issues/13028)
- [**closed**] 🔦 Feature: Show first/selected field in links [#13027](https://github.com/nocodb/nocodb/issues/13027)
- [**closed**] 🐛 Bug: No Create Base Option in New Install [#13005](https://github.com/nocodb/nocodb/issues/13005)
- [**closed**] 🐛 Bug: Failed to copy to clipboard [#13001](https://github.com/nocodb/nocodb/issues/13001)
- [**closed**] 🐛 Bug: Cannot find package 'ipaddr.js' [#12939](https://github.com/nocodb/nocodb/issues/12939)
- [**closed**] 🔦 Feature: Exporting databases only allows CSV, it doesn't allow me to export in .json format [#12790](https://github.com/nocodb/nocodb/issues/12790)
- [**closed**] 🔦 Feature: Let the filter have a CheckBox property [#8758](https://github.com/nocodb/nocodb/issues/8758)

## What's Changed
* Nc Refactor keyboard shortcuts dialog and add menu access by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13134
* Nc feat/map view experiments by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13126
* chore: post-release sync by @github-actions[bot] in https://github.com/nocodb/nocodb/pull/13137
* Nc feat/autonumber field by @dstala in https://github.com/nocodb/nocodb/pull/13123
* Nc feat/ltar v2 followup by @pranavxc in https://github.com/nocodb/nocodb/pull/13140
* chore: lighter typecheck by @mertmit in https://github.com/nocodb/nocodb/pull/13139
* feat: drag files to create records by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13141
* Nc feat/timeline2 by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13142
* fix(nc-gui): local GroupBy not working in dashboard and shared view by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13144
* feat: single docker preps by @mertmit in https://github.com/nocodb/nocodb/pull/13145
* fix: missing apis and cache issue by @mertmit in https://github.com/nocodb/nocodb/pull/13151
* chore: lint by @mertmit in https://github.com/nocodb/nocodb/pull/13153
* fix: integration list api call issue by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13152
* override attachment test by @fendy3002 in https://github.com/nocodb/nocodb/pull/13158
* Nc fix hooks error notification by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13162
* Nc feat/team hierarchy by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13161
* chore: presence types by @mertmit in https://github.com/nocodb/nocodb/pull/13163
* Nc refactor/rename envs by @fendy3002 in https://github.com/nocodb/nocodb/pull/13160
* fix: batch DB calls by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13168
* fix: wrong feature badge visible issue by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13169
* fix: resolve lookup target type for group-by filter building by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13171
* fix: resolve column ID to title in public shared form nested list AST by @pranavxc in https://github.com/nocodb/nocodb/pull/13174
* sanitize markdown render by @fendy3002 in https://github.com/nocodb/nocodb/pull/13179
* Nc missing audit by @pranavxc in https://github.com/nocodb/nocodb/pull/13178
* Nc refactor: Sidebar by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13149
* fix: improve for pool usage by @mertmit in https://github.com/nocodb/nocodb/pull/13181
* fix/pool issues follow by @mertmit in https://github.com/nocodb/nocodb/pull/13187
* fix: cdf overridden by @fendy3002 in https://github.com/nocodb/nocodb/pull/13177
* Nc chore/switch from hash routing by @pranavxc in https://github.com/nocodb/nocodb/pull/13175
* change the direction to CHILD_TO_PARENT by @fendy3002 in https://github.com/nocodb/nocodb/pull/13193
* Nc sidebar improvements by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13192
* fix: small issue by @mertmit in https://github.com/nocodb/nocodb/pull/13188
* fix: Learn more button redirect loop by @pranavxc in https://github.com/nocodb/nocodb/pull/13195
* fix: text overflow issue in overview page card by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13194
* chore: sync changes by @mertmit in https://github.com/nocodb/nocodb/pull/13200
* chore: sync changes by @mertmit in https://github.com/nocodb/nocodb/pull/13203
* chore: sync changes by @mertmit in https://github.com/nocodb/nocodb/pull/13202
* fix: Validate redirect URL protocol in PageLeavingWarning by @pranavxc in https://github.com/nocodb/nocodb/pull/13201
* chore: type issue by @mertmit in https://github.com/nocodb/nocodb/pull/13204
* fix: avoid protected constructor by @mertmit in https://github.com/nocodb/nocodb/pull/13205
* Nc formula fix by @pranavxc in https://github.com/nocodb/nocodb/pull/13196
* chore: manual sync by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13208
* Nc fix/mini sidebar arrangements by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13207
* chore: sync sdk workflow nodes by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13210
* Nc feat/dashboard v3 api by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13209
* fix: SPA fallback fails for URLs with dots in path segments by @pranavxc in https://github.com/nocodb/nocodb/pull/13217
* Nc excel import by @pranavxc in https://github.com/nocodb/nocodb/pull/13218
* Nc Fix: Shared base and view issues by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13216
* fix: xss vulnerabilities by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13219
* chore: keep workflows mini sidebar menu after data menu by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13220
* Nc fix: minor fixes + gating by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13223
* Nc Feat: Responsive UI changes by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13212
* Nc chore/lint 11th march by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13226
* Nc fix: sidebar create new menu item alignment by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13225
* Nc grid performance by @pranavxc in https://github.com/nocodb/nocodb/pull/13224
* Nc feat/responsive UI 11 march by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13230
* fix: Parallelise nocoExecute DataLoader batching with serial query queue by @pranavxc in https://github.com/nocodb/nocodb/pull/13237
* fix: Group by aggregation missing by @pranavxc in https://github.com/nocodb/nocodb/pull/13233
* Nc rollup filter bug by @pranavxc in https://github.com/nocodb/nocodb/pull/13240
* Nc fix/single docker changes by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13243
* Nc Feat: Responsive UI 12th march (IMP: deps install before merge) by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13232
* fix: add missing exports by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13246
* Fix: one docker followup changes by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13249
* docs: fix broken installation docs link in README by @vizzv in https://github.com/nocodb/nocodb/pull/13211
* fix(nc-gui): fix mention copy-paste corruption by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13247
* Nc feat: Cross section view drag and drop by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13245
* Nc chore/one docker build by @pranavxc in https://github.com/nocodb/nocodb/pull/13252
* Nc fix/misc by @pranavxc in https://github.com/nocodb/nocodb/pull/13250
* Nc one docker by @pranavxc in https://github.com/nocodb/nocodb/pull/13251
* Optimize column resize by avoiding heavy re-computation by @pranavxc in https://github.com/nocodb/nocodb/pull/13239
* fix: allow field configuration if it is used for formatting by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13254
* Nc docs/misc fixes by @dstala in https://github.com/nocodb/nocodb/pull/13256
* fix: rollup field not respecting formula field formatting configuration by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13255
* Nc chat act improvements by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13257
* fix: migration order by @mertmit in https://github.com/nocodb/nocodb/pull/13258
* fix: deleting API token fails when there is only one token left in second page by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13259
* chore: move tests and actions to single source by @mertmit in https://github.com/nocodb/nocodb/pull/13244
* fix: link filter UI issue by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13263
* fix: workflow draft guard by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13264
* fix: tool call permissions by @DarkPhoenix2704 in https://github.com/nocodb/nocodb/pull/13266
* fix: AI Generate text followup changes  by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/12811
* fix(nocodb): use proper context for personal view ACL checks in internal API by @pranavxc in https://github.com/nocodb/nocodb/pull/13271
* feat: allow display format configuration for CreatedAt/UpdatedAt fields by @rameshmane7218 in https://github.com/nocodb/nocodb/pull/13273

## New Contributors
* @vizzv made their first contribution in https://github.com/nocodb/nocodb/pull/13211

**Full Changelog**: https://github.com/nocodb/nocodb/compare/0.301.3...0.301.5