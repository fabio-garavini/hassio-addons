## Highlights

- **API Keys**: Connect scripts, integrations, and automations to BookOrbit with dedicated API keys, making it easier to access the API without using account credentials.  <!-- icon: KeyRound -->
<img width="700" alt="01-api-keys-in-your-settings" src="https://github.com/user-attachments/assets/d4b6df39-1a6e-4b05-9754-a5aece4ffe60" />
<img width="700" alt="02-create-a-limited-api-key" src="https://github.com/user-attachments/assets/494c6a42-d457-418c-931b-bdd43266a78d" />
<img width="700" alt="03-copy-the-new-key-once" src="https://github.com/user-attachments/assets/3f9c0760-3008-4f4a-90cf-35dbd48cf1e3" />
<img width="700" alt="05-server-wide-api-key-settings" src="https://github.com/user-attachments/assets/d1cc8f27-51db-4c11-a05b-a763740fba8d" />

<hr>

### Features

* **auth:** add API keys for scripts and automations ([1dc6e01](https://github.com/bookorbit/bookorbit/commit/1dc6e01fa150af93f95395d3ec6b98013c5a68c6)) by @neonsolstice, closes [#1234](https://github.com/bookorbit/bookorbit/issues/1234) [#1154](https://github.com/bookorbit/bookorbit/issues/1154) [#1301](https://github.com/bookorbit/bookorbit/issues/1301) [#542](https://github.com/bookorbit/bookorbit/issues/542)
* **server:** add TorBox as a download client for requests ([#1819](https://github.com/bookorbit/bookorbit/issues/1819)) ([d89a7a4](https://github.com/bookorbit/bookorbit/commit/d89a7a4b6713780879d58365ce3d17cfc7849770)) by @marcelorodrigo, closes [#1805](https://github.com/bookorbit/bookorbit/issues/1805)


### Bug Fixes

* **auth:** keep progress routes open to integrations ([2ddae7c](https://github.com/bookorbit/bookorbit/commit/2ddae7c385c3e1a819f5a54db0d938c713c66f3d)) by @neonsolstice
* **books:** avoid non-indexed duplicate scan cross-format join ([#2138](https://github.com/bookorbit/bookorbit/issues/2138)) ([022f9d1](https://github.com/bookorbit/bookorbit/commit/022f9d10206946258cc6d677778ad7e9750c8319)) by @jadehawk, closes [#2137](https://github.com/bookorbit/bookorbit/issues/2137)
* **metadata:** decode numeric OPF character references ([68c286a](https://github.com/bookorbit/bookorbit/commit/68c286a0a43a313a1c5b91a9f790e4cd44e14640)) by @neonsolstice, closes [#2153](https://github.com/bookorbit/bookorbit/issues/2153)
* **auth:** verify Android attested keys on App Attest guarded routes ([5e4b4b6](https://github.com/bookorbit/bookorbit/commit/5e4b4b6d0abbc40e0c194a37706eb1a2d0b74f0e)) by @neonsolstice
* **server:** repair the TorBox migration snapshot and a racy staging test ([59979ff](https://github.com/bookorbit/bookorbit/commit/59979ffb8c4d6e1943671737634054801fcf8f93)) by @neonsolstice


### Internationalization

* **client:** sync translations from Crowdin ([#2125](https://github.com/bookorbit/bookorbit/issues/2125)) ([03a0333](https://github.com/bookorbit/bookorbit/commit/03a0333e0f9af329f6e9881a18d0fca039dfb10b)) by @neonsolstice


### Performance

* **scanner:** read audio lengths in-process and scan several books at once ([0df241e](https://github.com/bookorbit/bookorbit/commit/0df241eb25170666b9cf248f290743e74bc96167)) by @neonsolstice, closes [#1924](https://github.com/bookorbit/bookorbit/issues/1924)

---

**Docker**

```bash
docker pull ghcr.io/bookorbit/bookorbit:3.8.0
```

Multi-arch: `linux/amd64` and `linux/arm64`.


<!-- release-metadata -->

[Full diff](https://github.com/bookorbit/bookorbit/compare/v3.7.0...v3.8.0)

