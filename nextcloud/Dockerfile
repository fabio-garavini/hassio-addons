# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=ghcr.io/linuxserver/nextcloud:32.0.5-ls414

FROM $BUILD_FROM

ENV REDIS_SOCKET="/var/run/redis/redis.sock"

ENV MYSQL_ROOT_PASSWORD="nextcloud" \
    MYSQL_PASSWORD="nextcloud" \
    MYSQL_DATABASE="nextcloud" \
    MYSQL_USER="nextcloud" \
    MYSQL_HOST="localhost"

ENV MARIADB_DATADIR="/config/mariadb" \
    REDIS_DATADIR="/config/redis" \
    NEXTCLOUD_DATADIR="/share/nextcloud"

ENV DB_TYPE="mysql" \
    DB_HOST="127.0.0.1" \
    DB_NAME="nextcloud" \
    DB_USER="nextcloud" \
    DB_PASS="nextcloud"

# Shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Addon base configuration
ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.17.5"
# renovate: datasource=github-releases packageName=home-assistant/tempio
ARG TEMPIO_VERSION="2024.11.2"
RUN \
    apk add --no-cache --virtual .build-dependencies \
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
    && curl -J -L "https://github.com/hassio-addons/bashio/archive/${BASHIO_VERSION}.tar.gz" -o /tmp/bashio.tar.gz \
    && mkdir /tmp/bashio \
    && tar zxvf /tmp/bashio.tar.gz --strip 1 -C /tmp/bashio \
    \
    && mv /tmp/bashio/lib /usr/lib/bashio \
    && ln -s /usr/lib/bashio/bashio /usr/bin/bashio \
    \
    && curl -L -s "https://github.com/home-assistant/tempio/releases/download/${TEMPIO_VERSION}/tempio_${BUILD_ARCH}" -o /usr/bin/tempio \
    && chmod a+x /usr/bin/tempio \
    \
    && apk del --no-cache --purge .build-dependencies \
    && rm -rf /tmp/*

RUN \
    apk add --no-cache \
        ffmpeg \
        imagemagick \
        imagemagick-pdf \
        imagemagick-jpeg \
        imagemagick-raw \
        imagemagick-tiff \
        imagemagick-heic \
        imagemagick-webp \
        imagemagick-svg \
        python3-dev \
        perl \
        redis \
        gnupg \
        mariadb \
        mariadb-client \
        mariadb-server-utils; \
    rm -rf /tmp/*

COPY .common/addon-config /

# copy local files
COPY rootfs/ /

ARG BUILD_ARCH \
    BUILD_VERSION \
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
