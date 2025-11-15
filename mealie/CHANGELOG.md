# 🍴🍴🍴🍴🍴🍴

Welcome to the latest release of Mealie! This release contains a minor breaking change; the flow for downloading a recipe .zip has been simplified and no longer requires a zip token. If you are leveraging the .zip API, you'll want to update your scripts.

## 🎉 Highlights

- You can now add recipes as an ingredient for other recipes. Got a great teriyaki sauce recipe to go with your hibachi fried rice? You can add it as an ingredient now.

## 🚨 Breaking changes

- fix: Refactor Recipe Zip File Flow @michael-genson (#6170)

## ✨ New features

- feat: Add `DELETE /{slug}/image` @chollinger93 (#6259)
- feat: Add recipe as ingredient @parumpum (#4800)

## 🐛 Bug fixes

- fix: Locale dates format @p0lycarpio (#6211)
- fix: Update the random button flow @aliyyanWijaya (#6248)
- fix: Include contents of purpose field when parsing ingredients @strangetom (#6494)
- fix: Refactor Recipe Zip File Flow @michael-genson (#6170)
- fix: Stabilize shopping list queuing @michael-genson (#6498)
- fix: Brute parser fails if unit or food is empty @michael-genson (#6500)
- fix: Make Ingredients and Instructions independently scrollable in cook mode @AurelienPautet (#6358)
- fix: Improve recipe ingredient selection @p0lycarpio (#6518)
- fix: prevent URL encoding in postgres placeholder display @LaurianeH-05 (#6438)

## 🧰 Maintenance

<details>
<summary>14 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#6469)
- chore(l10n): New Crowdin updates @hay-kot (#6478)
- chore(l10n): Crowdin locale sync @github-actions (#6485)
- chore(l10n): New Crowdin updates @hay-kot (#6486)
- chore(l10n): New Crowdin updates @hay-kot (#6487)
- chore: Update some frontend deps @michael-genson (#6490)
- chore(l10n): New Crowdin updates @hay-kot (#6492)
- chore(auto): Update pre-commit hooks @github-actions (#6493)
- chore(l10n): New Crowdin updates @hay-kot (#6495)
- chore(l10n): New Crowdin updates @hay-kot (#6502)
- chore(l10n): New Crowdin updates @hay-kot (#6506)
- chore(l10n): New Crowdin updates @hay-kot (#6508)
- chore(l10n): Crowdin locale sync @github-actions (#6524)
- chore(auto): Update pre-commit hooks @github-actions (#6528)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v3.4.0 @github-actions (#6471)

## 🔨 Internal development

- dev: Migrate to uv @michael-genson (#6470)

## ⬆️ Dependency updates

<details>
<summary>6 changes</summary>

- fix(deps): update dependency tzdata to v2025 @renovate (#6481)
- chore(deps): update dependency types-python-slugify to v8 @renovate (#6480)
- chore(deps): update node.js to 55b6bbe @renovate (#6503)
- chore(deps): update node.js to e5bbac0 @renovate (#6507)
- chore(deps): update dependency pytest to v9 @renovate (#6525)
- chore(deps): update node.js to 7f80506 @renovate (#6539)
</details>

## 🙏 New Contributors

* @aliyyanWijaya made their first contribution in https://github.com/mealie-recipes/mealie/pull/6248
* @strangetom made their first contribution in https://github.com/mealie-recipes/mealie/pull/6494
* @chollinger93 made their first contribution in https://github.com/mealie-recipes/mealie/pull/6259
* @LaurianeH-05 made their first contribution in https://github.com/mealie-recipes/mealie/pull/6438

# 🍴🍴🍴🍴🍴🍴
