ARG BUILD_FROM=docker.io/library/ubuntu
ARG UBUNTU_VERSION="noble"

FROM ${BUILD_FROM}:${UBUNTU_VERSION}

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV LANG=C.UTF-8 \
    TERM="xterm-256color"

COPY rootfs/etc/locale.gen /etc/locale.gen

RUN apt-get update -q \
    && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
      busybox \
      ca-certificates \
      locales \
      openssh-server \
      tzdata \
      tzdata-legacy \
      wget \
      perl \
      libperl5.38 \
      libatomic1 \
    && locale-gen \
    && cp -a /usr/lib/locale/locale-archive /tmp/locale-archive \
    && DEBIAN_FRONTEND=noninteractive apt-get purge -yq locales \
    && mv /tmp/locale-archive /usr/lib/locale/locale-archive \
    && rm -rf /var/lib/apt/lists/*

# Use BusyBox
ENV EDITOR=/bin/vi
RUN busybox --install \
    && { \
        echo '#!/bin/sh'; \
        echo '/bin/vi "$@"'; \
    } > /usr/local/bin/busybox-editor \
    && chmod +x /usr/local/bin/busybox-editor \
    && update-alternatives --install /usr/bin/editor editor /usr/local/bin/busybox-editor 1; \
# Remove MOTD
    rm -rf /etc/update-motd.d /etc/motd /etc/motd.dynamic; \
    ln -fs /dev/null /run/motd.dynamic

# Legacy code to be removed on 17.0.  See: https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7035
ENV GITLAB_ALLOW_SHA1_RSA=false

ARG BUILD_ARCH=amd64

ARG UBUNTU_VERSION

# renovate: datasource=docker depName=docker.io/gitlab/gitlab-ce versioning=regex:^(?<major>\d+)\.(?<minor>\d+)\.(?<patch>\d+)-ce\.(?<build>\d+)$
ARG GITLAB_VERSION=18.8.4-ce.0

RUN { \
    echo "RELEASE_PACKAGE=gitlab-ce"; \
    echo "RELEASE_VERSION=${GITLAB_VERSION}"; \
} > /RELEASE

RUN \
    set -e; \
    if [[ "${BUILD_ARCH}" == "aarch64" ]]; then \
        export DOWNLOAD_ARCH="arm64"; \
    else \
        export DOWNLOAD_ARCH=${BUILD_ARCH}; \
    fi; \
    wget --quiet "https://packages.gitlab.com/gitlab/gitlab-ce/packages/ubuntu/${UBUNTU_VERSION}/gitlab-ce_${GITLAB_VERSION}_${DOWNLOAD_ARCH}.deb/download.deb" -O /tmp/gitlab.deb; \
    dpkg -i /tmp/gitlab.deb; \
    rm -rf /tmp/gitlab.deb /var/lib/apt/lists/*

# Copy assets
COPY rootfs/ /

RUN chmod -R og-w /assets RELEASE; \
    chmod +x -R /assets; \
    /assets/setup

ENV PATH=/opt/gitlab/embedded/bin:/opt/gitlab/bin:/assets:$PATH

CMD ["/assets/init-container"]

HEALTHCHECK --interval=60s --timeout=30s --retries=5 \
CMD /opt/gitlab/bin/gitlab-healthcheck --fail --max-time 10

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
