# Home Assistant app: Calibre 📚 by Fabio Garavini

[![](https://img.shields.io/static/v1?label=Support+me&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/fabio-garavini)

[Calibre](https://calibre-ebook.com/) is a powerful and easy-to-use e-book
manager. This app packages the full Calibre desktop — library management,
format conversion, metadata editor and e-book viewer — into a single Home
Assistant container, served through a browser-based desktop (KasmVNC) on
port **8181**. Open `https://<your-home-assistant-ip>:8181` and you land on
the Calibre setup wizard — no extra database, no reverse proxy, no VNC
client required.

If you only need a lightweight web *reader* for an existing library, see the
companion **Calibre Web** app instead.

![Calibre](https://calibre-ebook.com/_static/calibre-128.png)

## ✨ Features

- **All-in-one** — full Calibre desktop in your browser, nothing else to
  install
- **Web-based desktop** — KasmVNC serves the Calibre GUI over HTTPS on port
  `8181`
- **First-run wizard** — on first launch you're walked straight through
  creating your library
- **Hardware acceleration** — exposes `/dev/dri`, `/dev/dxg`, `/dev/kfd`
  and a wide range of disk devices for GPU rendering and disk management
- **External storage** — mount local disks (USB) or network shares
  (SMB/CIFS/NFS) directly from the app config
- **Custom environment** — inject arbitrary environment variables into the
  container

[Official Calibre documentation](https://manual.calibre-ebook.com/)
