# Retrospective for `nodejs`

Reporting on 32 Issues from 24 authors, 68 Pull Requests from 33 authors, and 8 Discussions from 8 authors.


### undici

#### Open Issues

- Strange result with `set-cookie` header of `undici.fetch` ([#1328](https://github.com/nodejs/undici/issues/1328))
- [I am sorry about this] Jest bug when using `MockScope.delay` ([#1327](https://github.com/nodejs/undici/issues/1327))

#### Open Discussions

- What is undici ([#1302](https://github.com/nodejs/undici/discussions/1302))
- 2 Open stream to communicate ([#1325](https://github.com/nodejs/undici/discussions/1325))

### node

#### Open Issues

- The embedded Node.js example leads to a crash ([#42670](https://github.com/nodejs/node/issues/42670))
- Continuous deployment of node nightly executable only for GitHub and CDN ([#42664](https://github.com/nodejs/node/issues/42664))
- `atob` should throw an error if the input is not correctly encoded ([#42646](https://github.com/nodejs/node/issues/42646))
- arm64 cross-compile fails on amd64 ([#42643](https://github.com/nodejs/node/issues/42643))
- Global `fetch` breaks `source-map` ([#42638](https://github.com/nodejs/node/issues/42638))

#### Open Pull Requests

- process: add parseArgs method ([#42675](https://github.com/nodejs/node/pull/42675))
- test: fix timeout of test-heap-prof.js in riscv devices ([#42674](https://github.com/nodejs/node/pull/42674))
- src: check if the script file exists before starting inspector ([#42673](https://github.com/nodejs/node/pull/42673))
- doc: fix the example for embedders ([#42671](https://github.com/nodejs/node/pull/42671))
- src,crypto: adjust crypto_bio files for formatter/linter ([#42668](https://github.com/nodejs/node/pull/42668))
- deps: update Acorn to v8.7.0 ([#42667](https://github.com/nodejs/node/pull/42667))
- build: make x86 Windows support temporarily experimental ([#42666](https://github.com/nodejs/node/pull/42666))
- tools,src: remove clang-format ([#42665](https://github.com/nodejs/node/pull/42665))
- doc: fix coverity report ([#42663](https://github.com/nodejs/node/pull/42663))
- buffer: atob throw error when the input value is invalid ([#42662](https://github.com/nodejs/node/pull/42662))
- doc: fix `added:` info for some methods ([#42661](https://github.com/nodejs/node/pull/42661))
- doc: add maintaining-webassembly.md ([#42660](https://github.com/nodejs/node/pull/42660))
- doc: update minimum glibc requirements for Linux ([#42659](https://github.com/nodejs/node/pull/42659))
- test_runner: add initial CLI runner ([#42658](https://github.com/nodejs/node/pull/42658))
- deps: update V8 to 10.1 ([#42657](https://github.com/nodejs/node/pull/42657))
- test: remove the legacy url parser function in inspector-helper.js ([#42656](https://github.com/nodejs/node/pull/42656))
- deps: update ICU to 71.1 ([#42655](https://github.com/nodejs/node/pull/42655))
- doc: recommend `fh.createWriteStream` for fsPromises methods ([#42653](https://github.com/nodejs/node/pull/42653))
- doc: fix outgoingMessage.removeHeader() signature ([#42652](https://github.com/nodejs/node/pull/42652))
- node-api: split finalizers into two different types ([#42651](https://github.com/nodejs/node/pull/42651))
- test: improve internal/url.js coverage ([#42650](https://github.com/nodejs/node/pull/42650))
- doc: mark tlsSocket.authorized as boolean property ([#42647](https://github.com/nodejs/node/pull/42647))
- test: only skip slow tests on Raspberry Pi devices ([#42645](https://github.com/nodejs/node/pull/42645))
- large page attributing an id on Linux. ([#42644](https://github.com/nodejs/node/pull/42644))
- [v14.x] deps: backport v8 367b0c1e ([#42637](https://github.com/nodejs/node/pull/42637))
- src: fix near heap limit callback ([#42636](https://github.com/nodejs/node/pull/42636))
- doc: add NodeEdKeyGenParams to CryptoKey.algorithm ([#42629](https://github.com/nodejs/node/pull/42629))

#### Open Discussions

- How to download only node executable (not in a .tar.gz) ([#42593](https://github.com/nodejs/node/discussions/42593))
- When CVE-2018-25032 will be fixed in nodejs 14.X ([#42569](https://github.com/nodejs/node/discussions/42569))
- napi_add_env_cleanup_hook when process exits forcefully ([#42609](https://github.com/nodejs/node/discussions/42609))
- Command-line parameter to force "module" instead of "commonjs" type? ([#37857](https://github.com/nodejs/node/discussions/37857))
- Breaking changes from V10 -> V16 ? ([#42622](https://github.com/nodejs/node/discussions/42622))
- TLS CERT serial number as DEC ([#42615](https://github.com/nodejs/node/discussions/42615))

#### Merged Pull Requests

- doc: add missing punctuation in Web Streams doc ([#42672](https://github.com/nodejs/node/pull/42672))
- doc: fix typo in fs.read signature ([#42649](https://github.com/nodejs/node/pull/42649))
- http: document that ClientRequest inherits from OutgoingMessage ([#42642](https://github.com/nodejs/node/pull/42642))
- doc: link to dynamic import function ([#42634](https://github.com/nodejs/node/pull/42634))
- doc: add missing word in rootCertificates section ([#42633](https://github.com/nodejs/node/pull/42633))
- doc: add missing article in session ticket section ([#42632](https://github.com/nodejs/node/pull/42632))
- test: simplify test-http-write-callbacks.js ([#42628](https://github.com/nodejs/node/pull/42628))

#### Closed Issues

- Please provide GitHub Desktop Client as alternative to git ([#42654](https://github.com/nodejs/node/issues/42654))
- TLS corrupting buffer? ([#42635](https://github.com/nodejs/node/issues/42635))
- child_process stdin is not emitting 'drain' so that piping can resume ([#42630](https://github.com/nodejs/node/issues/42630))

#### Closed Pull Requests

- http: Replaced request.headers with request.getHeaders() ([#42641](https://github.com/nodejs/node/pull/42641))
- http - Replaced request.headers with request.getHeaders() ([#42640](https://github.com/nodejs/node/pull/42640))
- http - Updated Doc replaced request.headers with request.getHeaders() ([#42639](https://github.com/nodejs/node/pull/42639))
- [v17.x backport] fs: fix write methods param validation and docs ([#42631](https://github.com/nodejs/node/pull/42631))

### help

#### Open Issues

- Unable to listen on port 80 ([#3821](https://github.com/nodejs/help/issues/3821))
- Why can't I get context data in Typeorm's logQuerySlow when logQuery does ([#3820](https://github.com/nodejs/help/issues/3820))
- windows 11 unknown spawn error error code -4094 ([#3819](https://github.com/nodejs/help/issues/3819))
- You'll need to upgrade to a newer Node.js version in order to use this version of npm. But Node version is greater than v10 ([#3818](https://github.com/nodejs/help/issues/3818))
- versions of node as shown in node.js command prompt and Cmder command prompt is different? ([#3817](https://github.com/nodejs/help/issues/3817))

### build

#### Open Issues

- TODO: add logrotate renice to www server ansible script ([#2920](https://github.com/nodejs/build/issues/2920))
- Access for @KevinEady to debian 8 test VM ([#2919](https://github.com/nodejs/build/issues/2919))
- Ability to run build-release-windows-arm64 job for people working on arm support ([#2918](https://github.com/nodejs/build/issues/2918))

### Release

#### Open Issues

- Release plan - v18.x Current ([#737](https://github.com/nodejs/Release/issues/737))

#### Merged Pull Requests

- doc: fix the broken link ref to the `releases.md` file. ([#736](https://github.com/nodejs/Release/pull/736))

### reliability

#### Open Issues

- CI Reliability 2022-04-09 ([#246](https://github.com/nodejs/reliability/issues/246))
- CI Reliability 2022-04-08 ([#245](https://github.com/nodejs/reliability/issues/245))
- CI Reliability 2022-04-07 ([#244](https://github.com/nodejs/reliability/issues/244))

### unofficial-builds

#### Open Issues

- 17.9.0 build has stalled ([#56](https://github.com/nodejs/unofficial-builds/issues/56))
- Increase disk space on unofficial-builds.nodejs.org ([#55](https://github.com/nodejs/unofficial-builds/issues/55))

### tooling

#### Open Issues

- Collab Summit Session - Austin June 2022 ([#140](https://github.com/nodejs/tooling/issues/140))

### package-maintenance

#### Open Issues

- Session at collaborator summit ([#522](https://github.com/nodejs/package-maintenance/issues/522))

### loaders

#### Open Issues

- Node.js  Loaders Team Meeting 2022-04-12 ([#74](https://github.com/nodejs/loaders/issues/74))

### i18n

#### Open Issues

- i18n WG Meeting April 8th ([#645](https://github.com/nodejs/i18n/issues/645))

#### Open Pull Requests

- build(deps-dev): bump semver from 7.3.5 to 7.3.6 ([#644](https://github.com/nodejs/i18n/pull/644))

### TSC

#### Open Issues

- request: update OpenSSL-Strategy.md w/ strategy on Node 17/18 ([#1207](https://github.com/nodejs/TSC/issues/1207))

#### Open Pull Requests

- Vote on prefix-only core modules ([#1206](https://github.com/nodejs/TSC/pull/1206))

#### Merged Pull Requests

- doc: add minutes for meeting 6 April 2022 ([#1205](https://github.com/nodejs/TSC/pull/1205))

### admin

#### Open Issues

- Add  @nsait-linaro and @pbo-linaro for platform-windows-arm  ([#676](https://github.com/nodejs/admin/issues/676))

#### Closed Pull Requests

- [spam] ([#678](https://github.com/nodejs/admin/pull/678))
- [spam] ([#677](https://github.com/nodejs/admin/pull/677))

### node-core-utils

#### Merged Pull Requests

- fix: update permitted GitHub token characters ([#618](https://github.com/nodejs/node-core-utils/pull/618))

#### Closed Issues

- git-node does not accept current github token format ([#617](https://github.com/nodejs/node-core-utils/issues/617))

### node-gyp

#### Open Issues

- is it possible to statically link libc/libstdc++ with a node-addon? ([#2641](https://github.com/nodejs/node-gyp/issues/2641))

### nodejs-ko

#### Merged Pull Requests

- chore: update hexo-renderer-markdown-it ([#1205](https://github.com/nodejs/nodejs-ko/pull/1205))
- chore: update package-lock.json ([#1204](https://github.com/nodejs/nodejs-ko/pull/1204))
- Bump moment from 2.29.1 to 2.29.2 ([#1203](https://github.com/nodejs/nodejs-ko/pull/1203))

### github-bot

#### Merged Pull Requests

- chore: update standard 12.0.1 to 16.0.4 ([#319](https://github.com/nodejs/github-bot/pull/319))
- chore: update request and tap dependencies ([#318](https://github.com/nodejs/github-bot/pull/318))
- build(deps): bump moment from 2.22.2 to 2.29.2 ([#317](https://github.com/nodejs/github-bot/pull/317))

### nodejs.dev

#### Open Pull Requests

- update docs: changes body-parser to express.json() middleware ([#2377](https://github.com/nodejs/nodejs.dev/pull/2377))

#### Merged Pull Requests

- build(deps): bump moment from 2.29.1 to 2.29.2 ([#2378](https://github.com/nodejs/nodejs.dev/pull/2378))
- Change syntax highlighting from JavaScript to TypeScript ([#2375](https://github.com/nodejs/nodejs.dev/pull/2375))

#### Closed Pull Requests

- style: remove box shadow from side nav titles ([#2376](https://github.com/nodejs/nodejs.dev/pull/2376))

### citgm

#### Merged Pull Requests

- lookup: only run tests for cheerio ([#900](https://github.com/nodejs/citgm/pull/900))
- lookup: temporarily use head for jest ([#899](https://github.com/nodejs/citgm/pull/899))
- lookup: add tough-cookie ([#898](https://github.com/nodejs/citgm/pull/898))

### nodejs.org

#### Merged Pull Requests

- build(deps): bump moment from 2.29.1 to 2.29.2 ([#4535](https://github.com/nodejs/nodejs.org/pull/4535))
- Blog: v17.9.0 release post ([#4533](https://github.com/nodejs/nodejs.org/pull/4533))
- docs: update es/releases.md ([#4531](https://github.com/nodejs/nodejs.org/pull/4531))

#### Closed Pull Requests

- 0xF17dCbD465E406fb03aB2E1817B0f4799B848E87 ([#4534](https://github.com/nodejs/nodejs.org/pull/4534))
- Update dependencies ([#4532](https://github.com/nodejs/nodejs.org/pull/4532))
- Create index.md ([#4530](https://github.com/nodejs/nodejs.org/pull/4530))

### next-10

#### Open Pull Requests

- doc: add minutes for mini-summit april 7 ([#127](https://github.com/nodejs/next-10/pull/127))

### docker-node

#### Merged Pull Requests

- fix: get correct commit message and PR title for auto PRs ([#1691](https://github.com/nodejs/docker-node/pull/1691))
- fix: only update yarn if there are other changes to the dockerfile ([#1690](https://github.com/nodejs/docker-node/pull/1690))

### remark-preset-lint-node

#### Merged Pull Requests

- build(deps): bump semver from 7.3.5 to 7.3.6 ([#355](https://github.com/nodejs/remark-preset-lint-node/pull/355))
