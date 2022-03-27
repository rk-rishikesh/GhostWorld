// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@walletconnect/window-getters/dist/cjs/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
function getFromWindow(name) {
    let res = undefined;
    if (typeof window !== "undefined" && typeof window[name] !== "undefined") {
        res = window[name];
    }
    return res;
}
exports.getFromWindow = getFromWindow;
function getFromWindowOrThrow(name) {
    const res = getFromWindow(name);
    if (!res) {
        throw new Error(`${name} is not defined in Window`);
    }
    return res;
}
exports.getFromWindowOrThrow = getFromWindowOrThrow;
function getDocumentOrThrow() {
    return getFromWindowOrThrow("document");
}
exports.getDocumentOrThrow = getDocumentOrThrow;
function getDocument() {
    return getFromWindow("document");
}
exports.getDocument = getDocument;
function getNavigatorOrThrow() {
    return getFromWindowOrThrow("navigator");
}
exports.getNavigatorOrThrow = getNavigatorOrThrow;
function getNavigator() {
    return getFromWindow("navigator");
}
exports.getNavigator = getNavigator;
function getLocationOrThrow() {
    return getFromWindowOrThrow("location");
}
exports.getLocationOrThrow = getLocationOrThrow;
function getLocation() {
    return getFromWindow("location");
}
exports.getLocation = getLocation;
function getCryptoOrThrow() {
    return getFromWindowOrThrow("crypto");
}
exports.getCryptoOrThrow = getCryptoOrThrow;
function getCrypto() {
    return getFromWindow("crypto");
}
exports.getCrypto = getCrypto;
function getLocalStorageOrThrow() {
    return getFromWindowOrThrow("localStorage");
}
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
function getLocalStorage() {
    return getFromWindow("localStorage");
}
exports.getLocalStorage = getLocalStorage;

},{}],"node_modules/@walletconnect/window-metadata/dist/cjs/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWindowMetadata = void 0;
const window_getters_1 = require("@walletconnect/window-getters");
function getWindowMetadata() {
    let doc;
    let loc;
    try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
    }
    catch (e) {
        return null;
    }
    function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons = [];
        for (let i = 0; i < links.length; i++) {
            const link = links[i];
            const rel = link.getAttribute("rel");
            if (rel) {
                if (rel.toLowerCase().indexOf("icon") > -1) {
                    const href = link.getAttribute("href");
                    if (href) {
                        if (href.toLowerCase().indexOf("https:") === -1 &&
                            href.toLowerCase().indexOf("http:") === -1 &&
                            href.indexOf("//") !== 0) {
                            let absoluteHref = loc.protocol + "//" + loc.host;
                            if (href.indexOf("/") === 0) {
                                absoluteHref += href;
                            }
                            else {
                                const path = loc.pathname.split("/");
                                path.pop();
                                const finalPath = path.join("/");
                                absoluteHref += finalPath + "/" + href;
                            }
                            icons.push(absoluteHref);
                        }
                        else if (href.indexOf("//") === 0) {
                            const absoluteUrl = loc.protocol + href;
                            icons.push(absoluteUrl);
                        }
                        else {
                            icons.push(href);
                        }
                    }
                }
            }
        }
        return icons;
    }
    function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i = 0; i < metaTags.length; i++) {
            const tag = metaTags[i];
            const attributes = ["itemprop", "property", "name"]
                .map((target) => tag.getAttribute(target))
                .filter((attr) => {
                if (attr) {
                    return args.includes(attr);
                }
                return false;
            });
            if (attributes.length && attributes) {
                const content = tag.getAttribute("content");
                if (content) {
                    return content;
                }
            }
        }
        return "";
    }
    function getName() {
        let name = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name) {
            name = doc.title;
        }
        return name;
    }
    function getDescription() {
        const description = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description;
    }
    const name = getName();
    const description = getDescription();
    const url = loc.origin;
    const icons = getIcons();
    const meta = {
        description,
        url,
        icons,
        name,
    };
    return meta;
}
exports.getWindowMetadata = getWindowMetadata;

},{"@walletconnect/window-getters":"node_modules/@walletconnect/window-getters/dist/cjs/index.js"}],"node_modules/detect-browser/es/index.js":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBotDeviceInfo = exports.ReactNativeInfo = exports.NodeInfo = exports.BrowserInfo = exports.BotInfo = void 0;
exports.browserName = browserName;
exports.detect = detect;
exports.detectOS = detectOS;
exports.getNodeVersion = getNodeVersion;
exports.parseUserAgent = parseUserAgent;

var __spreadArrays = void 0 && (void 0).__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

var BrowserInfo =
/** @class */
function () {
  function BrowserInfo(name, version, os) {
    this.name = name;
    this.version = version;
    this.os = os;
    this.type = 'browser';
  }

  return BrowserInfo;
}();

exports.BrowserInfo = BrowserInfo;

var NodeInfo =
/** @class */
function () {
  function NodeInfo(version) {
    this.version = version;
    this.type = 'node';
    this.name = 'node';
    this.os = process.platform;
  }

  return NodeInfo;
}();

exports.NodeInfo = NodeInfo;

var SearchBotDeviceInfo =
/** @class */
function () {
  function SearchBotDeviceInfo(name, version, os, bot) {
    this.name = name;
    this.version = version;
    this.os = os;
    this.bot = bot;
    this.type = 'bot-device';
  }

  return SearchBotDeviceInfo;
}();

exports.SearchBotDeviceInfo = SearchBotDeviceInfo;

var BotInfo =
/** @class */
function () {
  function BotInfo() {
    this.type = 'bot';
    this.bot = true; // NOTE: deprecated test name instead

    this.name = 'bot';
    this.version = null;
    this.os = null;
  }

  return BotInfo;
}();

exports.BotInfo = BotInfo;

var ReactNativeInfo =
/** @class */
function () {
  function ReactNativeInfo() {
    this.type = 'react-native';
    this.name = 'react-native';
    this.version = null;
    this.os = null;
  }

  return ReactNativeInfo;
}();

exports.ReactNativeInfo = ReactNativeInfo;
// tslint:disable-next-line:max-line-length
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [['aol', /AOLShield\/([0-9\._]+)/], ['edge', /Edge\/([0-9\._]+)/], ['edge-ios', /EdgiOS\/([0-9\._]+)/], ['yandexbrowser', /YaBrowser\/([0-9\._]+)/], ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/], ['samsung', /SamsungBrowser\/([0-9\.]+)/], ['silk', /\bSilk\/([0-9._-]+)\b/], ['miui', /MiuiBrowser\/([0-9\.]+)$/], ['beaker', /BeakerBrowser\/([0-9\.]+)/], ['edge-chromium', /EdgA?\/([0-9\.]+)/], ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/], ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['fxios', /FxiOS\/([0-9\.]+)/], ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/], ['android', /Android\s([0-9\.]+)/], ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/], ['safari', /Version\/([0-9\._]+).*Safari/], ['facebook', /FBAV\/([0-9\.]+)/], ['instagram', /Instagram\s([0-9\.]+)/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/], ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ['searchbot', SEARCHBOX_UA_REGEX]];
var operatingSystemRules = [['iOS', /iP(hone|od|ad)/], ['Android OS', /Android/], ['BlackBerry OS', /BlackBerry|BB10/], ['Windows Mobile', /IEMobile/], ['Amazon OS', /Kindle/], ['Windows 3.11', /Win16/], ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/], ['Windows 98', /(Windows 98)|(Win98)/], ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/], ['Windows XP', /(Windows NT 5.1)|(Windows XP)/], ['Windows Server 2003', /(Windows NT 5.2)/], ['Windows Vista', /(Windows NT 6.0)/], ['Windows 7', /(Windows NT 6.1)/], ['Windows 8', /(Windows NT 6.2)/], ['Windows 8.1', /(Windows NT 6.3)/], ['Windows 10', /(Windows NT 10.0)/], ['Windows ME', /Windows ME/], ['Open BSD', /OpenBSD/], ['Sun OS', /SunOS/], ['Chrome OS', /CrOS/], ['Linux', /(Linux)|(X11)/], ['Mac OS', /(Mac_PowerPC)|(Macintosh)/], ['QNX', /QNX/], ['BeOS', /BeOS/], ['OS/2', /OS\/2/]];

function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }

  if (typeof document === 'undefined' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return new ReactNativeInfo();
  }

  if (typeof navigator !== 'undefined') {
    return parseUserAgent(navigator.userAgent);
  }

  return getNodeVersion();
}

function matchUserAgent(ua) {
  // opted for using reduce here rather than Array#first with a regex.test call
  // this is primarily because using the reduce we only perform the regex
  // execution once rather than once for the test and for the exec again below
  // probably something that needs to be benchmarked though
  return ua !== '' && userAgentRules.reduce(function (matched, _a) {
    var browser = _a[0],
        regex = _a[1];

    if (matched) {
      return matched;
    }

    var uaMatch = regex.exec(ua);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}

function browserName(ua) {
  var data = matchUserAgent(ua);
  return data ? data[0] : null;
}

function parseUserAgent(ua) {
  var matchedRule = matchUserAgent(ua);

  if (!matchedRule) {
    return null;
  }

  var name = matchedRule[0],
      match = matchedRule[1];

  if (name === 'searchbot') {
    return new BotInfo();
  }

  var versionParts = match[1] && match[1].split(/[._]/).slice(0, 3);

  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArrays(versionParts, createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length));
    }
  } else {
    versionParts = [];
  }

  var version = versionParts.join('.');
  var os = detectOS(ua);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);

  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);
  }

  return new BrowserInfo(name, version, os);
}

function detectOS(ua) {
  for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {
    var _a = operatingSystemRules[ii],
        os = _a[0],
        regex = _a[1];
    var match = regex.exec(ua);

    if (match) {
      return os;
    }
  }

  return null;
}

function getNodeVersion() {
  var isNode = typeof process !== 'undefined' && process.version;
  return isNode ? new NodeInfo(process.version.slice(1)) : null;
}

function createVersionParts(count) {
  var output = [];

  for (var ii = 0; ii < count; ii++) {
    output.push('0');
  }

  return output;
}
},{"process":"node_modules/process/browser.js"}],"node_modules/@walletconnect/browser-utils/dist/esm/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectEnv = detectEnv;
exports.detectOS = detectOS;
exports.getClientMeta = getClientMeta;
exports.getNavigatorOrThrow = exports.getNavigator = exports.getLocationOrThrow = exports.getLocation = exports.getLocalStorageOrThrow = exports.getLocalStorage = exports.getFromWindowOrThrow = exports.getFromWindow = exports.getDocumentOrThrow = exports.getDocument = exports.getCryptoOrThrow = exports.getCrypto = void 0;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isIOS = isIOS;
exports.isMobile = isMobile;
exports.isNode = isNode;

var windowMetadata = _interopRequireWildcard(require("@walletconnect/window-metadata"));

var windowGetters = _interopRequireWildcard(require("@walletconnect/window-getters"));

var _detectBrowser = require("detect-browser");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function detectEnv(userAgent) {
  return (0, _detectBrowser.detect)(userAgent);
}

function detectOS() {
  const env = detectEnv();
  return env && env.os ? env.os : undefined;
}

function isAndroid() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("android") : false;
}

function isIOS() {
  const os = detectOS();
  return os ? os.toLowerCase().includes("ios") || os.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1 : false;
}

function isMobile() {
  const os = detectOS();
  return os ? isAndroid() || isIOS() : false;
}

function isNode() {
  const env = detectEnv();
  const result = env && env.name ? env.name.toLowerCase() === "node" : false;
  return result;
}

function isBrowser() {
  const result = !isNode() && !!getNavigator();
  return result;
}

const getFromWindow = windowGetters.getFromWindow;
exports.getFromWindow = getFromWindow;
const getFromWindowOrThrow = windowGetters.getFromWindowOrThrow;
exports.getFromWindowOrThrow = getFromWindowOrThrow;
const getDocumentOrThrow = windowGetters.getDocumentOrThrow;
exports.getDocumentOrThrow = getDocumentOrThrow;
const getDocument = windowGetters.getDocument;
exports.getDocument = getDocument;
const getNavigatorOrThrow = windowGetters.getNavigatorOrThrow;
exports.getNavigatorOrThrow = getNavigatorOrThrow;
const getNavigator = windowGetters.getNavigator;
exports.getNavigator = getNavigator;
const getLocationOrThrow = windowGetters.getLocationOrThrow;
exports.getLocationOrThrow = getLocationOrThrow;
const getLocation = windowGetters.getLocation;
exports.getLocation = getLocation;
const getCryptoOrThrow = windowGetters.getCryptoOrThrow;
exports.getCryptoOrThrow = getCryptoOrThrow;
const getCrypto = windowGetters.getCrypto;
exports.getCrypto = getCrypto;
const getLocalStorageOrThrow = windowGetters.getLocalStorageOrThrow;
exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
const getLocalStorage = windowGetters.getLocalStorage;
exports.getLocalStorage = getLocalStorage;

function getClientMeta() {
  return windowMetadata.getWindowMetadata();
}
},{"@walletconnect/window-metadata":"node_modules/@walletconnect/window-metadata/dist/cjs/index.js","@walletconnect/window-getters":"node_modules/@walletconnect/window-getters/dist/cjs/index.js","detect-browser":"node_modules/detect-browser/es/index.js"}],"node_modules/@walletconnect/safe-json/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeJsonParse = safeJsonParse;
exports.safeJsonStringify = safeJsonStringify;

function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }

  try {
    return JSON.parse(value);
  } catch (_a) {
    return value;
  }
}

function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSON.stringify(value);
}
},{}],"node_modules/@walletconnect/browser-utils/dist/esm/json.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.safeJsonStringify = exports.safeJsonParse = void 0;

var safeJson = _interopRequireWildcard(require("@walletconnect/safe-json"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const safeJsonParse = safeJson.safeJsonParse;
exports.safeJsonParse = safeJsonParse;
const safeJsonStringify = safeJson.safeJsonStringify;
exports.safeJsonStringify = safeJsonStringify;
},{"@walletconnect/safe-json":"node_modules/@walletconnect/safe-json/dist/esm/index.js"}],"node_modules/@walletconnect/browser-utils/dist/esm/local.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocal = getLocal;
exports.removeLocal = removeLocal;
exports.setLocal = setLocal;

var _json = require("./json");

var _browser = require("./browser");

function setLocal(key, data) {
  const raw = (0, _json.safeJsonStringify)(data);
  const local = (0, _browser.getLocalStorage)();

  if (local) {
    local.setItem(key, raw);
  }
}

function getLocal(key) {
  let data = null;
  let raw = null;
  const local = (0, _browser.getLocalStorage)();

  if (local) {
    raw = local.getItem(key);
  }

  data = raw ? (0, _json.safeJsonParse)(raw) : raw;
  return data;
}

function removeLocal(key) {
  const local = (0, _browser.getLocalStorage)();

  if (local) {
    local.removeItem(key);
  }
}
},{"./json":"node_modules/@walletconnect/browser-utils/dist/esm/json.js","./browser":"node_modules/@walletconnect/browser-utils/dist/esm/browser.js"}],"node_modules/@walletconnect/browser-utils/dist/esm/mobile.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatIOSMobile = formatIOSMobile;
exports.getMobileLinkRegistry = getMobileLinkRegistry;
exports.getMobileRegistryEntry = getMobileRegistryEntry;
exports.mobileLinkChoiceKey = void 0;
exports.saveMobileLinkInfo = saveMobileLinkInfo;

var _local = require("./local");

const mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE";
exports.mobileLinkChoiceKey = mobileLinkChoiceKey;

function formatIOSMobile(uri, entry) {
  const encodedUri = encodeURIComponent(uri);
  return entry.universalLink ? `${entry.universalLink}/wc?uri=${encodedUri}` : entry.deepLink ? `${entry.deepLink}${entry.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${encodedUri}` : "";
}

function saveMobileLinkInfo(data) {
  const focusUri = data.href.split("?")[0];
  (0, _local.setLocal)(mobileLinkChoiceKey, Object.assign(Object.assign({}, data), {
    href: focusUri
  }));
}

function getMobileRegistryEntry(registry, name) {
  return registry.filter(entry => entry.name.toLowerCase().includes(name.toLowerCase()))[0];
}

function getMobileLinkRegistry(registry, whitelist) {
  let links = registry;

  if (whitelist) {
    links = whitelist.map(name => getMobileRegistryEntry(registry, name)).filter(Boolean);
  }

  return links;
}
},{"./local":"node_modules/@walletconnect/browser-utils/dist/esm/local.js"}],"node_modules/@walletconnect/browser-utils/dist/esm/registry.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatMobileRegistry = formatMobileRegistry;
exports.formatMobileRegistryEntry = formatMobileRegistryEntry;
exports.getDappRegistryUrl = getDappRegistryUrl;
exports.getWalletRegistryUrl = getWalletRegistryUrl;
const API_URL = "https://registry.walletconnect.com";

function getWalletRegistryUrl() {
  return API_URL + "/api/v2/wallets";
}

function getDappRegistryUrl() {
  return API_URL + "/api/v2/dapps";
}

function formatMobileRegistryEntry(entry, platform = "mobile") {
  var _a;

  return {
    name: entry.name || "",
    shortName: entry.metadata.shortName || "",
    color: entry.metadata.colors.primary || "",
    logo: (_a = entry.image_url.sm) !== null && _a !== void 0 ? _a : "",
    universalLink: entry[platform].universal || "",
    deepLink: entry[platform].native || ""
  };
}

function formatMobileRegistry(registry, platform = "mobile") {
  return Object.values(registry).filter(entry => !!entry[platform].universal || !!entry[platform].native).map(entry => formatMobileRegistryEntry(entry, platform));
}
},{}],"node_modules/@walletconnect/browser-utils/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = require("./browser");

Object.keys(_browser).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _browser[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _browser[key];
    }
  });
});

var _json = require("./json");

Object.keys(_json).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _json[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _json[key];
    }
  });
});

var _local = require("./local");

Object.keys(_local).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _local[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _local[key];
    }
  });
});

var _mobile = require("./mobile");

Object.keys(_mobile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mobile[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _mobile[key];
    }
  });
});

var _registry = require("./registry");

