# llama.cpp 🦙

This app runs the CPU build of `llama-server` in **router mode**. Models are loaded on demand in separate processes and generation POST requests are routed by the JSON `model` field. The built-in Llama Chat interface is available through Home Assistant ingress, including streaming responses and model management.

## Quick start

1. Install and start the app.
2. Select **Open Web UI** or enable **Show in sidebar**.
3. Download a model from the llama.cpp UI or copy your GGUF files into **Models Directory**.
4. Select the model and start a conversation.

> [!INFO]
> The first request loads it, so it can take significantly longer than later requests.

## Home Assistant integration

To connect the llama.cpp integration manually, open **Settings → Devices & services → Add integration**, select **llama.cpp**, and set the base URL to `http://3b88f413-llamacpp:9931/v1`. Enter the **API Key** too if one is configured.

## Configuration options

The Configuration tab shows a friendly name for each setting. The table shows the effective default value. Settings not explicitly set by the app use the llama.cpp default.

| Configuration field | Default value | Description |
| --- | --- | --- |
| **SSL** | Enabled | Enable HTTPS on the optional direct Web UI and API port. |
| **SSL Certificate File** | `fullchain.pem` | Certificate filename in the Home Assistant `/ssl` directory. |
| **SSL Private Key File** | `privkey.pem` | Private key filename in the Home Assistant `/ssl` directory. |
| **API Key** | None | Optional bearer token required by the server. Recommended whenever the direct port is exposed. Llama Chat asks for this key when configured. |
| **Models Directory** | `/data/models` | Directory containing local GGUF models. Use `/share/models` for custom models. The only allowed `/data` path is `/data/models`. |
| **Model Preset File** | Disabled | Optional INI file with global and per-model router settings. |
| **Maximum Loaded Models** | `4` | Maximum model instances kept loaded simultaneously. `0` means unlimited. |
| **Device Memory Margin (MiB)** | `0` (disabled) | Per-device free-memory target used when loading a model. The router unloads idle least-recently-used models as needed. Models serving requests are not unloaded. Loading still proceeds if the target cannot be met. `0` disables memory-based unloading. This has no effect without GPU devices. |
| **Automatic Model Loading** | Enabled | Load a model automatically when a request selects it. |
| **Context Size** | `0` (model value) | Context tokens per loaded model. `0` uses the model's own value. |
| **Parallel Slots** | `-1` (auto) | Inference slots per loaded model. `-1` = auto. `0` is invalid. |
| **CPU Threads** | `-1` (auto) | CPU threads used during generation. `-1` selects automatically. |
| **Logical Batch Size** | `2048` | Maximum logical batch size for prompt processing. |
| **Physical Batch Size** | `512` | Maximum physical batch size for prompt processing. |
| **Predicted Tokens** | `-1` (unlimited) | Maximum tokens to generate per response. `-1` means unlimited. |
| **GPU Layers** | `auto` | Maximum model layers to store in VRAM: a non-negative integer, `auto`, or `all`. Offload requires a GPU-enabled llama.cpp build. The pinned app image is CPU-only. |
| **Enable Embeddings** | Enabled | Enable the embeddings endpoint when using a supported model. |
| **Enable Reranking** | Disabled | Enable the reranking endpoint when using a supported model. |
| **Embedding Pooling** | Model default | Pooling method for embeddings. |
| **Flash Attention** | `auto` | Enable or disable Flash Attention, or select it automatically. |
| **K Cache Data Type** | `f16` | Data type used for the key-value K cache. |
| **V Cache Data Type** | `f16` | Data type used for the key-value V cache. |
| **KV Cache Offloading** | Enabled | Offload the key-value cache to an available device. |
| **Weight Repacking** | Enabled | Enable model weight repacking when supported. |
| **Model Load Mode** | `auto` | Select mmap, memory locking, DirectIO, or automatic loading. |
| **Lazy Tensor Loading** | `auto` | Read selected model tensors from disk on demand. |
| **NUMA Mode** | Disabled | Control thread distribution on multi-node NUMA systems. |
| **Keep MoE Weights on CPU** | Disabled | Keep all Mixture-of-Experts weights in CPU memory. |
| **CPU MoE Layers** | `0` | Keep the first N Mixture-of-Experts layers in CPU memory. |
| **MoE Cache Size (MiB)** | `0` (disabled) | GPU cache size for Mixture-of-Experts kept on the CPU. `0` disables it. |
| **MoE CPU Cache Share** | `0.00` | Fraction of MoE cache misses computed by the CPU rather than uploaded. |
| **CPU FFN Layers** | `0` | Keep dense feed-forward weights of the first N layers in CPU memory. For MoE expert weights, use CPU MoE Layers instead. |
| **Fit Models to Memory** | Enabled | Automatically adjust unset arguments to fit available device memory. |
| **Fit Target Margin (MiB)** | `1024` MiB per device | Target free-memory margin per device in MiB. Use comma-separated values for multiple devices. One value applies to every device. |
| **Minimum Fit Context** | `4096` | Minimum context size allowed when fitting models to memory. |
| **RPC Servers** | None | Comma-separated remote llama.cpp RPC servers in host:port form. |
| **Automatic Multimodal Projector** | Enabled | Automatically download and use an available multimodal projector. |
| **Offload Multimodal Projector** | Enabled | Offload multimodal projector computation to an available device. |
| **Minimum Image Tokens** | Model value | Minimum token budget for each image. |
| **Maximum Image Tokens** | Model value | Maximum token budget for each image. |
| **Multimodal Batch Tokens** | `1024` | Maximum image tokens processed per multimodal batch. |
| **Video Frame Rate** | `4.0` | Frames per second sampled when processing video input. |
| **Video Timestamp Interval** | `5000` ms | Interval in milliseconds between video timestamps. |
| **Allow Private Media URLs** | Disabled | Allow media downloads from localhost or private network addresses. |
| **Temperature** | `0.80` | Sampling randomness. Lower values are more deterministic. |
| **Top K** | `40` | Limit token selection to the K most probable tokens. `0` disables it. |
| **Top P** | `0.95` | Nucleus sampling cumulative probability threshold. `1.0` disables it. |
| **Minimum Probability** | `0.05` | Minimum token probability relative to the most likely token. `0.0` disables it. |
| **Repetition Penalty** | `1.00` (disabled) | Penalty applied to repeated token sequences. Must be greater than `0`. `1.0` disables the penalty. |
| **Presence Penalty** | `0.00` (disabled) | Penalize tokens already present in the generated text. `0.0` disables it. |
| **Frequency Penalty** | `0.00` (disabled) | Penalize tokens based on their frequency in the generated text. `0.0` disables it. |
| **Backend Sampling** | Disabled | Enable experimental backend sampling. |
| **Prompt Caching** | Enabled | Reuse matching prompt prefixes from earlier requests. |
| **Cache Reuse Chunk Size (Tokens)** | `0` | Minimum chunk size in tokens to reuse through KV shifting. Requires prompt caching. |
| **Context Shifting** | Disabled | Shift context when generating beyond the context limit. |
| **Continuous Batching** | Enabled | Enable continuous/dynamic batching for concurrent requests. |
| **Unified KV Cache** | Enabled when slots are automatic | Share one unified KV buffer across inference sequences. Automatically enabled when Parallel Slots is `-1`. |
| **KV Context per Slot** | `0` (no per-slot limit) | Context limit in tokens per parallel slot. When set without an explicit context size, the shared KV pool is sized to `parallel slots × this value`. |
| **Context Checkpoints** | `32` | Maximum context checkpoints saved per slot. |
| **Checkpoint Minimum Spacing (Tokens)** | `8192` tokens | Minimum token spacing between context checkpoints. `0` has no minimum. |
| **Cache RAM (MiB)** | `8192` MiB (`0` for decision models) | Maximum in-RAM prompt-cache size per loaded model. `-1` is unlimited and `0` disables the cache. |
| **Cache Idle Slots** | Enabled | Save idle slots to the prompt cache when starting a new task, and clear them when using unified KV. Requires nonzero Cache RAM. |
| **Jinja Templates** | Enabled | Use the Jinja template engine for chat and tool calling. |
| **Reasoning Output Format** | `auto` | Controls extraction and placement of reasoning tags. `none` leaves thoughts unparsed in `message.content`. `deepseek` places them in `message.reasoning_content`. `deepseek-legacy` also retains `<think>` tags in `message.content`. |
| **Reasoning Mode** | `auto` | Enable or disable reasoning, or detect it from the chat template. |
| **Reasoning Effort** | `default` | Optional effort level such as minimal, low, medium, high, xhigh, or max. |
| **Reasoning Token Budget** | `-1` (unlimited) | Reasoning token limit. `-1` is unlimited and `0` ends immediately. |
| **Reasoning Budget Message** | None | Message inserted before the closing reasoning tag when budget is exhausted. |
| **Preserve Reasoning History** | Enabled | Preserve reasoning traces in conversation history when supported. |
| **Chat Template Parameters** | None | Additional parameters for the Jinja chat template as a JSON object. |
| **Skip Chat Parsing** | Disabled | Return raw content including reasoning and tool-call markup. |
| **Prefill Assistant Messages** | Enabled | Continue generation when the last message belongs to the assistant. |
| **HTTP Timeout** | `3600` seconds | Server read and write timeout in seconds. |
| **SSE Ping Interval** | `30` seconds | Seconds between stream keepalive pings. `-1` disables pings. |
| **HTTP Threads** | `-1` (auto) | Number of threads used to process HTTP requests. `-1` selects automatically. |
| **Prometheus Metrics** | Disabled | Enable Prometheus-compatible metrics. In router mode, request model-instance metrics with `GET /metrics?model=<model-id>`. |
| **Editable Server Properties** | Disabled | Allow a selected model instance's global properties to be changed through `POST /props?model=<model-id>`. |
| **Slot Monitoring** | Enabled | Expose slot monitoring. In router mode, use `GET /slots?model=<model-id>`. |
| **CORS Origins** | `*` | Comma-separated allowed origins. The special value `localhost` allows same-origin requests only, such as the built-in UI. |
| **CORS Credentials** | Enabled | Allow credentials in cross-origin requests. When origins are `*`, the server echoes the request Origin and allows credentials. Restrict origins for browser-accessible or untrusted deployments. |
| **Offline Mode** | Disabled | Force use of cached models and prevent network access. |
| **Llama Chat Preferences** | None | Llama Chat preferences as a JSON object. |
| **Log Verbosity** | `3` (info) | Log level from 0 (generic) to 5 (debug). |
| **Log Timestamps** | Enabled | Include timestamps in log messages. |
| **Additional Environment Variables** | Empty list | Advanced environment settings such as `HF_TOKEN` or supported `LLAMA_ARG_*` variables. Only variables marked `(env: ...)` in the pinned server's help are read by llama.cpp. Use a model preset for CLI-only options. |

