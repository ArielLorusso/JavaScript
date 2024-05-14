//*  NODE API  https://nodejs.org/api/
/*
{
  Assertion testing                 
  Asynchronous context tracking     
  Async hooks                       
  Buffer                            https://nodejs.org/api/buffer.html
  C++ addons                        
  C/C++ addons with Node-API        
  C++ embedder API                  
  Child processes                   
  Cluster                           
  Command-line options              
  Console                           https://nodejs.org/api/console.html
  Corepack
  Crypto
  Debugger
  Deprecated APIs
  Diagnostics Channel
  DNS                               https://nodejs.org/api/dns.html
  Domain
  Errors
  Events                            https://nodejs.org/api/events.html
  File system
  Globals                           https://nodejs.org/api/globals.html
  HTTP                              https://nodejs.org/api/http.html
  HTTP/2                            https://nodejs.org/api/http2.html
  HTTPS
  Inspector
  Internationalization
  Modules: CommonJS modules
  Modules: ECMAScript modules
  Modules: node:module API
  Modules: Packages
  Net                               https://nodejs.org/api/net.html
  OS                                https://nodejs.org/api/os.html
  Path
  Performance hooks
  Permissions
  Process                           https://nodejs.org/api/process.html
  Punycode
  Query strings
  Readline
  REPL                              https://nodejs.org/api/repl.html
  Report
  Single executable applications
  Stream
  String decoder
  Test runner
  Timers
  TLS/SSL
  Trace events
  TTY
  UDP/datagram
  URL
  Utilities
  V8
  VM
  WASI
  Web Crypto API
  Web Streams API
  Worker threads
  Zlib
}
*/

//!   NODE.js  3rd party  Modules
let element = console
//console.log(element)  // NODE : console
/*
{
  log:        [Function: log],
  warn:       [Function: warn],
  dir:        [Function: dir],
  time:       [Function: time],
  timeEnd:    [Function: timeEnd],
  timeLog:    [Function: timeLog],
  trace:      [Function: trace],
  assert:     [Function: assert],
  clear:      [Function: clear],
  count:      [Function: count],
  countReset: [Function: countReset],
  group:      [Function: group],
  groupEnd:   [Function: groupEnd],
  table:      [Function: table],
  debug:      [Function: debug],
  info:       [Function: info],
  dirxml:     [Function: dirxml],
  error:      [Function: error],
  groupCollapsed: [Function: groupCollapsed],
  Console:    [Function: Console],
  profile:    [Function: profile],
  profileEnd: [Function: profileEnd],
  timeStamp:  [Function: timeStamp],
  context:    [Function: context],
  createTask: [Function: createTask]
}
*/

element = global;
//console.log(element) //  NODE  GLOBAL
/*
{
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate:   [Function: setImmediate] {    [Symbol(nodejs.util.promisify.custom)]: [Getter] },
  clearInterval:  [Function: clearInterval],
  clearTimeout:   [Function: clearTimeout],
  setInterval:    [Function: setInterval],
  setTimeout:     [Function: setTimeout] {  [Symbol(nodejs.util.promisify.custom)]: [Getter] },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone:  [Getter/Setter],
  atob:             [Getter/Setter],
  btoa:             [Getter/Setter],
  performance:      [Getter/Setter],
  crypto:           [Getter]
  fetch: [AsyncFunction: fetch],
}
*/

