Prometheus now offers a distroless Docker image variant alongside the default
busybox image. The distroless variant provides enhanced security with a minimal
base image, uses UID/GID 65532 (nonroot) instead of nobody, and removes the
VOLUME declaration. Both variants are available with `-busybox` and `-distroless`
tag suffixes (e.g., `prom/prometheus:latest-busybox`, `prom/prometheus:latest-distroless`).
The busybox image remains the default with no suffix for backwards compatibility
(e.g., `prom/prometheus:latest` points to the busybox variant).

For users migrating existing **named** volumes from the busybox image to the distroless variant, the ownership can be adjusted with:
```
docker run --rm -v prometheus-data:/prometheus alpine chown -R 65532:65532 /prometheus
```
Then, the container can be started with the old volume with:
```
docker run -v prometheus-data:/prometheus prom/prometheus:latest-distroless
```
User migrating from bind mounts might need to ajust permissions too, depending on their setup.

- [CHANGE] Alerting: Add `alertmanager` dimension to following metrics: `prometheus_notifications_dropped_total`, `prometheus_notifications_queue_capacity`, `prometheus_notifications_queue_length`. #16355
- [CHANGE] UI: Hide expanded alert annotations by default, enabling more information density on the `/alerts` page. #17611
- [FEATURE] AWS SD: Add MSK Role. #17600
- [FEATURE] PromQL: Add `fill()` / `fill_left()` / `fill_right()` binop modifiers for specifying default values for missing series. #17644
- [FEATURE] Web: Add OpenAPI 3.2 specification for the HTTP API at `/api/v1/openapi.yaml`. #17825
- [FEATURE] Dockerfile: Add distroless image variant using UID/GID 65532 and no VOLUME declaration. Busybox image remains default. #17876
- [FEATURE] Web: Add on-demand wall time profiling under `<URL>/debug/pprof/fgprof`. #18027
- [ENHANCEMENT] PromQL: Add more detail to histogram quantile monotonicity info annotations. #15578
- [ENHANCEMENT] Alerting: Independent alertmanager sendloops. #16355
- [ENHANCEMENT] TSDB: Experimental support for early compaction of stale series in the memory with configurable threshold `stale_series_compaction_threshold` in the config file. #16929
- [ENHANCEMENT] Service Discovery: Service discoveries are now removable from the Prometheus binary through the Go build tag `remove_all_sd` and individual service discoveries can be re-added with the build tags `enable_<sd name>_sd`. Users can build a custom Prometheus with only the necessary SDs for a smaller binary size. #17736
- [ENHANCEMENT] Promtool: Support promql syntax features `promql-duration-expr` and `promql-extended-range-selectors`. #17926
- [PERF] PromQL: Avoid unnecessary label extraction in PromQL functions. #17676
- [PERF] PromQL: Improve performance of regex matchers like `.*-.*-.*`. #17707
- [PERF] OTLP: Add label caching for OTLP-to-Prometheus conversion to reduce allocations and improve latency. #17860
- [PERF] API: Compute `/api/v1/targets/relabel_steps` in a single pass instead of re-running relabeling for each prefix. #17969
- [PERF] tsdb: Optimize LabelValues intersection performance for matchers. #18069
- [BUGFIX] PromQL: Prevent query strings containing only UTF-8 continuation bytes from crashing Prometheus. #17735
- [BUGFIX] Web: Fix missing `X-Prometheus-Stopping` header for `/-/ready` endpoint in `NotReady` state. #17795
- [BUGFIX] PromQL: Fix PromQL `info()` function returning empty results when filtering by a label that exists on both the input metric and `target_info`. #17817
- [BUGFIX] TSDB: Fix a bug during exemplar buffer grow/shrink that could cause exemplars to be incorrectly discarded. #17863
- [BUGFIX] UI: Fix broken graph display after page reload, due to broken Y axis min encoding/decoding. #17869
- [BUGFIX] TSDB: Fix memory leaks in buffer pools by clearing reference fields (Labels, Histogram pointers, metadata strings) before returning buffers to pools. #17879
- [BUGFIX] PromQL: info function: fix series without identifying labels not being returned. #17898
- [BUGFIX] OTLP: Filter `__name__` from OTLP attributes to prevent duplicate labels. #17917
- [BUGFIX] TSDB: Fix division by zero when computing stale series ratio with empty head. #17952
- [BUGFIX] OTLP: Fix potential silent data loss for sum metrics. #17954
- [BUGFIX] PromQL: Fix smoothed interpolation across counter resets. #17988
- [BUGFIX] PromQL: Fix panic with `@` modifier on empty ranges. #18020
- [BUGFIX] PromQL: Fix `avg_over_time` for a single native histogram. #18058