Object.keys(_registry).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _registry[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _registry[key];
    }
  });
});
},{"./browser":"node_modules/@walletconnect/browser-utils/dist/esm/browser.js","./json":"node_modules/@walletconnect/browser-utils/dist/esm/json.js","./local":"node_modules/@walletconnect/browser-utils/dist/esm/local.js","./mobile":"node_modules/@walletconnect/browser-utils/dist/esm/mobile.js","./registry":"node_modules/@walletconnect/browser-utils/dist/esm/registry.js"}],"node_modules/@walletconnect/utils/dist/esm/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stateMethods = exports.signingMethods = exports.reservedEvents = exports.infuraNetworks = void 0;
const reservedEvents = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"];
exports.reservedEvents = reservedEvents;
const signingMethods = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"];
exports.signingMethods = signingMethods;
const stateMethods = ["eth_accounts", "eth_chainId", "net_version"];
exports.stateMethods = stateMethods;
const infuraNetworks = {
  1: "mainnet",
  3: "ropsten",
  4: "rinkeby",
  5: "goerli",
  42: "kovan"
};
exports.infuraNetworks = infuraNetworks;
},{}],"node_modules/@walletconnect/utils/node_modules/bn.js/lib/bn.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
(function (module, exports) {
  'use strict';

  // Utils
  function assert (val, msg) {
    if (!val) throw new Error(msg || 'Assertion failed');
  }

  // Could use `inherits` module, but don't want to move from single file
  // architecture yet.
  function inherits (ctor, superCtor) {
    ctor.super_ = superCtor;
    var TempCtor = function () {};
    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  }

  // BN

  function BN (number, base, endian) {
    if (BN.isBN(number)) {
      return number;
    }

    this.negative = 0;
    this.words = null;
    this.length = 0;

    // Reduction context
    this.red = null;

    if (number !== null) {
      if (base === 'le' || base === 'be') {
        endian = base;
        base = 10;
      }

      this._init(number || 0, base || 10, endian || 'be');
    }
  }
  if (typeof module === 'object') {
    module.exports = BN;
  } else {
    exports.BN = BN;
  }

  BN.BN = BN;
  BN.wordSize = 26;

  var Buffer;
  try {
    Buffer = require('buffer').Buffer;
  } catch (e) {
  }

  BN.isBN = function isBN (num) {
    if (num instanceof BN) {
      return true;
    }

    return num !== null && typeof num === 'object' &&
      num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
  };

  BN.max = function max (left, right) {
    if (left.cmp(right) > 0) return left;
    return right;
  };

  BN.min = function min (left, right) {
    if (left.cmp(right) < 0) return left;
    return right;
  };

  BN.prototype._init = function init (number, base, endian) {
    if (typeof number === 'number') {
      return this._initNumber(number, base, endian);
    }

    if (typeof number === 'object') {
      return this._initArray(number, base, endian);
    }

    if (base === 'hex') {
      base = 16;
    }
    assert(base === (base | 0) && base >= 2 && base <= 36);

    number = number.toString().replace(/\s+/g, '');
    var start = 0;
    if (number[0] === '-') {
      start++;
    }

    if (base === 16) {
      this._parseHex(number, start);
    } else {
      this._parseBase(number, base, start);
    }

    if (number[0] === '-') {
      this.negative = 1;
    }

    this.strip();

    if (endian !== 'le') return;

    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [ number & 0x3ffffff ];
      this.length = 1;
    } else if (number < 0x10000000000000) {
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff
      ];
      this.length = 2;
    } else {
      assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
      this.words = [
        number & 0x3ffffff,
        (number / 0x4000000) & 0x3ffffff,
        1
      ];
      this.length = 3;
    }

    if (endian !== 'le') return;

    // Reverse the bytes
    this._initArray(this.toArray(), base, endian);
  };

  BN.prototype._initArray = function _initArray (number, base, endian) {
    // Perhaps a Uint8Array
    assert(typeof number.length === 'number');
    if (number.length <= 0) {
      this.words = [ 0 ];
      this.length = 1;
      return this;
    }

    this.length = Math.ceil(number.length / 3);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    var off = 0;
    if (endian === 'be') {
      for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
        w = number[i] | (number[i - 1] << 8) | (number[i - 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    } else if (endian === 'le') {
      for (i = 0, j = 0; i < number.length; i += 3) {
        w = number[i] | (number[i + 1] << 8) | (number[i + 2] << 16);
        this.words[j] |= (w << off) & 0x3ffffff;
        this.words[j + 1] = (w >>> (26 - off)) & 0x3ffffff;
        off += 24;
        if (off >= 26) {
          off -= 26;
          j++;
        }
      }
    }
    return this.strip();
  };

  function parseHex (str, start, end) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r <<= 4;

      // 'a' - 'f'
      if (c >= 49 && c <= 54) {
        r |= c - 49 + 0xa;

      // 'A' - 'F'
      } else if (c >= 17 && c <= 22) {
        r |= c - 17 + 0xa;

      // '0' - '9'
      } else {
        r |= c & 0xf;
      }
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    var j, w;
    // Scan 24-bit chunks and add them to the number
    var off = 0;
    for (i = number.length - 6, j = 0; i >= start; i -= 6) {
      w = parseHex(number, i, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      // NOTE: `0x3fffff` is intentional here, 26bits max shift + 24bit hex limb
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
      off += 24;
      if (off >= 26) {
        off -= 26;
        j++;
      }
    }
    if (i + 6 !== start) {
      w = parseHex(number, start, i + 6);
      this.words[j] |= (w << off) & 0x3ffffff;
      this.words[j + 1] |= w >>> (26 - off) & 0x3fffff;
    }
    this.strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        r += c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        r += c - 17 + 0xa;

      // '0' - '9'
      } else {
        r += c;
      }
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [ 0 ];
    this.length = 1;

    // Find length of limb in base
    for (var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base) {
      limbLen++;
    }
    limbLen--;
    limbPow = (limbPow / base) | 0;

    var total = number.length - start;
    var mod = total % limbLen;
    var end = Math.min(total, total - mod) + start;

    var word = 0;
    for (var i = start; i < end; i += limbLen) {
      word = parseBase(number, i, i + limbLen, base);

      this.imuln(limbPow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }

    if (mod !== 0) {
      var pow = 1;
      word = parseBase(number, i, number.length, base);

      for (i = 0; i < mod; i++) {
        pow *= base;
      }

      this.imuln(pow);
      if (this.words[0] + word < 0x4000000) {
        this.words[0] += word;
      } else {
        this._iaddn(word);
      }
    }
  };

  BN.prototype.copy = function copy (dest) {
    dest.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      dest.words[i] = this.words[i];
    }
    dest.length = this.length;
    dest.negative = this.negative;
    dest.red = this.red;
  };

  BN.prototype.clone = function clone () {
    var r = new BN(null);
    this.copy(r);
    return r;
  };

  BN.prototype._expand = function _expand (size) {
    while (this.length < size) {
      this.words[this.length++] = 0;
    }
    return this;
  };

  // Remove leading `0` from `this`
  BN.prototype.strip = function strip () {
    while (this.length > 1 && this.words[this.length - 1] === 0) {
      this.length--;
    }
    return this._normSign();
  };

  BN.prototype._normSign = function _normSign () {
    // -0 = 0
    if (this.length === 1 && this.words[0] === 0) {
      this.negative = 0;
    }
    return this;
  };

  BN.prototype.inspect = function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  };

  /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */

  var zeros = [
    '',
    '0',
    '00',
    '000',
    '0000',
    '00000',
    '000000',
    '0000000',
    '00000000',
    '000000000',
    '0000000000',
    '00000000000',
    '000000000000',
    '0000000000000',
    '00000000000000',
    '000000000000000',
    '0000000000000000',
    '00000000000000000',
    '000000000000000000',
    '0000000000000000000',
    '00000000000000000000',
    '000000000000000000000',
    '0000000000000000000000',
    '00000000000000000000000',
    '000000000000000000000000',
    '0000000000000000000000000'
  ];

  var groupSizes = [
    0, 0,
    25, 16, 12, 11, 10, 9, 8,
    8, 7, 7, 7, 7, 6, 6,
    6, 6, 6, 6, 6, 5, 5,
    5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5
  ];

  var groupBases = [
    0, 0,
    33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216,
    43046721, 10000000, 19487171, 35831808, 62748517, 7529536, 11390625,
    16777216, 24137569, 34012224, 47045881, 64000000, 4084101, 5153632,
    6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149,
    24300000, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176
  ];

  BN.prototype.toString = function toString (base, padding) {
    base = base || 10;
    padding = padding | 0 || 1;

    var out;
    if (base === 16 || base === 'hex') {
      out = '';
      var off = 0;
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = this.words[i];
        var word = (((w << off) | carry) & 0xffffff).toString(16);
        carry = (w >>> (24 - off)) & 0xffffff;
        if (carry !== 0 || i !== this.length - 1) {
          out = zeros[6 - word.length] + word + out;
        } else {
          out = word + out;
        }
        off += 2;
        if (off >= 26) {
          off -= 26;
          i--;
        }
      }
      if (carry !== 0) {
        out = carry.toString(16) + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    if (base === (base | 0) && base >= 2 && base <= 36) {
      // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
      var groupSize = groupSizes[base];
      // var groupBase = Math.pow(base, groupSize);
      var groupBase = groupBases[base];
      out = '';
      var c = this.clone();
      c.negative = 0;
      while (!c.isZero()) {
        var r = c.modn(groupBase).toString(base);
        c = c.idivn(groupBase);

        if (!c.isZero()) {
          out = zeros[groupSize - r.length] + r + out;
        } else {
          out = r + out;
        }
      }
      if (this.isZero()) {
        out = '0' + out;
      }
      while (out.length % padding !== 0) {
        out = '0' + out;
      }
      if (this.negative !== 0) {
        out = '-' + out;
      }
      return out;
    }

    assert(false, 'Base should be between 2 and 36');
  };

  BN.prototype.toNumber = function toNumber () {
    var ret = this.words[0];
    if (this.length === 2) {
      ret += this.words[1] * 0x4000000;
    } else if (this.length === 3 && this.words[2] === 0x01) {
      // NOTE: at this stage it is known that the top bit is set
      ret += 0x10000000000000 + (this.words[1] * 0x4000000);
    } else if (this.length > 2) {
      assert(false, 'Number can only safely store up to 53 bits');
    }
    return (this.negative !== 0) ? -ret : ret;
  };

  BN.prototype.toJSON = function toJSON () {
    return this.toString(16);
  };

  BN.prototype.toBuffer = function toBuffer (endian, length) {
    assert(typeof Buffer !== 'undefined');
    return this.toArrayLike(Buffer, endian, length);
  };

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    this.strip();
    var littleEndian = endian === 'le';
    var res = new ArrayType(reqLength);

    var b, i;
    var q = this.clone();
    if (!littleEndian) {
      // Assume big-endian
      for (i = 0; i < reqLength - byteLength; i++) {
        res[i] = 0;
      }

      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[reqLength - i - 1] = b;
      }
    } else {
      for (i = 0; !q.isZero(); i++) {
        b = q.andln(0xff);
        q.iushrn(8);

        res[i] = b;
      }

      for (; i < reqLength; i++) {
        res[i] = 0;
      }
    }

    return res;
  };

  if (Math.clz32) {
    BN.prototype._countBits = function _countBits (w) {
      return 32 - Math.clz32(w);
    };
  } else {
    BN.prototype._countBits = function _countBits (w) {
      var t = w;
      var r = 0;
      if (t >= 0x1000) {
        r += 13;
        t >>>= 13;
      }
      if (t >= 0x40) {
        r += 7;
        t >>>= 7;
      }
      if (t >= 0x8) {
        r += 4;
        t >>>= 4;
      }
      if (t >= 0x02) {
        r += 2;
        t >>>= 2;
      }
      return r + t;
    };
  }

  BN.prototype._zeroBits = function _zeroBits (w) {
    // Short-cut
    if (w === 0) return 26;

    var t = w;
    var r = 0;
    if ((t & 0x1fff) === 0) {
      r += 13;
      t >>>= 13;
    }
    if ((t & 0x7f) === 0) {
      r += 7;
      t >>>= 7;
    }
    if ((t & 0xf) === 0) {
      r += 4;
      t >>>= 4;
    }
    if ((t & 0x3) === 0) {
      r += 2;
      t >>>= 2;
    }
    if ((t & 0x1) === 0) {
      r++;
    }
    return r;
  };

  // Return number of used bits in a BN
  BN.prototype.bitLength = function bitLength () {
    var w = this.words[this.length - 1];
    var hi = this._countBits(w);
    return (this.length - 1) * 26 + hi;
  };

  function toBitArray (num) {
    var w = new Array(num.bitLength());

    for (var bit = 0; bit < w.length; bit++) {
      var off = (bit / 26) | 0;
      var wbit = bit % 26;

      w[bit] = (num.words[off] & (1 << wbit)) >>> wbit;
    }

    return w;
  }

  // Number of trailing zero bits
  BN.prototype.zeroBits = function zeroBits () {
    if (this.isZero()) return 0;

    var r = 0;
    for (var i = 0; i < this.length; i++) {
      var b = this._zeroBits(this.words[i]);
      r += b;
      if (b !== 26) break;
    }
    return r;
  };

  BN.prototype.byteLength = function byteLength () {
    return Math.ceil(this.bitLength() / 8);
  };

  BN.prototype.toTwos = function toTwos (width) {
    if (this.negative !== 0) {
      return this.abs().inotn(width).iaddn(1);
    }
    return this.clone();
  };

  BN.prototype.fromTwos = function fromTwos (width) {
    if (this.testn(width - 1)) {
      return this.notn(width).iaddn(1).ineg();
    }
    return this.clone();
  };

  BN.prototype.isNeg = function isNeg () {
    return this.negative !== 0;
  };

  // Return negative clone of `this`
  BN.prototype.neg = function neg () {
    return this.clone().ineg();
  };

  BN.prototype.ineg = function ineg () {
    if (!this.isZero()) {
      this.negative ^= 1;
    }

    return this;
  };

  // Or `num` with `this` in-place
  BN.prototype.iuor = function iuor (num) {
    while (this.length < num.length) {
      this.words[this.length++] = 0;
    }

    for (var i = 0; i < num.length; i++) {
      this.words[i] = this.words[i] | num.words[i];
    }

    return this.strip();
  };

  BN.prototype.ior = function ior (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuor(num);
  };

  // Or `num` with `this`
  BN.prototype.or = function or (num) {
    if (this.length > num.length) return this.clone().ior(num);
    return num.clone().ior(this);
  };

  BN.prototype.uor = function uor (num) {
    if (this.length > num.length) return this.clone().iuor(num);
    return num.clone().iuor(this);
  };

  // And `num` with `this` in-place
  BN.prototype.iuand = function iuand (num) {
    // b = min-length(num, this)
    var b;
    if (this.length > num.length) {
      b = num;
    } else {
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = this.words[i] & num.words[i];
    }

    this.length = b.length;

    return this.strip();
  };

  BN.prototype.iand = function iand (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuand(num);
  };

  // And `num` with `this`
  BN.prototype.and = function and (num) {
    if (this.length > num.length) return this.clone().iand(num);
    return num.clone().iand(this);
  };

  BN.prototype.uand = function uand (num) {
    if (this.length > num.length) return this.clone().iuand(num);
    return num.clone().iuand(this);
  };

  // Xor `num` with `this` in-place
  BN.prototype.iuxor = function iuxor (num) {
    // a.length > b.length
    var a;
    var b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    for (var i = 0; i < b.length; i++) {
      this.words[i] = a.words[i] ^ b.words[i];
    }

    if (this !== a) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = a.length;

    return this.strip();
  };

  BN.prototype.ixor = function ixor (num) {
    assert((this.negative | num.negative) === 0);
    return this.iuxor(num);
  };

  // Xor `num` with `this`
  BN.prototype.xor = function xor (num) {
    if (this.length > num.length) return this.clone().ixor(num);
    return num.clone().ixor(this);
  };

  BN.prototype.uxor = function uxor (num) {
    if (this.length > num.length) return this.clone().iuxor(num);
    return num.clone().iuxor(this);
  };

  // Not ``this`` with ``width`` bitwidth
  BN.prototype.inotn = function inotn (width) {
    assert(typeof width === 'number' && width >= 0);

    var bytesNeeded = Math.ceil(width / 26) | 0;
    var bitsLeft = width % 26;

    // Extend the buffer with leading zeroes
    this._expand(bytesNeeded);

    if (bitsLeft > 0) {
      bytesNeeded--;
    }

    // Handle complete words
    for (var i = 0; i < bytesNeeded; i++) {
      this.words[i] = ~this.words[i] & 0x3ffffff;
    }

    // Handle the residue
    if (bitsLeft > 0) {
      this.words[i] = ~this.words[i] & (0x3ffffff >> (26 - bitsLeft));
    }

    // And remove leading zeroes
    return this.strip();
  };

  BN.prototype.notn = function notn (width) {
    return this.clone().inotn(width);
  };

  // Set `bit` of `this`
  BN.prototype.setn = function setn (bit, val) {
    assert(typeof bit === 'number' && bit >= 0);

    var off = (bit / 26) | 0;
    var wbit = bit % 26;

    this._expand(off + 1);

    if (val) {
      this.words[off] = this.words[off] | (1 << wbit);
    } else {
      this.words[off] = this.words[off] & ~(1 << wbit);
    }

    return this.strip();
  };

  // Add `num` to `this` in-place
  BN.prototype.iadd = function iadd (num) {
    var r;

    // negative + positive
    if (this.negative !== 0 && num.negative === 0) {
      this.negative = 0;
      r = this.isub(num);
      this.negative ^= 1;
      return this._normSign();

    // positive + negative
    } else if (this.negative === 0 && num.negative !== 0) {
      num.negative = 0;
      r = this.isub(num);
      num.negative = 1;
      return r._normSign();
    }

    // a.length > b.length
    var a, b;
    if (this.length > num.length) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      this.words[i] = r & 0x3ffffff;
      carry = r >>> 26;
    }

    this.length = a.length;
    if (carry !== 0) {
      this.words[this.length] = carry;
      this.length++;
    // Copy the rest of the words
    } else if (a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    return this;
  };

  // Add `num` to `this`
  BN.prototype.add = function add (num) {
    var res;
    if (num.negative !== 0 && this.negative === 0) {
      num.negative = 0;
      res = this.sub(num);
      num.negative ^= 1;
      return res;
    } else if (num.negative === 0 && this.negative !== 0) {
      this.negative = 0;
      res = num.sub(this);
      this.negative = 1;
      return res;
    }

    if (this.length > num.length) return this.clone().iadd(num);

    return num.clone().iadd(this);
  };

  // Subtract `num` from `this` in-place
  BN.prototype.isub = function isub (num) {
    // this - (-num) = this + num
    if (num.negative !== 0) {
      num.negative = 0;
      var r = this.iadd(num);
      num.negative = 1;
      return r._normSign();

    // -this - num = -(this + num)
    } else if (this.negative !== 0) {
      this.negative = 0;
      this.iadd(num);
      this.negative = 1;
      return this._normSign();
    }

    // At this point both numbers are positive
    var cmp = this.cmp(num);

    // Optimization - zeroify
    if (cmp === 0) {
      this.negative = 0;
      this.length = 1;
      this.words[0] = 0;
      return this;
    }

    // a > b
    var a, b;
    if (cmp > 0) {
      a = this;
      b = num;
    } else {
      a = num;
      b = this;
    }

    var carry = 0;
    for (var i = 0; i < b.length; i++) {
      r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }
    for (; carry !== 0 && i < a.length; i++) {
      r = (a.words[i] | 0) + carry;
      carry = r >> 26;
      this.words[i] = r & 0x3ffffff;
    }

    // Copy rest of the words
    if (carry === 0 && i < a.length && a !== this) {
      for (; i < a.length; i++) {
        this.words[i] = a.words[i];
      }
    }

    this.length = Math.max(this.length, i);

    if (a !== this) {
      this.negative = 1;
    }

    return this.strip();
  };

  // Subtract `num` from `this`
  BN.prototype.sub = function sub (num) {
    return this.clone().isub(num);
  };

  function smallMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    var len = (self.length + num.length) | 0;
    out.length = len;
    len = (len - 1) | 0;

    // Peel one iteration (compiler can't do it, because of code complexity)
    var a = self.words[0] | 0;
    var b = num.words[0] | 0;
    var r = a * b;

    var lo = r & 0x3ffffff;
    var carry = (r / 0x4000000) | 0;
    out.words[0] = lo;

    for (var k = 1; k < len; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = carry >>> 26;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = (k - j) | 0;
        a = self.words[i] | 0;
        b = num.words[j] | 0;
        r = a * b + rword;
        ncarry += (r / 0x4000000) | 0;
        rword = r & 0x3ffffff;
      }
      out.words[k] = rword | 0;
      carry = ncarry | 0;
    }
    if (carry !== 0) {
      out.words[k] = carry | 0;
    } else {
      out.length--;
    }

    return out.strip();
  }

  // TODO(indutny): it may be reasonable to omit it for users who don't need
  // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
  // multiplication (like elliptic secp256k1).
  var comb10MulTo = function comb10MulTo (self, num, out) {
    var a = self.words;
    var b = num.words;
    var o = out.words;
    var c = 0;
    var lo;
    var mid;
    var hi;
    var a0 = a[0] | 0;
    var al0 = a0 & 0x1fff;
    var ah0 = a0 >>> 13;
    var a1 = a[1] | 0;
    var al1 = a1 & 0x1fff;
    var ah1 = a1 >>> 13;
    var a2 = a[2] | 0;
    var al2 = a2 & 0x1fff;
    var ah2 = a2 >>> 13;
    var a3 = a[3] | 0;
    var al3 = a3 & 0x1fff;
    var ah3 = a3 >>> 13;
    var a4 = a[4] | 0;
    var al4 = a4 & 0x1fff;
    var ah4 = a4 >>> 13;
    var a5 = a[5] | 0;
    var al5 = a5 & 0x1fff;
    var ah5 = a5 >>> 13;
    var a6 = a[6] | 0;
    var al6 = a6 & 0x1fff;
    var ah6 = a6 >>> 13;
    var a7 = a[7] | 0;
    var al7 = a7 & 0x1fff;
    var ah7 = a7 >>> 13;
    var a8 = a[8] | 0;
    var al8 = a8 & 0x1fff;
    var ah8 = a8 >>> 13;
    var a9 = a[9] | 0;
    var al9 = a9 & 0x1fff;
    var ah9 = a9 >>> 13;
    var b0 = b[0] | 0;
    var bl0 = b0 & 0x1fff;
    var bh0 = b0 >>> 13;
    var b1 = b[1] | 0;
    var bl1 = b1 & 0x1fff;
    var bh1 = b1 >>> 13;
    var b2 = b[2] | 0;
    var bl2 = b2 & 0x1fff;
    var bh2 = b2 >>> 13;
    var b3 = b[3] | 0;
    var bl3 = b3 & 0x1fff;
    var bh3 = b3 >>> 13;
    var b4 = b[4] | 0;
    var bl4 = b4 & 0x1fff;
    var bh4 = b4 >>> 13;
    var b5 = b[5] | 0;
    var bl5 = b5 & 0x1fff;
    var bh5 = b5 >>> 13;
    var b6 = b[6] | 0;
    var bl6 = b6 & 0x1fff;
    var bh6 = b6 >>> 13;
    var b7 = b[7] | 0;
    var bl7 = b7 & 0x1fff;
    var bh7 = b7 >>> 13;
    var b8 = b[8] | 0;
    var bl8 = b8 & 0x1fff;
    var bh8 = b8 >>> 13;
    var b9 = b[9] | 0;
    var bl9 = b9 & 0x1fff;
    var bh9 = b9 >>> 13;

    out.negative = self.negative ^ num.negative;
    out.length = 19;
    /* k = 0 */
    lo = Math.imul(al0, bl0);
    mid = Math.imul(al0, bh0);
    mid = (mid + Math.imul(ah0, bl0)) | 0;
    hi = Math.imul(ah0, bh0);
    var w0 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w0 >>> 26)) | 0;
    w0 &= 0x3ffffff;
    /* k = 1 */
    lo = Math.imul(al1, bl0);
    mid = Math.imul(al1, bh0);
    mid = (mid + Math.imul(ah1, bl0)) | 0;
    hi = Math.imul(ah1, bh0);
    lo = (lo + Math.imul(al0, bl1)) | 0;
    mid = (mid + Math.imul(al0, bh1)) | 0;
    mid = (mid + Math.imul(ah0, bl1)) | 0;
    hi = (hi + Math.imul(ah0, bh1)) | 0;
    var w1 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w1 >>> 26)) | 0;
    w1 &= 0x3ffffff;
    /* k = 2 */
    lo = Math.imul(al2, bl0);
    mid = Math.imul(al2, bh0);
    mid = (mid + Math.imul(ah2, bl0)) | 0;
    hi = Math.imul(ah2, bh0);
    lo = (lo + Math.imul(al1, bl1)) | 0;
    mid = (mid + Math.imul(al1, bh1)) | 0;
    mid = (mid + Math.imul(ah1, bl1)) | 0;
    hi = (hi + Math.imul(ah1, bh1)) | 0;
    lo = (lo + Math.imul(al0, bl2)) | 0;
    mid = (mid + Math.imul(al0, bh2)) | 0;
    mid = (mid + Math.imul(ah0, bl2)) | 0;
    hi = (hi + Math.imul(ah0, bh2)) | 0;
    var w2 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w2 >>> 26)) | 0;
    w2 &= 0x3ffffff;
    /* k = 3 */
    lo = Math.imul(al3, bl0);
    mid = Math.imul(al3, bh0);
    mid = (mid + Math.imul(ah3, bl0)) | 0;
    hi = Math.imul(ah3, bh0);
    lo = (lo + Math.imul(al2, bl1)) | 0;
    mid = (mid + Math.imul(al2, bh1)) | 0;
    mid = (mid + Math.imul(ah2, bl1)) | 0;
    hi = (hi + Math.imul(ah2, bh1)) | 0;
    lo = (lo + Math.imul(al1, bl2)) | 0;
    mid = (mid + Math.imul(al1, bh2)) | 0;
    mid = (mid + Math.imul(ah1, bl2)) | 0;
    hi = (hi + Math.imul(ah1, bh2)) | 0;
    lo = (lo + Math.imul(al0, bl3)) | 0;
    mid = (mid + Math.imul(al0, bh3)) | 0;
    mid = (mid + Math.imul(ah0, bl3)) | 0;
    hi = (hi + Math.imul(ah0, bh3)) | 0;
    var w3 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w3 >>> 26)) | 0;
    w3 &= 0x3ffffff;
    /* k = 4 */
    lo = Math.imul(al4, bl0);
    mid = Math.imul(al4, bh0);
    mid = (mid + Math.imul(ah4, bl0)) | 0;
    hi = Math.imul(ah4, bh0);
    lo = (lo + Math.imul(al3, bl1)) | 0;
    mid = (mid + Math.imul(al3, bh1)) | 0;
    mid = (mid + Math.imul(ah3, bl1)) | 0;
    hi = (hi + Math.imul(ah3, bh1)) | 0;
    lo = (lo + Math.imul(al2, bl2)) | 0;
    mid = (mid + Math.imul(al2, bh2)) | 0;
    mid = (mid + Math.imul(ah2, bl2)) | 0;
    hi = (hi + Math.imul(ah2, bh2)) | 0;
    lo = (lo + Math.imul(al1, bl3)) | 0;
    mid = (mid + Math.imul(al1, bh3)) | 0;
    mid = (mid + Math.imul(ah1, bl3)) | 0;
    hi = (hi + Math.imul(ah1, bh3)) | 0;
    lo = (lo + Math.imul(al0, bl4)) | 0;
    mid = (mid + Math.imul(al0, bh4)) | 0;
    mid = (mid + Math.imul(ah0, bl4)) | 0;
    hi = (hi + Math.imul(ah0, bh4)) | 0;
    var w4 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w4 >>> 26)) | 0;
    w4 &= 0x3ffffff;
    /* k = 5 */
    lo = Math.imul(al5, bl0);
    mid = Math.imul(al5, bh0);
    mid = (mid + Math.imul(ah5, bl0)) | 0;
    hi = Math.imul(ah5, bh0);
    lo = (lo + Math.imul(al4, bl1)) | 0;
    mid = (mid + Math.imul(al4, bh1)) | 0;
    mid = (mid + Math.imul(ah4, bl1)) | 0;
    hi = (hi + Math.imul(ah4, bh1)) | 0;
    lo = (lo + Math.imul(al3, bl2)) | 0;
    mid = (mid + Math.imul(al3, bh2)) | 0;
    mid = (mid + Math.imul(ah3, bl2)) | 0;
    hi = (hi + Math.imul(ah3, bh2)) | 0;
    lo = (lo + Math.imul(al2, bl3)) | 0;
    mid = (mid + Math.imul(al2, bh3)) | 0;
    mid = (mid + Math.imul(ah2, bl3)) | 0;
    hi = (hi + Math.imul(ah2, bh3)) | 0;
    lo = (lo + Math.imul(al1, bl4)) | 0;
    mid = (mid + Math.imul(al1, bh4)) | 0;
    mid = (mid + Math.imul(ah1, bl4)) | 0;
    hi = (hi + Math.imul(ah1, bh4)) | 0;
    lo = (lo + Math.imul(al0, bl5)) | 0;
    mid = (mid + Math.imul(al0, bh5)) | 0;
    mid = (mid + Math.imul(ah0, bl5)) | 0;
    hi = (hi + Math.imul(ah0, bh5)) | 0;
    var w5 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w5 >>> 26)) | 0;
    w5 &= 0x3ffffff;
    /* k = 6 */
    lo = Math.imul(al6, bl0);
    mid = Math.imul(al6, bh0);
    mid = (mid + Math.imul(ah6, bl0)) | 0;
    hi = Math.imul(ah6, bh0);
    lo = (lo + Math.imul(al5, bl1)) | 0;
    mid = (mid + Math.imul(al5, bh1)) | 0;
    mid = (mid + Math.imul(ah5, bl1)) | 0;
    hi = (hi + Math.imul(ah5, bh1)) | 0;
    lo = (lo + Math.imul(al4, bl2)) | 0;
    mid = (mid + Math.imul(al4, bh2)) | 0;
    mid = (mid + Math.imul(ah4, bl2)) | 0;
    hi = (hi + Math.imul(ah4, bh2)) | 0;
    lo = (lo + Math.imul(al3, bl3)) | 0;
    mid = (mid + Math.imul(al3, bh3)) | 0;
    mid = (mid + Math.imul(ah3, bl3)) | 0;
    hi = (hi + Math.imul(ah3, bh3)) | 0;
    lo = (lo + Math.imul(al2, bl4)) | 0;
    mid = (mid + Math.imul(al2, bh4)) | 0;
    mid = (mid + Math.imul(ah2, bl4)) | 0;
    hi = (hi + Math.imul(ah2, bh4)) | 0;
    lo = (lo + Math.imul(al1, bl5)) | 0;
    mid = (mid + Math.imul(al1, bh5)) | 0;
    mid = (mid + Math.imul(ah1, bl5)) | 0;
    hi = (hi + Math.imul(ah1, bh5)) | 0;
    lo = (lo + Math.imul(al0, bl6)) | 0;
    mid = (mid + Math.imul(al0, bh6)) | 0;
    mid = (mid + Math.imul(ah0, bl6)) | 0;
    hi = (hi + Math.imul(ah0, bh6)) | 0;
    var w6 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w6 >>> 26)) | 0;
    w6 &= 0x3ffffff;
    /* k = 7 */
    lo = Math.imul(al7, bl0);
    mid = Math.imul(al7, bh0);
    mid = (mid + Math.imul(ah7, bl0)) | 0;
    hi = Math.imul(ah7, bh0);
    lo = (lo + Math.imul(al6, bl1)) | 0;
    mid = (mid + Math.imul(al6, bh1)) | 0;
    mid = (mid + Math.imul(ah6, bl1)) | 0;
    hi = (hi + Math.imul(ah6, bh1)) | 0;
    lo = (lo + Math.imul(al5, bl2)) | 0;
    mid = (mid + Math.imul(al5, bh2)) | 0;
    mid = (mid + Math.imul(ah5, bl2)) | 0;
    hi = (hi + Math.imul(ah5, bh2)) | 0;
    lo = (lo + Math.imul(al4, bl3)) | 0;
    mid = (mid + Math.imul(al4, bh3)) | 0;
    mid = (mid + Math.imul(ah4, bl3)) | 0;
    hi = (hi + Math.imul(ah4, bh3)) | 0;
    lo = (lo + Math.imul(al3, bl4)) | 0;
    mid = (mid + Math.imul(al3, bh4)) | 0;
    mid = (mid + Math.imul(ah3, bl4)) | 0;
    hi = (hi + Math.imul(ah3, bh4)) | 0;
    lo = (lo + Math.imul(al2, bl5)) | 0;
    mid = (mid + Math.imul(al2, bh5)) | 0;
    mid = (mid + Math.imul(ah2, bl5)) | 0;
    hi = (hi + Math.imul(ah2, bh5)) | 0;
    lo = (lo + Math.imul(al1, bl6)) | 0;
    mid = (mid + Math.imul(al1, bh6)) | 0;
    mid = (mid + Math.imul(ah1, bl6)) | 0;
    hi = (hi + Math.imul(ah1, bh6)) | 0;
    lo = (lo + Math.imul(al0, bl7)) | 0;
    mid = (mid + Math.imul(al0, bh7)) | 0;
    mid = (mid + Math.imul(ah0, bl7)) | 0;
    hi = (hi + Math.imul(ah0, bh7)) | 0;
    var w7 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w7 >>> 26)) | 0;
    w7 &= 0x3ffffff;
    /* k = 8 */
    lo = Math.imul(al8, bl0);
    mid = Math.imul(al8, bh0);
    mid = (mid + Math.imul(ah8, bl0)) | 0;
    hi = Math.imul(ah8, bh0);
    lo = (lo + Math.imul(al7, bl1)) | 0;
    mid = (mid + Math.imul(al7, bh1)) | 0;
    mid = (mid + Math.imul(ah7, bl1)) | 0;
    hi = (hi + Math.imul(ah7, bh1)) | 0;
    lo = (lo + Math.imul(al6, bl2)) | 0;
    mid = (mid + Math.imul(al6, bh2)) | 0;
    mid = (mid + Math.imul(ah6, bl2)) | 0;
    hi = (hi + Math.imul(ah6, bh2)) | 0;
    lo = (lo + Math.imul(al5, bl3)) | 0;
    mid = (mid + Math.imul(al5, bh3)) | 0;
    mid = (mid + Math.imul(ah5, bl3)) | 0;
    hi = (hi + Math.imul(ah5, bh3)) | 0;
    lo = (lo + Math.imul(al4, bl4)) | 0;
    mid = (mid + Math.imul(al4, bh4)) | 0;
    mid = (mid + Math.imul(ah4, bl4)) | 0;
    hi = (hi + Math.imul(ah4, bh4)) | 0;
    lo = (lo + Math.imul(al3, bl5)) | 0;
    mid = (mid + Math.imul(al3, bh5)) | 0;
    mid = (mid + Math.imul(ah3, bl5)) | 0;
    hi = (hi + Math.imul(ah3, bh5)) | 0;
    lo = (lo + Math.imul(al2, bl6)) | 0;
    mid = (mid + Math.imul(al2, bh6)) | 0;
    mid = (mid + Math.imul(ah2, bl6)) | 0;
    hi = (hi + Math.imul(ah2, bh6)) | 0;
    lo = (lo + Math.imul(al1, bl7)) | 0;
    mid = (mid + Math.imul(al1, bh7)) | 0;
    mid = (mid + Math.imul(ah1, bl7)) | 0;
    hi = (hi + Math.imul(ah1, bh7)) | 0;
    lo = (lo + Math.imul(al0, bl8)) | 0;
    mid = (mid + Math.imul(al0, bh8)) | 0;
    mid = (mid + Math.imul(ah0, bl8)) | 0;
    hi = (hi + Math.imul(ah0, bh8)) | 0;
    var w8 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w8 >>> 26)) | 0;
    w8 &= 0x3ffffff;
    /* k = 9 */
    lo = Math.imul(al9, bl0);
    mid = Math.imul(al9, bh0);
    mid = (mid + Math.imul(ah9, bl0)) | 0;
    hi = Math.imul(ah9, bh0);
    lo = (lo + Math.imul(al8, bl1)) | 0;
    mid = (mid + Math.imul(al8, bh1)) | 0;
    mid = (mid + Math.imul(ah8, bl1)) | 0;
    hi = (hi + Math.imul(ah8, bh1)) | 0;
    lo = (lo + Math.imul(al7, bl2)) | 0;
    mid = (mid + Math.imul(al7, bh2)) | 0;
    mid = (mid + Math.imul(ah7, bl2)) | 0;
    hi = (hi + Math.imul(ah7, bh2)) | 0;
    lo = (lo + Math.imul(al6, bl3)) | 0;
    mid = (mid + Math.imul(al6, bh3)) | 0;
    mid = (mid + Math.imul(ah6, bl3)) | 0;
    hi = (hi + Math.imul(ah6, bh3)) | 0;
    lo = (lo + Math.imul(al5, bl4)) | 0;
    mid = (mid + Math.imul(al5, bh4)) | 0;
    mid = (mid + Math.imul(ah5, bl4)) | 0;
    hi = (hi + Math.imul(ah5, bh4)) | 0;
    lo = (lo + Math.imul(al4, bl5)) | 0;
    mid = (mid + Math.imul(al4, bh5)) | 0;
    mid = (mid + Math.imul(ah4, bl5)) | 0;
    hi = (hi + Math.imul(ah4, bh5)) | 0;
    lo = (lo + Math.imul(al3, bl6)) | 0;
    mid = (mid + Math.imul(al3, bh6)) | 0;
    mid = (mid + Math.imul(ah3, bl6)) | 0;
    hi = (hi + Math.imul(ah3, bh6)) | 0;
    lo = (lo + Math.imul(al2, bl7)) | 0;
    mid = (mid + Math.imul(al2, bh7)) | 0;
    mid = (mid + Math.imul(ah2, bl7)) | 0;
    hi = (hi + Math.imul(ah2, bh7)) | 0;
    lo = (lo + Math.imul(al1, bl8)) | 0;
    mid = (mid + Math.imul(al1, bh8)) | 0;
    mid = (mid + Math.imul(ah1, bl8)) | 0;
    hi = (hi + Math.imul(ah1, bh8)) | 0;
    lo = (lo + Math.imul(al0, bl9)) | 0;
    mid = (mid + Math.imul(al0, bh9)) | 0;
    mid = (mid + Math.imul(ah0, bl9)) | 0;
    hi = (hi + Math.imul(ah0, bh9)) | 0;
    var w9 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w9 >>> 26)) | 0;
    w9 &= 0x3ffffff;
    /* k = 10 */
    lo = Math.imul(al9, bl1);
    mid = Math.imul(al9, bh1);
    mid = (mid + Math.imul(ah9, bl1)) | 0;
    hi = Math.imul(ah9, bh1);
    lo = (lo + Math.imul(al8, bl2)) | 0;
    mid = (mid + Math.imul(al8, bh2)) | 0;
    mid = (mid + Math.imul(ah8, bl2)) | 0;
    hi = (hi + Math.imul(ah8, bh2)) | 0;
    lo = (lo + Math.imul(al7, bl3)) | 0;
    mid = (mid + Math.imul(al7, bh3)) | 0;
    mid = (mid + Math.imul(ah7, bl3)) | 0;
    hi = (hi + Math.imul(ah7, bh3)) | 0;
    lo = (lo + Math.imul(al6, bl4)) | 0;
    mid = (mid + Math.imul(al6, bh4)) | 0;
    mid = (mid + Math.imul(ah6, bl4)) | 0;
    hi = (hi + Math.imul(ah6, bh4)) | 0;
    lo = (lo + Math.imul(al5, bl5)) | 0;
    mid = (mid + Math.imul(al5, bh5)) | 0;
    mid = (mid + Math.imul(ah5, bl5)) | 0;
    hi = (hi + Math.imul(ah5, bh5)) | 0;
    lo = (lo + Math.imul(al4, bl6)) | 0;
    mid = (mid + Math.imul(al4, bh6)) | 0;
    mid = (mid + Math.imul(ah4, bl6)) | 0;
    hi = (hi + Math.imul(ah4, bh6)) | 0;
    lo = (lo + Math.imul(al3, bl7)) | 0;
    mid = (mid + Math.imul(al3, bh7)) | 0;
    mid = (mid + Math.imul(ah3, bl7)) | 0;
    hi = (hi + Math.imul(ah3, bh7)) | 0;
    lo = (lo + Math.imul(al2, bl8)) | 0;
    mid = (mid + Math.imul(al2, bh8)) | 0;
    mid = (mid + Math.imul(ah2, bl8)) | 0;
    hi = (hi + Math.imul(ah2, bh8)) | 0;
    lo = (lo + Math.imul(al1, bl9)) | 0;
    mid = (mid + Math.imul(al1, bh9)) | 0;
    mid = (mid + Math.imul(ah1, bl9)) | 0;
    hi = (hi + Math.imul(ah1, bh9)) | 0;
    var w10 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w10 >>> 26)) | 0;
    w10 &= 0x3ffffff;
    /* k = 11 */
    lo = Math.imul(al9, bl2);
    mid = Math.imul(al9, bh2);
    mid = (mid + Math.imul(ah9, bl2)) | 0;
    hi = Math.imul(ah9, bh2);
    lo = (lo + Math.imul(al8, bl3)) | 0;
    mid = (mid + Math.imul(al8, bh3)) | 0;
    mid = (mid + Math.imul(ah8, bl3)) | 0;
    hi = (hi + Math.imul(ah8, bh3)) | 0;
    lo = (lo + Math.imul(al7, bl4)) | 0;
    mid = (mid + Math.imul(al7, bh4)) | 0;
    mid = (mid + Math.imul(ah7, bl4)) | 0;
    hi = (hi + Math.imul(ah7, bh4)) | 0;
    lo = (lo + Math.imul(al6, bl5)) | 0;
    mid = (mid + Math.imul(al6, bh5)) | 0;
    mid = (mid + Math.imul(ah6, bl5)) | 0;
    hi = (hi + Math.imul(ah6, bh5)) | 0;
    lo = (lo + Math.imul(al5, bl6)) | 0;
    mid = (mid + Math.imul(al5, bh6)) | 0;
    mid = (mid + Math.imul(ah5, bl6)) | 0;
    hi = (hi + Math.imul(ah5, bh6)) | 0;
    lo = (lo + Math.imul(al4, bl7)) | 0;
    mid = (mid + Math.imul(al4, bh7)) | 0;
    mid = (mid + Math.imul(ah4, bl7)) | 0;
    hi = (hi + Math.imul(ah4, bh7)) | 0;
    lo = (lo + Math.imul(al3, bl8)) | 0;
    mid = (mid + Math.imul(al3, bh8)) | 0;
    mid = (mid + Math.imul(ah3, bl8)) | 0;
    hi = (hi + Math.imul(ah3, bh8)) | 0;
    lo = (lo + Math.imul(al2, bl9)) | 0;
    mid = (mid + Math.imul(al2, bh9)) | 0;
    mid = (mid + Math.imul(ah2, bl9)) | 0;
    hi = (hi + Math.imul(ah2, bh9)) | 0;
    var w11 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w11 >>> 26)) | 0;
    w11 &= 0x3ffffff;
    /* k = 12 */
    lo = Math.imul(al9, bl3);
    mid = Math.imul(al9, bh3);
    mid = (mid + Math.imul(ah9, bl3)) | 0;
    hi = Math.imul(ah9, bh3);
    lo = (lo + Math.imul(al8, bl4)) | 0;
    mid = (mid + Math.imul(al8, bh4)) | 0;
    mid = (mid + Math.imul(ah8, bl4)) | 0;
    hi = (hi + Math.imul(ah8, bh4)) | 0;
    lo = (lo + Math.imul(al7, bl5)) | 0;
    mid = (mid + Math.imul(al7, bh5)) | 0;
    mid = (mid + Math.imul(ah7, bl5)) | 0;
    hi = (hi + Math.imul(ah7, bh5)) | 0;
    lo = (lo + Math.imul(al6, bl6)) | 0;
    mid = (mid + Math.imul(al6, bh6)) | 0;
    mid = (mid + Math.imul(ah6, bl6)) | 0;
    hi = (hi + Math.imul(ah6, bh6)) | 0;
    lo = (lo + Math.imul(al5, bl7)) | 0;
    mid = (mid + Math.imul(al5, bh7)) | 0;
    mid = (mid + Math.imul(ah5, bl7)) | 0;
    hi = (hi + Math.imul(ah5, bh7)) | 0;
    lo = (lo + Math.imul(al4, bl8)) | 0;
    mid = (mid + Math.imul(al4, bh8)) | 0;
    mid = (mid + Math.imul(ah4, bl8)) | 0;
    hi = (hi + Math.imul(ah4, bh8)) | 0;
    lo = (lo + Math.imul(al3, bl9)) | 0;
    mid = (mid + Math.imul(al3, bh9)) | 0;
    mid = (mid + Math.imul(ah3, bl9)) | 0;
    hi = (hi + Math.imul(ah3, bh9)) | 0;
    var w12 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w12 >>> 26)) | 0;
    w12 &= 0x3ffffff;
    /* k = 13 */
    lo = Math.imul(al9, bl4);
    mid = Math.imul(al9, bh4);
    mid = (mid + Math.imul(ah9, bl4)) | 0;
    hi = Math.imul(ah9, bh4);
    lo = (lo + Math.imul(al8, bl5)) | 0;
    mid = (mid + Math.imul(al8, bh5)) | 0;
    mid = (mid + Math.imul(ah8, bl5)) | 0;
    hi = (hi + Math.imul(ah8, bh5)) | 0;
    lo = (lo + Math.imul(al7, bl6)) | 0;
    mid = (mid + Math.imul(al7, bh6)) | 0;
    mid = (mid + Math.imul(ah7, bl6)) | 0;
    hi = (hi + Math.imul(ah7, bh6)) | 0;
    lo = (lo + Math.imul(al6, bl7)) | 0;
    mid = (mid + Math.imul(al6, bh7)) | 0;
    mid = (mid + Math.imul(ah6, bl7)) | 0;
    hi = (hi + Math.imul(ah6, bh7)) | 0;
    lo = (lo + Math.imul(al5, bl8)) | 0;
    mid = (mid + Math.imul(al5, bh8)) | 0;
    mid = (mid + Math.imul(ah5, bl8)) | 0;
    hi = (hi + Math.imul(ah5, bh8)) | 0;
    lo = (lo + Math.imul(al4, bl9)) | 0;
    mid = (mid + Math.imul(al4, bh9)) | 0;
    mid = (mid + Math.imul(ah4, bl9)) | 0;
    hi = (hi + Math.imul(ah4, bh9)) | 0;
    var w13 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w13 >>> 26)) | 0;
    w13 &= 0x3ffffff;
    /* k = 14 */
    lo = Math.imul(al9, bl5);
    mid = Math.imul(al9, bh5);
    mid = (mid + Math.imul(ah9, bl5)) | 0;
    hi = Math.imul(ah9, bh5);
    lo = (lo + Math.imul(al8, bl6)) | 0;
    mid = (mid + Math.imul(al8, bh6)) | 0;
    mid = (mid + Math.imul(ah8, bl6)) | 0;
    hi = (hi + Math.imul(ah8, bh6)) | 0;
    lo = (lo + Math.imul(al7, bl7)) | 0;
    mid = (mid + Math.imul(al7, bh7)) | 0;
    mid = (mid + Math.imul(ah7, bl7)) | 0;
    hi = (hi + Math.imul(ah7, bh7)) | 0;
    lo = (lo + Math.imul(al6, bl8)) | 0;
    mid = (mid + Math.imul(al6, bh8)) | 0;
    mid = (mid + Math.imul(ah6, bl8)) | 0;
    hi = (hi + Math.imul(ah6, bh8)) | 0;
    lo = (lo + Math.imul(al5, bl9)) | 0;
    mid = (mid + Math.imul(al5, bh9)) | 0;
    mid = (mid + Math.imul(ah5, bl9)) | 0;
    hi = (hi + Math.imul(ah5, bh9)) | 0;
    var w14 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w14 >>> 26)) | 0;
    w14 &= 0x3ffffff;
    /* k = 15 */
    lo = Math.imul(al9, bl6);
    mid = Math.imul(al9, bh6);
    mid = (mid + Math.imul(ah9, bl6)) | 0;
    hi = Math.imul(ah9, bh6);
    lo = (lo + Math.imul(al8, bl7)) | 0;
    mid = (mid + Math.imul(al8, bh7)) | 0;
    mid = (mid + Math.imul(ah8, bl7)) | 0;
    hi = (hi + Math.imul(ah8, bh7)) | 0;
    lo = (lo + Math.imul(al7, bl8)) | 0;
    mid = (mid + Math.imul(al7, bh8)) | 0;
    mid = (mid + Math.imul(ah7, bl8)) | 0;
    hi = (hi + Math.imul(ah7, bh8)) | 0;
    lo = (lo + Math.imul(al6, bl9)) | 0;
    mid = (mid + Math.imul(al6, bh9)) | 0;
    mid = (mid + Math.imul(ah6, bl9)) | 0;
    hi = (hi + Math.imul(ah6, bh9)) | 0;
    var w15 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w15 >>> 26)) | 0;
    w15 &= 0x3ffffff;
    /* k = 16 */
    lo = Math.imul(al9, bl7);
    mid = Math.imul(al9, bh7);
    mid = (mid + Math.imul(ah9, bl7)) | 0;
    hi = Math.imul(ah9, bh7);
    lo = (lo + Math.imul(al8, bl8)) | 0;
    mid = (mid + Math.imul(al8, bh8)) | 0;
    mid = (mid + Math.imul(ah8, bl8)) | 0;
    hi = (hi + Math.imul(ah8, bh8)) | 0;
    lo = (lo + Math.imul(al7, bl9)) | 0;
    mid = (mid + Math.imul(al7, bh9)) | 0;
    mid = (mid + Math.imul(ah7, bl9)) | 0;
    hi = (hi + Math.imul(ah7, bh9)) | 0;
    var w16 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w16 >>> 26)) | 0;
    w16 &= 0x3ffffff;
    /* k = 17 */
    lo = Math.imul(al9, bl8);
    mid = Math.imul(al9, bh8);
    mid = (mid + Math.imul(ah9, bl8)) | 0;
    hi = Math.imul(ah9, bh8);
    lo = (lo + Math.imul(al8, bl9)) | 0;
    mid = (mid + Math.imul(al8, bh9)) | 0;
    mid = (mid + Math.imul(ah8, bl9)) | 0;
    hi = (hi + Math.imul(ah8, bh9)) | 0;
    var w17 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w17 >>> 26)) | 0;
    w17 &= 0x3ffffff;
    /* k = 18 */
    lo = Math.imul(al9, bl9);
    mid = Math.imul(al9, bh9);
    mid = (mid + Math.imul(ah9, bl9)) | 0;
    hi = Math.imul(ah9, bh9);
    var w18 = (((c + lo) | 0) + ((mid & 0x1fff) << 13)) | 0;
    c = (((hi + (mid >>> 13)) | 0) + (w18 >>> 26)) | 0;
    w18 &= 0x3ffffff;
    o[0] = w0;
    o[1] = w1;
    o[2] = w2;
    o[3] = w3;
    o[4] = w4;
    o[5] = w5;
    o[6] = w6;
    o[7] = w7;
    o[8] = w8;
    o[9] = w9;
    o[10] = w10;
    o[11] = w11;
    o[12] = w12;
    o[13] = w13;
    o[14] = w14;
    o[15] = w15;
    o[16] = w16;
    o[17] = w17;
    o[18] = w18;
    if (c !== 0) {
      o[19] = c;
      out.length++;
    }
    return out;
  };

  // Polyfill comb
  if (!Math.imul) {
    comb10MulTo = smallMulTo;
  }

  function bigMulTo (self, num, out) {
    out.negative = num.negative ^ self.negative;
    out.length = self.length + num.length;

    var carry = 0;
    var hncarry = 0;
    for (var k = 0; k < out.length - 1; k++) {
      // Sum all words with the same `i + j = k` and accumulate `ncarry`,
      // note that ncarry could be >= 0x3ffffff
      var ncarry = hncarry;
      hncarry = 0;
      var rword = carry & 0x3ffffff;
      var maxJ = Math.min(k, num.length - 1);
      for (var j = Math.max(0, k - self.length + 1); j <= maxJ; j++) {
        var i = k - j;
        var a = self.words[i] | 0;
        var b = num.words[j] | 0;
        var r = a * b;

        var lo = r & 0x3ffffff;
        ncarry = (ncarry + ((r / 0x4000000) | 0)) | 0;
        lo = (lo + rword) | 0;
        rword = lo & 0x3ffffff;
        ncarry = (ncarry + (lo >>> 26)) | 0;

        hncarry += ncarry >>> 26;
        ncarry &= 0x3ffffff;
      }
      out.words[k] = rword;
      carry = ncarry;
      ncarry = hncarry;
    }
    if (carry !== 0) {
      out.words[k] = carry;
    } else {
      out.length--;
    }

    return out.strip();
  }

  function jumboMulTo (self, num, out) {
    var fftm = new FFTM();
    return fftm.mulp(self, num, out);
  }

  BN.prototype.mulTo = function mulTo (num, out) {
    var res;
    var len = this.length + num.length;
    if (this.length === 10 && num.length === 10) {
      res = comb10MulTo(this, num, out);
    } else if (len < 63) {
      res = smallMulTo(this, num, out);
    } else if (len < 1024) {
      res = bigMulTo(this, num, out);
    } else {
      res = jumboMulTo(this, num, out);
    }

    return res;
  };

  // Cooley-Tukey algorithm for FFT
  // slightly revisited to rely on looping instead of recursion

  function FFTM (x, y) {
    this.x = x;
    this.y = y;
  }

  FFTM.prototype.makeRBT = function makeRBT (N) {
    var t = new Array(N);
    var l = BN.prototype._countBits(N) - 1;
    for (var i = 0; i < N; i++) {
      t[i] = this.revBin(i, l, N);
    }

    return t;
  };

  // Returns binary-reversed representation of `x`
  FFTM.prototype.revBin = function revBin (x, l, N) {
    if (x === 0 || x === N - 1) return x;

    var rb = 0;
    for (var i = 0; i < l; i++) {
      rb |= (x & 1) << (l - i - 1);
      x >>= 1;
    }

    return rb;
  };

  // Performs "tweedling" phase, therefore 'emulating'
  // behaviour of the recursive algorithm
  FFTM.prototype.permute = function permute (rbt, rws, iws, rtws, itws, N) {
    for (var i = 0; i < N; i++) {
      rtws[i] = rws[rbt[i]];
      itws[i] = iws[rbt[i]];
    }
  };

  FFTM.prototype.transform = function transform (rws, iws, rtws, itws, N, rbt) {
    this.permute(rbt, rws, iws, rtws, itws, N);

    for (var s = 1; s < N; s <<= 1) {
      var l = s << 1;

      var rtwdf = Math.cos(2 * Math.PI / l);
      var itwdf = Math.sin(2 * Math.PI / l);

      for (var p = 0; p < N; p += l) {
        var rtwdf_ = rtwdf;
        var itwdf_ = itwdf;

        for (var j = 0; j < s; j++) {
          var re = rtws[p + j];
          var ie = itws[p + j];

          var ro = rtws[p + j + s];
          var io = itws[p + j + s];

          var rx = rtwdf_ * ro - itwdf_ * io;

          io = rtwdf_ * io + itwdf_ * ro;
          ro = rx;

          rtws[p + j] = re + ro;
          itws[p + j] = ie + io;

          rtws[p + j + s] = re - ro;
          itws[p + j + s] = ie - io;

          /* jshint maxdepth : false */
          if (j !== l) {
            rx = rtwdf * rtwdf_ - itwdf * itwdf_;

            itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
            rtwdf_ = rx;
          }
        }
      }
    }
  };

  FFTM.prototype.guessLen13b = function guessLen13b (n, m) {
    var N = Math.max(m, n) | 1;
    var odd = N & 1;
    var i = 0;
    for (N = N / 2 | 0; N; N = N >>> 1) {
      i++;
    }

    return 1 << i + 1 + odd;
  };

  FFTM.prototype.conjugate = function conjugate (rws, iws, N) {
    if (N <= 1) return;

    for (var i = 0; i < N / 2; i++) {
      var t = rws[i];

      rws[i] = rws[N - i - 1];
      rws[N - i - 1] = t;

      t = iws[i];

      iws[i] = -iws[N - i - 1];
      iws[N - i - 1] = -t;
    }
  };

  FFTM.prototype.normalize13b = function normalize13b (ws, N) {
    var carry = 0;
    for (var i = 0; i < N / 2; i++) {
      var w = Math.round(ws[2 * i + 1] / N) * 0x2000 +
        Math.round(ws[2 * i] / N) +
        carry;

      ws[i] = w & 0x3ffffff;

      if (w < 0x4000000) {
        carry = 0;
      } else {
        carry = w / 0x4000000 | 0;
      }
    }

    return ws;
  };

  FFTM.prototype.convert13b = function convert13b (ws, len, rws, N) {
    var carry = 0;
    for (var i = 0; i < len; i++) {
      carry = carry + (ws[i] | 0);

      rws[2 * i] = carry & 0x1fff; carry = carry >>> 13;
      rws[2 * i + 1] = carry & 0x1fff; carry = carry >>> 13;
    }

    // Pad with zeroes
    for (i = 2 * len; i < N; ++i) {
      rws[i] = 0;
    }

    assert(carry === 0);
    assert((carry & ~0x1fff) === 0);
  };

  FFTM.prototype.stub = function stub (N) {
    var ph = new Array(N);
    for (var i = 0; i < N; i++) {
      ph[i] = 0;
    }

    return ph;
  };

  FFTM.prototype.mulp = function mulp (x, y, out) {
    var N = 2 * this.guessLen13b(x.length, y.length);

    var rbt = this.makeRBT(N);

    var _ = this.stub(N);

    var rws = new Array(N);
    var rwst = new Array(N);
    var iwst = new Array(N);

    var nrws = new Array(N);
    var nrwst = new Array(N);
    var niwst = new Array(N);

    var rmws = out.words;
    rmws.length = N;

    this.convert13b(x.words, x.length, rws, N);
    this.convert13b(y.words, y.length, nrws, N);

    this.transform(rws, _, rwst, iwst, N, rbt);
    this.transform(nrws, _, nrwst, niwst, N, rbt);

    for (var i = 0; i < N; i++) {
      var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
      iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
      rwst[i] = rx;
    }

    this.conjugate(rwst, iwst, N);
    this.transform(rwst, iwst, rmws, _, N, rbt);
    this.conjugate(rmws, _, N);
    this.normalize13b(rmws, N);

    out.negative = x.negative ^ y.negative;
    out.length = x.length + y.length;
    return out.strip();
  };

  // Multiply `this` by `num`
  BN.prototype.mul = function mul (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return this.mulTo(num, out);
  };

  // Multiply employing FFT
  BN.prototype.mulf = function mulf (num) {
    var out = new BN(null);
    out.words = new Array(this.length + num.length);
    return jumboMulTo(this, num, out);
  };

  // In-place Multiplication
  BN.prototype.imul = function imul (num) {
    return this.clone().mulTo(num, this);
  };

  BN.prototype.imuln = function imuln (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);

    // Carry
    var carry = 0;
    for (var i = 0; i < this.length; i++) {
      var w = (this.words[i] | 0) * num;
      var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
      carry >>= 26;
      carry += (w / 0x4000000) | 0;
      // NOTE: lo is 27bit maximum
      carry += lo >>> 26;
      this.words[i] = lo & 0x3ffffff;
    }

    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }

    return this;
  };

  BN.prototype.muln = function muln (num) {
    return this.clone().imuln(num);
  };

  // `this` * `this`
  BN.prototype.sqr = function sqr () {
    return this.mul(this);
  };

  // `this` * `this` in-place
  BN.prototype.isqr = function isqr () {
    return this.imul(this.clone());
  };

  // Math.pow(`this`, `num`)
  BN.prototype.pow = function pow (num) {
    var w = toBitArray(num);
    if (w.length === 0) return new BN(1);

    // Skip leading zeroes
    var res = this;
    for (var i = 0; i < w.length; i++, res = res.sqr()) {
      if (w[i] !== 0) break;
    }

    if (++i < w.length) {
      for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
        if (w[i] === 0) continue;

        res = res.mul(q);
      }
    }

    return res;
  };

  // Shift-left in-place
  BN.prototype.iushln = function iushln (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;
    var carryMask = (0x3ffffff >>> (26 - r)) << (26 - r);
    var i;

    if (r !== 0) {
      var carry = 0;

      for (i = 0; i < this.length; i++) {
        var newCarry = this.words[i] & carryMask;
        var c = ((this.words[i] | 0) - newCarry) << r;
        this.words[i] = c | carry;
        carry = newCarry >>> (26 - r);
      }

      if (carry) {
        this.words[i] = carry;
        this.length++;
      }
    }

    if (s !== 0) {
      for (i = this.length - 1; i >= 0; i--) {
        this.words[i + s] = this.words[i];
      }

      for (i = 0; i < s; i++) {
        this.words[i] = 0;
      }

      this.length += s;
    }

    return this.strip();
  };

  BN.prototype.ishln = function ishln (bits) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushln(bits);
  };

  // Shift-right in-place
  // NOTE: `hint` is a lowest bit before trailing zeroes
  // NOTE: if `extended` is present - it will be filled with destroyed bits
  BN.prototype.iushrn = function iushrn (bits, hint, extended) {
    assert(typeof bits === 'number' && bits >= 0);
    var h;
    if (hint) {
      h = (hint - (hint % 26)) / 26;
    } else {
      h = 0;
    }

    var r = bits % 26;
    var s = Math.min((bits - r) / 26, this.length);
    var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
    var maskedWords = extended;

    h -= s;
    h = Math.max(0, h);

    // Extended mode, copy masked part
    if (maskedWords) {
      for (var i = 0; i < s; i++) {
        maskedWords.words[i] = this.words[i];
      }
      maskedWords.length = s;
    }

    if (s === 0) {
      // No-op, we should not move anything at all
    } else if (this.length > s) {
      this.length -= s;
      for (i = 0; i < this.length; i++) {
        this.words[i] = this.words[i + s];
      }
    } else {
      this.words[0] = 0;
      this.length = 1;
    }

    var carry = 0;
    for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
      var word = this.words[i] | 0;
      this.words[i] = (carry << (26 - r)) | (word >>> r);
      carry = word & mask;
    }

    // Push carried bits as a mask
    if (maskedWords && carry !== 0) {
      maskedWords.words[maskedWords.length++] = carry;
    }

    if (this.length === 0) {
      this.words[0] = 0;
      this.length = 1;
    }

    return this.strip();
  };

  BN.prototype.ishrn = function ishrn (bits, hint, extended) {
    // TODO(indutny): implement me
    assert(this.negative === 0);
    return this.iushrn(bits, hint, extended);
  };

  // Shift-left
  BN.prototype.shln = function shln (bits) {
    return this.clone().ishln(bits);
  };

  BN.prototype.ushln = function ushln (bits) {
    return this.clone().iushln(bits);
  };

  // Shift-right
  BN.prototype.shrn = function shrn (bits) {
    return this.clone().ishrn(bits);
  };

  BN.prototype.ushrn = function ushrn (bits) {
    return this.clone().iushrn(bits);
  };

  // Test if n bit is set
  BN.prototype.testn = function testn (bit) {
    assert(typeof bit === 'number' && bit >= 0);
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) return false;

    // Check bit and return
    var w = this.words[s];

    return !!(w & q);
  };

  // Return only lowers bits of number (in-place)
  BN.prototype.imaskn = function imaskn (bits) {
    assert(typeof bits === 'number' && bits >= 0);
    var r = bits % 26;
    var s = (bits - r) / 26;

    assert(this.negative === 0, 'imaskn works only with positive numbers');

    if (this.length <= s) {
      return this;
    }

    if (r !== 0) {
      s++;
    }
    this.length = Math.min(s, this.length);

    if (r !== 0) {
      var mask = 0x3ffffff ^ ((0x3ffffff >>> r) << r);
      this.words[this.length - 1] &= mask;
    }

    return this.strip();
  };

  // Return only lowers bits of number
  BN.prototype.maskn = function maskn (bits) {
    return this.clone().imaskn(bits);
  };

  // Add plain number `num` to `this`
  BN.prototype.iaddn = function iaddn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.isubn(-num);

    // Possible sign change
    if (this.negative !== 0) {
      if (this.length === 1 && (this.words[0] | 0) < num) {
        this.words[0] = num - (this.words[0] | 0);
        this.negative = 0;
        return this;
      }

      this.negative = 0;
      this.isubn(num);
      this.negative = 1;
      return this;
    }

    // Add without checks
    return this._iaddn(num);
  };

  BN.prototype._iaddn = function _iaddn (num) {
    this.words[0] += num;

    // Carry
    for (var i = 0; i < this.length && this.words[i] >= 0x4000000; i++) {
      this.words[i] -= 0x4000000;
      if (i === this.length - 1) {
        this.words[i + 1] = 1;
      } else {
        this.words[i + 1]++;
      }
    }
    this.length = Math.max(this.length, i + 1);

    return this;
  };

  // Subtract plain number `num` from `this`
  BN.prototype.isubn = function isubn (num) {
    assert(typeof num === 'number');
    assert(num < 0x4000000);
    if (num < 0) return this.iaddn(-num);

    if (this.negative !== 0) {
      this.negative = 0;
      this.iaddn(num);
      this.negative = 1;
      return this;
    }

    this.words[0] -= num;

    if (this.length === 1 && this.words[0] < 0) {
      this.words[0] = -this.words[0];
      this.negative = 1;
    } else {
      // Carry
      for (var i = 0; i < this.length && this.words[i] < 0; i++) {
        this.words[i] += 0x4000000;
        this.words[i + 1] -= 1;
      }
    }

    return this.strip();
  };

  BN.prototype.addn = function addn (num) {
    return this.clone().iaddn(num);
  };

  BN.prototype.subn = function subn (num) {
    return this.clone().isubn(num);
  };

  BN.prototype.iabs = function iabs () {
    this.negative = 0;

    return this;
  };

  BN.prototype.abs = function abs () {
    return this.clone().iabs();
  };

  BN.prototype._ishlnsubmul = function _ishlnsubmul (num, mul, shift) {
    var len = num.length + shift;
    var i;

    this._expand(len);

    var w;
    var carry = 0;
    for (i = 0; i < num.length; i++) {
      w = (this.words[i + shift] | 0) + carry;
      var right = (num.words[i] | 0) * mul;
      w -= right & 0x3ffffff;
      carry = (w >> 26) - ((right / 0x4000000) | 0);
      this.words[i + shift] = w & 0x3ffffff;
    }
    for (; i < this.length - shift; i++) {
      w = (this.words[i + shift] | 0) + carry;
      carry = w >> 26;
      this.words[i + shift] = w & 0x3ffffff;
    }

    if (carry === 0) return this.strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this.strip();
  };

  BN.prototype._wordDiv = function _wordDiv (num, mode) {
    var shift = this.length - num.length;

    var a = this.clone();
    var b = num;

    // Normalize
    var bhi = b.words[b.length - 1] | 0;
    var bhiBits = this._countBits(bhi);
    shift = 26 - bhiBits;
    if (shift !== 0) {
      b = b.ushln(shift);
      a.iushln(shift);
      bhi = b.words[b.length - 1] | 0;
    }

    // Initialize quotient
    var m = a.length - b.length;
    var q;

    if (mode !== 'mod') {
      q = new BN(null);
      q.length = m + 1;
      q.words = new Array(q.length);
      for (var i = 0; i < q.length; i++) {
        q.words[i] = 0;
      }
    }

    var diff = a.clone()._ishlnsubmul(b, 1, m);
    if (diff.negative === 0) {
      a = diff;
      if (q) {
        q.words[m] = 1;
      }
    }

    for (var j = m - 1; j >= 0; j--) {
      var qj = (a.words[b.length + j] | 0) * 0x4000000 +
        (a.words[b.length + j - 1] | 0);

      // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
      // (0x7ffffff)
      qj = Math.min((qj / bhi) | 0, 0x3ffffff);

      a._ishlnsubmul(b, qj, j);
      while (a.negative !== 0) {
        qj--;
        a.negative = 0;
        a._ishlnsubmul(b, 1, j);
        if (!a.isZero()) {
          a.negative ^= 1;
        }
      }
      if (q) {
        q.words[j] = qj;
      }
    }
    if (q) {
      q.strip();
    }
    a.strip();

    // Denormalize
    if (mode !== 'div' && shift !== 0) {
      a.iushrn(shift);
    }

    return {
      div: q || null,
      mod: a
    };
  };

  // NOTE: 1) `mode` can be set to `mod` to request mod only,
  //       to `div` to request div only, or be absent to
  //       request both div & mod
  //       2) `positive` is true if unsigned mod is requested
  BN.prototype.divmod = function divmod (num, mode, positive) {
    assert(!num.isZero());

    if (this.isZero()) {
      return {
        div: new BN(0),
        mod: new BN(0)
      };
    }

    var div, mod, res;
    if (this.negative !== 0 && num.negative === 0) {
      res = this.neg().divmod(num, mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.iadd(num);
        }
      }

      return {
        div: div,
        mod: mod
      };
    }

    if (this.negative === 0 && num.negative !== 0) {
      res = this.divmod(num.neg(), mode);

      if (mode !== 'mod') {
        div = res.div.neg();
      }

      return {
        div: div,
        mod: res.mod
      };
    }

    if ((this.negative & num.negative) !== 0) {
      res = this.neg().divmod(num.neg(), mode);

      if (mode !== 'div') {
        mod = res.mod.neg();
        if (positive && mod.negative !== 0) {
          mod.isub(num);
        }
      }

      return {
        div: res.div,
        mod: mod
      };
    }

    // Both numbers are positive at this point

    // Strip both numbers to approximate shift value
    if (num.length > this.length || this.cmp(num) < 0) {
      return {
        div: new BN(0),
        mod: this
      };
    }

    // Very short reduction
    if (num.length === 1) {
      if (mode === 'div') {
        return {
          div: this.divn(num.words[0]),
          mod: null
        };
      }

      if (mode === 'mod') {
        return {
          div: null,
          mod: new BN(this.modn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modn(num.words[0]))
      };
    }

    return this._wordDiv(num, mode);
  };

  // Find `this` / `num`
  BN.prototype.div = function div (num) {
    return this.divmod(num, 'div', false).div;
  };

  // Find `this` % `num`
  BN.prototype.mod = function mod (num) {
    return this.divmod(num, 'mod', false).mod;
  };

  BN.prototype.umod = function umod (num) {
    return this.divmod(num, 'mod', true).mod;
  };

  // Find Round(`this` / `num`)
  BN.prototype.divRound = function divRound (num) {
    var dm = this.divmod(num);

    // Fast case - exact division
    if (dm.mod.isZero()) return dm.div;

    var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;

    var half = num.ushrn(1);
    var r2 = num.andln(1);
    var cmp = mod.cmp(half);

    // Round down
    if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modn = function modn (num) {
    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return acc;
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    return this.strip();
  };

  BN.prototype.divn = function divn (num) {
    return this.clone().idivn(num);
  };

  BN.prototype.egcd = function egcd (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var x = this;
    var y = p.clone();

    if (x.negative !== 0) {
      x = x.umod(p);
    } else {
      x = x.clone();
    }

    // A * x + B * y = x
    var A = new BN(1);
    var B = new BN(0);

    // C * x + D * y = y
    var C = new BN(0);
    var D = new BN(1);

    var g = 0;

    while (x.isEven() && y.isEven()) {
      x.iushrn(1);
      y.iushrn(1);
      ++g;
    }

    var yp = y.clone();
    var xp = x.clone();

    while (!x.isZero()) {
      for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        x.iushrn(i);
        while (i-- > 0) {
          if (A.isOdd() || B.isOdd()) {
            A.iadd(yp);
            B.isub(xp);
          }

          A.iushrn(1);
          B.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        y.iushrn(j);
        while (j-- > 0) {
          if (C.isOdd() || D.isOdd()) {
            C.iadd(yp);
            D.isub(xp);
          }

          C.iushrn(1);
          D.iushrn(1);
        }
      }

      if (x.cmp(y) >= 0) {
        x.isub(y);
        A.isub(C);
        B.isub(D);
      } else {
        y.isub(x);
        C.isub(A);
        D.isub(B);
      }
    }

    return {
      a: C,
      b: D,
      gcd: y.iushln(g)
    };
  };

  // This is reduced incarnation of the binary EEA
  // above, designated to invert members of the
  // _prime_ fields F(p) at a maximal speed
  BN.prototype._invmp = function _invmp (p) {
    assert(p.negative === 0);
    assert(!p.isZero());

    var a = this;
    var b = p.clone();

    if (a.negative !== 0) {
      a = a.umod(p);
    } else {
      a = a.clone();
    }

    var x1 = new BN(1);
    var x2 = new BN(0);

    var delta = b.clone();

    while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
      for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
      if (i > 0) {
        a.iushrn(i);
        while (i-- > 0) {
          if (x1.isOdd()) {
            x1.iadd(delta);
          }

          x1.iushrn(1);
        }
      }

      for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
      if (j > 0) {
        b.iushrn(j);
        while (j-- > 0) {
          if (x2.isOdd()) {
            x2.iadd(delta);
          }

          x2.iushrn(1);
        }
      }

      if (a.cmp(b) >= 0) {
        a.isub(b);
        x1.isub(x2);
      } else {
        b.isub(a);
        x2.isub(x1);
      }
    }

    var res;
    if (a.cmpn(1) === 0) {
      res = x1;
    } else {
      res = x2;
    }

    if (res.cmpn(0) < 0) {
      res.iadd(p);
    }

    return res;
  };

  BN.prototype.gcd = function gcd (num) {
    if (this.isZero()) return num.abs();
    if (num.isZero()) return this.abs();

    var a = this.clone();
    var b = num.clone();
    a.negative = 0;
    b.negative = 0;

    // Remove common factor of two
    for (var shift = 0; a.isEven() && b.isEven(); shift++) {
      a.iushrn(1);
      b.iushrn(1);
    }

    do {
      while (a.isEven()) {
        a.iushrn(1);
      }
      while (b.isEven()) {
        b.iushrn(1);
      }

      var r = a.cmp(b);
      if (r < 0) {
        // Swap `a` and `b` to make `a` always bigger than `b`
        var t = a;
        a = b;
        b = t;
      } else if (r === 0 || b.cmpn(1) === 0) {
        break;
      }

      a.isub(b);
    } while (true);

    return b.iushln(shift);
  };

  // Invert number in the field F(num)
  BN.prototype.invm = function invm (num) {
    return this.egcd(num).a.umod(num);
  };

  BN.prototype.isEven = function isEven () {
    return (this.words[0] & 1) === 0;
  };

  BN.prototype.isOdd = function isOdd () {
    return (this.words[0] & 1) === 1;
  };

  // And first word and num
  BN.prototype.andln = function andln (num) {
    return this.words[0] & num;
  };

  // Increment at the bit position in-line
  BN.prototype.bincn = function bincn (bit) {
    assert(typeof bit === 'number');
    var r = bit % 26;
    var s = (bit - r) / 26;
    var q = 1 << r;

    // Fast case: bit is much higher than all existing words
    if (this.length <= s) {
      this._expand(s + 1);
      this.words[s] |= q;
      return this;
    }

    // Add bit and propagate, if needed
    var carry = q;
    for (var i = s; carry !== 0 && i < this.length; i++) {
      var w = this.words[i] | 0;
      w += carry;
      carry = w >>> 26;
      w &= 0x3ffffff;
      this.words[i] = w;
    }
    if (carry !== 0) {
      this.words[i] = carry;
      this.length++;
    }
    return this;
  };

  BN.prototype.isZero = function isZero () {
    return this.length === 1 && this.words[0] === 0;
  };

  BN.prototype.cmpn = function cmpn (num) {
    var negative = num < 0;

    if (this.negative !== 0 && !negative) return -1;
    if (this.negative === 0 && negative) return 1;

    this.strip();

    var res;
    if (this.length > 1) {
      res = 1;
    } else {
      if (negative) {
        num = -num;
      }

      assert(num <= 0x3ffffff, 'Number is too big');

      var w = this.words[0] | 0;
      res = w === num ? 0 : w < num ? -1 : 1;
    }
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Compare two numbers and return:
  // 1 - if `this` > `num`
  // 0 - if `this` == `num`
  // -1 - if `this` < `num`
  BN.prototype.cmp = function cmp (num) {
    if (this.negative !== 0 && num.negative === 0) return -1;
    if (this.negative === 0 && num.negative !== 0) return 1;

    var res = this.ucmp(num);
    if (this.negative !== 0) return -res | 0;
    return res;
  };

  // Unsigned comparison
  BN.prototype.ucmp = function ucmp (num) {
    // At this point both numbers have the same sign
    if (this.length > num.length) return 1;
    if (this.length < num.length) return -1;

    var res = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var a = this.words[i] | 0;
      var b = num.words[i] | 0;

      if (a === b) continue;
      if (a < b) {
        res = -1;
      } else if (a > b) {
        res = 1;
      }
      break;
    }
    return res;
  };

  BN.prototype.gtn = function gtn (num) {
    return this.cmpn(num) === 1;
  };

  BN.prototype.gt = function gt (num) {
    return this.cmp(num) === 1;
  };

  BN.prototype.gten = function gten (num) {
    return this.cmpn(num) >= 0;
  };

  BN.prototype.gte = function gte (num) {
    return this.cmp(num) >= 0;
  };

  BN.prototype.ltn = function ltn (num) {
    return this.cmpn(num) === -1;
  };

  BN.prototype.lt = function lt (num) {
    return this.cmp(num) === -1;
  };

  BN.prototype.lten = function lten (num) {
    return this.cmpn(num) <= 0;
  };

  BN.prototype.lte = function lte (num) {
    return this.cmp(num) <= 0;
  };

  BN.prototype.eqn = function eqn (num) {
    return this.cmpn(num) === 0;
  };

  BN.prototype.eq = function eq (num) {
    return this.cmp(num) === 0;
  };

  //
  // A reduce context, could be using montgomery or something better, depending
  // on the `m` itself.
  //
  BN.red = function red (num) {
    return new Red(num);
  };

  BN.prototype.toRed = function toRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    assert(this.negative === 0, 'red works only with positives');
    return ctx.convertTo(this)._forceRed(ctx);
  };

  BN.prototype.fromRed = function fromRed () {
    assert(this.red, 'fromRed works only with numbers in reduction context');
    return this.red.convertFrom(this);
  };

  BN.prototype._forceRed = function _forceRed (ctx) {
    this.red = ctx;
    return this;
  };

  BN.prototype.forceRed = function forceRed (ctx) {
    assert(!this.red, 'Already a number in reduction context');
    return this._forceRed(ctx);
  };

  BN.prototype.redAdd = function redAdd (num) {
    assert(this.red, 'redAdd works only with red numbers');
    return this.red.add(this, num);
  };

  BN.prototype.redIAdd = function redIAdd (num) {
    assert(this.red, 'redIAdd works only with red numbers');
    return this.red.iadd(this, num);
  };

  BN.prototype.redSub = function redSub (num) {
    assert(this.red, 'redSub works only with red numbers');
    return this.red.sub(this, num);
  };

  BN.prototype.redISub = function redISub (num) {
    assert(this.red, 'redISub works only with red numbers');
    return this.red.isub(this, num);
  };

  BN.prototype.redShl = function redShl (num) {
    assert(this.red, 'redShl works only with red numbers');
    return this.red.shl(this, num);
  };

  BN.prototype.redMul = function redMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.mul(this, num);
  };

  BN.prototype.redIMul = function redIMul (num) {
    assert(this.red, 'redMul works only with red numbers');
    this.red._verify2(this, num);
    return this.red.imul(this, num);
  };

  BN.prototype.redSqr = function redSqr () {
    assert(this.red, 'redSqr works only with red numbers');
    this.red._verify1(this);
    return this.red.sqr(this);
  };

  BN.prototype.redISqr = function redISqr () {
    assert(this.red, 'redISqr works only with red numbers');
    this.red._verify1(this);
    return this.red.isqr(this);
  };

  // Square root over p
  BN.prototype.redSqrt = function redSqrt () {
    assert(this.red, 'redSqrt works only with red numbers');
    this.red._verify1(this);
    return this.red.sqrt(this);
  };

  BN.prototype.redInvm = function redInvm () {
    assert(this.red, 'redInvm works only with red numbers');
    this.red._verify1(this);
    return this.red.invm(this);
  };

  // Return negative clone of `this` % `red modulo`
  BN.prototype.redNeg = function redNeg () {
    assert(this.red, 'redNeg works only with red numbers');
    this.red._verify1(this);
    return this.red.neg(this);
  };

  BN.prototype.redPow = function redPow (num) {
    assert(this.red && !num.red, 'redPow(normalNum)');
    this.red._verify1(this);
    return this.red.pow(this, num);
  };

  // Prime numbers with efficient reduction
  var primes = {
    k256: null,
    p224: null,
    p192: null,
    p25519: null
  };

  // Pseudo-Mersenne prime
  function MPrime (name, p) {
    // P = 2 ^ N - K
    this.name = name;
    this.p = new BN(p, 16);
    this.n = this.p.bitLength();
    this.k = new BN(1).iushln(this.n).isub(this.p);

    this.tmp = this._tmp();
  }

  MPrime.prototype._tmp = function _tmp () {
    var tmp = new BN(null);
    tmp.words = new Array(Math.ceil(this.n / 13));
    return tmp;
  };

  MPrime.prototype.ireduce = function ireduce (num) {
    // Assumes that `num` is less than `P^2`
    // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
    var r = num;
    var rlen;

    do {
      this.split(r, this.tmp);
      r = this.imulK(r);
      r = r.iadd(this.tmp);
      rlen = r.bitLength();
    } while (rlen > this.n);

    var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
    if (cmp === 0) {
      r.words[0] = 0;
      r.length = 1;
    } else if (cmp > 0) {
      r.isub(this.p);
    } else {
      r.strip();
    }

    return r;
  };

  MPrime.prototype.split = function split (input, out) {
    input.iushrn(this.n, 0, out);
  };

  MPrime.prototype.imulK = function imulK (num) {
    return num.imul(this.k);
  };

  function K256 () {
    MPrime.call(
      this,
      'k256',
      'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
  }
  inherits(K256, MPrime);

  K256.prototype.split = function split (input, output) {
    // 256 = 9 * 26 + 22
    var mask = 0x3fffff;

    var outLen = Math.min(input.length, 9);
    for (var i = 0; i < outLen; i++) {
      output.words[i] = input.words[i];
    }
    output.length = outLen;

    if (input.length <= 9) {
      input.words[0] = 0;
      input.length = 1;
      return;
    }

    // Shift by 9 limbs
    var prev = input.words[9];
    output.words[output.length++] = prev & mask;

    for (i = 10; i < input.length; i++) {
      var next = input.words[i] | 0;
      input.words[i - 10] = ((next & mask) << 4) | (prev >>> 22);
      prev = next;
    }
    prev >>>= 22;
    input.words[i - 10] = prev;
    if (prev === 0 && input.length > 10) {
      input.length -= 10;
    } else {
      input.length -= 9;
    }
  };

  K256.prototype.imulK = function imulK (num) {
    // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
    num.words[num.length] = 0;
    num.words[num.length + 1] = 0;
    num.length += 2;

    // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
    var lo = 0;
    for (var i = 0; i < num.length; i++) {
      var w = num.words[i] | 0;
      lo += w * 0x3d1;
      num.words[i] = lo & 0x3ffffff;
      lo = w * 0x40 + ((lo / 0x4000000) | 0);
    }

    // Fast length reduction
    if (num.words[num.length - 1] === 0) {
      num.length--;
      if (num.words[num.length - 1] === 0) {
        num.length--;
      }
    }
    return num;
  };

  function P224 () {
    MPrime.call(
      this,
      'p224',
      'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
  }
  inherits(P224, MPrime);

  function P192 () {
    MPrime.call(
      this,
      'p192',
      'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
  }
  inherits(P192, MPrime);

  function P25519 () {
    // 2 ^ 255 - 19
    MPrime.call(
      this,
      '25519',
      '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
  }
  inherits(P25519, MPrime);

  P25519.prototype.imulK = function imulK (num) {
    // K = 0x13
    var carry = 0;
    for (var i = 0; i < num.length; i++) {
      var hi = (num.words[i] | 0) * 0x13 + carry;
      var lo = hi & 0x3ffffff;
      hi >>>= 26;

      num.words[i] = lo;
      carry = hi;
    }
    if (carry !== 0) {
      num.words[num.length++] = carry;
    }
    return num;
  };

  // Exported mostly for testing purposes, use plain name instead
  BN._prime = function prime (name) {
    // Cached version of prime
    if (primes[name]) return primes[name];

    var prime;
    if (name === 'k256') {
      prime = new K256();
    } else if (name === 'p224') {
      prime = new P224();
    } else if (name === 'p192') {
      prime = new P192();
    } else if (name === 'p25519') {
      prime = new P25519();
    } else {
      throw new Error('Unknown prime ' + name);
    }
    primes[name] = prime;

    return prime;
  };

  //
  // Base reduction engine
  //
  function Red (m) {
    if (typeof m === 'string') {
      var prime = BN._prime(m);
      this.m = prime.p;
      this.prime = prime;
    } else {
      assert(m.gtn(1), 'modulus must be greater than 1');
      this.m = m;
      this.prime = null;
    }
  }

  Red.prototype._verify1 = function _verify1 (a) {
    assert(a.negative === 0, 'red works only with positives');
    assert(a.red, 'red works only with red numbers');
  };

  Red.prototype._verify2 = function _verify2 (a, b) {
    assert((a.negative | b.negative) === 0, 'red works only with positives');
    assert(a.red && a.red === b.red,
      'red works only with red numbers');
  };

  Red.prototype.imod = function imod (a) {
    if (this.prime) return this.prime.ireduce(a)._forceRed(this);
    return a.umod(this.m)._forceRed(this);
  };

  Red.prototype.neg = function neg (a) {
    if (a.isZero()) {
      return a.clone();
    }

    return this.m.sub(a)._forceRed(this);
  };

  Red.prototype.add = function add (a, b) {
    this._verify2(a, b);

    var res = a.add(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.iadd = function iadd (a, b) {
    this._verify2(a, b);

    var res = a.iadd(b);
    if (res.cmp(this.m) >= 0) {
      res.isub(this.m);
    }
    return res;
  };

  Red.prototype.sub = function sub (a, b) {
    this._verify2(a, b);

    var res = a.sub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res._forceRed(this);
  };

  Red.prototype.isub = function isub (a, b) {
    this._verify2(a, b);

    var res = a.isub(b);
    if (res.cmpn(0) < 0) {
      res.iadd(this.m);
    }
    return res;
  };

  Red.prototype.shl = function shl (a, num) {
    this._verify1(a);
    return this.imod(a.ushln(num));
  };

  Red.prototype.imul = function imul (a, b) {
    this._verify2(a, b);
    return this.imod(a.imul(b));
  };

  Red.prototype.mul = function mul (a, b) {
    this._verify2(a, b);
    return this.imod(a.mul(b));
  };

  Red.prototype.isqr = function isqr (a) {
    return this.imul(a, a.clone());
  };

  Red.prototype.sqr = function sqr (a) {
    return this.mul(a, a);
  };

  Red.prototype.sqrt = function sqrt (a) {
    if (a.isZero()) return a.clone();

    var mod3 = this.m.andln(3);
    assert(mod3 % 2 === 1);

    // Fast case
    if (mod3 === 3) {
      var pow = this.m.add(new BN(1)).iushrn(2);
      return this.pow(a, pow);
    }

    // Tonelli-Shanks algorithm (Totally unoptimized and slow)
    //
    // Find Q and S, that Q * 2 ^ S = (P - 1)
    var q = this.m.subn(1);
    var s = 0;
    while (!q.isZero() && q.andln(1) === 0) {
      s++;
      q.iushrn(1);
    }
    assert(!q.isZero());

    var one = new BN(1).toRed(this);
    var nOne = one.redNeg();

    // Find quadratic non-residue
    // NOTE: Max is such because of generalized Riemann hypothesis.
    var lpow = this.m.subn(1).iushrn(1);
    var z = this.m.bitLength();
    z = new BN(2 * z * z).toRed(this);

    while (this.pow(z, lpow).cmp(nOne) !== 0) {
      z.redIAdd(nOne);
    }

    var c = this.pow(z, q);
    var r = this.pow(a, q.addn(1).iushrn(1));
    var t = this.pow(a, q);
    var m = s;
    while (t.cmp(one) !== 0) {
      var tmp = t;
      for (var i = 0; tmp.cmp(one) !== 0; i++) {
        tmp = tmp.redSqr();
      }
      assert(i < m);
      var b = this.pow(c, new BN(1).iushln(m - i - 1));

      r = r.redMul(b);
      c = b.redSqr();
      t = t.redMul(c);
      m = i;
    }

    return r;
  };

  Red.prototype.invm = function invm (a) {
    var inv = a._invmp(this.m);
    if (inv.negative !== 0) {
      inv.negative = 0;
      return this.imod(inv).redNeg();
    } else {
      return this.imod(inv);
    }
  };

  Red.prototype.pow = function pow (a, num) {
    if (num.isZero()) return new BN(1).toRed(this);
    if (num.cmpn(1) === 0) return a.clone();

    var windowSize = 4;
    var wnd = new Array(1 << windowSize);
    wnd[0] = new BN(1).toRed(this);
    wnd[1] = a;
    for (var i = 2; i < wnd.length; i++) {
      wnd[i] = this.mul(wnd[i - 1], a);
    }

    var res = wnd[0];
    var current = 0;
    var currentLen = 0;
    var start = num.bitLength() % 26;
    if (start === 0) {
      start = 26;
    }

    for (i = num.length - 1; i >= 0; i--) {
      var word = num.words[i];
      for (var j = start - 1; j >= 0; j--) {
        var bit = (word >> j) & 1;
        if (res !== wnd[0]) {
          res = this.sqr(res);
        }

        if (bit === 0 && current === 0) {
          currentLen = 0;
          continue;
        }

        current <<= 1;
        current |= bit;
        currentLen++;
        if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;

        res = this.mul(res, wnd[current]);
        currentLen = 0;
        current = 0;
      }
      start = 26;
    }

    return res;
  };

  Red.prototype.convertTo = function convertTo (num) {
    var r = num.umod(this.m);

    return r === num ? r.clone() : r;
  };

  Red.prototype.convertFrom = function convertFrom (num) {
    var res = num.clone();
    res.red = null;
    return res;
  };

  //
  // Montgomery method engine
  //

  BN.mont = function mont (num) {
    return new Mont(num);
  };

  function Mont (m) {
    Red.call(this, m);

    this.shift = this.m.bitLength();
    if (this.shift % 26 !== 0) {
      this.shift += 26 - (this.shift % 26);
    }

    this.r = new BN(1).iushln(this.shift);
    this.r2 = this.imod(this.r.sqr());
    this.rinv = this.r._invmp(this.m);

    this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
    this.minv = this.minv.umod(this.r);
    this.minv = this.r.sub(this.minv);
  }
  inherits(Mont, Red);

  Mont.prototype.convertTo = function convertTo (num) {
    return this.imod(num.ushln(this.shift));
  };

  Mont.prototype.convertFrom = function convertFrom (num) {
    var r = this.imod(num.mul(this.rinv));
    r.red = null;
    return r;
  };

  Mont.prototype.imul = function imul (a, b) {
    if (a.isZero() || b.isZero()) {
      a.words[0] = 0;
      a.length = 1;
      return a;
    }

    var t = a.imul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;

    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.mul = function mul (a, b) {
    if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);

    var t = a.mul(b);
    var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
    var u = t.isub(c).iushrn(this.shift);
    var res = u;
    if (u.cmp(this.m) >= 0) {
      res = u.isub(this.m);
    } else if (u.cmpn(0) < 0) {
      res = u.iadd(this.m);
    }

    return res._forceRed(this);
  };

  Mont.prototype.invm = function invm (a) {
    // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
    var res = this.imod(a._invmp(this.m).mul(this.r2));
    return res._forceRed(this);
  };
})(typeof module === 'undefined' || module, this);

},{"buffer":"node_modules/parcel-bundler/src/builtins/_empty.js"}],"node_modules/is-typedarray/index.js":[function(require,module,exports) {
module.exports      = isTypedArray
isTypedArray.strict = isStrictTypedArray
isTypedArray.loose  = isLooseTypedArray

var toString = Object.prototype.toString
var names = {
    '[object Int8Array]': true
  , '[object Int16Array]': true
  , '[object Int32Array]': true
  , '[object Uint8Array]': true
  , '[object Uint8ClampedArray]': true
  , '[object Uint16Array]': true
  , '[object Uint32Array]': true
  , '[object Float32Array]': true
  , '[object Float64Array]': true
}

function isTypedArray(arr) {
  return (
       isStrictTypedArray(arr)
    || isLooseTypedArray(arr)
  )
}

function isStrictTypedArray(arr) {
  return (
       arr instanceof Int8Array
    || arr instanceof Int16Array
    || arr instanceof Int32Array
    || arr instanceof Uint8Array
    || arr instanceof Uint8ClampedArray
    || arr instanceof Uint16Array
    || arr instanceof Uint32Array
    || arr instanceof Float32Array
    || arr instanceof Float64Array
  )
}

function isLooseTypedArray(arr) {
  return names[toString.call(arr)]
}

},{}],"node_modules/typedarray-to-buffer/index.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
/**
 * Convert a typed array to a Buffer without a copy
 *
 * Author:   Feross Aboukhadijeh <https://feross.org>
 * License:  MIT
 *
 * `npm install typedarray-to-buffer`
 */

var isTypedArray = require('is-typedarray').strict

module.exports = function typedarrayToBuffer (arr) {
  if (isTypedArray(arr)) {
    // To avoid a copy, use the typed array's underlying ArrayBuffer to back new Buffer
    var buf = Buffer.from(arr.buffer)
    if (arr.byteLength !== arr.buffer.byteLength) {
      // Respect the "view", i.e. byteOffset and byteLength, without doing a copy
      buf = buf.slice(arr.byteOffset, arr.byteOffset + arr.byteLength)
    }
    return buf
  } else {
    // Pass through all other types to `Buffer.from`
    return Buffer.from(arr)
  }
}

},{"is-typedarray":"node_modules/is-typedarray/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/@walletconnect/encoding/dist/esm/index.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHexPrefix = addHexPrefix;
exports.arrayToBinary = arrayToBinary;
exports.arrayToBuffer = arrayToBuffer;
exports.arrayToHex = arrayToHex;
exports.arrayToNumber = arrayToNumber;
exports.arrayToUtf8 = arrayToUtf8;
exports.binaryToArray = binaryToArray;
exports.binaryToBuffer = binaryToBuffer;
exports.binaryToHex = binaryToHex;
exports.binaryToNumber = binaryToNumber;
exports.binaryToUtf8 = binaryToUtf8;
exports.bufferToArray = bufferToArray;
exports.bufferToBinary = bufferToBinary;
exports.bufferToHex = bufferToHex;
exports.bufferToNumber = bufferToNumber;
exports.bufferToUtf8 = bufferToUtf8;
exports.calcByteLength = calcByteLength;
exports.concatArrays = concatArrays;
exports.concatBuffers = concatBuffers;
exports.getEncoding = getEncoding;
exports.getType = getType;
exports.hexToArray = hexToArray;
exports.hexToBinary = hexToBinary;
exports.hexToBuffer = hexToBuffer;
exports.hexToNumber = hexToNumber;
exports.hexToUtf8 = hexToUtf8;
exports.isArrayBuffer = isArrayBuffer;
exports.isBinaryString = isBinaryString;
exports.isBuffer = isBuffer;
exports.isHexString = isHexString;
exports.isTypedArray = isTypedArray;
exports.numberToArray = numberToArray;
exports.numberToBinary = numberToBinary;
exports.numberToBuffer = numberToBuffer;
exports.numberToHex = numberToHex;
exports.numberToUtf8 = numberToUtf8;
exports.padLeft = padLeft;
exports.padRight = padRight;
exports.removeHexLeadingZeros = removeHexLeadingZeros;
exports.removeHexPrefix = removeHexPrefix;
exports.sanitizeBytes = sanitizeBytes;
exports.sanitizeHex = sanitizeHex;
exports.splitBytes = splitBytes;
exports.swapBytes = swapBytes;
exports.swapHex = swapHex;
exports.trimLeft = trimLeft;
exports.trimRight = trimRight;
exports.utf8ToArray = utf8ToArray;
exports.utf8ToBinary = utf8ToBinary;
exports.utf8ToBuffer = utf8ToBuffer;
exports.utf8ToHex = utf8ToHex;
exports.utf8ToNumber = utf8ToNumber;

var _isTypedarray = _interopRequireDefault(require("is-typedarray"));

var _typedarrayToBuffer = _interopRequireDefault(require("typedarray-to-buffer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ENC_HEX = "hex";
const ENC_UTF8 = "utf8";
const ENC_BIN = "binary";
const TYPE_BUFFER = "buffer";
const TYPE_ARRAY = "array";
const TYPE_TYPED_ARRAY = "typed-array";
const TYPE_ARRAY_BUFFER = "array-buffer";
const STRING_ZERO = "0";

function bufferToArray(buf) {
  return new Uint8Array(buf);
}

function bufferToHex(buf, prefixed = false) {
  const hex = buf.toString(ENC_HEX);
  return prefixed ? addHexPrefix(hex) : hex;
}

function bufferToUtf8(buf) {
  return buf.toString(ENC_UTF8);
}

function bufferToNumber(buf) {
  return buf.readUIntBE(0, buf.length);
}

function bufferToBinary(buf) {
  return arrayToBinary(bufferToArray(buf));
}

function arrayToBuffer(arr) {
  return (0, _typedarrayToBuffer.default)(arr);
}

function arrayToHex(arr, prefixed = false) {
  return bufferToHex(arrayToBuffer(arr), prefixed);
}

function arrayToUtf8(arr) {
  return bufferToUtf8(arrayToBuffer(arr));
}

function arrayToNumber(arr) {
  return bufferToNumber(arrayToBuffer(arr));
}

function arrayToBinary(arr) {
  return Array.from(arr).map(numberToBinary).join("");
}

function hexToBuffer(hex) {
  return Buffer.from(removeHexPrefix(hex), ENC_HEX);
}

function hexToArray(hex) {
  return bufferToArray(hexToBuffer(hex));
}

function hexToUtf8(hex) {
  return bufferToUtf8(hexToBuffer(hex));
}

function hexToNumber(hex) {
  return arrayToNumber(hexToArray(hex));
}

function hexToBinary(hex) {
  return arrayToBinary(hexToArray(hex));
}

function utf8ToBuffer(utf8) {
  return Buffer.from(utf8, ENC_UTF8);
}

function utf8ToArray(utf8) {
  return bufferToArray(utf8ToBuffer(utf8));
}

function utf8ToHex(utf8, prefixed = false) {
  return bufferToHex(utf8ToBuffer(utf8), prefixed);
}

function utf8ToNumber(utf8) {
  const num = parseInt(utf8, 10);
  assert(isDefined(num), "Number can only safely store up to 53 bits");
  return num;
}

function utf8ToBinary(utf8) {
  return arrayToBinary(utf8ToArray(utf8));
}

function numberToBuffer(num) {
  return binaryToBuffer(numberToBinary(num));
}

function numberToArray(num) {
  return binaryToArray(numberToBinary(num));
}

function numberToHex(num, prefixed) {
  return binaryToHex(numberToBinary(num), prefixed);
}

function numberToUtf8(num) {
  return `${num}`;
}

function numberToBinary(num) {
  const bin = (num >>> 0).toString(2);
  return sanitizeBytes(bin);
}

function binaryToBuffer(bin) {
  return arrayToBuffer(binaryToArray(bin));
}

function binaryToArray(bin) {
  return new Uint8Array(splitBytes(bin).map(x => parseInt(x, 2)));
}

function binaryToHex(bin, prefixed) {
  return arrayToHex(binaryToArray(bin), prefixed);
}

function binaryToUtf8(bin) {
  return arrayToUtf8(binaryToArray(bin));
}

function binaryToNumber(bin) {
  return arrayToNumber(binaryToArray(bin));
}

function isBinaryString(str) {
  if (typeof str !== "string" || !new RegExp(/^[01]+$/).test(str)) {
    return false;
  }

  if (str.length % 8 !== 0) {
    return false;
  }

  return true;
}

function isHexString(str, length) {
  if (typeof str !== "string" || !str.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }

  if (length && str.length !== 2 + 2 * length) {
    return false;
  }

  return true;
}

function isBuffer(val) {
  return Buffer.isBuffer(val);
}

function isTypedArray(val) {
  return _isTypedarray.default.strict(val) && !isBuffer(val);
}

function isArrayBuffer(val) {
  return !isTypedArray(val) && !isBuffer(val) && typeof val.byteLength !== "undefined";
}

function getType(val) {
  if (isBuffer(val)) {
    return TYPE_BUFFER;
  } else if (isTypedArray(val)) {
    return TYPE_TYPED_ARRAY;
  } else if (isArrayBuffer(val)) {
    return TYPE_ARRAY_BUFFER;
  } else if (Array.isArray(val)) {
    return TYPE_ARRAY;
  } else {
    return typeof val;
  }
}

function getEncoding(str) {
  if (isBinaryString(str)) {
    return ENC_BIN;
  }

  if (isHexString(str)) {
    return ENC_HEX;
  }

  return ENC_UTF8;
}

function concatBuffers(...args) {
  const result = Buffer.concat(args);
  return result;
}

function concatArrays(...args) {
  let result = [];
  args.forEach(arg => result = result.concat(Array.from(arg)));
  return new Uint8Array([...result]);
}

function trimLeft(data, length) {
  const diff = data.length - length;

  if (diff > 0) {
    data = data.slice(diff);
  }

  return data;
}

function trimRight(data, length) {
  return data.slice(0, length);
}

function calcByteLength(length, byteSize = 8) {
  const remainder = length % byteSize;
  return remainder ? (length - remainder) / byteSize * byteSize + byteSize : length;
}

function splitBytes(str, byteSize = 8) {
  const bytes = sanitizeBytes(str).match(new RegExp(`.{${byteSize}}`, "gi"));
  return Array.from(bytes || []);
}

function swapBytes(str) {
  return splitBytes(str).map(reverseString).join("");
}

function swapHex(str) {
  return binaryToHex(swapBytes(hexToBinary(str)));
}

function sanitizeBytes(str, byteSize = 8, padding = STRING_ZERO) {
  return padLeft(str, calcByteLength(str.length, byteSize), padding);
}

function padLeft(str, length, padding = STRING_ZERO) {
  return padString(str, length, true, padding);
}

function padRight(str, length, padding = STRING_ZERO) {
  return padString(str, length, false, padding);
}

function removeHexPrefix(hex) {
  return hex.replace(/^0x/, "");
}

function addHexPrefix(hex) {
  return hex.startsWith("0x") ? hex : `0x${hex}`;
}

function sanitizeHex(hex) {
  hex = removeHexPrefix(hex);
  hex = sanitizeBytes(hex, 2);

  if (hex) {
    hex = addHexPrefix(hex);
  }

  return hex;
}

function removeHexLeadingZeros(hex) {
  const prefixed = hex.startsWith("0x");
  hex = removeHexPrefix(hex);
  hex = hex.startsWith(STRING_ZERO) ? hex.substring(1) : hex;
  return prefixed ? addHexPrefix(hex) : hex;
}

function isUndefined(value) {
  return typeof value === "undefined";
}

function isDefined(value) {
  return !isUndefined(value);
}

function assert(assertion, errorMessage) {
  if (!assertion) {
    throw new Error(errorMessage);
  }
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function padString(str, length, left, padding = STRING_ZERO) {
  const diff = length - str.length;
  let result = str;

  if (diff > 0) {
    const pad = padding.repeat(diff);
    result = left ? pad + str : str + pad;
  }

  return result;
}
},{"is-typedarray":"node_modules/is-typedarray/index.js","typedarray-to-buffer":"node_modules/typedarray-to-buffer/index.js","buffer":"node_modules/buffer/index.js"}],"node_modules/@walletconnect/utils/dist/esm/encoding.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatArrayBuffers = concatArrayBuffers;
exports.concatBuffers = concatBuffers;
exports.convertArrayBufferToBuffer = convertArrayBufferToBuffer;
exports.convertArrayBufferToHex = convertArrayBufferToHex;
exports.convertArrayBufferToNumber = convertArrayBufferToNumber;
exports.convertArrayBufferToUtf8 = convertArrayBufferToUtf8;
exports.convertBufferToArrayBuffer = convertBufferToArrayBuffer;
exports.convertBufferToHex = convertBufferToHex;
exports.convertBufferToNumber = convertBufferToNumber;
exports.convertBufferToUtf8 = convertBufferToUtf8;
exports.convertHexToArrayBuffer = convertHexToArrayBuffer;
exports.convertHexToBuffer = convertHexToBuffer;
exports.convertHexToNumber = convertHexToNumber;
exports.convertHexToUtf8 = convertHexToUtf8;
exports.convertNumberToArrayBuffer = convertNumberToArrayBuffer;
exports.convertNumberToBuffer = convertNumberToBuffer;
exports.convertNumberToHex = convertNumberToHex;
exports.convertNumberToUtf8 = convertNumberToUtf8;
exports.convertUtf8ToArrayBuffer = convertUtf8ToArrayBuffer;
exports.convertUtf8ToBuffer = convertUtf8ToBuffer;
exports.convertUtf8ToHex = convertUtf8ToHex;
exports.convertUtf8ToNumber = convertUtf8ToNumber;

var _bn = _interopRequireDefault(require("bn.js"));

var encoding = _interopRequireWildcard(require("@walletconnect/encoding"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertArrayBufferToBuffer(arrBuf) {
  return encoding.arrayToBuffer(new Uint8Array(arrBuf));
}

function convertArrayBufferToUtf8(arrBuf) {
  return encoding.arrayToUtf8(new Uint8Array(arrBuf));
}

function convertArrayBufferToHex(arrBuf, noPrefix) {
  return encoding.arrayToHex(new Uint8Array(arrBuf), !noPrefix);
}

function convertArrayBufferToNumber(arrBuf) {
  return encoding.arrayToNumber(new Uint8Array(arrBuf));
}

function concatArrayBuffers(...args) {
  return encoding.hexToArray(args.map(b => encoding.arrayToHex(new Uint8Array(b))).join("")).buffer;
}

function convertBufferToArrayBuffer(buf) {
  return encoding.bufferToArray(buf).buffer;
}

function convertBufferToUtf8(buf) {
  return encoding.bufferToUtf8(buf);
}

function convertBufferToHex(buf, noPrefix) {
  return encoding.bufferToHex(buf, !noPrefix);
}

function convertBufferToNumber(buf) {
  return encoding.bufferToNumber(buf);
}

function concatBuffers(...args) {
  return encoding.concatBuffers(...args);
}

function convertUtf8ToArrayBuffer(utf8) {
  return encoding.utf8ToArray(utf8).buffer;
}

function convertUtf8ToBuffer(utf8) {
  return encoding.utf8ToBuffer(utf8);
}

function convertUtf8ToHex(utf8, noPrefix) {
  return encoding.utf8ToHex(utf8, !noPrefix);
}

function convertUtf8ToNumber(utf8) {
  return new _bn.default(utf8, 10).toNumber();
}

function convertHexToBuffer(hex) {
  return encoding.hexToBuffer(hex);
}

function convertHexToArrayBuffer(hex) {
  return encoding.hexToArray(hex).buffer;
}

function convertHexToUtf8(hex) {
  return encoding.hexToUtf8(hex);
}

function convertHexToNumber(hex) {
  return new _bn.default(encoding.removeHexPrefix(hex), "hex").toNumber();
}

function convertNumberToBuffer(num) {
  return encoding.numberToBuffer(num);
}

function convertNumberToArrayBuffer(num) {
  return encoding.numberToArray(num).buffer;
}

function convertNumberToUtf8(num) {
  return new _bn.default(num).toString();
}

function convertNumberToHex(num, noPrefix) {
  const hex = encoding.removeHexPrefix(encoding.sanitizeHex(new _bn.default(num).toString(16)));
  return noPrefix ? hex : encoding.addHexPrefix(hex);
}
},{"bn.js":"node_modules/@walletconnect/utils/node_modules/bn.js/lib/bn.js","@walletconnect/encoding":"node_modules/@walletconnect/encoding/dist/esm/index.js"}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STANDARD_ERROR_MAP = exports.SERVER_ERROR_CODE_RANGE = exports.SERVER_ERROR = exports.RESERVED_ERROR_CODES = exports.PARSE_ERROR = exports.METHOD_NOT_FOUND = exports.INVALID_REQUEST = exports.INVALID_PARAMS = exports.INTERNAL_ERROR = void 0;
const PARSE_ERROR = "PARSE_ERROR";
exports.PARSE_ERROR = PARSE_ERROR;
const INVALID_REQUEST = "INVALID_REQUEST";
exports.INVALID_REQUEST = INVALID_REQUEST;
const METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
exports.METHOD_NOT_FOUND = METHOD_NOT_FOUND;
const INVALID_PARAMS = "INVALID_PARAMS";
exports.INVALID_PARAMS = INVALID_PARAMS;
const INTERNAL_ERROR = "INTERNAL_ERROR";
exports.INTERNAL_ERROR = INTERNAL_ERROR;
const SERVER_ERROR = "SERVER_ERROR";
exports.SERVER_ERROR = SERVER_ERROR;
const RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
exports.RESERVED_ERROR_CODES = RESERVED_ERROR_CODES;
const SERVER_ERROR_CODE_RANGE = [-32000, -32099];
exports.SERVER_ERROR_CODE_RANGE = SERVER_ERROR_CODE_RANGE;
const STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: {
    code: -32700,
    message: "Parse error"
  },
  [INVALID_REQUEST]: {
    code: -32600,
    message: "Invalid Request"
  },
  [METHOD_NOT_FOUND]: {
    code: -32601,
    message: "Method not found"
  },
  [INVALID_PARAMS]: {
    code: -32602,
    message: "Invalid params"
  },
  [INTERNAL_ERROR]: {
    code: -32603,
    message: "Internal error"
  },
  [SERVER_ERROR]: {
    code: -32000,
    message: "Server error"
  }
};
exports.STANDARD_ERROR_MAP = STANDARD_ERROR_MAP;
},{}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getError = getError;
exports.getErrorByCode = getErrorByCode;
exports.isReservedErrorCode = isReservedErrorCode;
exports.isServerErrorCode = isServerErrorCode;
exports.isValidErrorCode = isValidErrorCode;
exports.parseConnectionError = parseConnectionError;
exports.validateJsonRpcError = validateJsonRpcError;

var _constants = require("./constants");

function isServerErrorCode(code) {
  return code <= _constants.SERVER_ERROR_CODE_RANGE[0] && code >= _constants.SERVER_ERROR_CODE_RANGE[1];
}

function isReservedErrorCode(code) {
  return _constants.RESERVED_ERROR_CODES.includes(code);
}

function isValidErrorCode(code) {
  return typeof code === "number";
}

function getError(type) {
  if (!Object.keys(_constants.STANDARD_ERROR_MAP).includes(type)) {
    return _constants.STANDARD_ERROR_MAP[_constants.INTERNAL_ERROR];
  }

  return _constants.STANDARD_ERROR_MAP[type];
}

function getErrorByCode(code) {
  const match = Object.values(_constants.STANDARD_ERROR_MAP).find(e => e.code === code);

  if (!match) {
    return _constants.STANDARD_ERROR_MAP[_constants.INTERNAL_ERROR];
  }

  return match;
}

function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return {
      valid: false,
      error: "Missing code for JSON-RPC error"
    };
  }

  if (typeof response.error.message === "undefined") {
    return {
      valid: false,
      error: "Missing message for JSON-RPC error"
    };
  }

  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }

  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);

    if (error.message !== _constants.STANDARD_ERROR_MAP[_constants.INTERNAL_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }

  return {
    valid: true
  };
}