element = process
//console.log(element)//  NODE  PROCESS  ( VERY BIG )
/*
process {
  version: 'v20.5.1',
  versions: {
    node: '20.5.1',
    acorn: '8.10.0',
    ada: '2.5.1',
    ares: '1.19.1',
    base64: '0.5.0',
    brotli: '1.0.9',
    cjs_module_lexer: '1.2.2',
    cldr: '43.1',
    icu: '73.2',
    llhttp: '8.1.1',
    modules: '115',
    napi: '9',
    nghttp2: '1.55.1',
    nghttp3: '0.7.0',
    ngtcp2: '0.8.1',
    openssl: '3.0.10+quic',
    simdutf: '3.2.14',
    tz: '2023c',
    undici: '5.22.1',
    unicode: '15.0',
    uv: '1.46.0',
    uvwasi: '0.0.18',
    v8: '11.3.244.8-node.10',
    zlib: '1.2.13.1-motley'
  },
  arch: 'x64',
  platform: 'linux',
  release: {
    name: 'node',
    sourceUrl: 'https://nodejs.org/download/release/v20.5.1/node-v20.5.1.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v20.5.1/node-v20.5.1-headers.tar.gz'
  },
  moduleLoadList: [
    'Internal Binding builtins',
    'Internal Binding errors',
    'Internal Binding util',
    'NativeModule internal/errors',
    'Internal Binding config',
    'Internal Binding timers',
    'Internal Binding async_wrap',
    'Internal Binding task_queue',
    'Internal Binding symbols',
    'NativeModule internal/async_hooks',
    'Internal Binding constants',
    'Internal Binding types',
    'Internal Binding options',
    'NativeModule internal/options',
    'NativeModule internal/util',
    'NativeModule internal/util/types',
    'NativeModule internal/validators',
    'NativeModule internal/linkedlist',
    'NativeModule internal/priority_queue',
    'NativeModule internal/assert',
    'Internal Binding icu',
    'NativeModule internal/util/inspect',
    'NativeModule internal/util/debuglog',
    'NativeModule internal/timers',
    'NativeModule events',
    'Internal Binding buffer',
    'Internal Binding string_decoder',
    'NativeModule internal/buffer',
    'NativeModule buffer',
    'Internal Binding messaging',
    'NativeModule internal/worker/js_transferable',
    'Internal Binding process_methods',
    'NativeModule internal/process/per_thread',
    'Internal Binding credentials',
    'NativeModule internal/process/promises',
    'NativeModule internal/fixed_queue',
    'NativeModule async_hooks',
    'NativeModule internal/process/task_queues',
    'NativeModule timers',
    'Internal Binding trace_events',
    'NativeModule internal/constants',
    'NativeModule path',
    'NativeModule internal/process/execution',
    'NativeModule internal/process/warning',
    'NativeModule internal/querystring',
    'NativeModule querystring',
    'Internal Binding url',
    'NativeModule internal/url',
    'NativeModule internal/source_map/source_map_cache',
    'NativeModule internal/console/constructor',
    'NativeModule internal/console/global',
    'NativeModule internal/util/inspector',
    'Internal Binding inspector',
    'NativeModule util',
    'NativeModule internal/webidl',
    'Internal Binding performance',
    'NativeModule internal/perf/utils',
    'NativeModule internal/event_target',
    'Internal Binding blob',
    'Internal Binding mksnapshot',
    'NativeModule internal/v8/startup_snapshot',
    'NativeModule internal/process/signal',
    'Internal Binding fs',
    'Internal Binding encoding_binding',
    'NativeModule internal/encoding',
    'NativeModule internal/webstreams/util',
    'NativeModule internal/webstreams/queuingstrategies',
    'NativeModule internal/blob',
    'Internal Binding permission',
    'NativeModule internal/process/permission',
    'NativeModule internal/fs/utils',
    'NativeModule internal/fs/read/utf8',
    'NativeModule fs',
    'NativeModule internal/idna',
    'NativeModule url',
    'Internal Binding contextify',
    'NativeModule internal/vm',
    'NativeModule internal/modules/helpers',
    'NativeModule internal/modules/package_json_reader',
    'Internal Binding module_wrap',
    'NativeModule internal/modules/cjs/loader',
    'NativeModule internal/vm/module',
    'NativeModule internal/modules/esm/utils',
    'NativeModule internal/inspector_async_hook',
    'Internal Binding wasm_web_api',
    'Internal Binding worker',
    'NativeModule internal/modules/run_main',
    'NativeModule internal/net',
    'NativeModule internal/dns/utils',
    'NativeModule internal/process/pre_execution',
    'NativeModule internal/abort_controller',
    'NativeModule internal/streams/utils',
    'NativeModule internal/streams/end-of-stream',
    'NativeModule internal/streams/destroy',
    'NativeModule internal/streams/legacy',
    'NativeModule internal/streams/add-abort-signal',
    'NativeModule internal/streams/buffer_list',
    'NativeModule internal/streams/state',
    'NativeModule string_decoder',
    'NativeModule internal/streams/from',
    ... 24 more items
],
binding:      [Function: binding],
_rawDebug: [Function: _rawDebug],
  _rawDebug: [Function: _rawDebug],
  _getActiveRequests:[Function: _getActiveRequests],
  _getActiveHandles:[Function: _getActiveHandles],
  _kill:            [Function: _kill],
  _fatalException: [Function (anonymous)],
  _tickCallback: [Function: runNextTicks],
  setSourceMapsEnabled: [Function: setSourceMapsEnabled],
  _debugProcess: [Function: _debugProcess],
  _debugEnd: [Function: _debugEnd],
  _startProfilerIdleNotifier: [Function (anonymous)],
  _stopProfilerIdleNotifier: [Function (anonymous)],
  _linkedBinding: [Function: _linkedBinding],
  _events:      [Object: null prototype] {
    newListener: [Function: startListeningIfSignal],
    removeListener: [Function: stopListeningIfSignal],
    warning: [Function: onWarning],
    SIGWINCH: [
      [Function: refreshStdoutOnSigWinch],
      [Function: refreshStderrOnSigWinch]
    ]
  },
  _eventsCount: 4,
  _maxListeners: undefined,
  domain: null,
  _exiting: [Getter/Setter],
  exitCode: [Getter/Setter],
  config: {
    target_defaults: {
      cflags: [],
      default_configuration: 'Release',
      defines: [Array],
      include_dirs: [],
      libraries: []
    },
    variables: {
      asan: 0,
      coverage: false,
      dcheck_always_on: 0,
      debug_nghttp2: false,
      debug_node: false,
      enable_lto: false,
      enable_pgo_generate: false,
      enable_pgo_use: false,
      error_on_warn: false,
      force_dynamic_crt: 0,
      gas_version: '2.35',
      host_arch: 'x64',
      icu_data_in: '../../deps/icu-tmp/icudt73l.dat',
      icu_endianness: 'l',
      icu_gyp_path: 'tools/icu/icu-generic.gyp',
      icu_path: 'deps/icu-small',
      icu_small: false,
      icu_ver_major: '73',
      is_debug: 0,
      libdir: 'lib',
      llvm_version: '0.0',
      napi_build_version: '9',
      node_builtin_shareable_builtins: [Array],
      node_byteorder: 'little',
      node_debug_lib: false,
      node_enable_d8: false,
      node_enable_v8_vtunejit: false,
      node_fipsinstall: false,
      node_install_corepack: true,
      node_install_npm: true,
      node_library_files: [Array],
      node_module_version: 115,
      node_no_browser_globals: false,
      node_prefix: '/',
      node_release_urlbase: 'https://nodejs.org/download/release/',
      node_section_ordering_info: '',
      node_shared: false,
      node_shared_brotli: false,
      node_shared_cares: false,
      node_shared_http_parser: false,
      node_shared_libuv: false,
      node_shared_nghttp2: false,
      node_shared_nghttp3: false,
      node_shared_ngtcp2: false,
      node_shared_openssl: false,
      node_shared_zlib: false,
      node_tag: '',
      node_target_type: 'executable',
      node_use_bundled_v8: true,
      node_use_node_code_cache: true,
      node_use_node_snapshot: true,
      node_use_openssl: true,
      node_use_v8_platform: true,
      node_with_ltcg: false,
      node_without_node_options: false,
      openssl_is_fips: false,
      openssl_quic: true,
      ossfuzz: false,
      shlib_suffix: 'so.115',
      single_executable_application: true,
      target_arch: 'x64',
      v8_enable_31bit_smis_on_64bit_arch: 0,
      v8_enable_gdbjit: 0,
      v8_enable_hugepage: 0,
      v8_enable_i18n_support: 1,
      v8_enable_inspector: 1,
      v8_enable_javascript_promise_hooks: 1,
      v8_enable_lite_mode: 0,
      v8_enable_object_print: 1,
      v8_enable_pointer_compression: 0,
      v8_enable_shared_ro_heap: 1,
      v8_enable_short_builtin_calls: 1,
      v8_enable_webassembly: 1,
      v8_no_strict_aliasing: 1,
      v8_optimized_debug: 1,
      v8_promise_internal_field_count: 1,

      v8_random_seed: 0,
      v8_trace_maps: 0,
      v8_use_siphash: 1,
      want_separate_host_toolset: 0
    }
  },
  kill:             [Function: kill],
  exit:             [Function: exit],
  hrtime:           [Function: hrtime] { bigint: [Function: hrtimeBigInt] },
  openStdin:        [Function (anonymous)],
  dlopen:           [Function: dlopen],
  uptime:           [Function: uptime],
  cpuUsage:         [Function: cpuUsage],
  memoryUsage:      [Function: memoryUsage] { rss: [Function: rss] },
  resourceUsage:    [Function: resourceUsage],
  assert:           [Function: deprecated],
  getuid:           [Function: getuid],
  geteuid:          [Function: geteuid],
  getgid:           [Function: getgid],
  getegid:          [Function: getegid],
  getgroups:        [Function: getgroups],
  getActiveResourcesInfo: [Function: getActiveResourcesInfo],
  reallyExit:       [Function: reallyExit],
  constrainedMemory:[Function: constrainedMemory],
  setUncaughtExceptionCaptureCallback: [Function: setUncaughtExceptionCaptureCallback],
  hasUncaughtExceptionCaptureCallback: [Function: hasUncaughtExceptionCaptureCallback],
  emitWarning: [Function: emitWarning],
  nextTick: [Function: nextTick],
  abort: [Function: abort],
  umask: [Function: wrappedUmask],
  chdir: [Function: wrappedChdir],
  cwd: [Function: wrappedCwd],
  initgroups: [Function: initgroups],
  setgroups: [Function: setgroups],
  setegid: [Function (anonymous)],
  seteuid: [Function (anonymous)],
  setgid: [Function (anonymous)],
  setuid: [Function (anonymous)],
  allowedNodeEnvironmentFlags: [Getter/Setter],
  features: {
    inspector: true,
    debug: false,
    uv: true,
    ipv6: true,
    tls_alpn: true,
    tls_sni: true,
    tls_ocsp: true,
    tls: true,
    cached_builtins: [Getter]
  },
  stdout: [Getter],
  stdin: [Getter],
  stderr: [Getter],
  env: {
    SHELL: '/bin/bash',
    SESSION_MANAGER: 'local/ariel-All-Series:@/tmp/.ICE-unix/1913,unix/ariel-All-Series:/tmp/.ICE-unix/1913',
    WINDOWID: '102760451',
    QT_ACCESSIBILITY: '1',
    COLORTERM: 'truecolor',
    XDG_CONFIG_DIRS: '/etc/xdg/xdg-xfce:/etc/xdg',
    XDG_SESSION_PATH: '/org/freedesktop/DisplayManager/Session0',
    XDG_MENU_PREFIX: 'xfce-',
    FNM_ARCH: 'x64',
    POSH_PID: '124641',
    CLUTTER_BACKEND: 'x11',
    MODULAR_HOME: '/home/ariel/.modular',
    LANGUAGE: 'en_US',
    MANDATORY_PATH: '/usr/share/gconf/xfce.mandatory.path',
    LC_ADDRESS: 'es_AR.UTF-8',
    LC_NAME: 'es_AR.UTF-8',
    SSH_AUTH_SOCK: '/tmp/ssh-XXXXXXo42abz/agent.2170',
    FNM_NODE_DIST_MIRROR: 'https://nodejs.org/dist',
    DESKTOP_SESSION: 'xfce',
    LC_MONETARY: 'es_AR.UTF-8',
    SSH_AGENT_PID: '2171',
    GTK_MODULES: 'gail:atk-bridge',
    XDG_SEAT: 'seat0',
    PWD: '/home/ariel/Desktop/JavaScript',
    LOGNAME: 'ariel',
    XDG_SESSION_DESKTOP: 'xfce',
    QT_QPA_PLATFORMTHEME: 'qt5ct',
    XDG_SESSION_TYPE: 'x11',
    XAUTHORITY: '/home/ariel/.Xauthority',
    XDG_GREETER_DATA_DIR: '/var/lib/lightdm-data/ariel',
    GDM_LANG: 'en_US',
    HOME: '/home/ariel',
    LC_PAPER: 'es_AR.UTF-8',
    LANG: 'en_US.UTF-8',
    FNM_COREPACK_ENABLED: 'false',
    LS_COLORS: 'rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:',
    XDG_CURRENT_DESKTOP: 'XFCE',
    POSH_SHELL_VERSION: '5.1.16(1)-release',
    VTE_VERSION: '6800',
    CONDA_PROMPT_MODIFIER: 'false',
    XDG_SEAT_PATH: '/org/freedesktop/DisplayManager/Seat0',
    LESSCLOSE: '/usr/bin/lesspipe %s %s',
    XDG_SESSION_CLASS: 'user',
    TERM: 'xterm-256color',
    LC_IDENTIFICATION: 'es_AR.UTF-8',
    DEFAULTS_PATH: '/usr/share/gconf/xfce.default.path',
    LESSOPEN: '| /usr/bin/lesspipe %s',
    USER: 'ariel',
    DISPLAY: ':0.0',
    SHLVL: '1',
    LC_TELEPHONE: 'es_AR.UTF-8',
    LC_MEASUREMENT: 'es_AR.UTF-8',
    FNM_VERSION_FILE_STRATEGY: 'local',
    XDG_VTNR: '7',
    XDG_SESSION_ID: 'c2',
    POSH_THEME: '/home/ariel/.poshthemes/velvet.omp.json',
    LD_LIBRARY_PATH: 'home/ariel/fmod/fmodexL-4.44.30:',
    XDG_RUNTIME_DIR: '/run/user/1000',
    FNM_RESOLVE_ENGINES: 'false',
    COMPIZ_CONFIG_PROFILE: 'mint',
    BUN_INSTALL: '/home/ariel/.bun',
    GTK3_MODULES: 'xapp-gtk3-module',
    XDG_DATA_DIRS: '/usr/share/xfce4:/home/ariel/.local/share/flatpak/exports/share:/var/lib/flatpak/exports/share:/usr/local/share:/usr/share:/var/lib/snapd/desktop:/usr/share',
    PATH: '/home/ariel/miniconda3/bin:/home/ariel/.bun/bin:/home/ariel/.modular/pkg/packages.modular.com_mojo/bin:/run/user/1000/fnm_multishells/124670_1715641603711/bin:/home/ariel/.local/share/fnm:/run/user/1000/fnm_multishells/124667_1715641603687/bin:/home/ariel/.local/share/fnm:/run/user/1000/fnm_multishells/124664_1715641603640/bin:/home/ariel/.local/share/fnm:/run/user/1000/fnm_multishells/124661_1715641603603/bin:/home/ariel/.local/share/fnm:/run/user/1000/fnm_multishells/124658_1715641603568/bin:/home/ariel/.local/share/fnm:/home/ariel/.cargo/bin:/home/ariel/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/usr/local/go/bin',
    GDMSESSION: 'xfce',
    DBUS_SESSION_BUS_ADDRESS: 'unix:path=/run/user/1000/bus',
    FNM_DIR: '/home/ariel/.local/share/fnm',
    POWERLINE_COMMAND: 'oh-my-posh',
    FNM_MULTISHELL_PATH: '/run/user/1000/fnm_multishells/124670_1715641603711',
    FNM_LOGLEVEL: 'info',
    LC_NUMERIC: 'es_AR.UTF-8',
    OLDPWD: '/home/ariel',
    _: '/run/user/1000/fnm_multishells/124670_1715641603711/bin/node'
  },
  title: 'node',
  argv: [
    '/home/ariel/.local/share/fnm/node-versions/v20.5.1/installation/bin/node',
    '/home/ariel/Desktop/JavaScript/Web_Node.js'
  ],
  execArgv: [],
  pid: 148590,
  ppid: 124641,
  execPath: '/home/ariel/.local/share/fnm/node-versions/v20.5.1/installation/bin/node',
  debugPort: 9229,
  argv0: 'node',
  _preload_modules: [],
  report: [Getter],
  mainModule: {
    id: '.',
    path: '/home/ariel/Desktop/JavaScript',
    exports: {},
    filename: '/home/ariel/Desktop/JavaScript/Web_Node.js',
    loaded: false,
    children: [],
    paths: [
      '/home/ariel/Desktop/JavaScript/node_modules',
      '/home/ariel/Desktop/node_modules',
      '/home/ariel/node_modules',
      '/home/node_modules',
      '/node_modules'
    ]
  },
  [Symbol(kCapture)]: false
}

*/

