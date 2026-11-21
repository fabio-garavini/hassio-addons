# Calibre Web 📚

[![Source: Calibre Web](https://img.shields.io/badge/Source-Calibre%20Web-blue?logo=git)](https://github.com/janeczku/calibre-web)

[Calibre Web](https://github.com/janeczku/calibre-web) is a lightweight web
app that provides a clean, browser-based reader for an **existing Calibre
library** (`metadata.db`). Use it when you want to read and browse your
books on any device — phone, tablet, e-reader — without running the full
Calibre desktop.

It integrates with the Home Assistant sidebar via Ingress, so it appears as
a panel right inside your HA UI. If you don't already have a Calibre
library, build one first with the companion **Calibre** app, then point
Calibre Web at its library folder.

![Calibre Web main page](https://github.com/janeczku/calibre-web/wiki/images/main_screen.png)

## ✨ Features

- **Ingress panel** — opens directly in the Home Assistant sidebar, no extra
  port to expose
- **Web-based reader** — read e-books in the browser, on any device
- **Multi-user** — share your library with friends and family, each with
  their own account and permissions
- **OPDS feed** — connect e-reader apps (KyBook, Moon+ Reader, Calibre
  Companion, etc.) via the built-in OPDS catalog
- **Upload & convert** — add new books directly through the web UI
- **Metadata editing** — update covers, tags and author info on the fly
- **Full Calibre bundled** — ebook conversions and metadata extraction work
  out of the box (a full Calibre install is shipped inside the container)

## 🔑 Default Credentials

On first launch:

- **Username:** `admin`
- **Password:** `admin123`

Change them immediately after the first login from
*Admin → Edit users*.

[Official Calibre Web wiki](https://github.com/janeczku/calibre-web/wiki)

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
