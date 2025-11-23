## paperless-ngx 2.20.0

### Notable Changes

- Feature: Upgrade underlying Docker image to Trixie @stumpylog ([#10562](https://github.com/paperless-ngx/paperless-ngx/pull/10562))

### Features / Enhancements

- Feature: Upgrade underlying Docker image to Trixie @stumpylog ([#10562](https://github.com/paperless-ngx/paperless-ngx/pull/10562))
- Fixhancement: more log viewer improvements @shamoon ([#11426](https://github.com/paperless-ngx/paperless-ngx/pull/11426))
- Performance: Replace duplicated static files with symlinks @stumpylog ([#11418](https://github.com/paperless-ngx/paperless-ngx/pull/11418))
- Enhancement: add more relative dates, support modified @shamoon ([#11411](https://github.com/paperless-ngx/paperless-ngx/pull/11411))
- Performance: make move files after select custom field change async @shamoon ([#11391](https://github.com/paperless-ngx/paperless-ngx/pull/11391))
- Enhancement: Use a better check for the MariaDB server to be ready @stumpylog ([#11396](https://github.com/paperless-ngx/paperless-ngx/pull/11396))
- Enhancement: speed-up docker container startup @flrgh ([#11134](https://github.com/paperless-ngx/paperless-ngx/pull/11134))

### Bug Fixes

- Fix: prevent focus loss from change detection in cf query dropdown @shamoon ([#11409](https://github.com/paperless-ngx/paperless-ngx/pull/11409))
- Fix: sort editing filterable dropdowns sooner @shamoon ([#11404](https://github.com/paperless-ngx/paperless-ngx/pull/11404))
- Fix: support for custom field ordering w advanced search @shamoon ([#11383](https://github.com/paperless-ngx/paperless-ngx/pull/11383))

### Maintenance

- Chore(deps): Bump the actions group with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11259](https://github.com/paperless-ngx/paperless-ngx/pull/11259))

### Dependencies

<details>
<summary>16 changes</summary>

- Chore: Upgrades psycopg to 3.2.12 @stumpylog ([#11420](https://github.com/paperless-ngx/paperless-ngx/pull/11420))
- Chore(deps-dev): Bump glob from 10.4.1 to 10.5.0 in /src/paperless\_mail/templates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11413](https://github.com/paperless-ngx/paperless-ngx/pull/11413))
- docker-compose(deps): bump gotenberg/gotenberg from 8.24 to 8.25 in /docker/compose @[dependabot[bot]](https://github.com/apps/dependabot) ([#11393](https://github.com/paperless-ngx/paperless-ngx/pull/11393))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 21 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11260](https://github.com/paperless-ngx/paperless-ngx/pull/11260))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.55.1 to 1.56.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11263](https://github.com/paperless-ngx/paperless-ngx/pull/11263))
- Chore(deps-dev): Bump webpack from 5.102.0 to 5.102.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11264](https://github.com/paperless-ngx/paperless-ngx/pull/11264))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11262](https://github.com/paperless-ngx/paperless-ngx/pull/11262))
- Chore(deps-dev): Bump jest-preset-angular from 15.0.2 to 15.0.3 in /src-ui in the frontend-jest-dependencies group @[dependabot[bot]](https://github.com/apps/dependabot) ([#11261](https://github.com/paperless-ngx/paperless-ngx/pull/11261))
- Chore(deps-dev): Bump @<!---->types/node from 24.6.1 to 24.9.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11265](https://github.com/paperless-ngx/paperless-ngx/pull/11265))
- Chore(deps): Bump the small-changes group across 1 directory with 11 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11337](https://github.com/paperless-ngx/paperless-ngx/pull/11337))
- Chore(deps): Bump django-auditlog from 3.2.1 to 3.3.0 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11021](https://github.com/paperless-ngx/paperless-ngx/pull/11021))
- Chore(deps): Bump the actions group with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11259](https://github.com/paperless-ngx/paperless-ngx/pull/11259))
- Chore(deps): Bump drf-spectacular-sidecar from 2025.9.1 to 2025.10.1 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11019](https://github.com/paperless-ngx/paperless-ngx/pull/11019))
- Chore(deps): Bump django-filter from 25.1 to 25.2 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11020](https://github.com/paperless-ngx/paperless-ngx/pull/11020))
- Chore(deps): Update django-allauth[mfa,socialaccount] requirement from ~=65.4.0 to ~=65.12.1 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11198](https://github.com/paperless-ngx/paperless-ngx/pull/11198))
- docker(deps): bump astral-sh/uv from 0.9.9-python3.12-bookworm-slim to 0.9.10-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#11394](https://github.com/paperless-ngx/paperless-ngx/pull/11394))
</details>

### All App Changes

<details>
<summary>19 changes</summary>

- Fixhancement: more log viewer improvements @shamoon ([#11426](https://github.com/paperless-ngx/paperless-ngx/pull/11426))
- Chore: Upgrades psycopg to 3.2.12 @stumpylog ([#11420](https://github.com/paperless-ngx/paperless-ngx/pull/11420))
- Enhancement: add more relative dates, support modified @shamoon ([#11411](https://github.com/paperless-ngx/paperless-ngx/pull/11411))
- Chore(deps-dev): Bump glob from 10.4.1 to 10.5.0 in /src/paperless\_mail/templates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11413](https://github.com/paperless-ngx/paperless-ngx/pull/11413))
- Performance: make move files after select custom field change async @shamoon ([#11391](https://github.com/paperless-ngx/paperless-ngx/pull/11391))
- Fix: prevent focus loss from change detection in cf query dropdown @shamoon ([#11409](https://github.com/paperless-ngx/paperless-ngx/pull/11409))
- Fix: sort editing filterable dropdowns sooner @shamoon ([#11404](https://github.com/paperless-ngx/paperless-ngx/pull/11404))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 21 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11260](https://github.com/paperless-ngx/paperless-ngx/pull/11260))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.55.1 to 1.56.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11263](https://github.com/paperless-ngx/paperless-ngx/pull/11263))
- Chore(deps-dev): Bump webpack from 5.102.0 to 5.102.1 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11264](https://github.com/paperless-ngx/paperless-ngx/pull/11264))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11262](https://github.com/paperless-ngx/paperless-ngx/pull/11262))
- Chore(deps-dev): Bump jest-preset-angular from 15.0.2 to 15.0.3 in /src-ui in the frontend-jest-dependencies group @[dependabot[bot]](https://github.com/apps/dependabot) ([#11261](https://github.com/paperless-ngx/paperless-ngx/pull/11261))
- Chore(deps-dev): Bump @<!---->types/node from 24.6.1 to 24.9.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11265](https://github.com/paperless-ngx/paperless-ngx/pull/11265))
- Chore(deps): Bump the small-changes group across 1 directory with 11 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11337](https://github.com/paperless-ngx/paperless-ngx/pull/11337))
- Chore(deps): Bump django-auditlog from 3.2.1 to 3.3.0 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11021](https://github.com/paperless-ngx/paperless-ngx/pull/11021))
- Chore(deps): Bump drf-spectacular-sidecar from 2025.9.1 to 2025.10.1 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11019](https://github.com/paperless-ngx/paperless-ngx/pull/11019))
- Chore(deps): Bump django-filter from 25.1 to 25.2 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11020](https://github.com/paperless-ngx/paperless-ngx/pull/11020))
- Chore(deps): Update django-allauth[mfa,socialaccount] requirement from ~=65.4.0 to ~=65.12.1 @[dependabot[bot]](https://github.com/apps/dependabot) ([#11198](https://github.com/paperless-ngx/paperless-ngx/pull/11198))
- Fix: support for custom field ordering w advanced search @shamoon ([#11383](https://github.com/paperless-ngx/paperless-ngx/pull/11383))
</details>
