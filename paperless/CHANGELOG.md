## paperless-ngx 3.4.0

### Features / Enhancements

- Enhancement: support custom fields in workflow title templates @shamoon ([#14564](https://github.com/paperless-ngx/paperless-ngx/pull/14564))
- Enhancement: relative date custom field queries @shamoon ([#14549](https://github.com/paperless-ngx/paperless-ngx/pull/14549))
- Performance: reduce tasks badge load times @JanKleine ([#14552](https://github.com/paperless-ngx/paperless-ngx/pull/14552))
- Enhancement: skip local 2FA for trusted OIDC AMR @shamoon ([#14403](https://github.com/paperless-ngx/paperless-ngx/pull/14403))
- Feature: Generate PDF thumbnails via poppler utils @stumpylog ([#14420](https://github.com/paperless-ngx/paperless-ngx/pull/14420))
- Enhancement: add upload count to button, link to tray, reduce notifications @shamoon ([#14501](https://github.com/paperless-ngx/paperless-ngx/pull/14501))
- Enhancement: notifications improvements @shamoon ([#14500](https://github.com/paperless-ngx/paperless-ngx/pull/14500))
- Enhancement: doc details ux improvements @shamoon ([#14485](https://github.com/paperless-ngx/paperless-ngx/pull/14485))
- Enhancement (QoL): allow independently toggling child + parent tags in WF tag fields @shamoon ([#14400](https://github.com/paperless-ngx/paperless-ngx/pull/14400))
- Tweak: drop the user dropdown caret @shamoon ([#14444](https://github.com/paperless-ngx/paperless-ngx/pull/14444))
- Enhancement: navbar upload button @shamoon ([#14442](https://github.com/paperless-ngx/paperless-ngx/pull/14442))
- Enhancement: AI chat UX tweaks @shamoon ([#14415](https://github.com/paperless-ngx/paperless-ngx/pull/14415))
- Enhancement: support markdown in AI chat @shamoon ([#14409](https://github.com/paperless-ngx/paperless-ngx/pull/14409))

### Bug Fixes

- Fix: truncate long version labels in dropdown @shamoon ([#14578](https://github.com/paperless-ngx/paperless-ngx/pull/14578))
- Fixhancement: show better result for revoked / expired tasks @shamoon ([#14566](https://github.com/paperless-ngx/paperless-ngx/pull/14566))
- Fix: move re-index after workflow runs on doc edit @shamoon ([#14558](https://github.com/paperless-ngx/paperless-ngx/pull/14558))
- Fix: folder export with --delete fails on a stale manifest.json.tmp @benpetty ([#14526](https://github.com/paperless-ngx/paperless-ngx/pull/14526))
- Fix: fix list type for api schema document object filters @shamoon ([#14524](https://github.com/paperless-ngx/paperless-ngx/pull/14524))
- Fix: standardize some dropdown sizing @shamoon ([#14510](https://github.com/paperless-ngx/paperless-ngx/pull/14510))
- Fix: prevent doc permissions queries on schema view @shamoon ([#14503](https://github.com/paperless-ngx/paperless-ngx/pull/14503))
- Fix: dont defer tag assignment when barcode will not result in a split @shamoon ([#14497](https://github.com/paperless-ngx/paperless-ngx/pull/14497))

### Maintenance

- Chore: Update uv to 0.13 for the eMudhra CA fixes @stumpylog ([#14532](https://github.com/paperless-ngx/paperless-ngx/pull/14532))

### Dependencies

<details>
<summary>6 changes</summary>

- Chore: bump some frontend deps for security fixes @shamoon ([#14581](https://github.com/paperless-ngx/paperless-ngx/pull/14581))
- Chore: bump brotli, djangorestframework, filelock, msgpack, setuptools for security fixes @stumpylog ([#14575](https://github.com/paperless-ngx/paperless-ngx/pull/14575))
- Chore: bump django-allauth to 65.20 and oauthlib to 4.0 @stumpylog ([#14570](https://github.com/paperless-ngx/paperless-ngx/pull/14570))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14517](https://github.com/paperless-ngx/paperless-ngx/pull/14517))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14493](https://github.com/paperless-ngx/paperless-ngx/pull/14493))
- Chore: Drop ImageMagik as a dependency @stumpylog ([#14440](https://github.com/paperless-ngx/paperless-ngx/pull/14440))
</details>

### All App Changes

<details>
<summary>35 changes</summary>

- Chore: Consolidate test sample files @stumpylog ([#14430](https://github.com/paperless-ngx/paperless-ngx/pull/14430))
- Chore: bump some frontend deps for security fixes @shamoon ([#14581](https://github.com/paperless-ngx/paperless-ngx/pull/14581))
- Enhancement: support custom fields in workflow title templates @shamoon ([#14564](https://github.com/paperless-ngx/paperless-ngx/pull/14564))
- Enhancement: relative date custom field queries @shamoon ([#14549](https://github.com/paperless-ngx/paperless-ngx/pull/14549))
- Fix: truncate long version labels in dropdown @shamoon ([#14578](https://github.com/paperless-ngx/paperless-ngx/pull/14578))
- Chore: bump brotli, djangorestframework, filelock, msgpack, setuptools for security fixes @stumpylog ([#14575](https://github.com/paperless-ngx/paperless-ngx/pull/14575))
- Chore: bump django-allauth to 65.20 and oauthlib to 4.0 @stumpylog ([#14570](https://github.com/paperless-ngx/paperless-ngx/pull/14570))
- Fixhancement: show better result for revoked / expired tasks @shamoon ([#14566](https://github.com/paperless-ngx/paperless-ngx/pull/14566))
- Fix: move re-index after workflow runs on doc edit @shamoon ([#14558](https://github.com/paperless-ngx/paperless-ngx/pull/14558))
- Performance: reduce tasks badge load times @JanKleine ([#14552](https://github.com/paperless-ngx/paperless-ngx/pull/14552))
- Enhancement: skip local 2FA for trusted OIDC AMR @shamoon ([#14403](https://github.com/paperless-ngx/paperless-ngx/pull/14403))
- Chore: consolidate direct permission grant lookups into one helper @stumpylog ([#14456](https://github.com/paperless-ngx/paperless-ngx/pull/14456))
- Chore: drop get\_groups\_with\_only\_permission @stumpylog ([#14454](https://github.com/paperless-ngx/paperless-ngx/pull/14454))
- Chore: Consolidate to a single way to set permission on an object @stumpylog ([#14453](https://github.com/paperless-ngx/paperless-ngx/pull/14453))
- Chore: Refactor bulk edit to remove PDF knowledge @stumpylog ([#14445](https://github.com/paperless-ngx/paperless-ngx/pull/14445))
- Fix: folder export with --delete fails on a stale manifest.json.tmp @benpetty ([#14526](https://github.com/paperless-ngx/paperless-ngx/pull/14526))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14517](https://github.com/paperless-ngx/paperless-ngx/pull/14517))
- Fix: fix list type for api schema document object filters @shamoon ([#14524](https://github.com/paperless-ngx/paperless-ngx/pull/14524))
- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14493](https://github.com/paperless-ngx/paperless-ngx/pull/14493))
- Chore: drop get\_objects\_for\_user\_owner\_aware @stumpylog ([#14457](https://github.com/paperless-ngx/paperless-ngx/pull/14457))
- Chore: update Angular components to 22.2.2 @shamoon ([#14515](https://github.com/paperless-ngx/paperless-ngx/pull/14515))
- Chore: share one base class for the method-mapped permission classes @stumpylog ([#14458](https://github.com/paperless-ngx/paperless-ngx/pull/14458))
- Fix: standardize some dropdown sizing @shamoon ([#14510](https://github.com/paperless-ngx/paperless-ngx/pull/14510))
- Chore: Drop ImageMagik as a dependency @stumpylog ([#14440](https://github.com/paperless-ngx/paperless-ngx/pull/14440))
- Feature: Generate PDF thumbnails via poppler utils @stumpylog ([#14420](https://github.com/paperless-ngx/paperless-ngx/pull/14420))
- Fix: prevent doc permissions queries on schema view @shamoon ([#14503](https://github.com/paperless-ngx/paperless-ngx/pull/14503))
- Enhancement: add upload count to button, link to tray, reduce notifications @shamoon ([#14501](https://github.com/paperless-ngx/paperless-ngx/pull/14501))
- Enhancement: notifications improvements @shamoon ([#14500](https://github.com/paperless-ngx/paperless-ngx/pull/14500))
- Enhancement: doc details ux improvements @shamoon ([#14485](https://github.com/paperless-ngx/paperless-ngx/pull/14485))
- Enhancement (QoL): allow independently toggling child + parent tags in WF tag fields @shamoon ([#14400](https://github.com/paperless-ngx/paperless-ngx/pull/14400))
- Tweak: drop the user dropdown caret @shamoon ([#14444](https://github.com/paperless-ngx/paperless-ngx/pull/14444))
- Enhancement: navbar upload button @shamoon ([#14442](https://github.com/paperless-ngx/paperless-ngx/pull/14442))
- Enhancement: AI chat UX tweaks @shamoon ([#14415](https://github.com/paperless-ngx/paperless-ngx/pull/14415))
- Enhancement: support markdown in AI chat @shamoon ([#14409](https://github.com/paperless-ngx/paperless-ngx/pull/14409))
- Fix: dont defer tag assignment when barcode will not result in a split @shamoon ([#14497](https://github.com/paperless-ngx/paperless-ngx/pull/14497))
</details>
