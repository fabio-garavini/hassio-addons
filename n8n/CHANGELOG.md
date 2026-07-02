## [2.28.4](https://github.com/n8n-io/n8n/compare/n8n@2.28.3...n8n@2.28.4) (2026-07-01)


### Bug Fixes

* **AI Agent Node:** Preserve parallel tool call structure in chat memory ([#33307](https://github.com/n8n-io/n8n/issues/33307)) ([5f266e6](https://github.com/n8n-io/n8n/commit/5f266e6ad09b345ec484db4f0cca00baac59ab10))
* **core:** Ensure project variables override same-key global variables ([#33232](https://github.com/n8n-io/n8n/issues/33232)) ([e5fffa2](https://github.com/n8n-io/n8n/commit/e5fffa232034666f5fe811af18143ee422e33976))
* **core:** Send Digest auth credentials only after the server challenge ([#33328](https://github.com/n8n-io/n8n/issues/33328)) ([27bcadb](https://github.com/n8n-io/n8n/commit/27bcadb2743b8ab82ee9b0e0fb39009ab2edd166))
* **core:** Skip AI Gateway managed credentials in pre-execution permission check ([#33278](https://github.com/n8n-io/n8n/issues/33278)) ([a41348f](https://github.com/n8n-io/n8n/commit/a41348f5d7c92a27e96578e0c91919acc85943d5))
* **editor:** Fix InputTriple responsive behaviour in NDV parameters ([#33205](https://github.com/n8n-io/n8n/issues/33205)) ([5f96beb](https://github.com/n8n-io/n8n/commit/5f96beb81eff53da01d1e9a42b93ebcee9d8f2d0))
* **editor:** Surface Human review node in add-node search ([#33317](https://github.com/n8n-io/n8n/issues/33317)) ([8d3b3ce](https://github.com/n8n-io/n8n/commit/8d3b3ced625169726d1a7383ce34048d407df305))


### Features

* **core:** Add N8N_RUNNERS_ALLOW_TRANSITIVE_IMPORTS for the Python task runner ([#33266](https://github.com/n8n-io/n8n/issues/33266)) ([922cd4e](https://github.com/n8n-io/n8n/commit/922cd4e7a008ef45e1008d99339fc74174297c6e))
* **editor:** Hide gateway-incompatible node parameters under managed credentials ([#33288](https://github.com/n8n-io/n8n/issues/33288)) ([acdd374](https://github.com/n8n-io/n8n/commit/acdd374461bae4dc526c9f5a6592c3e3766e6c62))

<!-- stage-review-badge-begin -->

---

<a href="https://stagereview.app/n8n-io/n8n/pull/33332">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://stagereview.app/assets/gh-open-in-stage-dark.svg">
    <img src="https://stagereview.app/assets/gh-open-in-stage-light.svg" alt="Open in Stage">
  </picture>
</a>

<!-- stage-review-badge-end -->