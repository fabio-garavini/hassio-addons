Unfortunately we missed that onnxruntime enabled telemetry by default in a recent release, resulting in the ML container automatically sending anonymous metric data to Microsoft. We have now disabled it. Apologies to everyone that we did not catch this change immediately, and thanks to our community for flagging it!

## What's Changed
### 🐛 Bug fixes
* fix(ml): disable onnxruntime telemetry by @mjkent in https://github.com/immich-app/immich/pull/32956

## New Contributors
* @mjkent made their first contribution in https://github.com/immich-app/immich/pull/32956

**Full Changelog**: https://github.com/immich-app/immich/compare/v3.3.5...v3.3.6
