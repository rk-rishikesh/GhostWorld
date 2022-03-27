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
})({"node_modules/@web3auth/openlogin-adapter/dist/openloginAdapter.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOpenloginDefaultOptions = exports.OpenloginAdapter = void 0;

var _openlogin = _interopRequireWildcard(require("@toruslabs/openlogin"));

var _base = require("@web3auth/base");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const getOpenloginDefaultOptions = (chainNamespace, chainId) => {
  return {
    adapterSettings: {
      network: _openlogin.OPENLOGIN_NETWORK.MAINNET,
      clientId: "",
      uxMode: _openlogin.UX_MODE.POPUP
    },
    chainConfig: chainNamespace ? (0, _base.getChainConfig)(chainNamespace, chainId) : null,
    loginSettings: {
      relogin: true
    }
  };
};

exports.getOpenloginDefaultOptions = getOpenloginDefaultOptions;

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

class OpenloginAdapter extends _base.BaseAdapter {
  constructor(params) {
    var _params$chainConfig, _params$chainConfig2, _params$chainConfig3;

    super();
    (0, _defineProperty2.default)(this, "name", _base.WALLET_ADAPTERS.OPENLOGIN);
    (0, _defineProperty2.default)(this, "adapterNamespace", _base.ADAPTER_NAMESPACES.MULTICHAIN);
    (0, _defineProperty2.default)(this, "type", _base.ADAPTER_CATEGORY.IN_APP);
    (0, _defineProperty2.default)(this, "openloginInstance", null);
    (0, _defineProperty2.default)(this, "status", _base.ADAPTER_STATUS.NOT_READY);
    (0, _defineProperty2.default)(this, "currentChainNamespace", _base.CHAIN_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "openloginOptions", void 0);
    (0, _defineProperty2.default)(this, "loginSettings", {});
    (0, _defineProperty2.default)(this, "privKeyProvider", null);

    _base.log.debug("const openlogin adapter", params);

    const defaultOptions = getOpenloginDefaultOptions((_params$chainConfig = params.chainConfig) === null || _params$chainConfig === void 0 ? void 0 : _params$chainConfig.chainNamespace, (_params$chainConfig2 = params.chainConfig) === null || _params$chainConfig2 === void 0 ? void 0 : _params$chainConfig2.chainId);
    this.openloginOptions = _objectSpread(_objectSpread({
      clientId: "",
      network: _openlogin.OPENLOGIN_NETWORK.MAINNET
    }, defaultOptions.adapterSettings), params.adapterSettings || {});
    this.loginSettings = _objectSpread(_objectSpread({}, defaultOptions.loginSettings), params.loginSettings); // if no chainNamespace is passed then chain config should be set before calling init

    if ((_params$chainConfig3 = params.chainConfig) !== null && _params$chainConfig3 !== void 0 && _params$chainConfig3.chainNamespace) {
      var _params$chainConfig4;

      this.currentChainNamespace = (_params$chainConfig4 = params.chainConfig) === null || _params$chainConfig4 === void 0 ? void 0 : _params$chainConfig4.chainNamespace;
      const defaultChainIdConfig = defaultOptions.chainConfig ? defaultOptions.chainConfig : {};
      this.chainConfig = _objectSpread(_objectSpread({}, defaultChainIdConfig), params === null || params === void 0 ? void 0 : params.chainConfig);

      _base.log.debug("const openlogin chainConfig", this.chainConfig);

      if (!this.chainConfig.rpcTarget) {
        throw _base.WalletInitializationError.invalidParams("rpcTarget is required in chainConfig");
      }
    }
  }

  get chainConfigProxy() {
    return this.chainConfig ? _objectSpread({}, this.chainConfig) : null;
  }

  get provider() {
    var _this$privKeyProvider;

    return ((_this$privKeyProvider = this.privKeyProvider) === null || _this$privKeyProvider === void 0 ? void 0 : _this$privKeyProvider.provider) || null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    var _this$openloginOption;

    super.checkInitializationRequirements();
    if (!((_this$openloginOption = this.openloginOptions) !== null && _this$openloginOption !== void 0 && _this$openloginOption.clientId)) throw _base.WalletInitializationError.invalidParams("clientId is required before openlogin's initialization");
    if (!this.chainConfig) throw _base.WalletInitializationError.invalidParams("chainConfig is required before initialization");
    let isRedirectResult = false;

    if (this.openloginOptions.uxMode === _openlogin.UX_MODE.REDIRECT) {
      const redirectResult = (0, _openlogin.getHashQueryParams)();

      if (Object.keys(redirectResult).length > 0 && redirectResult._pid) {
        isRedirectResult = true;
      }
    }

    this.openloginOptions = _objectSpread(_objectSpread({}, this.openloginOptions), {}, {
      replaceUrlOnRedirect: isRedirectResult
    });
    this.openloginInstance = new _openlogin.default(this.openloginOptions);
    await this.openloginInstance.init();
    this.status = _base.ADAPTER_STATUS.READY;
    this.emit(_base.ADAPTER_EVENTS.READY, _base.WALLET_ADAPTERS.OPENLOGIN);

    try {
      // connect only if it is redirect result or if connect (adapter is cached/already connected in same session) is true
      if (this.openloginInstance.privKey && (options.autoConnect || isRedirectResult)) {
        await this.connect();
      }
    } catch (error) {
      _base.log.error("Failed to connect with cached openlogin provider", error);

      this.emit("ERRORED", error);
    }
  }

  async connect(params) {
    super.checkConnectionRequirements();
    this.status = _base.ADAPTER_STATUS.CONNECTING;
    this.emit(_base.ADAPTER_EVENTS.CONNECTING, _objectSpread(_objectSpread({}, params), {}, {
      adapter: _base.WALLET_ADAPTERS.OPENLOGIN
    }));

    try {
      await this.connectWithProvider(params);
      return this.provider;
    } catch (error) {
      _base.log.error("Failed to connect with openlogin provider", error); // ready again to be connected


      this.status = _base.ADAPTER_STATUS.READY;
      this.emit(_base.ADAPTER_EVENTS.ERRORED, error);

      if (error !== null && error !== void 0 && error.message.includes("user closed popup")) {
        throw _base.WalletLoginError.popupClosed();
      }

      throw _base.WalletLoginError.connectionError("Failed to login with openlogin");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== _base.ADAPTER_STATUS.CONNECTED) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.openloginInstance) throw _base.WalletInitializationError.notReady("openloginInstance is not ready");
    await this.openloginInstance.logout();

    if (options.cleanup) {
      this.status = _base.ADAPTER_STATUS.NOT_READY;
      this.openloginInstance = null;
      this.privKeyProvider = null;
    } else {
      // ready to be connected again
      this.status = _base.ADAPTER_STATUS.READY;
    }

    this.emit(_base.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== _base.ADAPTER_STATUS.CONNECTED) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.openloginInstance) throw _base.WalletInitializationError.notReady("openloginInstance is not ready");
    const userInfo = await this.openloginInstance.getUserInfo();
    return userInfo;
  } // should be called only before initialization.


  setAdapterSettings(adapterSettings) {
    if (this.status === _base.ADAPTER_STATUS.READY) return;
    const defaultOptions = getOpenloginDefaultOptions();
    this.openloginOptions = _objectSpread(_objectSpread(_objectSpread({}, defaultOptions.adapterSettings), this.openloginOptions || {}), adapterSettings);
  } // should be called only before initialization.


  setChainConfig(customChainConfig) {
    super.setChainConfig(customChainConfig);
    this.currentChainNamespace = customChainConfig.chainNamespace;
  }

  async connectWithProvider(params) {
    if (!this.chainConfig) throw _base.WalletInitializationError.invalidParams("chainConfig is required before initialization");
    if (!this.openloginInstance) throw _base.WalletInitializationError.notReady("openloginInstance is not ready");

    if (this.currentChainNamespace === _base.CHAIN_NAMESPACES.SOLANA) {
      const {
        SolanaPrivateKeyProvider
      } = await require("_bundle_loader")(require.resolve('@web3auth/solana-provider'));
      this.privKeyProvider = new SolanaPrivateKeyProvider({
        config: {
          chainConfig: this.chainConfig
        }
      });
    } else if (this.currentChainNamespace === _base.CHAIN_NAMESPACES.EIP155) {
      const {
        EthereumPrivateKeyProvider
      } = await require("_bundle_loader")(require.resolve('@web3auth/ethereum-provider'));
      this.privKeyProvider = new EthereumPrivateKeyProvider({
        config: {
          chainConfig: this.chainConfig
        }
      });
    } else {
      throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace, " found while connecting to wallet"));
    } // if not logged in then login


    if (!this.openloginInstance.privKey && params) {
      var _params$extraLoginOpt;

      await this.openloginInstance.login((0, _lodash.default)(this.loginSettings, {
        loginProvider: params.loginProvider
      }, {
        extraLoginOptions: _objectSpread(_objectSpread({}, params.extraLoginOptions || {}), {}, {
          login_hint: params.login_hint || ((_params$extraLoginOpt = params.extraLoginOptions) === null || _params$extraLoginOpt === void 0 ? void 0 : _params$extraLoginOpt.login_hint)
        })
      }));
    }

    let finalPrivKey = this.openloginInstance.privKey;

    if (finalPrivKey) {
      if (this.currentChainNamespace === _base.CHAIN_NAMESPACES.SOLANA) {
        const {
          getED25519Key
        } = await require("_bundle_loader")(require.resolve('@toruslabs/openlogin-ed25519'));
        finalPrivKey = getED25519Key(finalPrivKey).sk.toString("hex");
      }

      await this.privKeyProvider.setupProvider(finalPrivKey);
      this.status = _base.ADAPTER_STATUS.CONNECTED;
      this.emit(_base.ADAPTER_EVENTS.CONNECTED, {
        adapter: _base.WALLET_ADAPTERS.OPENLOGIN,
        reconnected: !params
      });
    }
  }

}

