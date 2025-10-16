* [CHANGE] Remote-write: the following metrics are deprecated:
   - `prometheus_remote_storage_samples_in_total`, use `prometheus_wal_watcher_records_read_total{type="samples"}` and `prometheus_remote_storage_samples_dropped_total` instead,
   - `prometheus_remote_storage_histograms_in_total`, use `prometheus_wal_watcher_records_read_total{type=~".*histogram_samples"}` and `prometheus_remote_storage_histograms_dropped_total` instead,
   - `prometheus_remote_storage_exemplars_in_total`, use `prometheus_wal_watcher_records_read_total{type="exemplars"}` and `prometheus_remote_storage_exemplars_dropped_total` instead,
   - `prometheus_remote_storage_highest_timestamp_in_seconds`, use the more accurate `prometheus_remote_storage_queue_highest_timestamp_seconds` instead in dashboards and alerts to properly account for relabeling and for more accuracy. #17065
* [FEATURE] PromQL: Add support for experimental anchored and smoothed rate behind feature flag `promql-extended-range-selectors`. #16457
* [FEATURE] Federation: Add support for native histograms with custom buckets (NHCB). #17215
* [FEATURE] PromQL: Add `first_over_time(...)` and `ts_of_first_over_time(...)` behind feature flag `experimental-promql-functions`. #16963 #17021
* [FEATURE] Remote-write: Add support for Azure Workload Identity as an authentication method for the receiver. #16788
* [FEATURE] Remote-write: Add type and unit labels to outgoing time series in remote-write 2.0 when the `type-and-unit-labels` feature flag is enabled. #17033
* [FEATURE] OTLP: Write start time of metrics as created time zero samples into TSDB when `created-timestamp-zero-ingestion` feature flag is enabled. #16951
* [ENHANCEMENT] PromQL: Add warn-level annotations for counter reset conflicts in certain histogram operations. #17051 #17094
* [ENHANCEMENT] UI: Add scrape interval and scrape timeout to targets page. #17158
* [ENHANCEMENT] TSDB: Reduce the resolution of native histograms read from chunks or remote read if the schema is exponential. #17213
* [ENHANCEMENT] Remote write: Add logging for unexpected metadata in sample batches, when metadata entries are found in samples-only batches. #17034 #17082
* [ENHANCEMENT] Rules: Support concurrent evaluation for rules querying `ALERTS` and `ALERTS_FOR_STATE`. #17064
* [ENHANCEMENT] TSDB: Add logs to improve visibility into internal operations. #17074
* [PERF] OTLP: Write directly to TSDB instead of passing through a Remote-Write adapter when receiving OTLP metrics. #16951
* [PERF] OTLP: Reduce number of logs emitted from OTLP endpoint. No need to log duplicate sample errors. #17201
* [PERF] PromQL: Move more work to preprocessing step. #16896
* [PERF] PromQL: Reduce allocations when walking the syntax tree. #16593
* [PERF] TSDB: Optimize appender creation, slightly speeding up startup. #16922
* [PERF] TSDB: Improve speed of querying a series with multiple matchers. #13971
* [BUGFIX] Alerting: Mutating alerts relabeling (using `replace` actions, etc.) within a `alertmanager_config.alert_relabel_configs` block is now scoped correctly and no longer yields altered alerts to subsequent blocks. #17063
* [BUGFIX] Config: Infer valid escaping scheme when scrape config validation scheme is set. #16923
* [BUGFIX] TSDB: Correctly handle appending mixed-typed samples to the same series. #17071 #17241 #17290 #17295 #17296
* [BUGFIX] Remote-write: Prevent sending unsupported native histograms with custom buckets (NHCB) over Remote-write 1.0, log warning. #17146
* [BUGFIX] TSDB: Fix metadata entries handling on `metadata-wal-records` experimental feature for native histograms with custom buckets (NHCB) in protobuf scraping. #17156
* [BUGFIX] TSDB: Ignore Native Histograms with invalid schemas during WAL/WBL replay. #17214
* [BUGFIX] PromQL: Avoid empty metric names in annotations for `histogram_quantile()`. #16794
* [BUGFIX] PromQL: Correct inaccurate character positions in errors for some aggregate expressions. #16996 #17031
* [BUGFIX] PromQL: Fix `info()` function on churning series. #17135
* [BUGFIX] PromQL: Set native histogram to gauge type when subtracting or multiplying/dividing with negative factors. #17004
* [BUGFIX] TSDB: Reject unsupported native histogram schemas when attempting to append to TSDB. For scrape and remote-write implement reducing the resolution to fit the maximum if the schema is within the -9 to 52. #17189
* [BUGFIX] Remote-write: Fix HTTP handler to return after writing error response for invalid compression. #17050
* [BUGFIX] Remote-write: Return HTTP error `400` instead of `5xx` for wrongly formatted Native Histograms. #17210
* [BUGFIX] Scrape: Prevent staleness markers from generating unnecessary series. #16429
* [BUGFIX] TSDB: Avoid misleading `Failed to calculate size of \"wal\" dir` error logs during WAL clean-up. #17006
* [BUGFIX] TSDB: Prevent erroneously dropping series records during WAL checkpoints. #17029
* [BUGFIX] UI: Fix redirect to path of `-web.external-url` if `-web.route-prefix` is configured. #17240
* [BUGIFX] Remote-write: Do not panic on invalid symbol table in remote-write 2.0. #17160
