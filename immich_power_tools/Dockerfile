ARG BUILD_FROM

FROM node:18-alpine AS node
FROM ghcr.io/varun-raj/immich-power-tools:0.16.0 AS immich_power_tools

FROM ${BUILD_FROM}

ARG VERSION=0.17.0

ENV \
  NODE_ENV=production \
  NODE_VERSION=18.20.8 \
  NEXT_TELEMETRY_DISABLED=1 \
  VERSION=$VERSION \
  PORT=80

ENV \
  DB_USERNAME=immich \
  DB_PASSWORD=immich \
  DB_PORT=5432 \
  DB_DATABASE_NAME=immich \
  SECURE_COOKIE=true

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/share /usr/local/share
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

RUN addgroup -g 1000 node \
  && adduser -u 1000 -G node -s /bin/sh -D node \
  && addgroup -g 1001 -S nodejs \
  && adduser -S nextjs -u 1001 \
  && node --version \
  && npm --version

COPY --from=immich_power_tools /app /app

COPY rootfs/ /

EXPOSE 80

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
