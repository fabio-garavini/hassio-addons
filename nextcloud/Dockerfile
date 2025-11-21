# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=ghcr.io/linuxserver/nextcloud:32.0.2-ls404

FROM $BUILD_FROM

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

ENV REDIS_HOST=localhost \
    REDIS_HOST_PORT=6379

ENV MYSQL_ROOT_PASSWORD="nextcloud" \
    MYSQL_PASSWORD="nextcloud" \
    MYSQL_DATABASE="nextcloud" \
    MYSQL_USER="nextcloud" \
    MYSQL_HOST="localhost"

ENV MARIADB_DATADIR="/config/mariadb" \
    REDIS_DATADIR="/config/redis" \
    NEXTCLOUD_DATADIR="/share/nextcloud"

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
