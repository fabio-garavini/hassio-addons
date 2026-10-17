# 🍴🍴🍴🍴🍴🍴

Another big update packed with hotly-requested features and tons of bug fixes. Grab it while it's hot!

## 🎉 Highlights

- You can now automatically convert recipes on the fly between metric and Imperial units:
<img width="585" height="348" alt="image" src="https://github.com/user-attachments/assets/a377fda4-6a96-4db9-920a-72ef0412f916" />

---

- Recipe times are now structured. This enables better searches (such as looking for recipes you can make within 30 minutes):
<img width="1021" height="245" alt="image" src="https://github.com/user-attachments/assets/332ac2eb-9e06-4062-b789-f15efdf094e1" />

---

- Shopping list entry is vastly simplified: you can type _anything_ into the simple entry box and Mealie will suggest items from your food store. If there's a match, you will add the food; if not, you'll add the exact term as a note. No more clunky entry where you have to guess where you need to type something:
<img width="998" height="241" alt="image" src="https://github.com/user-attachments/assets/0ae83a69-5b94-4c78-bb04-b7224ec51d0e" />
<img width="961" height="288" alt="image" src="https://github.com/user-attachments/assets/985d01b2-8c53-4d6f-99f7-bd6e0cac4907" />

---

- You can now subscribe to your meal planner as an iCal calendar feed. Once turned on, anyone with the iCal link can subscribe without any additional auth. This means you can add your meal plans to your favorite calendar app (Google Calendar, Apple Calendar, Home Assistant, etc.):
<img width="3980" height="2132" alt="image" src="https://github.com/user-attachments/assets/a32f9324-673b-427a-9cba-45ee984107fd" />

---

