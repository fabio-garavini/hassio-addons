ARG BUILD_FROM

FROM $BUILD_FROM

ARG BUILD_ARCH
ARG BUILD_VERSION

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
    wget --quiet https://github.com/pocketbase/pocketbase/releases/download/v${BUILD_VERSION}/pocketbase_${BUILD_VERSION}_linux_${DOWNLOAD_ARCH}.zip -O /tmp/pb.zip; \
    unzip /tmp/pb.zip -d /pb/

COPY rootfs/ /

EXPOSE 8080