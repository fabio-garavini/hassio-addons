# Home Assistant add-on: PocketBase 🗄️ by Fabio Garavini

[Pocketbase](https://pocketbase.io) is an open source backend consisting of embedded database (SQLite) with realtime subscriptions, built-in auth management, convenient dashboard UI and simple REST-ish API. It can be used both as Go framework and as standalone application.

## Installation

1. Install the PocketBase addon
1. Edit the addon configuration
1. Start the addon

## Configs

### `ADMIN_EMAIL`

(*Required*)

Admin user email address

### `ADMIN_PASSWORD`

(*Required*)

Admin user password

### `ENCRYPTION_KEY`

(*Required*)

Any random string, used to encrypt PocketBase settings

It's recommended to change the default encryption key

### `TZ`

(*Optional*)

Time zone of the server
