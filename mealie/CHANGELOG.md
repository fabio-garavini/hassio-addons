# 🍴🍴🍴🍴🍴🍴

This release contains a fix for users with an empty `.secret` file not being able to log-in with local auth. Your `.secret` file will be regenerated with a valid value. Note that this will invalidate existing tokens, including API keys.

## 🐛 Bug fixes

- fix: Ensure secret key is not empty @michael-genson (#7701)

## 🔨 Internal development

- dev: Set renovarte bot PRs to "immediate" @michael-genson (#7690)

## ⬆️ Dependency updates

<details>
<summary>6 changes</summary>

- fix(deps): update dependency fastapi to v0.136.3 @[renovate[bot]](https://github.com/apps/renovate) (#7692)
- chore(deps): update dependency coverage to v7.14.1 @[renovate[bot]](https://github.com/apps/renovate) (#7691)
- fix(deps): update dependency uvicorn to v0.48.0 @[renovate[bot]](https://github.com/apps/renovate) (#7696)
- fix(deps): update dependency sqlalchemy to v2.0.50 @[renovate[bot]](https://github.com/apps/renovate) (#7693)
- fix(deps): update dependency ingredient-parser-nlp to v2.7.0 @[renovate[bot]](https://github.com/apps/renovate) (#7695)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#7697)
</details>

# 🍴🍴🍴🍴🍴🍴
