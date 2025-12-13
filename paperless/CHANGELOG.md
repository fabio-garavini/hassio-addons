> [!NOTE]
> This release addresses two security issues (GHSA-6653-vcx4-69mc and GHSA-24x5-wp64-9fcc) and is recommended for all users. Thank you to the community members who reported these.

## paperless-ngx 2.20.2

### Features / Enhancements

- Tweakhancement: dim inactive users in users-groups list @shamoon ([#11537](https://github.com/paperless-ngx/paperless-ngx/pull/11537))

### Bug Fixes

- Fix: Expanded SVG validation whitelist and additional checks @stumpylog ([#11590](https://github.com/paperless-ngx/paperless-ngx/pull/11590))
- Fix: normalize allowed SVG tag and attribute names, add version @shamoon ([#11586](https://github.com/paperless-ngx/paperless-ngx/pull/11586))
- Fix: pass additional arguments to TagSerializer for permissions @shamoon ([#11576](https://github.com/paperless-ngx/paperless-ngx/pull/11576))

### Maintenance

- Chore(deps): Bump actions/checkout from 5 to 6 in the actions group @[dependabot[bot]](https://github.com/apps/dependabot) ([#11515](https://github.com/paperless-ngx/paperless-ngx/pull/11515))

### Dependencies

<details>
<summary>6 changes</summary>

- Chore: update Angular dependencies to 20.3.15 @shamoon ([#11568](https://github.com/paperless-ngx/paperless-ngx/pull/11568))
- Chore(deps): Bump actions/checkout from 5 to 6 in the actions group @[dependabot[bot]](https://github.com/apps/dependabot) ([#11515](https://github.com/paperless-ngx/paperless-ngx/pull/11515))
- Chore(deps-dev): Bump webpack from 5.102.1 to 5.103.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11513](https://github.com/paperless-ngx/paperless-ngx/pull/11513))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.56.1 to 1.57.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11514](https://github.com/paperless-ngx/paperless-ngx/pull/11514))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11512](https://github.com/paperless-ngx/paperless-ngx/pull/11512))
- docker(deps): bump astral-sh/uv from 0.9.14-python3.12-trixie-slim to 0.9.15-python3.12-trixie-slim @[dependabot[bot]](https://github.com/apps/dependabot) ([#11533](https://github.com/paperless-ngx/paperless-ngx/pull/11533))
</details>

### All App Changes

<details>
<summary>12 changes</summary>

- Fix: Expanded SVG validation whitelist and additional checks @stumpylog ([#11590](https://github.com/paperless-ngx/paperless-ngx/pull/11590))
- Fixhancement: pass ordering to tag children @shamoon ([#11556](https://github.com/paperless-ngx/paperless-ngx/pull/11556))
- Performance: avoid unnecessary filename operations on bulk custom field updates @shamoon ([#11558](https://github.com/paperless-ngx/paperless-ngx/pull/11558))
- Fix: normalize allowed SVG tag and attribute names, add version @shamoon ([#11586](https://github.com/paperless-ngx/paperless-ngx/pull/11586))
- Chore: refactor workflows code @shamoon ([#11563](https://github.com/paperless-ngx/paperless-ngx/pull/11563))
- Fix: pass additional arguments to TagSerializer for permissions @shamoon ([#11576](https://github.com/paperless-ngx/paperless-ngx/pull/11576))
- Chore: update Angular dependencies to 20.3.15 @shamoon ([#11568](https://github.com/paperless-ngx/paperless-ngx/pull/11568))
- Chore(deps-dev): Bump webpack from 5.102.1 to 5.103.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11513](https://github.com/paperless-ngx/paperless-ngx/pull/11513))
- Chore(deps-dev): Bump @<!---->playwright/test from 1.56.1 to 1.57.0 in /src-ui @[dependabot[bot]](https://github.com/apps/dependabot) ([#11514](https://github.com/paperless-ngx/paperless-ngx/pull/11514))
- Chore(deps-dev): Bump the frontend-eslint-dependencies group in /src-ui with 3 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#11512](https://github.com/paperless-ngx/paperless-ngx/pull/11512))
- Tweakhancement: dim inactive users in users-groups list @shamoon ([#11537](https://github.com/paperless-ngx/paperless-ngx/pull/11537))
- Chore: add some output of social login errors @shamoon ([#11527](https://github.com/paperless-ngx/paperless-ngx/pull/11527))
</details>
