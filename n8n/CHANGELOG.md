# [2.0.0](https://github.com/n8n-io/n8n/compare/n8n@2.0.0-rc.3...n8n@2.0.0) (2025-12-08)


### Bug Fixes

* **core** Disable bare repos in Git node by default ([#22278](https://github.com/n8n-io/n8n/issues/22278)) ([cbed1ed](https://github.com/n8n-io/n8n/commit/cbed1ed044cf4325fc623ce3d8e9b3cbc1608309))
* **core** Remove worker implicit retries (max stalled count) setting ([#22286](https://github.com/n8n-io/n8n/issues/22286)) ([e2f6b48](https://github.com/n8n-io/n8n/commit/e2f6b48d88970a2c8fa5a074ce3d51f42329c08d))
* **core** Make Pyodide unrunnable ([#22334](https://github.com/n8n-io/n8n/issues/22334)) ([b341b84](https://github.com/n8n-io/n8n/commit/b341b84f5ea616044da005715a83960ade992d3f))
* **core** Remove runners from n8n Dockerfile ([#22283](https://github.com/n8n-io/n8n/issues/22283)) ([f7b7a6b](https://github.com/n8n-io/n8n/commit/f7b7a6b8116eaae2f876105c03d69ce99de661d5))
* **core** Start enforcing auth on OAuth callback endpoints ([#22345](https://github.com/n8n-io/n8n/issues/22345)) ([e2b5298](https://github.com/n8n-io/n8n/commit/e2b5298e56472dd44e149fb8d83841ac6f253f44))
* **core** Enforce file settings permissions by default ([#22284](https://github.com/n8n-io/n8n/issues/22284)) ([c885568](https://github.com/n8n-io/n8n/commit/c88556803ffdb87977ec5a121d6348bfdddcc41b))
* **core** Drop non-pooling sqlite driver ([#22336](https://github.com/n8n-io/n8n/issues/22336)) ([883e6b3](https://github.com/n8n-io/n8n/commit/883e6b3d773cab8b991cb0de024721ef8af7eeba))
* **core** Set default for allowed file access dirs ([#22279](https://github.com/n8n-io/n8n/issues/22279)) ([6cd12e7](https://github.com/n8n-io/n8n/commit/6cd12e767852ac90c2d07bc1babff65b222ec319))
* **core** Disable `ExecuteCommand` and `LocalFileTrigger` nodes by default ([#22340](https://github.com/n8n-io/n8n/issues/22340)) ([3f72951](https://github.com/n8n-io/n8n/commit/3f7295136db19e3e38125293a46edb895e907cc2))
* **core** Drop `--tunnel` option ([#22342](https://github.com/n8n-io/n8n/issues/22342)) ([2b55eab](https://github.com/n8n-io/n8n/commit/2b55eab4bcd8ba2dabc9810b1c54afe9a4711882))
* **core** Drop `N8N_CONFIG_FILES` env var ([#22459](https://github.com/n8n-io/n8n/issues/22459)) ([b9da183](https://github.com/n8n-io/n8n/commit/b9da183366927aa22e835036c34d036007f75dee))
* **core** Drop binary data memory mode ([#22468](https://github.com/n8n-io/n8n/issues/22468)) ([e9ceebf](https://github.com/n8n-io/n8n/commit/e9ceebf94f11fae63dcdcfed0a9dfa5e6c9742e8))
* **core** Make sub-workflows with waits return correct data to parents ([#22611](https://github.com/n8n-io/n8n/issues/22611)) ([14205dc](https://github.com/n8n-io/n8n/commit/14205dc0c6ae15b1329e46584c6b472100fe0ad5))
* **core** Prevent execution data from being overwritten on manual workflow resume ([#22665](https://github.com/n8n-io/n8n/issues/22665)) ([f603bc8](https://github.com/n8n-io/n8n/commit/f603bc891f68d3779b4a8efaf667311afe38f2c9))
* **core** Address review feedback for sub-workflow wait fix ([#22745](https://github.com/n8n-io/n8n/issues/22745)) ([ce64032](https://github.com/n8n-io/n8n/commit/ce6403262badd93ccde1a254f71631adc2176886))
* **editor** Bind color-scheme to app theme setting ([#22774](https://github.com/n8n-io/n8n/issues/22774)) ([3d46b97](https://github.com/n8n-io/n8n/commit/3d46b97bdf1c01852998ce5a5eb4631fe990d268))
* **editor** Design tweaks for publish modals ([#22694](https://github.com/n8n-io/n8n/issues/22694)) ([98efa19](https://github.com/n8n-io/n8n/commit/98efa19ca4d9cf17c88a3778c00fea45caa54738))
* Security patches ([#22748](https://github.com/n8n-io/n8n/issues/22748)) ([d22c173](https://github.com/n8n-io/n8n/commit/d22c173aec9f990f1912450399eea29893e62d24))
* **core** Do not prevent credential save if property has default value ([#22720](https://github.com/n8n-io/n8n/issues/22720)) ([03744c3](https://github.com/n8n-io/n8n/commit/03744c30c59b96a8ad67d8d6b321e0f7ff0571e2))
* **core** Update migration that activate workflows with executeWorkflowTrigger ([#22860](https://github.com/n8n-io/n8n/issues/22860)) ([f7cb18c](https://github.com/n8n-io/n8n/commit/f7cb18ce3853a1813646460fc472b0d20f482a53))
* Add `HOME` env var to distroless runners image ([#22796](https://github.com/n8n-io/n8n/issues/22796)) ([2cf1021](https://github.com/n8n-io/n8n/commit/2cf10216bd396118eb170f237b918df5850a3402))
* **core** Allowlist `HOME` env var in JS runner config ([#22839](https://github.com/n8n-io/n8n/issues/22839)) ([a31ca3d](https://github.com/n8n-io/n8n/commit/a31ca3d19052f7fdecb1c2ed9a81e15ff9bd14b6))
* Security patches for jws ([#22918](https://github.com/n8n-io/n8n/issues/22918)) ([a642722](https://github.com/n8n-io/n8n/commit/a642722115a011f16292074833d47bee540a34b2))
* Update checksum after restoring workflow ([#22920](https://github.com/n8n-io/n8n/issues/22920)) ([207c3f8](https://github.com/n8n-io/n8n/commit/207c3f8ba81e9c5b2148278f7def492b4789d2dc))
* Fetch workflow before updating checksum ([#22927](https://github.com/n8n-io/n8n/issues/22927)) ([2260953](https://github.com/n8n-io/n8n/commit/22609531c39dce6477123734f68a53d932a26d8b))
* Update @modelcontextprotocol/sdk ([#22823](https://github.com/n8n-io/n8n/issues/22823)) ([f35c65e](https://github.com/n8n-io/n8n/commit/f35c65e6256b1cab272d69decea95234d0eb1388))

### Features

* Remove mysql and mariadb support ([#22437](https://github.com/n8n-io/n8n/issues/22437)) ([4aa6dc1](https://github.com/n8n-io/n8n/commit/4aa6dc136070859bdea556b65ce951d0f2d1f5d8))
* **Spontit Node** Remove Spontit node ([#22467](https://github.com/n8n-io/n8n/issues/22467)) ([c3442f5](https://github.com/n8n-io/n8n/commit/c3442f507d89b519bcb0c2461ca2c6602d38260c))
* **Crowd.dev node** Remove crowd.dev node ([#22469](https://github.com/n8n-io/n8n/issues/22469)) ([b615abc](https://github.com/n8n-io/n8n/commit/b615abcb0a41bf51af15a029925090aef0efb55f))
* **Kitemaker node** Remove Kitemaker node ([#22470](https://github.com/n8n-io/n8n/issues/22470)) ([0870d0a](https://github.com/n8n-io/n8n/commit/0870d0abda69b86203b64a0f862cb3115d8db528))
* **Automizy Node** Remove Automizy node ([#22471](https://github.com/n8n-io/n8n/issues/22471)) ([cd8a3ad](https://github.com/n8n-io/n8n/commit/cd8a3adc1be12d0b3c60c15e1c540a9cd427c21b))
* **editor** Sidebar redesign ([#22395](https://github.com/n8n-io/n8n/issues/22395)) ([0ba2043](https://github.com/n8n-io/n8n/commit/0ba2043047dadfdccf96b30f5653886430d7eb54))
* **core** Block access to env in code and expressions by default ([#22643](https://github.com/n8n-io/n8n/issues/22643)) ([0ffd760](https://github.com/n8n-io/n8n/commit/0ffd76093c2e9b62098e14dc7e402f727e14e027))
* **core** Introduce native Python code tool for AI agent ([#22658](https://github.com/n8n-io/n8n/issues/22658)) ([b1bc778](https://github.com/n8n-io/n8n/commit/b1bc7786d860d0b9e02fbda3604a979ed8d39f3d))
* **editor** Improve node component visual states ([#20242](https://github.com/n8n-io/n8n/issues/20242)) ([3fc1c56](https://github.com/n8n-io/n8n/commit/3fc1c566a468509c758bd0800b30f3a47d981b4c))
* Validate nodes before activating ([#22916](https://github.com/n8n-io/n8n/issues/22916)) ([1aa325a](https://github.com/n8n-io/n8n/commit/1aa325a64f26a8b377cee341df7486dcedd535b2))
* Bump dotenv to 17.2.3 ([#22461](https://github.com/n8n-io/n8n/issues/22461)) ([ab4ee1a](https://github.com/n8n-io/n8n/commit/ab4ee1a7a6b9a50c360910980dba7b407e125f5c))
* Remove feature flag for NDV overhaul ([#22924](https://github.com/n8n-io/n8n/issues/22924)) ([5dcd75b](https://github.com/n8n-io/n8n/commit/5dcd75bd467948ea07bcf5b2268cb0e1715f1133))

### ⚠️ BREAKING CHANGES
Review the complete list of breaking changes and migration guidance in the [v2.0 breaking changes docs.](https://docs.n8n.io/2-0-breaking-changes/)