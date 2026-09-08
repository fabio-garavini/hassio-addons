## [2.38.4](https://github.com/n8n-io/n8n/compare/n8n@2.38.3...n8n@2.38.4) (2026-09-07)


### Bug Fixes

* **core:** Cap task runner task timeouts to the graceful shutdown window ([#37765](https://github.com/n8n-io/n8n/issues/37765)) ([6e12447](https://github.com/n8n-io/n8n/commit/6e12447f9b747da8f41cf7246e57ca0fa7ed5f16))
* **core:** Keep a serving external secrets provider active when its replacement fails ([#37882](https://github.com/n8n-io/n8n/issues/37882)) ([1abbd4b](https://github.com/n8n-io/n8n/commit/1abbd4b8087d8965bf972de731bf8c1b083dea48))
* **core:** Prevent Anthropic agent threads from breaking permanently and keep run errors visible ([#37722](https://github.com/n8n-io/n8n/issues/37722)) ([1007dff](https://github.com/n8n-io/n8n/commit/1007dff4befe77fc97aa438b934db0a3e948a360))
* **core:** Stop npm audit from stalling Instance AI sandbox setup ([#37877](https://github.com/n8n-io/n8n/issues/37877)) ([6120419](https://github.com/n8n-io/n8n/commit/6120419fdd31cf74e33f2768513e73dbf3023251))
* **core:** Stop task broker before task runner processes on shutdown ([#37886](https://github.com/n8n-io/n8n/issues/37886)) ([a8fc772](https://github.com/n8n-io/n8n/commit/a8fc772e483e38969ca6e10117d5b501c607fd18))