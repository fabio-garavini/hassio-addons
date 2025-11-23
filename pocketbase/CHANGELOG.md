> _To update the prebuilt executable you can run `./pocketbase update`._

- Added `@request.body.someField:changed` modifier.
    It could be used when you want to ensure that a body field either wasn't submitted or was submitted with the same value.
    Or in other words, if you want to disallow a field change the below 2 expressions would be equivalent:
    ```js
    // (old)
    (@request.body.someField:isset = false || @request.body.someField = someField)

    // (new)
    @request.body.someField:changed = false
    ```

- Added `MailerRecordEvent.Meta["info"]` property for the `OnMailerRecordAuthAlertSend` hook.

- Updated the backup restore popup with a short info about the performed restore steps.

- Updated Go deps.