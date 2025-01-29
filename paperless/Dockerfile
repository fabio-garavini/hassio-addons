ARG BUILD_FROM

FROM $BUILD_FROM:feature-s6-overlay

ENV PAPERLESS_DATA_DIR="/config/paperless" \
    PAPERLESS_MEDIA_ROOT="/share/paperless" \
    PAPERLESS_EXPORT_DIR="/share/paperless/export" \
    PAPERLESS_CONSUMPTION_DIR="/share/paperless/consume" \
    PAPERLESS_EMPTY_TRASH_DIR="/share/paperless/.trash" \
    PAPERLESS_LOGGING_DIR="/config/logs/paperless" \
    PAPERLESS_REDIS="redis://localhost:6379" \
    PAPERLESS_DBHOST=localhost \
    PAPERLESS_TIKA_ENABLED=1 \
    PAPERLESS_TIKA_GOTENBERG_ENDPOINT="http://localhost:3000" \
    PAPERLESS_TIKA_ENDPOINT="http://localhost:9998" \
    REDIS_DATADIR="/config/redis" \
    PGDATA="/config/postgres" \
    POSTGRES_DB=paperless \
    POSTGRES_USER=paperless \
    POSTGRES_PASSWORD=paperless \
    PG_MAJOR=16

# Postgres & Redis install
RUN apt-get update; \
    apt-get install -y lsb-release; \
    install -d /usr/share/postgresql-common/pgdg; \
    curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc; \
    sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'; \
    apt-get update; \
    apt-get upgrade; \
    apt-get install -y --no-install-recommends --no-install-suggests \
        jq \
        logrotate \
        netcat-traditional \
        curl \
        gpg \
        postgresql-common \
        postgresql-client \
        postgresql-client-17 \
        postgresql-$PG_MAJOR \
        redis-server; \
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log,tmp}/* \
        /var/lib/apt/lists/*; \
    mkdir /docker-entrypoint-initdb.d; \
#    groupadd -r -g 900 postgres; \
#    useradd -r -u 900 -g postgres --home-dir=/var/lib/postgresql --shell=/bin/bash postgres; \
	install --verbose --directory --owner postgres --group postgres --mode 1777 /var/lib/postgresql; \
    install --verbose --directory --owner postgres --group postgres --mode 3777 /var/run/postgresql

ENV PATH $PATH:/usr/lib/postgresql/$PG_MAJOR/bin

# ---------------GOTENBERG-TIKA--------------------

ARG NOTO_COLOR_EMOJI_VERSION="v2.047"
ARG PDFTK_VERSION="v3.3.3"
ARG TMP_CHOMIUM_VERSION_ARMHF="116.0.5845.180-1~deb12u1"

