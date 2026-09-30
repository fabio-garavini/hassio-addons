> [!NOTE]
> This is a rolling release. Learn here about the [release types and lifecycle](https://docs.opencloud.eu/docs/admin/resources/lifecycle#release-types).

# Release Notes OpenCloud 8.0.1

## 🚨 Coming from 7.x, after you upgrade, you must do this:
tl;dr version

- Run `docker compose exec opencloud opencloud search index --all-spaces --force-rescan --insecure` ([Upgrade details](https://docs.opencloud.eu/docs/next/admin/maintenance/upgrade/upgrade-8.x.x) )

One command, once. That's the whole migration path from 7.x to 8.0.1.

You could make use of the new [announcement banner](https://opencloud.eu/de/news/rolling-release-zentrale-ankuendigungen-direkt-ueber-opencloud) by informing your end users about the search reindexing.

### ❤️ Thanks to all contributors! ❤️

@aduffeck 

### 🐛 Bug Fixes

- Remove the timeout when reindexing spaces [[#3543](https://github.com/opencloud-eu/opencloud/pull/3543)]