//!   NODE.js  3rd party  Modules
const http = require('node:http');  // Import     http module 
const v8   = require('node:v8');    //
const fs   = require('fs');         

//console.log(http) // HTTP
/*
{
  _connectionListener: [Function: connectionListener],
  METHODS: [
    'ACL',         'BIND',       'CHECKOUT',
    'CONNECT',     'COPY',       'DELETE',
    'GET',         'HEAD',       'LINK',
    'LOCK',        'M-SEARCH',   'MERGE',
    'MKACTIVITY',  'MKCALENDAR', 'MKCOL',
    'MOVE',        'NOTIFY',     'OPTIONS',
    'PATCH',       'POST',       'PROPFIND',
    'PROPPATCH',   'PURGE',      'PUT',
    'REBIND',      'REPORT',     'SEARCH',
    'SOURCE',      'SUBSCRIBE',  'TRACE',
    'UNBIND',      'UNLINK',     'UNLOCK',
    'UNSUBSCRIBE'
  ],
  STATUS_CODES: {
    '100': 'Continue',
    '101': 'Switching Protocols',
    '102': 'Processing',
    '103': 'Early Hints',
    '200': 'OK',
    '201': 'Created',
    '202': 'Accepted',
    '203': 'Non-Authoritative Information',
    '204': 'No Content',
    '205': 'Reset Content',
    '206': 'Partial Content',
    '207': 'Multi-Status',
    '208': 'Already Reported',
    '226': 'IM Used',
    '300': 'Multiple Choices',
    '301': 'Moved Permanently',
    '302': 'Found',
    '303': 'See Other',
    '304': 'Not Modified',
    '305': 'Use Proxy',
    '307': 'Temporary Redirect',
    '308': 'Permanent Redirect',
    '400': 'Bad Request',
    '401': 'Unauthorized',
    '402': 'Payment Required',
    '403': 'Forbidden',
    '404': 'Not Found',
    '405': 'Method Not Allowed',
    '406': 'Not Acceptable',
    '407': 'Proxy Authentication Required',
    '408': 'Request Timeout',
    '409': 'Conflict',
    '410': 'Gone',
    '411': 'Length Required',
    '412': 'Precondition Failed',
    '413': 'Payload Too Large',
    '414': 'URI Too Long',
    '415': 'Unsupported Media Type',
    '416': 'Range Not Satisfiable',
    '417': 'Expectation Failed',
    '418': "I'm a Teapot",
    '421': 'Misdirected Request',
    '422': 'Unprocessable Entity',
    '423': 'Locked',
    '424': 'Failed Dependency',
    '425': 'Too Early',
    '426': 'Upgrade Required',
    '428': 'Precondition Required',
    '429': 'Too Many Requests',
    '431': 'Request Header Fields Too Large',
    '451': 'Unavailable For Legal Reasons',
    '500': 'Internal Server Error',
    '501': 'Not Implemented',
    '502': 'Bad Gateway',
    '503': 'Service Unavailable',
    '504': 'Gateway Timeout',
    '505': 'HTTP Version Not Supported',
    '506': 'Variant Also Negotiates',
    '507': 'Insufficient Storage',
    '508': 'Loop Detected',
    '509': 'Bandwidth Limit Exceeded',
    '510': 'Not Extended',
    '511': 'Network Authentication Required'
  },
  Agent: [Function: Agent] { defaultMaxSockets: Infinity },
  ClientRequest: [Function: ClientRequest],
  IncomingMessage: [Function: IncomingMessage],
  OutgoingMessage: [Function: OutgoingMessage],
  Server: [Function: Server],
  ServerResponse: [Function: ServerResponse],
  createServer: [Function: createServer],
  validateHeaderName: [Function: __node_internal_],
  validateHeaderValue: [Function: __node_internal_],
  get: [Function: get],
  request: [Function: request],
  setMaxIdleHTTPParsers: [Function: setMaxIdleHTTPParsers],
  maxHeaderSize: [Getter],
  globalAgent: [Getter/Setter]
}
*/
//console.log(v8)   // Javascript Runtime Engine     V8 by google
/*
{
  cachedDataVersionTag: [Function: cachedDataVersionTag],
  getHeapSnapshot: [Function: getHeapSnapshot],
  getHeapStatistics: [Function: getHeapStatistics],
  getHeapSpaceStatistics: [Function: getHeapSpaceStatistics],
  getHeapCodeStatistics: [Function: getHeapCodeStatistics],
  setFlagsFromString: [Function: setFlagsFromString],
  Serializer: [Function: Serializer],
  Deserializer: [Function: Deserializer],
  DefaultSerializer: [class DefaultSerializer extends Serializer],
  DefaultDeserializer: [class DefaultDeserializer extends Deserializer],
  deserialize: [Function: deserialize],
  takeCoverage: [Function: takeCoverage],
  stopCoverage: [Function: stopCoverage],
  serialize: [Function: serialize],
  writeHeapSnapshot: [Function: writeHeapSnapshot],
  promiseHooks: {
    createHook: [Function: createHook],
    onInit: [Function (anonymous)],
    onBefore: [Function (anonymous)],
    onAfter: [Function (anonymous)],
    onSettled: [Function (anonymous)]
  },
  startupSnapshot: {
    addDeserializeCallback: [Function: addDeserializeCallback],
    addSerializeCallback: [Function: addSerializeCallback],
    setDeserializeMainFunction: [Function: setDeserializeMainFunction],
    isBuildingSnapshot: [Function: isBuildingSnapshot]
  },
  setHeapSnapshotNearHeapLimit: [Function: setHeapSnapshotNearHeapLimit],
  GCProfiler: [class GCProfiler]
}

*/
//console.log(fs)   // File System
/*
{
  cachedDataVersionTag: [Function: cachedDataVersionTag],
  getHeapSnapshot: [Function: getHeapSnapshot],
  getHeapStatistics: [Function: getHeapStatistics],
  getHeapSpaceStatistics: [Function: getHeapSpaceStatistics],
  getHeapCodeStatistics: [Function: getHeapCodeStatistics],
  setFlagsFromString: [Function: setFlagsFromString],
  Serializer: [Function: Serializer],
  Deserializer: [Function: Deserializer],
  DefaultSerializer: [class DefaultSerializer extends Serializer],
  DefaultDeserializer: [class DefaultDeserializer extends Deserializer],
  deserialize: [Function: deserialize],
  takeCoverage: [Function: takeCoverage],
  stopCoverage: [Function: stopCoverage],
  serialize: [Function: serialize],
  writeHeapSnapshot: [Function: writeHeapSnapshot],
  promiseHooks: {
    createHook: [Function: createHook],
    onInit: [Function (anonymous)],
    onBefore: [Function (anonymous)],
    onAfter: [Function (anonymous)],
    onSettled: [Function (anonymous)]
  },
  startupSnapshot: {
    addDeserializeCallback: [Function: addDeserializeCallback],
    addSerializeCallback: [Function: addSerializeCallback],
    setDeserializeMainFunction: [Function: setDeserializeMainFunction],
    isBuildingSnapshot: [Function: isBuildingSnapshot]
  },
  setHeapSnapshotNearHeapLimit: [Function: setHeapSnapshotNearHeapLimit],
  GCProfiler: [class GCProfiler]
}

*/

