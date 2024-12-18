ARG BUILD_FROM

FROM $BUILD_FROM

ARG BUILD_VERSION

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV LANG=C.UTF-8 \
    TERM="xterm-256color"

# Copy assets
COPY rootfs/ /

RUN apt-get update -q \
    && DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
      busybox \
      ca-certificates \
      locales \
      openssh-server \
      tzdata \
      wget \
      curl \
      gnupg \
      perl \
      libperl5.34 \
      libatomic1 \
      postfix \
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
    && update-alternatives --install /usr/bin/editor editor /usr/local/bin/busybox-editor 1

# Remove MOTD
RUN rm -rf /etc/update-motd.d /etc/motd /etc/motd.dynamic
RUN ln -fs /dev/null /run/motd.dynamic

# Legacy code to be removed on 17.0.  See: https://gitlab.com/gitlab-org/omnibus-gitlab/-/merge_requests/7035
ENV GITLAB_ALLOW_SHA1_RSA=false

ARG TARGETARCH

RUN { \
    echo 'RELEASE_PACKAGE=gitlab-ce'; \
    echo 'RELEASE_VERSION=${BUILD_VERSION}'; \
    echo 'DOWNLOAD_URL=https://packages.gitlab.com/gitlab/gitlab-ce/packages/ubuntu/jammy/gitlab-ce_${BUILD_VERSION}_amd64.deb/download.deb'; \
} > /RELEASE

# as gitlab-ci checks out with mode 666 we need to set permissions of the files we copied into the
# container to a secure value. Issue #5956
RUN chmod -R og-w /assets RELEASE && chmod +x -R /assets \
    && /assets/setup

# Allow to access embedded tools
ENV PATH=/opt/gitlab/embedded/bin:/opt/gitlab/bin:/assets:$PATH

# Expose web & ssh
EXPOSE 443 80 22

# Define data volumes
VOLUME ["/etc/gitlab", "/var/opt/gitlab", "/var/log/gitlab"]

# Wrapper to handle signal, trigger runit and reconfigure GitLab
CMD ["/assets/wrapper"]

HEALTHCHECK --interval=60s --timeout=30s --retries=5 \
CMD /opt/gitlab/bin/gitlab-healthcheck --fail --max-time 10

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
