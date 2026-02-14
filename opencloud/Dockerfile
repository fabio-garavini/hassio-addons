# check=skip=SecretsUsedInArgOrEnv
ARG BUILD_FROM=docker.io/opencloudeu/opencloud-rolling:5.0.2

FROM ${BUILD_FROM}

ENV \
    OC_CONFIG_DIR="/config" \
    IDM_CREATE_DEMO_USERS=false \
    PROXY_HTTP_ADDR="0.0.0.0:9200" \
    OC_LOG_COLOR=true \
    OC_LOG_PRETTY=true \
    PROXY_TLS=false \
    OC_INSECURE=true \
    FRONTEND_CHECK_FOR_UPDATES=false \
    PROXY_CSP_CONFIG_FILE_LOCATION="/csp.yaml"

ENV \
    SERVICE_PORT=9200 \
    NGINX_PORT=8080

# hadolint ignore=DL3002
USER root

# NGINX Install
RUN \
    apk add --no-cache \
        coreutils \
        bash \
        openssl \
        nginx \
        rsync \
        lsblk \
        e2fsprogs \
        cifs-utils \
        nfs-utils \
        eudev \
        parted \
    && rm -rf /etc/nginx

# Shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Addon base configuration
ARG BUILD_ARCH=amd64
# renovate: datasource=github-releases packageName=hassio-addons/bashio
ARG BASHIO_VERSION="v0.17.5"
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
    && rm -f -r /tmp/*

# Install web apps
# renovate: datasource=github-releases packageName=opencloud-eu/web-extensions versioning=regex:^unzip-v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$
ARG APPS_UNZIP_VERSION="unzip-v1.0.4"
# renovate: datasource=github-releases packageName=opencloud-eu/web-extensions versioning=regex:^json-viewer-v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$
ARG APPS_JSON_VERSION="json-viewer-v1.0.2"
# renovate: datasource=github-releases packageName=opencloud-eu/web-extensions versioning=regex:^draw-io-v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$
ARG APPS_DRAW_IO_VERSION="draw-io-v1.0.1"
# renovate: datasource=github-releases packageName=opencloud-eu/web-extensions versioning=regex:^progress-bars-v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$
ARG APPS_PROGRESS_BARS_VERSION="progress-bars-v1.1.0"
# renovate: datasource=github-releases packageName=opencloud-eu/web-extensions versioning=regex:^maps-v(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)$
ARG APPS_MAPS_VERSION="maps-v1.0.2"
RUN \
    set -eux; \
    mkdir /apps; \
    curl -L https://github.com/opencloud-eu/web-extensions/releases/download/${APPS_UNZIP_VERSION}/unzip-${APPS_UNZIP_VERSION#unzip-v}.zip -o "/tmp/unzip.zip"; \
    unzip "/tmp/unzip.zip" -d "/apps"; \
    curl -L https://github.com/opencloud-eu/web-extensions/releases/download/${APPS_JSON_VERSION}/json-viewer-${APPS_JSON_VERSION#json-viewer-v}.zip -o "/tmp/json-viewer.zip"; \
    unzip "/tmp/json-viewer.zip" -d "/apps"; \
    curl -L https://github.com/opencloud-eu/web-extensions/releases/download/${APPS_DRAW_IO_VERSION}/draw-io-${APPS_DRAW_IO_VERSION#draw-io-v}.zip -o "/tmp/draw-io.zip"; \
    unzip "/tmp/draw-io.zip" -d "/apps"; \
    curl -L https://github.com/opencloud-eu/web-extensions/releases/download/${APPS_PROGRESS_BARS_VERSION}/progress-bars-${APPS_PROGRESS_BARS_VERSION#progress-bars-v}.zip -o "/tmp/progress-bars.zip"; \
    unzip "/tmp/progress-bars.zip" -d "/apps"; \
    curl -L https://github.com/opencloud-eu/web-extensions/releases/download/${APPS_MAPS_VERSION}/maps-${APPS_MAPS_VERSION#maps-v}.zip -o "/tmp/maps.zip"; \
    unzip "/tmp/maps.zip" -d "/apps"; \
    rm -f -r /tmp/*

COPY .common/addon-config /
COPY .common/mount-external-storage /
COPY .common/nginx /

COPY rootfs/ /

ENTRYPOINT ["/init"]
CMD []

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
