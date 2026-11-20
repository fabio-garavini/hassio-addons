## Home Assistant app 0.4.0-ha2

- Prevent MapLibre warnings for OpenFreeMap's `circle-11` sprite alias when zooming and panning.
- Remove a duplicate NGINX MIME-type warning.

## Home Assistant app 0.4.0-ha1

- Add Home Assistant Ingress support, including asset, tile, upload, render, and inspection URLs.
- Keep direct HTTP/HTTPS access available through the optional port mapping.

## What's Changed

### Features

- Add activity inspector feature in web UI (run server with `--inspect`)
- Add basemap styles from OpenFreeMap

### Fixes

- Fix mixing of ground meter and Mercator meter units
- Fix orphaned tile data and empty line segments in DB
- Fix straight line points draw across large gaps
- Stricter input validations for web endpoints

### Improvements

- Improve tile rendering performance by ~75%
- Improve bulk import runtime by ~40%
- Drop dependencies where possible

**Full Changelog**: https://github.com/erik/hotpot/compare/v0.3.0...v0.4.0