//!   NODE.js  NPM  (Package Manager) Modules         https://docs.npmjs.com/
// npm i cowsay             //!  NPM  install in local project @ node_mpdules

                            //!  NPM install global  (as a terminal command )
//* npm install -g cowsay    
/* npm list -g --depth=0                                                                                                                                                         
/home/ariel/.local/share/fnm/node-versions/v20.5.1/installation/lib
├── corepack   @0.19.0    
├── cowsay     @1.6.0     
├── npm        @9.8.0     
└── typescript @5.2.2     //! tsc

//*  npm uninstall -g cowsay
├── corepack@0.19.0
├── npm@9.8.0
└── typescript@5.2.2
 */

// npm install aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
// see full list of commands & aliases bellow

var cowsay = require("cowsay");     //!  https://www.npmjs.com/package/cowsay

console.log(  cowsay ); 
/* cowsay  
{
  say:   [Function (anonymous)],
  think: [Function (anonymous)],
  list:  [Function (anonymous)]
}
*/
console.log(  cowsay.say( {  text : "I  say"} ));
/* cowsay.say()
________
< I  say >
 --------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
 */
console.log(  cowsay.think({ text : "Ithink"} ));


//!   NPM  Commands
//*  npm help
/*
npm <command>

//*     Usage:

npm install        install all the dependencies in your project
npm install <foo>  add the <foo> dependency to your project
npm test           run this project's tests
npm run <foo>      run the script named <foo>
npm <command> -h   quick help on <command>
npm -l             display usage info for all commands
npm help <term>    search for help on <term>
npm help npm       more involved overview

//*     All commands:

access, adduser, audit, bugs, cache, ci, completion,
config, dedupe, deprecate, diff, dist-tag, docs, doctor,
edit, exec, explain, explore, find-dupes, fund, get, help,
help-search, hook, init, install, install-ci-test,
install-test, link, ll, login, logout, ls, org, outdated,
owner, pack, ping, pkg, prefix, profile, prune, publish,
query, rebuild, repo, restart, root, run-script, search,
set, shrinkwrap, star, stars, start, stop, team, test,
token, uninstall, unpublish, unstar, update, version, view,
whoami

Specify configs in the ini-formatted file:   /home/ariel/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

//*  npm@9.8.0 /home/ariel/.local/share/fnm/node-versions/v20.5.1/installation/lib/node_modules/npm
*/

