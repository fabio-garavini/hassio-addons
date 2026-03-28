# 🥧🥧🥧🥧🥧🥧

This release contains a ton of bug fixes, and some exciting new features, particularly for importing non-English recipes.

## 🎉 Highlights

- The NLP parser now leverages your units database to more accurately parse ingredients with custom units. This is especially handy for non-English recipes, as the NLP data is trained exclusively off of English data. If you're used to using the brute force parser, give the NLP parser a go and see how it fares!

- You can now automatically show past days in the meal planner on first load:
<img width="349" height="609" alt="image" src="https://github.com/user-attachments/assets/8624c7c8-dbf3-4d27-9680-485feebd5f8b" />

## ✨ New features

- feat: Auto-merge Renovate dependency updates @hay-kot (#7280)
- feat: Clarification of site settings @Choromanski (#7321)
- feat: Add days in the past selector on meal planner @arnassavickas (#6857)
- feat: Pass user defined units as custom units to parse_ingredient function. @strangetom (#7334)

## 🐛 Bug fixes

- fix: Use latest python image as base @dswd (#7276)
- fix: Release Commit  @Choromanski (#7274)
- fix: Fix create token API page @michael-genson (#7325)
- fix: Removing a recipe ingredient doesn't remove its links to steps @RoSh-23 (#6896)
- fix: publish all mealplan create, update, and delete events @francisferrell (#7015)
- fix: restore recipe notes during JSON import @materialsportler (#7017)
- fix: unparsed ingredients poorly formatted when fed to NLP parser @gabrielclimb (#7086)
- fix: HTML/JSON import failing @michael-genson (#7330)
- fix: preserve stored recipe slugs during hydration @harshitlarl (#7294)
- fix: Relax URL validation @michael-genson (#7336)

## 🧰 Maintenance

<details>
<summary>16 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#7277)
- chore: bump l10n auto-merge line limit from 400 to 6000 @hay-kot (#7279)
- chore(l10n): New Crowdin updates @hay-kot (#7282)
- chore(l10n): New Crowdin updates @hay-kot (#7289)
- chore(l10n): New Crowdin updates @hay-kot (#7292)
- chore(l10n): Crowdin locale sync @mealie-actions (#7293)
- chore(l10n): New Crowdin updates @hay-kot (#7297)
- chore(auto): Update pre-commit hooks @mealie-actions (#7298)
- chore: script setup components @Kuchenpirat (#7299)
- chore(l10n): New Crowdin updates @hay-kot (#7304)
- chore(l10n): New Crowdin updates @hay-kot (#7309)
- chore: migrate remaining pages to script setup @Kuchenpirat (#7310)
- chore(l10n): New Crowdin updates @hay-kot (#7315)
- chore(l10n): New Crowdin updates @hay-kot (#7323)
- chore(l10n): New Crowdin updates @hay-kot (#7332)
- chore: Resolve startup warnings @michael-genson (#7335)
</details>

## 📚 Documentation

- docs: Add missing `OPENAI_AUDIO_MODEL` env var to docs @michael-genson (#7333)

## 🔨 Internal development

- dev: Update PR template @michael-genson (#7326)

## ⬆️ Dependency updates

<details>
<summary>7 changes</summary>

- chore(deps): update dependency ruff to v0.15.7 @renovate (#7281)
- chore(deps): update dependency mkdocs-material to v9.7.6 @renovate (#7278)
- chore(deps): update node.js to bb20cf7 @renovate (#7317)
- fix(deps): update dependency ingredient-parser-nlp to v2.6.0 @renovate (#7318)
- fix(deps): update dependency requests to v2.33.0 [security] @renovate (#7319)
- fix(deps): update dependency pint to v0.25.3 @renovate (#7314)
- fix(deps): update dependency apprise to v1.9.9 @renovate (#7327)
</details>

## 🙏 New Contributors

* @dswd made their first contribution in https://github.com/mealie-recipes/mealie/pull/7276
* @arnassavickas made their first contribution in https://github.com/mealie-recipes/mealie/pull/6857
* @RoSh-23 made their first contribution in https://github.com/mealie-recipes/mealie/pull/6896
* @francisferrell made their first contribution in https://github.com/mealie-recipes/mealie/pull/7015
* @materialsportler made their first contribution in https://github.com/mealie-recipes/mealie/pull/7017
* @gabrielclimb made their first contribution in https://github.com/mealie-recipes/mealie/pull/7086
* @harshitlarl made their first contribution in https://github.com/mealie-recipes/mealie/pull/7294

# 🥧🥧🥧🥧🥧🥧
