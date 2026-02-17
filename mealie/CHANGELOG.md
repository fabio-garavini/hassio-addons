# 🍴🍴🍴🍴🍴🍴

## 🎉 Highlights

- You can now use a relative date when filtering by "Last Made" in the recipe finder and meal planner! Existing rules using an absolute date will continue to work, but will be updated to a relative date when edited.
<img width="1053" height="142" alt="image" src="https://github.com/user-attachments/assets/c6bdc6a3-386a-45be-940a-961fe9a93d11" />  

- Ingredients are pluralized more naturally depending on your language. In English, for instance, you will see "2 cups onion chopped" instead of "2 cups onions chopped". Languages where the latter is preferred will keep the old behavior, and some languages (such as Japanese) forego plurals entirely. Check out [the PR](https://github.com/mealie-recipes/mealie/pull/7057) for more details. _Note that this is only applicable for parsed recipes with foods that have both singular and plural forms defined_.
- We've improved the drop down search logic to better match what you type (no more typing "onion" and having to scroll down to the 5th or 6th item to find it). Drop down fields also check aliases now, too!

## ✨ New features

- feat: Dynamic Placeholders UI @michael-genson (#7034)
- feat: Add Docker metadata to published images @michael-genson (#7052)
- feat: Customize Ingredient Plural Handling @michael-genson (#7057)
- feat: Improve recipe filter search ordering @michael-genson (#7061)
- feat: Further improve recipe filter search and shopping list and recipe ingredient editor @michael-genson (#7063)

## 🐛 Bug fixes

- fix: handle numeric recipeCategory from LLM/site to prevent import failure @jknndy (#7026)
- fix: Search bar width @michael-genson (#7060)
- fix: remove reserved prefix  @ZacharySchaffter (#7033)
- fix: Show minimum value for quantity @michael-genson (#7077)
- fix: Exclude docs/redoc from frontend route cache @michael-genson (#7082)

## 🧰 Maintenance

<details>
<summary>16 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#7010)
- chore(l10n): New Crowdin updates @hay-kot (#7014)
- chore(l10n): New Crowdin updates @hay-kot (#7016)
- chore(l10n): New Crowdin updates @hay-kot (#7022)
- chore(l10n): New Crowdin updates @hay-kot (#7024)
- chore(l10n): Crowdin locale sync @mealie-actions (#7029)
- chore(l10n): New Crowdin updates @hay-kot (#7028)
- chore(l10n): New Crowdin updates @hay-kot (#7048)
- chore(l10n): New Crowdin updates @hay-kot (#7053)
- chore(l10n): New Crowdin updates @hay-kot (#7055)
- chore(l10n): New Crowdin updates @hay-kot (#7059)
- chore(l10n): New Crowdin updates @hay-kot (#7062)
- chore(l10n): New Crowdin updates @hay-kot (#7066)
- chore(l10n): New Crowdin updates @hay-kot (#7070)
- chore(l10n): New Crowdin updates @hay-kot (#7075)
- chore(auto): Update pre-commit hooks @mealie-actions (#7080)
</details>

## ⬆️ Dependency updates

<details>
<summary>22 changes</summary>

- fix(deps): update dependency openai to v2.17.0 @renovate (#7012)
- fix(deps): update dependency fastapi to v0.128.2 @renovate (#7013)
- fix(deps): update dependency authlib to v1.6.7 @renovate (#7019)
- fix(deps): update dependency fastapi to v0.128.3 @renovate (#7020)
- chore(deps): update dependency setuptools to v81 @renovate (#7021)
- fix(deps): update dependency fastapi to v0.128.4 @renovate (#7023)
- fix(deps): update dependency fastapi to v0.128.5 @renovate (#7030)
- chore(deps): update dependency setuptools to v82 @renovate (#7032)
- fix(deps): update dependency fastapi to v0.128.6 @renovate (#7040)
- chore(deps): update dependency coverage to v7.13.4 @renovate (#7039)
- chore(deps): update dependency axios to v1.13.5 [security] @renovate (#7041)
- fix(deps): update dependency pillow to v12.1.1 @renovate (#7047)
- fix(deps): update dependency alembic to v1.18.4 @renovate (#7044)
- fix(deps): update dependency openai to v2.20.0 @renovate (#7042)
- fix(deps): update dependency fastapi to v0.128.7 @renovate (#7043)
- fix(deps): update dependency fastapi to v0.128.8 @renovate (#7049)
- chore(deps): update node.js to 00e9195 @renovate (#7054)
- fix(deps): update dependency fastapi to v0.129.0 @renovate (#7056)
- chore(deps): update dependency ruff to v0.15.1 @renovate (#7058)
- fix(deps): update dependency openai to v2.21.0 @renovate (#7065)
- fix(deps): update dependency authlib to v1.6.8 @renovate (#7067)
- fix(deps): update dependency pydantic-settings to v2.13.0 @renovate (#7073)
</details>

## 🙏 New Contributors

* @ZacharySchaffter made their first contribution in https://github.com/mealie-recipes/mealie/pull/7033

# 🍴🍴🍴🍴🍴🍴