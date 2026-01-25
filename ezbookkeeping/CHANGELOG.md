- **\[Features\]**
    - Add Tamil translation (#456, thanks @hhharsha36)
    - Add refresh accounts, categories and tags button on import dialog
    - Support exporting data when checking pending import data

- **\[Enhancements\]**
    - Improved Spanish translation (#454, #457, thanks @AndresTeller , @diegofercri)
    - Improved Korean translation (#461, thanks @overworks)
    - Support semicolon-separated data when importing delimiter-separated values files / data (#458)
    - Support tag group for transaction tags in the import transaction tool
    - Other user interface optimization

- **\[Bug Fixes\]**
    - Fix the placeholder values in `root_url` cannot be resolved using values from environment variables, and do not allow placeholders in other options
    - Fix no error message is shown when a tag cannot be moved
    - Fix the system paste button appears again after the user tap outside
    - Fix the import dialog sometimes fails to automatically remember the last selected type