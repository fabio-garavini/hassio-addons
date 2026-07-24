# 🍴🍴🍴🍴🍴🍴

This release brings a couple new features and a slew of bug fixes.

## ✨ New features

- feat: Added sitewide statistics @Choromanski (#7322)
- feat: ui fixes & backup link on onboarding screen @p0lycarpio (#7743)
- feat: floating save button when editing recipe @DeepReef11 (#7320)

## 🐛 Bug fixes

- fix: Manually implement nltk.downloader using cURL @michael-genson (#7817)
- fix: clear cached recipe actions on logout to prevent cross-user leak @shved270189 (#7815)
- fix: shopping list UI improvements @p0lycarpio (#7215)
- fix: Fix embedded tokens not persisting across sessions @michael-genson (#7860)
- fix: re-enable automatic merges with crowding CI @hay-kot (#7886)
- fix: preserve deep link when redirecting to login @henricook (#7876)
- fix: truncate scraped recipe slug to filesystem-safe length @TowyTowy (#7862)
- fix: handle IntegrityError with 409 conflict response @gitolicious (#7712)
- fix: prevent empty bulk add from clearing import URLs @ft4453080 (#7820)
- fix: wrap long words in timeline to prevent horizontal scroll @shved270189 (#7819)
- fix: scope bulk update/delete repository methods to caller's group/household @hay-kot (#7899)
- fix: harden LDAP and OIDC authentication providers @hay-kot (#7902)
- fix: restrict user ratings and favorites reads to the requesting user @hay-kot (#7903)
- fix: Fix flaky ratings on mobile @michael-genson (#7916)
- fix: Simplify rating logic @michael-genson (#7918)
- fix: New Asset dialog Type dropdown broken by Vuetify 4.1.2 item slot… @bferd (#7931)
- fix: Replace shadowed `ref` var name when adding recipe to shopping list @michael-genson (#7937)

## 🧰 Maintenance

<details>
<summary>20 changes</summary>

- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7818)
- chore(l10n): New Crowdin updates @hay-kot (#7805)
- chore(l10n): New Crowdin updates @hay-kot (#7824)
- chore(l10n): New Crowdin updates @hay-kot (#7836)
- chore(l10n): New Crowdin updates @hay-kot (#7837)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7842)
- chore(l10n): New Crowdin updates @hay-kot (#7839)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7870)
- chore(l10n): New Crowdin updates @hay-kot (#7853)
- chore(l10n): New Crowdin updates @hay-kot (#7871)
- chore(l10n): New Crowdin updates @hay-kot (#7891)
- chore(l10n): New Crowdin updates @hay-kot (#7894)
- chore(l10n): New Crowdin updates @hay-kot (#7904)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7906)
- chore(l10n): New Crowdin updates @hay-kot (#7908)
- chore(l10n): New Crowdin updates @hay-kot (#7911)
- chore(l10n): New Crowdin updates @hay-kot (#7915)
- chore(l10n): New Crowdin updates @hay-kot (#7920)
- chore(l10n): New Crowdin updates @hay-kot (#7923)
- chore(l10n): New Crowdin updates @hay-kot (#7930)
</details>

## 📚 Documentation

- docs: clarify manage and organize permissions @archit-goyal (#7823)

## 🔨 Internal development

- dev: Skip template check on Crowdin PRs @michael-genson (#7854)
- dev: Add GH CLI to devcontainer @michael-genson (#7857)

## ⬆️ Dependency updates

<details>
<summary>39 changes</summary>

- chore(deps): remove unused aiofiles dependency @lukehsiao (#7872)
- chore(deps): update nltk to 3.10.0 @hay-kot (#7901)
- chore(deps): update dependency coverage to v7.14.3 @[renovate[bot]](https://github.com/apps/renovate) (#7816)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#7822)
- chore(deps): update dependency ruff to v0.15.19 @[renovate[bot]](https://github.com/apps/renovate) (#7821)
- fix(deps): update dependency openai to v2.44.0 @[renovate[bot]](https://github.com/apps/renovate) (#7830)
- chore(deps): update dependency ruff to v0.15.20 @[renovate[bot]](https://github.com/apps/renovate) (#7832)
- fix(deps): update dependency alembic to v1.18.5 @[renovate[bot]](https://github.com/apps/renovate) (#7833)
- fix(deps): update dependency fastapi to v0.138.1 @[renovate[bot]](https://github.com/apps/renovate) (#7834)
- fix(deps): update dependency fastapi to v0.138.2 @[renovate[bot]](https://github.com/apps/renovate) (#7841)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#7846)
- fix(deps): update dependency pillow to v12.3.0 @[renovate[bot]](https://github.com/apps/renovate) (#7848)
- fix(deps): update dependency fastapi to v0.139.0 @[renovate[bot]](https://github.com/apps/renovate) (#7849)
- chore(deps): update dependency coverage to v7.15.0 @[renovate[bot]](https://github.com/apps/renovate) (#7855)
- fix(deps): update dependency typing-extensions to v4.16.0 @[renovate[bot]](https://github.com/apps/renovate) (#7856)
- chore(deps): update node.js to 392e1e2 @[renovate[bot]](https://github.com/apps/renovate) (#7858)
- fix(deps): update dependency uvicorn to v0.50.0 @[renovate[bot]](https://github.com/apps/renovate) (#7861)
- chore(deps): update dependency setuptools to v83 @[renovate[bot]](https://github.com/apps/renovate) (#7865)
- fix(deps): update dependency apprise to v1.12.0 @[renovate[bot]](https://github.com/apps/renovate) (#7864)
- fix(deps): update dependency yt-dlp to v2026.7.4 @[renovate[bot]](https://github.com/apps/renovate) (#7866)
- fix(deps): update dependency uvicorn to v0.50.1 @[renovate[bot]](https://github.com/apps/renovate) (#7867)
- fix(deps): update dependency uvicorn to v0.50.2 @[renovate[bot]](https://github.com/apps/renovate) (#7868)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#7874)
- chore(deps): update dependency mypy to v2.2.0 @[renovate[bot]](https://github.com/apps/renovate) (#7873)
- fix(deps): update dependency uvicorn to v0.51.0 @[renovate[bot]](https://github.com/apps/renovate) (#7875)
- chore(deps): update node.js to d5adb04 @[renovate[bot]](https://github.com/apps/renovate) (#7878)
- fix(deps): update dependency openai to v2.45.0 @[renovate[bot]](https://github.com/apps/renovate) (#7882)
- chore(deps): update dependency ruff to v0.15.21 @[renovate[bot]](https://github.com/apps/renovate) (#7884)
- chore(deps): update node.js to 5711a0d @[renovate[bot]](https://github.com/apps/renovate) (#7883)
- fix(deps): update dependency tzdata to v2026.3 @[renovate[bot]](https://github.com/apps/renovate) (#7887)
- chore(deps): update dependency types-requests to v2.33.0.20260712 @[renovate[bot]](https://github.com/apps/renovate) (#7889)
- chore(deps): update dependency coverage to v7.15.1 @[renovate[bot]](https://github.com/apps/renovate) (#7892)
- chore(deps): update dependency mypy to v2.3.0 @[renovate[bot]](https://github.com/apps/renovate) (#7898)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#7913)
- chore(deps): update dependency coverage to v7.15.2 @[renovate[bot]](https://github.com/apps/renovate) (#7917)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20260716 @[renovate[bot]](https://github.com/apps/renovate) (#7921)
- fix(deps): update dependency fastapi to v0.139.1 @[renovate[bot]](https://github.com/apps/renovate) (#7922)
- fix(deps): update dependency fastapi to v0.139.2 @[renovate[bot]](https://github.com/apps/renovate) (#7927)
- chore(deps): update dependency ruff to v0.15.22 @[renovate[bot]](https://github.com/apps/renovate) (#7926)
- fix(deps): update dependency openai to v2.46.0 @[renovate[bot]](https://github.com/apps/renovate) (#7928)
- chore(deps): update dependency mkdocs-material to v9.7.7 @[renovate[bot]](https://github.com/apps/renovate) (#7932)
</details>

## 🙏 New Contributors

* @shved270189 made their first contribution in https://github.com/mealie-recipes/mealie/pull/7815
* @archit-goyal made their first contribution in https://github.com/mealie-recipes/mealie/pull/7823
* @lukehsiao made their first contribution in https://github.com/mealie-recipes/mealie/pull/7872
* @TowyTowy made their first contribution in https://github.com/mealie-recipes/mealie/pull/7862
* @ft4453080 made their first contribution in https://github.com/mealie-recipes/mealie/pull/7820
* @bferd made their first contribution in https://github.com/mealie-recipes/mealie/pull/7931

# 🍴🍴🍴🍴🍴🍴