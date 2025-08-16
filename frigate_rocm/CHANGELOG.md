# v0.16.0

## Breaking Changes

There are several breaking changes in this release, Frigate will attempt to update the configuration automatically. In some cases manual changes may be required. It is always recommended to back up your current config and database before upgrading:

1. Simply copy your current config file to a new location
2. Stop Frigate and make a copy of the `frigate.db` file

- **The TensorRT detector has been removed for Nvidia GPUs, the ONNX detector should be used instead**. Nvidia recently pushed newer packages and dropped compatibility for older versions of TensorRT. Supporting native TensorRT detector directly has shown to be a large burden, making supporting newer hardware more difficult and increasing the difficulty in updating ONNX runtime. The decision has been made to remove the TensorRT detector which will allow us to focus on supporting more models and bringing more features to the Nvidia platform through ONNX runtime. Users who were running the TensorRT detector will need to update their configuration to use the ONNX detector, and download a new model. YOLO-NAS or YOLOv9 are recommended as they provide superior performance and accuracy compared to the models supported by TensorRT. [Documentation](https://docs.frigate.video/configuration/object_detectors#onnx)

- **The go2rtc audio handling has been updated** to accept any audio codec instead of only AAC. This makes it easier to get audio from cameras that use PCMA/U audio. However, if the recording ffmpeg preset `preset-record-generic-audio-copy` is currently used it likely will need to be changed to `preset-record-generic-audio-aac` to continue to support audio in recordings.

    ```yaml
    ffmpeg:
      ...
      output_args: 
        record: preset-record-generic-audio-aac
   ```
- **Object detection is now disabled by default**. A config migrator will update your config globally with `enabled: true` for `detect:`. If you use Frigate with a read-only config, you may need to edit your own config to enable object detection manually.

    ```yaml
    detect:
      enabled: true
    ```
- **Frigate will no longer fall back to look for a ffmpeg binary in `PATH`**. If you are extending the Frigate image or somehow injecting a custom ffmpeg binary in a place like `/usr/local/bin`, please read the [custom ffmpeg build guide](https://docs.frigate.video/configuration/advanced#custom-ffmpeg-build).
- **Home Assistant Add-on users** will need to be aware of several important breaking changes. See the Important Notes for Home Assistant Add-on Users section below.
- **The base image for Frigate has been updated to Debian Bookworm**. The Jetpack 4 (`jp4`) and Jetpack 5 (`jp5`) images have been removed due to not being compatible with the new base image. A new Jetson Jetpack 6 (`jp6`) build has been contributed by a community member.
- **The camera group icon pack has been updated**. Some of your camera group icons may need to be re-selected.
- **The Hailo driver and firmware has been updated to 4.21.0**. The standard Docker image now provides Hailo support. If you are using Home Assistant Operating System, version 16.0 is required. Other users will need to update the Hailo driver and firmware on their system using the [user installation script](https://github.com/blakeblackshear/frigate/blob/dev/docker/hailo8l/user_installation.sh).
- **The ROCm migraphx detector has been removed:** Instead of separately supporting ROCm via MigraphX and via ONNX, the ROCm (`rocm`) detector has been removed, and the `onnx` detector should be used instead. This change should only require changing the `type: rocm` to `type: onnx` in `detectors`
- **An additional parameter has been added to `movement_weights` for autotracking users**. A config migrator will add the new value so that Frigate starts, but if this fails or you are using `relative` zooming with autotracking, you should remove `movement_weights` from your config and recalibrate.
- **Proxy header mapping for user roles is now required** or setting the `default_role` to `admin` is required to achieve the same functionality as previous versions. This version implements a *Viewer* role, which is now the default for authenticated users without a `role` header map defined in the config. If you are using a proxy, you must include `admin` in your mapped role header in order for admin users to retain their elevated privileges. See the [documentation](https://docs.frigate.video/configuration/authentication#header-mapping).
- **The `strftime_fmt` config option is now deprecated** and will be removed in a future version. The UI will now define time formats based on your language and locale.
- **Some API routes are now protected and require credentials or changes**. With the introduction of the *Viewer* role and the ability to mark review items as *reviewed* separately per-user, changes may be needed to any services making calls to Frigate's API.
- **Some users may need to adjust the `tls_insecure` `onvif` config** if ONVIF PTZ controls were previously working in past versions but fail to work in 0.16. The ONVIF package was upgraded for 0.16, and several users have reported that setting `tls_insecure: false` fixed their issues.

## Important Notes for Home Assistant Add-on Users

**For Home Assistant add-on users only**

The Frigate config directory for add-on users was changed from the Home Assistant config directory to the [add-on config directory](https://github.com/home-assistant/supervisor/pull/4650). With this change, the Frigate config file and database are now part of the add-on backup taken by Home Assistant, no longer needing to backup them manually. Note that only backups **after** 0.16 will benefit of this change. If you took a backup of Frigate 0.15 when updating to 0.16, the Frigate config file and database will not be part of it. In that case, you should still backup them manually before updating to Frigate 0.16.

**Automatic migration**

Upon the first Frigate 0.16 initialization, all Frigate-related files will be moved from the Home Assistant config directory to the Frigate add-on config directory. This will mean these files will no longer be accessible through your Home Assistant `/config` directory. They will now be found in the `/addon_configs` directory, which can also be accessed through the [Terminal](https://github.com/hassio-addons/addon-ssh) or [VS Code](https://github.com/hassio-addons/addon-vscode) add-ons.

In the new directory, the Frigate config file will be named config.yml rather than frigate.yml. This aligns with people running Frigate through other means. If you want to move back to Frigate 0.15 and did not backup the config file, you can copy the `config.yml` from the `/addons_config` back to `/config/frigate.yml` before restoring the add-on. Consider copying back other files as well, like custom model, custom ffmpeg, and custom go2rtc. Note that the database from 0.16 is not compatible with Frigate 0.15 anyway and thus should not be copied back. To restore the database, you must restore it from a manual backup.

**Moving the config directory between add-on variants**

The `/addon_configs` directory contains the config directories of all add-ons. You can move files from one addon config directory to another, like from Frigate Beta to the stable one, or vice-versa. Make sure you do that before uninstalling the add-on, unless you do not select the A*lso permanently delete this addon's data* when uninstalling it.

**Breaking change**

If your Frigate config file refers to any arbitrary files in the Home Assistant config dir, like `echo:/config/` scripts, their references must be manually updated to from `/config/` to `/homeassistant/`.

# New Features

Frigate 0.16 introduces several major new features.

## Face Recognition

Frigate utilizes face detection and recognition to apply sub-labels to known faces. Recognized faces can be included in built-in notifications and integrated into third-party notifications.

Frigate+ is not required to use Face Recognition. However, using a Frigate+ model (or a custom model that detects `face` natively) enhances efficiency by eliminating the need for separate face detection per person.

The accuracy of face recognition heavily depends on the quality of the images used for training. **It is highly recommended to follow the [training guide](https://docs.frigate.video/configuration/face_recognition) to achieve the best results.**

Refer to the [Face Recognition documentation](https://docs.frigate.video/configuration/face_recognition) for more.

## License Plate Recognition (LPR)

Frigate detects and recognizes license plates, saving recognized plates to tracked car objects. Known license plates can also be assigned custom labels (e.g., `AB12345` --> `Bob's Car`).

Frigate+ is not required for License Plate Recognition. However, using a Frigate+ model (or a custom model that detects `license_plate` natively) improves efficiency by eliminating the need for a separate detection model.

For additional features such as regex-based matching, refer to the [License Plate Recognition documentation](https://docs.frigate.video/configuration/license_plate_recognition).

## Viewer Role

Frigate 0.16 introduces a _Viewer_ role that restricts access to system features, the configuration editor, and the Frigate HTTP API. Viewers have permissions to use the Live view, Review, and Explore. 

Additionally, each user can mark review items as *reviewed* independently so that one user's action will not hide the review items from others.

The Users tab in Settings can be used to create users and assign roles, and these roles are enforced when accessing Frigate through the authenticated port. [Documentation](https://docs.frigate.video/configuration/authentication/)

More fine-grained permissions (like denying access to specific cameras, for example) will come in a future version.

Proxies can also now map user roles. See the [Proxy configuration documentation](https://docs.frigate.video/configuration/authentication#proxy-configuration).


## Improved Support For Object Detection Hardware and Models

### Hailo8

The Hailo8 detector has been refactored by the Hailo team to greatly improve object detection performance and to add support for more model types. [Documentation](https://docs.frigate.video/configuration/object_detectors#hailo-8)

### ONNX & OpenVINO

Support has been added for a variety of new models for ONNX and OpenVINO detectors

- Frigate now supports state-of-the-art D-FINE and RF-DETR models via the ONNX and OpenVINO detectors. [Documentation](https://docs.frigate.video/configuration/object_detectors#supported-models-2)
- Add YOLOv3, YOLOv4, and YOLOv9 model support. [Documentation](https://docs.frigate.video/configuration/object_detectors#yolo-v3-v4-v7-v9-1)
- Add YOLOx model support. [Documentation](https://docs.frigate.video/configuration/object_detectors#yolox-1)

### RockChip (RKNN)

RockChip has had the following improvements:

- GPU and NPU stats are now supported in the UI (this requires mapping /sys as read-only, [see the docs for more information](https://docs.frigate.video/frigate/installation#rockchip-platform))
- RKNN Toolkit has been updated to 2.3.2
- There is now built in support for converting custom ONNX models to RKNN format
- Support has been added to the RKNN detector:
  - Built in support has been added for YOLOv9 models [Documentation](https://docs.frigate.video/frigate/installation#rockchip-platform)
  - Built in support has been added for YOLOx models [Documentation](https://docs.frigate.video/frigate/installation#rockchip-platform)

## Camera Improvements

### Dynamically Enable and Disable Cameras

Frigate now offers the ability to enable / disable cameras dynamically, including buttons in the UI, MQTT, and using the `camera.turn_on` / `camera.turn_off` services in the Home Assistant Integration. Disabling a camera stops all of Frigate's decoding and processing for that camera. See the [documentation](https://docs.frigate.video/configuration/live/#disabling-cameras).

### Live Stream Selection

Frigate now allows configuring multiple streams per camera, so that any number of streams for a single camera can be created and selected in the UI. See the [Live view documentation](https://docs.frigate.video/configuration/live).

<img width=\"422\" alt=\"Screenshot 2025-03-22 at 7 49 51 AM\" src=\"https://github.com/user-attachments/assets/3aa494d7-7105-4003-ad37-4654ac5362ad\" />

Camera groups now include per-camera settings to further customize the live streaming behavior of that camera in that camera group.

<img width=\"428\" alt=\"Screenshot 2025-03-22 at 7 53 44 AM\" src=\"https://github.com/user-attachments/assets/e0e258d3-f0f1-42a6-b3a4-00b89d1b4161\" />


Other noteworthy live streaming improvements:

- Create on demand recordings from the single camera Live view in the UI
- Audio can be enabled on Live view dashboards through a right-click context menu
- Streaming statistics make it easy to view live stream mode and performance



## Other UI Changes

There are many other notable improvements to the Frigate UI:

- The review timeline has been rewritten to be more performant and support zooming using pinch-to-zoom on mobile and `Ctrl` + scroll wheel on desktop.
- Plot object paths in the Object Lifecycle pane.
- Add ability to create object masks from bounding boxes in the Object Lifecycle pane by right clicking.
- Add edge/point snapping to the Mask/Zone editor.
- Add the earliest recording date from the database to the Storage Metrics page.
- Add an underline for each day that recordings are available in the History calendar pane.
- Add a scroll bar to Logs pane and stream logs live as they are recorded.
- Add a Frigate+ pane to Settings to show model information and allow selection of a new model from the UI.
- Add the ability to draw a rectangle on the debug view to obtain an area (in pixels and percentage) and size ratio.
- Add the ability to edit sub labels directly in the Tracked Object Details pane.
- Ensure the mute/unmute state is persisted for the HLS player.
- Add camera selection to History view.

## i18n Support
Frigate now supports internationalization and localization, making it possible to change the language of the UI. The language is auto-selected based on your browser locale and can also be changed via the Languages menu in the UI.

Some languages are not fully translated. Translation contributions are welcomed and can be made using [Weblate](https://hosted.weblate.org/projects/frigate-nvr/).

## Backend Features and Performance Improvements

### New Base Image

- The base image for Frigate has been updated to Debian 12 (\"Bookworm\") and Python 3.11, bringing many backend performance improvements. **WARNING:** The popular tteck Proxmox LXC script won't automatically support Frigate 0.16. Changes will need to be made to the script. Proxmox remains an officially unsupported installation method.


### Zones and Object Area
- Add the ability to estimate the speed of objects passing through zones and set a speed threshold to trigger zones. [Documentation](https://docs.frigate.video/configuration/zones#speed-estimation)
- Adds the ability to specify `min_area` and `max_area` as a decimal between 0.000001 and .99 to represent a percentage of the frame. Numbers above 1 will still represent areas in pixels. For reference, 0.000001 represents ~1 pixel at 1280x720.    
- The object area decimal value is now displayed wherever area pixels are displayed in the UI.


### Semantic Search
- Semantic Search is now optional and no longer required to be enabled to use Generative AI.
- Jina V2 can now be used for Semantic Search, providing multi-lingual support. [Documentation](https://docs.frigate.video/configuration/semantic_search#jina-ai-clip-version-2)
- Add the ability to trigger the reindexing of tracked object embeddings directly from the UI.

### Bird Classification
- Add the ability to classify detected birds and add the name to the tracked object's sub label. [Documentation](https://docs.frigate.video/configuration/bird_classification)

### ONVIF and Autotracking
- Implement ONVIF reconnect if a camera goes offline.
- Improve responsiveness of zooming when using relative zooming with autotracking.
- Refined object tracking parameters and use re-identification when autotracking the `person` object.

### Other notable changes

- Export filenames now include the start and end date/time.
- Add title as mp4 metadata to exports.
- Add ability to specify cooldown time and suspend native notifications per camera. [Documentation](https://docs.frigate.video/configuration/notifications)
- Add an API endpoint, `/recordings/summary`, to return true/false for each day that recordings are available.
- Implement de-duplication of log entries to prevent log flooding from the same message.
- Add support for SR-IOV GPU stats.
