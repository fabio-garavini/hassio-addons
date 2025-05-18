ARG BUILD_FROM

FROM $BUILD_FROM AS builder

ENV CORE_ASSETS https://github.com/CollaboraOnline/online/releases/download/for-code-assets/core-co-24.04-assets.tar.gz
ENV BUILDDIR /build
ENV ONLINE_EXTRA_BUILD_OPTIONS --enable-experimental

WORKDIR /build

RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive TZ=Etc/UTC apt-get -y install libpng16-16 fontconfig adduser cpio tzdata \
    findutils nano \
    libcap2-bin openssl openssh-client \
    libxcb-shm0 libxcb-render0 libxrender1 libxext6 \
    fonts-wqy-zenhei fonts-wqy-microhei fonts-droid-fallback \
    fonts-noto-cjk \
    libpoco-dev python3-polib libcap-dev npm \
    libpam-dev libzstd-dev wget git build-essential libtool \
    libcap2-bin python3-lxml libpng-dev libcppunit-dev \
    pkg-config fontconfig snapd chromium-browser \
    rsync curl \
    # core build dependencies, only those that are needed for LOKit
    git build-essential zip ccache autoconf gperf nasm xsltproc flex bison

RUN curl -fsSL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh && bash nodesource_setup.sh && apt install -y nodejs

RUN mkdir -p $BUILDDIR

# Build poco separately to cache it
ADD https://pocoproject.org/releases/poco-1.12.5p2/poco-1.12.5p2-all.tar.gz /build/builddir/poco-1.12.5p2-all.tar.gz

RUN cd builddir && tar xf poco-1.12.5p2-all.tar.gz && cd poco-1.12.5p2-all/ && \
    ./configure --static --no-tests --no-samples --no-sharedlibs --cflags="-fPIC" --omit=Zip,Data,Data/SQLite,Data/ODBC,Data/MySQL,MongoDB,PDF,CppParser,PageCompiler,Redis,Encodings,ActiveRecord --prefix=$BUILDDIR/poco && \
    make -j $(nproc) && \
    make install

COPY / $BUILDDIR/

RUN bash build.sh

# Build the final image
FROM $BUILD_FROM

# refresh repos otherwise installations later may fail
# install LibreOffice run-time dependencies
# install adduser, findutils, openssl and cpio that we need later
# install tzdata to accept the TZ environment variable
# install an editor
# tdf#117557 - Add CJK Fonts to Collabora Online Docker Image
RUN apt-get update \
    && apt-get -y install libpng16-16 fontconfig adduser cpio tzdata \
    findutils nano \
    libcap2-bin openssl openssh-client \
    libxcb-shm0 libxcb-render0 libxrender1 libxext6 \
    fonts-wqy-zenhei fonts-wqy-microhei fonts-droid-fallback \
    fonts-noto-cjk ca-certificates \
    && rm -rf /var/lib/apt/lists/*
# copy freshly built LOKit and Collabora Online
COPY --from=builder /build/instdir /

# set up Collabora Online (normally done by postinstall script of package)
# Fix permissions
RUN setcap cap_fowner,cap_chown,cap_sys_chroot=ep /usr/bin/coolforkit-caps && \
    setcap cap_sys_admin=ep /usr/bin/coolmount && \
    adduser --quiet --system --group --home /opt/cool cool && \
    rm -rf /opt/cool && \
    mkdir -p /opt/cool/child-roots /opt/cool/cache && \
    coolwsd-systemplate-setup /opt/cool/systemplate /opt/lokit >/dev/null 2>&1 && \
    touch /var/log/coolwsd.log && \
    chown cool:cool /var/log/coolwsd.log && \
    chown -R cool:cool /opt/ && \
    chown -R cool:cool /etc/coolwsd

# copy local files
COPY rootfs/ /

# ports and volumes
EXPOSE 9980

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