function parseConnectionError(e, url, type) {
  return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e;
}
},{"./constants":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js"}],"node_modules/@walletconnect/environment/dist/cjs/crypto.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
function getBrowerCrypto() {
    return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
}
exports.getBrowerCrypto = getBrowerCrypto;
function getSubtleCrypto() {
    const browserCrypto = getBrowerCrypto();
    return browserCrypto.subtle || browserCrypto.webkitSubtle;
}
exports.getSubtleCrypto = getSubtleCrypto;
function isBrowserCryptoAvailable() {
    return !!getBrowerCrypto() && !!getSubtleCrypto();
}
exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;

},{}],"node_modules/@walletconnect/environment/dist/cjs/env.js":[function(require,module,exports) {
var process = require("process");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
function isReactNative() {
    return (typeof document === "undefined" &&
        typeof navigator !== "undefined" &&
        navigator.product === "ReactNative");
}
exports.isReactNative = isReactNative;
function isNode() {
    return (typeof process !== "undefined" &&
        typeof process.versions !== "undefined" &&
        typeof process.versions.node !== "undefined");
}
exports.isNode = isNode;
function isBrowser() {
    return !isReactNative() && !isNode();
}
exports.isBrowser = isBrowser;

},{"process":"node_modules/process/browser.js"}],"node_modules/@walletconnect/environment/dist/cjs/index.js":[function(require,module,exports) {
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./crypto"), exports);
__exportStar(require("./env"), exports);

},{"./crypto":"node_modules/@walletconnect/environment/dist/cjs/crypto.js","./env":"node_modules/@walletconnect/environment/dist/cjs/env.js"}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  isNodeJs: true
};
exports.isNodeJs = void 0;