Model instances inherit settings from the router. Performance, sampling, context, slot, and cache limits apply **per loaded model**. Values in **Model Preset File** override the corresponding app settings. Model-specific sections override the global `[*]` section.

Advanced settings are exported as environment variables. Only variables explicitly marked `(env: ...)` in the pinned server's help are read by llama.cpp. The app does not convert arbitrary `LLAMA_ARG_*` names into command-line arguments. Options without environment-variable support must be specified by their CLI keys in **Model Preset File**.

Example advanced configuration:

```yaml
env_vars:
  - key: LLAMA_ARG_JINJA
    value: "true"
  - key: LLAMA_ARG_ENDPOINT_METRICS
    value: "true"
  - key: HF_TOKEN
    value: your-hugging-face-token
```

## Model storage

The default `/data/models` directory and the `/data/cache` Hugging Face download directory are internal app storage. You cannot directly copy files into `/data`.

To load custom models, set **Models Directory** to `/share/models` (recommended) or `/config/models`. Create the directory and copy your GGUF files there. Restart the app after changing the directory or manually adding and removing model files.

The only model directory allowed under `/data` is `/data/models`. Changing **Models Directory** to `/share` or `/config` permanently deletes `/data/models` on the next startup. Copy any models you want to keep before changing this setting.

Single-file models go directly in `models`. Put multi-shard or multimodal models with their projector in a subdirectory, for example:

