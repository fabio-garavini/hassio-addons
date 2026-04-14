# [2.16.0](https://github.com/n8n-io/n8n/compare/n8n@2.15.0...n8n@2.16.0) (2026-04-07)


### Bug Fixes

* **Anthropic Node:** Use models endpoint for credential test ([#27951](https://github.com/n8n-io/n8n/issues/27951)) ([5519600](https://github.com/n8n-io/n8n/commit/551960053a380cadf4e9a5f6eb6c8b0ff3128783))
* Auto-authorize task-family tools after plan approval ([#27896](https://github.com/n8n-io/n8n/issues/27896)) ([9dd8578](https://github.com/n8n-io/n8n/commit/9dd857824fa0b26fb230641f6cb99a0af9dd39bb))
* Bump dependencies  ([#27880](https://github.com/n8n-io/n8n/issues/27880)) ([a5a9f6d](https://github.com/n8n-io/n8n/commit/a5a9f6d211a633ac0e381ca4e0685cab31e57ec4))
* **Chat Trigger Node:** Fix webhook not registered error when using pinned data ([#27697](https://github.com/n8n-io/n8n/issues/27697)) ([70be3f5](https://github.com/n8n-io/n8n/commit/70be3f5990aec03526f74c4df462469e7359d95c))
* **core:** Add @n8n/ai-node-sdk as CLI dependency for community nodes ([#27749](https://github.com/n8n-io/n8n/issues/27749)) ([9851478](https://github.com/n8n-io/n8n/commit/9851478faf6fb4984d00f39e835d0668574cd316))
* **core:** Debounce per event type in pubsub ([#27877](https://github.com/n8n-io/n8n/issues/27877)) ([0fd9fd7](https://github.com/n8n-io/n8n/commit/0fd9fd7155a576662ba8605818d24c104417c9f2))
* **core:** Fix daytona proxy bug ([#27974](https://github.com/n8n-io/n8n/issues/27974)) ([c754724](https://github.com/n8n-io/n8n/commit/c754724caf3dd8eac3af862d1053dfc0a546937d))
* **core:** Fix missing isolate acquisition and VM globals in expression engine ([#27895](https://github.com/n8n-io/n8n/issues/27895)) ([e520848](https://github.com/n8n-io/n8n/commit/e5208484aa2fabd7f0cb657b2331eb3d569b2189))
* **core:** Increase Concurrency for watch mode from 32 to 64 ([#27907](https://github.com/n8n-io/n8n/issues/27907)) ([6185464](https://github.com/n8n-io/n8n/commit/618546440bc457e59986bad2794c5199a9b327f8))
* **core:** Make MCP executions asynchronous ([#27762](https://github.com/n8n-io/n8n/issues/27762)) ([054a2d7](https://github.com/n8n-io/n8n/commit/054a2d725a7c2dd665748496b4c8b23d0fcc8ea8))
* **core:** Set trigger start node for executions without input data ([#27968](https://github.com/n8n-io/n8n/issues/27968)) ([663f2c5](https://github.com/n8n-io/n8n/commit/663f2c5086846396d9d8fadc5e994203cf33c949))
* **core:** Support descriptions when updating workflows via public API ([#27679](https://github.com/n8n-io/n8n/issues/27679)) ([573bcde](https://github.com/n8n-io/n8n/commit/573bcdeee0451f34862a564584b30e495e3a9c8a))
* **Data Table Node:** Change copy for Limit to indicate it applies per input row ([#27813](https://github.com/n8n-io/n8n/issues/27813)) ([a061bc6](https://github.com/n8n-io/n8n/commit/a061bc6c659dffd568705d40945f86724491ccc5))
* **editor:** Skip unsaved-changes confirmation when closing new credential modal ([#27975](https://github.com/n8n-io/n8n/issues/27975)) ([9120283](https://github.com/n8n-io/n8n/commit/91202830094e4de6a9298dcc8ec140c4c01fd102))
* **editor:** Update JsonEditor content when modelValue changes to same-length string ([#27933](https://github.com/n8n-io/n8n/issues/27933)) ([cdad6db](https://github.com/n8n-io/n8n/commit/cdad6db530879937d842213b36e3f81a6825e2c0))
* **Microsoft Agent 365 Trigger Node:** Welcome message fix ([#28000](https://github.com/n8n-io/n8n/issues/28000)) ([e016b55](https://github.com/n8n-io/n8n/commit/e016b552106ece56d56aa4f82833acebdbb2a5ee))
* NodeCredentials use correct credential type rather than first ([#27671](https://github.com/n8n-io/n8n/issues/27671)) ([9ed9b96](https://github.com/n8n-io/n8n/commit/9ed9b9622ed980b0f74da8b7e6b08dc4f1ebe8e8))
* **Pipedrive Node:** Add v2 node with API v2 migration ([#27905](https://github.com/n8n-io/n8n/issues/27905)) ([de60c85](https://github.com/n8n-io/n8n/commit/de60c855813de727112c9cd9f6be2b5c0ac069ac))
* **Read/Write Files from Disk Node:** Add search aliases for binary file nodes ([#27760](https://github.com/n8n-io/n8n/issues/27760)) ([763dd7e](https://github.com/n8n-io/n8n/commit/763dd7e0b0844af7db25286b596fccab9d8cfe06))
* **Schedule Node:** Skip recurrence check during manual execution ([#27830](https://github.com/n8n-io/n8n/issues/27830)) ([6ef553c](https://github.com/n8n-io/n8n/commit/6ef553cd622db4f71cbb04dac66d0fc758e037a6))
* **X (Twitter) Node:** Surface API error message for insufficient access level ([#27603](https://github.com/n8n-io/n8n/issues/27603)) ([5fdb18b](https://github.com/n8n-io/n8n/commit/5fdb18b5f9de6ac45d0dffd9d4824ead75b11acb))


### Features

* Add --init-workflow flag to scaffold publish.yml ([#27292](https://github.com/n8n-io/n8n/issues/27292)) ([34894af](https://github.com/n8n-io/n8n/commit/34894af3fa9acf1da6d92530202160a92953166d))
* Add expression-based role mapping strategy ([#27745](https://github.com/n8n-io/n8n/issues/27745)) ([5ad1c54](https://github.com/n8n-io/n8n/commit/5ad1c54514769c6a0f663b438074bd89daa5a08c))
* **Alibaba Cloud Chat Model Node:** Add new node ([#27882](https://github.com/n8n-io/n8n/issues/27882)) ([5a11c58](https://github.com/n8n-io/n8n/commit/5a11c5817ebf7fe7613be4e115106905fc30c08f))
* **Chat Trigger Node:** Auto-add highlighted execution data ([#18778](https://github.com/n8n-io/n8n/issues/18778)) ([4fb1f7d](https://github.com/n8n-io/n8n/commit/4fb1f7d6f7e170db4ac18a5f21787ebfc6a4da90))
* Computer use HITL confirmations in Instance AI ([#27910](https://github.com/n8n-io/n8n/issues/27910)) ([74e6df3](https://github.com/n8n-io/n8n/commit/74e6df3b2ea4677899e1da32e272b4671ac2215e))
* **core:** Add data table MCP tool ([#27811](https://github.com/n8n-io/n8n/issues/27811)) ([eaacd75](https://github.com/n8n-io/n8n/commit/eaacd7599e31620d14de5811a1a5257c30f406bd))
* **core:** Add input/output token tracking to node graph telemetry ([#27992](https://github.com/n8n-io/n8n/issues/27992)) ([864f869](https://github.com/n8n-io/n8n/commit/864f869d9b67ff6cbdaa2bda547c0e17d469184f))
* **core:** Add insights:read scope to API key roles ([#27868](https://github.com/n8n-io/n8n/issues/27868)) ([e2410f0](https://github.com/n8n-io/n8n/commit/e2410f05a15774cc0d14c13803c0cdf6011d546e))
* **core:** Add instance version history table ([#27740](https://github.com/n8n-io/n8n/issues/27740)) ([ada24f1](https://github.com/n8n-io/n8n/commit/ada24f13fe4cafdc9b879f38f8c0de566a357152))
* **core:** Add isolate pooling for VM expression engine ([#27573](https://github.com/n8n-io/n8n/issues/27573)) ([5ee0e84](https://github.com/n8n-io/n8n/commit/5ee0e842b8becb2f926129e2fbab5047a4ad15e0))
* **core:** Add JTI store with atomic consume and cleanup job for token exchange ([#27944](https://github.com/n8n-io/n8n/issues/27944)) ([9a8ea27](https://github.com/n8n-io/n8n/commit/9a8ea27e6cfd4a417e80e26d5fdfd6489f09c8dd))
* **core:** Add lint rule to flag string literals in node inputs/outputs ([#27890](https://github.com/n8n-io/n8n/issues/27890)) ([1140c83](https://github.com/n8n-io/n8n/commit/1140c83565ba6287d405bf2dd28a1743e8808a57))
* **core:** Add OIDC test login endpoint with frontend Test button ([#27824](https://github.com/n8n-io/n8n/issues/27824)) ([285f39b](https://github.com/n8n-io/n8n/commit/285f39b13479235f580b7580056b414540660f35))
* **core:** Add options-sorted-alphabetically lint rule for community nodes ([#27886](https://github.com/n8n-io/n8n/issues/27886)) ([2c56dbf](https://github.com/n8n-io/n8n/commit/2c56dbf16e68e7840abbe24514586ec8970e5220))
* **core:** Add POST /auth/oauth/token controller and audit event types for token exchange ([#27844](https://github.com/n8n-io/n8n/issues/27844)) ([b81870a](https://github.com/n8n-io/n8n/commit/b81870afe9ce60e6df7e2841ab058cace6fe319e))
* **core:** Add redactExecutionData query param to public API executions ([#27743](https://github.com/n8n-io/n8n/issues/27743)) ([29fa848](https://github.com/n8n-io/n8n/commit/29fa8488b55916323c198d29dc6a9f19d94e0abf))
* **core:** Add Zod validation schemas for token-exchange external input ([#27825](https://github.com/n8n-io/n8n/issues/27825)) ([4471ee8](https://github.com/n8n-io/n8n/commit/4471ee87e713cec77d31566edbd84b1d2d2e78bc))
* **core:** Enable community package management via Public API ([#27637](https://github.com/n8n-io/n8n/issues/27637)) ([1fa2805](https://github.com/n8n-io/n8n/commit/1fa28054a607333468f8e5323096139256b737b3))
* **core:** Implement JWT issuance in token exchange service ([#27887](https://github.com/n8n-io/n8n/issues/27887)) ([94dae15](https://github.com/n8n-io/n8n/commit/94dae154dacc3f5a6413bef33af3394d92517296))
* **core:** Improve custom auth JSON masking, preserve shape, redact leaf values ([#27675](https://github.com/n8n-io/n8n/issues/27675)) ([d36cfa1](https://github.com/n8n-io/n8n/commit/d36cfa1624304575c3f5fada37c3d330c24aa0f7))
* **core:** Improve public API middleware to handle different error types ([#27562](https://github.com/n8n-io/n8n/issues/27562)) ([ccd04b0](https://github.com/n8n-io/n8n/commit/ccd04b0edf3965d5a91d2b01488863bbda2c7f59))
* **core:** Make data redaction available without feature flag ([#27981](https://github.com/n8n-io/n8n/issues/27981)) ([a1f68f0](https://github.com/n8n-io/n8n/commit/a1f68f03a7cb9bfb4c63f433af8c15e693355479))
* **core:** OTEL - workflow node tracing ([#27789](https://github.com/n8n-io/n8n/issues/27789)) ([cbe109a](https://github.com/n8n-io/n8n/commit/cbe109a4cc5e0883109bcff6fac88761816ab33f))
* **editor:** Add missing agent permissions for workflow and data table actions ([#27927](https://github.com/n8n-io/n8n/issues/27927)) ([6dd2980](https://github.com/n8n-io/n8n/commit/6dd2980e6ca85b7f2b84aa6f0201de69b5b5897e))
* **editor:** Put data redaction settings behind enterprise license ([#28001](https://github.com/n8n-io/n8n/issues/28001)) ([1e55b08](https://github.com/n8n-io/n8n/commit/1e55b0854b0aaaa4c73144302e947f77e69925ee))
* **Notion Node:** Add support for OAuth ([#27419](https://github.com/n8n-io/n8n/issues/27419)) ([59cec2c](https://github.com/n8n-io/n8n/commit/59cec2c9e220a179a189c6bf4bd9b4dbb2902e57))


### Performance Improvements

* **core:** Make Wait node fully durable by removing in-memory execution path ([#27066](https://github.com/n8n-io/n8n/issues/27066)) ([f025a78](https://github.com/n8n-io/n8n/commit/f025a786e75ec962fcaca469c107324eea8548a3))