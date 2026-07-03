#!/usr/bin/dumb-init /bin/sh
# docker entrypoint script, for starting redis stack
set -eu

BASEDIR=/opt/redis-stack
CMD="${BASEDIR}/bin/redis-server"
CONFFILE=/etc/redis.conf
OPTIONS=/data/options.json

cd "${BASEDIR}"

build_conf() {
    : > "${CONFFILE}"

    if [ -f /redis-stack.conf ]; then
        echo "include /redis-stack.conf" >> "${CONFFILE}"
    fi

    if [ -f /config/redis.conf ]; then
        cat /config/redis.conf >> "${CONFFILE}"
        echo >> "${CONFFILE}"
    fi

    if [ -f "${OPTIONS}" ]; then
        jq -r '.redis_config[]?' "${OPTIONS}" >> "${CONFFILE}"
    fi
}

start_exporter() {
    REDIS_PASSWORD="$(sed -n 's/^requirepass[[:space:]][[:space:]]*//p' "${CONFFILE}" | tail -n1 | tr -d '"')"
    [ -n "${REDIS_PASSWORD}" ] && export REDIS_PASSWORD

    # Backgrounded `exec` so we don't leave a lingering subshell around.
    (exec /redis_exporter) &
}

start_redisinsight() {
    node_bin="${BASEDIR}/nodejs/bin/node"
    ri_main="share/redisinsight/api/dist/src/main.js"
    ri_dotenv="${BASEDIR}/share/redisinsight/api/node_modules/dotenv/config"
    ri_env="${BASEDIR}/share/redisinsight/.env"

    if [ -x "${node_bin}" ]; then
        "${node_bin}" -r "${ri_dotenv}" "${ri_main}" "dotenv_config_path=${ri_env}" &
    fi
}

build_conf
start_exporter
start_redisinsight

REDIS_DATA_DIR="${REDIS_DATA_DIR:-/data}"

REDISEARCH_ARGS="${REDISEARCH_ARGS:-MAXSEARCHRESULTS 10000 MAXAGGREGATERESULTS 10000}"
REDISTIMESERIES_ARGS="${REDISTIMESERIES_ARGS:-}"
REDISJSON_ARGS="${REDISJSON_ARGS:-}"
REDISBLOOM_ARGS="${REDISBLOOM_ARGS:-}"
REDISGEARS_ARGS="${REDISGEARS_ARGS:-}"
REDIS_ARGS="${REDIS_ARGS:-}"

exec "${CMD}" \
    "${CONFFILE}" \
    --dir "${REDIS_DATA_DIR}" \
    --protected-mode no \
    --daemonize no \
    --loadmodule "${BASEDIR}/lib/rediscompat.so" \
    --loadmodule "${BASEDIR}/lib/redisearch.so" ${REDISEARCH_ARGS} \
    --loadmodule "${BASEDIR}/lib/redistimeseries.so" ${REDISTIMESERIES_ARGS} \
    --loadmodule "${BASEDIR}/lib/rejson.so" ${REDISJSON_ARGS} \
    --loadmodule "${BASEDIR}/lib/redisbloom.so" ${REDISBLOOM_ARGS} \
    --loadmodule "${BASEDIR}/lib/redisgears.so" v8-plugin-path "${BASEDIR}/lib/libredisgears_v8_plugin.so" ${REDISGEARS_ARGS} \
    ${REDIS_ARGS}