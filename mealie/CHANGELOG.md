# 🍴🍴🍴🍴🍴🍴

With the popularity of agentic AI, pull requests are popping and the contributors list keeps growing! Lots of exciting features and bug fixes in this release, and it's only been a week since the last one. Thanks to all our contributors, new and old!

## 🎉 Highlights

- The food seed data has been overhauled. Foods now properly link to labels and are closely coupled (i.e. when you seed foods, you also get their labels). They've also been slimmed down dramatically (>2,000 down to about 500) and cleaned up (typos, nonsense foods, etc.). New instances should have a much better start. Languages which don't use plurals in recipe managers (e.g. Korean) will also not seed plural food data.

- You can now drag and drop images directly from websites into your recipe instructions. Previously you'd have to download them first, but now Mealie will handle all that for you.

- We've upgraded to Python 3.14. For all users, you should see some marginal improvements to backend performance. For embedded users (e.g. through Home Assistant): if you were having issues with auth (such as being logged out all the time) we now implement [CHIPS](https://developer.mozilla.org/en-US/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) which should help!

## ✨ New features

- feat: filter cookbooks by food label @Xyolyp (#8385)
- feat: shopping list condensed view @kylerk (#8402)
- feat: refactor, reduce, and repair food seed data @hay-kot (#8482)
- feat: support drag-and-drop images from web @michael-genson (#8493)
- feat: ignore plurals when they're not translated @michael-genson (#8516)
- feat: use partitioned cookies to support embedded auth @michael-genson (#8522)

## 🐛 Bug fixes

- fix: add explicitly selected on-hand ingredients to the shopping list @chiliec (#8441)
- fix: show nutrition values with units in editor @justadityaraj (#8209)
- fix: allow SMTP encryption without authentication @justadityaraj (#8210)
- fix: labels get-by-id returns 404 instead of 500 for missing id @bferd (#8227)
- fix: correct type mismatches in ShoppingListItem and RecipeDataAliasManagerDialog @deeumiya-huang (#8355)
- fix: discard alias edits when the alias manager dialog is cancelled @chiliec (#8383)
- fix: import recipe notes from Paprika archives @lotusk (#8384)
- fix: use relative redirects for SPA directory routes @lotusk (#8410)
- fix: clamp recipe finder missing item limits @YibingZhang325 (#8239)
- fix: default the recipe name when an AI import returns a blank one @adman234 (#8343)
- fix: reject whitespace-only recipe comments @chiliec (#8295)
- fix: Exporting using ZIP file results in empty fields @xiaofang2016 (#8083)
- fix: localize meal plan rule summaries and notifications @Frank-Ping (#8102)
- fix: restore household in recipe context menu @derekdiliu (#8446)
- fix: admin unable to edit recipes in other households (#7810) @bferd (#8018)
- fix: show registration API error messages @YibingZhang325 (#8103)
- fix: support FB share URLs with redirecting @xiaofang2016 (#8443)
- fix: report image upload failures instead of failing silently @henry1113nz (#8437)
- fix: set original_text for nlp and brute parsed ingredients @chiliec (#8458)
- fix: clarify migrations are for other applications, not Mealie upgrades @henry1113nz (#8289)
- fix: allow non-ASCII characters in SMTP credentials @lotusk (#8397)
- fix: align ingredient checkbox and text to top baseline @GerbenJavado (#8457)

## 🧰 Maintenance

<details>
<summary>12 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#8440)
- chore(l10n): New Crowdin updates @hay-kot (#8449)
- chore(l10n): New Crowdin updates @hay-kot (#8456)
- chore(l10n): New Crowdin updates @hay-kot (#8462)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8467)
- chore: migrate documentation from MkDocs to Zensical @hay-kot (#7716)
- chore(l10n): New Crowdin updates @hay-kot (#8476)
- chore: speed up the backend test suite @hay-kot (#8477)
- chore: speed up the PR CI image build and job setup @hay-kot (#8478)
- chore(l10n): New Crowdin updates @hay-kot (#8492)
- chore(l10n): New Crowdin updates @hay-kot (#8523)
- chore(l10n): New Crowdin updates @hay-kot (#8533)
</details>

## 📚 Documentation

- docs: remove Netlify deployment @hay-kot (#8471)

## 🔨 Internal development

- dev: Remove sponsor option from feature request discussion template. @michael-genson (#8474)
- dev: run tests in parallel with pytest-xdist @bestxmg (#8473)
- dev: upgrade to Python 3.14 @michael-genson (#8521)
- dev: fix household mismatch in test @michael-genson (#8526)

## ⬆️ Dependency updates

<details>
<summary>21 changes</summary>

- fix(deps): update dependency tzdata to v2026.4 @[renovate[bot]](https://github.com/apps/renovate) (#8438)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8321)
- chore(deps): update dependency coverage to v7.16.1 @[renovate[bot]](https://github.com/apps/renovate) (#8453)
- fix(deps): update dependency uvicorn to v0.53.0 @[renovate[bot]](https://github.com/apps/renovate) (#8459)
- chore(deps): update dependency httpx2 to v2.13.0 @[renovate[bot]](https://github.com/apps/renovate) (#8463)
- fix(deps): update dependency sqlalchemy to v2.0.53 @[renovate[bot]](https://github.com/apps/renovate) (#8465)
- fix(deps): update dependency openai to v3.14.0 @[renovate[bot]](https://github.com/apps/renovate) (#8466)
- chore(deps): update dependency zensical to v0.0.62 @[renovate[bot]](https://github.com/apps/renovate) (#8475)
- fix(deps): update dependency sqlalchemy to v2.0.54 @[renovate[bot]](https://github.com/apps/renovate) (#8480)
- fix(deps): update dependency openai to v3.14.1 @[renovate[bot]](https://github.com/apps/renovate) (#8484)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8485)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8486)
- fix(deps): update dependency python-ldap to v3.4.8 @[renovate[bot]](https://github.com/apps/renovate) (#8495)
- chore(deps): update dependency ruff to v0.16.8 @[renovate[bot]](https://github.com/apps/renovate) (#8501)
- fix(deps): update dependency openai to v3.15.0 @[renovate[bot]](https://github.com/apps/renovate) (#8508)
- fix(deps): update dependency openai to v3.16.0 @[renovate[bot]](https://github.com/apps/renovate) (#8518)
- fix(deps): update dependency openai to v3.16.1 @[renovate[bot]](https://github.com/apps/renovate) (#8520)
- fix(deps): update dependency python-slugify to v9.1.0 @[renovate[bot]](https://github.com/apps/renovate) (#8525)
- fix(deps): update dependency openai to v3.16.2 @[renovate[bot]](https://github.com/apps/renovate) (#8524)
- chore(deps): update dependency zensical to v0.0.63 @[renovate[bot]](https://github.com/apps/renovate) (#8534)
- chore(deps): update node.js to 64af381 @[renovate[bot]](https://github.com/apps/renovate) (#8535)
</details>

## 🙏 New Contributors

* @xiaofang2016 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8083
* @Frank-Ping made their first contribution in https://github.com/mealie-recipes/mealie/pull/8102
* @kylerk made their first contribution in https://github.com/mealie-recipes/mealie/pull/8402
* @GerbenJavado made their first contribution in https://github.com/mealie-recipes/mealie/pull/8457

# 🍴🍴🍴🍴🍴🍴