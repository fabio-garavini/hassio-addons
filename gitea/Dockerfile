ARG BUILD_FROM
ARG BUILD_VERSION

FROM $BUILD_FROM:$BUILD_VERSION

ENV GITEA_WORK_DIR=/data

RUN apk --no-cache add \
    shadow \
    jq; \
    rm -rf /var/cache/apk/*

COPY rootfs/ /