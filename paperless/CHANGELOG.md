## paperless-ngx 3.4.2

### Bug Fixes

- Fix: mobile save button display obsessing @shamoon ([#14676](https://github.com/paperless-ngx/paperless-ngx/pull/14676))
- Fix: make index and llmindex init wait for tesseract language install @stumpylog ([#14670](https://github.com/paperless-ngx/paperless-ngx/pull/14670))
- Fix: prevent loss of save view name on save + close @shamoon ([#14667](https://github.com/paperless-ngx/paperless-ngx/pull/14667))
- Fixhancement: doc detail mobile ux tweaks @shamoon ([#14664](https://github.com/paperless-ngx/paperless-ngx/pull/14664))
- Fix: Bumps filelock to 4.2.6 to pick up ACL related fixes @stumpylog ([#14656](https://github.com/paperless-ngx/paperless-ngx/pull/14656))
- Fix: ensure import bulk\_edit tasks in Celery workers @shamoon ([#14653](https://github.com/paperless-ngx/paperless-ngx/pull/14653))
- Fixhancement: add tag names to document history list @shamoon ([#14625](https://github.com/paperless-ngx/paperless-ngx/pull/14625))
- Fix: add button type to zoom buttons to prevent form submission @shamoon ([#14624](https://github.com/paperless-ngx/paperless-ngx/pull/14624))
- Fix: move document list preview button to own column @shamoon ([#14610](https://github.com/paperless-ngx/paperless-ngx/pull/14610))
- Fix: Various small bugs found during typing updates @stumpylog ([#14593](https://github.com/paperless-ngx/paperless-ngx/pull/14593))
- Fix: fix custom fields dropdown text size @shamoon ([#14606](https://github.com/paperless-ngx/paperless-ngx/pull/14606))

### Dependencies

<details>
<summary>14 changes</summary>

- Chore: ditch the abandoned ngx-bootstrap-icons, roll our own @shamoon ([#14665](https://github.com/paperless-ngx/paperless-ngx/pull/14665))
- chore(deps): bump turbohtml to 1.15.3 @stumpylog ([#14662](https://github.com/paperless-ngx/paperless-ngx/pull/14662))
- docker-compose(deps): bump gotenberg/gotenberg from 8.37 to 8.38 in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#14634](https://github.com/paperless-ngx/paperless-ngx/pull/14634))
- chore(deps): bump Django, django-guardian, django-filter, drf-spectacular-sidecar @stumpylog ([#14661](https://github.com/paperless-ngx/paperless-ngx/pull/14661))
- docker-compose(deps): bump greenmail/standalone from 2.1.14 to 2.1.15 in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#14631](https://github.com/paperless-ngx/paperless-ngx/pull/14631))
- docker-compose(deps): Bump nginx from 1.31.6-alpine to 1.31.7-alpine in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#14633](https://github.com/paperless-ngx/paperless-ngx/pull/14633))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 13 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14637](https://github.com/paperless-ngx/paperless-ngx/pull/14637))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.62.1 to 1.64.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14641](https://github.com/paperless-ngx/paperless-ngx/pull/14641))
- Chore(deps): Bump pdfjs-dist from 6.3.289 to 6.4.299 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14644](https://github.com/paperless-ngx/paperless-ngx/pull/14644))
- Chore(deps): Bump uuid from 14.0.2 to 14.0.3 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14640](https://github.com/paperless-ngx/paperless-ngx/pull/14640))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group across 1 directory with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14638](https://github.com/paperless-ngx/paperless-ngx/pull/14638))
- Chore(deps): Bump marked from 18.0.14 to 18.1.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14643](https://github.com/paperless-ngx/paperless-ngx/pull/14643))
- Chore(deps-dev): Bump prettier from 3.9.9 to 3.9.10 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14645](https://github.com/paperless-ngx/paperless-ngx/pull/14645))
- Chore(deps-dev): Bump @<!---->types/node from 26.6.2 to 26.6.5 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14639](https://github.com/paperless-ngx/paperless-ngx/pull/14639))
</details>

### All App Changes

<details>
<summary>21 changes</summary>

- Fix: mobile save button display obsessing @shamoon ([#14676](https://github.com/paperless-ngx/paperless-ngx/pull/14676))
- Fix: prevent loss of save view name on save + close @shamoon ([#14667](https://github.com/paperless-ngx/paperless-ngx/pull/14667))
- Chore: ditch the abandoned ngx-bootstrap-icons, roll our own @shamoon ([#14665](https://github.com/paperless-ngx/paperless-ngx/pull/14665))
- Fixhancement: doc detail mobile ux tweaks @shamoon ([#14664](https://github.com/paperless-ngx/paperless-ngx/pull/14664))
- chore(deps): bump turbohtml to 1.15.3 @stumpylog ([#14662](https://github.com/paperless-ngx/paperless-ngx/pull/14662))
- chore(deps): bump Django, django-guardian, django-filter, drf-spectacular-sidecar @stumpylog ([#14661](https://github.com/paperless-ngx/paperless-ngx/pull/14661))
- Fix: Bumps filelock to 4.2.6 to pick up ACL related fixes @stumpylog ([#14656](https://github.com/paperless-ngx/paperless-ngx/pull/14656))
- Fix: ensure import bulk\_edit tasks in Celery workers @shamoon ([#14653](https://github.com/paperless-ngx/paperless-ngx/pull/14653))
- Chore(deps): Bump the frontend-angular-dependencies group across 1 directory with 13 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14637](https://github.com/paperless-ngx/paperless-ngx/pull/14637))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.62.1 to 1.64.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14641](https://github.com/paperless-ngx/paperless-ngx/pull/14641))
- Chore(deps): Bump pdfjs-dist from 6.3.289 to 6.4.299 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14644](https://github.com/paperless-ngx/paperless-ngx/pull/14644))
- Chore(deps): Bump uuid from 14.0.2 to 14.0.3 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14640](https://github.com/paperless-ngx/paperless-ngx/pull/14640))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group across 1 directory with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14638](https://github.com/paperless-ngx/paperless-ngx/pull/14638))
- Chore(deps): Bump marked from 18.0.14 to 18.1.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14643](https://github.com/paperless-ngx/paperless-ngx/pull/14643))
- Chore(deps-dev): Bump prettier from 3.9.9 to 3.9.10 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14645](https://github.com/paperless-ngx/paperless-ngx/pull/14645))
- Chore(deps-dev): Bump @<!---->types/node from 26.6.2 to 26.6.5 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#14639](https://github.com/paperless-ngx/paperless-ngx/pull/14639))
- Fixhancement: add tag names to document history list @shamoon ([#14625](https://github.com/paperless-ngx/paperless-ngx/pull/14625))
- Fix: add button type to zoom buttons to prevent form submission @shamoon ([#14624](https://github.com/paperless-ngx/paperless-ngx/pull/14624))
- Fix: move document list preview button to own column @shamoon ([#14610](https://github.com/paperless-ngx/paperless-ngx/pull/14610))
- Fix: Various small bugs found during typing updates @stumpylog ([#14593](https://github.com/paperless-ngx/paperless-ngx/pull/14593))
- Fix: fix custom fields dropdown text size @shamoon ([#14606](https://github.com/paperless-ngx/paperless-ngx/pull/14606))
</details>
