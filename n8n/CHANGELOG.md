## [2.48.5](https://github.com/n8n-io/n8n/compare/n8n@2.48.4...n8n@2.48.5) (2026-11-18)

### Add-on changes

* Synchronize the external JavaScript and Python task-runner configuration with upstream, including shutdown environment propagation and JavaScript Web Storage hardening.
* Document upgrade considerations introduced since n8n 2.43.0 in [DOCS.md](DOCS.md).

### Bug Fixes

* **AI Agent Node:** Keep tool-call history separate for each input item ([#44044](https://github.com/n8n-io/n8n/issues/44044)) ([4f16701](https://github.com/n8n-io/n8n/commit/4f167012aff903e1b85da086f1ad13891456c67c))
* **AI Agent Node:** Stop adding newlines between streamed text chunks ([#43822](https://github.com/n8n-io/n8n/issues/43822)) ([19d9fa4](https://github.com/n8n-io/n8n/commit/19d9fa416ace21d287284b78dcbb9d55d79b1743))
* **core:** Give fresh installs a random instance ID ([#44276](https://github.com/n8n-io/n8n/issues/44276)) ([1f15447](https://github.com/n8n-io/n8n/commit/1f15447ecdfa161a7d683933712f6f3927b9128f))
* **core:** Hand dollar property reads to the expression engine ([#43809](https://github.com/n8n-io/n8n/issues/43809)) ([6fb7219](https://github.com/n8n-io/n8n/commit/6fb721973b19e4dd18a66ae97cc317a2c53adf36))
* **core:** Keep small objects inside an Error in sandboxed expressions ([#44301](https://github.com/n8n-io/n8n/issues/44301)) ([fd845a7](https://github.com/n8n-io/n8n/commit/fd845a77a3d0c3fe9de93487ce72c754f1082630))
* **core:** Treat instance owners and admins as team project members in credential checks ([#44183](https://github.com/n8n-io/n8n/issues/44183)) ([d17bbc5](https://github.com/n8n-io/n8n/commit/d17bbc519c5720b51b85ba91e90b06e852ed81fb))
* **editor:** Allow moving workflows to team projects without the Sharing license ([#44116](https://github.com/n8n-io/n8n/issues/44116)) ([a14e29b](https://github.com/n8n-io/n8n/commit/a14e29bee0b2eeb9863a8dcfee29ef2c4270d2a4))
* **editor:** Match Callout Markdown to small text size ([#44242](https://github.com/n8n-io/n8n/issues/44242)) ([92b072a](https://github.com/n8n-io/n8n/commit/92b072a35adeae87340c5d009b19523aac9c560a))
* **Microsoft Teams Trigger Node:** Emit every change notification of a batched request ([#43857](https://github.com/n8n-io/n8n/issues/43857)) ([e6745a6](https://github.com/n8n-io/n8n/commit/e6745a661e880d4a64e52e4634f84574beeda95d))
* **Qdrant Vector Store Node:** Preserve reverse-proxy subpath as Qdrant client prefix ([#43922](https://github.com/n8n-io/n8n/issues/43922)) ([665667d](https://github.com/n8n-io/n8n/commit/665667d3345b0c4a0ba991e81ac27f8ae74bb9e5))


### Features

* **API:** Send an audit event when a Public API rate limit changes ([#43825](https://github.com/n8n-io/n8n/issues/43825)) ([16724f8](https://github.com/n8n-io/n8n/commit/16724f8fd4609246a5600b8df0e5b6b6cb247d82))
* Implements v3 iteration of existing n8n Assistant taxonomy experiment ([#43978](https://github.com/n8n-io/n8n/issues/43978)) ([d93b814](https://github.com/n8n-io/n8n/commit/d93b814264cc5359420f43c431c9c0a016fd5714))

<!-- This is an auto-generated description by cubic. -->
<a href="https://cubic.dev/pr/n8n-io/n8n/pull/44338?utm_source=github" target="_blank" rel="noopener noreferrer" data-no-image-dialog="true"><picture><source media="(prefers-color-scheme: dark)" srcset="https://www.cubic.dev/buttons/review-in-cubic-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://www.cubic.dev/buttons/review-in-cubic-light.svg"><img alt="View guided diff" src="https://www.cubic.dev/buttons/review-in-cubic-light.svg"></picture></a> <a href="https://www.cubic.dev/action/auto-fix/pr/n8n-io/n8n/44338?returnTo=https%3A%2F%2Fgithub.com%2Fn8n-io%2Fn8n%2Fpull%2F44338&source=description" target="_blank" rel="noopener noreferrer" data-no-image-dialog="true"><picture><source media="(prefers-color-scheme: dark)" srcset="https://www.cubic.dev/buttons/turn-on-auto-fix-dark.svg"><source media="(prefers-color-scheme: light)" srcset="https://www.cubic.dev/buttons/turn-on-auto-fix-light.svg"><img alt="Turn on auto-fix" src="https://www.cubic.dev/buttons/turn-on-auto-fix-light.svg"></picture></a>
<!-- End of auto-generated description by cubic. -->

