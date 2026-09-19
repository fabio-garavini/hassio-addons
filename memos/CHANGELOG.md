Memos 0.31 adds Spaces for collaboration, Calendar and Map views for browsing your notes, and tools to move your memos between instances. Writing, search, attachments, and navigation also receive improvements throughout the app.

## Highlights

* **Spaces:** Organize memos in shared Spaces, invite people through their inbox, move memos between Spaces, and choose custom icons or emoji. Space-only visibility limits a memo's audience to active Space members, with the administrator access described below. ([#6228](https://github.com/usememos/memos/pull/6228), [#6266](https://github.com/usememos/memos/pull/6266), [#6285](https://github.com/usememos/memos/pull/6285), [#6287](https://github.com/usememos/memos/pull/6287))
* **Calendar and Map:** Browse memos by month, open a day to read or add notes for that date, and explore memos with location data on a dedicated map. ([#6277](https://github.com/usememos/memos/pull/6277), [#6280](https://github.com/usememos/memos/pull/6280), [map page](https://github.com/usememos/memos/commit/bc89ec00060623cff52eacbc2c3ca82038e5c924))
* **Views and search:** Save reusable filters as Views with custom icons. Filter by Space or location, find memos outside any Space, use expressions in Quick Find, and see search matches highlighted in memo content. ([#6167](https://github.com/usememos/memos/pull/6167), [#6181](https://github.com/usememos/memos/pull/6181), [#6267](https://github.com/usememos/memos/pull/6267), [#6276](https://github.com/usememos/memos/pull/6276), [#6305](https://github.com/usememos/memos/pull/6305), [#6335](https://github.com/usememos/memos/pull/6335))
* **Export and import:** Move your memos between instances from Settings → Export & Import using Memos Export Format (ZIP). Exports include archived memos, comments you wrote, and attachment files. Older export files remain importable. This is a personal export; instance settings and other users' data are not included. ([#6334](https://github.com/usememos/memos/pull/6334), [export format](https://github.com/usememos/memos/commit/eab07d8081e7a196834f896e91cfebb0c1a73fb5))
* **Attachments:** Configure multiple named storage backends, insert attachment images into memo content, upload files in smaller chunks, and see your attachment storage usage in account settings. ([#6184](https://github.com/usememos/memos/pull/6184), [#6172](https://github.com/usememos/memos/pull/6172), [chunked uploads](https://github.com/usememos/memos/commit/b3e67399b83bc32cb27dda1f0eaa448b2108e211), [#6326](https://github.com/usememos/memos/pull/6326))
* **Writing and navigation:** Create memos from the sidebar, use Markdown formatting shortcuts, resize the desktop sidebar, and keep your Space and filters when navigating to a memo and back. ([#6219](https://github.com/usememos/memos/pull/6219), [#6258](https://github.com/usememos/memos/pull/6258), [#6148](https://github.com/usememos/memos/pull/6148), [Space navigation](https://github.com/usememos/memos/commit/af008b21533bdc50fae5ad6a438347ad84bb9419))

## Fixes and polish

* **Editor:** Improved IME and Windows emoji input, restored native mobile text assistance, attached pasted files correctly, preserved timestamp edits, and expanded tag autocomplete to more editing contexts. ([IME input](https://github.com/usememos/memos/commit/14d757ce1fb31c78590f374bc042f8dbedbc20d7), [emoji input](https://github.com/usememos/memos/commit/b4fefa94d72cd381ccdd1dcb359ade0371203cce), [#6248](https://github.com/usememos/memos/pull/6248), [pasted files](https://github.com/usememos/memos/commit/8701d93fc0a55500c3c3c27a737fb9d60dd8a82f), [timestamp edits](https://github.com/usememos/memos/commit/0716eaac2c07b00cc4c36682ad7880a1ef072162), [#6327](https://github.com/usememos/memos/pull/6327))
* **Markdown:** Improved tag recognition, stopped currency amounts from being interpreted as inline math, fixed numbered task-list toggles, and enabled telephone and SMS links. ([#6132](https://github.com/usememos/memos/pull/6132), [#6216](https://github.com/usememos/memos/pull/6216), [#6346](https://github.com/usememos/memos/pull/6346), [#6341](https://github.com/usememos/memos/pull/6341))
* **Map and media:** Restored keyless OpenStreetMap tiles, fixed navigation away from the Map after a WebGL failure, improved HEIC/HEIF detection, and added 0.5× and 0.75× audio playback. ([#6242](https://github.com/usememos/memos/pull/6242), [WebGL cleanup](https://github.com/usememos/memos/commit/305310cdd18345acc25466d24e800b3f85c49593), [#6246](https://github.com/usememos/memos/pull/6246), [audio speeds](https://github.com/usememos/memos/commit/b88a71540a1a4079c8211edeac3e81b0fb4a6a13))
* **Interface and languages:** Refined memo navigation and comment menus, corrected focus-mode and right-to-left layouts, matched the installed app's status bar to dark mode, added Azerbaijani and Hebrew, and synchronized translations across supported languages. ([#6261](https://github.com/usememos/memos/pull/6261), [comment menus](https://github.com/usememos/memos/commit/7e3d3c63156c206209fdc8e75a4fb117b1aaf1fb), [#6310](https://github.com/usememos/memos/pull/6310), [#6215](https://github.com/usememos/memos/pull/6215), [#6320](https://github.com/usememos/memos/pull/6320), [#6278](https://github.com/usememos/memos/pull/6278), [#6203](https://github.com/usememos/memos/pull/6203), [translations](https://github.com/usememos/memos/commit/2204eceeef34625cfd3e74fea7ad71769c9abc43))

## Administration and integrations

* **Security and reliability:** Added rate limits and tighter request, image-processing, and import limits; strengthened remote-fetch validation; protected S3 uploads from object-key collisions; and corrected attachment cleanup. ([#6315](https://github.com/usememos/memos/pull/6315), [hardening](https://github.com/usememos/memos/commit/471745b4314820dcb4b8b451095679ee6cfc71c3), [remote-fetch protection](https://github.com/usememos/memos/commit/f4d97fafcdab534e7e01c376d2b06a3c6aa98a33))
* **Sessions and private files:** Changing your password signs out your other sessions; an administrator password reset signs out all sessions for that account. S3 attachments are served through authenticated file routes. ([session revocation](https://github.com/usememos/memos/commit/471745b4314820dcb4b8b451095679ee6cfc71c3), [#6210](https://github.com/usememos/memos/pull/6210))
* **Access mode:** Public/private instance access is now stored independently of the instance URL. ([#6225](https://github.com/usememos/memos/pull/6225))
* **Integrations:** Added Space operations to MCP and corrected tool schemas, fixed scheduled-job day matching, and added `-V` and `--version` to the CLI. ([MCP Spaces](https://github.com/usememos/memos/commit/619eb8d6b), [MCP schemas](https://github.com/usememos/memos/commit/652957c0f98b5e66fb7b369ddef9f40ee439ef69), [#6306](https://github.com/usememos/memos/pull/6306), [#6321](https://github.com/usememos/memos/pull/6321))

## Upgrade notes

* **Administrator access:** Active instance administrators can now read and manage individual memos, including private and Space-only memos, without being their author or a Space member. Collection listings still apply audience filtering; administrators do not automatically become Space members. ([permission changes](https://github.com/usememos/memos/commit/4f4652375))
* **Views and API clients:** Existing Shortcuts are migrated to Views. Integrations using the old Shortcut API must move to the `UserService` View operations under `/api/v1/users/{user}/views`. The reaction API also removes `contentId`; reactions remain scoped to their memo. ([#6167](https://github.com/usememos/memos/pull/6167), [View operations](https://github.com/usememos/memos/commit/e02899e51), [#6221](https://github.com/usememos/memos/pull/6221))
* **Account email:** Email remains optional. Addresses are trimmed, lowercased, and unique per instance. Upgrades clear invalid addresses and keep a duplicate address only on the oldest account; affected usernames are logged. ([#6314](https://github.com/usememos/memos/pull/6314))
* **RSS:** RSS feed support has been removed. Existing feed URLs no longer provide feeds. ([#6243](https://github.com/usememos/memos/pull/6243))

## New Contributors

* @anupamme made their first contribution in https://github.com/usememos/memos/pull/6152
* @Iams4kura made their first contribution in https://github.com/usememos/memos/pull/6159
* @kpab made their first contribution in https://github.com/usememos/memos/pull/6165
* @nrps9909 made their first contribution in https://github.com/usememos/memos/pull/6177
* @guomengjia618-dot made their first contribution in https://github.com/usememos/memos/pull/6182
* @questfever made their first contribution in https://github.com/usememos/memos/pull/6187
* @FAR747 made their first contribution in https://github.com/usememos/memos/pull/6195
* @Shivajith754 made their first contribution in https://github.com/usememos/memos/pull/6203
* @hktitof made their first contribution in https://github.com/usememos/memos/pull/6246
* @elonfliter made their first contribution in https://github.com/usememos/memos/pull/6251
* @RubenPari made their first contribution in https://github.com/usememos/memos/pull/6274
* @jamalkamaladdin made their first contribution in https://github.com/usememos/memos/pull/6278
* @ocfox made their first contribution in https://github.com/usememos/memos/pull/6320
* @anandghegde made their first contribution in https://github.com/usememos/memos/pull/6324
* @ryanchou1994 made their first contribution in https://github.com/usememos/memos/pull/6269
* @qwist1233-cpu made their first contribution in https://github.com/usememos/memos/pull/6339
* @kalelooz made their first contribution in https://github.com/usememos/memos/pull/6346

**Full Changelog**: https://github.com/usememos/memos/compare/v0.30.0...v0.31.0