ARG BUILD_FROM=ghcr.io/hassio-addons/base:stable

FROM ${BUILD_FROM}

ARG BUILD_VERSION \
    BUILD_ARCH

RUN case "$BUILD_ARCH" in \
      aarch64) REMOTE_ARCH="arm64" ;; \
      armv7)   REMOTE_ARCH="arm" ;; \
      amd64)   REMOTE_ARCH="amd64" ;; \
      *) echo "Unsupported architecture: $BUILD_ARCH" >&2; exit 1 ;; \
    esac && \
    wget -nv "https://github.com/cloudflare/cloudflared/releases/download/${BUILD_VERSION%-v*}/cloudflared-linux-${REMOTE_ARCH}" -O /usr/bin/cloudflared; \
    chmod +x /usr/bin/cloudflared; \
    cloudflared -v

COPY rootfs/ /

ARG BUILD_DATE \
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