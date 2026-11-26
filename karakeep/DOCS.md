# Karakeep (all-in-one) 💾

[![Source: Karakeep](https://img.shields.io/badge/Source-Karakeep-blue?logo=git)](https://karakeep.app/)

The Karakeep Addon is a bookmark-everything app with a touch of AI, designed specifically for data hoarders. This addon allows you to save and organize your favorite bookmarks, with features like AI-powered search and recommendation.

## Configuration

- `NEXTAUTH_URL`: The URL of the Karakeep instance. Example `http://<homeassistant-ip>:3011`.
- `DISABLE_SIGNUPS`: Whether to disable signups for new users. Defaults to `false`.
- `NEXTAUTH_SECRET`: A secret key used for authentication. Defaults to a random value.
- `MAX_ASSET_SIZE_MB`: The maximum size of assets (e.g. images) that can be uploaded. Defaults to `4`.
- `OCR_LANGS`: A comma-separated list of languages to use for optical character recognition (OCR). Defaults to `eng`.
- `OCR_CONFIDENCE_THRESHOLD`: The minimum confidence threshold for OCR results. Defaults to `50`.
- `LOG_LEVEL`: The log level of the Karakeep application. One of `error`, `warn`, `info`, `http`, `verbose`, `debug` or `silly` (winston's default npm levels). Defaults to `debug` (Karakeep's own default). Note: Karakeep's upstream docs suggest `notice` or `warning`, but those are levels from winston's optional syslog set, which Karakeep does not enable (`winston.createLogger` is called without a `levels` option). With the npm levels Karakeep actually uses, they are unknown level names and mute everything, even errors — use `warn` instead.
- `OPENAI_API_KEY`: An API key for OpenAI. Optional.
- `OPENAI_BASE_URL`: The base URL of the OpenAI API. Optional.
- `OLLAMA_BASE_URL`: The base URL of the OLLAMA API. Optional.
- `INFERENCE_TEXT_MODEL`: The text model to use for inference. Defaults to `gpt-4o-mini`.
- `INFERENCE_IMAGE_MODEL`: The image model to use for inference. Defaults to `gpt-4o-mini`.
- `EMBEDDING_TEXT_MODEL`: The text model to use for embedding. Defaults to `text-embedding-3-small`.
- `INFERENCE_CONTEXT_LENGTH`: The length of the context to use for inference. Defaults to `2048`.
- `INFERENCE_LANG`: The language to use for inference. Defaults to `english`.
- `INFERENCE_JOB_TIMEOUT_SEC`: The timeout for inference jobs in seconds. Defaults to `30`.

More informations about other configs can be found in the [official documentation](https://docs.karakeep.app/configuration)

## Ports

The Karakeep Addon exposes the following ports:

- `3000/tcp`: The web UI port.

## Installation

To install the Karakeep Addon, follow these steps:

1. Open the Home Assistant UI and navigate to the Apps page.
1. Click the "Karakeep" addon.
1. Click the "Install" button.
1. (Optional) under `Configuration` set `NEXTAUTH_URL` as specified above
1. Click the "Open Web UI" button.
1. Create a new user.
1. Happy hoarding!

<!-- APP_AUTHOR_START -->
<hr>
<table>
  <tr>
    <td width="120" align="center" valign="bottom">
      <a href="https://github.com/fabio-garavini">
        <img src="https://www.gravatar.com/avatar/0237c9a30faa34297c155c9f794fe47e?s=112" alt="Fabio Garavini" width="112" height="112" style="border-radius: 50%;">
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