RUN \
    mkdir /etc/gotenberg &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends curl gnupg tini default-jre-headless ca-certificates &&\
    python3 -m pip install --upgrade setuptools &&\
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log,tmp}/* \
        /var/lib/apt/lists/*

RUN \
    curl -o ./ttf-mscorefonts-installer_3.8.1_all.deb http://httpredir.debian.org/debian/pool/contrib/m/msttcorefonts/ttf-mscorefonts-installer_3.8.1_all.deb &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends \
    ./ttf-mscorefonts-installer_3.8.1_all.deb \
    culmus \
    fonts-beng \
    fonts-hosny-amiri \
    fonts-lklug-sinhala \
    fonts-lohit-guru \
    fonts-lohit-knda \
    fonts-samyak-gujr \
    fonts-samyak-mlym \
    fonts-samyak-taml \
    fonts-sarai \
    fonts-sil-abyssinica \
    fonts-sil-padauk \
    fonts-telu \
    fonts-thai-tlwg \
    ttf-wqy-zenhei \
    fonts-arphic-ukai \
    fonts-arphic-uming \
    fonts-ipafont-mincho \
    fonts-ipafont-gothic \
    fonts-unfonts-core \
    # LibreOffice recommends.
    fonts-crosextra-caladea \
    fonts-crosextra-carlito \
    fonts-dejavu \
    fonts-dejavu-extra \
    fonts-liberation \
    fonts-liberation2 \
    fonts-linuxlibertine \
    fonts-noto-cjk \
    fonts-noto-core \
    fonts-noto-mono \
    fonts-noto-ui-core \
    fonts-sil-gentium \
    fonts-sil-gentium-basic &&\
    rm -f ./ttf-mscorefonts-installer_3.8.1_all.deb &&\
    # Add Color and Black-and-White Noto emoji font.
    # Credits:
    # https://github.com/gotenberg/gotenberg/pull/325.
    # https://github.com/googlefonts/noto-emoji.
    curl -Ls "https://github.com/googlefonts/noto-emoji/raw/$NOTO_COLOR_EMOJI_VERSION/fonts/NotoColorEmoji.ttf" -o /usr/local/share/fonts/NotoColorEmoji.ttf &&\
    # Cleanup.
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log,tmp}/* \
        /var/lib/apt/lists/*

RUN \
    # Install either Google Chrome stable on amd64 architecture or
    # Chromium on other architectures.
    # See https://github.com/gotenberg/gotenberg/issues/328.
    # FIXME:
    # armhf is currently not working with the latest version of Chromium.
    # See: https://github.com/gotenberg/gotenberg/issues/709.
    /bin/bash -c \
    'set -e &&\
    if [[ "$(dpkg --print-architecture)" == "amd64" ]]; then \
      curl https://dl.google.com/linux/linux_signing_key.pub | apt-key add - &&\
      echo "deb http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list &&\
      apt-get update -qq &&\
      apt-get upgrade -yqq &&\
      DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends --allow-unauthenticated google-chrome-stable &&\
      mv /usr/bin/google-chrome-stable /usr/bin/chromium; \
    elif [[ "$(dpkg --print-architecture)" == "armhf" ]]; then \
      apt-get update -qq &&\
      DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends devscripts &&\
      debsnap chromium-common "$TMP_CHOMIUM_VERSION_ARMHF" -v --force --binary --architecture armhf &&\
      debsnap chromium "$TMP_CHOMIUM_VERSION_ARMHF" -v --force --binary --architecture armhf &&\
      DEBIAN_FRONTEND=noninteractive apt-get install --fix-broken -y -qq --no-install-recommends "./binary-chromium-common/chromium-common_${TMP_CHOMIUM_VERSION_ARMHF}_armhf.deb" "./binary-chromium/chromium_${TMP_CHOMIUM_VERSION_ARMHF}_armhf.deb" &&\
      DEBIAN_FRONTEND=noninteractive apt-get purge -y -qq devscripts &&\
      rm -rf ./binary-chromium-common/* ./binary-chromium/*; \
    else \
      apt-get update -qq &&\
      apt-get upgrade -yqq &&\
      DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends chromium; \
    fi' &&\
    # Verify installation.
    chromium --version &&\
    # Cleanup.
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log,tmp}/* \
        /var/lib/apt/lists/*

RUN \
    # Install LibreOffice & unoconverter.
    echo "deb http://deb.debian.org/debian bookworm-backports main" >> /etc/apt/sources.list &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends -t bookworm-backports python3 python3-setuptools python3-uno libreoffice &&\
    curl -Ls https://raw.githubusercontent.com/gotenberg/unoconverter/v0.0.1/unoconv -o /usr/bin/unoconverter &&\
    sed -i "s|/usr/bin/env python|/usr/bin/python3|" /usr/bin/unoconverter &&\
    chmod +x /usr/bin/unoconverter &&\
    # Verify installations.
    libreoffice --version &&\
    unoconverter --version &&\
    # Cleanup.
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log,tmp}/* \
        /var/lib/apt/lists/*

RUN \
    # Install PDFtk, QPDF & ExifTool (PDF engines).
    # See https://github.com/gotenberg/gotenberg/pull/273.
    curl -o /usr/bin/pdftk-all.jar "https://gitlab.com/api/v4/projects/5024297/packages/generic/pdftk-java/$PDFTK_VERSION/pdftk-all.jar" &&\
    chmod a+x /usr/bin/pdftk-all.jar &&\
    echo '#!/bin/bash\n\nexec java -jar /usr/bin/pdftk-all.jar "$@"' > /usr/bin/pdftk && \
    chmod +x /usr/bin/pdftk &&\
    apt-get update -qq &&\
    apt-get upgrade -yqq &&\
    DEBIAN_FRONTEND=noninteractive apt-get install -y -qq --no-install-recommends qpdf exiftool &&\
    # See https://github.com/nextcloud/docker/issues/380.
    mkdir -p /usr/share/man/man1 &&\
    # Verify installations.
    pdftk --version &&\
    qpdf --version &&\
    exiftool --version &&\
    # Cleanup.
    apt-get autoclean -y; \
    rm -rf \
        /tmp/* \
        /var/{cache,log,tmp}/* \
        /var/lib/apt/lists/*

# Improve fonts subpixel hinting and smoothing.
# Credits:
# https://github.com/arachnys/athenapdf/issues/69.
# https://github.com/arachnys/athenapdf/commit/ba25a8d80a25d08d58865519c4cd8756dc9a336d.
COPY --from=gotenberg/gotenberg:8.15.3 /etc/fonts/conf.d/100-gotenberg.conf /etc/fonts/conf.d/

# Copy the pdfcpu binary from the pdfcpu-binary-stage.
COPY --from=gotenberg/gotenberg:8.15.3 /usr/bin/pdfcpu /usr/bin/gotenberg /usr/bin/

# Environment variables required by modules or else.
ENV CHROMIUM_BIN_PATH=/usr/bin/chromium \
    LIBREOFFICE_BIN_PATH=/usr/lib/libreoffice/program/soffice.bin \
    UNOCONVERTER_BIN_PATH=/usr/bin/unoconverter \
    PDFTK_BIN_PATH=/usr/bin/pdftk \
    QPDF_BIN_PATH=/usr/bin/qpdf \
    EXIFTOOL_BIN_PATH=/usr/bin/exiftool \
    PDFCPU_BIN_PATH=/usr/bin/pdfcpu

ENV TIKA_VERSION=3.0.0

RUN \
    groupadd -g 9998 -o tika; \
    useradd -m -u 9998 -g 9998 -o tika

COPY --from=apache/tika:3.0.0.0 /tika-server-standard-${TIKA_VERSION}.jar /

COPY rootfs/ /

ARG BUILD_VERSION
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