# Nextcloud (all in one)

[![Source: Nextcloud](https://img.shields.io/badge/Source-Nextcloud-blue?logo=git)](https://nextcloud.com)

[Nextcloud](https://nextcloud.com/) is the most popular open source content collaboration platform for tens of millions of users at thousands of organizations across the globe

## Installation

1. **Install** Nextcloud
1. Set **admin** `username` and `password`
1. (optional) set `Overwrite URL` to the url you use to access Nextcloud. Example: `https://example.com:8443`
1. Start Nextcloud
1. Open Web UI

## Configs

`DEFAULT_PHONE_REGION` is a 2 letters [country code](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes). for example `IT` for Italy

## Office

1. Install `Collabora CODE` addon and start it
1. Open Nextcloud and install the `Nextcloud Office` app
1. Open `Administration settings` > `Office` and select `Use your own server`
1. Insert your Collabora URL which is `https://<your-ha-ip>:9980`
1. **Enable** `Disable certificate verification`
1. **Save** and you are good to go

## External Storage

Any folder or network storage mounted under `/media` or `/share` is visible inside the add-on and can be accessed by mounting a local folder through the **External Storage app**

## NAS storage

If you want to store your data on a nas, you have to add a network storage for `Share` usage named `nextcloud` **before running Nextcloud for the first time** or you will need to manually move all the contents inside your `/share/nextcloud` folder to your nas before stating the add-on

## Permissions

You can change your data folder owner (user and group) by changing the `PUID` with the user uid and `PGID` with the group uid

For example if you are mounting an NFS share with custom permissions

Nextcloud's configuration and application file permissions are repaired automatically at startup.

### Repairing data permissions

If Nextcloud reports permission problems with its data directory, enable **Apply data permissions** in the app configuration:

1. Enable **Apply data permissions**.
2. Restart the app and wait for startup to complete. This can take a long time for large data directories.
3. Once Nextcloud is working again, disable **Apply data permissions**.

This recursively assigns the data directory to the user configured through `PUID`/`PGID` and grants that user read/write access to files and read/write/traverse access to directories. Enabling the option once is sufficient because these changes persist. It does not need to remain enabled unless permissions need to be repaired again.

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
