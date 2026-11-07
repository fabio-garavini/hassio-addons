Grimoire 1.3.1 is a patch release with a new AI provider, theme fixes and tighter outbound-request security.

## Added

- **Cheaper Inference provider:** Use Cheaper Inference as an AI provider for enrichment.

## Fixes

- Theme switching now applies and persists correctly.
- Trusted reverse proxy origins are accepted for remote access.

## Security

- Outbound fetches now resolve DNS and block reserved address ranges, including NAT64, 6to4 and Teredo IPv6 and internal-only hostnames.
- Dependency updates for `fast-uri` (GHSA-58mr-gqgx-xq4g, GHSA-qw65-cvwx-89v3).

## Install and upgrade

Signed macOS and Linux release archives, SHA-256 files, detached signatures, and the public release key are attached. The signing-key fingerprint is `DB04AD8F2F2CB7753F0DFA3FED72EFB58D928945`. Back up your library before upgrading. Native upgrades preserve data under `~/.local/share/littleimp`.
