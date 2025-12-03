## Note for users of Native Histograms

This is the first release with Native Histograms as a stable feature. However, scraping Native Histograms has to be activated explicitly via the `scrape_native_histogram` config setting (newly introduced in this release). To ease the transition, the `--enable-feature=native-histograms` flag is not a complete no-op in this release, but changes the default value of `scrape_native_histogram` to `true`. In the next release (v3.9), the feature flag _will_ be a complete no-op, and the default value of `scrape_native_histogram` will always be `false`. If you have been using the feature flag so far, the recommended course of action is the following:
1. Upgrade to v3.8 and keep the feature flag. Everything should work as before.
2. At your own pace, set `scrape_native_histogram` to `true` in all relevant scrape configs. (There is a global and a per-scrape-config version of  `scrape_native_histogram`, allowing granular control if needed. It is a good idea to also set `scrape_native_histogram` explicitly to `false` where you do not want to scrape Native Histograms. In this way, you do not depend on the default value of the setting anymore.)
3. Remove the feature flag and make sure that everything still works as intended.
4. Now you are ready for an upgrade to the next release (v3.9).

## Changelog

* [CHANGE] Remote-write 2 (receiving): Update to [2.0-rc.4 spec](https://github.com/prometheus/docs/blob/60c24e450010df38cfcb4f65df874f6f9b26dbcb/docs/specs/prw/remote_write_spec_2_0.md). "created timestamp" (CT) is now called "start timestamp" (ST). #17411
* [CHANGE] TSDB: Native Histogram Custom Bounds with a NaN threshold are now rejected. #17287
* [FEATURE] OAuth2: support jwt-bearer grant-type (RFC7523 3.1). #17592
* [FEATURE] Dockerfile: Add OpenContainers spec labels to Dockerfile. #16483
* [FEATURE] SD: Add unified AWS service discovery for ec2, lightsail and ecs services. #17046
* [FEATURE] Native histograms are now a stable, but optional feature, use the `scrape_native_histogram` config setting. #17232 #17315
* [FEATURE] UI: Support anchored and smoothed keyword in promql editor. #17239
* [FEATURE] UI: Show detailed relabeling steps for each discovered target. #17337
* [FEATURE] Alerting: Add urlQueryEscape to template functions. #17403
* [FEATURE] Promtool: Add  Remote-Write 2.0 support to `promtool push metrics` via the `--protobuf_message` flag. #17417
* [ENHANCEMENT] Clarify the docs about handling negative native histograms.  #17249
* [ENHANCEMENT] Mixin: Add static UID to the remote-write dashboard. #17256
* [ENHANCEMENT] PromQL: Reconcile mismatched NHCB bounds in `Add` and `Sub`. #17278
* [ENHANCEMENT] Alerting: Add "unknown" state for alerting rules that haven't been evaluated yet. #17282
* [ENHANCEMENT] Scrape: Allow simultaneous use of classic histogram → NHCB conversion and zero-timestamp ingestion. #17305
* [ENHANCEMENT] UI: Add smoothed/anchored in explain. #17334
* [ENHANCEMENT] OTLP: De-duplicate any `target_info` samples with the same timestamp for the same series. #17400
* [ENHANCEMENT] Document `use_fips_sts_endpoint` in `sigv4` config sections. #17304
* [ENHANCEMENT] Document Prometheus Agent. #14519
* [PERF] PromQL: Speed up parsing of variadic functions. #17316
* [PERF] UI: Speed up alerts/rules/... pages by not rendering collapsed content. #17485
* [PERF] UI: Performance improvement when getting label name and values in promql editor. #17194
* [PERF] UI: Speed up /alerts for many firing alerts via virtual scrolling.  #17254
* [BUGFIX] PromQL: Fix slice indexing bug in info function on churning series. #17199
* [BUGFIX] API: Reduce lock contention on `/api/v1/targets`. #17306
* [BUGFIX] PromQL: Consistent handling of gauge vs. counter histograms in aggregations. #17312
* [BUGFIX] TSDB: Allow NHCB with -Inf as the first custom value. #17320
* [BUGFIX] UI: Fix duplicate loading of data from the API speed up rendering of some pages. #17357
* [BUGFIX] Old UI: Fix createExpressionLink to correctly build /graph URLs so links from Alerts/Rules work again. #17365
* [BUGFIX] PromQL: Avoid panic when parsing malformed `info` call. #17379
* [BUGFIX] PromQL: Include histograms when enforcing sample_limit. #17390
* [BUGFIX] Config: Fix panic if TLS CA file is absent. #17418
* [BUGFIX] PromQL: Fix `histogram_fraction` for classic histograms and NHCB if lower bound is in the first bucket. #17424
