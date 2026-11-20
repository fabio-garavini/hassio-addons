# Home Assistant app: Hotpot 🔥 by Fabio Garavini

Hotpot is a heatmap renderer and tile server for GPS activity data. Activities and privacy settings are stored in the persistent `/data/hotpot.sqlite3` database and are included in app backups.

## Installation

1. Install the Hotpot app.
1. Review the configuration and start the app.
1. Select **Open Web UI** to open Hotpot through Home Assistant Ingress. You can also enable **Show in sidebar**.
1. Enable `UPLOAD` and set `HOTPOT_UPLOAD_TOKEN` if you want to import activities from the browser.

Ingress does not require any network configuration. To access Hotpot directly instead, map port `8080` in the app's network settings. HTTPS is enabled by default for direct access; set `ssl` to `false` for HTTP. The `ssl` option does not affect Ingress. If the configured certificate is unavailable, the app generates a self-signed certificate.

## Configuration

### Server features

- `UPLOAD`: Enable browser and HTTP activity uploads. Disabled by default. Set a strong `HOTPOT_UPLOAD_TOKEN` before exposing the app externally; without a token, uploads are unauthenticated.
- `RENDER`: Enable the `/render` image export endpoint.
- `INSPECT`: Enable activity inspection in the web UI. Enabled by default.
- `FETCH`: Enable `/fetch/intervals.icu`. Requires `INTERVALS_ICU_API_KEY`; requests use `HOTPOT_UPLOAD_TOKEN` for authentication when one is configured.
- `STRAVA_WEBHOOK`: Enable Strava webhook endpoints. Requires `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, and `STRAVA_WEBHOOK_SECRET`. Complete Hotpot's Strava OAuth setup before enabling this option.
- `CORS`: Allow cross-origin GET requests.
- `VERBOSE`: Enable verbose Hotpot logging.

### Network and credentials

- `ssl`: Enable HTTPS for the external web UI.
- `certfile` and `keyfile`: Certificate files in Home Assistant's `/ssl` directory.
- `TZ`: Time zone, for example `Europe/Rome`.
- `HOTPOT_UPLOAD_TOKEN`: Bearer token for upload and fetch requests.
- `INTERVALS_ICU_API_KEY`: API key for intervals.icu imports.
- `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_WEBHOOK_SECRET`: Strava application credentials.

## Activity files

The Home Assistant `share` directory is mounted at `/share`. It can be used for activity exports and files that you want to process with Hotpot's command-line tools. Browser uploads are the simplest way to import individual GPX, TCX, or FIT files.

For filtering, privacy masks, bulk imports, and Strava setup, see the [upstream Hotpot documentation](https://github.com/erik/hotpot).
