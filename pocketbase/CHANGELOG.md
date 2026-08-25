> _To update the prebuilt executable you can run `./pocketbase update`._

- Fixes for some reported regressions related to the `encoding/json/v2` update:
    - allow mangling invalid UTF8 characters when serializing json data ([#7814](https://github.com/pocketbase/pocketbase/issues/7814))
    - fixed OAuth2 providers config merge incorrectly replacing the entire slice ([#7815](https://github.com/pocketbase/pocketbase/issues/7815))
