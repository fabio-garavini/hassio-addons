# Home Assistant add-on: Nextcloud (all in one) by Fabio Garavini

[Nextcloud](https://nextcloud.com/) is the most popular open source content collaboration platform for tens of millions of users at thousands of organizations across the globe

## Installation

The installation of this add-on is pretty straightforward and not different in
comparison to installing any other Home Assistant add-on.

1. Click the "Install" button to install the add-on.
1. Start the add-on.
1. Click the "OPEN WEB UI" button and follow the setup instructions.
1. Ready to go!

## Configs

`DEFAULT_PHONE_REGION` is a 2 letter [country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes). for example `IT` for Italy

## External Storage

Any folder or network storage mounted under `/media` or `/share` is visible inside the add-on and can be accessed by mounting a local folder through the External Storage app

## NAS storage

If you want to store your data on a nas, you have to add a network storage for `Share` usage named `nextcloud` **before running Nextcloud for the first time** or you will need to manually move all the contents inside your `/share/nextcloud` folder to your nas before stating the add-on

## Permissions

You can change your data folder owner (user and group) by changing the `PUID` with the user uid and `PGID` with the group uid

For example if you are mounting an NFS share with custom permissions
