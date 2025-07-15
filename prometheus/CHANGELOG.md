# v3.5.0

3.5 is a Long Term Support (LTS) release; see release https://prometheus.io/docs/introduction/release-cycle/
There are a number of new features, and no known breaking changes in this release:

* [FEATURE] PromQL: Add experimental type and unit metadata labels, behind feature flag `type-and-unit-labels`. #16228 #16632 #16718 #16743
* [FEATURE] PromQL: Add `ts_of_(min|max|last)_over_time`, behind feature flag `experimental-promql-functions`. #16722 #16733
* [FEATURE] Scraping: Add global option `always_scrape_classic_histograms` to scrape a classic histogram even if it is also exposed as native. #16452
* [FEATURE] OTLP: New config options `promote_all_resource_attributes` and `ignore_resource_attributes`. #16426
* [FEATURE] Discovery: New service discovery for STACKIT Cloud. #16401
* [ENHANCEMENT] Hetzner SD: Add `label_selector` to filter servers. #16512
* [ENHANCEMENT] PromQL: support non-constant parameter in aggregations like `quantile` and `topk`. #16404
* [ENHANCEMENT] UI: Better total target count display when using `keep_dropped_targets` option. #16604
* [ENHANCEMENT] UI: Add simple filtering on the `/rules` page. #16605
* [ENHANCEMENT] UI: Display query stats in hover tooltip over table query tab. #16723
* [ENHANCEMENT] UI: Clear search field on `/targets` page. #16567
* [ENHANCEMENT] Rules: Check that rules parse without error earlier at startup. #16601
* [ENHANCEMENT] Promtool: Optional fuzzy float64 comparison in rules unittests. #16395
* [PERF] PromQL: Reuse `histogramStatsIterator` where possible. #16686
* [PERF] PromQL: Reuse storage for custom bucket values for native histograms. #16565
* [PERF] UI: Optimize memoization and search debouncing on `/targets` page. #16589
* [PERF] UI: Fix full-page re-rendering when opening status nav menu. #16590
* [PERF] Kubernetes SD: use service cache.Indexer to achieve better performance. #16365
* [PERF] TSDB: Optionally use Direct IO for chunks writing. #15365
* [PERF] TSDB: When fetching label values, stop work earlier if the limit is reached. #16158
* [PERF] Labels: Simpler/faster stringlabels encoding. #16069
* [PERF] Scraping: Reload scrape pools concurrently. #16595 #16783
* [BUGFIX] Top-level: Update GOGC before loading TSDB. #16491
* [BUGFIX] Config: Respect GOGC environment variable if no \"runtime\" block exists. #16558
* [BUGFIX] PromQL: Fix native histogram `last_over_time`. #16744
* [BUGFIX] PromQL: Fix reported parser position range in errors for aggregations wrapped in ParenExpr #16041 #16754
* [BUGFIX] PromQL: Don't emit a value from `histogram_fraction` or `histogram_quantile` if classic and native histograms are present at the same timestamp. #16552
* [BUGFIX] PromQL: Incorrect rounding of `[1001ms]` to `[1s]` and similar. #16478
* [BUGFIX] PromQL: Fix inconsistent / sometimes negative `histogram_count` and `histogram_sum`. #16682
* [BUGFIX] PromQL: Improve handling of NaNs in native histograms. #16724
* [BUGFIX] PromQL: Fix unary operator precedence in duration expressions. #16713
* [BUGFIX] PromQL: Improve consistency of `avg` aggregation and `avg_over_time`. #16569 #16773
* [BUGFIX] UI: Add query warnings and info to graph view. #16753 #16759
* [BUGFIX] API: Add HTTP `Vary: Origin` header to responses to avoid cache poisoning. #16008
* [BUGFIX] Discovery: Avoid deadlocks by taking locks in consistent order. #16587
* [BUGFIX] Remote-write: For Azure AD auth, allow empty `client_id` to suppport system assigned managed identity. #16421
* [BUGFIX] Scraping: Fix rare memory corruption bug. #16623
* [BUGFIX] Scraping: continue handling custom-bucket histograms after an exponential histogram is encountered. #16720
* [BUGFIX] OTLP: Default config not respected when `otlp:` block is unset. #16693
