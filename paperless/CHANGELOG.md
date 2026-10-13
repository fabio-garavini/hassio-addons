## paperless-ngx 3.3.1

### Bug Fixes

- Fix: use a root document's effective content for the LLM index and pr… @stumpylog ([#14423](https://github.com/paperless-ngx/paperless-ngx/pull/14423))
- Fix: index document versions as their root document @stumpylog ([#14422](https://github.com/paperless-ngx/paperless-ngx/pull/14422))
- Fix: authorize document versions by their root in the single-object permission check @stumpylog ([#14421](https://github.com/paperless-ngx/paperless-ngx/pull/14421))
- Fix: Provide better error messages to users for invalid JSON @stumpylog ([#14419](https://github.com/paperless-ngx/paperless-ngx/pull/14419))
- Fix: authorize document versions by their root and speed up permission id sets @stumpylog ([#14396](https://github.com/paperless-ngx/paperless-ngx/pull/14396))
- Chore: update the db options warning @shamoon ([#14398](https://github.com/paperless-ngx/paperless-ngx/pull/14398))
- Fix: bulk reprocess latest version for root documents @shamoon ([#14385](https://github.com/paperless-ngx/paperless-ngx/pull/14385))
- Fix: consistently use root doc for version action permissions @shamoon ([#14384](https://github.com/paperless-ngx/paperless-ngx/pull/14384))
- Fix: Don't attempt to index created dates which are not representable in the FTS index @stumpylog ([#14390](https://github.com/paperless-ngx/paperless-ngx/pull/14390))
- Fix: retry a search index rebuild that was interrupted @stumpylog ([#14379](https://github.com/paperless-ngx/paperless-ngx/pull/14379))

### Documentation

- Chore: silence gotenberg startup warning @slankes ([#14405](https://github.com/paperless-ngx/paperless-ngx/pull/14405))
- Documentation: remove MARIADB\_HOST from MariaDB compose files @shamoon ([#14378](https://github.com/paperless-ngx/paperless-ngx/pull/14378))
- Documentation: Updates the troubleshooting with 2 common database collation issues @stumpylog ([#14370](https://github.com/paperless-ngx/paperless-ngx/pull/14370))

### Maintenance

- Chore: Upgrade runners to Ubuntu 26.04 @stumpylog ([#14347](https://github.com/paperless-ngx/paperless-ngx/pull/14347))

### Dependencies

- Chore(deps): Bump the npm\_and\_yarn group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14417](https://github.com/paperless-ngx/paperless-ngx/pull/14417))

### All App Changes

<details>
<summary>12 changes</summary>

- Chore: share the authorizing owner rule between the id sets and the trash filter @stumpylog ([#14425](https://github.com/paperless-ngx/paperless-ngx/pull/14425))
- Fix: use a root document's effective content for the LLM index and pr… @stumpylog ([#14423](https://github.com/paperless-ngx/paperless-ngx/pull/14423))
- Fix: index document versions as their root document @stumpylog ([#14422](https://github.com/paperless-ngx/paperless-ngx/pull/14422))
- Fix: authorize document versions by their root in the single-object permission check @stumpylog ([#14421](https://github.com/paperless-ngx/paperless-ngx/pull/14421))
- Fix: Provide better error messages to users for invalid JSON @stumpylog ([#14419](https://github.com/paperless-ngx/paperless-ngx/pull/14419))
- Chore(deps): Bump the npm\_and\_yarn group across 1 directory with 2 updates @[dependabot[bot]](https://github.com/apps/dependabot) ([#14417](https://github.com/paperless-ngx/paperless-ngx/pull/14417))
- Fix: authorize document versions by their root and speed up permission id sets @stumpylog ([#14396](https://github.com/paperless-ngx/paperless-ngx/pull/14396))
- Chore: update the db options warning @shamoon ([#14398](https://github.com/paperless-ngx/paperless-ngx/pull/14398))
- Fix: bulk reprocess latest version for root documents @shamoon ([#14385](https://github.com/paperless-ngx/paperless-ngx/pull/14385))
- Fix: consistently use root doc for version action permissions @shamoon ([#14384](https://github.com/paperless-ngx/paperless-ngx/pull/14384))
- Fix: Don't attempt to index created dates which are not representable in the FTS index @stumpylog ([#14390](https://github.com/paperless-ngx/paperless-ngx/pull/14390))
- Fix: retry a search index rebuild that was interrupted @stumpylog ([#14379](https://github.com/paperless-ngx/paperless-ngx/pull/14379))
</details>