var _environment = require("@walletconnect/environment");

Object.keys(_environment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _environment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _environment[key];
    }
  });
});
const isNodeJs = _environment.isNode;
exports.isNodeJs = isNodeJs;
},{"@walletconnect/environment":"node_modules/@walletconnect/environment/dist/cjs/index.js"}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatErrorMessage = formatErrorMessage;
exports.formatJsonRpcError = formatJsonRpcError;
exports.formatJsonRpcRequest = formatJsonRpcRequest;
exports.formatJsonRpcResult = formatJsonRpcResult;
exports.payloadId = payloadId;

var _error = require("./error");

var _constants = require("./constants");

function payloadId() {
  const date = Date.now() * Math.pow(10, 3);
  const extra = Math.floor(Math.random() * Math.pow(10, 3));
  return date + extra;
}

function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}

function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}

function formatJsonRpcError(id, error) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error)
  };
}

function formatErrorMessage(error) {
  if (typeof error === "undefined") {
    return (0, _error.getError)(_constants.INTERNAL_ERROR);
  }

  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, (0, _error.getError)(_constants.SERVER_ERROR)), {
      message: error
    });
  }

  if ((0, _error.isReservedErrorCode)(error.code)) {
    error = (0, _error.getErrorByCode)(error.code);
  }

  return error;
}
},{"./error":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js","./constants":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js"}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidDefaultRoute = isValidDefaultRoute;
exports.isValidLeadingWildcardRoute = isValidLeadingWildcardRoute;
exports.isValidRoute = isValidRoute;
exports.isValidTrailingWildcardRoute = isValidTrailingWildcardRoute;
exports.isValidWildcardRoute = isValidWildcardRoute;