- We now support auth through a reverse proxy. [Check out the docs](https://mealie.io/documentation/getting-started/installation/backend-config/#reverse-proxy-auth) on how to configure this for your instance.
- We've expanded our theme customization to include branding, allowing you to set a custom name and custom logo for your instance. [Check out the docs](https://mealie.io/documentation/getting-started/installation/backend-config/#branding) for more info.

## ✨ New features

- feat: convert between metric/imperial units @michael-genson (#8292)
- feat: search the items on a shopping list @PulfordJ (#8275)
- feat: structured recipe times @michael-genson (#8539)
- feat: Filter by recipe time on cookbooks, meal plan rules, and recipe finder @michael-genson (#8561)
- feat: add missing value options to recipe filters @feilongcheng (#8454)
- feat: organizer improvements for foods, tools, and labels @bferd (#8225)
- feat: support public (secretless) native OIDC clients for Google and Microsoft @DmitriiSer (#8653)
- feat: add QR code to recipe share dialog @elliot-ultra (#8558)
- feat: meal plan serving scale and shopping list quick add @nightvisi0n (#8701)
- feat: Simpler shopping list entry @michael-genson (#8719)
- feat: admin permissions UI consistency and tooltips @bferd (#8429)
- feat: reverse proxy auth @danepowell (#8183)
- feat: support customizing app icon, favicon, banner title, and HTML title @jspeyside (#8078)
- feat: Subscribe to the meal plan as an iCal calendar feed @anandghegde (#8461)

## 🐛 Bug fixes

- fix: allow re-importing a recipe zip into the same instance @Rouzax (#8468)
- fix: restore nullable webhook scheduled_time under Python 3.14 @michael-genson (#8537)
- fix: exclude development dependencies from production exports @kquinsland01 (#8538)
- fix: preserve identity fields and fix slug when saving JSON-edited recipes @audiophonicz (#7785)
- fix: show API validation errors @YibingZhang325 (#8230)
- fix: keep share dialog buttons on screen on narrow screens @elliot-ultra (#8556)
- fix: classify create/url imports on the landing URL @xiaofang2016 (#8547)
- fix: redirect logged-out users to login from pages that require it @derekdiliu (#8532)
- fix: fall back to legacy clipboard copy in insecure contexts @elliot-ultra (#8490)
- fix: prevent timeline edit form submission on Enter @nzyz995 (#8470)
- fix: remove invalid disabled prop from invite copy button @nzyz995 (#8469)
- fix: avoid retranslating CRUD table headers @nzyz995 (#8460)
- fix: reuse safeValidate and await token form validation @Luna-81 (#8455)
- fix: format JSON-LD recipe ingredients for external parsers @YibingZhang325 (#8393)
- fix: align recipe time rows at narrow widths @YibingZhang325 (#8091)
- fix: keep recipe references on checked shopping list items @SulimanAbdulrazzaq (#8509)
- fix: prevent stale AI provider fetch from clobbering the edit form @xdaxer (#8452)
- fix: use correct i18n key for PermissionDenied message @deeumiya-huang (#8597)
- fix: show the Chowdown file structure in the migration example @mrhard9090 (#8566)
- fix: restore exception details in migration reports @lotusk (#8585)
- fix: rename "OpenAI" strings to generic in frontend @p0lycarpio (#8618)
- fix: separate Markdown paragraphs in recipe text @mrhard9090 (#8626)
- fix: stop the release check from hanging when GitHub is unreachable @derekdiliu (#8634)
- fix: Allow video assets @michael-genson (#8685)
- fix: apply household visibility preference to recipes imported from zip @Luna-81 (#8557)
- fix: show the query filter on meal plan rule cards @derekdiliu (#8531)
- fix: keep a step section open while its title is being edited @henry1113nz (#8512)
- fix: instruct vision prompt to extract ingredients from instructions when list is missing (#6410) @data-pivot (#8542)
- fix: delete orphaned legacy cookbook/plan-rule join table rows @bferd (#8350)
- fix: remove aggregate recipe last made data @zhangli091011 (#7907)
- fix: preserve configured proxy trust through startup @kquinsland01 (#8540)
- fix: prevent orphan quantities and premature line breaks in ingredient list @GerbenJavado (#8479)
- fix: stop startup when configured secret files are invalid @kquinsland01 (#8541)
- fix: test audio-only AI providers with a transcription request @lotusk (#8587)
- fix: allow more than ten recipes with the same name @YibingZhang325 (#8505)
- fix: skip unparseable nutrition values during unit conversion @YibingZhang325 (#8378)
- fix: don't treat unnamed measurement as ingredient substitution @bferd (#8502)
- fix: evaluate LDAP_ADMIN_FILTER as the query account, not the logging-in user @Saadanjum0 (#8678)
- fix: use trigram indexes for fuzzy recipe search on Postgres @zf6fm64s8j-bit (#8673)
- fix: return redirects from permission route middlewares @hippi345 (#8677)
- fix: accept OpenAI-compatible responses with unknown service_tier (Groq) @mrhard9090 (#8565)
- fix: unwrap schema.org Text nodes in clean_ingredients @thunter009 (#8683)
- fix: let Renovate refresh the python base digest, and refresh it now @Gerrrt (#8689)

## 🧰 Maintenance

<details>
<summary>30 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#8546)
- chore(l10n): New Crowdin updates @hay-kot (#8553)
- chore(l10n): New Crowdin updates @hay-kot (#8559)
- chore(l10n): New Crowdin updates @hay-kot (#8562)
- chore(l10n): New Crowdin updates @hay-kot (#8574)
- chore(l10n): New Crowdin updates @hay-kot (#8586)
- chore(l10n): New Crowdin updates @hay-kot (#8599)
- chore(l10n): New Crowdin updates @hay-kot (#8601)
- chore(l10n): New Crowdin updates @hay-kot (#8607)
- chore(l10n): New Crowdin updates @hay-kot (#8612)
- chore(l10n): New Crowdin updates @hay-kot (#8621)
- chore(l10n): New Crowdin updates @hay-kot (#8624)
- chore(l10n): New Crowdin updates @hay-kot (#8627)
- chore(l10n): New Crowdin updates @hay-kot (#8641)
- chore(l10n): New Crowdin updates @hay-kot (#8650)
- chore(l10n): New Crowdin updates @hay-kot (#8655)
- chore(l10n): New Crowdin updates @hay-kot (#8656)
- chore(l10n): New Crowdin updates @hay-kot (#8668)
- chore(l10n): New Crowdin updates @hay-kot (#8674)
- chore(l10n): New Crowdin updates @hay-kot (#8691)
- chore(l10n): New Crowdin updates @hay-kot (#8694)
- chore(l10n): New Crowdin updates @hay-kot (#8702)
- chore(l10n): New Crowdin updates @hay-kot (#8708)
- chore(l10n): New Crowdin updates @hay-kot (#8718)
- chore(l10n): New Crowdin updates @hay-kot (#8720)
- chore(l10n): New Crowdin updates @hay-kot (#8727)
- chore(l10n): New Crowdin updates @hay-kot (#8732)
- chore(l10n): New Crowdin updates @hay-kot (#8737)
- chore(l10n): New Crowdin updates @hay-kot (#8750)
- chore(l10n): New Crowdin updates @hay-kot (#8755)
</details>

## 📚 Documentation

- docs: remove obsolete OIDC_SIGNING_ALGORITHM setting @MahishaKannan (#8686)

## ⬆️ Dependency updates

<details>
<summary>58 changes</summary>

- fix(deps): update dependency openai to v3.17.0 @[renovate[bot]](https://github.com/apps/renovate) (#8563)
- fix(deps): update dependency pillow-heif to v1.8.0 @[renovate[bot]](https://github.com/apps/renovate) (#8573)
- chore(deps): update dependency zensical to v0.0.64 @[renovate[bot]](https://github.com/apps/renovate) (#8575)
- fix(deps): update dependency python-slugify to v9.1.1 @[renovate[bot]](https://github.com/apps/renovate) (#8576)
- fix(deps): update dependency ingredient-parser-nlp to v2.8.0 @[renovate[bot]](https://github.com/apps/renovate) (#8580)
- fix(deps): update dependency openai to v3.18.0 @[renovate[bot]](https://github.com/apps/renovate) (#8581)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8584)
- fix(deps): update dependency openai to v3.19.0 @[renovate[bot]](https://github.com/apps/renovate) (#8583)
- chore(deps): update dependency pylint to v4.0.9 @[renovate[bot]](https://github.com/apps/renovate) (#8591)
- chore(deps): update dependency httpx2 to v2.13.1 @[renovate[bot]](https://github.com/apps/renovate) (#8590)
- fix(deps): update dependency openai to v3.19.2 @[renovate[bot]](https://github.com/apps/renovate) (#8595)
- fix(deps): update dependency pyjwt to v2.15.0 @[renovate[bot]](https://github.com/apps/renovate) (#8596)
- chore(deps): update dependency zensical to v0.0.65 @[renovate[bot]](https://github.com/apps/renovate) (#8602)
- chore(deps): update dependency ruff to v0.16.9 @[renovate[bot]](https://github.com/apps/renovate) (#8606)
- fix(deps): update dependency uvicorn to v0.54.0 @[renovate[bot]](https://github.com/apps/renovate) (#8613)
- fix(deps): update dependency apprise to v2 @[renovate[bot]](https://github.com/apps/renovate) (#8619)
- chore(deps): update dependency coverage to v7.16.2 @[renovate[bot]](https://github.com/apps/renovate) (#8622)
- fix(deps): update dependency python-slugify to v9.1.2 @[renovate[bot]](https://github.com/apps/renovate) (#8625)
- chore(deps): update dependency zensical to v0.0.66 @[renovate[bot]](https://github.com/apps/renovate) (#8629)
- fix(deps): update dependency openai to v3.20.0 @[renovate[bot]](https://github.com/apps/renovate) (#8630)
- fix(deps): update dependency pyjwt to v2.15.1 @[renovate[bot]](https://github.com/apps/renovate) (#8632)
- chore(deps): update dependency pylint to v4.0.10 @[renovate[bot]](https://github.com/apps/renovate) (#8638)
- fix(deps): update dependency openai to v3.22.0 @[renovate[bot]](https://github.com/apps/renovate) (#8640)
- fix(deps): update dependency fastapi to v0.142.0 @[renovate[bot]](https://github.com/apps/renovate) (#8639)
- fix(deps): update dependency fastapi to v0.142.1 @[renovate[bot]](https://github.com/apps/renovate) (#8642)
- chore(deps): update dependency pylint to v4.1.1 @[renovate[bot]](https://github.com/apps/renovate) (#8643)
- chore(deps): lock file maintenance @[renovate[bot]](https://github.com/apps/renovate) (#8645)
- fix(deps): update dependency openai to v3.22.1 @[renovate[bot]](https://github.com/apps/renovate) (#8644)
- chore(deps): update dependency zensical to v0.0.67 @[renovate[bot]](https://github.com/apps/renovate) (#8646)
- fix(deps): update dependency fastapi to v0.142.2 @[renovate[bot]](https://github.com/apps/renovate) (#8647)
- fix(deps): update dependency python-dotenv to v1.2.4 @[renovate[bot]](https://github.com/apps/renovate) (#8654)
- chore(deps): update dependency ruff to v0.16.10 @[renovate[bot]](https://github.com/apps/renovate) (#8657)
- chore(deps): update dependency mypy to v2.4.0 @[renovate[bot]](https://github.com/apps/renovate) (#8658)
- fix(deps): update dependency openai to v3.23.0 @[renovate[bot]](https://github.com/apps/renovate) (#8659)
- fix(deps): update dependency openai to v3.24.0 @[renovate[bot]](https://github.com/apps/renovate) (#8665)
- chore(deps): update dependency pylint to v4.1.2 @[renovate[bot]](https://github.com/apps/renovate) (#8669)
- fix(deps): update dependency tzdata to v2026.5 @[renovate[bot]](https://github.com/apps/renovate) (#8671)
- fix(deps): update dependency apprise to v2.0.1 @[renovate[bot]](https://github.com/apps/renovate) (#8676)
- chore(deps): update dependency zensical to v0.0.68 @[renovate[bot]](https://github.com/apps/renovate) (#8688)
- chore(deps): update dependency types-requests to v2.33.0.20261006 @[renovate[bot]](https://github.com/apps/renovate) (#8693)
- chore(deps): update node.js to 3d27e5c @[renovate[bot]](https://github.com/apps/renovate) (#8695)
- fix(deps): update dependency openai to v3.25.0 @[renovate[bot]](https://github.com/apps/renovate) (#8696)
- fix(deps): update dependency python-slugify to v9.1.3 @[renovate[bot]](https://github.com/apps/renovate) (#8698)
- fix(deps): update dependency openai to v3.26.0 @[renovate[bot]](https://github.com/apps/renovate) (#8699)
- fix(deps): update dependency orjson to v3.13.0 @[renovate[bot]](https://github.com/apps/renovate) (#8704)
- fix(deps): update dependency fastapi to v0.142.3 @[renovate[bot]](https://github.com/apps/renovate) (#8703)
- fix(deps): update dependency fastapi to v0.142.4 @[renovate[bot]](https://github.com/apps/renovate) (#8707)
- fix(deps): update dependency openai to v3.26.1 @[renovate[bot]](https://github.com/apps/renovate) (#8710)
- fix(deps): update dependency fastapi to v0.143.0 @[renovate[bot]](https://github.com/apps/renovate) (#8711)
- chore(deps): update dependency zensical to v0.0.69 @[renovate[bot]](https://github.com/apps/renovate) (#8716)
- fix(deps): update dependency pydantic to v2.14.0 @[renovate[bot]](https://github.com/apps/renovate) (#8717)
- fix(deps): update dependency openai to v3.27.0 @[renovate[bot]](https://github.com/apps/renovate) (#8723)
- chore(deps): update dependency ruff to v0.17.0 - autoclosed @[renovate[bot]](https://github.com/apps/renovate) (#8726)
- fix(deps): update dependency openai to v3.28.0 @[renovate[bot]](https://github.com/apps/renovate) (#8728)
- chore(deps): update dependency pylint to v4.1.3 @[renovate[bot]](https://github.com/apps/renovate) (#8742)
- fix(deps): update dependency pillow-heif to v1.8.1 @[renovate[bot]](https://github.com/apps/renovate) (#8745)
- fix(deps): update dependency openai to v3.29.0 @[renovate[bot]](https://github.com/apps/renovate) (#8746)
- fix(deps): update dependency pydantic to v2.14.1 @[renovate[bot]](https://github.com/apps/renovate) (#8751)
</details>

## 🙏 New Contributors

* @kquinsland01 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8538
* @PulfordJ made their first contribution in https://github.com/mealie-recipes/mealie/pull/8275
* @audiophonicz made their first contribution in https://github.com/mealie-recipes/mealie/pull/7785
* @SulimanAbdulrazzaq made their first contribution in https://github.com/mealie-recipes/mealie/pull/8509
* @xdaxer made their first contribution in https://github.com/mealie-recipes/mealie/pull/8452
* @mrhard9090 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8566
* @nightvisi0n made their first contribution in https://github.com/mealie-recipes/mealie/pull/8701
* @data-pivot made their first contribution in https://github.com/mealie-recipes/mealie/pull/8542
* @danepowell made their first contribution in https://github.com/mealie-recipes/mealie/pull/8183
* @zhangli091011 made their first contribution in https://github.com/mealie-recipes/mealie/pull/7907
* @jspeyside made their first contribution in https://github.com/mealie-recipes/mealie/pull/8078
* @thunter009 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8683
* @Saadanjum0 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8678
* @zf6fm64s8j-bit made their first contribution in https://github.com/mealie-recipes/mealie/pull/8673
* @hippi345 made their first contribution in https://github.com/mealie-recipes/mealie/pull/8677
* @MahishaKannan made their first contribution in https://github.com/mealie-recipes/mealie/pull/8686
* @Gerrrt made their first contribution in https://github.com/mealie-recipes/mealie/pull/8689
* @anandghegde made their first contribution in https://github.com/mealie-recipes/mealie/pull/8461

# 🍴🍴🍴🍴🍴🍴