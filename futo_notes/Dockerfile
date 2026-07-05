# check=skip=SecretsUsedInArgOrEnv
# Base image: Alpine variant of oven/bun (provides `bun` + Alpine's musl libc).
# Matches `build.yaml`'s `build_from` so the HA builder's --target resolves
# to this base.
ARG BUILD_FROM=oven/bun:alpine
ARG BUILD_VERSION=0.5.1

# renovate: datasource=gitlab-releases depName=futo-notes/futo-notes-server registryUrl=https://gitlab.futo.org
ARG FUTO_NOTES_VERSION=0.5.1

#---------------------------------------------- Stage 1: build FUTO Notes from source ------------------------------------------------------------#
FROM ${BUILD_FROM} AS futo-notes-builder

ARG FUTO_NOTES_VERSION

RUN apk add --no-cache git ca-certificates

WORKDIR /app

# Clone the pinned upstream tag shallowly and build the production bundle.
# esbuild inlines migrations into the bundle (static imports), so we do NOT
# need to keep src/ at runtime.
RUN git clone --depth 1 --branch "v${FUTO_NOTES_VERSION}" https://gitlab.futo.org/futo-notes/futo-notes-server.git .; \
    bun install --frozen-lockfile; \
    bun run build; \
    ls dist/index.js

#---------------------------------------------- Stage 2: production image ------------------------------------------------------------#
# Start from oven/bun:alpine (already provides `bun` + the unprivileged `bun`
# user/group). Layer postgres + s6-overlay + bashio + tempio on top, then
# overlay the addon config primitives and the FUTO-specific s6 services.

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
ENV \
    NODE_ENV=production \
    SERVICE_PORT=3000 \
    NGINX_PORT=8080 \
    SERVER_PORT=3000 \
    BLOB_DIR=/data/blobs \
    AUTH_MODE=password

# Bundled Postgres runtime environment (consumed by .common/postgres' s6
# services: init-postgres/run reads PGDATA / POSTGRES_USER / POSTGRES_DB / PG_MAJOR).
ENV \
    PG_MAJOR=16 \
    PGDATA=/data/postgres \
    POSTGRES_DB=futo_notes \
    POSTGRES_USER=futo_notes \
    POSTGRES_PASSWORD=futo_notes \
    POSTGRES_INITDB_ARGS="--data-checksum"

# NGINX Install
RUN \
    apk add --no-cache \
        bash \
        openssl \
        nginx \
    && rm -rf /etc/nginx

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Install postgres + helper tools. bash first so we can flip SHELL below.
RUN apk add --no-cache \
    curl \
    ca-certificates \
    jq \
    tzdata \
    libcrypto3 \
    libssl3 \
    musl-utils \
    musl \
    xz \
    tar \
    unzip \
    shadow \
    postgresql16 \
    postgresql16-client \
    logrotate \
    postgresql-common

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Addon base configuration
ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.18.1"
# renovate: datasource=github-releases packageName=just-containers/s6-overlay versioning=regex:^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)\.(?<other>\d+)$
ARG S6_OVERLAY_VERSION="3.2.1.0"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"
RUN \
    set -o pipefail \
    \
    && apk add --no-cache --virtual .build-dependencies \
        tar \
        xz \
    \
    && apk add --no-cache \
        libcrypto3 \
        libssl3 \
        musl-utils \
        musl \
        bash \
        curl \
        jq \
        tzdata \
    \
    && S6_ARCH="${BUILD_ARCH}" \
    && if [ "${BUILD_ARCH}" = "amd64" ]; then S6_ARCH="x86_64"; fi \
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
    && apk del --no-cache --purge .build-dependencies \
    && rm -f -r \
        /tmp/*

ENV PATH="$PATH:/usr/lib/postgresql/16/bin:/usr/lib/bin"

RUN apk add --no-cache bash logrotate postgresql$PG_MAJOR postgresql$PG_MAJOR-client; \
#    groupadd -r -g 900 postgres; \
#    useradd -r -u 900 -g postgres --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 1777 /var/lib/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql; \
    mkdir /docker-entrypoint-initdb.d; \
    postgres --version

#---------------------------------------------- App artifacts ------------------------------------------------------------#

WORKDIR /app

# Pull the FUTO Notes built bundle + manifest + lockfile from Stage 1.
COPY --from=futo-notes-builder /app/dist/ /app/dist/
COPY --from=futo-notes-builder /app/package.json /app/bun.lock /app/tsconfig.json /app/

# Re-resolve production deps against the runtime bun installation.
RUN bun install --production --frozen-lockfile \
    && rm -rf /root/.bun/install/cache

RUN mkdir -p /data/blobs \
    && chown -R bun:bun /app /data/blobs

# Remove Alpine's /etc/postgresql -> postgresql16 symlink before we copy
# .common/postgres/etc/postgresql/{postgresql.hdd,postgresql.ssd}.conf in.
# Docker COPY refuses to place a file under a path that's currently a
# symlink ("cannot copy to non-directory"). We restore the postgresql16.conf
# link AFTER the COPY, leaving the real config files from .common/postgres
# alongside it.
RUN rm -f /etc/postgresql

#---------------------------------------------- Shared addon services ------------------------------------------------------------#
COPY .common/addon-config /
COPY .common/postgres /
COPY .common/nginx /

#---------------------------------------------- Addon-local services ------------------------------------------------------------#
# init-futo-notes  - derives the scrypt password hash, publishes
#                    DATABASE_URL + FUTO_NOTES_PASSWORD_HASH into the s6
#                    runtime environment so svc-futo-notes can read them.
# svc-futo-notes   - longrun; runs `bun dist/index.js` as user `bun`.
COPY rootfs/ /


ENTRYPOINT ["/init"]

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
