# Retrospective for `nodejs` from 2022-04-11 to 2022-04-18

Reporting on 33 Issues from 24 authors, 67 Pull Requests from 29 authors, and 6 Discussions from 6 authors.


### undici

#### Open Issues

- response.bodyUsed is undefined when body is null ([#1345](https://github.com/nodejs/undici/issues/1345))
- [diagnostics_channel] support body received in `undici:request:trailers` ([#1342](https://github.com/nodejs/undici/issues/1342))

#### Open Pull Requests

- fix(fetch): do not set bodyUsed to undefined ([#1346](https://github.com/nodejs/undici/pull/1346))
- feat(diagnostics_channel): add `bodyReceived` property to trailers ([#1344](https://github.com/nodejs/undici/pull/1344))

#### Open Discussions

- How to close the connection on some condition ([#1333](https://github.com/nodejs/undici/discussions/1333))

#### Merged Pull Requests

- fetch: remove unnecessary new URL calls ([#1343](https://github.com/nodejs/undici/pull/1343))
- doc: fix documented mock request example ([#1341](https://github.com/nodejs/undici/pull/1341))
- fix: jest bug when using MockScope.delay ([#1340](https://github.com/nodejs/undici/pull/1340))

#### Closed Issues

- Fetch returns body on null-body statuses ([#1339](https://github.com/nodejs/undici/issues/1339))

### node

#### Open Issues

- Debugger's `list` command throws TypeError: Cannot read properties of null (reading 'list') ([#42775](https://github.com/nodejs/node/issues/42775))
- TypeError when `console.log` a static property `name` in class ([#42773](https://github.com/nodejs/node/issues/42773))
- Terminal colors built-in to Node ([#42770](https://github.com/nodejs/node/issues/42770))
- test binarytrees working with only one thread ([#42774](https://github.com/nodejs/node/issues/42774))
- performance.timerify(fn) behave inconsistently for sync/async functions ([#42743](https://github.com/nodejs/node/issues/42743))
- performance.timerify(fn, options) always return the same timerifed function ([#42742](https://github.com/nodejs/node/issues/42742))
- Investigate flaky test-http-server-request-timeout-keepalive ([#42741](https://github.com/nodejs/node/issues/42741))

#### Open Pull Requests

- lib,src,v8: testing serializer changes ([#42777](https://github.com/nodejs/node/pull/42777))
- debugger: fix TypeError of list command in inspector repl ([#42776](https://github.com/nodejs/node/pull/42776))
- fs: harden `fs.read(object)` and `filehandle.read(object)` typecheck ([#42772](https://github.com/nodejs/node/pull/42772))
- test: improve lib/internal/source_map/source_map.js coverage ([#42771](https://github.com/nodejs/node/pull/42771))
- meta: move one or more collaborators to emeritus ([#42769](https://github.com/nodejs/node/pull/42769))
- fs: add read(buffer[, options]) versions ([#42768](https://github.com/nodejs/node/pull/42768))
- doc: add missing `rename` event in fs.FSWatcher ([#42767](https://github.com/nodejs/node/pull/42767))
- src,crypto: remove uses of `AllocatedBuffer` from `crypto_ec.cc` ([#42766](https://github.com/nodejs/node/pull/42766))
- build: improve the `format-cpp` error message ([#42765](https://github.com/nodejs/node/pull/42765))
- build: fix format-cpp ([#42764](https://github.com/nodejs/node/pull/42764))
- doc: improve building doc with windows debug build ([#42763](https://github.com/nodejs/node/pull/42763))
- build: clarify missing clang-format tool ([#42762](https://github.com/nodejs/node/pull/42762))
- test: make port arbitrary in net-perf_hooks ([#42761](https://github.com/nodejs/node/pull/42761))
- src: define fs.constants.S_IWUSR & S_IRUSR for Win ([#42757](https://github.com/nodejs/node/pull/42757))
- worker: add `hasRef()` to the handle object ([#42756](https://github.com/nodejs/node/pull/42756))
- test: rename handlewrap.hasref tests ([#42754](https://github.com/nodejs/node/pull/42754))
- doc: clarify core modules that can be loaded without a prefix ([#42753](https://github.com/nodejs/node/pull/42753))
- doc: add `node:` prefix for all core modules ([#42752](https://github.com/nodejs/node/pull/42752))
- test: validate websteam encoder/decoder inpector ([#42747](https://github.com/nodejs/node/pull/42747))
- test: improve lib/internal/test_runner/test.js coverage ([#42745](https://github.com/nodejs/node/pull/42745))
- deps: update V8 to 10.2 ([#42740](https://github.com/nodejs/node/pull/42740))
- docs,test: add tests and docs for duplex.fromWeb and duplex.toWeb ([#42738](https://github.com/nodejs/node/pull/42738))
- [v14.x] doc: specify flag needed for JSON modules ([#42736](https://github.com/nodejs/node/pull/42736))

#### Open Discussions

- http.request crash nodejs 32 bit ([#42705](https://github.com/nodejs/node/discussions/42705))
- TLS CERT serial number as DEC ([#42615](https://github.com/nodejs/node/discussions/42615))
- [off-topic post, locked] ([#42732](https://github.com/nodejs/node/discussions/42732))
- When will the new Nodejs 16.x LTS  version release? ([#42715](https://github.com/nodejs/node/discussions/42715))
- NPM supply chain attacks ([#42698](https://github.com/nodejs/node/discussions/42698))

#### Merged Pull Requests

- meta: update AUTHORS ([#42760](https://github.com/nodejs/node/pull/42760))
- tools: update lint-md-dependencies to @rollup/plugin-commonjs@21.1.0 @rollup/plugin-node-resolve@13.2.1 rollup@2.70.2 ([#42759](https://github.com/nodejs/node/pull/42759))
- tools: update doc to highlight.js@11.5.1 ([#42758](https://github.com/nodejs/node/pull/42758))
- doc: close tag in n-api.md ([#42751](https://github.com/nodejs/node/pull/42751))
- meta: move mmarchini to emeritus ([#42750](https://github.com/nodejs/node/pull/42750))
- async_hooks: avoid decrementing iterator after erase ([#42749](https://github.com/nodejs/node/pull/42749))
- benchmark: fix misc/startup failure ([#42746](https://github.com/nodejs/node/pull/42746))
- doc: improve fragment (`:target`) anchors behavior on HTML version ([#42739](https://github.com/nodejs/node/pull/42739))
- doc: fix `added:` info for `outgoingMessage.writable*` ([#42737](https://github.com/nodejs/node/pull/42737))
- doc: revise data imports and node: imports sections ([#42734](https://github.com/nodejs/node/pull/42734))
- doc: copyedit http.OutgoingMessage documentation ([#42733](https://github.com/nodejs/node/pull/42733))

#### Closed Pull Requests

- src: define S_IWUSR & S_IRUSR for Windows ([#42748](https://github.com/nodejs/node/pull/42748))
- deps: upgrade npm to 8.7.0 ([#42744](https://github.com/nodejs/node/pull/42744))
- [v16.x] doc: specify flag needed for JSON modules ([#42735](https://github.com/nodejs/node/pull/42735))
- child_process: add hasRef to ChildProcess ([#42731](https://github.com/nodejs/node/pull/42731))

### nodejs.dev

#### Open Issues

- Node.js  Website Redesign Strategic Initiative Meeting 2022-04-20 ([#2385](https://github.com/nodejs/nodejs.dev/issues/2385))

#### Open Pull Requests

- Update index.md ([#2384](https://github.com/nodejs/nodejs.dev/pull/2384))

#### Merged Pull Requests

- Update index.md ([#2383](https://github.com/nodejs/nodejs.dev/pull/2383))
- Update index.md ([#2382](https://github.com/nodejs/nodejs.dev/pull/2382))

### diagnostics

#### Open Issues

- Node.js  Diagnostics WorkGroup Meeting 2022-04-19 ([#556](https://github.com/nodejs/diagnostics/issues/556))

#### Open Pull Requests

- meta: move mmarchini to emeritus ([#555](https://github.com/nodejs/diagnostics/pull/555))

### TSC

#### Open Issues

- Node.js Technical Steering Committee (TSC) Meeting 2022-04-20 ([#1212](https://github.com/nodejs/TSC/issues/1212))

### http-parser

#### Open Issues

- Incremental builds with no changes still trigger refactoring ([#535](https://github.com/nodejs/http-parser/issues/535))

### reliability

#### Open Issues

- CI Reliability 2022-04-18 ([#255](https://github.com/nodejs/reliability/issues/255))
- CI Reliability 2022-04-17 ([#254](https://github.com/nodejs/reliability/issues/254))
- CI Reliability 2022-04-16 ([#253](https://github.com/nodejs/reliability/issues/253))
- CI Reliability 2022-04-15 ([#252](https://github.com/nodejs/reliability/issues/252))

### help

#### Open Issues

- Refused to load the script * because it violates the following Content Security Policy directive ([#3829](https://github.com/nodejs/help/issues/3829))
- 'edgesOut' ([#3828](https://github.com/nodejs/help/issues/3828))
- what does ReadableSate.sync mean in lib/internal/streams/readable.js ([#3826](https://github.com/nodejs/help/issues/3826))

### snap

#### Open Issues

- Version detection fails ([#31](https://github.com/nodejs/snap/issues/31))

### node-addon-examples

#### Open Issues

- returning synchronous array in c++ addon ([#194](https://github.com/nodejs/node-addon-examples/issues/194))

### build-toolchain-next

#### Open Issues

- Initiative needs a champion ([#13](https://github.com/nodejs/build-toolchain-next/issues/13))

### node-addon-api

#### Open Issues

- Boilerplate-less way to write node-addon-api code ([#1163](https://github.com/nodejs/node-addon-api/issues/1163))

#### Open Pull Requests

- Add test coverage for async contexts ([#1164](https://github.com/nodejs/node-addon-api/pull/1164))

### build

#### Open Issues

- Access to @ShogunPanda to freebsd12-x64 test VM ([#2929](https://github.com/nodejs/build/issues/2929))

#### Open Pull Requests

- meta: move mmarchini to emeritus ([#2930](https://github.com/nodejs/build/pull/2930))
- doc: update Build WG Slack channel ([#2928](https://github.com/nodejs/build/pull/2928))
- jenkins: run win32 CI on Node.js 19 ([#2927](https://github.com/nodejs/build/pull/2927))

### llhttp

#### Open Issues

- Support parsing chunk-extension for Transfer-Encoding: chunked ([#153](https://github.com/nodejs/llhttp/issues/153))

### i18n

#### Open Issues

- i18n WG Meeting April 15th ([#647](https://github.com/nodejs/i18n/issues/647))

#### Open Pull Requests

- build(deps-dev): bump fs-extra from 10.0.1 to 10.1.0 ([#648](https://github.com/nodejs/i18n/pull/648))

### docker-node

#### Closed Issues

- ALPINE-CVE-2022-28391 node:16.14-alpine3.15 ([#1695](https://github.com/nodejs/docker-node/issues/1695))
- Permission denied while yarn install with VirtioFS ([#1694](https://github.com/nodejs/docker-node/issues/1694))

### branch-diff

#### Open Issues

- Adding the release team as maintainers ([#51](https://github.com/nodejs/branch-diff/issues/51))

### changelog-maker

#### Open Issues

- Adding the release team as maintainers ([#128](https://github.com/nodejs/changelog-maker/issues/128))

### node-gyp

#### Open Issues

- Some tests fail because certificate expired ([#2645](https://github.com/nodejs/node-gyp/issues/2645))

### nodejs.org

#### Open Pull Requests

- build(deps-dev): bump stylelint from 14.6.1 to 14.7.1 ([#4547](https://github.com/nodejs/nodejs.org/pull/4547))
- build(deps): bump jquery.fancytable from 1.0.28 to 1.0.30 ([#4546](https://github.com/nodejs/nodejs.org/pull/4546))
- fix: add Node.js 16.x and 17.x to generated version link list ([#4545](https://github.com/nodejs/nodejs.org/pull/4545))

### corepack

#### Open Pull Requests

- chore: update dependencies, remove unused ones ([#100](https://github.com/nodejs/corepack/pull/100))
- Fixes `corepack prepare` when no additional arguments are passed ([#99](https://github.com/nodejs/corepack/pull/99))

### make-node-meeting

#### Merged Pull Requests

- chore: update node-meeting-agenda from 1.x to 2.x ([#45](https://github.com/nodejs/make-node-meeting/pull/45))
- add shellcheck linting, do not publish example files to npm, update dependencies, add package-lock.json ([#44](https://github.com/nodejs/make-node-meeting/pull/44))

### node-meeting-agenda

#### Merged Pull Requests

- chore: bump ghauth from 3.2.0 to 5.0.1 ([#5](https://github.com/nodejs/node-meeting-agenda/pull/5))
- add package-lock.json, bump ghrepos, add linting ([#4](https://github.com/nodejs/node-meeting-agenda/pull/4))

### create-node-meeting-artifacts

#### Merged Pull Requests

- meta: remove mmarchini from TSC meeting invite ([#113](https://github.com/nodejs/create-node-meeting-artifacts/pull/113))

### email

#### Open Pull Requests

- meta: remove mmarchini from mailing lists ([#187](https://github.com/nodejs/email/pull/187))

### unofficial-builds

#### Open Pull Requests

- meta: move mmarchini to emeritus ([#57](https://github.com/nodejs/unofficial-builds/pull/57))

### admin

#### Merged Pull Requests

- meta: move mmarchini to emeritus ([#680](https://github.com/nodejs/admin/pull/680))

### next-10

#### Open Pull Requests

- meta: move mmarchini to emeritus ([#129](https://github.com/nodejs/next-10/pull/129))

### readable-stream

#### Open Pull Requests

- Node 18 ([#471](https://github.com/nodejs/readable-stream/pull/471))