function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }

  if (/\W/g.test(route)) {
    return false;
  }

  return true;
}

function isValidDefaultRoute(route) {
  return route === "*";
}

function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }

  if (!route.includes("*")) {
    return false;
  }

  if (route.split("*").length !== 2) {
    return false;
  }

  if (route.split("*").filter(x => x.trim() === "").length !== 1) {
    return false;
  }

  return true;
}

function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}

function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}
},{}],"node_modules/@walletconnect/jsonrpc-types/dist/esm/jsonrpc.js":[function(require,module,exports) {

},{}],"node_modules/@walletconnect/jsonrpc-types/dist/esm/misc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IEvents = void 0;

class IEvents {}

exports.IEvents = IEvents;
},{}],"node_modules/@walletconnect/jsonrpc-types/dist/esm/provider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IJsonRpcProvider = exports.IJsonRpcConnection = exports.IBaseJsonRpcProvider = void 0;

var _misc = require("./misc");

class IJsonRpcConnection extends _misc.IEvents {
  constructor(opts) {
    super();
  }

}

exports.IJsonRpcConnection = IJsonRpcConnection;

class IBaseJsonRpcProvider extends _misc.IEvents {
  constructor() {
    super();
  }

}

exports.IBaseJsonRpcProvider = IBaseJsonRpcProvider;

class IJsonRpcProvider extends IBaseJsonRpcProvider {
  constructor(connection) {
    super();
  }

}

exports.IJsonRpcProvider = IJsonRpcProvider;
},{"./misc":"node_modules/@walletconnect/jsonrpc-types/dist/esm/misc.js"}],"node_modules/@walletconnect/jsonrpc-types/dist/esm/validator.js":[function(require,module,exports) {

},{}],"node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonrpc = require("./jsonrpc");

Object.keys(_jsonrpc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsonrpc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jsonrpc[key];
    }
  });
});

var _misc = require("./misc");

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _provider = require("./provider");

Object.keys(_provider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _provider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _provider[key];
    }
  });
});

var _validator = require("./validator");

Object.keys(_validator).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validator[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validator[key];
    }
  });
});
},{"./jsonrpc":"node_modules/@walletconnect/jsonrpc-types/dist/esm/jsonrpc.js","./misc":"node_modules/@walletconnect/jsonrpc-types/dist/esm/misc.js","./provider":"node_modules/@walletconnect/jsonrpc-types/dist/esm/provider.js","./validator":"node_modules/@walletconnect/jsonrpc-types/dist/esm/validator.js"}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonrpcTypes = require("@walletconnect/jsonrpc-types");

Object.keys(_jsonrpcTypes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _jsonrpcTypes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _jsonrpcTypes[key];
    }
  });
});
},{"@walletconnect/jsonrpc-types":"node_modules/@walletconnect/jsonrpc-types/dist/esm/index.js"}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHttpUrl = isHttpUrl;
exports.isLocalhostUrl = isLocalhostUrl;
exports.isWsUrl = isWsUrl;
const HTTP_REGEX = "^https?:";
const WS_REGEX = "^wss?:";

function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length) return;
  return matches[0];
}

function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined") return false;
  return new RegExp(regex).test(protocol);
}

function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}

function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}

function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}
},{}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isJsonRpcError = isJsonRpcError;
exports.isJsonRpcPayload = isJsonRpcPayload;
exports.isJsonRpcRequest = isJsonRpcRequest;
exports.isJsonRpcResponse = isJsonRpcResponse;
exports.isJsonRpcResult = isJsonRpcResult;
exports.isJsonRpcValidationInvalid = isJsonRpcValidationInvalid;

function isJsonRpcPayload(payload) {
  return "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}

function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}

function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}

function isJsonRpcResult(payload) {
  return "result" in payload;
}

function isJsonRpcError(payload) {
  return "error" in payload;
}

function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}
},{}],"node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _error = require("./error");

Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _error[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});

var _env = require("./env");

Object.keys(_env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _env[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _env[key];
    }
  });
});

var _format = require("./format");

Object.keys(_format).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _format[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _format[key];
    }
  });
});

var _routing = require("./routing");

Object.keys(_routing).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _routing[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _routing[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _url = require("./url");

Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _url[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _url[key];
    }
  });
});

var _validators = require("./validators");

Object.keys(_validators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validators[key];
    }
  });
});
},{"./constants":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js","./error":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js","./env":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js","./format":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js","./routing":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js","./types":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/types.js","./url":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js","./validators":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js"}],"node_modules/@walletconnect/utils/dist/esm/misc.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addHexPrefix = addHexPrefix;
exports.getInfuraRpcUrl = getInfuraRpcUrl;
exports.getRpcUrl = getRpcUrl;
exports.logDeprecationWarning = logDeprecationWarning;
exports.payloadId = void 0;
exports.removeHexLeadingZeros = removeHexLeadingZeros;
exports.removeHexPrefix = removeHexPrefix;
exports.sanitizeHex = sanitizeHex;
exports.uuid = uuid;

