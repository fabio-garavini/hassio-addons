ARG BUILD_FROM

FROM $BUILD_FROM

ARG BUILD_ARCH
ARG POCKETBASE_VERSION=0.26.3

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
RUN \
    if [[ "${BUILD_ARCH}" == "aarch64" ]]; then \
        export DOWNLOAD_ARCH="arm64"; \
    else \
        export DOWNLOAD_ARCH=${BUILD_ARCH}; \
    fi; \
    wget --quiet https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/pocketbase_${POCKETBASE_VERSION}_linux_${DOWNLOAD_ARCH}.zip -O /tmp/pb.zip; \
    unzip /tmp/pb.zip -d /pb/

COPY rootfs/ /

EXPOSE 8080

ARG BUILD_VERSION
ARG BUILD_ARCH
ARG BUILD_DATE
ARG BUILD_DESCRIPTION
ARG BUILD_NAME
ARG BUILD_REF
ARG BUILD_REPOSITORY

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