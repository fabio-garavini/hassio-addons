> _To update the prebuilt executable you can run `./pocketbase update`._

- Return an error when filter params fallback fails to json serialize and optimized params replacement to execute in a single pass.

- Fixed collection index parsing error for indexes with missing name.

- Minor UI autocomplete optimizations _(prefix match, autocomplete debounce, etc.)_.

- Fixed linter warnings and comment typos.

- Bumped goja and its related dependencies _(regex unescaped dash error fix and base64 optimizations)_.

- Bumped the min Go GitHub action version to 1.27.1 as it includes some [minor `database/sql` and `enconding/json/v2` bug fixes](https://github.com/golang/go/issues?q=milestone%3AGo1.27.1).