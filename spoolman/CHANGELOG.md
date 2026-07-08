## What's Changed
* Updated all client and server dependencies.
* Added system dark-mode option.
* Fixed missing requirements.txt, to hopefully make moonraker update manager work again.
* Added new frontend integration tests using playwright.
* Remove max height from locations page.
* Fix spool price disappearing from the list on live updates.
* Updated websocket messages, unset fields are now omitted instead of sent as null, matching REST.
* Add conditional logic to drop permissions for unprivileged Docker by @jpiccari in https://github.com/Donkie/Spoolman/pull/798
* Allow archived spool export by @velzi in https://github.com/Donkie/Spoolman/pull/919
* Update sync interval for external database synchronization by @chruoss in https://github.com/Donkie/Spoolman/pull/943
* Bump uuid from 13.0.2 to 14.0.0 in /client by @dependabot[bot] in https://github.com/Donkie/Spoolman/pull/927
* docs: add MCP server to integrations list by @Disane87 in https://github.com/Donkie/Spoolman/pull/890
* Translations update by @weblate in https://github.com/Donkie/Spoolman/pull/825

## New Contributors
* @jpiccari made their first contribution in https://github.com/Donkie/Spoolman/pull/798
* @velzi made their first contribution in https://github.com/Donkie/Spoolman/pull/919
* @chruoss made their first contribution in https://github.com/Donkie/Spoolman/pull/943

**Full Changelog**: https://github.com/Donkie/Spoolman/compare/v0.23.1...v0.24.0