# 🍴🍴🍴🍴🍴🍴

## 🎉 Highlights

- **Security fixes.** This release fixes a batch of security issues, mostly around data access between groups and households, private recipe visibility on public pages, password reset links, and oversized uploads. We recommend everyone update. Security advisories with details will follow shortly after the release.
- **Export to PDF.** You can now export recipes and cookbooks as PDFs, right from the recipe menu or a cookbook page. (#9060)
- **Days view in the meal planner.** A new view lets you plan day by day, next to the existing week view. (#9087)
- **Cleaner AI imports.** AI recipe imports now produce tidier notes and more complete instructions. (#9132, #9133)
- **Faster large lists.** The recipe list, large list endpoints, and the timeline do far less work, which makes big collections noticeably quicker. (#9055, #9118, #9119)
- **Things to know when upgrading:**
  - Request bodies are now capped by `MAX_UPLOAD_SIZE_MB` (default `1024`). Larger uploads, such as big migrations or backups, return a 413 until you raise it. (#9116)
  - Password reset links now expire after `PASSWORD_RESET_TOKEN_TIME` hours (default `1`). (#9045)
  - New `APPRISE_ALLOWED_SCHEMAS` setting limits which notification services notifiers can use. (#9052)
  - The recipe API no longer returns `cookTime`. The upgrade moves any existing values into `performTime`, which the UI already shows as "Cook Time", and older clients can still send `cookTime`. (#9011)


## ✨ New features

- feat: export recipes and cookbooks to PDF @hay-kot (#9060)
- feat: add a days view to the meal planner @michael-genson (#9087)
- feat: share one recipe filter field list across cookbooks, meal plan rules and the recipe finder @Xyolyp (#8592)
- feat: add gallery navigation to recipe image lightbox @bferd (#8450)
- feat: add markdown support to cookbook page description @jd-567 (#8700)
- feat: add a temporary share link merge field to recipe actions @Juice-de-Orange (#8895)
- feat: Remove extra noise in AI-imported notes @michael-genson (#9133)
- feat: Enrich instructions during AI recipe import @michael-genson (#9132)

## 🐛 Bug fixes

- fix: convert sodium and cholesterol written as grams to milligrams @kevin9327 (#8956)
- fix: reject comments on recipes outside the caller's group @hay-kot (#8966)
- fix: keep updates from moving rows to another group or household @hay-kot (#8965)
- fix: reject shopping list writes that target another household's list @hay-kot (#8968)
- fix: reject meal plan entries that use a recipe from another group @hay-kot (#8967)
- fix: restrict timeline event changes to the author or an admin @hay-kot (#8969)
- fix: enforce explore visibility outside the user query filter @hay-kot (#8974)
- fix: keep error toasts open for 10 seconds @Xyolyp (#8982)
- fix: pass column aliases when filtering recipe suggestions @ben-bacs (#8984)
- fix: apply visibility rules to SPA recipe metadata @hay-kot (#8997)
- fix: check recipe update permission in bulk actions and asset routes @hay-kot (#8998)
- fix: validate email address on the user profile form @hay-kot (#9009)
- fix: keep line breaks inside imported recipe steps @hay-kot (#9010)
- fix: add a scheme to the OIDC redirect URI when BASE_URL has none @hay-kot (#9012)
- fix: drop the recipe cook_time column and use perform_time @hay-kot (#9011)
- fix: create new recipes without placeholder ingredient and step @hay-kot (#9041)
- fix: keep linked ingredients and notes when merging instruction steps @hay-kot (#9043)
- fix: keep AI provider secrets bound to their base URL @hay-kot (#9044)
- fix: prevent shopping list title from overflowing actions on overview page @GerbenJavado (#9030)
- fix: scope auto_init related-row lookups to the caller group @hay-kot (#8972)
- fix: speed up the recipe list query @hay-kot (#9055)
- fix: add APPRISE_ALLOWED_SCHEMAS and document notifier SSRF posture @hay-kot (#9052)
- fix: filter the explore page on a recipe card tag click @hay-kot (#9059)
- fix: expire password reset links and send reset email in background @hay-kot (#9045)
- fix: re-disable autocapitalization on shopping list entry @michael-genson (#9073)
- fix: Restore full "save label" button size @michael-genson (#9074)
- fix: parse dialog background color @michael-genson (#9075)
- fix: typos in Dockerfile and recipe page comment @Evico85 (#9070)
- fix: focus newly added ingredient row in recipe editor @gustaf-a (#8741)
- fix: show that nutrition values are per serving @hay-kot (#9081)
- fix: resolve recipe organizers by slug when the name collides @Yi-111-a (#8600)
- fix: load shared recipes without cartesian joins @fannta1990 (#9111)
- fix: escalate to FlareSolverr when a fetched page yields no recipe @hussnainahmedd (#8631)
- fix: keep queued shopping list changes when a write fails @LembkeM (#9018)
- fix: show an error when a request fails before it reaches Mealie @Xyolyp (#8981)
- fix: keep recipe description inside the info card on mobile @vulinh1704 (#8879)
- fix: ignore case when checking for an existing alias @wrobelda (#9025)
- fix: send transcription prompt as user message in chat fallback @cobalt-kite12 (#8843)
- fix: preserve recipe rename navigation when clearing optional query flags @Busy-SweetPotato (#8834)
- fix: preserve commas in quoted query filter values @ZanLexisz (#8990)
- fix: limit upload size and archive extraction in imports @hay-kot (#9116)
- fix: reduce queries and event loop blocks in large list endpoints @hay-kot (#9118)
- fix: stop the timeline from fetching every recipe on scroll @hay-kot (#9119)
- fix: block stored HTML injection and lint against raw HTML sinks @hay-kot (#9129)
- fix: adapt label text colour to the label background @Yi-111-a (#8805)

## 🧰 Maintenance

<details>
<summary>26 changes</summary>

- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8931)
- chore(l10n): New Crowdin updates @hay-kot (#8933)
- chore(l10n): New Crowdin updates @hay-kot (#8938)
- chore(l10n): New Crowdin updates @hay-kot (#8947)
- chore(l10n): New Crowdin updates @hay-kot (#8960)
- chore(l10n): New Crowdin updates @hay-kot (#8975)
- chore(l10n): New Crowdin updates @hay-kot (#8994)
- chore(l10n): New Crowdin updates @hay-kot (#9005)
- chore(l10n): New Crowdin updates @hay-kot (#9017)
- chore(l10n): New Crowdin updates @hay-kot (#9031)
- chore: use mise.toml as the one source for toolchain versions @hay-kot (#9039)
- chore: name schemas by stage and make response types strict @hay-kot (#9046)
- chore(l10n): New Crowdin updates @hay-kot (#9056)
- chore: replace Taskfile with mise tasks @hay-kot (#9040)
- chore: pin GitHub Actions to commit SHAs and run mypy once @hay-kot (#9061)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#9065)
- chore(l10n): New Crowdin updates @hay-kot (#9067)
- chore: warm the E2E image cache from mealie-next @hay-kot (#9062)
- chore(l10n): New Crowdin updates @hay-kot (#9083)
- chore(l10n): New Crowdin updates @hay-kot (#9091)
- chore(l10n): New Crowdin updates @hay-kot (#9099)
- chore(auto): Update pre-commit hooks @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8948)
- chore(l10n): New Crowdin updates @hay-kot (#9120)
- chore(l10n): New Crowdin updates @hay-kot (#9122)
- chore(l10n): New Crowdin updates @hay-kot (#9135)
- chore(l10n): New Crowdin updates @hay-kot (#9139)
</details>

## 📚 Documentation

- docs: correct typo 'inevitable' -> 'inevitably' @ningkexin96 (#8934)
- docs: move contributor guide to CONTRIBUTING.md @hay-kot (#9037)
- docs: fix OIDC_USER_GROUP description and OIDC group links @ZainnQureshii (#9078)
- docs: fix old FAQ reference links @michael-genson (#9115)

## 🔨 Internal development

- dev: add Playwright MCP and a frontend e2e skill for agents @hay-kot (#9038)
- dev: Add commenting guidelines for LLM contributors @michael-genson (#9077)
- dev: fix renovate auto-approvals @michael-genson (#9107)
- dev: Expand CONTRIBUTING.md writing style @michael-genson (#9109)

## ⬆️ Dependency updates

<details>
<summary>61 changes</summary>

- fix(deps): update dependency yt-dlp to v2026.10.26 @[renovate[bot]](https://github.com/apps/renovate) (#8930)
- chore(deps): update dependency ruff to v0.17.3 @[renovate[bot]](https://github.com/apps/renovate) (#8932)
- fix(deps): update dependency openai to v3.40.0 @[renovate[bot]](https://github.com/apps/renovate) (#8937)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8943)
- chore(deps): update dependency pytest to v9.2.0 @[renovate[bot]](https://github.com/apps/renovate) (#8942)
- fix(deps): update dependency pydantic-settings to v2.16.2 @[renovate[bot]](https://github.com/apps/renovate) (#8957)
- fix(deps): update dependency tzdata to v2026.6 @[renovate[bot]](https://github.com/apps/renovate) (#8958)
- fix(deps): update dependency paho-mqtt to v2 @[renovate[bot]](https://github.com/apps/renovate) (#8959)
- chore(deps): update dependency mypy to v2.4.1 @[renovate[bot]](https://github.com/apps/renovate) (#8963)
- chore(deps): update node.js to e7add2a @[renovate[bot]](https://github.com/apps/renovate) (#8888)
- fix(deps): update dependency openai to v3.41.0 @[renovate[bot]](https://github.com/apps/renovate) (#8970)
- chore(deps): update node.js to e7add2a @[renovate[bot]](https://github.com/apps/renovate) (#8971)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20261029 @[renovate[bot]](https://github.com/apps/renovate) (#8978)
- fix(deps): update dependency pydantic to v2.14.2 @[renovate[bot]](https://github.com/apps/renovate) (#8983)
- chore(deps): update dependency types-pyyaml to v6.0.12.20261030 @[renovate[bot]](https://github.com/apps/renovate) (#8988)
- chore(deps): update dependency types-requests to v2.33.0.20261030 @[renovate[bot]](https://github.com/apps/renovate) (#8989)
- fix(deps): update dependency openai to v3.42.0 @[renovate[bot]](https://github.com/apps/renovate) (#8996)
- chore(deps): update dependency zensical to v0.0.74 @[renovate[bot]](https://github.com/apps/renovate) (#8995)
- fix(deps): update dependency python-multipart to v0.0.33 @[renovate[bot]](https://github.com/apps/renovate) (#9013)
- fix(deps): update dependency python-dateutil to v4 @[renovate[bot]](https://github.com/apps/renovate) (#9022)
- chore(deps): update dependency pytest-asyncio to v1.4.1.post1 @[renovate[bot]](https://github.com/apps/renovate) (#9027)
- fix(deps): update dependency authlib to v1.9.2 @[renovate[bot]](https://github.com/apps/renovate) (#9028)
- fix(deps): update dependency openai to v3.42.1 @[renovate[bot]](https://github.com/apps/renovate) (#9029)
- chore(deps): update dependency pnpm to v12 @[renovate[bot]](https://github.com/apps/renovate) (#9048)
- chore(deps): update node to v26 @[renovate[bot]](https://github.com/apps/renovate) (#9049)
- chore(deps): update node.js to v26 @[renovate[bot]](https://github.com/apps/renovate) (#9058)
- chore(deps): update dependency pipx:semgrep to v1.183.0 @[renovate[bot]](https://github.com/apps/renovate) (#9057)
- chore(deps): update github-actions @[renovate[bot]](https://github.com/apps/renovate) (#9063)
- chore(deps): update github-actions (major) @[renovate[bot]](https://github.com/apps/renovate) (#9064)
- chore(deps): update dependency uv to v0.13.7 @[renovate[bot]](https://github.com/apps/renovate) (#9066)
- fix(deps): update dependency authlib to v1.9.3 @[renovate[bot]](https://github.com/apps/renovate) (#9069)
- chore(deps): update dependency types-pyyaml to v6.0.12.20261103 @[renovate[bot]](https://github.com/apps/renovate) (#9068)
- chore(deps): update dependency coverage to v7.17.1 @[renovate[bot]](https://github.com/apps/renovate) (#9071)
- chore(deps): update mise to v2026.11.0 @[renovate[bot]](https://github.com/apps/renovate) (#9072)
- fix(deps): update dependency sqlalchemy to v2.1.7 @[renovate[bot]](https://github.com/apps/renovate) (#9084)
- fix(deps): update dependency openai to v3.44.0 @[renovate[bot]](https://github.com/apps/renovate) (#9085)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#9086)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#9088)
- fix(deps): update dependency openai to v3.45.0 @[renovate[bot]](https://github.com/apps/renovate) (#9090)
- fix(deps): update dependency sqlalchemy to v2.1.8 @[renovate[bot]](https://github.com/apps/renovate) (#9089)
- fix(deps): update dependency authlib to v1.9.4 @[renovate[bot]](https://github.com/apps/renovate) (#9093)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20261104 @[renovate[bot]](https://github.com/apps/renovate) (#9092)
- chore(deps): update dependency coverage to v7.17.2 @[renovate[bot]](https://github.com/apps/renovate) (#9100)
- chore(deps): update mise to v2026.11.1 @[renovate[bot]](https://github.com/apps/renovate) (#9101)
- chore(deps): update dependency pnpm to v12.18.0 @[renovate[bot]](https://github.com/apps/renovate) (#9047)
- fix(deps): update dependency openai to v3.46.0 @[renovate[bot]](https://github.com/apps/renovate) (#9102)
- fix(deps): update dependency paho-mqtt to v2.2.0 @[renovate[bot]](https://github.com/apps/renovate) (#9103)
- fix(deps): update dependency pydantic to v2.14.3 @[renovate[bot]](https://github.com/apps/renovate) (#9104)
- chore(deps): update mise to v2026.11.2 @[renovate[bot]](https://github.com/apps/renovate) (#9108)
- chore(deps): pin dependencies @[renovate[bot]](https://github.com/apps/renovate) (#9079)
- chore(deps): update github-actions (major) @[renovate[bot]](https://github.com/apps/renovate) (#9080)
- chore(deps): update dependency zensical to v0.1.0 @[renovate[bot]](https://github.com/apps/renovate) (#9110)
- chore(deps): update dependency ruff to v0.17.4 @[renovate[bot]](https://github.com/apps/renovate) (#9112)
- fix(deps): update dependency authlib to v1.9.5 @[renovate[bot]](https://github.com/apps/renovate) (#9113)
- chore(deps): update dependency pipx:semgrep to v1.184.0 @[renovate[bot]](https://github.com/apps/renovate) (#9114)
- chore(deps): update mise to v2026.11.3 @[renovate[bot]](https://github.com/apps/renovate) (#9123)
- fix(deps): update dependency fastapi to v0.162.1 @[renovate[bot]](https://github.com/apps/renovate) (#9140)
- chore(deps): pin jdx/mise-action action to b44d12e @[renovate[bot]](https://github.com/apps/renovate) (#9130)
- fix(deps): update dependency ingredient-parser-nlp to v2.9.2 @[renovate[bot]](https://github.com/apps/renovate) (#9128)
- fix(deps): update dependency fastapi to v0.162.2 @[renovate[bot]](https://github.com/apps/renovate) (#9144)
- chore(deps): update mise to v2026.11.4 @[renovate[bot]](https://github.com/apps/renovate) (#9143)
</details>

## 🙏 New Contributors

!!! Need to source this from GitHub's auto generated release notes !!!

# 🍴🍴🍴🍴🍴🍴
