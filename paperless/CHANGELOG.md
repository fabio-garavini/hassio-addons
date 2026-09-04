## paperless-ngx 3.1.3

### Bug Fixes

- Fix: use the header loading indicator on tasks page @shamoon ([#13949](https://github.com/paperless-ngx/paperless-ngx/pull/13949))
- Fix: fix load sidebar size animating @shamoon ([#13947](https://github.com/paperless-ngx/paperless-ngx/pull/13947))
- Fix: wrap long words without spaces in dropdowns @shamoon ([#13945](https://github.com/paperless-ngx/paperless-ngx/pull/13945))
- Fix: tweak tool calling localzation prompt @shamoon ([#13943](https://github.com/paperless-ngx/paperless-ngx/pull/13943))
- Fix: skip vector store document id filter for unrestricted chat users @stumpylog ([#13937](https://github.com/paperless-ngx/paperless-ngx/pull/13937))
- Fix: adopt the request stream when pinning an outbound host @ThomasSteinbach ([#13927](https://github.com/paperless-ngx/paperless-ngx/pull/13927))
- Fix: ensure apply ai suggestions always runs after document created @shamoon ([#13940](https://github.com/paperless-ngx/paperless-ngx/pull/13940))
- Fix: Handle failures when enqueuing files for consumption @stumpylog ([#13935](https://github.com/paperless-ngx/paperless-ngx/pull/13935))
- Fix: Handle Celery mail task chord errors @stumpylog ([#13936](https://github.com/paperless-ngx/paperless-ngx/pull/13936))
- Fix/chore: refactor some signal-backed conversion technical debt @shamoon ([#13902](https://github.com/paperless-ngx/paperless-ngx/pull/13902))
- Fix: fix slim sidebar saved view dragging appearance @shamoon ([#13906](https://github.com/paperless-ngx/paperless-ngx/pull/13906))
- Fix: use signal-backed queries input in CF dropdown to reflect changes immediately under zoneless @shamoon ([#13901](https://github.com/paperless-ngx/paperless-ngx/pull/13901))
- Fix: use root doc metadata for filename generation @shamoon ([#13893](https://github.com/paperless-ngx/paperless-ngx/pull/13893))
- Fix: some css cleanup @shamoon ([#13891](https://github.com/paperless-ngx/paperless-ngx/pull/13891))

### Dependencies

<details>
<summary>7 changes</summary>

- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#13958](https://github.com/paperless-ngx/paperless-ngx/pull/13958))
- docker-compose(deps): bump nginx from 1.31.3-alpine to 1.31.5-alpine in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#13909](https://github.com/paperless-ngx/paperless-ngx/pull/13909))
- docker-compose(deps): Bump greenmail/standalone from 2.1.11 to 2.1.13 in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#13907](https://github.com/paperless-ngx/paperless-ngx/pull/13907))
- Chore(deps-dev): Bump postcss-selector-parser from 6.1.2 to 6.1.4 in /src/paperless\_mail/templates in the npm\_and\_yarn group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13905](https://github.com/paperless-ngx/paperless-ngx/pull/13905))
- Chore(deps): Bump nltk from 3.10.0 to 3.10.3 in the data-nlp-search group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13917](https://github.com/paperless-ngx/paperless-ngx/pull/13917))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 14 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#13915](https://github.com/paperless-ngx/paperless-ngx/pull/13915))
- Chore(deps): Bump djangorestframework from 3.17.1 to 3.17.2 in the uv group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13904](https://github.com/paperless-ngx/paperless-ngx/pull/13904))
</details>

### All App Changes

<details>
<summary>22 changes</summary>

- Chore(deps): Bump the uv group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#13958](https://github.com/paperless-ngx/paperless-ngx/pull/13958))
- Chore(deps-dev): Bump postcss-selector-parser from 6.1.2 to 6.1.4 in /src/paperless\_mail/templates in the npm\_and\_yarn group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13905](https://github.com/paperless-ngx/paperless-ngx/pull/13905))
- Chore(deps): Bump nltk from 3.10.0 to 3.10.3 in the data-nlp-search group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13917](https://github.com/paperless-ngx/paperless-ngx/pull/13917))
- Fix: use the header loading indicator on tasks page @shamoon ([#13949](https://github.com/paperless-ngx/paperless-ngx/pull/13949))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 14 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#13915](https://github.com/paperless-ngx/paperless-ngx/pull/13915))
- Chore(deps): Bump djangorestframework from 3.17.1 to 3.17.2 in the uv group across 1 directory @[dependabot[bot]](https://github.com/apps/dependabot) ([#13904](https://github.com/paperless-ngx/paperless-ngx/pull/13904))
- Fix: fix load sidebar size animating @shamoon ([#13947](https://github.com/paperless-ngx/paperless-ngx/pull/13947))
- Fix: wrap long words without spaces in dropdowns @shamoon ([#13945](https://github.com/paperless-ngx/paperless-ngx/pull/13945))
- Fix: tweak tool calling localzation prompt @shamoon ([#13943](https://github.com/paperless-ngx/paperless-ngx/pull/13943))
- Fix: skip vector store document id filter for unrestricted chat users @stumpylog ([#13937](https://github.com/paperless-ngx/paperless-ngx/pull/13937))
- Fix: adopt the request stream when pinning an outbound host @ThomasSteinbach ([#13927](https://github.com/paperless-ngx/paperless-ngx/pull/13927))
- Fix: ensure apply ai suggestions always runs after document created @shamoon ([#13940](https://github.com/paperless-ngx/paperless-ngx/pull/13940))
- Fix: Handle failures when enqueuing files for consumption @stumpylog ([#13935](https://github.com/paperless-ngx/paperless-ngx/pull/13935))
- Fix: Handle Celery mail task chord errors @stumpylog ([#13936](https://github.com/paperless-ngx/paperless-ngx/pull/13936))
- Fix/chore: refactor some signal-backed conversion technical debt @shamoon ([#13902](https://github.com/paperless-ngx/paperless-ngx/pull/13902))
- Security: validate remote OCR endpoint @stumpylog ([#13897](https://github.com/paperless-ngx/paperless-ngx/pull/13897))
- Fix: fix slim sidebar saved view dragging appearance @shamoon ([#13906](https://github.com/paperless-ngx/paperless-ngx/pull/13906))
- Security: Minor additional hardening @stumpylog ([#13898](https://github.com/paperless-ngx/paperless-ngx/pull/13898))
- Chore: consolidate pickle hmac signing @shamoon ([#13899](https://github.com/paperless-ngx/paperless-ngx/pull/13899))
- Fix: use signal-backed queries input in CF dropdown to reflect changes immediately under zoneless @shamoon ([#13901](https://github.com/paperless-ngx/paperless-ngx/pull/13901))
- Fix: use root doc metadata for filename generation @shamoon ([#13893](https://github.com/paperless-ngx/paperless-ngx/pull/13893))
- Fix: some css cleanup @shamoon ([#13891](https://github.com/paperless-ngx/paperless-ngx/pull/13891))
</details>
