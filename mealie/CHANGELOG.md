# 🍴🍴🍴🍴🍴🍴

The newest version of Mealie includes several new features and quality of life improvements. We've also got five first-time contributors in this release!

### ℹ️ IMPORTANT NOTICE

Included in this release we [updated our image processing algorithm](https://github.com/mealie-recipes/mealie/pull/5883) to improve image quality and compression (thanks @1-tempest!). This improves all _new_ images added to Mealie moving forward. If you'd like to reprocess your _existing_ images, we've included a user script:

```shell
docker exec -it mealie bash
python /opt/mealie/lib64/python3.12/site-packages/mealie/scripts/reprocess_images.py
```

More information [in the docs](https://docs.mealie.io/documentation/getting-started/updating/), including some configuration options to speed things up if you have stronger hardware. This process could take several minutes depending on how many recipes you have (and your hardware).

## 🎉 Highlights

- Updated image processing algorithm improving image quality and compression
- You can now choose a snack, drink, and dessert in your meal planner

## ✨ New features

- feat: Put calendar directly in the date picker dialogs @noxhirsch (#6110)
- feat: Add snack, drink, and dessert @cashpw (#6149)
- feat: frontend autocomplete is diacritics/ligatures insensitive @Noneangel (#6169)
- feat: Improve Image Minification Logic and Efficiency @1-tempest (#5883)
- feat: Reprocess image user script @michael-genson (#6704)
- feat: Improve startup workflow UI @miah120 (#6342)
- feat: autofill default credentials on first login @hay-kot (#6666)
- feat: Add user QueryFilter and improve UI on mobile @p0lycarpio (#6235)
- feat: Suggest HTML importer on URL importer failure @michael-genson (#6685)

## 🐛 Bug fixes

- fix: change log rotation size from 10kb to 10mb @hay-kot (#6648)
- fix: clear cached store data on logout to prevent user data leakage @hay-kot (#6665)
- fix: improve password manager autofill compatibility on login page @henricook (#6662)
- fix: Reprocess script UUID handling for postgres @michael-genson (#6705)

## 🧰 Maintenance

<details>
<summary>14 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#6649)
- chore(l10n): New Crowdin updates @hay-kot (#6653)
- chore(l10n): New Crowdin updates @hay-kot (#6661)
- chore(l10n): New Crowdin updates @hay-kot (#6671)
- chore(l10n): Crowdin locale sync @github-actions (#6672)
- chore(l10n): New Crowdin updates @hay-kot (#6675)
- chore(auto): Update pre-commit hooks @github-actions (#6680)
- chore(l10n): New Crowdin updates @hay-kot (#6678)
- chore(l10n): New Crowdin updates @hay-kot (#6686)
- chore(l10n): New Crowdin updates @hay-kot (#6689)
- chore(l10n): New Crowdin updates @hay-kot (#6693)
- chore(l10n): New Crowdin updates @hay-kot (#6694)
- chore(l10n): New Crowdin updates @hay-kot (#6697)
- chore(l10n): New Crowdin updates @hay-kot (#6701)
</details>

## 📚 Documentation

- docs: add theming examples to backend configuration guide @n-winspear (#6443)

## 🔨 Internal development

- dev: Add `copilot-instructions.md` @michael-genson (#6659)

## ⬆️ Dependency updates

<details>
<summary>17 changes</summary>

- chore(deps): update dependency ruff to v0.14.8 @renovate (#6655)
- fix(deps): update dependency fastapi to v0.123.8 @renovate (#6640)
- fix(deps): update dependency openai to v2.9.0 @renovate (#6656)
- fix(deps): update dependency fastapi to v0.123.9 @renovate (#6657)
- fix(deps): update dependency fastapi to v0.123.10 @renovate (#6660)
- fix(deps): update dependency fastapi to v0.124.0 @renovate (#6664)
- fix(deps): update dependency orjson to v3.11.5 @renovate (#6667)
- chore(deps): update dependency pytest to v9.0.2 @renovate (#6670)
- fix(deps): update dependency apprise to v1.9.6 @renovate (#6677)
- chore(deps): update dependency coverage to v7.13.0 @renovate (#6683)
- chore(deps): update node.js to 9a2ed90 @renovate (#6684)
- fix(deps): update dependency sqlalchemy to v2.0.45 @renovate (#6687)
- fix(deps): update dependency recipe-scrapers to v15.11.0 @renovate (#6691)
- fix(deps): update dependency fastapi to v0.124.2 @renovate (#6688)
- fix(deps): update dependency openai to v2.11.0 @renovate (#6696)
- chore(deps): update dependency ruff to v0.14.9 @renovate (#6699)
- chore(deps): update node.js to 20988bc @renovate (#6698)
</details>

## 🙏 New Contributors

* @cashpw made their first contribution in https://github.com/mealie-recipes/mealie/pull/6149
* @Noneangel made their first contribution in https://github.com/mealie-recipes/mealie/pull/6169
* @1-tempest made their first contribution in https://github.com/mealie-recipes/mealie/pull/5883
* @n-winspear made their first contribution in https://github.com/mealie-recipes/mealie/pull/6443
* @henricook made their first contribution in https://github.com/mealie-recipes/mealie/pull/6662

# 🍴🍴🍴🍴🍴🍴