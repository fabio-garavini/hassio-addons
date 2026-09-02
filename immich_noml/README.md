# Home Assistant app: Immich NoML (all in one) 📷 by Fabio Garavini

[![](https://img.shields.io/static/v1?label=Support+me&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/fabio-garavini)

[Immich](https://immich.app) is a self-hosted photo and video backup solution designed to replace proprietary cloud services. This all-in-one addon provides a complete media management ecosystem with AI-powered features.

![main screenshot](https://github.com/immich-app/immich/raw/main/design/immich-screenshots.png)

## ✨ Features

- **Lightweight** — Immich Server, PostgreSQL with VectorChord and Redis in
  a single app, **no machine learning service** (Smart Search and face
  recognition are unavailable), ideal for low-resource devices
- **Automatic backup** — sync photos and videos from mobile/web clients
- **Fast by design** — Immich connects to Postgres and Redis over Unix
  sockets, reducing overhead and improving performance
- **Timeline & shared albums** — chronological media organization and
  collaborative photo management
- **RAW support** — professional photography workflows
- **Hardware acceleration** — support a wide range of AMD, NVIDIA and Intel GPUs
- **External storage** — mount local disks (USB) or network shares
  (SMB/CIFS/NFS) directly from the app config
- **Custom environment** — inject arbitrary environment variables into the
  container

If you want AI-powered search, check the **Immich** (CPU), **Immich
OpenVINO** (Intel GPU) or **Immich Cuda** (NVIDIA GPU) variants.

[Official Immich documentation](https://immich.app/docs)
