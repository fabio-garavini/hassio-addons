This release has a fix for a Stored XSS vulnerability that can be triggered via crafted metric names and label values in Prometheus web UI tooltips and metrics explorer. Thanks to Duc Anh Nguyen from TinyxLab for reporting it.

- [SECURITY] UI: Fix stored XSS via unescaped metric names and labels. CVE-2026-40179. #18506
- [ENHANCEMENT] Consul SD: Introduce `health_filter` field for Health API filtering. #18499
- [BUGFIX] Consul SD: Fix filter parameter being incorrectly applied to the Health API. #18499
