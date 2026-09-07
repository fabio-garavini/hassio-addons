> _To update the prebuilt executable you can run `./pocketbase update`._

- Write the status header for JSON responses only if the fields picker succeed or has acceptable fallback.
    _This is to allow custom response status code for failed json writes._

- Fixes for various minor bugs spammed by 2 LLM users (bots?):
    - Fixed collection index validator to allow expressions with parenthesis in the optional `WHERE` clause.

    - Clamped arccosine to [-1,1] in the Harvesine formula for the `geoDistance()` filter function to workaround edge case related to float rounding errors for some coordinates.

    - Prevent unnecessary body chunk read if we already known that we are beyond the allowed limit.

    - Updated the `json` field validator to check the `encoding/json/v2` semantics and allow duplicated keys on record marshalize for compliance with old jsonv1 data.

    - Fixed nested cascade delete of self-referenced relation records.

- Minor UI fixes (updated dark primary btn color contrast, force reload the records list if the deleted record has self-referenced cascade relation field, etc.).

- Changed JSVM `$app` variable definition from TS type to interface ([#7834](https://github.com/pocketbase/pocketbase/issues/7834)).

- Bumped `golang.org/x/*` dependencies to silence security scanners ([#7829](https://github.com/pocketbase/pocketbase/discussions/7829)).
