# 🍴🍴🍴🍴🍴🍴

This release comes with an overhaul to Mealie's internal auth, making it more inline with what you generally expect, specifically with "Remember Me" and `TOKEN_TIME`.

- Tokens now refresh automatically before they expire. As long as you use the app before your token expires, it will automatically be refreshed with a new token. What this means for users is that you won't be logged-out mid-session, and you shouldn't have to log-in periodically unless you haven't used the app in some time (see `TOKEN_TIME` changes).
- Once you close your tab/browser/session, you will be logged-out. To stay logged-in between sessions, check "Remember Me" when logging in. Since this is the _opposite_ behavior of how logins worked before this change, "Remember Me" is checked by default to help ease the learning curve.
- `TOKEN_TIME` now defines how long a session will last before expiring. Many instances previously set this value arbitrarily high to prevent users from being logged-out. Now with auto-refresh this is unnecessary, and can be substantially lowered (we recommend turning this down to at most 168 hours, i.e. one week).

#### ⚠️⚠️⚠️ IMPORTANT BREAKING CHANGE FOR APP DEVELOPERS ⚠️⚠️⚠️
`GET /api/auth/refresh` has been removed, and is instead now a `POST` API.

## 🎉 Highlights

- Overhauled internal auth (see above)
- You can now delete unused organizers from the data management page
- You can now leverage a recipe's rating in meal plan rules, cookbooks, and the recipe finder
- Clicking on a recipe's image or asset will show the the fully expanded image
- The Meal Planner UI has been reworked to make it easier to use

## 🚨 Breaking changes

- feat: add token refresh, fix remember me, and fix Safari token expiration @michael-genson (#8200)

## ✨ New features

- feat: add token refresh, fix remember me, and fix Safari token expiration @michael-genson (#8200)
- feat: organizer improvements — recipeCount, merge endpoint, delete unused UI @bferd (#7829)
- feat: Shopping list focus polishes @miah120 (#7890)
- feat: add rating as a query filter field @dominikrein (#7966)
- feat: click-to-expand lightbox for recipe hero image and asset images @bferd (#7933)
- feat: improve registration UX by coloring Next button based on form validity @Luna-81 (#8233)
- feat: Improve recipe parsing ui @miah120 (#7984)
- feat: rank exact and prefix matches above substring matches in food search @dyllan500 (#7781)
- feat: Meal Planner UI Improvements @miah120 (#7946)
- feat: add autofocus to RecipeSelector input field @torbenvanassche (#8262)

## 🐛 Bug fixes

- fix: fallback to regular HTML if video download fails @michael-genson (#8203)
- fix: Improve keyboard navigation of search results @mbianucci (#7869)
- fix: allow deleting a user who both rated and favorited a recipe (#8121) @chiliec (#8131)
- fix: wrap timeline event subjects @YibingZhang325 (#8218)
- fix: Account for on hand items when adding a recipe to a shopping list @miah120 (#7912)
- fix: close long-lived token auth transaction @stieglma (#7897)
- fix: stamp timeline events at request time, not process start @alexander-wenzel-dev (#7896)
- fix: repoint shopping list items when merging a food or unit @henry1113nz (#8146)
- fix: parse day- and week-only ISO 8601 durations in recipe time cleaner @TowyTowy (#7895)
- fix: strip trailing footnote markers from parsed ingredient names @henry1113nz (#8145)
- fix: hide "No Label" heading when copying an unlabeled shopping list @brent20 (#7905)
- fix: Add bottom padding to prevent fab overlapping content @miah120 (#7940)
- fix: resize images before AI import to avoid provider size limits @chiliec (#8241)
- fix: Keep instruction sticky in ingredient linker @miah120 (#7925)
- fix: skip image request when a recipe has no image @henry1113nz (#8075)
- fix: preserve source language in AI recipe parsing @x0x0b (#8236)
- fix: refetch organizer data pages on visit to avoid stale data @lotusk (#8260)

## 🧰 Maintenance

<details>
<summary>14 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#8171)
- chore(l10n): New Crowdin updates @hay-kot (#8206)
- chore(l10n): New Crowdin updates @hay-kot (#8207)
- chore(l10n): New Crowdin updates @hay-kot (#8212)
- chore(l10n): New Crowdin updates @hay-kot (#8216)
- chore(l10n): New Crowdin updates @hay-kot (#8217)
- chore(l10n): New Crowdin updates @hay-kot (#8219)
- chore(l10n): New Crowdin updates @hay-kot (#8229)
- chore(l10n): New Crowdin updates @hay-kot (#8234)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8244)
- chore(l10n): New Crowdin updates @hay-kot (#8237)
- chore(l10n): New Crowdin updates @hay-kot (#8253)
- chore(l10n): New Crowdin updates @hay-kot (#8257)
- chore(l10n): New Crowdin updates @hay-kot (#8261)
</details>

## 📚 Documentation

- docs: Add advice when backup is successful but keeps user logged out @qlassalle (#7919)

## 🔨 Internal development

- dev: don't clobber devEngines.packageManager.version on release bump @lotusk (#8258)
- dev: fix mangled pnpm version @michael-genson (#8264)

## ⬆️ Dependency updates

<details>
<summary>10 changes</summary>

- fix(deps): update dependency openai to v3.3.1 @[renovate[bot]](https://github.com/apps/renovate) (#8201)
- fix(deps): update dependency yt-dlp to v2026.8.19 @[renovate[bot]](https://github.com/apps/renovate) (#8205)
- fix(deps): update dependency apprise to v1.13.0 @[renovate[bot]](https://github.com/apps/renovate) (#8208)
- chore(deps): update dependency ruff to v0.16.4 @[renovate[bot]](https://github.com/apps/renovate) (#8211)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8248)
- fix(deps): update dependency openai to v3.4.0 @[renovate[bot]](https://github.com/apps/renovate) (#8251)
- fix(deps): update dependency openai to v3.5.0 @[renovate[bot]](https://github.com/apps/renovate) (#8252)
- chore(deps): update dependency ruff to v0.16.5 @[renovate[bot]](https://github.com/apps/renovate) (#8255)
- chore(deps): update node.js to be23f54 @[renovate[bot]](https://github.com/apps/renovate) (#8256)
- fix(deps): update dependency pydantic to v2.13.5 @[renovate[bot]](https://github.com/apps/renovate) (#8263)
</details>

## 🙏 New Contributors

* @mbianucci made their first contribution in https://github.com/mealie-recipes/mealie/pull/7869
* @chiliec made their first contribution in https://github.com/mealie-recipes/mealie/pull/8131
* @YibingZhang325 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8218
* @stieglma made their first contribution in https://github.com/mealie-recipes/mealie/pull/7897
* @qlassalle made their first contribution in https://github.com/mealie-recipes/mealie/pull/7919
* @henry1113nz made their first contribution in https://github.com/mealie-recipes/mealie/pull/8146
* @dominikrein made their first contribution in https://github.com/mealie-recipes/mealie/pull/7966
* @brent20 made their first contribution in https://github.com/mealie-recipes/mealie/pull/7905
* @dyllan500 made their first contribution in https://github.com/mealie-recipes/mealie/pull/7781
* @x0x0b made their first contribution in https://github.com/mealie-recipes/mealie/pull/8236
* @torbenvanassche made their first contribution in https://github.com/mealie-recipes/mealie/pull/8262

# 🍴🍴🍴🍴🍴🍴