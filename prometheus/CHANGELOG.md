* [BUGFIX] UI: Revert changed (and breaking) redirect behavior for `-web.external-url` if `-web.route-prefix` is configured, which was introduced in #17240. #17389
* [BUGFIX] Fix federation of some native histograms. #17299 #17409
* [BUGFIX] promtool: `check config` would fail when `--lint=none` flag was set. #17399 #17414
* [BUGFIX] Remote-write: fix a deadlock in the queue resharding logic that can lead to suboptimal queue behavior. #17412
