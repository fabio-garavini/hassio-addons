## Images

- [ghcr.io/blakeblackshear/frigate:0.17.0](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698571246?tag=0.17.0)
- [ghcr.io/blakeblackshear/frigate:0.17.0-standard-arm64](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698569586?tag=0.17.0-standard-arm64)
- [ghcr.io/blakeblackshear/frigate:0.17.0-tensorrt](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698573647?tag=0.17.0-tensorrt)
- [ghcr.io/blakeblackshear/frigate:0.17.0-rk](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698579220?tag=0.17.0-rk)
- [ghcr.io/blakeblackshear/frigate:0.17.0-rocm](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698576270?tag=0.17.0-rocm)
- [ghcr.io/blakeblackshear/frigate:0.17.0-tensorrt-jp6](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698571350?tag=0.17.0-tensorrt-jp6)
- [ghcr.io/blakeblackshear/frigate:0.17.0-synaptics](https://github.com/blakeblackshear/frigate/pkgs/container/frigate/698578081?tag=0.17.0-synaptics)

## Changes since RC3

- None

# Major Changes for 0.17.0

## Breaking Changes

There are several breaking changes in this release, Frigate will attempt to update the configuration automatically. In some cases manual changes may be required. It is always recommended to back up your current config and database before upgrading:

1. Simply copy your current config file to a new location
2. Stop Frigate and make a copy of the `frigate.db` file

- **GenAI now supports reviews and object descriptions**. As a result, the global `genai` config now only configures the provider. Other fields have moved under `objects -> genai`.  See the new GenAI [documentation](https://docs.frigate.video/category/generative-ai).
- **Recordings retention is now fully tiered**. This means that `record -> continuous` and `record -> motion` are separate config fields. See the examples in the [documentation](https://docs.frigate.video/configuration/record).
- **Some of the LPR models have been updated**, and **most users should manually switch to the `small` model**, which performs well on both CPU and GPU. The `large` model is the same as 0.16's and is not as accurate as the upgraded `small` model in 0.17. Use `large` **only** if you live in a region with multi-line plates and you are having issues detecting text on them with the `small` model.
- **strftime_fmt** was deprecated in 0.16, and should now be fully removed from the config in 0.17. Date/time formatting is based on the language selected in the UI.
- **The auto detection logic for camera resolution has changed.** Some cameras fail to correctly advertise their resolution, and in previous versions, a default value was assumed that was not always correct. You may need to explicitly define `detect` resolution `width` and `height` for cameras in your config if Frigate hangs on startup.
- **The `exec`, `expr`, and `echo` sources for go2rtc are now removed by default** to reduce the security risk if an attacker has access to the configuration. This can be disabled using an environment variable `GO2RTC_ALLOW_ARBITRARY_EXEC` A separate configuration for this for HA addon users will come in a later beta. See the [documentation](https://docs.frigate.video/configuration/restream#security-restricted-stream-sources).
- Nvidia GTX 900 series GPUs are no longer supported due to updates to ONNX Runtime

## New Features

Frigate 0.17 introduces several major new features.

### Classification Model Training

Frigate 0.17 supports classification models in two separate types: _state classification_ and _object classification_. These models are trained locally on your machine using `ImageNet` via `MobileNetV2`. 

#### State Classification

State classification allows you to choose a certain region of camera(s) with multiple states, and train on images showing these states. For example, you could create a state classification model to determine if a gate is currently open or closed. 

<img width="416" height="207" alt="Screen Shot 2025-10-27 at 07 51 47 AM" src="https://github.com/user-attachments/assets/ccedcb18-2a65-40f3-8a94-1be180b5913f" />

See the [documentation](https://docs.frigate.video/configuration/custom_classification/state_classification).

#### Object Classification

Object classification allows you to choose an object type, like `dog`, and classify specific dogs. For example, you can train the model to classify your dog `Fido` and add a sub label, while not labeling unknown dogs. Another example would be classifying if a person in a construction site is wearing a helmet or not.

<img width="1462" height="206" alt="Screen Shot 2025-10-27 at 07 50 56 AM" src="https://github.com/user-attachments/assets/999cf86a-f5a7-4772-9a80-10298a4a8b80" />

See the [documentation](https://docs.frigate.video/configuration/custom_classification/object_classification).

### Custom Viewer Roles

Frigate 0.17 now has the ability to create additional viewer user roles to limit access to specific cameras. Users with the `admin` role can create a uniquely named role from the UI (or `auth --> roles` in the config) and assign at least one camera to it. Users assigned to the new role will have:

- Guarded API access
- Limited frontend access, following what the `viewer` role has access to (Live, Review/History, Explore, Exports), but only to the assigned cameras

See the [documentation](https://docs.frigate.video/configuration/authentication#user-roles).

### Review Item Summary with GenAI

Frigate 0.17 supports using GenAI to summarize review items. Unlike object descriptions which add a searchable description, review summaries have a structured output that instruct the AI provider to generate a title, description, and classify the activity as dangerous, suspicious, or normal.

This information is displayed in the UI automatically making it easier to see when activity requires further review and easier to understand what is happening during a particular video segment. 

See the [documentation](https://docs.frigate.video/configuration/genai/genai_review).

### Semantic Search Triggers

Triggers utilize Semantic Search to automate actions when a tracked object matches a specified image or description. Triggers can be configured so that Frigate executes a specific actions when a tracked object's image or description matches a predefined image or text, based on a similarity threshold. Triggers are managed per camera and can be configured via the Frigate UI in the Settings page under the Triggers tab. 

See the [documentation](https://docs.frigate.video/configuration/semantic_search#triggers).

## Object Detector Improvements

Frigate 0.17 brings performance increases for many detectors as well as support for new object detection hardware.

### Nvidia GPU Performance

Support for Nvidia GPUs has been enhanced by implementing CUDA Graphs. CUDA Graphs work to reduce the involvement of the CPU for each inference, leading to faster inference times and lower CPU usage. CUDA graphs do have some limitations based on the complexity of the model, which means that YOLO-NAS, Semantic Search, and LPR models are not accelerated with CUDA Graphs. They will still continue to run on GPU as they did before.

### Intel OpenVINO

Frigate 0.17 supports running models on Intel NPUs, for many models performance on NPU is similar to GPU but more efficient, leaving room to run more enrichment features on the GPU.

OpenVINO has also had many optimizations put in place to reduce memory and CPU utilization for object detection.

### RKNN

Frigate 0.17 brings several improvements to RKNN platform including:
- Automatic Model Conversion: automatically convert ONNX models to RKNN format. This allows Frigate+ and other models to be seamlessly configured and converted on startup.
- Accelerated Enrichment Support: convert and run Semantic Search and Face Recognition models using the NPU. This greatly enhances performance while maintaining high accuracy with `large` model sizes.

### Apple Silicon

Frigate 0.17 supports running object detection on Apple Silicon NPU. This is provided through the [Apple Silicon Detector](https://github.com/frigate-nvr/apple-silicon-detector) which runs on the host and connects via IPC proxy to Frigate, providing fast and efficient inferences when run within the same Apple device.

See the [documentation](https://docs.frigate.video/configuration/object_detectors#apple-silicon-detector).

### YOLOv9 on Google Coral

Frigate 0.17 supports running a quantized version of `YOLOv9` on Coral devices, bringing improved accuracy over the default `mobiledet` model. Note that due to hardware limitations, only a subset of the objects on the standard COCO labelmap is included. Frigate+ has also added support for YOLOv9 models on the Google Coral and includes support for all 41 Frigate+ labels.

See the [documentation](https://docs.frigate.video/configuration/object_detectors/#edgetpu-supported-models).

### New Community Supported Detectors

Frigate 0.17 has community support for several new object detectors:

- **MemryX**: MemryX MX3 M.2 module. [Documentation](https://docs.frigate.video/configuration/object_detectors#memryx-mx3)
- **Degirum SDK**: a proxy for inference with a variety of models. [Documentation](https://docs.frigate.video/configuration/object_detectors#degirum)
- **Synaptics**: Synaptics SL1680 NPU. [Documentation](https://docs.frigate.video/configuration/object_detectors#synaptics)

## Frontend Improvements

In addition to supporting the new features, the frontend has many improvements.

### Detail Stream

History view in 0.17 supports an additional view mode, *Detail*. This mode shows a card for each review item, and expanding a card reveals all tracked objects and their lifecycle events. Selecting any lifecycle event seeks the video to that exact timestamp. You can also overlay a tracked object's path on the video to help with debugging.

### Redesigned Tracked Object Details pane

The Tracked Object Details pane in Explore has been redesigned to streamline the layout and consolidate related information. The *Object Lifecycle* tab is now the *Tracking Details* tab, which displays video overlays of the tracked object instead of static images, giving a clearer and more intuitive view of its activity.

### Revamped Settings

Frigate 0.17 has a revamped Settings menu with a sidebar that categorizes the available options. This brings more scalability which will make it easier to support full UI configuration in a future version.

<img width="1512" height="824" alt="Screenshot 2025-10-12 at 6 54 14 AM" src="https://github.com/user-attachments/assets/6b0689ac-24bf-4d9d-8aae-0371eb099e58" />

**NOTE: The Debug view has been moved to the single camera Live view instead of Settings.** Access the Debug view by enabling the switch under the Live view settings (cog icon) menu.

### Add Camera Wizard

Frigate 0.17 supports adding camera via the UI without manually modifying your configuration file. When installing and starting Frigate for the first time, the main dashboard will include a button to start adding cameras via the Wizard. 

Access the Wizard from the `Cameras --> Management` page in Settings.

### Update Without Restarting

Frigate 0.17 supports saving many more features dynamically. Cameras, zones, and masks will not require a restart to take effect when saved through the UI. More will come in future versions.

### Configuration Safe Mode

If an invalid configuration is detected, Frigate will enter **safe mode** and highlight the location of the issue. While in safe mode, the frontend is limited to the configuration editor, making it easy to correct the problem directly in the UI without needing an external file editor.

### Other Notable Frontend Improvements

- **No recordings indicator on the History timeline.** When no recordings are available, the timeline now displays a blank background to make this clear at a glance.
- **Clickable Birdseye view.** When using the Frigate UI, you can now click a camera within Birdseye to jump directly to its individual Live view.
- **Object paths in Debug view.** The Debug view can now display each tracked object's path — just enable the *Paths* toggle.
- **Audio debugging support.** When audio detection is enabled, the Debug view includes an Audio tab showing live dbFS and RMS values from the camera’s microphone.


## Other Backend Features and Improvements

### Audio Transcription and Analysis

Frigate 0.17 supports fully local audio transcription using either `sherpa-onnx` or `faster-whisper`. The single camera Live view in the Frigate UI supports live transcription of audio for streams defined with the audio role, and any `speech` events in Explore can be transcribed and/or translated through the Transcribe button in the Tracked Object Details pane. 

See the [documentation](https://docs.frigate.video/configuration/audio_detectors#audio-transcription).


### Process and Efficiency Improvements

Frigate 0.17 uses the forkserver spawn method, this allows for better segmented memory control and better process management. Some processes are also started with lower priority, allowing the most important processes to have more CPU time when it is required.

### Review Item Improvements

Review items have been refined to behave more intuitively:

- **Revamped stationary object tracking.** Stationary object tracking has been enhanced to use new features to reduce incorrectly marking objects as active:
  - Tracking now uses a history of the object's positions to better avoid inaccurate bounding boxes making the object be considered active.
  - If an object is marked as having moved, Frigate will use image heuristics to compare the object from when it was known to be stationary to double-check if the object has moved from its original position.

- **Smarter handling of loitering objects.** Stationary behavior is now dynamic based on object type. Objects that are normally stationary for long periods (e.g., cars) will no longer keep a review item active indefinitely when stopped inside a loitering zone. Objects that are not expected to remain still (e.g., people) will continue the review item as long as they stay within the zone.

- **Severity-based review item cutoff.** Review items now end when a higher-severity event (such as an `alert` for arriving home) finishes. Ongoing lower-severity motion (e.g., passing cars) will no longer keep the higher-severity review item alive. In these cases, the `alert` ends and a new `detection` review item begins immediately.


### Enrichment Improvements

- LPR now includes a normalization configuration, this allows removing some commonly confused characters such as `-`, ` `, etc. to ensure that plates are more consistently recognized as the same plate. [Documentation](https://docs.frigate.video/configuration/license_plate_recognition#normalization-rules)
- LPR now uses newer PaddleOCR models with support for Chinese characters.
- All enrichments can now be assigned a specific device with the `device` config option. This is useful in cases when multiple GPUs are available. [Documentation](https://docs.frigate.video/configuration/reference)

### Other Improvements
- IPv6 can be toggled via the config with `networking -> ipv6 -> enabled`. [Documentation](https://docs.frigate.video/configuration/reference)
- There is now config support for mapping Frigate roles to arbitrary values used in proxy headers. [Documentation](https://docs.frigate.video/configuration/authentication#role-mapping)
- MQTT now has a dedicated topic for camera health / status. [Documentation](https://docs.frigate.video/integrations/mqtt#frigatecamera_namerolestatus)
- go2rtc support for HomeKit has now been improved, including persistent configuration being saved automatically when a camera is shared with HomeKit. [Documentation](https://docs.frigate.video/guides/configuring_go2rtc#homekit-configuration)
- Add a toggle in the UI Settings to always overlay camera names on the Live dashboard
- Add browser console logging to help debug Live view issues [Documentation](https://docs.frigate.video/configuration/live/#live-player-error-messages)
- Add a fallback timeout value to the UI Settings pane to configure the amount of time to wait to fall back to jsmpeg after the MSE player fails
- Add the ability to download an instant snapshot from single camera Live view
- Recording playback bugfixes and efficiency improvements should cause playback to start more quickly
- User account passwords have a stricter password policy (minimum length and special characters) for improved security
- Add the ability to dynamically toggle GenAI per camera via MQTT