var encoding = _interopRequireWildcard(require("@walletconnect/encoding"));

var jsonRpcUtils = _interopRequireWildcard(require("@walletconnect/jsonrpc-utils"));

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function sanitizeHex(hex) {
  return encoding.sanitizeHex(hex);
}

function addHexPrefix(hex) {
  return encoding.addHexPrefix(hex);
}

function removeHexPrefix(hex) {
  return encoding.removeHexPrefix(hex);
}

function removeHexLeadingZeros(hex) {
  return encoding.removeHexLeadingZeros(encoding.addHexPrefix(hex));
}

const payloadId = jsonRpcUtils.payloadId;
exports.payloadId = payloadId;

function uuid() {
  const result = ((a, b) => {
    for (b = a = ""; a++ < 36; b += a * 51 & 52 ? (a ^ 15 ? 8 ^ Math.random() * (a ^ 20 ? 16 : 4) : 4).toString(16) : "-") {}

    return b;
  })();

  return result;
}

function logDeprecationWarning() {
  console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!");
}

function getInfuraRpcUrl(chainId, infuraId) {
  let rpcUrl;
  const network = _constants.infuraNetworks[chainId];

  if (network) {
    rpcUrl = `https://${network}.infura.io/v3/${infuraId}`;
  }

  return rpcUrl;
}

function getRpcUrl(chainId, rpc) {
  let rpcUrl;
  const infuraUrl = getInfuraRpcUrl(chainId, rpc.infuraId);

  if (rpc.custom && rpc.custom[chainId]) {
    rpcUrl = rpc.custom[chainId];
  } else if (infuraUrl) {
    rpcUrl = infuraUrl;
  }

  return rpcUrl;
}
},{"@walletconnect/encoding":"node_modules/@walletconnect/encoding/dist/esm/index.js","@walletconnect/jsonrpc-utils":"node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js","./constants":"node_modules/@walletconnect/utils/dist/esm/constants.js"}],"node_modules/@walletconnect/utils/dist/esm/validators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEncoding = getEncoding;
exports.getType = getType;
exports.isArrayBuffer = isArrayBuffer;
exports.isBuffer = isBuffer;
exports.isEmptyArray = isEmptyArray;
exports.isEmptyString = isEmptyString;
exports.isHexString = isHexString;
exports.isInternalEvent = isInternalEvent;
exports.isJsonRpcRequest = isJsonRpcRequest;
exports.isJsonRpcResponseError = isJsonRpcResponseError;
exports.isJsonRpcResponseSuccess = isJsonRpcResponseSuccess;
exports.isJsonRpcSubscription = isJsonRpcSubscription;
exports.isReservedEvent = isReservedEvent;
exports.isSilentPayload = isSilentPayload;
exports.isTypedArray = isTypedArray;

var encoding = _interopRequireWildcard(require("@walletconnect/encoding"));

var _constants = require("./constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function isEmptyString(value) {
  return value === "" || typeof value === "string" && value.trim() === "";
}

function isEmptyArray(array) {
  return !(array && array.length);
}

function isBuffer(val) {
  return encoding.isBuffer(val);
}

function isTypedArray(val) {
  return encoding.isTypedArray(val);
}

function isArrayBuffer(val) {
  return encoding.isArrayBuffer(val);
}

function getType(val) {
  return encoding.getType(val);
}

function getEncoding(val) {
  return encoding.getEncoding(val);
}

function isHexString(value, length) {
  return encoding.isHexString(value, length);
}

function isJsonRpcSubscription(object) {
  return typeof object.params === "object";
}

function isJsonRpcRequest(object) {
  return typeof object.method !== "undefined";
}

function isJsonRpcResponseSuccess(object) {
  return typeof object.result !== "undefined";
}

function isJsonRpcResponseError(object) {
  return typeof object.error !== "undefined";
}

function isInternalEvent(object) {
  return typeof object.event !== "undefined";
}

function isReservedEvent(event) {
  return _constants.reservedEvents.includes(event) || event.startsWith("wc_");
}

function isSilentPayload(request) {
  if (request.method.startsWith("wc_")) {
    return true;
  }

  if (_constants.signingMethods.includes(request.method)) {
    return false;
  }

  return true;
}
},{"@walletconnect/encoding":"node_modules/@walletconnect/encoding/dist/esm/index.js","./constants":"node_modules/@walletconnect/utils/dist/esm/constants.js"}],"node_modules/@walletconnect/utils/dist/esm/ethereum.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidAddress = void 0;
exports.parsePersonalSign = parsePersonalSign;
exports.parseTransactionData = parseTransactionData;
exports.toChecksumAddress = toChecksumAddress;

var _jsSha = require("js-sha3");

var _encoding = require("@walletconnect/encoding");

var _encoding2 = require("./encoding");

var _misc = require("./misc");

var _validators = require("./validators");

function toChecksumAddress(address) {
  address = (0, _encoding.removeHexPrefix)(address.toLowerCase());
  const hash = (0, _encoding.removeHexPrefix)((0, _jsSha.keccak_256)((0, _encoding2.convertUtf8ToBuffer)(address)));
  let checksum = "";

  for (let i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) > 7) {
      checksum += address[i].toUpperCase();
    } else {
      checksum += address[i];
    }
  }

  return (0, _encoding.addHexPrefix)(checksum);
}

const isValidAddress = address => {
  if (!address) {
    return false;
  } else if (address.toLowerCase().substring(0, 2) !== "0x") {
    return false;
  } else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  } else {
    return address === toChecksumAddress(address);
  }
};

exports.isValidAddress = isValidAddress;

function parsePersonalSign(params) {
  if (!(0, _validators.isEmptyArray)(params) && !(0, _validators.isHexString)(params[0])) {
    params[0] = (0, _encoding2.convertUtf8ToHex)(params[0]);
  }

  return params;
}

function parseTransactionData(txData) {
  if (typeof txData.type !== "undefined" && txData.type !== "0") return txData;

  if (typeof txData.from === "undefined" || !isValidAddress(txData.from)) {
    throw new Error(`Transaction object must include a valid 'from' value.`);
  }

  function parseHexValues(value) {
    let result = value;

    if (typeof value === "number" || typeof value === "string" && !(0, _validators.isEmptyString)(value)) {
      if (!(0, _validators.isHexString)(value)) {
        result = (0, _encoding2.convertNumberToHex)(value);
      } else if (typeof value === "string") {
        result = (0, _misc.sanitizeHex)(value);
      }
    }

    if (typeof result === "string") {
      result = (0, _misc.removeHexLeadingZeros)(result);
    }

    return result;
  }

  const txDataRPC = {
    from: (0, _misc.sanitizeHex)(txData.from),
    to: typeof txData.to === "undefined" ? "" : (0, _misc.sanitizeHex)(txData.to),
    gasPrice: typeof txData.gasPrice === "undefined" ? "" : parseHexValues(txData.gasPrice),
    gas: typeof txData.gas === "undefined" ? typeof txData.gasLimit === "undefined" ? "" : parseHexValues(txData.gasLimit) : parseHexValues(txData.gas),
    value: typeof txData.value === "undefined" ? "" : parseHexValues(txData.value),
    nonce: typeof txData.nonce === "undefined" ? "" : parseHexValues(txData.nonce),
    data: typeof txData.data === "undefined" ? "" : (0, _misc.sanitizeHex)(txData.data) || "0x"
  };
  const prunable = ["gasPrice", "gas", "value", "nonce"];
  Object.keys(txDataRPC).forEach(key => {
    if (!txDataRPC[key].trim().length && prunable.includes(key)) {
      delete txDataRPC[key];
    }
  });
  return txDataRPC;
}
},{"js-sha3":"node_modules/js-sha3/src/sha3.js","@walletconnect/encoding":"node_modules/@walletconnect/encoding/dist/esm/index.js","./encoding":"node_modules/@walletconnect/utils/dist/esm/encoding.js","./misc":"node_modules/@walletconnect/utils/dist/esm/misc.js","./validators":"node_modules/@walletconnect/utils/dist/esm/validators.js"}],"node_modules/@walletconnect/utils/dist/esm/payload.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatRpcError = formatRpcError;
exports.promisify = promisify;

function promisify(originalFn, thisArg) {
  const promisifiedFunction = async (...callArgs) => {
    return new Promise((resolve, reject) => {
      const callback = (err, data) => {
        if (err === null || typeof err === "undefined") {
          reject(err);
        }

        resolve(data);
      };

      originalFn.apply(thisArg, [...callArgs, callback]);
    });
  };

  return promisifiedFunction;
}

function formatRpcError(error) {
  const message = error.message || "Failed or Rejected Request";
  let code = -32000;

  if (error && !error.code) {
    switch (message) {
      case "Parse error":
        code = -32700;
        break;

      case "Invalid request":
        code = -32600;
        break;

      case "Method not found":
        code = -32601;
        break;

      case "Invalid params":
        code = -32602;
        break;

      case "Internal error":
        code = -32603;
        break;

      default:
        code = -32000;
        break;
    }
  }

  const result = {
    code,
    message
  };
  return result;
}
},{}],"node_modules/@walletconnect/utils/node_modules/strict-uri-encode/index.js":[function(require,module,exports) {
'use strict';

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => "%".concat(x.charCodeAt(0).toString(16).toUpperCase()));
},{}],"node_modules/split-on-first/index.js":[function(require,module,exports) {
'use strict';

module.exports = function (string, separator) {
  if (!(typeof string === 'string' && typeof separator === 'string')) {
    throw new TypeError('Expected the arguments to be of type `string`');
  }

  if (separator === '') {
    return [string];
  }

  var separatorIndex = string.indexOf(separator);

  if (separatorIndex === -1) {
    return [string];
  }

  return [string.slice(0, separatorIndex), string.slice(separatorIndex + separator.length)];
};
},{}],"node_modules/@walletconnect/utils/node_modules/query-string/index.js":[function(require,module,exports) {
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var strictUriEncode = require('strict-uri-encode');

var decodeComponent = require('decode-uri-component');

var splitOnFirst = require('split-on-first');

var isNullOrUndefined = function (value) {
  return value === null || value === undefined;
};

function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return function (key) {
        return function (result, value) {
          var index = result.length;

          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[', index, ']'].join('')]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')]);
        };
      };

    case 'bracket':
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [[encode(key, options), '[]'].join('')]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '[]=', encode(value, options)].join('')]);
        };
      };

    case 'comma':
    case 'separator':
      return function (key) {
        return function (result, value) {
          if (value === null || value === undefined || value.length === 0) {
            return result;
          }

          if (result.length === 0) {
            return [[encode(key, options), '=', encode(value, options)].join('')];
          }

          return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
        };
      };

    default:
      return function (key) {
        return function (result, value) {
          if (value === undefined || options.skipNull && value === null || options.skipEmptyString && value === '') {
            return result;
          }

          if (value === null) {
            return [].concat(_toConsumableArray(result), [encode(key, options)]);
          }

          return [].concat(_toConsumableArray(result), [[encode(key, options), '=', encode(value, options)].join('')]);
        };
      };
  }
}

function parserForArrayFormat(options) {
  var result;

  switch (options.arrayFormat) {
    case 'index':
      return function (key, value, accumulator) {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return function (key, value, accumulator) {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    case 'comma':
    case 'separator':
      return function (key, value, accumulator) {
        var isArray = typeof value === 'string' && value.split('').indexOf(options.arrayFormatSeparator) > -1;
        var newValue = isArray ? value.split(options.arrayFormatSeparator).map(function (item) {
          return decode(item, options);
        }) : value === null ? value : decode(value, options);
        accumulator[key] = newValue;
      };

    default:
      return function (key, value, accumulator) {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function validateArrayFormatSeparator(value) {
  if (typeof value !== 'string' || value.length !== 1) {
    throw new TypeError('arrayFormatSeparator must be single character string');
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decodeComponent(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (_typeof(input) === 'object') {
    return keysSorter(Object.keys(input)).sort(function (a, b) {
      return Number(a) - Number(b);
    }).map(function (key) {
      return input[key];
    });
  }

  return input;
}

function removeHash(input) {
  var hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function getHash(url) {
  var hash = '';
  var hashStart = url.indexOf('#');

  if (hashStart !== -1) {
    hash = url.slice(hashStart);
  }

  return hash;
}

function extract(input) {
  input = removeHash(input);
  var queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

function parse(input, options) {
  options = Object.assign({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ',',
    parseNumbers: false,
    parseBooleans: false
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);
  var formatter = parserForArrayFormat(options); // Create an object with no prototype

  var ret = Object.create(null);

  if (typeof input !== 'string') {
    return ret;
  }

  input = input.trim().replace(/^[?#&]/, '');

  if (!input) {
    return ret;
  }

  for (var param of input.split('&')) {
    var [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '='); // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
    formatter(decode(key, options), value, ret);
  }

  for (var _key of Object.keys(ret)) {
    var _value = ret[_key];

    if (_typeof(_value) === 'object' && _value !== null) {
      for (var k of Object.keys(_value)) {
        _value[k] = parseValue(_value[k], options);
      }
    } else {
      ret[_key] = parseValue(_value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce(function (result, key) {
    var value = ret[key];

    if (Boolean(value) && _typeof(value) === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (object, options) {
  if (!object) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none',
    arrayFormatSeparator: ','
  }, options);
  validateArrayFormatSeparator(options.arrayFormatSeparator);

  var shouldFilter = function (key) {
    return options.skipNull && isNullOrUndefined(object[key]) || options.skipEmptyString && object[key] === '';
  };

  var formatter = encoderForArrayFormat(options);
  var objectCopy = {};

  for (var key of Object.keys(object)) {
    if (!shouldFilter(key)) {
      objectCopy[key] = object[key];
    }
  }

  var keys = Object.keys(objectCopy);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(function (key) {
    var value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      return value.reduce(formatter(key), []).join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&');
};

exports.parseUrl = function (input, options) {
  options = Object.assign({
    decode: true
  }, options);
  var [url, hash] = splitOnFirst(input, '#');
  return Object.assign({
    url: url.split('?')[0] || '',
    query: parse(extract(input), options)
  }, options && options.parseFragmentIdentifier && hash ? {
    fragmentIdentifier: decode(hash, options)
  } : {});
};

exports.stringifyUrl = function (input, options) {
  options = Object.assign({
    encode: true,
    strict: true
  }, options);
  var url = removeHash(input.url).split('?')[0] || '';
  var queryFromUrl = exports.extract(input.url);
  var parsedQueryFromUrl = exports.parse(queryFromUrl, {
    sort: false
  });
  var query = Object.assign(parsedQueryFromUrl, input.query);
  var queryString = exports.stringify(query, options);

  if (queryString) {
    queryString = "?".concat(queryString);
  }

  var hash = getHash(input.url);

  if (input.fragmentIdentifier) {
    hash = "#".concat(encode(input.fragmentIdentifier, options));
  }

  return "".concat(url).concat(queryString).concat(hash);
};
},{"strict-uri-encode":"node_modules/@walletconnect/utils/node_modules/strict-uri-encode/index.js","decode-uri-component":"node_modules/decode-uri-component/index.js","split-on-first":"node_modules/split-on-first/index.js"}],"node_modules/@walletconnect/utils/dist/esm/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendToQueryString = appendToQueryString;
exports.formatQueryString = formatQueryString;
exports.getQueryString = getQueryString;
exports.parseQueryString = parseQueryString;

var queryStringUtils = _interopRequireWildcard(require("query-string"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getQueryString(url) {
  const pathEnd = url.indexOf("?") !== -1 ? url.indexOf("?") : undefined;
  const queryString = typeof pathEnd !== "undefined" ? url.substr(pathEnd) : "";
  return queryString;
}

function appendToQueryString(queryString, newQueryParams) {
  let queryParams = parseQueryString(queryString);
  queryParams = Object.assign(Object.assign({}, queryParams), newQueryParams);
  queryString = formatQueryString(queryParams);
  return queryString;
}

function parseQueryString(queryString) {
  return queryStringUtils.parse(queryString);
}

function formatQueryString(queryParams) {
  return queryStringUtils.stringify(queryParams);
}
},{"query-string":"node_modules/@walletconnect/utils/node_modules/query-string/index.js"}],"node_modules/@walletconnect/utils/dist/esm/session.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWalletConnectSession = isWalletConnectSession;
exports.parseWalletConnectUri = parseWalletConnectUri;

var _url = require("./url");

function isWalletConnectSession(object) {
  return typeof object.bridge !== "undefined";
}

function parseWalletConnectUri(str) {
  const pathStart = str.indexOf(":");
  const pathEnd = str.indexOf("?") !== -1 ? str.indexOf("?") : undefined;
  const protocol = str.substring(0, pathStart);
  const path = str.substring(pathStart + 1, pathEnd);

  function parseRequiredParams(path) {
    const separator = "@";
    const values = path.split(separator);
    const requiredParams = {
      handshakeTopic: values[0],
      version: parseInt(values[1], 10)
    };
    return requiredParams;
  }

  const requiredParams = parseRequiredParams(path);
  const queryString = typeof pathEnd !== "undefined" ? str.substr(pathEnd) : "";

  function parseQueryParams(queryString) {
    const result = (0, _url.parseQueryString)(queryString);
    const parameters = {
      key: result.key || "",
      bridge: result.bridge || ""
    };
    return parameters;
  }

  const queryParams = parseQueryParams(queryString);
  const result = Object.assign(Object.assign({
    protocol
  }, requiredParams), queryParams);
  return result;
}
},{"./url":"node_modules/@walletconnect/utils/dist/esm/url.js"}],"node_modules/@walletconnect/utils/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browserUtils = require("@walletconnect/browser-utils");

Object.keys(_browserUtils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _browserUtils[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _browserUtils[key];
    }
  });
});

var _constants = require("./constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});

var _encoding = require("./encoding");

Object.keys(_encoding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _encoding[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _encoding[key];
    }
  });
});

var _ethereum = require("./ethereum");

Object.keys(_ethereum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ethereum[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ethereum[key];
    }
  });
});

var _misc = require("./misc");

Object.keys(_misc).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _misc[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _misc[key];
    }
  });
});

var _payload = require("./payload");

Object.keys(_payload).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _payload[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _payload[key];
    }
  });
});

var _session = require("./session");

Object.keys(_session).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _session[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _session[key];
    }
  });
});

var _url = require("./url");

Object.keys(_url).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _url[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _url[key];
    }
  });
});

var _validators = require("./validators");

Object.keys(_validators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validators[key];
    }
  });
});
},{"@walletconnect/browser-utils":"node_modules/@walletconnect/browser-utils/dist/esm/index.js","./constants":"node_modules/@walletconnect/utils/dist/esm/constants.js","./encoding":"node_modules/@walletconnect/utils/dist/esm/encoding.js","./ethereum":"node_modules/@walletconnect/utils/dist/esm/ethereum.js","./misc":"node_modules/@walletconnect/utils/dist/esm/misc.js","./payload":"node_modules/@walletconnect/utils/dist/esm/payload.js","./session":"node_modules/@walletconnect/utils/dist/esm/session.js","./url":"node_modules/@walletconnect/utils/dist/esm/url.js","./validators":"node_modules/@walletconnect/utils/dist/esm/validators.js"}],"node_modules/@walletconnect/socket-transport/dist/esm/network.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class NetworkMonitor {
  constructor() {
    this._eventEmitters = [];

    if (typeof window !== "undefined" && typeof window.addEventListener !== "undefined") {
      window.addEventListener("online", () => this.trigger("online"));
      window.addEventListener("offline", () => this.trigger("offline"));
    }
  }

  on(event, callback) {
    this._eventEmitters.push({
      event,
      callback
    });
  }

  trigger(event) {
    let eventEmitters = [];

    if (event) {
      eventEmitters = this._eventEmitters.filter(eventEmitter => eventEmitter.event === event);
    }

    eventEmitters.forEach(eventEmitter => {
      eventEmitter.callback();
    });
  }

}

var _default = NetworkMonitor;
exports.default = _default;
},{}],"node_modules/@walletconnect/socket-transport/node_modules/ws/browser.js":[function(require,module,exports) {
'use strict';

module.exports = function () {
  throw new Error('ws does not work in the browser. Browser clients must use the native ' + 'WebSocket object');
};
},{}],"node_modules/@walletconnect/socket-transport/dist/esm/index.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@walletconnect/utils");

var _network = _interopRequireDefault(require("./network"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const WS = typeof global.WebSocket !== "undefined" ? global.WebSocket : require("ws");

class SocketTransport {
  constructor(opts) {
    this.opts = opts;
    this._queue = [];
    this._events = [];
    this._subscriptions = [];
    this._protocol = opts.protocol;
    this._version = opts.version;
    this._url = "";
    this._netMonitor = null;
    this._socket = null;
    this._nextSocket = null;
    this._subscriptions = opts.subscriptions || [];
    this._netMonitor = opts.netMonitor || new _network.default();

    if (!opts.url || typeof opts.url !== "string") {
      throw new Error("Missing or invalid WebSocket url");
    }

    this._url = opts.url;

    this._netMonitor.on("online", () => this._socketCreate());
  }

  set readyState(value) {}

  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }

  set connecting(value) {}

  get connecting() {
    return this.readyState === 0;
  }

  set connected(value) {}

  get connected() {
    return this.readyState === 1;
  }

  set closing(value) {}

  get closing() {
    return this.readyState === 2;
  }

  set closed(value) {}

  get closed() {
    return this.readyState === 3;
  }

  open() {
    this._socketCreate();
  }

  close() {
    this._socketClose();
  }

  send(message, topic, silent) {
    if (!topic || typeof topic !== "string") {
      throw new Error("Missing or invalid topic field");
    }

    this._socketSend({
      topic: topic,
      type: "pub",
      payload: message,
      silent: !!silent
    });
  }

  subscribe(topic) {
    this._socketSend({
      topic: topic,
      type: "sub",
      payload: "",
      silent: true
    });
  }

  on(event, callback) {
    this._events.push({
      event,
      callback
    });
  }

  _socketCreate() {
    if (this._nextSocket) {
      return;
    }

    const url = getWebSocketUrl(this._url, this._protocol, this._version);
    this._nextSocket = new WS(url);

    if (!this._nextSocket) {
      throw new Error("Failed to create socket");
    }

    this._nextSocket.onmessage = event => this._socketReceive(event);

    this._nextSocket.onopen = () => this._socketOpen();

    this._nextSocket.onerror = event => this._socketError(event);

    this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null;

        this._socketCreate();
      }, 1000);
    };
  }

  _socketOpen() {
    this._socketClose();

    this._socket = this._nextSocket;
    this._nextSocket = null;

    this._queueSubscriptions();

    this._pushQueue();
  }

  _socketClose() {
    if (this._socket) {
      this._socket.onclose = () => {};

      this._socket.close();
    }
  }

  _socketSend(socketMessage) {
    const message = JSON.stringify(socketMessage);

    if (this._socket && this._socket.readyState === 1) {
      this._socket.send(message);
    } else {
      this._setToQueue(socketMessage);

      this._socketCreate();
    }
  }

  async _socketReceive(event) {
    let socketMessage;

    try {
      socketMessage = JSON.parse(event.data);
    } catch (error) {
      return;
    }

    this._socketSend({
      topic: socketMessage.topic,
      type: "ack",
      payload: "",
      silent: true
    });

    if (this._socket && this._socket.readyState === 1) {
      const events = this._events.filter(event => event.event === "message");

      if (events && events.length) {
        events.forEach(event => event.callback(socketMessage));
      }
    }
  }

  _socketError(e) {
    const events = this._events.filter(event => event.event === "error");

    if (events && events.length) {
      events.forEach(event => event.callback(e));
    }
  }

  _queueSubscriptions() {
    const subscriptions = this._subscriptions;
    subscriptions.forEach(topic => this._queue.push({
      topic: topic,
      type: "sub",
      payload: "",
      silent: true
    }));
    this._subscriptions = this.opts.subscriptions || [];
  }

  _setToQueue(socketMessage) {
    this._queue.push(socketMessage);
  }

  _pushQueue() {
    const queue = this._queue;
    queue.forEach(socketMessage => this._socketSend(socketMessage));
    this._queue = [];
  }

}

function getWebSocketUrl(_url, protocol, version) {
  var _a, _b;

  const url = _url.startsWith("https") ? _url.replace("https", "wss") : _url.startsWith("http") ? _url.replace("http", "ws") : _url;
  const splitUrl = url.split("?");
  const params = (0, _utils.isBrowser)() ? {
    protocol,
    version,
    env: "browser",
    host: ((_a = (0, _utils.getLocation)()) === null || _a === void 0 ? void 0 : _a.host) || ""
  } : {
    protocol,
    version,
    env: ((_b = (0, _utils.detectEnv)()) === null || _b === void 0 ? void 0 : _b.name) || ""
  };
  const queryString = (0, _utils.appendToQueryString)((0, _utils.getQueryString)(splitUrl[1] || ""), params);
  return splitUrl[0] + "?" + queryString;
}

var _default = SocketTransport;
exports.default = _default;
},{"@walletconnect/utils":"node_modules/@walletconnect/utils/dist/esm/index.js","./network":"node_modules/@walletconnect/socket-transport/dist/esm/network.js","ws":"node_modules/@walletconnect/socket-transport/node_modules/ws/browser.js"}],"node_modules/@walletconnect/core/dist/esm/errors.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_SESSION_REJECTED = exports.ERROR_SESSION_DISCONNECTED = exports.ERROR_SESSION_CONNECTED = exports.ERROR_QRCODE_MODAL_USER_CLOSED = exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = exports.ERROR_MISSING_RESULT = exports.ERROR_MISSING_REQUIRED = exports.ERROR_MISSING_METHOD = exports.ERROR_MISSING_JSON_RPC = exports.ERROR_MISSING_ID = exports.ERROR_MISSING_ERROR = exports.ERROR_INVALID_URI = exports.ERROR_INVALID_RESPONSE = void 0;
const ERROR_SESSION_CONNECTED = "Session currently connected";
exports.ERROR_SESSION_CONNECTED = ERROR_SESSION_CONNECTED;
const ERROR_SESSION_DISCONNECTED = "Session currently disconnected";
exports.ERROR_SESSION_DISCONNECTED = ERROR_SESSION_DISCONNECTED;
const ERROR_SESSION_REJECTED = "Session Rejected";
exports.ERROR_SESSION_REJECTED = ERROR_SESSION_REJECTED;
const ERROR_MISSING_JSON_RPC = "Missing JSON RPC response";
exports.ERROR_MISSING_JSON_RPC = ERROR_MISSING_JSON_RPC;
const ERROR_MISSING_RESULT = `JSON-RPC success response must include "result" field`;
exports.ERROR_MISSING_RESULT = ERROR_MISSING_RESULT;
const ERROR_MISSING_ERROR = `JSON-RPC error response must include "error" field`;
exports.ERROR_MISSING_ERROR = ERROR_MISSING_ERROR;
const ERROR_MISSING_METHOD = `JSON RPC request must have valid "method" value`;
exports.ERROR_MISSING_METHOD = ERROR_MISSING_METHOD;
const ERROR_MISSING_ID = `JSON RPC request must have valid "id" value`;
exports.ERROR_MISSING_ID = ERROR_MISSING_ID;
const ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session";
exports.ERROR_MISSING_REQUIRED = ERROR_MISSING_REQUIRED;
const ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid";
exports.ERROR_INVALID_RESPONSE = ERROR_INVALID_RESPONSE;
const ERROR_INVALID_URI = "URI format is invalid";
exports.ERROR_INVALID_URI = ERROR_INVALID_URI;
const ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided";
exports.ERROR_QRCODE_MODAL_NOT_PROVIDED = ERROR_QRCODE_MODAL_NOT_PROVIDED;
const ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal";
exports.ERROR_QRCODE_MODAL_USER_CLOSED = ERROR_QRCODE_MODAL_USER_CLOSED;
},{}],"node_modules/@walletconnect/core/dist/esm/events.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@walletconnect/utils");

