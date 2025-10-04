This is a maintenance release for Redis Stack Server 7.4.0.

Update urgency: `SECURITY`: there are security fixes in the release.

[Docker](https://hub.docker.com/r/redis/redis-stack)

### Headlines:
This version includes security fixes for the **Redis** server, addressing several issues related to Lua scripts, such as an out-of-bounds read, a potential remote code execution vulnerability, and other related vulnerabilities.
In addition to the security updates, the release delivers several bug fixes, including endless client blocking when using blocking commands, a potential use-after-free issue after Pub/Sub and Lua defragmentation, and other related fixes.
Finally, this maintenance release ships with the latest version of **Redis Insight**.

### Details:

 **Security and privacy**
* **Redis**:
  * (CVE-2025-49844) A Lua script may lead to remote code execution
  * (CVE-2025-46817) A Lua script may lead to integer overflow and potential RCE
  * (CVE-2025-46818) A Lua script can be executed in the context of another user
  * (CVE-2025-46819) LUA out-of-bound read

**Bug Fixes**

* **Redis**
  * [#14330](https://github.com/redis/redis/pull/14330) Potential use-after-free after pubsub and Lua defrag
  * [#14319](https://github.com/redis/redis/pull/14319) Potential crash on Lua script defrag
  * [#14164](https://github.com/redis/redis/pull/14164) Prevent `CLIENT UNBLOCK` from unblocking `CLIENT PAUSE`
  * [#14165](https://github.com/redis/redis/pull/14165) Endless client blocking for blocking commands
  * [#14163](https://github.com/redis/redis/pull/14163) `EVAL` crash when error table is empty
  * [#14227](https://github.com/redis/redis/pull/14227) `HINCRBYFLOAT` removes field expiration on replica

**Redis version**:
  * __[Redis 7.4.6](https://github.com/redis/redis/releases/tag/7.4.6)__

**Module versions**	
* __[RediSearch 2.10.20](https://github.com/RediSearch/RediSearch/releases/tag/v2.10.20)__
* __[RedisJSON 2.8.9](https://github.com/RedisJSON/RedisJSON/releases/tag/v2.8.9)__
* __[RedisTimeSeries 1.12.6](https://github.com/RedisTimeSeries/RedisTimeSeries/releases/tag/v1.12.6)__
* __[RedisBloom 2.8.7](https://github.com/RedisBloom/RedisBloom/releases/tag/v2.8.7)__

**Recommended Client Libraries**
* Java
  * [Jedis 5.2.0 or greater](https://github.com/redis/jedis/releases/tag/v5.2.0)
  * [redis-om-spring 1.0.4 or greater](https://github.com/redis/redis-om-spring/releases/tag/v1.0.4)
* Python
  * [redis-py 6.4.0 or greater](https://github.com/redis/redis-py/releases/tag/v6.4.0)
  * [redis-om-python 0.3.5 or greater](https://github.com/redis/redis-om-python/releases/tag/v0.3.5)
* NodeJS
  * [node-redis 5.8.2 or greater](https://github.com/redis/node-redis/releases/tag/redis%405.8.2)
  * [redis-om-node 0.2.0 or greater](https://github.com/redis/redis-om-node/releases/tag/v0.2.0)
* .NET
  * [redis-om-dotnet 1.0.1 or greater](https://github.com/redis/redis-om-dotnet/releases/tag/v1.0.1)
  * [NRedisStack 1.1.1 or greater](https://github.com/redis/NRedisStack/releases/tag/v1.1.1)
* Go
  * [go-redis 9.14.0 or greater](https://github.com/redis/go-redis/releases/tag/v9.14.0)
  * [rueidis 1.0.66 or greater](https://github.com/redis/rueidis/releases/tag/v1.0.66)

Compatible with [Redis Insight](https://redis.io/download). The Docker image redis/redis-stack for this version is bundled with [Redis Insight 2.70.1](https://github.com/RedisInsight/RedisInsight/releases/tag/2.70.1).

Note: version numbers follow the following pattern:
`x.y.z-b`
* `x.y` Redis Major version
* `z` increases with even numbers as a module x.y version increases.
* `b` denotes a patch to Redis or a module (any `z` of Redis or Modules). `b` will consist of a `v` + numeric value.

## Downloads

* macOS: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.ventura.x86_64.zip), [arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.sonoma.arm64.zip)
* AppImage: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7-x86_64.AppImage)
* Ubuntu: [Bionic x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.bionic.x86_64.tar.gz), [Bionic arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.bionic.arm64.tar.gz), [Focal x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.focal.x86_64.tar.gz), [Focal arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.focal.arm64.tar.gz), [Snap x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.x86_64.snap), [Snap arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.arm64.snap), [Jammy x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.jammy.x86_64.tar.gz), [Jammy arm64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.jammy.arm64.tar.gz)
* Debian: [Bullseye x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.bullseye.x86_64.tar.gz)
* RHEL 8/CentOS Linux 8: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.rhel8.x86_64.tar.gz)
* RHEL 9/Rocky Linux 9/CentOS Linux 9: [x86_64](https://packages.redis.io/redis-stack/redis-stack-server-7.4.0-v7.rhel9.x86_64.tar.gz)
* Redis Stack on [Dockerhub](https://hub.docker.com/u/redis): [x86_64 and arm64](https://hub.docker.com/r/redis/redis-stack)
* Redis Stack server on [Dockerhub](https://hub.docker.com/u/redis): [x86_64 and arm64](https://hub.docker.com/r/redis/redis-stack-server)