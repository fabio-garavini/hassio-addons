# Home Assistant add-on: Immich (all in one) 📷 by Fabio Garavini

**Immich** is a self-hosted photo and video backup solution designed to replace proprietary cloud services. This all-in-one addon provides a complete media management ecosystem with AI-powered features.

> [!WARNING]  
> **Project Status**: Immich is under active development. 
> Do not use as your sole photo/video storage solution! 
> *Official developer advisory*

![main screenshot](https://github.com/immich-app/immich/raw/main/design/immich-screenshots.png)

## 🧩 Features

- **Automatic Backup**: Sync from mobile/web clients
- **AI-Powered Search**: Object/face recognition
- **Timeline View**: Chronological media organization
- **Shared Albums**: Collaborative photo management
- **RAW Support**: Professional photography workflows

## 🧰 All-in-One Components

This addon bundles:

- **Immich Server**: Core application
- **Machine Learning**: TensorFlow-based recognition
- **PostgreSQL**: Relational database (with pgvecto.rs extension)
- **Redis**: In-memory database

Connections from Immich to Postgres and Redis use Unix sockets, which **reduce overhead and improve performance**

[Official Immich Documentation](https://immich.app/docs)
