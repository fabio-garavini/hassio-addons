# 🍴🍴🍴🍴🍴🍴

❗❗❗This release contains important security fixes in the query filter API. For more information, see: #7629

## 🎉 Highlights

This release adds more flexible, in-app management of AI providers. You can now add multiple AI providers for different tasks (e.g. one provider for general use, and one provider for importing recipes from videos). These providers can be mixed between completely unrelated services (e.g. OpenAI, Azure, locally-hosted via Ollama, etc.).
<img width="500" alt="image" src="https://github.com/user-attachments/assets/e740f213-5045-41f2-84d7-4cc2de81417e" />

Existing settings configured via environment variables (e.g. `OPENAI_API_KEY`) will automatically be imported one time upon upgrading your instance. For more information, check out [the PR](https://github.com/mealie-recipes/mealie/pull/7650) or the in-app announcement!

## ✨ New features

- feat: In-app AI Provider Configuration @michael-genson (#7650)

## 🐛 Bug fixes

- fix: Inconsistent "from an image" vs "from images" translation @michael-genson (#7642)
- fix: Protect sensitive data in query filter API (GHSA-8m57-7cv5-rjp8) @michael-genson (#7629)
- fix: enforce organize-group-data permission on food/tag/category mutations @hay-kot (#7651)
- fix: Prevent swiping AND scrolling on shopping list @michael-genson (#7659)

## 🧰 Maintenance

<details>
<summary>6 changes</summary>

- chore(l10n): New Crowdin updates @hay-kot (#7643)
- chore(l10n): New Crowdin updates @hay-kot (#7646)
- chore(l10n): New Crowdin updates @hay-kot (#7649)
- chore(l10n): New Crowdin updates @hay-kot (#7652)
- chore(l10n): Crowdin locale sync @[mealie-actions[bot]](https://github.com/apps/mealie-actions) (#7655)
- chore(l10n): New Crowdin updates @hay-kot (#7653)
</details>

# 🍴🍴🍴🍴🍴🍴