class EventManager {
  constructor() {
    this._eventEmitters = [];
  }

  subscribe(eventEmitter) {
    this._eventEmitters.push(eventEmitter);
  }

  unsubscribe(event) {
    this._eventEmitters = this._eventEmitters.filter(x => x.event !== event);
  }

  trigger(payload) {
    let eventEmitters = [];
    let event;

    if ((0, _utils.isJsonRpcRequest)(payload)) {
      event = payload.method;
    } else if ((0, _utils.isJsonRpcResponseSuccess)(payload) || (0, _utils.isJsonRpcResponseError)(payload)) {
      event = `response:${payload.id}`;
    } else if ((0, _utils.isInternalEvent)(payload)) {
      event = payload.event;
    } else {
      event = "";
    }

    if (event) {
      eventEmitters = this._eventEmitters.filter(eventEmitter => eventEmitter.event === event);
    }

    if ((!eventEmitters || !eventEmitters.length) && !(0, _utils.isReservedEvent)(event) && !(0, _utils.isInternalEvent)(event)) {
      eventEmitters = this._eventEmitters.filter(eventEmitter => eventEmitter.event === "call_request");
    }

    eventEmitters.forEach(eventEmitter => {
      if ((0, _utils.isJsonRpcResponseError)(payload)) {
        const error = new Error(payload.error.message);
        eventEmitter.callback(error, null);
      } else {
        eventEmitter.callback(null, payload);
      }
    });
  }

}

var _default = EventManager;
exports.default = _default;
},{"@walletconnect/utils":"node_modules/@walletconnect/utils/dist/esm/index.js"}],"node_modules/@walletconnect/core/dist/esm/storage.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@walletconnect/utils");

class SessionStorage {
  constructor(storageId = "walletconnect") {
    this.storageId = storageId;
  }

  getSession() {
    let session = null;
    const json = (0, _utils.getLocal)(this.storageId);

    if (json && (0, _utils.isWalletConnectSession)(json)) {
      session = json;
    }

    return session;
  }

  setSession(session) {
    (0, _utils.setLocal)(this.storageId, session);
    return session;
  }

  removeSession() {
    (0, _utils.removeLocal)(this.storageId);
  }

}

var _default = SessionStorage;
exports.default = _default;
},{"@walletconnect/utils":"node_modules/@walletconnect/utils/dist/esm/index.js"}],"node_modules/@walletconnect/core/dist/esm/url.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractHostname = extractHostname;
exports.extractRootDomain = extractRootDomain;
exports.getBridgeUrl = getBridgeUrl;
exports.randomBridgeIndex = randomBridgeIndex;
exports.selectRandomBridgeUrl = selectRandomBridgeUrl;
exports.shouldSelectRandomly = shouldSelectRandomly;
const domain = "walletconnect.org";
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
const bridges = alphanumerical.split("").map(char => `https://${char}.bridge.walletconnect.org`);

function extractHostname(url) {
  let hostname = url.indexOf("//") > -1 ? url.split("/")[2] : url.split("/")[0];
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}

function extractRootDomain(url) {
  return extractHostname(url).split(".").slice(-2).join(".");
}

function randomBridgeIndex() {
  return Math.floor(Math.random() * bridges.length);
}

function selectRandomBridgeUrl() {
  return bridges[randomBridgeIndex()];
}

function shouldSelectRandomly(url) {
  return extractRootDomain(url) === domain;
}

function getBridgeUrl(url) {
  if (shouldSelectRandomly(url)) {
    return selectRandomBridgeUrl();
  }

  return url;
}
},{}],"node_modules/@walletconnect/core/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("@walletconnect/utils");

var _socketTransport = _interopRequireDefault(require("@walletconnect/socket-transport"));

var _errors = require("./errors");

var _events = _interopRequireDefault(require("./events"));

var _storage = _interopRequireDefault(require("./storage"));