exports.OpenloginAdapter = OpenloginAdapter;
},{"@toruslabs/openlogin":"node_modules/@toruslabs/openlogin/dist/openlogin.esm.js","@web3auth/base":"node_modules/@web3auth/base/dist/base.esm.js","@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","lodash.merge":"node_modules/lodash.merge/index.js","_bundle_loader":"node_modules/parcel-bundler/src/builtins/bundle-loader.js","@web3auth/solana-provider":[["script.75da7f30.js","script.js"],"script.75da7f30.js.map","node_modules/@web3auth/solana-provider/dist/solanaProvider.esm.js"],"@web3auth/ethereum-provider":[["script.75da7f30.js","script.js"],"script.75da7f30.js.map","node_modules/@web3auth/ethereum-provider/dist/ethereumProvider.esm.js"],"@toruslabs/openlogin-ed25519":[["openloginEd25519.esm.6f79c0d7.js","node_modules/@toruslabs/openlogin-ed25519/dist/openloginEd25519.esm.js"],"openloginEd25519.esm.6f79c0d7.js.map","node_modules/@toruslabs/openlogin-ed25519/dist/openloginEd25519.esm.js"]}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js":[function(require,module,exports) {
module.exports = function loadJSBundle(bundle) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.async = true;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = bundle;

    script.onerror = function (e) {
      script.onerror = script.onload = null;
      reject(e);
    };

    script.onload = function () {
      script.onerror = script.onload = null;
      resolve();
    };

    document.getElementsByTagName('head')[0].appendChild(script);
  });
};
},{}],0:[function(require,module,exports) {
var b=require("node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("js",require("node_modules/parcel-bundler/src/builtins/loaders/browser/js-loader.js"));b.load([]).then(function(){require("node_modules/@web3auth/openlogin-adapter/dist/openloginAdapter.esm.js");});
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/openloginAdapter.esm.d0dade1b.js.map