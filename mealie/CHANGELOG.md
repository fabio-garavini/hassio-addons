# 🍴🍴🍴🍴🍴🍴

**Welcome to the latest Mealie release!**
This update brings a major update to how you parse recipes, home to some of the most heavily-requested features. This update also brings a truckload of fixes to round out some performance issues and fix some fairly-regular annoyances.

## 🎉 Highlights

### 📋 Semi-automated Ingredient Parser
Mealie v3.3.0 introduces [an entirely new workflow to parsing recipes](https://github.com/mealie-recipes/mealie/pull/6151). The new parsing workflow includes many heavily-requested features such as:
- A more focused, guided ingredient parser which lets you parse one ingredient at a time
- Initiate parsing immediately after creating a new recipe (with an option to turn this off, though we encourage you to try it!)
- Automatically parse ingredients which can be matched with a reasonably high level of accuracy
- Much much more!

### Auth Timeout and `iframe` Support
Users have been experiencing issues with authentication, including being logged-out seemingly randomly between sessions (even if `TOKEN_TIME` is set, [which is a requirement for longer session times](https://docs.mealie.io/documentation/getting-started/installation/backend-config/#general)). This update should resolve flaky session times ignoring the `TOKEN_TIME`.

Additionally, support for hosting Mealie in an `iframe` (such as via Home Assistant) should be fixed. Note that `iframe` support _only works if being served over HTTPS_, which is a browser requirement. For more information, [see the samesite Cookie header spec](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value).

## ✨ New features

- feat: Manually calculate OpenAI Parsing Confidence @michael-genson (#6141)
- feat: Upgraded Ingredient Parsing Workflow @michael-genson (#6151)
- feat: Ingredient Parser Enhancements @michael-genson (#6228)
- feat: Simplify Default Layout Logic and Add Household.name To Cookbooks API @michael-genson (#6243)

## 🐛 Bug fixes

- fix: Print Button Does Nothing @michael-genson (#6178)
- fix: ingredient linker and instructions titles @p0lycarpio (#6146)
- fix: multiple RecipeRating backend calls @p0lycarpio (#6194)
- fix: Actually Fix Token Time @michael-genson (#6215)
- fix: Remove explicit timeout from OpenAI image API Call @michael-genson (#6227)
- fix: Workflow Issues with Deleting Ingredient In Parser @michael-genson (#6230)
- fix: Enabled Using Mealie In iframe If Served Over HTTPS @michael-genson (#6128)
- fix: Remove constraint on unhashed password being 'LDAP' @cmintey (#6236)
- fix: Remove Double Cookie Refresh @michael-genson (#6242)
- fix: Misc Issues with Ingredient Parser @michael-genson (#6250)
- fix: Make Ingredient Parser Dialog Use Full Space @michael-genson (#6253)
- fix: Check for non-hid properties when injetcing SPA meta @michael-genson (#6256)
- fix: Stores Not Populating Sometimes @michael-genson (#6266)

## 🧰 Maintenance

<details>
<summary>18 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#6145)
- chore(auto): Update pre-commit hooks @github-actions (#6174)
- chore(l10n): New Crowdin updates @hay-kot (#6176)
- chore(l10n): New Crowdin updates @hay-kot (#6213)
- chore(l10n): Crowdin locale sync @github-actions (#6206)
- chore(auto): Update pre-commit hooks @github-actions (#6222)
- chore(l10n): New Crowdin updates @hay-kot (#6218)
- chore(l10n): New Crowdin updates @hay-kot (#6224)
- chore(l10n): New Crowdin updates @hay-kot (#6225)
- chore(l10n): New Crowdin updates @hay-kot (#6231)
- chore(l10n): New Crowdin updates @hay-kot (#6234)
- chore(l10n): New Crowdin updates @hay-kot (#6237)
- chore(l10n): New Crowdin updates @hay-kot (#6241)
- chore(l10n): New Crowdin updates @hay-kot (#6254)
- chore(l10n): New Crowdin updates @hay-kot (#6257)
- chore: Upgrade Node and Nuxt @michael-genson (#6240)
- chore: Add Stricter Frontend Formatting @michael-genson (#6262)
- chore(l10n): New Crowdin updates @hay-kot (#6264)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v3.2.1 @github-actions (#6172)
- docs: Add Info Regarding Theme Settings Config @michael-genson (#6198)
- docs: Fix formatting in some community guides @lehnerpat (#6223)
- docs: Update navigation instructions for (admin) settings pages @lehnerpat (#6220)
- docs: Improve formatting in 'Automating Backups with n8n' community guide @lehnerpat (#6221)

## ⬆️ Dependency updates

<details>
<summary>21 changes</summary>

- chore(deps): update dependency ruff to ^0.13.0 @renovate (#6148)
- chore(deps): update node.js to abcf9c9 @renovate (#6138)
- fix(deps): update dependency openai to v1.107.3 @renovate (#6147)
- fix(deps): update dependency pydantic to v2.11.9 @renovate (#6159)
- chore(deps): update dependency mypy to v1.18.1 @renovate (#6161)
- chore(deps): update dependency pytest-asyncio to v1.2.0 @renovate (#6162)
- chore(deps): update dependency mkdocs-material to v9.6.20 @renovate (#6179)
- fix(deps): update dependency fastapi to v0.116.2 @renovate (#6181)
- fix(deps): update dependency authlib to v1.6.4 @renovate (#6182)
- fix(deps): update dependency openai to v1.108.0 @renovate (#6185)
- chore(deps): update dependency ruff to v0.13.1 @renovate (#6191)
- chore(deps): update dependency mypy to v1.18.2 @renovate (#6193)
- chore(deps): update dependency openai to v1.109.1 @renovate (#6196)
- chore(deps): update dependency ruff to v0.13.2 @renovate (#6239)
- fix(deps): update dependency uvicorn to ^0.37.0 @renovate (#6200)
- fix(deps): update dependency fastapi to ^0.117.0 @renovate (#6205)
- chore(deps): update dependency coverage to v7.10.7 @renovate (#6216)
- chore(deps): update dependency lxml to v6.0.2 @renovate (#6219)
- chore(deps): update dependency pydantic-settings to v2.11.0 @renovate (#6233)
- chore(deps): update dependency pyyaml to v6.0.3 @renovate (#6245)
- fix(deps): update dependency bcrypt to v5 @renovate (#6246)
</details>

# 🍴🍴🍴🍴🍴🍴
