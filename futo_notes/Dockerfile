# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=debian:bookworm-slim
ARG BUILD_VERSION=0.7.0

# renovate: datasource=gitlab-tags depName=futo-notes/futo-notes-server registryUrl=https://gitlab.futo.org
ARG FUTO_NOTES_VERSION=v0.7.0

FROM futotech/notes-server:${FUTO_NOTES_VERSION} AS futo-notes

FROM ${BUILD_FROM}

# Global addon environment.
ENV \
    TERM="xterm-256color" \
    HOME="/root" \
    LANG="C.UTF-8" \
    PS1="$(whoami)@$(hostname):$(pwd)$ " \
    S6_BEHAVIOUR_IF_STAGE2_FAILS=2 \
    S6_CMD_WAIT_FOR_SERVICES_MAXTIME=0 \
    S6_CMD_WAIT_FOR_SERVICES=1 \
    S6_SERVICES_READYTIME=50

# FUTO Notes runtime environment (consumed by `bun dist/index.js`).
# hadolint ignore=DL3064
ENV \
    NODE_ENV=production \
    PORT=3000 \
    SERVICE_PORT=3000 \
    NGINX_PORT=8080 \
    SERVER_PORT=3000 \
    BLOB_DIR=/data/blobs \
    AUTH_MODE=password

# Bundled Postgres runtime environment (consumed by .common/postgres' s6
# services: init-postgres/run reads PGDATA / POSTGRES_USER / POSTGRES_DB / PG_MAJOR).
# hadolint ignore=DL3064
ENV \
    PG_MAJOR=16 \
    PGDATA=/data/postgres \
    POSTGRES_DB=futo_notes \
    POSTGRES_USER=futo_notes \
    POSTGRES_PASSWORD=futo_notes \
    POSTGRES_INITDB_ARGS="--data-checksum"

ENV DATABASE_URL="postgresql:///${POSTGRES_DB:-futo_notes}?host=/var/run/postgresql&user=${POSTGRES_USER:-futo_notes}&password=${POSTGRES_PASSWORD}&options=-csearch_path=public"

# NGINX Install
RUN \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        bash; \
    apt-get clean; \
    rm -fr \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/*

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# App base configuration
ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.18.1"
# renovate: datasource=github-releases packageName=just-containers/s6-overlay versioning=regex:^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)\.(?<other>\d+)$
ARG S6_OVERLAY_VERSION="3.2.1.0"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"
RUN \
    apt-get update \
    \
    && apt-get install -y --no-install-recommends \
        bash \
        ca-certificates \
        curl \
        jq \
        tzdata \
        xz-utils \
        nginx \
        openssl \
    \
    && c_rehash \
    \
    && S6_ARCH="${BUILD_ARCH}" \
    && if [ "${BUILD_ARCH}" = "i386" ]; then S6_ARCH="i686"; \
    elif [ "${BUILD_ARCH}" = "amd64" ]; then S6_ARCH="x86_64"; \
    elif [ "${BUILD_ARCH}" = "armv7" ]; then S6_ARCH="arm"; fi \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-noarch.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-${S6_ARCH}.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-symlinks-noarch.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && curl -L -s "https://github.com/just-containers/s6-overlay/releases/download/v${S6_OVERLAY_VERSION}/s6-overlay-symlinks-arch.tar.xz" \
        | tar -C / -Jxpf - \
    \
    && mkdir -p /etc/fix-attrs.d \
    && mkdir -p /etc/services.d \
    \
    && curl -J -L -o /tmp/bashio.tar.gz \
        "https://github.com/hassio-addons/bashio/archive/${BASHIO_VERSION}.tar.gz" \
    && mkdir /tmp/bashio \
    && tar zxvf \
        /tmp/bashio.tar.gz \
        --strip 1 -C /tmp/bashio \
    \
    && mv /tmp/bashio/lib /usr/lib/bashio \
    && ln -s /usr/lib/bashio/bashio /usr/bin/bashio \
    \
    && curl -L -s -o /usr/bin/tempio \
        "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}" \
    && chmod a+x /usr/bin/tempio \
    \
    && apt-get purge -y --auto-remove \
        xz-utils \
    && apt-get clean \
    && rm -fr \
        /tmp/* \
        /var/{cache,log}/* \
        /var/lib/apt/lists/* \
        /etc/nginx/*

#---------------------------------------------- Postgres & Redis ------------------------------------------------------------#

RUN mkdir /docker-entrypoint-initdb.d

ENV PATH="$PATH:/usr/lib/postgresql/$PG_MAJOR/bin:/usr/lib/bin"

# install Postgres & Redis
RUN set -eux; \
    apt-get update; \
    apt-get install -y --no-install-recommends libnss-wrapper lsb-release postgresql-common; \
    curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc; \
    codename="$(lsb_release -cs)"; \
    printf '%s\n' \
    "Types: deb deb-src" \
    "URIs: https://apt.postgresql.org/pub/repos/apt" \
    "Suites: ${codename}-pgdg" \
    "Architectures: amd64" \
    "Components: main" \
    "Signed-By: /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc" \
    > /etc/apt/sources.list.d/pgdg.sources; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        logrotate \
        postgresql-$PG_MAJOR \
        redis-server; \
    rm -rf /var/lib/apt/lists/*; \
    \
    postgres --version

RUN install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql && \
    install --verbose --directory --owner postgres --group postgres --mode 1777 "$PGDATA"

#---------------------------------------------- App artifacts ------------------------------------------------------------#

RUN \
    groupadd --gid 1000 notes; \
    useradd --uid 1000 --gid notes --home-dir /nonexistent --shell /usr/sbin/nologin notes; \
    mkdir -p /data/blobs /data/db; \
    chown -R notes:notes /data

COPY --from=futo-notes /usr/local/bin/futo-notes-server /usr/local/bin/

#---------------------------------------------- App services ------------------------------------------------------------#
COPY .common/addon-config /
COPY .common/postgres /
COPY .common/nginx /

COPY rootfs/ /


ENTRYPOINT ["/init"]
CMD []

#---------------------------------------------- Image metadata ------------------------------------------------------------#

ARG BUILD_VERSION \
    BUILD_DATE \
    BUILD_DESCRIPTION \
    BUILD_NAME \
    BUILD_REF \
    BUILD_REPOSITORY

LABEL \
    io.hass.name="${BUILD_NAME}" \
    io.hass.description="${BUILD_DESCRIPTION}" \
    io.hass.arch="${BUILD_ARCH}" \
    io.hass.type="addon" \
    io.hass.version="${BUILD_VERSION}" \
    maintainer="Fabio Garavini <info@fabiogaravini.dev>" \
    org.opencontainers.image.title="${BUILD_NAME}" \
    org.opencontainers.image.description="${BUILD_DESCRIPTION}" \
    org.opencontainers.image.vendor="Fabio Garavini Hassio Add-ons" \
    org.opencontainers.image.authors="Fabio Garavini <info@fabiogaravini.dev>" \
    org.opencontainers.image.licenses="MIT" \
    org.opencontainers.image.url="https://github.com/fabio-garavini" \
    org.opencontainers.image.source="https://github.com/${BUILD_REPOSITORY}" \
    org.opencontainers.image.documentation="https://github.com/${BUILD_REPOSITORY}/blob/main/README.md" \
    org.opencontainers.image.created=${BUILD_DATE} \
    org.opencontainers.image.revision=${BUILD_REF} \
    org.opencontainers.image.version=${BUILD_VERSION}
