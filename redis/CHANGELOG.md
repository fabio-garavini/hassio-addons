This is a maintenance release for Redis Stack Server 7.4.0.

Update urgency: `HIGH`: There is a critical bug that may affect a subset of users.
[Docker](https://hub.docker.com/r/redis/redis-stack)

### Headlines:
This version includes a stability fix for the **Redis** server addressing a critical issue in the **HyperLogLog** data structure, where an overflow condition could occur when processing datasets exceeding 2GB entries, potentially resulting in a Redis crash.
This release also includes several fixes related to **probabilistic** data structures, enhancing overall reliability and performance.
Additionally, this maintenance release ships with the latest version of **Redis Insight**.

### Details:
**Bug Fixes**
* **Redis**:
  * An overflow in `HyperLogLog` with 2GB+ entries may result in a Redis crash

* **Probabilistic**:
  * Cuckoo filter - Division by zero in Cuckoo filter insertion
  * Cuckoo filter - Counter overflow
  * Bloom filter - Arbitrary memory read/write with invalid filter
  * Bloom filter - Out-of-bounds access with empty chain
  * Top-k - Out-of-bounds access
  * Bloom filter - Restore invalid filter
  * [#886](https://github.com/RedisBloom/RedisBloom/pull/886) - `TDIGEST.CREATE` crashes (OOM) on huge initialization values (MOD-10840)

**Redis version**:
  * __[Redis 7.4.7](https://github.com/redis/redis/releases/tag/7.4.7)__

**Module versions**	
* __[RediSearch 2.10.20](https://github.com/RediSearch/RediSearch/releases/tag/v2.10.20)__
* __[RedisJSON 2.8.9](https://github.com/RedisJSON/RedisJSON/releases/tag/v2.8.9)__
* __[RedisTimeSeries 1.12.6](https://github.com/RedisTimeSeries/RedisTimeSeries/releases/tag/v1.12.6)__
* __[RedisBloom 2.8.16](https://github.com/RedisBloom/RedisBloom/releases/tag/v2.8.16)__

**Recommended Client Libraries**
* Java
  * [Jedis 7.0.0 or greater](https://github.com/redis/jedis/releases/tag/v7.0.0)
  * [redis-om-spring 1.0.4 or greater](https://github.com/redis/redis-om-spring/releases/tag/v1.0.4)
* Python
  * [redis-py 7.0.1 or greater](https://github.com/redis/redis-py/releases/tag/v7.0.1)
  * [redis-om-python 0.3.5 or greater](https://github.com/redis/redis-om-python/releases/tag/v0.3.5)
* NodeJS
  * [node-redis 5.9.0 or greater](https://github.com/redis/node-redis/releases/tag/redis%405.9.0)
  * [redis-om-node 0.2.0 or greater](https://github.com/redis/redis-om-node/releases/tag/v0.2.0)
* .NET
  * [redis-om-dotnet 1.0.1 or greater](https://github.com/redis/redis-om-dotnet/releases/tag/v1.0.1)
  * [NRedisStack 1.1.1 or greater](https://github.com/redis/NRedisStack/releases/tag/v1.1.1)
* Go
  * [go-redis 9.16.0 or greater](https://github.com/redis/go-redis/releases/tag/v9.16.0)
  * [rueidis 1.0.67 or greater](https://github.com/redis/rueidis/releases/tag/v1.0.67)

Compatible with [Redis Insight](https://redis.io/download). The Docker image redis/redis-stack for this version is bundled with [Redis Insight 2.70.1](https://github.com/RedisInsight/RedisInsight/releases/tag/2.70.1).

Note: version numbers follow the following pattern:
`x.y.z-b`
* `x.y` Redis Major version
* `z` increases with even numbers as a module x.y version increases.
* `b` denotes a patch to Redis or a module (any `z` of Redis or Modules). `b` will consist of a `v` + numeric value.

## Downloads

* macOS: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.ventura.x86_64.zip), [arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.sonoma.arm64.zip)
* AppImage: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8-x86_64.AppImage)
* Ubuntu: [Bionic x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.bionic.x86_64.tar.gz), [Bionic arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.bionic.arm64.tar.gz), [Focal x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.focal.x86_64.tar.gz), [Focal arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.focal.arm64.tar.gz), [Snap x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.x86_64.snap), [Snap arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.arm64.snap), [Jammy x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.jammy.x86_64.tar.gz), [Jammy arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.jammy.arm64.tar.gz)
* Debian: [Bullseye x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.bullseye.x86_64.tar.gz)
* RHEL 8/CentOS Linux 8: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.rhel8.x86_64.tar.gz)
* RHEL 9/Rocky Linux 9/CentOS Linux 9: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v8.rhel9.x86_64.tar.gz)
* Redis Stack on [Dockerhub](https://hub.docker.com/u/redis): [x86_64 and arm64](https://hub.docker.com/r/redis/redis-stack)
* Redis Stack server on [Dockerhub](https://hub.docker.com/u/redis): [x86_64 and arm64](https://hub.docker.com/r/redis/redis-stack-server)