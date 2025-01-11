ARG BUILD_FROM

FROM $BUILD_FROM

ARG BUILD_VERSION

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${BUILD_VERSION}/pocketbase_${BUILD_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

COPY rootfs/ /

EXPOSE 8080