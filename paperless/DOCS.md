# Home Assistant add-on: Paperless 📄 by Fabio Garavini

[Paperless-ngx](https://docs.paperless-ngx.com) is a community-supported open-source document management system that transforms your physical documents into a searchable online archive so you can keep, well, less paper.

## Installation

1. Install the Paperless addon
1. Edit the addon configuration
1. Start the addon

## Configs

### `PAPERLESS_TIME_ZONE`

(*Required*)

Time zone

### `PAPERLESS_ADMIN_USER`

(*Required*)

Username of the admin user

### `PAPERLESS_ADMIN_PASSWORD`

(*Required*)

Password of the admin user

### `PAPERLESS_OCR_LANGUAGE`

(*Optional*)

Documents scan language

### `PAPERLESS_URL`

(*Optional*)

Full URL of the Paperless application

### `PAPERLESS_SECRET_KEY`

(*Optional*)

Any sequence of characters used to generate session tokens. If you expose paperless on the internet, you need to change this, since the default secret is well known.

## NAS storage

If you want to store your documents on a nas, you have to add a network storage for `Share` usage named `paperless` **before running Paperless addon for the first time** or you will need to manually move all the contents inside your `/share/paperless` folder to your nas before stating the add-on
