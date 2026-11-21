# Calibre 📚

[![Source: Calibre](https://img.shields.io/badge/Source-Calibre-blue?logo=git)](https://calibre-ebook.com/)

[Calibre](https://calibre-ebook.com/) is a powerful, open-source e-book
manager. This app runs the **full Calibre desktop** in your browser, including
library management, metadata editing, format conversion, the e-book viewer and
Calibre's built-in Content server.

The app is **all-in-one**: no external database, desktop installation or VNC
client is required. It is based on the
[LinuxServer.io Calibre image](https://docs.linuxserver.io/images/docker-calibre/)
and uses [Selkies](https://docs.linuxserver.io/selkies/) to stream the desktop
to a modern browser over HTTPS.

> [!IMPORTANT]
> The desktop Web UI has **no authentication by default**. Anyone who can reach
> it can control Calibre and open a privileged terminal inside the app. Keep it
> on a trusted local network, or configure authentication and a secure remote
> access method as described in [Securing access](#-securing-access).

[Official Calibre user manual](https://manual.calibre-ebook.com/)

---

## 🤔 Calibre, Calibre Web or COPS?

These applications solve different problems and can also be used together:

| Application | Best for | What it does |
| ----------- | -------- | ------------ |
| **Calibre** (this app) | Creating and maintaining a library | Full desktop tools for importing books, editing metadata, converting formats, managing devices and serving books |
| **[Calibre Web](../calibre-web/DOCS.md)** | A polished multi-user web interface | Browsing, reading, downloading and uploading books from an **existing** Calibre library; includes OPDS and user permissions |
| **[COPS](https://github.com/mikespub-org/seblucas-cops)** | A small HTML/OPDS catalog | Publishing an **existing** Calibre library without running the Calibre desktop; it is not included in this repository |

Choose **Calibre** if you need to create a library or use Calibre's management
and conversion tools. Choose **Calibre Web** or **COPS** if your library already
exists and you primarily need a lightweight interface for readers. A common
setup is Calibre for administration and Calibre Web for everyday reading.

---

## 📥 Installation

The app supports Home Assistant systems with **amd64 (x86-64)** or
**aarch64 (ARM64)** architectures.

1. Add this repository to the Home Assistant App Store, if you have not already:

   [![Open your Home Assistant instance and show the app add repository dialog with a specific repository URL pre-filled.](https://my.home-assistant.io/badges/supervisor_add_addon_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Ffabio-garavini%2Fhassio-addons)

2. Go to **Settings → Apps → App Store**, search for **Calibre** and select
   **Install**.
3. On the app page, open **Configuration** and adjust any options you need.
   The defaults are sufficient for a first local installation.
4. Select **Start** and wait for the app to finish starting.
5. Select **Open Web UI**, or visit
   `https://<home-assistant-address>:8181` directly.
6. Your browser will warn about the app's self-signed certificate. This is
   expected for direct local access; proceed to the site.
7. Follow the [first-run setup](#-first-run-setup) below.

> [!NOTE]
> Calibre does **not** use Home Assistant Ingress. The Web UI opens in a
> separate browser tab on port `8181`; it does not add a sidebar panel.

---

## 🚀 First-run setup

On a new installation, Calibre opens its setup wizard and asks where to create
the library.

### Choose a library location

The recommended location is:

```text
/config/Calibre Library
```

This keeps Calibre's settings and the complete library in the app's persistent
configuration folder. If you want to use the same library with Calibre Web,
choose a shared local folder instead, for example:

```text
/share/calibre/Calibre Library
```

Calibre defaults to `PUID`/`PGID` `0`/`0`, while Calibre Web defaults to
`1000`/`1000`. If Calibre Web should upload books or edit metadata, configure
matching IDs in both apps **before creating or importing the library**, or
arrange suitable shared-group ownership and write permissions. Otherwise,
Calibre Web may be able to read the library but fail to modify it.

Use an **empty folder** to create a new library. To open an existing library,
select the folder that directly contains its `metadata.db` file. Do not select
a parent folder or an arbitrary folder of loose e-book files.

> [!IMPORTANT]
> `FILE_MANAGER_PATH` controls where the browser's **file upload/download
> manager** starts. It does **not** choose the Calibre library. The library
> location is selected in Calibre's setup wizard or later through the Calibre
> library menu.

After finishing the wizard:

1. Add books with **Add books** in the Calibre toolbar.
2. Check that you can open a book and see its cover and metadata.
3. Set a Web UI username and password if the app is reachable by other people.
4. Create a backup after importing or converting a large collection.

See [Storage](#-storage) before placing an active library on a NAS or external
disk.

---

## 🖥️ Using the browser desktop

The page is a remote Calibre desktop, not a separate web reimplementation.
Most actions therefore work exactly as they do in desktop Calibre.

- Use the **Selkies sidebar** for fullscreen, resolution, stream quality,
  clipboard and file transfer controls. On a slow connection, reduce the frame
  rate or stream quality.
- On a touch device, use the sidebar's touch controls and on-screen keyboard.
- If the Calibre window does not fit, use fullscreen or adjust the resolution
  and scaling in the sidebar.
- The first connection can briefly show a black or loading screen while the
  desktop starts.
- For detailed instructions on adding books, editing metadata, conversion and
  device support, use the [Calibre user manual](https://manual.calibre-ebook.com/).

### Uploading and importing books

There are two convenient ways to import books:

1. **Files already on Home Assistant storage:** copy them to a staging folder
   under `/share` or `/media`, then use **Add books** in Calibre and select
   them.
2. **Files on your computer:** open **Files** in the Selkies sidebar and upload
   them. They are placed in `FILE_MANAGER_PATH` (`/share/calibre` by default).
   Then select those files with **Add books** in Calibre.

Adding a book copies it into the Calibre-managed library. Keep incoming files
in a separate staging folder; **do not manually copy, move, rename or delete
files inside the library folder**. Calibre manages that folder and its
`metadata.db` database itself.

---

## 🌐 Calibre Content server and OPDS

The Content server is Calibre's lightweight website for browsing, reading and
downloading books. It is separate from the desktop Web UI and is **disabled by
default**.

### Enable the Content server

1. Open the Calibre desktop Web UI.
2. Go to **Preferences → Sharing → Sharing over the net**.
3. Set the port to **`8081`**.
4. Enable **Run server automatically when calibre starts**.
5. For access by other users or devices, enable username/password protection
   and configure Content server users in the same settings area.
6. Apply the settings. If necessary, use **Connect/share → Start Content
   server** to start it immediately.
7. In Home Assistant, open **Settings → Apps → Calibre → Configuration →
   Network**, set the host port for **`8081/tcp`** (for example `8081`), save
   and restart the app.

You can then use these addresses, replacing `homeassistant` and `8081` with
your host and configured host port:

| Purpose | Address |
| ------- | ------- |
| Web catalog and browser reader | `http://homeassistant:8081/` |
| OPDS catalog for compatible reading apps | `http://homeassistant:8081/opds` |
| Simplified interface for older browsers | `http://homeassistant:8081/mobile` |

The Calibre app must remain running while the Content server is in use.

> [!WARNING]
> `CUSTOM_USER` and `PASSWORD` protect the **desktop Web UI only**. They do not
> create accounts for the Content server. Configure Content server
> authentication separately, and do not expose its unencrypted HTTP port to the
> internet. Use a VPN or a correctly configured HTTPS reverse proxy for remote
> access.

For more details, see the official
[Calibre Content server documentation](https://manual.calibre-ebook.com/server.html).

---

## 🔁 Integrating with other apps

Calibre does not require a special plugin to integrate with the other apps in
this repository. Most integrations use either a shared folder or an HTTP
endpoint. Keep file ownership, database writes and access control in mind when
choosing a workflow.

| App or client | Integration | Recommended use |
| ------------- | ----------- | --------------- |
| **[Calibre Web](../calibre-web/DOCS.md)** | Read the same Calibre library from `/share` | Desktop library management in Calibre, polished reading and user access in Calibre Web |
| **[Nextcloud](../nextcloud/DOCS.md)** | Mount a shared import folder through Nextcloud's External Storage app | Upload books from phones or computers, then import them with Calibre |
| **[Syncthing](../syncthing/DOCS.md)** | Synchronize staging folders or backup copies | Move books between devices and keep an additional copy of the library |
| **[Cloudflared](../cloudflared/DOCS.md)** | Publish the desktop or Content server through a secured tunnel | Remote access without router port forwarding |
| **OPDS readers** | Use the Content server's `/opds` endpoint | Browse and download books in compatible reader apps |
| **KOReader** | Use the Content server's `/kosync` endpoint | Synchronize reading progress between supported devices |

### Calibre Web: use one library for administration and reading

This is the most useful companion setup. Calibre provides the full management
tools, while Calibre Web provides a lightweight reader with Home Assistant
Ingress, OPDS and per-user permissions.

1. In Calibre's setup wizard, create the library in a shared local folder such
   as **`/share/calibre/Calibre Library`**. Use an empty folder for a new
   library.
2. Set the same numeric `PUID` and `PGID` in **both apps before importing
   books**. For example, use `1000`/`1000` to match Calibre Web's defaults.
   Setting Calibre's IDs to `1000`/`1000` is simpler than changing ownership
   later. Apply the change and check that both apps can read and write the
   folder.
3. Add and organize books with Calibre. The folder must directly contain
   `metadata.db` and Calibre's author/title subfolders.
4. In Calibre Web, open **Admin → Edit Calibre Database Location** and enter
   the **same container path**, for example `/share/calibre/Calibre Library`.
5. Use Calibre for imports, conversions and bulk metadata changes. Use Calibre
   Web for everyday browsing, reading and downloading. Avoid heavy writes from
   both apps at the same time; stop the other app during large maintenance
   operations.

Calibre Web has its own `app.db` and user accounts in `/config`. Those accounts
are separate from Content server users and from the desktop Web UI's basic
authentication. Do not copy `app.db` or Calibre Web's settings into the Calibre
library.

### Nextcloud: upload books to an import folder

1. Create a staging folder such as **`/share/calibre/incoming`**.
2. In Nextcloud, install and enable the **External storage support** app if it
   is not already enabled.
3. Open **Administration settings → External storages**, add a **Local** mount,
   and point it at `/share/calibre/incoming`. Give it a recognizable name such
   as `Calibre imports`. Ensure Nextcloud's user has write access to the
   folder.
4. Upload EPUB, PDF or other supported files to that folder in Nextcloud.
5. In Calibre, choose **Add books** and select the files from the same path.

The uploaded files are copied into Calibre's managed library during import.
Keep the Nextcloud folder as a staging area, not as the active Calibre library.
The same pattern works with other file-sharing apps that can access `/share`.

### Syncthing: synchronize imports and backups

Use Syncthing for two different workflows:

- **Import folder:** synchronize `/share/calibre/incoming` with a folder on
  another computer, then import new files with Calibre.
- **Backup copy:** periodically copy the complete library to another device.
  For a consistent copy, finish library operations and stop Calibre and Calibre
  Web before synchronizing it.

Do not live-synchronize an actively changing library between multiple writable
Calibre installations. File locking and synchronization conflicts can leave
`metadata.db` inconsistent with the book files. Keep one authoritative active
library and use the other devices for staging or backups.

### Cloudflared: secure remote access

A Cloudflare Tunnel can expose the desktop without forwarding a router port:

1. Set both `CUSTOM_USER` and `PASSWORD` in Calibre, or preferably protect the
   public hostname with **Cloudflare Access** as well.
2. In the Cloudflare Zero Trust dashboard, create a public hostname for the
   desktop and point it at `https://<home-assistant-address>:8181`.
3. Because Calibre uses a self-signed certificate, enable the tunnel's TLS
   verification bypass for this backend or configure a certificate that your
   tunnel trusts. Keep the connection from the browser to Cloudflare encrypted.
4. Test the desktop, including its streaming connection, before relying on it
   remotely.

The Content server can instead be published as a separate hostname pointing at
`http://<home-assistant-address>:8081`. Enable its own authentication first,
and prefer HTTPS at the public endpoint. Do not publish either service without
authentication; the desktop includes a privileged terminal.

### OPDS readers and KOReader

After [enabling the Content server](#-calibre-content-server-and-opds):

- Point OPDS-compatible readers at `http://<home-assistant-address>:8081/opds`.
- In KOReader, open **Tools → Progress sync → Custom sync server** and use
  `http://<home-assistant-address>:8081/kosync`, together with a Content server
  username and password.
- For older or limited browsers, use
  `http://<home-assistant-address>:8081/mobile`.

Replace `8081` if you selected a different host port. Use a secured reverse
proxy or tunnel for remote devices instead of exposing plain HTTP.

### Other repository apps

Collabora CODE and Paperless are useful for office documents but do **not**
integrate directly with Calibre's database or book viewer. There is no need to
connect them to Calibre; use a shared import folder only if your workflow
involves documents that you also want to import as books.

---

## ⚙️ Configuration options

Changes made in **Settings → Apps → Calibre → Configuration** require an app
restart.

| Option | Type | Required | Default | Description |
| ------ | ---- | -------- | ------- | ----------- |
| `PUID` | integer | Yes | `0` | Numeric user ID used to run Calibre. The default is root. Set this to the owner of your files when required by external storage permissions. |
| `PGID` | integer | Yes | `0` | Numeric group ID used to run Calibre. Normally changed together with `PUID`. |
| `TZ` | string | No | `Etc/UTC` | Timezone for the app, using a name such as `Europe/Rome`. |
| `FILE_MANAGER_PATH` | string | No | `/share/calibre` | Initial folder for Selkies file uploads and downloads. This is not the Calibre library setting. The folder must be writable by the configured `PUID`/`PGID`. |
| `CUSTOM_USER` | string | No | `abc` when authentication is enabled | Username for desktop Web UI HTTP basic authentication. Set this together with `PASSWORD` to enable authentication and choose a non-default username. |
| `PASSWORD` | password | No | — | Set this together with `CUSTOM_USER` to enable desktop Web UI HTTP basic authentication. Leave both empty only on a trusted network. |
| `CLI_ARGS` | string | No | — | Additional command-line arguments passed to the Calibre GUI at startup. Most users should leave this empty. |
| `storage_mounts` | list | No | `[]` | Local disks and SMB/CIFS/NFS shares mounted below `/mnt/`. See [External storage mounts](#external-storage-mounts). |
| `env_vars` | list | No | `[]` | Extra environment variables for the LinuxServer/Selkies image. Each entry has a string `key` and `value`. |

> [!CAUTION]
> On startup, LinuxServer recursively assigns `/config` to the configured
> `PUID`/`PGID`. This can delay startup considerably for a large library stored
> there. Ownership of libraries in `/share`, `/media` or `/mnt` is **not**
> recursively repaired; correct ownership and permissions on those locations
> manually or restore the previous IDs if Calibre can no longer read them.

### Example configuration

```yaml
PUID: 0
PGID: 0
TZ: Europe/Rome
FILE_MANAGER_PATH: /share/calibre
CUSTOM_USER: calibre-admin
PASSWORD: "replace-with-a-long-unique-password"
CLI_ARGS: ""
storage_mounts: []
env_vars:
  - key: LC_ALL
    value: it_IT.UTF-8
```

Environment variable values are strings; quote values that YAML could
otherwise interpret as booleans or numbers. Available Selkies settings are
documented in the
[Selkies configuration reference](https://docs.linuxserver.io/selkies/user-guide/configuration/).
For example, GPU detection is automatic when a supported GPU is available, but
can be disabled with `AUTO_GPU` set to `"false"`.

---

## 🔌 Ports

| Container port | Default host port | Protocol | Purpose |
| -------------- | ----------------- | -------- | ------- |
| `8181/tcp` | `8181` | HTTPS | Full Calibre desktop through Selkies; used by **Open Web UI** |
| `8081/tcp` | Disabled | HTTP | Optional Calibre Content server and OPDS catalog; must also be enabled inside Calibre |

Publishing a port on the Home Assistant host does not forward it through your
router. No router port forwarding is needed for normal local use, and direct
internet forwarding is not recommended.

The LinuxServer image also has an internal HTTP desktop port (`8080`) for
reverse-proxy setups. This Home Assistant app does not publish that port; use
the HTTPS endpoint on `8181`.

---

## 💾 Storage

The following Home Assistant folders are available inside the app:

| Home Assistant folder | Container path | Access | Purpose |
| --------------------- | -------------- | ------ | ------- |
| App configuration | `/config` | Read/write | Calibre preferences, application state and the recommended default library |
| Private app data | `/data` | Read/write | Home Assistant app data and options; do not use this for your library |
| Media | `/media` | Read/write | Existing media, imports or an alternative library location |
| Share | `/share` | Read/write | Files shared with other apps, including Calibre Web |
| SSL | `/ssl` | Read-only | Available to the container, but not used for the desktop's built-in certificate |
| External mounts | `/mnt/<path>` | Depends on mount | Local disks and network shares configured in `storage_mounts` |

A Calibre library is the **entire folder** containing `metadata.db`, book files,
covers and Calibre's author/title subfolders. Back up and restore the whole
folder, not just `metadata.db`.

### Choosing between local and network storage

- **`/config/Calibre Library`** is the simplest and best-supported default.
- **`/share/calibre/Calibre Library`** is convenient when Calibre Web needs the
  same library on the same Home Assistant host.
- A **local ext4 USB disk** can be used when additional local capacity is
  needed. Ensure it is mounted before Calibre starts.
- Calibre upstream
  [does not recommend keeping an active library on a network drive](https://manual.calibre-ebook.com/faq.html#i-am-getting-errors-with-my-calibre-library-on-a-networked-drive-nas).
  Network filesystems can provide unreliable file locking and may corrupt the
  SQLite database. Prefer keeping the active library on local storage and use
  NAS folders for imports and backups instead.

When sharing a library with Calibre Web, remember that the two apps have
different default `PUID`/`PGID` values. Align them before populating the
library, or configure shared-group write permissions, if Calibre Web needs to
upload or edit books.

If Calibre Web or COPS reads the same library, avoid performing writes from
multiple applications at once. Use Calibre for imports, conversions and bulk
metadata changes, and stop the other app during large maintenance operations.

### External storage mounts

You can configure local disks and SMB/CIFS/NFS shares in `storage_mounts`.
Each `path` is relative to `/mnt/`; for example, `path: books` makes the share
available as `/mnt/books`.

```yaml
storage_mounts:
  # Existing local disk or partition
  - type: local
    mount: disk/by-uuid/11c83a29-04e7-453d-8fd4-f3022ea3b0ca
    path: books

  # SMB / Windows share
  - type: smb
    mount: //192.168.1.10/books
    path: nas-books
    username: reader
    password: "share-password"
    options: "vers=3.0,_netdev,noserverino,rw"

  # NFS share
  - type: nfs
    mount: 192.168.1.10:/export/books
    path: nfs-books
    options: "vers=4,ro,soft"
```

| Field | Applies to | Description |
| ----- | ---------- | ----------- |
| `type` | All | `local`, `smb`, `cifs` or `nfs` |
| `mount` | All | Device name/path for local storage, `//server/share` for SMB/CIFS, or `server:/export/path` for NFS |
| `path` | All | Destination folder below `/mnt/`; do not use an absolute path or `..` |
| `options` | All | Optional mount options; defaults depend on the mount type |
| `username` | SMB/CIFS | Share username; guest access is attempted when omitted |
| `password` | SMB/CIFS | Share password |
| `auto_format` | Local | With `erase`, initialize a whole disk with GPT and an ext4 partition, or format an already-selected partition as ext4 |
| `erase` | Local | Permit the selected disk or partition to be erased during formatting |

> [!CAUTION]
> **`auto_format: true` together with `erase: true` destroys all data on the
> selected disk or partition.** Verify the device name and serial in the app log before
> using these options. After the disk is initialized, copy the UUID printed in
> the log, replace `mount: sda` with `mount: disk/by-uuid/<UUID>`, and remove
> `auto_format` and `erase` before restarting.

You can alternatively add an SMB or NFS share under **Settings → System →
Storage** in Home Assistant and access it through its `/share` or `/media`
path. This is often easier when several apps need the same share.

---

## 🔐 Securing access

### Desktop Web UI

For basic protection on a trusted LAN:

1. Set `CUSTOM_USER` to a non-default username and set `PASSWORD` to a long,
   unique password. Set **both options together** to enable HTTP basic
   authentication.
2. Restart the app and verify that the browser asks for those credentials.

HTTP basic authentication is only a basic access gate. The Selkies desktop
includes a terminal with passwordless `sudo`, and this app also has hardware
and storage permissions. Treat every person with desktop access as an app
administrator.

For remote access, prefer a VPN. If you use a reverse proxy instead, follow
the [Selkies reverse-proxy guide](https://docs.linuxserver.io/selkies/user-guide/reverse-proxy/)
and provide robust authentication, TLS and WebSocket support. A proxy that
validates upstream certificates must either trust the app's self-signed
certificate or skip verification for this backend. Do not expose port `8181`
directly through router port forwarding.

### HTTPS certificate

Port `8181` always uses HTTPS with a certificate generated by the base image.
The `ssl`, `certfile` and `keyfile` options used by some other apps are not
available here. A browser warning is normal when connecting directly. A
properly configured reverse proxy can present a trusted certificate to remote
clients.

### Content server

The Content server has its own optional user database and password settings in
**Preferences → Sharing → Sharing over the net**. Enable them before sharing
the catalog beyond your trusted devices, and use TLS through a reverse proxy
for remote access.

Advanced users can also apply Selkies hardening variables through `env_vars`;
see [Security and Hardening](https://docs.linuxserver.io/selkies/user-guide/security/).
Test these carefully because disabling terminals, file transfers or desktop
tools changes the workflows described in this guide.

---

## 🛟 Backup, restore and updates

### Backup

Back up both:

- the **complete Calibre library folder**, including `metadata.db`; and
- Calibre's `/config` application settings if the library is stored elsewhere.

This app uses Home Assistant's default **hot backup** mode, which backs it up
while it is running. For a consistent manual backup of the SQLite database:

1. Finish imports, conversions and metadata operations.
2. Stop Calibre Web and any other application using the same library.
3. Stop the Calibre app.
4. Create the Home Assistant backup and include Calibre. If the library is in
   `/share`, `/media` or on external storage, include or separately back up
   that location as supported by your backup workflow.
5. Start the apps again after the backup finishes.

### Restore

Restore the complete library folder with its original directory structure,
then restore the app configuration or the relevant Home Assistant backup. Keep
the apps stopped while copying the library back, and check file ownership
before starting Calibre again.

### Updates

Install updates through Home Assistant's app update mechanism. Persistent data
in `/config`, `/share`, `/media` and mounted storage survives normal app
updates. Create a backup first, and do not use an in-container or manual Calibre
installation to replace the bundled version.

---

## 🚨 Troubleshooting

### The Web UI does not load

- Use **`https://`**, not `http://`, with port `8181`.
- Confirm that the app is running and that host port `8181` is still configured.
- Accept the self-signed certificate warning for direct local access.
- Wait a few seconds and reload if the first screen is black. Try a current
  Chrome, Edge, Firefox or Safari browser.
- Check **Settings → Apps → Calibre → Log** for startup errors.

### Calibre asks to create a library again or books appear missing

Calibre may be pointing at a new or different library folder. Use Calibre's
library menu to switch to the folder that contains your existing
`metadata.db`, normally `/config/Calibre Library` or your chosen shared path.
Do not initialize a new library over an existing one. If the folder is on an
external mount, confirm that it mounted successfully before starting Calibre.

### Uploaded files cannot be found

Check `FILE_MANAGER_PATH` and look in that folder with Calibre's **Add books**
dialog. The folder must exist or be creatable, and it must be writable by the
configured `PUID`/`PGID`. Uploading through Selkies only transfers the file;
you must still add it to Calibre.

### Books cannot be added or metadata cannot be saved

- Confirm that the library is under a writable mapped folder.
- Check available disk space.
- If you changed `PUID`/`PGID`, verify ownership and permissions on the entire
  library and restore the previous IDs if necessary.
- For SMB/NFS, verify that the server export itself allows writes.
- Move an active library off network storage if you see SQLite locking or
  database errors.

### The Content server cannot be reached

- Enable it in **Preferences → Sharing → Sharing over the net** and keep its
  internal port set to `8081`.
- Start it with **Connect/share → Start Content server**, or enable automatic
  startup and restart the app.
- Publish host port `8081/tcp` in the app's **Network** configuration.
- Use **`http://`**, not `https://`, for direct Content server access.
- Remember that desktop and Content server credentials are configured
  separately.

### An external disk or share does not appear

Check the app log for the detected device name, mount path and mount error.
Confirm the source format, credentials, network connectivity and server-side
permissions. After formatting a local disk, switch to its UUID and disable
`auto_format` and `erase` as described above.

### The desktop is slow

Use the Selkies sidebar to lower the frame rate or quality, enable fullscreen,
and close unnecessary conversions or viewer windows. GPU acceleration is
optional and is detected automatically when supported hardware is available.
Large imports and conversions can temporarily use substantial CPU and memory.

### The app fails to start after a configuration change

Review **Settings → Apps → Calibre → Log**, then temporarily remove recently
added `env_vars`, `CLI_ARGS` and `storage_mounts` entries. Check that YAML
values have the expected types and that environment variable values are
strings.

When requesting help, include the app version, architecture, relevant log
messages, library location and the steps to reproduce the problem. Redact
passwords, share credentials and tokens.

---

## ❓ Support and further reading

- [Open an issue for this Home Assistant app](https://github.com/fabio-garavini/hassio-addons/issues)
- [Official Calibre user manual](https://manual.calibre-ebook.com/)
- [Calibre frequently asked questions](https://manual.calibre-ebook.com/faq.html)
- [Calibre Content server](https://manual.calibre-ebook.com/server.html)
- [Calibre community forum](https://www.mobileread.com/forums/forumdisplay.php?f=166)
- [LinuxServer.io Calibre image](https://docs.linuxserver.io/images/docker-calibre/)
- [Selkies web client guide](https://docs.linuxserver.io/selkies/user-guide/web-client/)
- **[Calibre Web app documentation](../calibre-web/DOCS.md)**

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