var _url = require("./url");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Connector {
  constructor(opts) {
    this.protocol = "wc";
    this.version = 1;
    this._bridge = "";
    this._key = null;
    this._clientId = "";
    this._clientMeta = null;
    this._peerId = "";
    this._peerMeta = null;
    this._handshakeId = 0;
    this._handshakeTopic = "";
    this._connected = false;
    this._accounts = [];
    this._chainId = 0;
    this._networkId = 0;
    this._rpcUrl = "";
    this._eventManager = new _events.default();
    this._clientMeta = (0, _utils.getClientMeta)() || opts.connectorOpts.clientMeta || null;
    this._cryptoLib = opts.cryptoLib;
    this._sessionStorage = opts.sessionStorage || new _storage.default(opts.connectorOpts.storageId);
    this._qrcodeModal = opts.connectorOpts.qrcodeModal;
    this._qrcodeModalOptions = opts.connectorOpts.qrcodeModalOptions;
    this._signingMethods = [..._utils.signingMethods, ...(opts.connectorOpts.signingMethods || [])];

    if (!opts.connectorOpts.bridge && !opts.connectorOpts.uri && !opts.connectorOpts.session) {
      throw new Error(_errors.ERROR_MISSING_REQUIRED);
    }

    if (opts.connectorOpts.bridge) {
      this.bridge = (0, _url.getBridgeUrl)(opts.connectorOpts.bridge);
    }

    if (opts.connectorOpts.uri) {
      this.uri = opts.connectorOpts.uri;
    }

    const session = opts.connectorOpts.session || this._getStorageSession();

    if (session) {
      this.session = session;
    }

    if (this.handshakeId) {
      this._subscribeToSessionResponse(this.handshakeId, "Session request rejected");
    }

    this._transport = opts.transport || new _socketTransport.default({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    });

    this._subscribeToInternalEvents();

    this._initTransport();

    if (opts.connectorOpts.uri) {
      this._subscribeToSessionRequest();
    }

    if (opts.pushServerOpts) {
      this._registerPushServer(opts.pushServerOpts);
    }
  }

  set bridge(value) {
    if (!value) {
      return;
    }

    this._bridge = value;
  }

  get bridge() {
    return this._bridge;
  }

  set key(value) {
    if (!value) {
      return;
    }

    const key = (0, _utils.convertHexToArrayBuffer)(value);
    this._key = key;
  }

  get key() {
    if (this._key) {
      const key = (0, _utils.convertArrayBufferToHex)(this._key, true);
      return key;
    }

    return "";
  }

  set clientId(value) {
    if (!value) {
      return;
    }

    this._clientId = value;
  }

  get clientId() {
    let clientId = this._clientId;

    if (!clientId) {
      clientId = this._clientId = (0, _utils.uuid)();
    }

    return this._clientId;
  }

  set peerId(value) {
    if (!value) {
      return;
    }

    this._peerId = value;
  }

  get peerId() {
    return this._peerId;
  }

  set clientMeta(value) {}

  get clientMeta() {
    let clientMeta = this._clientMeta;

    if (!clientMeta) {
      clientMeta = this._clientMeta = (0, _utils.getClientMeta)();
    }

    return clientMeta;
  }

  set peerMeta(value) {
    this._peerMeta = value;
  }

  get peerMeta() {
    const peerMeta = this._peerMeta;
    return peerMeta;
  }

  set handshakeTopic(value) {
    if (!value) {
      return;
    }

    this._handshakeTopic = value;
  }

  get handshakeTopic() {
    return this._handshakeTopic;
  }

  set handshakeId(value) {
    if (!value) {
      return;
    }

    this._handshakeId = value;
  }

  get handshakeId() {
    return this._handshakeId;
  }

  get uri() {
    const _uri = this._formatUri();

    return _uri;
  }

  set uri(value) {
    if (!value) {
      return;
    }

    const {
      handshakeTopic,
      bridge,
      key
    } = this._parseUri(value);

    this.handshakeTopic = handshakeTopic;
    this.bridge = bridge;
    this.key = key;
  }

  set chainId(value) {
    this._chainId = value;
  }

  get chainId() {
    const chainId = this._chainId;
    return chainId;
  }

  set networkId(value) {
    this._networkId = value;
  }

  get networkId() {
    const networkId = this._networkId;
    return networkId;
  }

  set accounts(value) {
    this._accounts = value;
  }

  get accounts() {
    const accounts = this._accounts;
    return accounts;
  }

  set rpcUrl(value) {
    this._rpcUrl = value;
  }

  get rpcUrl() {
    const rpcUrl = this._rpcUrl;
    return rpcUrl;
  }

  set connected(value) {}

  get connected() {
    return this._connected;
  }

  set pending(value) {}

  get pending() {
    return !!this._handshakeTopic;
  }

  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }

  set session(value) {
    if (!value) {
      return;
    }

    this._connected = value.connected;
    this.accounts = value.accounts;
    this.chainId = value.chainId;
    this.bridge = value.bridge;
    this.key = value.key;
    this.clientId = value.clientId;
    this.clientMeta = value.clientMeta;
    this.peerId = value.peerId;
    this.peerMeta = value.peerMeta;
    this.handshakeId = value.handshakeId;
    this.handshakeTopic = value.handshakeTopic;
  }

  on(event, callback) {
    const eventEmitter = {
      event,
      callback
    };

    this._eventManager.subscribe(eventEmitter);
  }

  off(event) {
    this._eventManager.unsubscribe(event);
  }

  async createInstantRequest(instantRequest) {
    this._key = await this._generateKey();

    const request = this._formatRequest({
      method: "wc_instantRequest",
      params: [{
        peerId: this.clientId,
        peerMeta: this.clientMeta,
        request: this._formatRequest(instantRequest)
      }]
    });

    this.handshakeId = request.id;
    this.handshakeTopic = (0, _utils.uuid)();

    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });

    this.on("modal_closed", () => {
      throw new Error(_errors.ERROR_QRCODE_MODAL_USER_CLOSED);
    });

    const endInstantRequest = () => {
      this.killSession();
    };

    try {
      const result = await this._sendCallRequest(request);

      if (result) {
        endInstantRequest();
      }

      return result;
    } catch (error) {
      endInstantRequest();
      throw error;
    }
  }

  async connect(opts) {
    if (!this._qrcodeModal) {
      throw new Error(_errors.ERROR_QRCODE_MODAL_NOT_PROVIDED);
    }

    if (this.connected) {
      return {
        chainId: this.chainId,
        accounts: this.accounts
      };
    }

    await this.createSession(opts);
    return new Promise(async (resolve, reject) => {
      this.on("modal_closed", () => reject(new Error(_errors.ERROR_QRCODE_MODAL_USER_CLOSED)));
      this.on("connect", (error, payload) => {
        if (error) {
          return reject(error);
        }

        resolve(payload.params[0]);
      });
    });
  }

  async createSession(opts) {
    if (this._connected) {
      throw new Error(_errors.ERROR_SESSION_CONNECTED);
    }

    if (this.pending) {
      return;
    }

    this._key = await this._generateKey();

    const request = this._formatRequest({
      method: "wc_sessionRequest",
      params: [{
        peerId: this.clientId,
        peerMeta: this.clientMeta,
        chainId: opts && opts.chainId ? opts.chainId : null
      }]
    });

    this.handshakeId = request.id;
    this.handshakeTopic = (0, _utils.uuid)();

    this._sendSessionRequest(request, "Session update rejected", {
      topic: this.handshakeTopic
    });

    this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }

  approveSession(sessionStatus) {
    if (this._connected) {
      throw new Error(_errors.ERROR_SESSION_CONNECTED);
    }

    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    };
    const response = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: sessionParams
    };

    this._sendResponse(response);

    this._connected = true;

    this._setStorageSession();

    this._eventManager.trigger({
      event: "connect",
      params: [{
        peerId: this.peerId,
        peerMeta: this.peerMeta,
        chainId: this.chainId,
        accounts: this.accounts
      }]
    });
  }

  rejectSession(sessionError) {
    if (this._connected) {
      throw new Error(_errors.ERROR_SESSION_CONNECTED);
    }

    const message = sessionError && sessionError.message ? sessionError.message : _errors.ERROR_SESSION_REJECTED;

    const response = this._formatResponse({
      id: this.handshakeId,
      error: {
        message
      }
    });

    this._sendResponse(response);

    this._connected = false;

    this._eventManager.trigger({
      event: "disconnect",
      params: [{
        message
      }]
    });

    this._removeStorageSession();
  }

  updateSession(sessionStatus) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    this.chainId = sessionStatus.chainId;
    this.accounts = sessionStatus.accounts;
    this.networkId = sessionStatus.networkId || 0;
    this.rpcUrl = sessionStatus.rpcUrl || "";
    const sessionParams = {
      approved: true,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    };

    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });

    this._sendSessionRequest(request, "Session update rejected");

    this._eventManager.trigger({
      event: "session_update",
      params: [{
        chainId: this.chainId,
        accounts: this.accounts
      }]
    });

    this._manageStorageSession();
  }

  async killSession(sessionError) {
    const message = sessionError ? sessionError.message : "Session Disconnected";
    const sessionParams = {
      approved: false,
      chainId: null,
      networkId: null,
      accounts: null
    };

    const request = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [sessionParams]
    });

    await this._sendRequest(request);

    this._handleSessionDisconnect(message);
  }

  async sendTransaction(tx) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    const parsedTx = (0, _utils.parseTransactionData)(tx);

    const request = this._formatRequest({
      method: "eth_sendTransaction",
      params: [parsedTx]
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async signTransaction(tx) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    const parsedTx = (0, _utils.parseTransactionData)(tx);

    const request = this._formatRequest({
      method: "eth_signTransaction",
      params: [parsedTx]
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async signMessage(params) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    const request = this._formatRequest({
      method: "eth_sign",
      params
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async signPersonalMessage(params) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    params = (0, _utils.parsePersonalSign)(params);

    const request = this._formatRequest({
      method: "personal_sign",
      params
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async signTypedData(params) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    const request = this._formatRequest({
      method: "eth_signTypedData",
      params
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  async updateChain(chainParams) {
    if (!this._connected) {
      throw new Error("Session currently disconnected");
    }

    const request = this._formatRequest({
      method: "wallet_updateChain",
      params: [chainParams]
    });

    const result = await this._sendCallRequest(request);
    return result;
  }

  unsafeSend(request, options) {
    this._sendRequest(request, options);

    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{
        request,
        options
      }]
    });

    return new Promise((resolve, reject) => {
      this._subscribeToResponse(request.id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }

        if (!payload) {
          throw new Error(_errors.ERROR_MISSING_JSON_RPC);
        }

        resolve(payload);
      });
    });
  }

  async sendCustomRequest(request, options) {
    if (!this._connected) {
      throw new Error(_errors.ERROR_SESSION_DISCONNECTED);
    }

    switch (request.method) {
      case "eth_accounts":
        return this.accounts;

      case "eth_chainId":
        return (0, _utils.convertNumberToHex)(this.chainId);

      case "eth_sendTransaction":
      case "eth_signTransaction":
        if (request.params) {
          request.params[0] = (0, _utils.parseTransactionData)(request.params[0]);
        }

        break;

      case "personal_sign":
        if (request.params) {
          request.params = (0, _utils.parsePersonalSign)(request.params);
        }

        break;

      default:
        break;
    }

    const formattedRequest = this._formatRequest(request);

    const result = await this._sendCallRequest(formattedRequest, options);
    return result;
  }

  approveRequest(response) {
    if ((0, _utils.isJsonRpcResponseSuccess)(response)) {
      const formattedResponse = this._formatResponse(response);

      this._sendResponse(formattedResponse);
    } else {
      throw new Error(_errors.ERROR_MISSING_RESULT);
    }
  }

  rejectRequest(response) {
    if ((0, _utils.isJsonRpcResponseError)(response)) {
      const formattedResponse = this._formatResponse(response);

      this._sendResponse(formattedResponse);
    } else {
      throw new Error(_errors.ERROR_MISSING_ERROR);
    }
  }

  transportClose() {
    this._transport.close();
  }

  async _sendRequest(request, options) {
    const callRequest = this._formatRequest(request);

    const encryptionPayload = await this._encrypt(callRequest);
    const topic = typeof (options === null || options === void 0 ? void 0 : options.topic) !== "undefined" ? options.topic : this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = typeof (options === null || options === void 0 ? void 0 : options.forcePushNotification) !== "undefined" ? !options.forcePushNotification : (0, _utils.isSilentPayload)(callRequest);

    this._transport.send(payload, topic, silent);
  }

  async _sendResponse(response) {
    const encryptionPayload = await this._encrypt(response);
    const topic = this.peerId;
    const payload = JSON.stringify(encryptionPayload);
    const silent = true;

    this._transport.send(payload, topic, silent);
  }

  async _sendSessionRequest(request, errorMsg, options) {
    this._sendRequest(request, options);

    this._subscribeToSessionResponse(request.id, errorMsg);
  }

  _sendCallRequest(request, options) {
    this._sendRequest(request, options);

    this._eventManager.trigger({
      event: "call_request_sent",
      params: [{
        request,
        options
      }]
    });

    return this._subscribeToCallResponse(request.id);
  }

  _formatRequest(request) {
    if (typeof request.method === "undefined") {
      throw new Error(_errors.ERROR_MISSING_METHOD);
    }

    const formattedRequest = {
      id: typeof request.id === "undefined" ? (0, _utils.payloadId)() : request.id,
      jsonrpc: "2.0",
      method: request.method,
      params: typeof request.params === "undefined" ? [] : request.params
    };
    return formattedRequest;
  }

  _formatResponse(response) {
    if (typeof response.id === "undefined") {
      throw new Error(_errors.ERROR_MISSING_ID);
    }

    const baseResponse = {
      id: response.id,
      jsonrpc: "2.0"
    };

    if ((0, _utils.isJsonRpcResponseError)(response)) {
      const error = (0, _utils.formatRpcError)(response.error);
      const errorResponse = Object.assign(Object.assign(Object.assign({}, baseResponse), response), {
        error
      });
      return errorResponse;
    } else if ((0, _utils.isJsonRpcResponseSuccess)(response)) {
      const successResponse = Object.assign(Object.assign({}, baseResponse), response);
      return successResponse;
    }

    throw new Error(_errors.ERROR_INVALID_RESPONSE);
  }

  _handleSessionDisconnect(errorMsg) {
    const message = errorMsg || "Session Disconnected";

    if (!this._connected) {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }

      (0, _utils.removeLocal)(_utils.mobileLinkChoiceKey);
    }

    if (this._connected) {
      this._connected = false;
    }

    if (this._handshakeId) {
      this._handshakeId = 0;
    }

    if (this._handshakeTopic) {
      this._handshakeTopic = "";
    }

    if (this._peerId) {
      this._peerId = "";
    }

    this._eventManager.trigger({
      event: "disconnect",
      params: [{
        message
      }]
    });

    this._removeStorageSession();

    this.transportClose();
  }

  _handleSessionResponse(errorMsg, sessionParams) {
    if (sessionParams) {
      if (sessionParams.approved) {
        if (!this._connected) {
          this._connected = true;

          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }

          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }

          if (sessionParams.peerId && !this.peerId) {
            this.peerId = sessionParams.peerId;
          }

          if (sessionParams.peerMeta && !this.peerMeta) {
            this.peerMeta = sessionParams.peerMeta;
          }

          this._eventManager.trigger({
            event: "connect",
            params: [{
              peerId: this.peerId,
              peerMeta: this.peerMeta,
              chainId: this.chainId,
              accounts: this.accounts
            }]
          });
        } else {
          if (sessionParams.chainId) {
            this.chainId = sessionParams.chainId;
          }

          if (sessionParams.accounts) {
            this.accounts = sessionParams.accounts;
          }

          this._eventManager.trigger({
            event: "session_update",
            params: [{
              chainId: this.chainId,
              accounts: this.accounts
            }]
          });
        }

        this._manageStorageSession();
      } else {
        this._handleSessionDisconnect(errorMsg);
      }
    } else {
      this._handleSessionDisconnect(errorMsg);
    }
  }

  async _handleIncomingMessages(socketMessage) {
    const activeTopics = [this.clientId, this.handshakeTopic];

    if (!activeTopics.includes(socketMessage.topic)) {
      return;
    }

    let encryptionPayload;

    try {
      encryptionPayload = JSON.parse(socketMessage.payload);
    } catch (error) {
      return;
    }

    const payload = await this._decrypt(encryptionPayload);

    if (payload) {
      this._eventManager.trigger(payload);
    }
  }

  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }

  _subscribeToResponse(id, callback) {
    this.on(`response:${id}`, callback);
  }

  _subscribeToSessionResponse(id, errorMsg) {
    this._subscribeToResponse(id, (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);

        return;
      }

      if (payload.result) {
        this._handleSessionResponse(errorMsg, payload.result);
      } else if (payload.error && payload.error.message) {
        this._handleSessionResponse(payload.error.message);
      } else {
        this._handleSessionResponse(errorMsg);
      }
    });
  }

  _subscribeToCallResponse(id) {
    return new Promise((resolve, reject) => {
      this._subscribeToResponse(id, (error, payload) => {
        if (error) {
          reject(error);
          return;
        }

        if (payload.result) {
          resolve(payload.result);
        } else if (payload.error && payload.error.message) {
          reject(new Error(payload.error.message));
        } else {
          reject(new Error(_errors.ERROR_INVALID_RESPONSE));
        }
      });
    });
  }

  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.open(this.uri, () => {
          this._eventManager.trigger({
            event: "modal_closed",
            params: []
          });
        }, this._qrcodeModalOptions);
      }
    });
    this.on("connect", () => {
      if (this._qrcodeModal) {
        this._qrcodeModal.close();
      }
    });
    this.on("call_request_sent", (error, payload) => {
      const {
        request
      } = payload.params[0];

      if ((0, _utils.isMobile)() && this._signingMethods.includes(request.method)) {
        const mobileLinkUrl = (0, _utils.getLocal)(_utils.mobileLinkChoiceKey);

        if (mobileLinkUrl) {
          window.location.href = mobileLinkUrl.href;
        }
      }
    });
    this.on("wc_sessionRequest", (error, payload) => {
      if (error) {
        this._eventManager.trigger({
          event: "error",
          params: [{
            code: "SESSION_REQUEST_ERROR",
            message: error.toString()
          }]
        });
      }

      this.handshakeId = payload.id;
      this.peerId = payload.params[0].peerId;
      this.peerMeta = payload.params[0].peerMeta;
      const internalPayload = Object.assign(Object.assign({}, payload), {
        method: "session_request"
      });

      this._eventManager.trigger(internalPayload);
    });
    this.on("wc_sessionUpdate", (error, payload) => {
      if (error) {
        this._handleSessionResponse(error.message);
      }

      this._handleSessionResponse("Session disconnected", payload.params[0]);
    });
  }

  _initTransport() {
    this._transport.on("message", socketMessage => this._handleIncomingMessages(socketMessage));

    this._transport.on("open", () => this._eventManager.trigger({
      event: "transport_open",
      params: []
    }));

    this._transport.on("close", () => this._eventManager.trigger({
      event: "transport_close",
      params: []
    }));

    this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    }));

    this._transport.open();
  }

  _formatUri() {
    const protocol = this.protocol;
    const handshakeTopic = this.handshakeTopic;
    const version = this.version;
    const bridge = encodeURIComponent(this.bridge);
    const key = this.key;
    const uri = `${protocol}:${handshakeTopic}@${version}?bridge=${bridge}&key=${key}`;
    return uri;
  }

  _parseUri(uri) {
    const result = (0, _utils.parseWalletConnectUri)(uri);

    if (result.protocol === this.protocol) {
      if (!result.handshakeTopic) {
        throw Error("Invalid or missing handshakeTopic parameter value");
      }

      const handshakeTopic = result.handshakeTopic;

      if (!result.bridge) {
        throw Error("Invalid or missing bridge url parameter value");
      }

      const bridge = decodeURIComponent(result.bridge);

      if (!result.key) {
        throw Error("Invalid or missing key parameter value");
      }

      const key = result.key;
      return {
        handshakeTopic,
        bridge,
        key
      };
    } else {
      throw new Error(_errors.ERROR_INVALID_URI);
    }
  }

  async _generateKey() {
    if (this._cryptoLib) {
      const result = await this._cryptoLib.generateKey();
      return result;
    }

    return null;
  }

  async _encrypt(data) {
    const key = this._key;

    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.encrypt(data, key);
      return result;
    }

    return null;
  }

  async _decrypt(payload) {
    const key = this._key;

    if (this._cryptoLib && key) {
      const result = await this._cryptoLib.decrypt(payload, key);
      return result;
    }

    return null;
  }

  _getStorageSession() {
    let result = null;

    if (this._sessionStorage) {
      result = this._sessionStorage.getSession();
    }

    return result;
  }

  _setStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.setSession(this.session);
    }
  }

  _removeStorageSession() {
    if (this._sessionStorage) {
      this._sessionStorage.removeSession();
    }
  }

  _manageStorageSession() {
    if (this._connected) {
      this._setStorageSession();
    } else {
      this._removeStorageSession();
    }
  }

  _registerPushServer(pushServerOpts) {
    if (!pushServerOpts.url || typeof pushServerOpts.url !== "string") {
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    }

    if (!pushServerOpts.type || typeof pushServerOpts.type !== "string") {
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    }

    if (!pushServerOpts.token || typeof pushServerOpts.token !== "string") {
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    }

    const pushSubscription = {
      bridge: this.bridge,
      topic: this.clientId,
      type: pushServerOpts.type,
      token: pushServerOpts.token,
      peerName: "",
      language: pushServerOpts.language || ""
    };
    this.on("connect", async (error, payload) => {
      if (error) {
        throw error;
      }

      if (pushServerOpts.peerMeta) {
        const peerName = payload.params[0].peerMeta.name;
        pushSubscription.peerName = peerName;
      }

      try {
        const response = await fetch(`${pushServerOpts.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(pushSubscription)
        });
        const json = await response.json();

        if (!json.success) {
          throw Error("Failed to register in Push Server");
        }
      } catch (error) {
        throw Error("Failed to register in Push Server");
      }
    });
  }

}

var _default = Connector;
exports.default = _default;
},{"@walletconnect/utils":"node_modules/@walletconnect/utils/dist/esm/index.js","@walletconnect/socket-transport":"node_modules/@walletconnect/socket-transport/dist/esm/index.js","./errors":"node_modules/@walletconnect/core/dist/esm/errors.js","./events":"node_modules/@walletconnect/core/dist/esm/events.js","./storage":"node_modules/@walletconnect/core/dist/esm/storage.js","./url":"node_modules/@walletconnect/core/dist/esm/url.js"}],"node_modules/@walletconnect/randombytes/dist/esm/browser/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomBytes = randomBytes;

var env = _interopRequireWildcard(require("@walletconnect/environment"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function randomBytes(length) {
  const browserCrypto = env.getBrowerCrypto();
  return browserCrypto.getRandomValues(new Uint8Array(length));
}
},{"@walletconnect/environment":"node_modules/@walletconnect/environment/dist/cjs/index.js"}],"node_modules/@walletconnect/crypto/dist/esm/constants/length.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LENGTH_64 = exports.LENGTH_512 = exports.LENGTH_32 = exports.LENGTH_256 = exports.LENGTH_16 = exports.LENGTH_128 = exports.LENGTH_1024 = exports.LENGTH_1 = exports.LENGTH_0 = void 0;
const LENGTH_0 = 0;
exports.LENGTH_0 = LENGTH_0;
const LENGTH_1 = 1;
exports.LENGTH_1 = LENGTH_1;
const LENGTH_16 = 16;
exports.LENGTH_16 = LENGTH_16;
const LENGTH_32 = 32;
exports.LENGTH_32 = LENGTH_32;
const LENGTH_64 = 64;
exports.LENGTH_64 = LENGTH_64;
const LENGTH_128 = 128;
exports.LENGTH_128 = LENGTH_128;
const LENGTH_256 = 256;
exports.LENGTH_256 = LENGTH_256;
const LENGTH_512 = 512;
exports.LENGTH_512 = LENGTH_512;
const LENGTH_1024 = 1024;
exports.LENGTH_1024 = LENGTH_1024;
},{}],"node_modules/@walletconnect/crypto/dist/esm/constants/default.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SHA512_NODE_ALGO = exports.SHA512_BROWSER_ALGO = exports.SHA256_NODE_ALGO = exports.SHA256_BROWSER_ALGO = exports.RIPEMD160_NODE_ALGO = exports.PREFIX_LENGTH = exports.MAC_LENGTH = exports.KEY_LENGTH = exports.IV_LENGTH = exports.HMAC_NODE_ALGO = exports.HMAC_LENGTH = exports.HMAC_BROWSER_ALGO = exports.HMAC_BROWSER = exports.AES_NODE_ALGO = exports.AES_LENGTH = exports.AES_BROWSER_ALGO = void 0;

var _length = require("./length");

const AES_LENGTH = _length.LENGTH_256;
exports.AES_LENGTH = AES_LENGTH;
const HMAC_LENGTH = _length.LENGTH_256;
exports.HMAC_LENGTH = HMAC_LENGTH;
const AES_BROWSER_ALGO = "AES-CBC";
exports.AES_BROWSER_ALGO = AES_BROWSER_ALGO;
const HMAC_BROWSER_ALGO = `SHA-${AES_LENGTH}`;
exports.HMAC_BROWSER_ALGO = HMAC_BROWSER_ALGO;
const HMAC_BROWSER = "HMAC";
exports.HMAC_BROWSER = HMAC_BROWSER;
const SHA256_BROWSER_ALGO = "SHA-256";
exports.SHA256_BROWSER_ALGO = SHA256_BROWSER_ALGO;
const SHA512_BROWSER_ALGO = "SHA-512";
exports.SHA512_BROWSER_ALGO = SHA512_BROWSER_ALGO;
const AES_NODE_ALGO = `aes-${AES_LENGTH}-cbc`;
exports.AES_NODE_ALGO = AES_NODE_ALGO;
const HMAC_NODE_ALGO = `sha${HMAC_LENGTH}`;
exports.HMAC_NODE_ALGO = HMAC_NODE_ALGO;
const SHA256_NODE_ALGO = "sha256";
exports.SHA256_NODE_ALGO = SHA256_NODE_ALGO;
const SHA512_NODE_ALGO = "sha512";
exports.SHA512_NODE_ALGO = SHA512_NODE_ALGO;
const RIPEMD160_NODE_ALGO = "ripemd160";
exports.RIPEMD160_NODE_ALGO = RIPEMD160_NODE_ALGO;
const PREFIX_LENGTH = _length.LENGTH_1;
exports.PREFIX_LENGTH = PREFIX_LENGTH;
const KEY_LENGTH = _length.LENGTH_32;
exports.KEY_LENGTH = KEY_LENGTH;
const IV_LENGTH = _length.LENGTH_16;
exports.IV_LENGTH = IV_LENGTH;
const MAC_LENGTH = _length.LENGTH_32;
exports.MAC_LENGTH = MAC_LENGTH;
},{"./length":"node_modules/@walletconnect/crypto/dist/esm/constants/length.js"}],"node_modules/@walletconnect/crypto/dist/esm/constants/encoding.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UTF8_ENC = exports.HEX_ENC = void 0;
const HEX_ENC = "hex";
exports.HEX_ENC = HEX_ENC;
const UTF8_ENC = "utf8";
exports.UTF8_ENC = UTF8_ENC;
},{}],"node_modules/@walletconnect/crypto/dist/esm/constants/error.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERROR_BAD_MAC = void 0;
const ERROR_BAD_MAC = "Bad MAC";
exports.ERROR_BAD_MAC = ERROR_BAD_MAC;
},{}],"node_modules/@walletconnect/crypto/dist/esm/constants/operations.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERIFY_OP = exports.SIGN_OP = exports.ENCRYPT_OP = exports.DECRYPT_OP = void 0;
const ENCRYPT_OP = "encrypt";
exports.ENCRYPT_OP = ENCRYPT_OP;
const DECRYPT_OP = "decrypt";
exports.DECRYPT_OP = DECRYPT_OP;
const SIGN_OP = "sign";
exports.SIGN_OP = SIGN_OP;
const VERIFY_OP = "verify";
exports.VERIFY_OP = VERIFY_OP;
},{}],"node_modules/@walletconnect/crypto/dist/esm/constants/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _default = require("./default");

Object.keys(_default).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _default[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _default[key];
    }
  });
});

var _encoding = require("./encoding");

Object.keys(_encoding).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _encoding[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _encoding[key];
    }
  });
});

var _error = require("./error");

Object.keys(_error).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _error[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _error[key];
    }
  });
});

var _length = require("./length");

Object.keys(_length).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _length[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _length[key];
    }
  });
});

var _operations = require("./operations");

Object.keys(_operations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _operations[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _operations[key];
    }
  });
});
},{"./default":"node_modules/@walletconnect/crypto/dist/esm/constants/default.js","./encoding":"node_modules/@walletconnect/crypto/dist/esm/constants/encoding.js","./error":"node_modules/@walletconnect/crypto/dist/esm/constants/error.js","./length":"node_modules/@walletconnect/crypto/dist/esm/constants/length.js","./operations":"node_modules/@walletconnect/crypto/dist/esm/constants/operations.js"}],"node_modules/@walletconnect/crypto/dist/esm/lib/browser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.browserAesDecrypt = browserAesDecrypt;
exports.browserAesEncrypt = browserAesEncrypt;
exports.browserExportKey = browserExportKey;
exports.browserHmacSha256Sign = browserHmacSha256Sign;
exports.browserHmacSha512Sign = browserHmacSha512Sign;
exports.browserImportKey = browserImportKey;
exports.browserSha256 = browserSha256;
exports.browserSha512 = browserSha512;
exports.getAlgo = getAlgo;
exports.getOps = getOps;

var env = _interopRequireWildcard(require("@walletconnect/environment"));

var _constants = require("../constants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getAlgo(type) {
  return type === _constants.AES_BROWSER_ALGO ? {
    length: _constants.AES_LENGTH,
    name: _constants.AES_BROWSER_ALGO
  } : {
    hash: {
      name: _constants.HMAC_BROWSER_ALGO
    },
    name: _constants.HMAC_BROWSER
  };
}

function getOps(type) {
  return type === _constants.AES_BROWSER_ALGO ? [_constants.ENCRYPT_OP, _constants.DECRYPT_OP] : [_constants.SIGN_OP, _constants.VERIFY_OP];
}

async function browserExportKey(cryptoKey, type = _constants.AES_BROWSER_ALGO) {
  const subtle = env.getSubtleCrypto();
  return new Uint8Array(await subtle.exportKey("raw", cryptoKey));
}

async function browserImportKey(buffer, type = _constants.AES_BROWSER_ALGO) {
  return env.getSubtleCrypto().importKey("raw", buffer, getAlgo(type), true, getOps(type));
}

async function browserAesEncrypt(iv, key, data) {
  const subtle = env.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, _constants.AES_BROWSER_ALGO);
  const result = await subtle.encrypt({
    iv,
    name: _constants.AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}

async function browserAesDecrypt(iv, key, data) {
  const subtle = env.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, _constants.AES_BROWSER_ALGO);
  const result = await subtle.decrypt({
    iv,
    name: _constants.AES_BROWSER_ALGO
  }, cryptoKey, data);
  return new Uint8Array(result);
}

async function browserHmacSha256Sign(key, data) {
  const subtle = env.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, _constants.HMAC_BROWSER);
  const signature = await subtle.sign({
    length: _constants.HMAC_LENGTH,
    name: _constants.HMAC_BROWSER
  }, cryptoKey, data);
  return new Uint8Array(signature);
}

async function browserHmacSha512Sign(key, data) {
  const subtle = env.getSubtleCrypto();
  const cryptoKey = await browserImportKey(key, _constants.HMAC_BROWSER);
  const signature = await subtle.sign({
    length: _constants.LENGTH_512,
    name: _constants.HMAC_BROWSER
  }, cryptoKey, data);
  return new Uint8Array(signature);
}

async function browserSha256(data) {
  const subtle = env.getSubtleCrypto();
  const result = await subtle.digest({
    name: _constants.SHA256_BROWSER_ALGO
  }, data);
  return new Uint8Array(result);
}

async function browserSha512(data) {
  const subtle = env.getSubtleCrypto();
  const result = await subtle.digest({
    name: _constants.SHA512_BROWSER_ALGO
  }, data);
  return new Uint8Array(result);
}
},{"@walletconnect/environment":"node_modules/@walletconnect/environment/dist/cjs/index.js","../constants":"node_modules/@walletconnect/crypto/dist/esm/constants/index.js"}],"node_modules/@walletconnect/crypto/dist/esm/browser/aes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aesCbcDecrypt = aesCbcDecrypt;
exports.aesCbcEncrypt = aesCbcEncrypt;

var _browser = require("../lib/browser");

function aesCbcEncrypt(iv, key, data) {
  return (0, _browser.browserAesEncrypt)(iv, key, data);
}

function aesCbcDecrypt(iv, key, data) {
  return (0, _browser.browserAesDecrypt)(iv, key, data);
}
},{"../lib/browser":"node_modules/@walletconnect/crypto/dist/esm/lib/browser.js"}],"node_modules/@walletconnect/crypto/dist/esm/helpers/env.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _environment = require("@walletconnect/environment");

Object.keys(_environment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _environment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _environment[key];
    }
  });
});
},{"@walletconnect/environment":"node_modules/@walletconnect/environment/dist/cjs/index.js"}],"node_modules/@walletconnect/crypto/dist/esm/helpers/pkcs7.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pkcs7 = void 0;
const PADDING = [[16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16], [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15], [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14], [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13], [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [9, 9, 9, 9, 9, 9, 9, 9, 9], [8, 8, 8, 8, 8, 8, 8, 8], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]];
const pkcs7 = {
  pad(plaintext) {
    const padding = PADDING[plaintext.byteLength % 16 || 0];
    const result = new Uint8Array(plaintext.byteLength + padding.length);
    result.set(plaintext);
    result.set(padding, plaintext.byteLength);
    return result;
  },

  unpad(padded) {
    return padded.subarray(0, padded.byteLength - padded[padded.byteLength - 1]);
  }

};
exports.pkcs7 = pkcs7;
},{}],"node_modules/@walletconnect/crypto/dist/esm/helpers/types.js":[function(require,module,exports) {

},{}],"node_modules/@walletconnect/crypto/dist/esm/helpers/validators.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assert = assert;
exports.isConstantTime = isConstantTime;

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || "Assertion failed");
  }
}

function isConstantTime(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let res = 0;

  for (let i = 0; i < arr1.length; i++) {
    res |= arr1[i] ^ arr2[i];
  }

  return res === 0;
}
},{}],"node_modules/@walletconnect/crypto/dist/esm/helpers/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = require("./env");

Object.keys(_env).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _env[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _env[key];
    }
  });
});

var _pkcs = require("./pkcs7");

Object.keys(_pkcs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pkcs[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _pkcs[key];
    }
  });
});

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

var _validators = require("./validators");

Object.keys(_validators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _validators[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _validators[key];
    }
  });
});
},{"./env":"node_modules/@walletconnect/crypto/dist/esm/helpers/env.js","./pkcs7":"node_modules/@walletconnect/crypto/dist/esm/helpers/pkcs7.js","./types":"node_modules/@walletconnect/crypto/dist/esm/helpers/types.js","./validators":"node_modules/@walletconnect/crypto/dist/esm/helpers/validators.js"}],"node_modules/@walletconnect/crypto/dist/esm/browser/hmac.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmacSha256Sign = hmacSha256Sign;
exports.hmacSha256Verify = hmacSha256Verify;
exports.hmacSha512Sign = hmacSha512Sign;
exports.hmacSha512Verify = hmacSha512Verify;

var _browser = require("../lib/browser");

var _helpers = require("../helpers");

async function hmacSha256Sign(key, msg) {
  const result = await (0, _browser.browserHmacSha256Sign)(key, msg);
  return result;
}

async function hmacSha256Verify(key, msg, sig) {
  const expectedSig = await (0, _browser.browserHmacSha256Sign)(key, msg);
  const result = (0, _helpers.isConstantTime)(expectedSig, sig);
  return result;
}

async function hmacSha512Sign(key, msg) {
  const result = await (0, _browser.browserHmacSha512Sign)(key, msg);
  return result;
}

async function hmacSha512Verify(key, msg, sig) {
  const expectedSig = await (0, _browser.browserHmacSha512Sign)(key, msg);
  const result = (0, _helpers.isConstantTime)(expectedSig, sig);
  return result;
}
},{"../lib/browser":"node_modules/@walletconnect/crypto/dist/esm/lib/browser.js","../helpers":"node_modules/@walletconnect/crypto/dist/esm/helpers/index.js"}],"node_modules/@walletconnect/crypto/dist/esm/browser/sha2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ripemd160 = ripemd160;
exports.sha256 = sha256;
exports.sha512 = sha512;

var _browser = require("../lib/browser");

async function sha256(msg) {
  const result = await (0, _browser.browserSha256)(msg);
  return result;
}

async function sha512(msg) {
  const result = await (0, _browser.browserSha512)(msg);
  return result;
}

async function ripemd160(msg) {
  throw new Error("Not supported for Browser async methods, use sync instead!");
}
},{"../lib/browser":"node_modules/@walletconnect/crypto/dist/esm/lib/browser.js"}],"node_modules/@walletconnect/crypto/dist/esm/browser/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _randombytes = require("@walletconnect/randombytes");

Object.keys(_randombytes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _randombytes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _randombytes[key];
    }
  });
});

var _aes = require("./aes");

Object.keys(_aes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _aes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _aes[key];
    }
  });
});

var _hmac = require("./hmac");

Object.keys(_hmac).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hmac[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hmac[key];
    }
  });
});

var _sha = require("./sha2");

Object.keys(_sha).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _sha[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _sha[key];
    }
  });
});

var _helpers = require("../helpers");

Object.keys(_helpers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _helpers[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _helpers[key];
    }
  });
});

var _constants = require("../constants");

Object.keys(_constants).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _constants[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _constants[key];
    }
  });
});
},{"@walletconnect/randombytes":"node_modules/@walletconnect/randombytes/dist/esm/browser/index.js","./aes":"node_modules/@walletconnect/crypto/dist/esm/browser/aes.js","./hmac":"node_modules/@walletconnect/crypto/dist/esm/browser/hmac.js","./sha2":"node_modules/@walletconnect/crypto/dist/esm/browser/sha2.js","../helpers":"node_modules/@walletconnect/crypto/dist/esm/helpers/index.js","../constants":"node_modules/@walletconnect/crypto/dist/esm/constants/index.js"}],"node_modules/@walletconnect/iso-crypto/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrypt = decrypt;
exports.encrypt = encrypt;
exports.generateKey = generateKey;
exports.verifyHmac = verifyHmac;

var crypto = _interopRequireWildcard(require("@walletconnect/crypto"));

var encoding = _interopRequireWildcard(require("@walletconnect/encoding"));

var _utils = require("@walletconnect/utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

async function generateKey(length) {
  const _length = (length || 256) / 8;

  const bytes = crypto.randomBytes(_length);
  const result = (0, _utils.convertBufferToArrayBuffer)(encoding.arrayToBuffer(bytes));
  return result;
}

async function verifyHmac(payload, key) {
  const cipherText = encoding.hexToArray(payload.data);
  const iv = encoding.hexToArray(payload.iv);
  const hmac = encoding.hexToArray(payload.hmac);
  const hmacHex = encoding.arrayToHex(hmac, false);
  const unsigned = encoding.concatArrays(cipherText, iv);
  const chmac = await crypto.hmacSha256Sign(key, unsigned);
  const chmacHex = encoding.arrayToHex(chmac, false);

  if (encoding.removeHexPrefix(hmacHex) === encoding.removeHexPrefix(chmacHex)) {
    return true;
  }

  return false;
}

async function encrypt(data, key, providedIv) {
  const _key = encoding.bufferToArray((0, _utils.convertArrayBufferToBuffer)(key));

  const ivArrayBuffer = providedIv || (await generateKey(128));
  const iv = encoding.bufferToArray((0, _utils.convertArrayBufferToBuffer)(ivArrayBuffer));
  const ivHex = encoding.arrayToHex(iv, false);
  const contentString = JSON.stringify(data);
  const content = encoding.utf8ToArray(contentString);
  const cipherText = await crypto.aesCbcEncrypt(iv, _key, content);
  const cipherTextHex = encoding.arrayToHex(cipherText, false);
  const unsigned = encoding.concatArrays(cipherText, iv);
  const hmac = await crypto.hmacSha256Sign(_key, unsigned);
  const hmacHex = encoding.arrayToHex(hmac, false);
  return {
    data: cipherTextHex,
    hmac: hmacHex,
    iv: ivHex
  };
}

async function decrypt(payload, key) {
  const _key = encoding.bufferToArray((0, _utils.convertArrayBufferToBuffer)(key));

  if (!_key) {
    throw new Error("Missing key: required for decryption");
  }

  const verified = await verifyHmac(payload, _key);

  if (!verified) {
    return null;
  }

  const cipherText = encoding.hexToArray(payload.data);
  const iv = encoding.hexToArray(payload.iv);
  const buffer = await crypto.aesCbcDecrypt(iv, _key, cipherText);
  const utf8 = encoding.arrayToUtf8(buffer);
  let data;

  try {
    data = JSON.parse(utf8);
  } catch (error) {
    return null;
  }

  return data;
}
},{"@walletconnect/crypto":"node_modules/@walletconnect/crypto/dist/esm/browser/index.js","@walletconnect/encoding":"node_modules/@walletconnect/encoding/dist/esm/index.js","@walletconnect/utils":"node_modules/@walletconnect/utils/dist/esm/index.js"}],"node_modules/@walletconnect/client/dist/esm/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = _interopRequireDefault(require("@walletconnect/core"));

var cryptoLib = _interopRequireWildcard(require("@walletconnect/iso-crypto"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class WalletConnect extends _core.default {
  constructor(connectorOpts, pushServerOpts) {
    super({
      cryptoLib,
      connectorOpts,
      pushServerOpts
    });
  }

}

var _default = WalletConnect;
exports.default = _default;
},{"@walletconnect/core":"node_modules/@walletconnect/core/dist/esm/index.js","@walletconnect/iso-crypto":"node_modules/@walletconnect/iso-crypto/dist/esm/index.js"}],"node_modules/@web3auth/wallet-connect-v1-adapter/dist/walletConnectV1Adapter.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletConnectV1Adapter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _client = _interopRequireDefault(require("@walletconnect/client"));

var _base = require("@web3auth/base");

var _ethereumProvider = require("@web3auth/ethereum-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

class WalletConnectV1Adapter extends _base.BaseAdapter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();
    (0, _defineProperty2.default)(this, "name", _base.WALLET_ADAPTERS.WALLET_CONNECT_V1);
    (0, _defineProperty2.default)(this, "adapterNamespace", _base.ADAPTER_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "currentChainNamespace", _base.CHAIN_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "type", _base.ADAPTER_CATEGORY.EXTERNAL);
    (0, _defineProperty2.default)(this, "adapterOptions", void 0);
    (0, _defineProperty2.default)(this, "status", _base.ADAPTER_STATUS.NOT_READY);
    (0, _defineProperty2.default)(this, "adapterData", {
      uri: ""
    });
    (0, _defineProperty2.default)(this, "connector", null);
    (0, _defineProperty2.default)(this, "wcProvider", null);
    (0, _defineProperty2.default)(this, "rehydrated", false);
    this.adapterOptions = _objectSpread({}, options);
    this.chainConfig = options.chainConfig || null;
  }

  get connected() {
    var _this$connector;

    return !!((_this$connector = this.connector) !== null && _this$connector !== void 0 && _this$connector.connected);
  }

  get provider() {
    var _this$wcProvider;

    return ((_this$wcProvider = this.wcProvider) === null || _this$wcProvider === void 0 ? void 0 : _this$wcProvider.provider) || null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init() {
    super.checkInitializationRequirements();

    if (!this.chainConfig) {
      this.chainConfig = (0, _base.getChainConfig)(_base.CHAIN_NAMESPACES.EIP155, 1);
    } // Create a connector


    this.connector = this.getWalletConnectInstance();
    this.wcProvider = new _ethereumProvider.WalletConnectProvider({
      config: {
        chainConfig: this.chainConfig
      }
    });
    this.emit(_base.ADAPTER_EVENTS.READY, _base.WALLET_ADAPTERS.WALLET_CONNECT_V1);
    this.status = _base.ADAPTER_STATUS.READY;

    if (this.connector.connected) {
      this.rehydrated = true;
      await this.onConnectHandler({
        accounts: this.connector.accounts,
        chainId: this.connector.chainId.toString()
      });
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.connector) throw _base.WalletInitializationError.notReady("Wallet adapter is not ready yet");

    if (this.connected) {
      await this.onConnectHandler({
        accounts: this.connector.accounts,
        chainId: this.connector.chainId.toString()
      });
      return this.provider;
    }

    if (this.status !== _base.ADAPTER_STATUS.CONNECTING) {
      var _this$adapterOptions$; // for wallet connect qr code modal we have to create a new connector, coz wallet connect internally does not open
      // modal again on existing instance if connection is pending.


      if ((_this$adapterOptions$ = this.adapterOptions.adapterSettings) !== null && _this$adapterOptions$ !== void 0 && _this$adapterOptions$.qrcodeModal) {
        this.connector = this.getWalletConnectInstance();
      }

      await this.createNewSession();
      this.status = _base.ADAPTER_STATUS.CONNECTING;
      this.emit(_base.ADAPTER_EVENTS.CONNECTING, {
        adapter: _base.WALLET_ADAPTERS.WALLET_CONNECT_V1
      });
    }

    return new Promise((resolve, reject) => {
      if (!this.connector) return reject(_base.WalletInitializationError.notReady("Wallet adapter is not ready yet")); // for wallet connect default modal.

      this.connector.on("modal_closed", async () => {
        this.status = _base.ADAPTER_STATUS.READY;
        this.emit(_base.ADAPTER_EVENTS.READY, _base.WALLET_ADAPTERS.WALLET_CONNECT_V1);
        return reject(new Error("User closed modal"));
      });

      try {
        // Subscribe to session connection
        this.connector.on("connect", async (error, payload) => {
          if (error) {
            this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
          }

          await this.onConnectHandler(payload.params[0]);
          return resolve(this.provider);
        });
      } catch (error) {
        _base.log.error("Wallet connect v1 adapter error while connecting", error); // ready again to be connected


        this.status = _base.ADAPTER_STATUS.READY;
        this.rehydrated = true;
        this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
        reject(error instanceof _base.Web3AuthError ? error : _base.WalletLoginError.connectionError("Failed to login with wallet connect: ".concat((error === null || error === void 0 ? void 0 : error.message) || "")));
      }
    });
  }

  async getUserInfo() {
    if (!this.connected) throw _base.WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    const {
      cleanup
    } = options;
    if (!this.connector || !this.connected) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");
    await this.connector.killSession();
    this.rehydrated = false;

    if (cleanup) {
      this.connector = null;
      this.status = _base.ADAPTER_STATUS.NOT_READY;
      this.wcProvider = null;
    } else {
      // ready to connect again
      this.status = _base.ADAPTER_STATUS.READY;
    }

    this.emit(_base.ADAPTER_EVENTS.DISCONNECTED);
  }

  async createNewSession() {
    var _this$adapterOptions, _this$adapterOptions$2;

    let opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      forceNewSession: false
    };
    if (!this.connector) throw _base.WalletInitializationError.notReady("Wallet adapter is not ready yet");

    if (opts.forceNewSession && this.connector.pending) {
      await this.connector.killSession();
    } // for wallet connect qr modal


    if ((_this$adapterOptions = this.adapterOptions) !== null && _this$adapterOptions !== void 0 && (_this$adapterOptions$2 = _this$adapterOptions.adapterSettings) !== null && _this$adapterOptions$2 !== void 0 && _this$adapterOptions$2.qrcodeModal) {
      var _this$chainConfig;

      await this.connector.createSession({
        chainId: parseInt(((_this$chainConfig = this.chainConfig) === null || _this$chainConfig === void 0 ? void 0 : _this$chainConfig.chainId) || "0x1", 16)
      });
      return;
    } // for web3auth qr code modal


    return new Promise((resolve, reject) => {
      var _this$chainConfig2;

      if (!this.connector) return reject(_base.WalletInitializationError.notReady("Wallet adapter is not ready yet"));

      _base.log.debug("creating new session for web3auth wallet connect");

      this.connector.on("display_uri", async (err, payload) => {
        var _this$connector2;

        if (err) {
          this.emit(_base.ADAPTER_EVENTS.ERRORED, _base.WalletLoginError.connectionError("Failed to display wallet connect qr code"));
          return reject(err);
        }

        const uri = payload.params[0];
        this.updateAdapterData({
          uri
        });
        (_this$connector2 = this.connector) === null || _this$connector2 === void 0 ? void 0 : _this$connector2.off("display_uri");
        return resolve();
      });
      this.connector.createSession({
        chainId: parseInt(((_this$chainConfig2 = this.chainConfig) === null || _this$chainConfig2 === void 0 ? void 0 : _this$chainConfig2.chainId) || "0x1", 16)
      }).catch(error => {
        _base.log.error("error while creating new wallet connect session", error);

        this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
        return reject(error);
      });
    });
  }

  async onConnectHandler(params) {
    if (!this.connector || !this.wcProvider) throw _base.WalletInitializationError.notReady("Wallet adapter is not ready yet");
    if (!this.chainConfig) throw _base.WalletInitializationError.invalidParams("Chain config is not set");
    const {
      chainId
    } = params;

    _base.log.debug("connected chainId", chainId);

    const connectedChainId = parseInt(chainId, (0, _base.isHexStrict)(chainId) ? 16 : 10);

    if (connectedChainId !== parseInt(this.chainConfig.chainId, 16)) {
      // we need to create a new session since old session is already used and
      // user needs to login again with correct chain with new qr code.
      await this.createNewSession({
        forceNewSession: true
      });
      this.emit(_base.ADAPTER_EVENTS.ERRORED, _base.WalletInitializationError.fromCode(5000, "Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId, ", Current: ").concat(connectedChainId, ", Please switch to correct chain from wallet")));
      return;
    }

    await this.wcProvider.setupProvider(this.connector);
    this.subscribeEvents(this.connector);
    this.status = _base.ADAPTER_STATUS.CONNECTED;
    this.emit(_base.ADAPTER_EVENTS.CONNECTED, {
      adapter: _base.WALLET_ADAPTERS.WALLET_CONNECT_V1,
      reconnected: this.rehydrated
    });
  }

  subscribeEvents(connector) {
    connector.on("session_update", async error => {
      if (error) {
        this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
      }
    });
  }

  getWalletConnectInstance() {
    const walletConnectOptions = this.adapterOptions.adapterSettings || {};
    walletConnectOptions.bridge = walletConnectOptions.bridge || "https://bridge.walletconnect.org"; // Create a connector

    return new _client.default(walletConnectOptions);
  }

}

exports.WalletConnectV1Adapter = WalletConnectV1Adapter;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@walletconnect/client":"node_modules/@walletconnect/client/dist/esm/index.js","@web3auth/base":"node_modules/@web3auth/base/dist/base.esm.js","@web3auth/ethereum-provider":"node_modules/@web3auth/ethereum-provider/dist/ethereumProvider.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58779" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/walletConnectV1Adapter.esm.3b22eae9.js.map