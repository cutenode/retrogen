# Retrospective for `nodejs` from 2022-03-27 to 2022-04-02

Reporting on 46 Issues from 34 authors, 54 Pull Requests from 28 authors, and 2 Discussions from 2 authors.


### node-gyp

#### Open Issues

- Windows installation: Can't find "Visual C++ build tools" workload ([#2637](https://github.com/nodejs/node-gyp/issues/2637))

### node-core-utils

#### Open Issues

- Consider encrypting .ncurc with a passphrase ([#615](https://github.com/nodejs/node-core-utils/issues/615))

### nan

#### Open Issues

-  strings-test.js fails on s390x ([#935](https://github.com/nodejs/nan/issues/935))

### reliability

#### Open Issues

- CI Reliability 2022-04-02 ([#239](https://github.com/nodejs/reliability/issues/239))
- CI Reliability 2022-04-01 ([#238](https://github.com/nodejs/reliability/issues/238))
- CI Reliability 2022-03-31 ([#237](https://github.com/nodejs/reliability/issues/237))
- CI Reliability 2022-03-30 ([#236](https://github.com/nodejs/reliability/issues/236))
- CI Reliability 2022-03-29 ([#235](https://github.com/nodejs/reliability/issues/235))
- CI Reliability 2022-03-28 ([#234](https://github.com/nodejs/reliability/issues/234))

### docker-node

#### Closed Issues

- SIGTERM not working due to entrypoint script ([#1687](https://github.com/nodejs/docker-node/issues/1687))

### node

#### Open Issues

- having problems installing yarn packages ([#42565](https://github.com/nodejs/node/issues/42565))
- How about abstract `URL` to an standalone C++ repo just like what http-parser does? ([#42545](https://github.com/nodejs/node/issues/42545))
- [http.IncomingMessage] `req.toWeb()` ([#42529](https://github.com/nodejs/node/issues/42529))
- Run worker threads with `--v8-pool-size=0` ([#42523](https://github.com/nodejs/node/issues/42523))
- Get protocol and path from dns.getServers() ([#42513](https://github.com/nodejs/node/issues/42513))
- Increase default 'max_semi_space_size' value to reduce GC overhead in V8 ([#42511](https://github.com/nodejs/node/issues/42511))
- Get plain record type of DNS query ([#42506](https://github.com/nodejs/node/issues/42506))
- node server crash & reco'd open bug fix ([#42505](https://github.com/nodejs/node/issues/42505))
- Crash ([#42501](https://github.com/nodejs/node/issues/42501))

#### Open Pull Requests

- src: handling v8 thread pool of zero ([#42524](https://github.com/nodejs/node/pull/42524))

#### Open Discussions

- can I log value in test? ([#42415](https://github.com/nodejs/node/discussions/42415))

#### Merged Pull Requests

- test: fix typo in common/wpt.js ([#42567](https://github.com/nodejs/node/pull/42567))
- doc: fix internal link in collaborator-guide.md ([#42551](https://github.com/nodejs/node/pull/42551))
- doc: remove extraneous comma ([#42548](https://github.com/nodejs/node/pull/42548))
- crypto: fix webcrypto derive key lengths ([#42542](https://github.com/nodejs/node/pull/42542))
- test: improve `FileHandle.prototype.write` coverage ([#42541](https://github.com/nodejs/node/pull/42541))
- buffer: fix `atob` input validation ([#42539](https://github.com/nodejs/node/pull/42539))
- doc: consolidate CI sections ([#42534](https://github.com/nodejs/node/pull/42534))
- test: pass data into napi_create_external ([#42532](https://github.com/nodejs/node/pull/42532))
- doc: add stability class to legacy description ([#42525](https://github.com/nodejs/node/pull/42525))
- doc: document breaking change in `http.IncomingMessage` `'close'` event ([#42521](https://github.com/nodejs/node/pull/42521))
- src: fix typo in InspectorIoDelegate constructor ([#42520](https://github.com/nodejs/node/pull/42520))
- doc: guide towards x509.fingerprint256 ([#42516](https://github.com/nodejs/node/pull/42516))
- test: fix typos in test/parallel ([#42502](https://github.com/nodejs/node/pull/42502))

#### Closed Issues

- node: bad option: --experimental-wasm-anyref ([#42564](https://github.com/nodejs/node/issues/42564))
- repl: -r doesn't work with ESM ([#42547](https://github.com/nodejs/node/issues/42547))
- Simple  ([#42537](https://github.com/nodejs/node/issues/42537))
- `atob` should ignore spaces ([#42530](https://github.com/nodejs/node/issues/42530))
- Transform stream does not wait for attached write stream; callback to stream.pipeline fires prematurely ([#42519](https://github.com/nodejs/node/issues/42519))
- Upgrade to npm 8.5.3 in 16.x to alleviate PRISMA-2022-0039 ([#42510](https://github.com/nodejs/node/issues/42510))
- import(data:text/javascript,) throw SyntaxError ([#42504](https://github.com/nodejs/node/issues/42504))

#### Closed Pull Requests

- doc: add @meixg to collaborators ([#42576](https://github.com/nodejs/node/pull/42576))
- Update Chromium zlib 1.2.12 @ faff052b6b6edcd6dd548513fe44ac0941427bf0 ([#42570](https://github.com/nodejs/node/pull/42570))
- tools: enable jsdoc/require-property-description lint rule ([#42535](https://github.com/nodejs/node/pull/42535))
- WIP: Remove precompiled v8 specific header files ([#42526](https://github.com/nodejs/node/pull/42526))
- Fixed typo. Removed useless "?". ([#42518](https://github.com/nodejs/node/pull/42518))
- [v12.x] Backport node-api finalization fixes ([#42512](https://github.com/nodejs/node/pull/42512))
- doc: fix cli typo ([#42509](https://github.com/nodejs/node/pull/42509))
- doc: fix experimental-specifier-resolution cli command typo ([#42508](https://github.com/nodejs/node/pull/42508))

### help

#### Open Issues

- Impossible to Uninstall damaged Node Windows 10 ([#3811](https://github.com/nodejs/help/issues/3811))
- Get product id of nodejs v17 ([#3810](https://github.com/nodejs/help/issues/3810))
- nmp' is not recognized as an internal or external command, operable program or batch file. ([#3808](https://github.com/nodejs/help/issues/3808))
- enoent error  ([#3807](https://github.com/nodejs/help/issues/3807))
- Do I have to worry about Security for the *local* machine when using node.js ? ([#3806](https://github.com/nodejs/help/issues/3806))
- Heap memory usage much higher for bundled server.js file versus separate node_modules ([#3805](https://github.com/nodejs/help/issues/3805))
- error: g++ was not found ([#3803](https://github.com/nodejs/help/issues/3803))

#### Closed Issues

- I couldn't npm install ghost-cli@latest -g ([#3809](https://github.com/nodejs/help/issues/3809))
- can I log value in test? ([#3802](https://github.com/nodejs/help/issues/3802))

### llhttp

#### Closed Issues

- llhttp_should_keep_alive and http_parser compatibility ([#147](https://github.com/nodejs/llhttp/issues/147))

### nodejs.org

#### Open Issues

- Windows MSI Installer for Node/npm (LTS) uses vulnerable/obsolete security certificate hash, SHA1 ([#4522](https://github.com/nodejs/nodejs.org/issues/4522))

#### Merged Pull Requests

- build(deps-dev): bump prettier from 2.6.0 to 2.6.1 ([#4521](https://github.com/nodejs/nodejs.org/pull/4521))
- build(deps-dev): bump stylelint from 14.6.0 to 14.6.1 ([#4520](https://github.com/nodejs/nodejs.org/pull/4520))
- build(deps-dev): bump eslint from 8.11.0 to 8.12.0 ([#4519](https://github.com/nodejs/nodejs.org/pull/4519))

### undici

#### Open Issues

- Spec Deviations ([#1316](https://github.com/nodejs/undici/issues/1316))
- How to disconnect after fetch? ([#1310](https://github.com/nodejs/undici/issues/1310))
- [types] `Response.body` does not extend `ReadableStream` ([#1308](https://github.com/nodejs/undici/issues/1308))
- Allow user provided connection header ([#1307](https://github.com/nodejs/undici/issues/1307))
- Missing Interceptable type in export ? ([#1306](https://github.com/nodejs/undici/issues/1306))

#### Open Pull Requests

- feat(fecth): corsCheck ([#1315](https://github.com/nodejs/undici/pull/1315))

#### Open Discussions

- How to measure request stages? ([#1313](https://github.com/nodejs/undici/discussions/1313))

#### Merged Pull Requests

- fix(fetch): add missing ReadableStream interface to response.body ([#1314](https://github.com/nodejs/undici/pull/1314))
- feat: CORB check. ([#1312](https://github.com/nodejs/undici/pull/1312))
- chore: export Interceptable interface ([#1311](https://github.com/nodejs/undici/pull/1311))

#### Closed Pull Requests

- fetch: bypass headerlist.append for known headers ([#1304](https://github.com/nodejs/undici/pull/1304))

### next-10

#### Closed Issues

- Node.js  Next 10 Years team Meeting 2022-03-30 ([#125](https://github.com/nodejs/next-10/issues/125))

### tooling

#### Open Issues

- Node.js  Tooling Group Meeting 2022-04-01 ([#139](https://github.com/nodejs/tooling/issues/139))

### nodejs.dev

#### Open Issues

- Node.js  Website Redesign Strategic Initiative Meeting 2022-03-30 ([#2338](https://github.com/nodejs/nodejs.dev/issues/2338))

#### Merged Pull Requests

- build(deps): bump @storybook/builder-webpack5 from 6.4.19 to 6.4.20 ([#2370](https://github.com/nodejs/nodejs.dev/pull/2370))
- build(deps-dev): bump eslint-plugin-testing-library from 5.0.6 to 5.2.0 ([#2367](https://github.com/nodejs/nodejs.dev/pull/2367))
- build(deps-dev): bump @types/react-dom from 17.0.11 to 17.0.14 ([#2355](https://github.com/nodejs/nodejs.dev/pull/2355))
- build(deps): bump minimist from 1.2.5 to 1.2.6 ([#2342](https://github.com/nodejs/nodejs.dev/pull/2342))
- chore: 🤖 Fixed failing build for github actions ([#2341](https://github.com/nodejs/nodejs.dev/pull/2341))
- Update index.md ([#2340](https://github.com/nodejs/nodejs.dev/pull/2340))
- docs: change bash to app.js at getting started tutorial ([#2339](https://github.com/nodejs/nodejs.dev/pull/2339))

#### Closed Pull Requests

- build(deps-dev): bump prettier from 2.5.1 to 2.6.1 ([#2354](https://github.com/nodejs/nodejs.dev/pull/2354))

### TSC

#### Merged Pull Requests

- doc: fix formatting of 31 March 2022 attendees ([#1200](https://github.com/nodejs/TSC/pull/1200))
- doc: add minutes for meeting 31 March 2022 ([#1198](https://github.com/nodejs/TSC/pull/1198))
- build(deps): bump minimist from 1.2.5 to 1.2.6 ([#1197](https://github.com/nodejs/TSC/pull/1197))

#### Closed Issues

- Node.js Technical Steering Committee (TSC) Meeting 2022-03-31 ([#1196](https://github.com/nodejs/TSC/issues/1196))

### i18n

#### Merged Pull Requests

- build(deps): bump minimist from 1.2.5 to 1.2.6 ([#642](https://github.com/nodejs/i18n/pull/642))
- build(deps): bump actions/setup-node from 3.0.0 to 3.1.0 ([#641](https://github.com/nodejs/i18n/pull/641))
- build(deps): bump peter-evans/create-pull-request from 3.14.0 to 4.0.1 ([#639](https://github.com/nodejs/i18n/pull/639))
- build(deps-dev): bump builtins from 4.1.0 to 5.0.0 ([#638](https://github.com/nodejs/i18n/pull/638))

#### Closed Pull Requests

- build(deps-dev): bump superagent from 7.1.1 to 7.1.2 ([#637](https://github.com/nodejs/i18n/pull/637))

### meeting-picker

#### Merged Pull Requests

- Udpates ([#19](https://github.com/nodejs/meeting-picker/pull/19))
- chore(deps): bump minimist from 1.2.5 to 1.2.6 ([#18](https://github.com/nodejs/meeting-picker/pull/18))

### build

#### Merged Pull Requests

- ansible: add armv7l on aarch64 docker files ([#2911](https://github.com/nodejs/build/pull/2911))
- ansible: updates for Linux arm64 ([#2910](https://github.com/nodejs/build/pull/2910))

### nodejs-collection

#### Open Pull Requests

- Update readme ([#43](https://github.com/nodejs/nodejs-collection/pull/43))

### remark-preset-lint-node

#### Merged Pull Requests

- build(deps-dev): bump eslint from 8.11.0 to 8.12.0 ([#353](https://github.com/nodejs/remark-preset-lint-node/pull/353))

### security-wg

#### Merged Pull Requests

- build(deps): bump minimist from 1.2.5 to 1.2.6 ([#790](https://github.com/nodejs/security-wg/pull/790))

### diagnostics

#### Closed Pull Requests

- doc: add minutes for meeting, 22nd March 2022 ([#550](https://github.com/nodejs/diagnostics/pull/550))
