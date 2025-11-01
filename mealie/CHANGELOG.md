# 🍴🍴🍴🍴🍴🍴

This release contains mostly bug fixes, though we fit in a few features for you too!

## 🎉 Highlights

You can now set the default activity per-device (thanks @miah120!). Upon logging-in (or opening the PWA). You can choose to navigate to:
- Your recipes (like before)
- Your shopping lists
- The meal planner

This can be configured in your profile. By default, your default activity will be the recipes page (just like how it used to be before this update).

## ✨ New features

- feat: Add new migration for DVO Cook'n @keyofdminer (#5085)
- feat: Support User-Level Default Activities @miah120 (#5125)
- feat: Improve shopping list label sections @miah120 (#6345)

## 🐛 Bug fixes

- fix: Change 'Units' to 'Unit' in shopping list item editor @ritoban23 (#6372)
- fix: Check `x-forwarded-proto` header when determining auth cookie samesite attribute @michael-genson (#6383)
- fix: Upgrade Pydantic and remove manual Postgres URL parsing @michael-genson (#6385)
- fix: Use `crossorigin: "use-credentials"` with PWA manifest @michael-genson (#6430)
- fix: dash slug names @fernandom06 (#5709)
- fix: Make docs:gen consistent regardless of timestamp (again) @michael-genson (#6432)
- fix: Changed sorting icons @RichardVanLeeuwen (#6354)
- fix: Heart and Ranking Stars overlap each other @AurelienPautet (#6359)
- fix: Food seed only works for American English (#6204) @flomero (#6436)

## 🧰 Maintenance

<details>
<summary>25 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#6347)
- chore(l10n): New Crowdin updates @hay-kot (#6353)
- chore(l10n): New Crowdin updates @hay-kot (#6357)
- chore(l10n): Crowdin locale sync @github-actions (#6364)
- chore(l10n): New Crowdin updates @hay-kot (#6367)
- chore(l10n): New Crowdin updates @hay-kot (#6371)
- chore(l10n): New Crowdin updates @hay-kot (#6376)
- chore(l10n): New Crowdin updates @hay-kot (#6381)
- chore(auto): Update pre-commit hooks @github-actions (#6370)
- chore(l10n): New Crowdin updates @hay-kot (#6384)
- chore(l10n): New Crowdin updates @hay-kot (#6388)
- chore(l10n): New Crowdin updates @hay-kot (#6395)
- chore(auto): Update pre-commit hooks @github-actions (#6407)
- chore(l10n): New Crowdin updates @hay-kot (#6396)
- chore(l10n): New Crowdin updates @hay-kot (#6434)
- chore(l10n): New Crowdin updates @hay-kot (#6435)
- chore(l10n): New Crowdin updates @hay-kot (#6439)
- chore(l10n): Crowdin locale sync @github-actions (#6440)
- chore(l10n): New Crowdin updates @hay-kot (#6441)
- chore(l10n): New Crowdin updates @hay-kot (#6444)
- chore(l10n): New Crowdin updates @hay-kot (#6446)
- chore(l10n): New Crowdin updates @hay-kot (#6455)
- chore(auto): Update pre-commit hooks @github-actions (#6445)
- chore(l10n): New Crowdin updates @hay-kot (#6462)
- chore(l10n): New Crowdin updates @hay-kot (#6464)
</details>

## 📚 Documentation

- docs(auto): Update image tag, for release v3.3.2 @github-actions (#6346)

## ⬆️ Dependency updates

<details>
<summary>36 changes</summary>

- chore(deps): update dependency openai to v2.3.0 @renovate (#6330)
- chore(deps): update dependency pydantic to v2.12.0 @renovate (#6310)
- chore(deps): update dependency fastapi to v0.118.3 @renovate (#6336)
- chore(deps): update dependency rich to v14.2.0 @renovate (#6341)
- fix(deps): update dependency aiofiles to v25 @renovate (#6344)
- chore(deps): update dependency psycopg2-binary to v2.9.11 @renovate (#6351)
- chore(deps): update dependency sqlalchemy to v2.0.44 @renovate (#6352)
- chore(deps): update dependency python-ldap to v3.4.5 [security] @renovate (#6356)
- chore(deps): update dependency alembic to v1.17.0 @renovate (#6361)
- fix(deps): update dependency fastapi to ^0.119.0 @renovate (#6362)
- chore(deps): update dependency pylint to v4 @renovate (#6366)
- chore(deps): update dependency pylint to v4.0.1 @renovate (#6389)
- chore(deps): update dependency mkdocs-material to v9.6.22 @renovate (#6391)
- chore(deps): update dependency coverage to v7.11.0 @renovate (#6392)
- fix(deps): update dependency pillow to v12 @renovate (#6394)
- chore(deps): update dependency pydantic to v2.12.3 @renovate (#6377)
- chore(deps): update dependency ruff to v0.14.1 @renovate (#6397)
- chore(deps): update dependency openai to v2.6.0 @renovate (#6398)
- fix(deps): update dependency uvicorn to ^0.38.0 @renovate (#6400)
- chore(deps): update dependency fastapi to v0.119.1 @renovate (#6408)
- chore(deps): update dependency pylint to v4.0.2 @renovate (#6409)
- chore(deps): update node.js to 58644f2 @renovate (#6418)
- chore(deps): update node.js to a2a7dcc @renovate (#6422)
- chore(deps): update dependency ruff to v0.14.2 @renovate (#6425)
- fix(deps): update dependency vite to v7 [security] @renovate (#6412)
- chore(deps): update node.js to 23c24e8 @renovate (#6424)
- fix(deps): update dependency fastapi to ^0.120.0 @renovate (#6426)
- chore(deps): update dependency openai to v2.6.1 @renovate (#6429)
- chore(deps): update dependency orjson to v3.11.4 @renovate (#6431)
- chore(deps): update dependency ingredient-parser-nlp to v2.4.0 @renovate (#6448)
- chore(deps): update dependency python-dotenv to v1.2.1 @renovate (#6442)
- chore(deps): update dependency alembic to v1.17.1 @renovate (#6456)
- chore(deps): update dependency fastapi to v0.120.1 @renovate (#6450)
- chore(deps): update node.js to v24 @renovate (#6451)
- chore(deps): update dependency fastapi to v0.120.2 @renovate (#6457)
- chore(deps): update dependency fastapi to v0.120.3 @renovate (#6465)
</details>

## 🙏 New Contributors

* @keyofdminer made their first contribution in https://github.com/mealie-recipes/mealie/pull/5085
* @ritoban23 made their first contribution in https://github.com/mealie-recipes/mealie/pull/6372
* @fernandom06 made their first contribution in https://github.com/mealie-recipes/mealie/pull/5709
* @AurelienPautet made their first contribution in https://github.com/mealie-recipes/mealie/pull/6359
* @flomero made their first contribution in https://github.com/mealie-recipes/mealie/pull/6436

# 🍴🍴🍴🍴🍴🍴