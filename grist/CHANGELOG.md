## What's Changed

### Improvements

* Widgets
  * The calendar is now a widget type of its own rather than a custom widget bundled with Grist, and existing calendar pages move to it automatically. Only the events in view are drawn, so editing one cell no longer redraws them all. Double-clicking an event opens the Grist record card, as does dragging on empty space to create one, and Day and Week views cap at 20 events per day with a "+N more" label. `GRIST_SKIP_BUNDLED_WIDGETS` no longer does anything (#2457)
* Formulas
  * The formula editor now completes the looked-up table's column names inside `lookupOne()` and `lookupRecords()`. After a comma it offers the columns not yet used, plus `order_by` (#2530)
* UI/UX
  * A confirmation for an action that cannot be undone now defaults to canceling. Cancel is highlighted and answers Enter, and the action button is red ([commit](https://github.com/gristlabs/grist-core/commit/bfa03d6c))
  * The "Invite people" dialog now says when invitation emails are not enabled on the installation. Install admins get a link to turn them on, and everyone else a button to ask an admin (#2482)
* API
  * `POST /api/users/:userId/disable` now accepts a `reason`, shown to the user when they try to sign in. Contributed by @fflorent (#2526)
* Internal / infrastructure
  * `GRIST_SINGLE_PORT` is now read only by the development server, unmuddling its meaning ([commit](https://github.com/gristlabs/grist-core/commit/ce0df091))
  * A doc worker no longer claims a group at startup from a `groups` hash in Redis, an unused mechanism. Setting a worker's group with `GRIST_WORKER_GROUP`, and marking a document for a group, are unchanged ([commit](https://github.com/gristlabs/grist-core/commit/47f7f8ff))
  * Grist server processes are now hardened against prototype pollution ([commit](https://github.com/gristlabs/grist-core/commit/da2a1fe9))
  * The sandbox's environment variables are enumerated explicitly ([commit](https://github.com/gristlabs/grist-core/commit/596b32ac))
  * Importing a document now rejects any table or column id that Grist would not produce itself, so a hand-edited or foreign schema cannot introduce an unexpected one ([commit](https://github.com/gristlabs/grist-core/commit/c516f8a3))

### Fixes

* The details of a formula error were unreadable in dark mode, light text on a light background. Contributed by @Federicorao (#2394)
* Grist reported a meaningless exit code when shut down by a signal, showing up as a failed unit under systemd. Contributed by @Mrmaxmeier (#2555)
* With `GRIST_PERSONAL_ORGS=false`, a user who belongs to no team site was sent to a welcome page that listed no sites and offered nothing to do. It now says there are no sites available, with a button for install admins to create the first team site. Signed-out visitors get a sign-in prompt ([commit](https://github.com/gristlabs/grist-core/commit/faa59dab))
* When the full edition is turned on by environment variable, the Admin Panel stopped showing the activation key section, leaving no way to enter or change a key ([commit](https://github.com/gristlabs/grist-core/commit/09d05050))
* A table or column named after a built-in JavaScript property, such as `constructor`, was not recorded correctly in document history and comparisons ([commit](https://github.com/gristlabs/grist-core/commit/cdb5286a))

### Full Grist edition extensions

* MCP and the assistant
  * The agent is now told to build summaries as summary tables rather than as ordinary tables. `add_page_widget` with `group_by_column_ids` now returns the id of the summary table rather than of the source table ([commit](https://github.com/gristlabs/grist-core/commit/0cf5f5f3))

## Contributions

* Grist Labs: @berhalak, @dsagal, @georgegevoian, @paulfitz
* @fflorent: a reason for disabling a user (#2526)
* @Federicorao: formula error color in dark mode (#2394)
* @Mrmaxmeier: exit code on shutdown by signal (#2555)

### Translations

* Guillaume Luszack
* Martin Harari Thuresson
* Vri

**Full Changelog**: https://github.com/gristlabs/grist-core/compare/v1.7.18...v1.7.19

[Join our Discord Community](https://discord.gg/MYKpYQ3fbP) if you'd like to get into development of Grist.
