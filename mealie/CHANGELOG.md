# 🎃🎃🎃🎃🎃🎃

Happy Halloween! Hopefully everyone's got some spooky recipes to try out today.

## 🎉 Highlights

- You can now fully customize AI prompts in-app, with far greater control. You can choose to append to existing prompts, completely replace prompts, and add custom global instructions which are added to _every_ prompt which produces recipe data. The old `OPENAI_CUSTOM_PROMPT_DIR` env var has been removed, but if you had any custom prompts they will be imported into the new format automatically.
- Instructions can now have individual durations. This means you can specify a particular step takes "10 minutes", for example.
- Meal plan entries can now be created for the entire week, rather than a particular day/time. Great for when you know you're going to make something this week, but you're not sure when yet.
<img width="1000" alt="image" src="https://github.com/user-attachments/assets/63775091-9187-4362-9942-1a0ea99b4293" />


## ✨ New features

- feat: In-app AI prompt customization @michael-genson (#8736)
- feat: declare route permissions with a require() dependency @hay-kot (#8763)
- feat: enforce route permission helpers with semgrep in CI @hay-kot (#8769)
- feat: Sort recipes by total time @NutzerXY (#8692)
- feat: import a pasted Mealie recipe export with its full structure @Rouzax (#8651)
- feat: add centiliter to seeded ingredient units @Tibood (#8766)
- feat: Show recipe owner @michael-genson (#8823)
- feat: add OIDC_VERIFY_X509_STRICT setting and adjust SSL verification… @diepeterpan (#8715)
- feat: Instruction durations @granto (#8705)
- feat: weekly meal planning @michael-genson (#8836)
- feat: customize ical @michael-genson (#8909)
- feat: manage timeline event image @michael-genson (#8928)

## 🐛 Bug fixes

- fix: scope migration imports to the group and limit archive size @hay-kot (#8761)
- fix: restrict i18n locale lookup to bundled translation files @hay-kot (#8759)
- fix: require can_organize to manage units, tools, labels, recipe actions @hay-kot (#8783)
- fix: Un-approve Crowdin translations to allow community to vote on them @michael-genson (#8787)
- fix: load food/unit aliases with the page; index-friendly food filter @zf6fm64s8j-bit (#8675)
- fix: preserve recipe image when upload validation fails @YibingZhang325 (#8506)
- fix: keep servings and yield quantity when translating AI-imported recipes @LembkeM (#8636)
- fix: translate mealplan timeline event subjects by locale @Frank-Ping (#8664)
- fix: restore the 404 redirects for /r/ recipe links (Nuxt 3 error page) @mrhard9090 (#8568)
- fix: bump sqlalchemy @michael-genson (#8798)
- fix: Bump ingredient-parser-nlp @michael-genson (#8801)
- fix: show an error when a user lacks permission for an action @michael-genson (#8808)
- fix: show an error when a recipe asset upload is rejected @michael-genson (#8809)
- fix: accept the signed-in user's own username and email in validators @michael-genson (#8811)
- fix: switch `filter_by` statements to explicit expressions to properly resolve proxy attrs @michael-genson (#8814)
- fix: validate image type on recipe hero image upload @bferd (#8498)
- fix: reject an unrecognized DB_ENGINE instead of using SQLite @Yi-111-a (#8605)
- fix: set the cover image on recipes created from AI images @pcbeingused333 (#8739)
- fix: scale merged duplicate ingredients when adding a recipe to a shopping list @pcbeingused333 (#8764)
- fix: match multi-word foods when the brute parser splits off an unknown unit @gustaf-a (#8744)
- fix: report blocked recipe action targets instead of dropping them silently @Hellraiser28 (#8747)
- fix: Consistent spacing for recipe cards with/without tags @michael-genson (#8824)
- fix: Switch expired token delete to a batch delete @michael-genson (#8825)
- fix: don't copy file modes @NyCodeGHG (#8867)
- fix: require can_manage_household to manage notifiers and webhooks @hay-kot (#8885)
- fix: refresh OIDC avatars from stable URLs @nzyz995 (#8588)
- fix: listen on IPv4 and IPv6 by default @mvanhorn (#8569)
- fix: backfill missing AI provider settings @michael-genson (#8924)

## 🧰 Maintenance

<details>
<summary>25 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#8772)
- chore(l10n): New Crowdin updates @hay-kot (#8778)
- chore(l10n): New Crowdin updates @hay-kot (#8784)
- chore(l10n): New Crowdin updates @hay-kot (#8793)
- chore(l10n): New Crowdin updates @hay-kot (#8804)
- chore(l10n): New Crowdin updates @hay-kot (#8807)
- chore(l10n): New Crowdin updates @hay-kot (#8816)
- chore(l10n): New Crowdin updates @hay-kot (#8817)
- chore(l10n): New Crowdin updates @hay-kot (#8829)
- chore(l10n): New Crowdin updates @hay-kot (#8831)
- chore(l10n): New Crowdin updates @hay-kot (#8841)
- chore(l10n): New Crowdin updates @hay-kot (#8845)
- chore(l10n): New Crowdin updates @hay-kot (#8853)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8861)
- chore(l10n): New Crowdin updates @hay-kot (#8862)
- chore(l10n): New Crowdin updates @hay-kot (#8875)
- chore(l10n): New Crowdin updates @hay-kot (#8894)
- chore(l10n): New Crowdin updates @hay-kot (#8900)
- chore(l10n): New Crowdin updates @hay-kot (#8902)
- chore(l10n): New Crowdin updates @hay-kot (#8904)
- chore(l10n): New Crowdin updates @hay-kot (#8906)
- chore(l10n): New Crowdin updates @hay-kot (#8908)
- chore(l10n): New Crowdin updates @hay-kot (#8916)
- chore(l10n): New Crowdin updates @hay-kot (#8923)
- chore(auto): Update pre-commit hooks @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#8876)
</details>

## 📚 Documentation

- docs: encode the page URL in the import bookmarklet @michael-genson (#8810)

## 🔨 Internal development

- dev: check every declared route permission against real users @hay-kot (#8767)
- dev: Migrate backend CI/CD checks to match pre-commit @michael-genson (#8802)
- dev: fix test which relies on specific Crowdin translations @michael-genson (#8887)

## ⬆️ Dependency updates

<details>
<summary>54 changes</summary>

- chore(deps): update dependency zensical to v0.0.70 @[renovate[bot]](https://github.com/apps/renovate) (#8765)
- chore(deps): update dependency pre-commit to v4.7.0 @[renovate[bot]](https://github.com/apps/renovate) (#8771)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8786)
- fix(deps): update dependency openai to v3.31.0 @[renovate[bot]](https://github.com/apps/renovate) (#8791)
- fix(deps): update dependency authlib to v1.9.0 @[renovate[bot]](https://github.com/apps/renovate) (#8792)
- fix(deps): update dependency fastapi to v0.143.1 @[renovate[bot]](https://github.com/apps/renovate) (#8794)
- fix(deps): update dependency pydantic-settings to v2.16.0 @[renovate[bot]](https://github.com/apps/renovate) (#8795)
- fix(deps): update dependency authlib to v1.9.1 @[renovate[bot]](https://github.com/apps/renovate) (#8796)
- chore(deps): update node.js to 1407820 @[renovate[bot]](https://github.com/apps/renovate) (#8803)
- fix(deps): update dependency fastapi to v0.143.2 @[renovate[bot]](https://github.com/apps/renovate) (#8812)
- chore(deps): update dependency ruff to v0.17.1 @[renovate[bot]](https://github.com/apps/renovate) (#8815)
- fix(deps): update dependency fastapi to v0.143.3 @[renovate[bot]](https://github.com/apps/renovate) (#8820)
- chore(deps): update dependency zensical to v0.0.71 @[renovate[bot]](https://github.com/apps/renovate) (#8819)
- fix(deps): update dependency sqlalchemy to v2.1.5 @[renovate[bot]](https://github.com/apps/renovate) (#8827)
- fix(deps): update dependency openai to v3.32.0 @[renovate[bot]](https://github.com/apps/renovate) (#8828)
- fix(deps): update dependency openai to v3.33.0 @[renovate[bot]](https://github.com/apps/renovate) (#8830)
- fix(deps): update dependency openai to v3.34.0 @[renovate[bot]](https://github.com/apps/renovate) (#8839)
- fix(deps): update dependency fastapi to v0.143.5 @[renovate[bot]](https://github.com/apps/renovate) (#8846)
- fix(deps): update dependency fastapi to v0.146.0 @[renovate[bot]](https://github.com/apps/renovate) (#8850)
- chore(deps): update dependency httpx2 to v2.14.0 @[renovate[bot]](https://github.com/apps/renovate) (#8849)
- fix(deps): update dependency recipe-scrapers to v15.13.0 @[renovate[bot]](https://github.com/apps/renovate) (#8851)
- fix(deps): update dependency fastapi to v0.148.0 @[renovate[bot]](https://github.com/apps/renovate) (#8854)
- fix(deps): update dependency pint to v0.26.2 @[renovate[bot]](https://github.com/apps/renovate) (#8857)
- chore(deps): update dependency httpx2 to v2.15.1 @[renovate[bot]](https://github.com/apps/renovate) (#8858)
- fix(deps): update dependency fastapi to v0.150.0 @[renovate[bot]](https://github.com/apps/renovate) (#8860)
- chore(deps): update dependency setuptools to v84.2.0 @[renovate[bot]](https://github.com/apps/renovate) (#8859)
- fix(deps): update dependency fastapi to v0.151.0 @[renovate[bot]](https://github.com/apps/renovate) (#8863)
- fix(deps): update dependency pydantic-settings to v2.16.1 @[renovate[bot]](https://github.com/apps/renovate) (#8865)
- fix(deps): update dependency fastapi to v0.152.0 @[renovate[bot]](https://github.com/apps/renovate) (#8866)
- fix(deps): update dependency openai to v3.35.1 @[renovate[bot]](https://github.com/apps/renovate) (#8842)
- fix(deps): update dependency pillow to v13 [security] @[renovate[bot]](https://github.com/apps/renovate) (#8822)
- fix(deps): update dependency fastapi to v0.154.0 @[renovate[bot]](https://github.com/apps/renovate) (#8870)
- chore(deps): update dependency setuptools to v84.2.1 @[renovate[bot]](https://github.com/apps/renovate) (#8871)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8873)
- fix(deps): update dependency fastapi to v0.156.4 @[renovate[bot]](https://github.com/apps/renovate) (#8872)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8874)
- chore(deps): update dependency types-python-dateutil to v2.9.0.20261021 @[renovate[bot]](https://github.com/apps/renovate) (#8877)
- fix(deps): update dependency openai to v3.36.0 @[renovate[bot]](https://github.com/apps/renovate) (#8883)
- fix(deps): update dependency sqlalchemy to v2.1.6 @[renovate[bot]](https://github.com/apps/renovate) (#8884)
- fix(deps): update dependency yt-dlp to v2026.10.21 @[renovate[bot]](https://github.com/apps/renovate) (#8889)
- fix(deps): update dependency openai to v3.36.1 @[renovate[bot]](https://github.com/apps/renovate) (#8891)
- fix(deps): update dependency alembic to v1.20.1 @[renovate[bot]](https://github.com/apps/renovate) (#8890)
- fix(deps): update dependency python-dateutil to v3 @[renovate[bot]](https://github.com/apps/renovate) (#8892)
- chore(deps): update dependency ruff to v0.17.2 @[renovate[bot]](https://github.com/apps/renovate) (#8896)
- chore(deps): update dependency coverage to v7.17.0 @[renovate[bot]](https://github.com/apps/renovate) (#8897)
- fix(deps): update dependency openai to v3.37.0 @[renovate[bot]](https://github.com/apps/renovate) (#8898)
- chore(deps): update dependency zensical to v0.0.72 @[renovate[bot]](https://github.com/apps/renovate) (#8901)
- chore(deps): update dependency httpx2 to v2.16.0 @[renovate[bot]](https://github.com/apps/renovate) (#8881)
- fix(deps): update dependency apprise to v2.1.0 @[renovate[bot]](https://github.com/apps/renovate) (#8905)
- fix(deps): update dependency fastapi to v0.162.0 @[renovate[bot]](https://github.com/apps/renovate) (#8880)
- chore(deps): update dependency pytest-asyncio to v1.4.1 @[renovate[bot]](https://github.com/apps/renovate) (#8910)
- chore(deps): update dependency zensical to v0.0.73 @[renovate[bot]](https://github.com/apps/renovate) (#8925)
- fix(deps): update dependency openai to v3.38.0 @[renovate[bot]](https://github.com/apps/renovate) (#8926)
- fix(deps): update dependency openai to v3.39.0 @[renovate[bot]](https://github.com/apps/renovate) (#8929)
</details>

## 🙏 New Contributors

* @LembkeM made their first contribution in https://github.com/mealie-recipes/mealie/pull/8636
* @NutzerXY made their first contribution in https://github.com/mealie-recipes/mealie/pull/8692
* @Yi-111-a made their first contribution in https://github.com/mealie-recipes/mealie/pull/8605
* @pcbeingused333 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8739
* @gustaf-a made their first contribution in https://github.com/mealie-recipes/mealie/pull/8744
* @Hellraiser28 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8747
* @Tibood made their first contribution in https://github.com/mealie-recipes/mealie/pull/8766
* @diepeterpan made their first contribution in https://github.com/mealie-recipes/mealie/pull/8715
* @granto made their first contribution in https://github.com/mealie-recipes/mealie/pull/8705
* @NyCodeGHG made their first contribution in https://github.com/mealie-recipes/mealie/pull/8867
* @mvanhorn made their first contribution in https://github.com/mealie-recipes/mealie/pull/8569

# 🎃🎃🎃🎃🎃🎃
ttps://github.com/mealie-recipes/mealie/compare/v3.29.0...v3.30.0