```text
/share/models/
├── small-chat-Q4_K_M.gguf
└── vision-model/
    ├── vision-model-Q4_K_M.gguf
    └── mmproj-F16.gguf
```

Models stored in `/data/models` and downloads stored in `/data/cache` are excluded from app backups.

## Model presets

To use a preset file, create or edit `preset.ini` in the app config folder and set **Model Preset File** to `/config/preset.ini`. Restart the app after changing the file. See the [llama.cpp preset documentation](https://github.com/ggml-org/llama.cpp/blob/master/docs/preset.md) for the syntax and available settings.

## API access

Ingress is for the Web UI. Home Assistant and other apps can use the internal `http://<app-hostname>:8080/v1` URL without publishing a host port. To use the OpenAI-compatible API from another machine, enable port `8080` in the app's Network settings and use:

```text
http://<home-assistant-host>:8080/v1
```

Use `https://` instead of `http://` for these direct URLs when SSL is enabled.

Useful endpoints include:

- `GET /health`: server health
- `GET /models`: available models and router state
- `POST /models/load` and `POST /models/unload`: explicit model management
- `POST /v1/chat/completions`: chat completions
- `POST /v1/completions`: text completions

The exact model identifier returned by `GET /models` must be used in requests. Do not expose the router directly to untrusted networks. Set **API Key** for direct access and use it as a bearer token. The Web UI will ask for this key when one is configured.

Do not use the ingress port for API integrations. Use the separately enabled direct port.

<!-- APP_AUTHOR_START -->
<hr>
<table>
  <tr>
    <td width="120" align="center" valign="bottom">
      <a href="https://github.com/fabio-garavini">
        <img src="https://www.gravatar.com/avatar/0237c9a30faa34297c155c9f794fe47e?s=112" alt="Fabio Garavini" width="112" height="112" style="border-radius: 50%">
      </a>
    </td>
    <td valign="middle">
      <h3>App made by Fabio Garavini</h3>
      <p><sub>Help me create free and open-source Home Assistant apps for everyone!</sub></p>
      <a href="https://github.com/sponsors/fabio-garavini">
        <img src="https://img.shields.io/badge/support%20my%20work-GitHub%20Sponsors-fe8e86?style=for-the-badge&logo=github" alt="support my work">
      </a>
    </td>
  </tr>
</table>
<!-- APP_AUTHOR_END -->
