> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixed `Shift + Click` range bulk selection not working in Firefox ([#7771](https://github.com/pocketbase/pocketbase/issues/7771))

- Updated goja and its related dependencies _(fixes for TypedArray and regexp2 dep regression for the reported empty string match with lookahead patterns)_.

- Minor filter (fexpr) improvements _(optimization for large string literals and fix for control characters handling)_.