//*  npm -l
/*   npm <command>  ....    All commands:



    access          Set access level on published packages
                    
                    Usage:
                    npm access list packages [<user>|<scope>|<scope:team> [<package>]
                    npm access list collaborators [<package> [<user>]]
                    npm access get status [<package>]
                    npm access set status=public|private [<package>]
                    npm access set mfa=none|publish|automation [<package>]
                    npm access grant <read-only|read-write> <scope:team> [<package>]
                    npm access revoke <scope:team> [<package>]
                    
                    Options:
                    [--json] [--otp <otp>] [--registry <registry>]
                    
                    Run "npm help access" for more info

    adduser         Add a registry user account
                    
                    Usage:
                    npm adduser
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>] [--auth-type <legacy|web>]
                    
                    alias: add-user
                    
                    Run "npm help adduser" for more info

    audit           Run a security audit
                    
                    Usage:
                    npm audit [fix|signatures]
                    
                    Options:
                    [--audit-level <info|low|moderate|high|critical|none>] [--dry-run] [-f|--force]
                    [--json] [--package-lock-only]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--foreground-scripts] [--ignore-scripts]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    Run "npm help audit" for more info

    bugs            Report bugs for a package in a web browser
                    
                    Usage:
                    npm bugs [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--no-browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: issues
                    
                    Run "npm help bugs" for more info

    cache           Manipulates packages cache
                    
                    Usage:
                    npm cache add <package-spec>
                    npm cache clean [<key>]
                    npm cache ls [<name>@<version>]
                    npm cache verify
                    
                    Options:
                    [--cache <cache>]
                    
                    Run "npm help cache" for more info

    ci              Clean install a project
                    
                    Usage:
                    npm ci
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
                    [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: clean-install, ic, install-clean, isntall-clean
                    
                    Run "npm help ci" for more info

    completion      Tab Completion for npm
                    
                    Usage:
                    npm completion
                    
                    Run "npm help completion" for more info

    config          Manage the npm configuration files
                    
                    Usage:
                    npm config set <key>=<value> [<key>=<value> ...]
                    npm config get [<key> [<key> ...]]
                    npm config delete <key> [<key> ...]
                    npm config list [--json]
                    npm config edit
                    npm config fix
                    
                    Options:
                    [--json] [-g|--global] [--editor <editor>] [-L|--location <global|user|project>]
                    [-l|--long]
                    
                    alias: c
                    
                    Run "npm help config" for more info

    dedupe          Reduce duplication in the package tree
                    
                    Usage:
                    npm dedupe
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--strict-peer-deps] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]] [--ignore-scripts]
                    [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: ddp
                    
                    Run "npm help dedupe" for more info

    deprecate       Deprecate a version of a package
                    
                    Usage:
                    npm deprecate <package-spec> <message>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>]
                    
                    Run "npm help deprecate" for more info

    diff            The registry diff command
                    
                    Usage:
                    npm diff [...<paths>]
                    
                    Options:
                    [--diff <package-spec> [--diff <package-spec> ...]] [--diff-name-only]
                    [--diff-unified <number>] [--diff-ignore-all-space] [--diff-no-prefix]
                    [--diff-src-prefix <path>] [--diff-dst-prefix <path>] [--diff-text] [-g|--global]
                    [--tag <tag>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help diff" for more info

    dist-tag        Modify package distribution tags
                    
                    Usage:
                    npm dist-tag add <package-spec (with version)> [<tag>]
                    npm dist-tag rm <package-spec> <tag>
                    npm dist-tag ls [<package-spec>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: dist-tags
                    
                    Run "npm help dist-tag" for more info

    docs            Open documentation for a package in a web browser
                    
                    Usage:
                    npm docs [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--no-browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: home
                    
                    Run "npm help docs" for more info

    doctor          Check your npm environment
                    
                    Usage:
                    npm doctor [ping] [registry] [versions] [environment] [permissions] [cache]
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help doctor" for more info

    edit            Edit an installed package
                    
                    Usage:
                    npm edit <pkg>[/<subpkg>...]
                    
                    Options:
                    [--editor <editor>]
                    
                    Run "npm help edit" for more info

    exec            Run a command from a local or remote npm package
                    
                    Usage:
                    npm exec -- <pkg>[@<version>] [args...]
                    npm exec --package=<pkg>[@<version>] -- <cmd> [args...]
                    npm exec -c '<cmd> [args...]'
                    npm exec --package=foo -c '<cmd> [args...]'
                    
                    Options:
                    [--package <package-spec> [--package <package-spec> ...]] [-c|--call <call>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    alias: x
                    
                    Run "npm help exec" for more info

    explain         Explain installed packages
                    
                    Usage:
                    npm explain <package-spec>
                    
                    Options:
                    [--json] [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    
                    alias: why
                    
                    Run "npm help explain" for more info

    explore         Browse an installed package
                    
                    Usage:
                    npm explore <pkg> [ -- <command>]
                    
                    Options:
                    [--shell <shell>]
                    
                    Run "npm help explore" for more info

    find-dupes      Find duplication in the package tree
                    
                    Usage:
                    npm find-dupes
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--strict-peer-deps] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]] [--ignore-scripts]
                    [--no-audit] [--no-bin-links] [--no-fund]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    Run "npm help find-dupes" for more info

    fund            Retrieve funding information
                    
                    Usage:
                    npm fund [<package-spec>]
                    
                    Options:
                    [--json] [--no-browser|--browser <browser>] [--no-unicode]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [--which <fundingSourceNumber>]
                    
                    Run "npm help fund" for more info

    get             Get a value from the npm configuration
                    
                    Usage:
                    npm get [<key> ...] (See `npm config`)
                    
                    Options:
                    [-l|--long]
                    
                    Run "npm help get" for more info

    help            Get help on npm
                    
                    Usage:
                    npm help <term> [<terms..>]
                    
                    Options:
                    [--viewer <viewer>]
                    
                    alias: hlep
                    
                    Run "npm help help" for more info

    help-search     Search npm help documentation
                    
                    Usage:
                    npm help-search <text>
                    
                    Options:
                    [-l|--long]
                    
                    Run "npm help help-search" for more info

    hook            Manage registry hooks
                    
                    Usage:
                    npm hook add <pkg> <url> <secret> [--type=<type>]
                    npm hook ls [pkg]
                    npm hook rm <id>
                    npm hook update <id> <url> <secret>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>]
                    
                    Run "npm help hook" for more info

    init            Create a package.json file
                    
                    Usage:
                    npm init <package-spec> (same as `npx <package-spec>`)
                    npm init <@scope> (same as `npx <@scope>/create`)
                    
                    Options:
                    [-y|--yes] [-f|--force] [--scope <@scope>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--no-workspaces-update] [--include-workspace-root]
                    
                    aliases: create, innit
                    
                    Run "npm help init" for more info

    install         Install a package
                    
                    Usage:
                    npm install [<package-spec> ...]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-E|--save-exact] [-g|--global]
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--strict-peer-deps] [--prefer-dedupe] [--no-package-lock] [--package-lock-only]
                    [--foreground-scripts] [--ignore-scripts] [--no-audit] [--no-bin-links]
                    [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: add, i, in, ins, inst, insta, instal, isnt, isnta, isntal, isntall
                    
                    Run "npm help install" for more info

    install-ci-test Install a project with a clean slate and run tests
                    
                    Usage:
                    npm install-ci-test
                    
                    Options:
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--strict-peer-deps] [--foreground-scripts] [--ignore-scripts] [--no-audit]
                    [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: cit, clean-install-test, sit
                    
                    Run "npm help install-ci-test" for more info

    install-test    Install package(s) and run tests
                    
                    Usage:
                    npm install-test [<package-spec> ...]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-E|--save-exact] [-g|--global]
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--strict-peer-deps] [--prefer-dedupe] [--no-package-lock] [--package-lock-only]
                    [--foreground-scripts] [--ignore-scripts] [--no-audit] [--no-bin-links]
                    [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: it
                    
                    Run "npm help install-test" for more info

    link            Symlink a package folder
                    
                    Usage:
                    npm link [<package-spec>]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-E|--save-exact] [-g|--global]
                    [--install-strategy <hoisted|nested|shallow|linked>] [--legacy-bundling]
                    [--global-style] [--strict-peer-deps] [--no-package-lock]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]] [--ignore-scripts]
                    [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: ln
                    
                    Run "npm help link" for more info

    ll              List installed packages
                    
                    Usage:
                    npm ll [[<@scope>/]<pkg> ...]
                    
                    Options:
                    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global] [--depth <depth>]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]] [--link]
                    [--package-lock-only] [--no-unicode]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: la
                    
                    Run "npm help ll" for more info

    login           Login to a registry user account
                    
                    Usage:
                    npm login
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>] [--auth-type <legacy|web>]
                    
                    Run "npm help login" for more info

    logout          Log out of the registry
                    
                    Usage:
                    npm logout
                    
                    Options:
                    [--registry <registry>] [--scope <@scope>]
                    
                    Run "npm help logout" for more info

    ls              List installed packages
                    
                    Usage:
                    npm ls <package-spec>
                    
                    Options:
                    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global] [--depth <depth>]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]] [--link]
                    [--package-lock-only] [--no-unicode]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: list
                    
                    Run "npm help ls" for more info

    org             Manage orgs
                    
                    Usage:
                    npm org set orgname username [developer | admin | owner]
                    npm org rm orgname username
                    npm org ls orgname [<username>]
                    
                    Options:
                    [--registry <registry>] [--otp <otp>] [--json] [-p|--parseable]
                    
                    alias: ogr
                    
                    Run "npm help org" for more info

    outdated        Check for outdated packages
                    
                    Usage:
                    npm outdated [<package-spec> ...]
                    
                    Options:
                    [-a|--all] [--json] [-l|--long] [-p|--parseable] [-g|--global]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    
                    Run "npm help outdated" for more info

    owner           Manage package owners
                    
                    Usage:
                    npm owner add <user> <package-spec>
                    npm owner rm <user> <package-spec>
                    npm owner ls <package-spec>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    alias: author
                    
                    Run "npm help owner" for more info

    pack            Create a tarball from a package
                    
                    Usage:
                    npm pack <package-spec>
                    
                    Options:
                    [--dry-run] [--json] [--pack-destination <pack-destination>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help pack" for more info

    ping            Ping npm registry
                    
                    Usage:
                    npm ping
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help ping" for more info

    pkg             Manages your package.json
                    
                    Usage:
                    npm pkg set <key>=<value> [<key>=<value> ...]
                    npm pkg get [<key> [<key> ...]]
                    npm pkg delete <key> [<key> ...]
                    npm pkg set [<array>[<index>].<key>=<value> ...]
                    npm pkg set [<array>[].<key>=<value> ...]
                    npm pkg fix
                    
                    Options:
                    [-f|--force] [--json]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help pkg" for more info

    prefix          Display prefix
                    
                    Usage:
                    npm prefix [-g]
                    
                    Options:
                    [-g|--global]
                    
                    Run "npm help prefix" for more info

    profile         Change settings on your registry profile
                    
                    Usage:
                    npm profile enable-2fa [auth-only|auth-and-writes]
                    npm profile disable-2fa
                    npm profile get [<key>]
                    npm profile set <key> <value>
                    
                    Options:
                    [--registry <registry>] [--json] [-p|--parseable] [--otp <otp>]
                    
                    Run "npm help profile" for more info

    prune           Remove extraneous packages
                    
                    Usage:
                    npm prune [[<@scope>/]<pkg>...]
                    
                    Options:
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]] [--dry-run]
                    [--json] [--foreground-scripts] [--ignore-scripts]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    Run "npm help prune" for more info

    publish         Publish a package
                    
                    Usage:
                    npm publish <package-spec>
                    
                    Options:
                    [--tag <tag>] [--access <restricted|public>] [--dry-run] [--otp <otp>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    [--provenance|--provenance-file <file>]
                    
                    Run "npm help publish" for more info

    query           Retrieve a filtered list of packages
                    
                    Usage:
                    npm query <selector>
                    
                    Options:
                    [-g|--global]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help query" for more info

    rebuild         Rebuild a package
                    
                    Usage:
                    npm rebuild [<package-spec>] ...]
                    
                    Options:
                    [-g|--global] [--no-bin-links] [--foreground-scripts] [--ignore-scripts]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    alias: rb
                    
                    Run "npm help rebuild" for more info

    repo            Open package repository page in the browser
                    
                    Usage:
                    npm repo [<pkgname> [<pkgname> ...]]
                    
                    Options:
                    [--no-browser|--browser <browser>] [--registry <registry>]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    Run "npm help repo" for more info

    restart         Restart a package
                    
                    Usage:
                    npm restart [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    Run "npm help restart" for more info

    root            Display npm root
                    
                    Usage:
                    npm root
                    
                    Options:
                    [-g|--global]
                    
                    Run "npm help root" for more info

    run-script      Run arbitrary package scripts
                    
                    Usage:
                    npm run-script <command> [-- <args>]
                    
                    Options:
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--if-present] [--ignore-scripts]
                    [--foreground-scripts] [--script-shell <script-shell>]
                    
                    aliases: run, rum, urn
                    
                    Run "npm help run-script" for more info

    search          Search for packages
                    
                    Usage:
                    npm search [search terms ...]
                    
                    Options:
                    [-l|--long] [--json] [--color|--no-color|--color always] [-p|--parseable]
                    [--no-description] [--searchopts <searchopts>] [--searchexclude <searchexclude>]
                    [--registry <registry>] [--prefer-online] [--prefer-offline] [--offline]
                    
                    aliases: find, s, se
                    
                    Run "npm help search" for more info

    set             Set a value in the npm configuration
                    
                    Usage:
                    npm set <key>=<value> [<key>=<value> ...] (See `npm config`)
                    
                    Options:
                    [-g|--global] [-L|--location <global|user|project>]
                    
                    Run "npm help set" for more info

    shrinkwrap      Lock down dependency versions for publication
                    
                    Usage:
                    npm shrinkwrap
                    
                    Run "npm help shrinkwrap" for more info

    star            Mark your favorite packages
                    
                    Usage:
                    npm star [<package-spec>...]
                    
                    Options:
                    [--registry <registry>] [--no-unicode] [--otp <otp>]
                    
                    Run "npm help star" for more info

    stars           View packages marked as favorites
                    
                    Usage:
                    npm stars [<user>]
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help stars" for more info

    start           Start a package
                    
                    Usage:
                    npm start [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    Run "npm help start" for more info

    stop            Stop a package
                    
                    Usage:
                    npm stop [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    Run "npm help stop" for more info

    team            Manage organization teams and team memberships
                    
                    Usage:
                    npm team create <scope:team> [--otp <otpcode>]
                    npm team destroy <scope:team> [--otp <otpcode>]
                    npm team add <scope:team> <user> [--otp <otpcode>]
                    npm team rm <scope:team> <user> [--otp <otpcode>]
                    npm team ls <scope>|<scope:team>
                    
                    Options:
                    [--registry <registry>] [--otp <otp>] [-p|--parseable] [--json]
                    
                    Run "npm help team" for more info

    test            Test a package
                    
                    Usage:
                    npm test [-- <args>]
                    
                    Options:
                    [--ignore-scripts] [--script-shell <script-shell>]
                    
                    aliases: tst, t
                    
                    Run "npm help test" for more info

    token           Manage your authentication tokens
                    
                    Usage:
                    npm token list
                    npm token revoke <id|token>
                    npm token create [--read-only] [--cidr=list]
                    
                    Options:
                    [--read-only] [--cidr <cidr> [--cidr <cidr> ...]] [--registry <registry>]
                    [--otp <otp>]
                    
                    Run "npm help token" for more info

    uninstall       Remove a package
                    
                    Usage:
                    npm uninstall [<@scope>/]<pkg>...
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-g|--global]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: unlink, remove, rm, r, un
                    
                    Run "npm help uninstall" for more info

    unpublish       Remove a package from the registry
                    
                    Usage:
                    npm unpublish [<package-spec>]
                    
                    Options:
                    [--dry-run] [-f|--force]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces]
                    
                    Run "npm help unpublish" for more info

    unstar          Remove an item from your favorite packages
                    
                    Usage:
                    npm unstar [<package-spec>...]
                    
                    Options:
                    [--registry <registry>] [--no-unicode] [--otp <otp>]
                    
                    Run "npm help unstar" for more info

    update          Update packages
                    
                    Usage:
                    npm update [<pkg>...]
                    
                    Options:
                    [-S|--save|--no-save|--save-prod|--save-dev|--save-optional|--save-peer|--save-bundle]
                    [-g|--global] [--install-strategy <hoisted|nested|shallow|linked>]
                    [--legacy-bundling] [--global-style]
                    [--omit <dev|optional|peer> [--omit <dev|optional|peer> ...]]
                    [--strict-peer-deps] [--no-package-lock] [--foreground-scripts]
                    [--ignore-scripts] [--no-audit] [--no-bin-links] [--no-fund] [--dry-run]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root] [--install-links]
                    
                    aliases: up, upgrade, udpate
                    
                    Run "npm help update" for more info

    version         Bump a package version
                    
                    Usage:
                    npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
                    
                    Options:
                    [--allow-same-version] [--no-commit-hooks] [--no-git-tag-version] [--json]
                    [--preid prerelease-id] [--sign-git-tag]
                    [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--no-workspaces-update] [--include-workspace-root]
                    
                    alias: verison
                    
                    Run "npm help version" for more info

    view            View registry info
                    
                    Usage:
                    npm view [<package-spec>] [<field>[.subfield]...]
                    
                    Options:
                    [--json] [-w|--workspace <workspace-name> [-w|--workspace <workspace-name> ...]]
                    [-ws|--workspaces] [--include-workspace-root]
                    
                    aliases: info, show, v
                    
                    Run "npm help view" for more info

    whoami          Display npm username
                    
                    Usage:
                    npm whoami
                    
                    Options:
                    [--registry <registry>]
                    
                    Run "npm help whoami" for more info

Specify configs in the ini-formatted file:
    /home/ariel/.npmrc
or on the command line via: npm <command> --key=value

More configuration info: npm help config
Configuration fields: npm help 7 config

npm@9.8.0 /home/ariel/.local/share/fnm/node-versions/v20.5.1/installation/lib/node_modules/npm
*/



// node Web_Node.js 


