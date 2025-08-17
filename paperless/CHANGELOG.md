# 2.18.0

### Notable Changes

- Feature: PDF editor @shamoon ([#10318](https://github.com/paperless-ngx/paperless-ngx/pull/10318))

### Features / Enhancements

- Feature: Add filter to localize dates for filepath templating @stumpylog ([#10559](https://github.com/paperless-ngx/paperless-ngx/pull/10559))
- Feature: PDF editor @shamoon ([#10318](https://github.com/paperless-ngx/paperless-ngx/pull/10318))
- Enhancement: support webhook restrictions @shamoon ([#10555](https://github.com/paperless-ngx/paperless-ngx/pull/10555))
- Performance: Classifier performance optimizations @Merinorus ([#10363](https://github.com/paperless-ngx/paperless-ngx/pull/10363))
- Performance: add setting to enable DB connection pooling for PostgreSQL @Merinorus ([#10354](https://github.com/paperless-ngx/paperless-ngx/pull/10354))
- Fixhancement: improve text thumbnail generation for large files @shamoon ([#10483](https://github.com/paperless-ngx/paperless-ngx/pull/10483))
- Enhancement: disable auto spellcheck on filtering dropdowns @TheDodger ([#10487](https://github.com/paperless-ngx/paperless-ngx/pull/10487))
- Enhancement: display saved view counts @shamoon ([#10246](https://github.com/paperless-ngx/paperless-ngx/pull/10246))
- Fixhancement: add missing exact operator for boolean CF queries @shamoon ([#10402](https://github.com/paperless-ngx/paperless-ngx/pull/10402))
- Feature: add Vietnamese translation @shamoon ([#10352](https://github.com/paperless-ngx/paperless-ngx/pull/10352))
- Performance: Add support for configuring date parser languages @Merinorus ([#10181](https://github.com/paperless-ngx/paperless-ngx/pull/10181))
- Enhancement: Add a database caching for improved performance @Merinorus ([#9784](https://github.com/paperless-ngx/paperless-ngx/pull/9784))

### Bug Fixes

- Fix: include ignore for config logos in sanity checker @shamoon ([#10473](https://github.com/paperless-ngx/paperless-ngx/pull/10473))
- Fix: track and restore changed document fields from session storage @shamoon ([#10468](https://github.com/paperless-ngx/paperless-ngx/pull/10468))
- Fix: Make some natural keyword date searches timezone-aware @shamoon ([#10416](https://github.com/paperless-ngx/paperless-ngx/pull/10416))
- Fixhancement: follow redirects in curl health check @V0idC0de ([#10415](https://github.com/paperless-ngx/paperless-ngx/pull/10415))
- Fix: dont use translated verbose\\_name for getting object perms @shamoon ([#10399](https://github.com/paperless-ngx/paperless-ngx/pull/10399))
- Fix: fix date format for 'today' in DateComponent @shamoon ([#10369](https://github.com/paperless-ngx/paperless-ngx/pull/10369))
- Fix: default to empty permissions for group creation @shamoon ([#10337](https://github.com/paperless-ngx/paperless-ngx/pull/10337))
- Fix: correct api created coercion with timezone @shamoon ([#10287](https://github.com/paperless-ngx/paperless-ngx/pull/10287))
- Fix: reset search query for preview on reset filter @shamoon ([#10279](https://github.com/paperless-ngx/paperless-ngx/pull/10279))
- Chore: reject absurd max age values @shamoon ([#10243](https://github.com/paperless-ngx/paperless-ngx/pull/10243))

### Security
- Address XSS vulnerability GHSA-6p53-hqqw-8j62

### Maintenance

- Chore(deps): Bump the small-changes group across 1 directory with 8 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10481](https://github.com/paperless-ngx/paperless-ngx/pull/10481))
- docker(deps): bump astral-sh/uv from 0.7.19-python3.12-bookworm-slim to 0.8.3-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10465](https://github.com/paperless-ngx/paperless-ngx/pull/10465))
- docker(deps): Bump astral-sh/uv from 0.7.9-python3.12-bookworm-slim to 0.7.19-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10343](https://github.com/paperless-ngx/paperless-ngx/pull/10343))
- Chore(deps): Bump the small-changes group across 1 directory with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10347](https://github.com/paperless-ngx/paperless-ngx/pull/10347))
- Chore(deps-dev): Bump @<!---->types/node from 22.15.29 to 24.0.10 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10306](https://github.com/paperless-ngx/paperless-ngx/pull/10306))
- Chore: switch from os.path to pathlib.Path @gothicVI ([#10397](https://github.com/paperless-ngx/paperless-ngx/pull/10397))
- Chore(deps): Bump the small-changes group with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10528](https://github.com/paperless-ngx/paperless-ngx/pull/10528))
- docker(deps): Bump astral-sh/uv from 0.8.4-python3.12-bookworm-slim to 0.8.8-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10564](https://github.com/paperless-ngx/paperless-ngx/pull/10564))
- Chore(deps): Bump the django group across 1 directory with 9 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10538](https://github.com/paperless-ngx/paperless-ngx/pull/10538))
- Chore(deps): Bump stefanzweifel/git-auto-commit-action from 5 to 6 in the actions group @[dependabot[bot]](https://github.com/apps/dependabot) ([#10302](https://github.com/paperless-ngx/paperless-ngx/pull/10302))

### Dependencies

<details>
<summary>23 changes</summary>

- chore: Small targeted upgrades to dependencies @stumpylog ([#10561](https://github.com/paperless-ngx/paperless-ngx/pull/10561))
- docker(deps): Bump astral-sh/uv from 0.8.4-python3.12-bookworm-slim to 0.8.8-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10564](https://github.com/paperless-ngx/paperless-ngx/pull/10564))
- Chore(deps): Bump the django group across 1 directory with 9 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10538](https://github.com/paperless-ngx/paperless-ngx/pull/10538))
- Chore(deps): Bump the small-changes group with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10528](https://github.com/paperless-ngx/paperless-ngx/pull/10528))
- Chore(deps-dev): Bump the frontend-jest-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10497](https://github.com/paperless-ngx/paperless-ngx/pull/10497))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10498](https://github.com/paperless-ngx/paperless-ngx/pull/10498))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.53.2 to 1.54.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10499](https://github.com/paperless-ngx/paperless-ngx/pull/10499))
- Chore(deps-dev): Bump webpack from 5.99.9 to 5.101.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10501](https://github.com/paperless-ngx/paperless-ngx/pull/10501))
- Chore(deps-dev): Bump prettier-plugin-organize-imports from 4.1.0 to 4.2.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10500](https://github.com/paperless-ngx/paperless-ngx/pull/10500))
- Chore(deps-dev): Bump @<!---->types/node from 24.0.10 to 24.1.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10502](https://github.com/paperless-ngx/paperless-ngx/pull/10502))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 16 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10496](https://github.com/paperless-ngx/paperless-ngx/pull/10496))
- Chore(deps): Bump the small-changes group across 1 directory with 8 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10481](https://github.com/paperless-ngx/paperless-ngx/pull/10481))
- docker(deps): bump astral-sh/uv from 0.7.19-python3.12-bookworm-slim to 0.8.3-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10465](https://github.com/paperless-ngx/paperless-ngx/pull/10465))
- docker(deps): Bump astral-sh/uv from 0.7.9-python3.12-bookworm-slim to 0.7.19-python3.12-bookworm-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#10343](https://github.com/paperless-ngx/paperless-ngx/pull/10343))
- Chore(deps): Bump the small-changes group across 1 directory with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10347](https://github.com/paperless-ngx/paperless-ngx/pull/10347))
- Chore(deps): Bump stefanzweifel/git-auto-commit-action from 5 to 6 in the actions group @[dependabot[bot]](https://github.com/apps/dependabot) ([#10302](https://github.com/paperless-ngx/paperless-ngx/pull/10302))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group across 1 directory with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10311](https://github.com/paperless-ngx/paperless-ngx/pull/10311))
- Chore(deps-dev): Bump @<!---->types/node from 22.15.29 to 24.0.10 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10306](https://github.com/paperless-ngx/paperless-ngx/pull/10306))
- Chore(deps): Bump bootstrap from 5.3.6 to 5.3.7 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10308](https://github.com/paperless-ngx/paperless-ngx/pull/10308))
- Chore(deps-dev): Bump webpack from 5.98.0 to 5.99.9 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10309](https://github.com/paperless-ngx/paperless-ngx/pull/10309))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.51.1 to 1.53.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10307](https://github.com/paperless-ngx/paperless-ngx/pull/10307))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 13 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10303](https://github.com/paperless-ngx/paperless-ngx/pull/10303))
- Chore: update to Angular 20 @shamoon ([#10273](https://github.com/paperless-ngx/paperless-ngx/pull/10273))
</details>

### All App Changes

<details>
<summary>44 changes</summary>

- chore: Small targeted upgrades to dependencies @stumpylog ([#10561](https://github.com/paperless-ngx/paperless-ngx/pull/10561))
- Feature: Add filter to localize dates for filepath templating @stumpylog ([#10559](https://github.com/paperless-ngx/paperless-ngx/pull/10559))
- Chore: Removes duplication and spread out config for codespell @stumpylog ([#10560](https://github.com/paperless-ngx/paperless-ngx/pull/10560))
- Chore(deps): Bump the django group across 1 directory with 9 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10538](https://github.com/paperless-ngx/paperless-ngx/pull/10538))
- Feature: PDF editor @shamoon ([#10318](https://github.com/paperless-ngx/paperless-ngx/pull/10318))
- Enhancement: support webhook restrictions @shamoon ([#10555](https://github.com/paperless-ngx/paperless-ngx/pull/10555))
- Performance: Classifier performance optimizations @Merinorus ([#10363](https://github.com/paperless-ngx/paperless-ngx/pull/10363))
- Chore: switch from os.path to pathlib.Path @gothicVI ([#10397](https://github.com/paperless-ngx/paperless-ngx/pull/10397))
- Chore(deps): Bump the small-changes group with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10528](https://github.com/paperless-ngx/paperless-ngx/pull/10528))
- Performance: add setting to enable DB connection pooling for PostgreSQL @Merinorus ([#10354](https://github.com/paperless-ngx/paperless-ngx/pull/10354))
- Chore(deps-dev): Bump the frontend-jest-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10497](https://github.com/paperless-ngx/paperless-ngx/pull/10497))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10498](https://github.com/paperless-ngx/paperless-ngx/pull/10498))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.53.2 to 1.54.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10499](https://github.com/paperless-ngx/paperless-ngx/pull/10499))
- Chore(deps-dev): Bump webpack from 5.99.9 to 5.101.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10501](https://github.com/paperless-ngx/paperless-ngx/pull/10501))
- Chore(deps-dev): Bump prettier-plugin-organize-imports from 4.1.0 to 4.2.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10500](https://github.com/paperless-ngx/paperless-ngx/pull/10500))
- Chore(deps-dev): Bump @<!---->types/node from 24.0.10 to 24.1.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10502](https://github.com/paperless-ngx/paperless-ngx/pull/10502))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 16 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10496](https://github.com/paperless-ngx/paperless-ngx/pull/10496))
- Fixhancement: improve text thumbnail generation for large files @shamoon ([#10483](https://github.com/paperless-ngx/paperless-ngx/pull/10483))
- Enhancement: disable auto spellcheck on filtering dropdowns @TheDodger ([#10487](https://github.com/paperless-ngx/paperless-ngx/pull/10487))
- Chore(deps): Bump the small-changes group across 1 directory with 8 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10481](https://github.com/paperless-ngx/paperless-ngx/pull/10481))
- Fix: include ignore for config logos in sanity checker @shamoon ([#10473](https://github.com/paperless-ngx/paperless-ngx/pull/10473))
- Chore: add tasks task\\_id param to openapi spec @shamoon ([#10469](https://github.com/paperless-ngx/paperless-ngx/pull/10469))
- Fix: track and restore changed document fields from session storage @shamoon ([#10468](https://github.com/paperless-ngx/paperless-ngx/pull/10468))
- Chore: include advanced search query param in API spec @shamoon ([#10449](https://github.com/paperless-ngx/paperless-ngx/pull/10449))
- Enhancement: display saved view counts @shamoon ([#10246](https://github.com/paperless-ngx/paperless-ngx/pull/10246))
- Fix: Make some natural keyword date searches timezone-aware @shamoon ([#10416](https://github.com/paperless-ngx/paperless-ngx/pull/10416))
- Fixhancement: add missing exact operator for boolean CF queries @shamoon ([#10402](https://github.com/paperless-ngx/paperless-ngx/pull/10402))
- Fix: dont use translated verbose\\_name for getting object perms @shamoon ([#10399](https://github.com/paperless-ngx/paperless-ngx/pull/10399))
- Fix: fix date format for 'today' in DateComponent @shamoon ([#10369](https://github.com/paperless-ngx/paperless-ngx/pull/10369))
- Feature: add Vietnamese translation @shamoon ([#10352](https://github.com/paperless-ngx/paperless-ngx/pull/10352))
- Chore(deps): Bump the small-changes group across 1 directory with 7 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10347](https://github.com/paperless-ngx/paperless-ngx/pull/10347))
- Fix: default to empty permissions for group creation @shamoon ([#10337](https://github.com/paperless-ngx/paperless-ngx/pull/10337))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group across 1 directory with 4 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10311](https://github.com/paperless-ngx/paperless-ngx/pull/10311))
- Chore(deps-dev): Bump @<!---->types/node from 22.15.29 to 24.0.10 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10306](https://github.com/paperless-ngx/paperless-ngx/pull/10306))
- Chore(deps): Bump bootstrap from 5.3.6 to 5.3.7 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10308](https://github.com/paperless-ngx/paperless-ngx/pull/10308))
- Chore(deps-dev): Bump webpack from 5.98.0 to 5.99.9 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10309](https://github.com/paperless-ngx/paperless-ngx/pull/10309))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.51.1 to 1.53.2 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#10307](https://github.com/paperless-ngx/paperless-ngx/pull/10307))
- Chore(deps): Bump the frontend-angular-dependencies group in /src-ui with 13 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#10303](https://github.com/paperless-ngx/paperless-ngx/pull/10303))
- Performance: Add support for configuring date parser languages @Merinorus ([#10181](https://github.com/paperless-ngx/paperless-ngx/pull/10181))
- Enhancement: Add a database caching for improved performance @Merinorus ([#9784](https://github.com/paperless-ngx/paperless-ngx/pull/9784))
- Fix: correct api created coercion with timezone @shamoon ([#10287](https://github.com/paperless-ngx/paperless-ngx/pull/10287))
- Fix: reset search query for preview on reset filter @shamoon ([#10279](https://github.com/paperless-ngx/paperless-ngx/pull/10279))
- Chore: update to Angular 20 @shamoon ([#10273](https://github.com/paperless-ngx/paperless-ngx/pull/10273))
- Chore: reject absurd max age values @shamoon ([#10243](https://github.com/paperless-ngx/paperless-ngx/pull/10243))
</details>
