# Retrospective for `nodejs`

Reporting on 39 Issues from 20 authors, 61 Pull Requests from 39 authors, and 5 Discussions from 5 authors.


### build

#### Open Issues

- Add rust toolchain to CI machines ([#4245](https://github.com/nodejs/build/issues/4245))
- LinuxONE maintenance 16 February 2026 ([#4244](https://github.com/nodejs/build/issues/4244))
- Remove Statistics Gatherer Plug in ([#4243](https://github.com/nodejs/build/issues/4243))

#### Merged Pull Requests

- ansible: add RHEL 8 Power 9 hosts ([#4242](https://github.com/nodejs/build/pull/4242))
- ansible: remove 2 Windows 11 ARM64 machines ([#4241](https://github.com/nodejs/build/pull/4241))

### node

#### Open Issues

- `parallel/test-temporal-with-zoneinfo` fails on Linux s390x ([#61808](https://github.com/nodejs/node/issues/61808))
- fs.watch performance degradation with large directories ([#61802](https://github.com/nodejs/node/issues/61802))
- Request: Backport loader fix to v22.x ([#61801](https://github.com/nodejs/node/issues/61801))
- Cross-build x64 host -> arm target fails in V8 host arch guard (v8config.h) ([#61794](https://github.com/nodejs/node/issues/61794))
- Allow type stripping in pnpm deploy monorepos ([#61793](https://github.com/nodejs/node/issues/61793))
- subpath imports starting with #/ in LTS ([#61781](https://github.com/nodejs/node/issues/61781))

#### Open Pull Requests

- build: use path-ignore in GHA coverage-windows.yml ([#61811](https://github.com/nodejs/node/pull/61811))
- build: add temporal test on GHA windows ([#61810](https://github.com/nodejs/node/pull/61810))
- stream: add fast paths for webstreams read and pipeTo ([#61807](https://github.com/nodejs/node/pull/61807))
- build: enable Temporal by default ([#61806](https://github.com/nodejs/node/pull/61806))
- doc: add Temporal section to Table of Contents ([#61805](https://github.com/nodejs/node/pull/61805))
- test: fix flaky test-http2-close-while-writing ([#61804](https://github.com/nodejs/node/pull/61804))
- module: remove --experimental-transform-types ([#61803](https://github.com/nodejs/node/pull/61803))
- stream: fix pipeTo to defer writes per WHATWG spec ([#61800](https://github.com/nodejs/node/pull/61800))
- doc: fix grammar in README ([#61797](https://github.com/nodejs/node/pull/61797))
- test: add retry logic for eventloopdelay histogram sampling ([#61796](https://github.com/nodejs/node/pull/61796))
- lib: optimize styleText when validateStream is false ([#61792](https://github.com/nodejs/node/pull/61792))
- build: `generate_config_gypi.py` generates valid JSON ([#61791](https://github.com/nodejs/node/pull/61791))
- build: skip sscache action on non-main branches ([#61790](https://github.com/nodejs/node/pull/61790))
- [v22.x] src: use std::sort in node_metadata for libc++13 compatibility ([#61789](https://github.com/nodejs/node/pull/61789))
- crypto: Fix potential null pointer dereference when BIO_meth_new() fails ([#61788](https://github.com/nodejs/node/pull/61788))
- src: remove unnecessary `c_str()` conversions in diagnostic messages ([#61786](https://github.com/nodejs/node/pull/61786))
- doc: remove obsolete Boxstarter automated install ([#61785](https://github.com/nodejs/node/pull/61785))
- src: enable X509sToArrayOfStrings to skip errors ([#61784](https://github.com/nodejs/node/pull/61784))
- docs: add missing documentation for fs.StatFs class (#50749) ([#61783](https://github.com/nodejs/node/pull/61783))
- url: doc deprecate url.resolve ([#61780](https://github.com/nodejs/node/pull/61780))
- watch: get flags from execArgv ([#61779](https://github.com/nodejs/node/pull/61779))

#### Merged Pull Requests

- test_runner: fix suite rerun ([#61775](https://github.com/nodejs/node/pull/61775))

#### Closed Issues

- Working resolver for native TS support ([#61799](https://github.com/nodejs/node/issues/61799))
- Rearranged1 ([#61782](https://github.com/nodejs/node/issues/61782))
- Brain ai ([#61777](https://github.com/nodejs/node/issues/61777))

#### Closed Pull Requests

- Create devcontainer.json ([#61809](https://github.com/nodejs/node/pull/61809))
- deps: V8: cherry-pick 64b36b441179 ([#61798](https://github.com/nodejs/node/pull/61798))
- src: use std::sort in node_metadata for libc++13 compatibility ([#61787](https://github.com/nodejs/node/pull/61787))
- util: move TextEncoder class to C++ ([#61778](https://github.com/nodejs/node/pull/61778))
- url: only emit DEP0169 on url.parse ([#61776](https://github.com/nodejs/node/pull/61776))

### release-cloudflare-worker

#### Open Issues

- Error: Worker exceeded memory limit. ([#857](https://github.com/nodejs/release-cloudflare-worker/issues/857))
- Error: Worker exceeded memory limit. ([#856](https://github.com/nodejs/release-cloudflare-worker/issues/856))

#### Closed Issues

- 502 Response ([#855](https://github.com/nodejs/release-cloudflare-worker/issues/855))
- 502 Response ([#854](https://github.com/nodejs/release-cloudflare-worker/issues/854))
- 502 Response ([#853](https://github.com/nodejs/release-cloudflare-worker/issues/853))
- 502 Response ([#852](https://github.com/nodejs/release-cloudflare-worker/issues/852))
- 502 Response ([#850](https://github.com/nodejs/release-cloudflare-worker/issues/850))
- 502 Response ([#851](https://github.com/nodejs/release-cloudflare-worker/issues/851))

### unofficial-builds

#### Open Issues

- `ccache` effectively unused in unofficial-builds ([#213](https://github.com/nodejs/unofficial-builds/issues/213))
- Should we create per-platform labels in this repository? ([#212](https://github.com/nodejs/unofficial-builds/issues/212))

#### Open Pull Requests

- fix: make ccache work properly by using CCACHE_BASEDIR ([#214](https://github.com/nodejs/unofficial-builds/pull/214))
- chore: update readme to reflect v24 on riscv64 now working ([#211](https://github.com/nodejs/unofficial-builds/pull/211))

#### Merged Pull Requests

- chore: re-add linux/riscv64 v24 ([#210](https://github.com/nodejs/unofficial-builds/pull/210))
- chore: switch build order - popular first, dead last ([#208](https://github.com/nodejs/unofficial-builds/pull/208))
- chore: fix x64-usdt should-build perms to be executable ([#207](https://github.com/nodejs/unofficial-builds/pull/207))

#### Closed Issues

- 24.13.1 missing in unofficial builds link https://unofficial-builds.nodejs.org/download/release/v24.13.1/ ([#209](https://github.com/nodejs/unofficial-builds/issues/209))
- 24.13.1 alpine is missing https://hub.docker.com/_/node ([#206](https://github.com/nodejs/unofficial-builds/issues/206))
- riscv64: node 24 build is missing ([#205](https://github.com/nodejs/unofficial-builds/issues/205))
- Node build 25.6.1 is missing ([#204](https://github.com/nodejs/unofficial-builds/issues/204))

### jenkins-alerts

#### Closed Issues

- test-rackspace-win2022_vs2022-x64-4 has low disk space ([#5111](https://github.com/nodejs/jenkins-alerts/issues/5111))
- test-rackspace-win2022_vs2022-x64-4 has low disk space ([#5110](https://github.com/nodejs/jenkins-alerts/issues/5110))
- test-rackspace-win2022_vs2022-x64-6 has low disk space ([#5109](https://github.com/nodejs/jenkins-alerts/issues/5109))
- test-osuosl-aix72-ppc64_be-3 is DOWN ([#5108](https://github.com/nodejs/jenkins-alerts/issues/5108))
- test-rackspace-win2022_vs2022-x64-6 has low disk space ([#5107](https://github.com/nodejs/jenkins-alerts/issues/5107))

### security-wg

#### Open Issues

- Node.js Security team Meeting 2026-02-19 ([#1553](https://github.com/nodejs/security-wg/issues/1553))
- Node.js PURL is missing namespace ([#1552](https://github.com/nodejs/security-wg/issues/1552))

#### Open Pull Requests

- fix: correct the node.js purl ([#1551](https://github.com/nodejs/security-wg/pull/1551))

### reliability

#### Open Issues

- CI Reliability 2026-02-13 ([#1462](https://github.com/nodejs/reliability/issues/1462))
- CI Reliability 2026-02-12 ([#1461](https://github.com/nodejs/reliability/issues/1461))

### nodejs-dependency-vuln-assessments

#### Open Issues

- Vuln CVE-2026-24842 CVE-2026-25547 ([#261](https://github.com/nodejs/nodejs-dependency-vuln-assessments/issues/261))

### nodejs.org

#### Open Issues

- Improve the Supporters section ([#8621](https://github.com/nodejs/nodejs.org/issues/8621))

#### Open Pull Requests

- [automated]: crowdin sync ([#8624](https://github.com/nodejs/nodejs.org/pull/8624))
- docs: update explanation of setImmediate vs setTimeout ([#8623](https://github.com/nodejs/nodejs.org/pull/8623))
- feat(i18n): enable ta translation ([#8622](https://github.com/nodejs/nodejs.org/pull/8622))

#### Merged Pull Requests

- meta: bump rehype-shiki ([#8625](https://github.com/nodejs/nodejs.org/pull/8625))
- chore: adjust ui-components publishing ([#8620](https://github.com/nodejs/nodejs.org/pull/8620))

#### Closed Pull Requests

- chore(ui): use compiled exports by default ([#8626](https://github.com/nodejs/nodejs.org/pull/8626))

### next-10

#### Open Issues

- Node.js Next 10 Years team Meeting 2026-02-18 ([#374](https://github.com/nodejs/next-10/issues/374))

### TSC

#### Open Issues

- Node.js Technical Steering Committee (TSC) Meeting 2026-02-18 ([#1822](https://github.com/nodejs/TSC/issues/1822))

#### Open Pull Requests

- Add minutes for 11 feb meeting ([#1821](https://github.com/nodejs/TSC/pull/1821))

### merve

#### Merged Pull Requests

- Add line numbers support ([#10](https://github.com/nodejs/merve/pull/10))

### undici

#### Open Pull Requests

- feat!: enable h2 by default ([#4828](https://github.com/nodejs/undici/pull/4828))
- fix: isolate global dispatcher v2 and add Dispatcher1Wrapper bridge ([#4827](https://github.com/nodejs/undici/pull/4827))
- feat: Option to restrict the number of free/idle sockets ([#4825](https://github.com/nodejs/undici/pull/4825))
- fix: harden header iterable checks for prototype-pollution scenarios ([#4824](https://github.com/nodejs/undici/pull/4824))

#### Open Discussions

- Does the globalDispatcher symbol need to be updated? ([#4822](https://github.com/nodejs/undici/discussions/4822))
- How are undici developers using AI? ([#4805](https://github.com/nodejs/undici/discussions/4805))
- 1 second latency issues. (TCP retransmission?) ([#4811](https://github.com/nodejs/undici/discussions/4811))

#### Merged Pull Requests

- feat: Support async cache stores in revalidation ([#4826](https://github.com/nodejs/undici/pull/4826))

#### Closed Pull Requests

- feat!: enable h2 by default ([#4823](https://github.com/nodejs/undici/pull/4823))

### amaro

#### Merged Pull Requests

- docs: document module.register() bootstrap usage ([#382](https://github.com/nodejs/amaro/pull/382))

### docker-node

#### Merged Pull Requests

- chore(deps): bump docker/build-push-action from 6.19.1 to 6.19.2 ([#2380](https://github.com/nodejs/docker-node/pull/2380))
- feat: Node.js 24.13.1, 25.6.1 ([#2379](https://github.com/nodejs/docker-node/pull/2379))
- chore(deps): bump docker/build-push-action from 6.18.0 to 6.19.1 ([#2378](https://github.com/nodejs/docker-node/pull/2378))
- fix(stackbrew): read the fullversion for each image ([#2377](https://github.com/nodejs/docker-node/pull/2377))

### ncrypto

#### Merged Pull Requests

- crypto: add null check to BIOPointer::New() ([#35](https://github.com/nodejs/ncrypto/pull/35))

### devcontainer

#### Closed Pull Requests

- Update LICENSE ([#25](https://github.com/nodejs/devcontainer/pull/25))

### llparse

#### Open Pull Requests

- fix: detect Arm NEON with alternative predefined macro ([#84](https://github.com/nodejs/llparse/pull/84))

### llhttp

#### Open Pull Requests

- chore: Pin python version to fix aiohttp regression tests ([#788](https://github.com/nodejs/llhttp/pull/788))
- Add support for relaxed header value parsing ([#787](https://github.com/nodejs/llhttp/pull/787))

### create-node-meeting-artifacts

#### Open Pull Requests

- chore(deps): bump axios from 1.12.2 to 1.13.5 ([#220](https://github.com/nodejs/create-node-meeting-artifacts/pull/220))

### nbytes

#### Open Pull Requests

- chore(main): release 0.1.3 ([#13](https://github.com/nodejs/nbytes/pull/13))

### help

#### Open Discussions

- --experimental-addon-modules stability ([#5127](https://github.com/orgs/nodejs/discussions/5127))

### test-runner

#### Open Discussions

- [config file] Implicitly enable namespace for test runner ([#12](https://github.com/nodejs/test-runner/discussions/12))
