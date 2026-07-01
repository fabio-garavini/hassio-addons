#!/usr/bin/dumb-init /bin/sh

### docker entrypoint script, for starting redis stack
BASEDIR=/opt/redis-stack
cd ${BASEDIR}

CMD=${BASEDIR}/bin/redis-server
CONFFILE=/etc/redis.conf
OPTIONS=/data/options.json

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

# redis_exporter authenticates with the same password
REDIS_PASSWORD="$(sed -n 's/^requirepass[[:space:]][[:space:]]*//p' "${CONFFILE}" | tail -n1 | tr -d '"')"
[ -n "${REDIS_PASSWORD}" ] && export REDIS_PASSWORD

exec /redis_exporter &

if [ -z "${REDIS_DATA_DIR}" ]; then
    REDIS_DATA_DIR=/data
fi

# when running in redis-stack (as opposed to redis-stack-server)
if [ -f ${BASEDIR}/nodejs/bin/node ]; then
    ${BASEDIR}/nodejs/bin/node -r ${BASEDIR}/share/redisinsight/api/node_modules/dotenv/config share/redisinsight/api/dist/src/main.js dotenv_config_path=${BASEDIR}/share/redisinsight/.env &
fi

if [ -z "${REDISEARCH_ARGS}" ]; then
REDISEARCH_ARGS="MAXSEARCHRESULTS 10000 MAXAGGREGATERESULTS 10000"
fi

${CMD} \
${CONFFILE} \
--dir ${REDIS_DATA_DIR} \
--protected-mode no \
--daemonize no \
--loadmodule /opt/redis-stack/lib/rediscompat.so \
--loadmodule /opt/redis-stack/lib/redisearch.so ${REDISEARCH_ARGS} \
--loadmodule /opt/redis-stack/lib/redistimeseries.so ${REDISTIMESERIES_ARGS} \
--loadmodule /opt/redis-stack/lib/rejson.so ${REDISJSON_ARGS} \
--loadmodule /opt/redis-stack/lib/redisbloom.so ${REDISBLOOM_ARGS} \
--loadmodule /opt/redis-stack/lib/redisgears.so v8-plugin-path /opt/redis-stack/lib/libredisgears_v8_plugin.so  ${REDISGEARS_ARGS} \
${REDIS_ARGS}
