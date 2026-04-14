# 🍴🍴🍴🍴🍴🍴

This release adds a new feature: Announcements. More on these below 👇 This release migrates also us from Nuxt 3 to Nuxt 4. Unlike our Nuxt 2 -> 3 upgrade, there should be minimal user-facing changes (mostly just small tweaks to automatic margins and text size).

## 🎉 Highlights

- Announcements:  these are a one-way communication from the maintainers to users to call attention to certain new features, particularly ones that may require new user actions (such as running a migration script or cleaning up migration data). These are not intended to replace release notes, and are more of a way for us to communicate with users who _don't_ regularly read release notes. Users can choose to disable these in-app, and admins can choose to disable these at the group or household level. More info in the announcement in the app!

- Hitting "back" on your browser to the main recipe page will remember your last position and take you back there. No more scrolling every time you want to get back to your place on the page!

## ✨ New features

- feat: improve BaseDialog on mobile and use it globally @p0lycarpio (#7076)
- feat: Back button sets view to where you left page @Choromanski (#7370)
- feat: Added scroll to top on all pages that have recipeCardSection @Choromanski (#7384)
- feat: Announcements @michael-genson (#7431)

## 🐛 Bug fixes

- fix: Updated commit hash for opencontainers revision @Choromanski (#7340)
- fix: Disable SSL verify when scraping sites for recipe data @michael-genson (#7356)
- fix: Display issues with data management pages on mobile @Choromanski (#7389)
- fix: Reverted references to categories on the recipe actions data management page @Choromanski (#7391)
- fix: Support for enter key when creating household @Choromanski (#7419)
- fix: BaseDialog padding @p0lycarpio (#7428)
- fix: Unchecking tool in recipe @Choromanski (#7439)
- fix: Update frontend refs @michael-genson (#7444)
- fix: prevent stale SPA shell after container rebuild @DeepReef11 (#7344)
- fix: Search layout fixes @michael-genson (#7459)

## 🧰 Maintenance

<details>
<summary>22 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#7346)
- chore(l10n): New Crowdin updates @hay-kot (#7351)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7357)
- chore(l10n): New Crowdin updates @hay-kot (#7360)
- chore(l10n): New Crowdin updates @hay-kot (#7362)
- chore(l10n): New Crowdin updates @hay-kot (#7365)
- chore(l10n): New Crowdin updates @hay-kot (#7367)
- chore(l10n): New Crowdin updates @hay-kot (#7371)
- chore(l10n): New Crowdin updates @hay-kot (#7372)
- chore(l10n): New Crowdin updates @hay-kot (#7375)
- chore(l10n): New Crowdin updates @hay-kot (#7379)
- chore(l10n): New Crowdin updates @hay-kot (#7380)
- chore(l10n): New Crowdin updates @hay-kot (#7393)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7397)
- chore(l10n): New Crowdin updates @hay-kot (#7400)
- chore(l10n): New Crowdin updates @hay-kot (#7408)
- chore(l10n): New Crowdin updates @hay-kot (#7413)
- chore(l10n): New Crowdin updates @hay-kot (#7425)
- chore: Nuxt 4 upgrade @Kuchenpirat (#7426)
- chore: upgrade to vuetify v4 @Kuchenpirat (#7432)
- chore(auto): Update pre-commit hooks @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7364)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7447)
</details>

## 📚 Documentation

- docs: Updated homepage footer @Choromanski (#7440)

## 🔨 Internal development

- dev: Add linting rules to vscode settings @Choromanski (#7386)
- dev: Bumped gh actions to support node 24 @Choromanski (#7392)
- dev: Fix autolabel permission to only use pull_request_target @michael-genson (#7422)

## ⬆️ Dependency updates

<details>
<summary>31 changes</summary>

- chore(deps): update dependency node-forge to v1.4.0 [security] @[renovate[bot]](https://github.com/apps/renovate) (#7338)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20260323 @[renovate[bot]](https://github.com/apps/renovate) (#7345)
- fix(deps): update dependency fastapi to v0.135.2 @[renovate[bot]](https://github.com/apps/renovate) (#7349)
- chore(deps): update dependency types-requests to v2.32.4.20260324 @[renovate[bot]](https://github.com/apps/renovate) (#7359)
- fix(deps): update dependency openai to v2.30.0 @[renovate[bot]](https://github.com/apps/renovate) (#7369)
- chore(deps): update dependency ruff to v0.15.8 @[renovate[bot]](https://github.com/apps/renovate) (#7373)
- chore(deps): update dependency types-requests to v2.33.0.20260327 @[renovate[bot]](https://github.com/apps/renovate) (#7374)
- fix(deps): update dependency tzdata to v2026 @[renovate[bot]](https://github.com/apps/renovate) (#7388)
- fix(deps): update dependency orjson to v3.11.8 @[renovate[bot]](https://github.com/apps/renovate) (#7398)
- fix(deps): update dependency fastapi to v0.135.3 @[renovate[bot]](https://github.com/apps/renovate) (#7406)
- fix(deps): update dependency pillow to v12.2.0 @[renovate[bot]](https://github.com/apps/renovate) (#7407)
- chore(deps): update dependency vite to v7.3.2 [security] @[renovate[bot]](https://github.com/apps/renovate) (#7410)
- chore(deps): update dependency types-requests to v2.33.0.20260402 @[renovate[bot]](https://github.com/apps/renovate) (#7412)
- chore(deps): update node.js to 2ef5213 @[renovate[bot]](https://github.com/apps/renovate) (#7414)
- chore(deps): update node.js to df0c595 @[renovate[bot]](https://github.com/apps/renovate) (#7415)
- chore(deps): update dependency ruff to v0.15.9 @[renovate[bot]](https://github.com/apps/renovate) (#7418)
- chore(deps): update node.js to 80fc934 @[renovate[bot]](https://github.com/apps/renovate) (#7421)
- chore(deps): update dependency mypy to v1.20.0 @[renovate[bot]](https://github.com/apps/renovate) (#7399)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20260402 @[renovate[bot]](https://github.com/apps/renovate) (#7411)
- fix(deps): update dependency requests to v2.33.1 @[renovate[bot]](https://github.com/apps/renovate) (#7394)
- fix(deps): update dependency sqlalchemy to v2.0.49 @[renovate[bot]](https://github.com/apps/renovate) (#7427)
- fix(deps): update dependency uvicorn to v0.43.0 @[renovate[bot]](https://github.com/apps/renovate) (#7430)
- chore(deps): update dependency axios to v1.15.0 [security] @[renovate[bot]](https://github.com/apps/renovate) (#7436)
- fix(deps): update dependency python-multipart to v0.0.24 @[renovate[bot]](https://github.com/apps/renovate) (#7438)
- fix(deps): update dependency uvicorn to v0.44.0 @[renovate[bot]](https://github.com/apps/renovate) (#7443)
- chore(deps): update dependency rich to v15 @[renovate[bot]](https://github.com/apps/renovate) (#7448)
- fix(deps): update dependency rapidfuzz to v3.14.5 @[renovate[bot]](https://github.com/apps/renovate) (#7450)
- chore(deps): update dependency pytest to v9.0.3 @[renovate[bot]](https://github.com/apps/renovate) (#7452)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20260408 @[renovate[bot]](https://github.com/apps/renovate) (#7453)
- chore(deps): update dependency types-requests to v2.33.0.20260408 @[renovate[bot]](https://github.com/apps/renovate) (#7455)
- chore(deps): update dependency types-pyyaml to v6.0.12.20260408 @[renovate[bot]](https://github.com/apps/renovate) (#7454)
</details>

## 🙏 New Contributors

* @DeepReef11 made their first contribution in https://github.com/mealie-recipes/mealie/pull/7344

# 🍴🍴🍴🍴🍴🍴