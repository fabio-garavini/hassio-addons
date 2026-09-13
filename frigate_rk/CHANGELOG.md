## Images

- [ghcr.io/blakeblackshear/frigate:0.18.0](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216280963?tag=0.18.0)
- [ghcr.io/blakeblackshear/frigate:0.18.0-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216277591?tag=0.18.0-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.18.0-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216293733?tag=0.18.0-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.18.0-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216298574?tag=0.18.0-rk)
- [ghcr.io/blakeblackshear/frigate:0.18.0-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216302869?tag=0.18.0-rocm)
- [ghcr.io/blakeblackshear/frigate:0.18.0-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216282411?tag=0.18.0-tensorrt-jp6)
- [ghcr.io/blakeblackshear/frigate:0.18.0-synaptics](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/1216293268?tag=0.18.0-synaptics)

Full changelog: https://github.com/blakeblackshear/frigate/compare/v0.17.2...v0.18.0

# Major Changes for 0.18.0

## Breaking Changes

There are several breaking changes in this release, Frigate will attempt to update the configuration automatically. In some cases manual changes may be required. It is always recommended to back up your current config and database before upgrading:

1. Simply copy your current config file to a new location
2. Stop Frigate and make a copy of the `frigate.db` file

- **GenAI now supports multiple providers**. As a result, the global `genai` config is now a mapping of keys to GenAI provider setups, and a new `roles` field defines what tasks each provider will be used for (object descriptions, review summaries, embeddings, chat, etc.). Existing configs will be automatically migrated. [Documentation](https://docs.frigate.video/category/generative-ai)
- **Frigate no longer saves annotated JPEG snapshots (.jpg) to disk.** Only a clean, unannotated WebP snapshot (`<camera>-<id>-clean.webp`) is now stored in `/media/frigate/clips/`. The `clean_copy` configuration option has been removed — clean snapshots are always saved when snapshots are enabled. The `snapshots.quality` default has changed from 70 to 60, reflecting the switch from JPEG to WebP encoding. Users who previously relied on the annotated `.jpg` files on disk should instead use the `/api/events/<id>/snapshot.jpg` endpoint, which now honors `timestamp`, `bounding_box`, `crop`, `height`, and `quality` query parameters for both in-progress and completed tracked objects. When query parameters are omitted, the camera's `snapshots` config values are used as defaults. Existing configs containing `clean_copy` will be automatically migrated. [Documentation](https://docs.frigate.video/configuration/snapshots/#rendering)
- **The config format for zones and masks has changed** to add `enabled` and `friendly_name` fields. A config migrator will make the necessary changes, but if migration fails you may need to edit your [masks](https://docs.frigate.video/configuration/masks/#creating-masks) and [zones](https://docs.frigate.video/configuration/zones) manually.
- **Intel GPU stats reporting has changed** to no longer require intel_gpu_top and now reads directly from the kernel's per-client DRM usage counters. This removes the need for `CAP_PERFMON`, privileged mode, or `perf_event_paranoid tuning`, and adds support for newer Intel GPUs (including Battlemage). Reported usage values may differ from previous versions because the measurement method has changed; the underlying GPU workload is unchanged for the same configuration.
  - Note that this change will require a Linux kernel version of 6.5 or newer on your host. Kernels older than 6.5 do not expose per-engine counters for GPUs using GuC submission. 
- **FFmpeg has been updated to version 8** (excluding the `-rk` image), and introduces a known issue with go2rtc streams that transcode video using hardware acceleration. A small change to the go2rtc config is required. [Documentation](https://docs.frigate.video/troubleshooting/go2rtc#hardware-accelerated-transcoding-with-ffmpeg-8)
  - FFmpeg 5 is deprecated and will be removed from Frigate in 0.19.
- **Users running the JinaV2 semantic search model on a GPU** will need to run an embeddings reindex due to changes to the CUDA graphs optimization level.
- **The `/api/export` `DELETE` HTTP API endpoint has been removed** and refactored to support bulk deletion of exports. A `POST` to `/api/exports` should be used instead. [Documentation](https://docs.frigate.video/integrations/api/bulk-delete-exports-exports-delete-post)
- **The `sync_recordings` config option has been removed** and replaced by the new Media Sync pane in Settings.
- **The `timelapse_args` export config option has been removed** and replaced by custom exporting ffmpeg arguments. [Documentation](https://docs.frigate.video/configuration/record/#how-do-i-export-recordings)
- **The `ui.date_format` and `ui.time_format` config options have been removed** as these fields have been unused since date/time format and handling has been determined by i18n.
- **The DeGirum detector has been removed** as the company has ceased operations effective 1 Aug 2026.
- **The DeepStack detector is deprecated** and will be removed from Frigate in 0.19.

## New Features

Frigate 0.18 introduces several major new features.

### Full UI Configuration

Frigate 0.18 introduces complete UI-based configuration management. The new Settings experience provides:

- A categorized sidebar covering every section of the config (cameras, detectors, motion, recording, review, GenAI, semantic search, face recognition, LPR, classification models, networking, authentication, and more).
- Per-field validation, inline descriptions, and links back to the documentation.
- A clear distinction between global and camera-level configuration, with the ability to override global values per camera and reset back to defaults at any time.
- Highlighting of unsaved changes, a "Save All" button that summarizes pending edits across sections, and a `Reset to Default/Global` button on each section.
- Indicators showing which fields require a restart to take effect, with a one-click restart prompt when a restart-required field is changed.
- Most of Frigate's configuration options can now be saved and applied dynamically without restarting, including most enrichment, motion, ONVIF, GenAI, and go2rtc stream settings.
- Manual YAML file configuration is still fully supported. Documentation pages now include "Frigate UI" tabs alongside YAML examples to show exactly where each option lives in the new Settings UI.

See the [documentation](https://docs.frigate.video/configuration/config/#using-the-settings-ui).

### Profiles

Profiles let you define named overrides on top of your base camera configuration and switch between them on the fly — without restarting Frigate. Profiles can override a camera's detection, motion, recording, snapshots, review, zones, notifications, objects (including masks and filters), enrichments (face recognition, LPR), audio, and birdseye settings, as well as the camera's enabled state.

- Profiles are defined at the top level of the config with optional friendly names, and per-camera overrides are defined under each camera.
- The active profile is persisted across restarts and can be changed from the UI or via the `frigate/profile/set` MQTT topic.
- The current profile state and the list of available profiles are published over MQTT.
- The Settings UI shows which fields are overridden by the active profile, supports editing the base config independently from any profile, and provides per-profile camera enable/disable from the camera management view.
- A dedicated Profiles page in the main menu shows a card-based summary of all configured profiles and their overrides.

See the [documentation](https://docs.frigate.video/configuration/profiles).

### GenAI

Frigate 0.18 includes a major expansion of GenAI capabilities. In addition to multi-provider support (see Breaking Changes), there is a new dedicated llama.cpp provider with automatic model probing and context sizing, and GenAI configuration can now be updated dynamically without restarting Frigate. 

See the [documentation](https://docs.frigate.video/configuration/genai/genai_config).

#### Chat

Frigate 0.18 introduces a Chat interface for talking to your configured GenAI provider directly from the Frigate UI. Chat is implemented as a tool-calling LLM agent with access to Frigate-specific tools, so you can ask natural language questions about your cameras, tracked objects, and review activity.

- Streaming responses with markdown support (including tables), per-message copy buttons, message editing, and the ability to stop a streaming response.
- Tool calls are grouped and displayed inline as the agent works, with quick links to relevant tracked objects and review items.
- Tools include searching tracked objects, finding similar objects via semantic search, inspecting live camera context, toggling camera features, starting VLM monitoring on a camera, and a recap tool for summarizing recent activity.
- Tracked object thumbnails and similarity results render as cards in the chat, and any event can be attached to a chat message via the paperclip button or by clicking a thumbnail.
- A persistent quick-replies row makes it easy to start common queries from a fresh chat.

#### Remote Embeddings

Semantic Search embeddings can now be generated by an external GenAI provider instead of running locally. This is especially useful when you would prefer to offload embedding work to another machine or to a hosted provider.

- Any configured GenAI provider that supports an embeddings endpoint can be selected as the embedding provider for Semantic Search.
- The semantic search settings UI includes a dropdown for choosing which configured GenAI provider should produce embeddings.

See the [documentation](https://docs.frigate.video/configuration/semantic_search).

### Motion Review and Motion Search

Frigate 0.18 introduces a redesigned Motion Review experience along with a new Motion Search feature.

- **Motion Search.** A new motion search workflow lets you draw or select a region on a camera image and find time periods where motion occurred in that area, similar to a motion-based version of object review.
- **Motion previews.** Motion preview clips are generated and shown directly in the review pane, quickly highlighting areas of motion in the frame where Frigate did not detect and track any objects.
- **Heatmap filter.** A heatmap-grid filter on the motion review page lets you constrain motion previews to specific regions of the camera image.

See the [documentation](https://docs.frigate.video/usage/review#reviewing-motion).

### Debug Replay

Debug Replay is a new tool that lets you replay recorded video through Frigate's detection and motion pipelines as if it were a live camera. This makes it dramatically easier to tune motion settings and object filters against real footage rather than waiting for live activity to reproduce an issue.

- Configure the debug replay camera directly in the UI without manually editing your configuration.
- Adjust motion and object detection configuration on the replay camera and see the effect on detections in real time.
- The Debug view's overlays (regions, motion, paths, zones) are fully supported during replay.

See the [documentation](https://docs.frigate.video/troubleshooting/dummy-camera).

### Exports

Frigate 0.18 brings substantial improvements to exports, including fast multi-camera exporting from History, single-click exporting of multiple review items in Review, and more.

See the [exports documentation](https://docs.frigate.video/usage/exports).

#### Case Management

Exports can now be organized into named **cases**, making it much easier to manage exports related to a single incident or investigation.

- Cases are displayed separately from individual exports in the UI and can be filtered, edited, and deleted.
- Exports can be assigned to a case at creation time (including from the single-camera and mobile review export dialogs) or moved between cases later.
- Bulk selection (similar to the Review page) supports reassigning or deleting multiple exports across cases at once, with admin-only actions properly gated.
- New cases can be created directly from any export dialog, and exports can be removed from a case without deleting them.
- Stale or interrupted in-progress exports are reaped automatically on startup.

#### Custom Exports

Frigate 0.18 provides a dedicated exports API that accepts arbitrary ffmpeg arguments, allowing for fully custom export pipelines (custom filters, encoders, output formats, and so on). A CPU fallback path is automatically used if hardware-accelerated encoding fails. For security, custom ffmpeg arguments are restricted for non-admin users and a number of dangerous flags (such as `-filter_complex`, `-vf`, and `-attach`) are blocklisted to prevent arbitrary file reads via filter sources.

In addition, exports now use Frigate's `Job` infrastructure end-to-end, providing more reliable progress reporting and better cleanup of interrupted jobs. Per-camera `record.export.hwaccel_args` settings cascade up through camera and global configuration, allowing per-camera tuning of export hardware acceleration. See the [recording documentation](https://docs.frigate.video/configuration/record/#how-do-i-export-recordings) for export configuration details.

### Other Improvements

There are many other improvements to highlight in this release.

#### Backend

- Masks and zones can now be dynamically enabled and disabled via MQTT. [Documentation](https://docs.frigate.video/integrations/mqtt/#frigatecamera_namemotion_maskmask_nameset)
- Camera enabled, detect, record, snapshots, and audio toggles now persist across Frigate restarts.
- Added support for the AXERA AI accelerator. [Documentation](https://docs.frigate.video/configuration/object_detectors/#axera)
- Nvidia 50 series GPUs are now supported following an upgrade of CUDA and ONNX Runtime dependencies. As part of this change, the CUDA version was tuned to avoid overaggressive BFC behavior on these cards.
- The Intel drivers have been updated to support Battlemage GPUs.
- There is now a dedicated llama.cpp GenAI provider with automatic model probing and context sizing. [Documentation](https://docs.frigate.video/configuration/genai/genai_config)
- Custom (API-created) events can now be configured as `detections` or `alerts` based on the event label, can run indefinitely until explicitly ended, and support a configurable `pre_capture` value when created.
- ROCm has been updated to 7.2.0 and now supports RDNA4 AMD GPUs. JinaV1 also works correctly under the new ROCm. [Documentation](https://docs.frigate.video/configuration/object_detectors/#amdrocm-gpu-detector)
- Added VLM monitoring, which runs a configured GenAI provider in a loop against a camera's live view to power chat-driven workflows.
- ONVIF support has been refactored to add profile selection, decouple relative move from autotracking, and dynamically update ONVIF configuration without a restart. [Documentation](https://docs.frigate.video/configuration/cameras/#setting-up-camera-ptz-controls)
- A new generic process watchdog auto-restarts subprocesses that crash or stall.
- The license plate detection box coordinates are now published in `tracked_object_update` MQTT messages. [Documentation](https://docs.frigate.video/integrations/mqtt)
- A new `frigate/<camera>/<role>/status` topic and a `stopped` value on the LWT topic make it easier to monitor camera health and Frigate availability. [Documentation](https://docs.frigate.video/integrations/mqtt)
- Configurable listening ports via the `networking` config section for advanced use cases. [Documentation](https://docs.frigate.video/configuration/advanced/system#listen-on-different-ports)
- New `/api/recordings` endpoints for deleting recordings, syncing media (replacing the old scheduled `sync_recordings` cleanup), and pulling review clips by review item ID.
- Snapshot responses now include an `X-Frame-Time` header.
- Frigate+ API calls now run in a thread pool to avoid blocking the event loop.
- API performance improvements for several recording related endpoints.
- ffmpeg has been updated to 8.1.1, and go2rtc to v1.9.14.
- HTTP/2 support has been enabled in nginx. Users who access Frigate over port 8971 instead of port 5000 may see a significant performance improvement in Live and History view, especially if their installation has more than a couple of cameras.
- Face recognition optimizations to increase accuracy and reject poor candidates.
- Many internal type-safety improvements and a significant increase in mypy coverage across the codebase.
- A number of security hardening fixes around authentication, role enforcement, custom export ffmpeg arguments, and SQL parameterization.

#### Frontend

- There is a new Media Sync function which allows checking for orphaned files which can be deleted directly from the UI. A verbose mode writes a per-media-type report of orphaned paths to `/config/media_sync`. [Documentation](https://docs.frigate.video/configuration/record/#syncing-media-files-with-disk)
- A new camera connection quality indicator is shown on the camera metrics page, making it easy to see when cameras are having connection issues.
- Greatly improved the efficiency of metrics loading and rendering, including hiding rather than unmounting graphs when switching tabs.
- The Classification Wizard now allows regenerating examples in cases where the images are not representative of all scenarios, and supports reclassifying both images and faces after training.
- The system metrics page now shows GPU and NPU temperatures (Nvidia, Rockchip, Hailo, and others where available).
- A new Messages tab in the Logs section and Debug Replay shows the messages exchanged between Frigate's backend and the frontend/MQTT.
- Preview generation has improved, with smoother transitions between hours and a new `qmax` parameter for higher-quality previews at `high` and `very_high` settings.
- Cameras can now be deleted directly from the UI, with full cleanup of associated media.
- Instant snapshots can now be downloaded directly from the controls in History view.
- The Tracking Details pane now shows additional scoring information including computed and top scores per timeline entry.
- The motion and object debug overlays now match between Debug view and Replay objects lists, and area is shown as a proper percentage.
- Camera group and streaming settings are now saved to the browser local storage separately for each user.
- The frontend has been migrated to React 19, with corresponding upgrades across the dependency tree (framer-motion, react-konva, react-grid-layout, vaul, sonner, and others).
- The WebSocket layer has been rewritten on top of `useSyncExternalStore` for finer-grained, per-topic subscriptions and significantly fewer unnecessary re-renders.
- Many fixes around mobile usability, including export crash fixes on iOS, viewport scaling tweaks, and improved drawer/dialog behavior.
- New translations and substantial improvements to existing translations across many languages, including a new i18n key check in CI to keep translations in sync.
- Many small UX improvements and tweaks.
