ARG BUILD_FROM

FROM ${BUILD_FROM}

ARG BUILD_ARCH

# Environment variables
ENV \
    HOME="/root" \
    PS1="$(whoami)@$(hostname):$(pwd)$ " \
    TERM="xterm-256color" \
    DATA_DIR="/share/karakeep" \
    MEILI_DIR="/config/meili" \
    DISABLE_NEW_RELEASE_CHECK=true \
    BROWSER_WEB_URL="http://127.0.0.1:9222" \
    MEILI_ADDR="http://127.0.0.1:7700" \
    MEILI_MASTER_KEY="0uIHQXWthY2L2yqCWGVGu2axN+l4qcDEc+Of/7e8X7bEyZ8k" \
    MEILI_NO_ANALYTICS=true

ENV \
    CHROME_BIN=/usr/bin/chromium-browser \
    CHROME_PATH=/usr/lib/chromium/ \
    CHROMIUM_FLAGS="--disable-software-rasterizer --disable-dev-shm-usage" \
    MEILI_HTTP_ADDR=0.0.0.0:7700 \
    MEILI_SERVER_PROVIDER=docker \
    MEILI_ENV=production

RUN \
    set -x \
    && apk add --no-cache \
        bash \
        bind-tools \
        ca-certificates \
        curl \
        jq \
        libstdc++ \
        tzdata \
        xz \
        libgcc

# Set shell
SHELL ["/bin/bash", "-o", "pipefail", "-c"]

# Installs latest Chromium package.
RUN apk upgrade --no-cache --available \
    && apk add --no-cache \
      chromium-swiftshader \
      ttf-freefont \
      font-noto-emoji \
    && apk add --no-cache \
      --repository=https://dl-cdn.alpinelinux.org/alpine/edge/community \
      font-wqy-zenhei \
    && mkdir -p /usr/src/chrome \
    && adduser -D chrome \
    && chown -R chrome:chrome /usr/src/chrome

COPY --from=getmeili/meilisearch:v1.18.0 /bin/meilisearch /bin/meilitool /bin/

COPY rootfs/ /

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
