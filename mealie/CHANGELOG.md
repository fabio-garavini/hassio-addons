# 2.8.0

## 🎉 Highlights

### 📑 New Ingredient Parser
Mealie now uses a new Ingredient Parser package, making future development easier — especially for adding support for languages beyond English. While some inputs may be interpreted differently, our testing shows that improvements and regressions generally balance out. So overall parsing performance remains the same.

### 🔍Scraper Improvements
Nutritional data is now extracted directly from our scraper library, including additional information beyond the recipe schema. This improves the accuracy and completeness for some sites.

## ✨ New features

- feat: Migrate from CRF++ to Ingredient Parser (a Python package) @michael-genson (#5061)
- feat: Use recipe_scrapers metadata for more accurate parsing @eric-hoffmann (#5165)
- _feat: Update seeding to use new foods list format - round 2_ -  reverted due to crowdin limits @Cameronwyatt (#5189)
- feat: OIDC: Call userinfo if no claims found in id token @cmintey (#5228)

## 🐛 Bug fixes

- fix: Filter out null chars from OpenAI response @michael-genson (#5187)
- fix: Case Insensitive Query Filters @michael-genson (#5162)
- fix: Revert \"feat: Update seeding to use new foods list format - round 2\" @hay-kot (#5208)
- fix: PostgreSQL capitalization @TeaRex-coder (#5220)

## 🧰 Maintenance

<details>
<summary>16 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#5131)
- chore: Renovate Ignore Python Upgrades @michael-genson (#5134)
- chore(l10n): New Crowdin updates @hay-kot (#5135)
- chore(l10n): New Crowdin updates @hay-kot (#5142)
- chore(l10n): New Crowdin updates @hay-kot (#5145)
- chore(l10n): New Crowdin updates @hay-kot (#5149)
- chore(l10n): New Crowdin updates @hay-kot (#5161)
- chore(auto): Update pre-commit hooks @github-actions (#5167)
- chore(l10n): New Crowdin updates @hay-kot (#5174)
- chore(l10n): New Crowdin updates @hay-kot (#5175)
- chore(l10n): New Crowdin updates @hay-kot (#5176)
- chore(l10n): New Crowdin updates @hay-kot (#5179)
- chore(auto): Update pre-commit hooks @github-actions (#5200)
- chore(auto): Update pre-commit hooks @github-actions (#5229)
- chore: Bump Ruff to 0.11.0 @michael-genson (#5233)
- chore(l10n): New Crowdin updates @hay-kot (#5185)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v2.7.1 @github-actions (#5129)
- docs: Re-add missing environment variable documentation @brycied00d (#5199)
- docs: faq.md: fix paths to scripts @myxor (#5201)

## 🔨 Internal development

- dev: chown commandhistory to correct user during devcontainer creation @eric-hoffmann (#5166)

## ⬆️ Dependency updates

<details>
<summary>17 changes</summary>

- chore(deps): update dependency ruff to v0.9.9 @renovate (#5130)
- fix(deps): update dependency bcrypt to v4.3.0 @renovate (#5127)
- fix(deps): update dependency ingredient-parser-nlp to v2 @michael-genson (#5137)
- fix(deps): update dependency authlib to v1.5.1 @renovate (#5138)
- fix(deps): update dependency fastapi to v0.115.10 @renovate (#5139)
- chore(deps): update dependency mkdocs-material to v9.6.6 @renovate (#5141)
- fix(deps): update dependency openai to v1.65.2 @renovate (#5147)
- fix(deps): update dependency fastapi to v0.115.11 @renovate (#5150)
- fix(deps): update dependency rapidfuzz to v3.12.2 @renovate (#5159)
- chore(deps): update dependency pytest to v8.3.5 @renovate (#5158)
- chore(deps): update dependency mkdocs-material to v9.6.7 @renovate (#5163)
- fix(deps): update dependency openai to v1.65.3 @renovate (#5180)
- fix(deps): update dependency jinja2 to v3.1.6 [security] @renovate (#5183)
- fix(deps): update dependency openai to v1.65.4 @renovate (#5182)
- chore(deps): update dependency ruff to v0.9.10 @renovate (#5188)
- fix(deps): update dependency recipe-scrapers to v15.6.0 @renovate (#5198)
- chore(deps): update dependency pylint to v3.3.5 @renovate (#5194)
- chore(deps): update dependency mkdocs-material to v9.6.9 @renovate (#5209)
</details>

## 🙏 New Contributors

## New Contributors
* @eric-hoffmann made their first contribution in https://github.com/mealie-recipes/mealie/pull/5166
* @brycied00d made their first contribution in https://github.com/mealie-recipes/mealie/pull/5199
* @myxor made their first contribution in https://github.com/mealie-recipes/mealie/pull/5201
* @TeaRex-coder made their first contribution in https://github.com/mealie-recipes/mealie/pull/5220

**Full Changelog**: https://github.com/mealie-recipes/mealie/compare/v2.7.1...v2.8.0"