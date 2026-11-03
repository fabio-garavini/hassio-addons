## [2.46.4](https://github.com/n8n-io/n8n/compare/n8n@2.46.3...n8n@2.46.4) (2026-11-02)


### Bug Fixes

* **core:** Keep own __proto__ keys in values that cross the expression runtime ([#42806](https://github.com/n8n-io/n8n/issues/42806)) ([3075ef1](https://github.com/n8n-io/n8n/commit/3075ef12927c4bf79442b9be0f1e866e734d793e))
* **core:** Keep the name and fields of an Error that an expression returns ([#42805](https://github.com/n8n-io/n8n/issues/42805)) ([7640bcb](https://github.com/n8n-io/n8n/commit/7640bcb6d8f546d432045071baf21545e7d383a9))
* **core:** Let expressions read Error objects in item data ([#42804](https://github.com/n8n-io/n8n/issues/42804)) ([448754d](https://github.com/n8n-io/n8n/commit/448754db5aaab8895135ec21084e525054411e1e))
* **core:** Resolve host data paths once per expression evaluation ([#42635](https://github.com/n8n-io/n8n/issues/42635)) ([6c7f3de](https://github.com/n8n-io/n8n/commit/6c7f3de0eadf328e797573924fd368b9b64f1d4a))
* **core:** Resolve linked items across long pagination loops ([#42785](https://github.com/n8n-io/n8n/issues/42785)) ([181ddf0](https://github.com/n8n-io/n8n/commit/181ddf04d813ce751ec09f84b9bad8d1021e9531))
* **editor:** Align the icon and list of the migration report How to fix panel ([#42799](https://github.com/n8n-io/n8n/issues/42799)) ([d05c052](https://github.com/n8n-io/n8n/commit/d05c052d260084f29399621788ed1ee754fd29cd))
* **editor:** Render the migration rule detail table one page at a time ([#42794](https://github.com/n8n-io/n8n/issues/42794)) ([977012c](https://github.com/n8n-io/n8n/commit/977012c1f7098bf852d0cdf5f14c7b524fdfd507))
* **editor:** Stop dialogs from clipping select dropdowns ([#42760](https://github.com/n8n-io/n8n/issues/42760)) ([12cea6d](https://github.com/n8n-io/n8n/commit/12cea6d1274888ca90cfb3fe7d48c5ea4225cf26))


### Performance Improvements

* **core:** Load the eligible users once per migration report sync ([#42736](https://github.com/n8n-io/n8n/issues/42736)) ([c0d117d](https://github.com/n8n-io/n8n/commit/c0d117d3f628c3c5fe4e82f7e40a23b7804f26b5))
* **core:** Read each Slack credential once per migration report scan ([#42735](https://github.com/n8n-io/n8n/issues/42735)) ([84135f0](https://github.com/n8n-io/n8n/commit/84135f006bc61202247a68c25f089891ac0fd154))
* **core:** Use keyset paging in the migration report scan ([#42742](https://github.com/n8n-io/n8n/issues/42742)) ([a7b3af0](https://github.com/n8n-io/n8n/commit/a7b3af01d75ba03a8382fc3a7bfc3b06ec0d4ad0))

<!-- This is an auto-generated description by cubic. -->
<a href="https://cubic.dev/pr/n8n-io/n8n/pull/42873?utm_source=github" target="_blank" rel="noopener noreferrer" data-no-image-dialog="true"><picture><source media="(prefers-color-scheme: dark)" srcset="https://www.cubic.dev/buttons/review-in-cubic-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://www.cubic.dev/buttons/review-in-cubic-light.svg"><img alt="View guided diff" src="https://www.cubic.dev/buttons/review-in-cubic-light.svg"></picture></a> <a href="https://www.cubic.dev/action/auto-fix/pr/n8n-io/n8n/42873?returnTo=https%3A%2F%2Fgithub.com%2Fn8n-io%2Fn8n%2Fpull%2F42873&source=description" target="_blank" rel="noopener noreferrer" data-no-image-dialog="true"><picture><source media="(prefers-color-scheme: dark)" srcset="https://www.cubic.dev/buttons/turn-on-auto-fix-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://www.cubic.dev/buttons/turn-on-auto-fix-light.svg"><img alt="Turn on auto-fix" src="https://www.cubic.dev/buttons/turn-on-auto-fix-light.svg"></picture></a>
<!-- End of auto-generated description by cubic. -->

