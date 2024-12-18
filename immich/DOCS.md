# Home Assistant add-on: Immich (all in one) by Fabio Garavini

[Immich](https://github.com/immich-app/immich) is a high performance self-hosted photo and video management solution

> [!WARNING]
> The project is under very active development. Expect bugs and changes. Do not use it as the only way to store your photos and videos!
> *from the project developers*

## About

Monolithic version of Immich composed of:

- Immich
- Immich Machine Learning
- PostgreSQL with pgvecto.rs
- Redis

Just one click install

## Installation

The installation of this add-on is pretty straightforward and not different in
comparison to installing any other Home Assistant add-on.

1. Click the "Install" button to install the add-on.
1. Start the add-on.
1. Click the "OPEN WEB UI" button and follow the setup instructions.
1. Ready to go!

## External Libraries

Any folder or network storage mounted under `/media` or `/share` is visible inside the add-on and thus can be used as external library

## NAS storage

If you want to store your immich library on your nas, you have to add a network storage for `Media` usage named `immich` **before running Immich for the first time** or you will need to manually move all the contents inside your `/media/immich` folder to your nas before stating the add-on

## Permissions

You can change your library owner (user and group) by changing the `PUID` with the user uid and `PGID` with the group uid

For example if you are mounting an NFS share with custom permissions
