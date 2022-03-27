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
})({"node_modules/@web3auth/phantom-adapter/dist/phantomAdapter.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhantomAdapter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _base = require("@web3auth/base");

var _solanaProvider = require("@web3auth/solana-provider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function poll(callback, interval, count) {
  return new Promise((resolve, reject) => {
    if (count > 0) {
      setTimeout(async () => {
        const done = await callback();
        if (done) resolve(done);
        if (!done) poll(callback, interval, count - 1).then(res => {
          resolve(res);
          return res;
        }).catch(err => reject(err));
      }, interval);
    } else {
      resolve(false);
    }
  });
}

const detectProvider = async function () {
  var _window$solana;

  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    interval: 1000,
    count: 3
  };
  const isPhantomAvailable = typeof window !== "undefined" && !!((_window$solana = window.solana) !== null && _window$solana !== void 0 && _window$solana.isPhantom);

  if (isPhantomAvailable) {
    return window.solana;
  }

  const isAvailable = await poll(() => {
    var _window$solana2;

    return (_window$solana2 = window.solana) === null || _window$solana2 === void 0 ? void 0 : _window$solana2.isPhantom;
  }, options.interval, options.count);
  if (isAvailable) return window.solana;
  return null;
};

class PhantomAdapter extends _base.BaseAdapter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();
    (0, _defineProperty2.default)(this, "name", _base.WALLET_ADAPTERS.PHANTOM);
    (0, _defineProperty2.default)(this, "adapterNamespace", _base.ADAPTER_NAMESPACES.SOLANA);
    (0, _defineProperty2.default)(this, "currentChainNamespace", _base.CHAIN_NAMESPACES.SOLANA);
    (0, _defineProperty2.default)(this, "type", _base.ADAPTER_CATEGORY.EXTERNAL);
    (0, _defineProperty2.default)(this, "status", _base.ADAPTER_STATUS.NOT_READY);
    (0, _defineProperty2.default)(this, "_wallet", null);
    (0, _defineProperty2.default)(this, "phantomProvider", null);
    (0, _defineProperty2.default)(this, "rehydrated", false);
    (0, _defineProperty2.default)(this, "_onDisconnect", () => {
      if (this._wallet) {
        this._wallet.off("disconnect", this._onDisconnect);

        this.rehydrated = false; // ready to be connected again only if it was previously connected and not cleaned up

        this.status = this.status === _base.ADAPTER_STATUS.CONNECTED ? _base.ADAPTER_STATUS.READY : _base.ADAPTER_STATUS.NOT_READY;
        this.emit(_base.ADAPTER_EVENTS.DISCONNECTED);
      }
    });
    this.chainConfig = options.chainConfig || null;
  }

  get isWalletConnected() {
    var _this$_wallet;

    return !!((_this$_wallet = this._wallet) !== null && _this$_wallet !== void 0 && _this$_wallet.isConnected && this.status === _base.ADAPTER_STATUS.CONNECTED);
  }

  get provider() {
    var _this$phantomProvider;

    return ((_this$phantomProvider = this.phantomProvider) === null || _this$phantomProvider === void 0 ? void 0 : _this$phantomProvider.provider) || null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  setAdapterSettings(_) {}

  async init(options) {
    super.checkInitializationRequirements(); // set chainConfig for mainnet by default if not set

    if (!this.chainConfig) {
      this.chainConfig = (0, _base.getChainConfig)(_base.CHAIN_NAMESPACES.SOLANA, "0x1");
    }

    this._wallet = await detectProvider({
      interval: 500,
      count: 3
    });
    if (!this._wallet) throw _base.WalletInitializationError.notInstalled();
    this.phantomProvider = new _solanaProvider.PhantomInjectedProvider({
      config: {
        chainConfig: this.chainConfig
      }
    });
    this.status = _base.ADAPTER_STATUS.READY;
    this.emit(_base.ADAPTER_EVENTS.READY, _base.WALLET_ADAPTERS.PHANTOM);

    try {
      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      _base.log.error("Failed to connect with cached phantom provider", error);

      this.emit("ERRORED", error);
    }
  }

  async connect() {
    var _this = this;

    try {
      super.checkConnectionRequirements();
      this.status = _base.ADAPTER_STATUS.CONNECTING;
      this.emit(_base.ADAPTER_EVENTS.CONNECTING, {
        adapter: _base.WALLET_ADAPTERS.PHANTOM
      });
      if (!this._wallet) throw _base.WalletInitializationError.notInstalled();

      if (!this._wallet.isConnected) {
        const handleDisconnect = this._wallet._handleDisconnect;

        try {
          await new Promise((resolve, reject) => {
            const connect = async () => {
              await this.connectWithProvider(this._wallet);
              resolve(this.provider);
            };

            if (!this._wallet) return reject(_base.WalletInitializationError.notInstalled());

            this._wallet.once("connect", connect); // Raise an issue on phantom that if window is closed, disconnect event is not fired


            this._wallet._handleDisconnect = function () {
              reject(_base.WalletInitializationError.windowClosed());

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return handleDisconnect.apply(_this._wallet, args);
            };

            this._wallet.connect().catch(reason => {
              reject(reason);
            });
          });
        } catch (error) {
          if (error instanceof _base.Web3AuthError) throw error;
          throw _base.WalletLoginError.connectionError(error === null || error === void 0 ? void 0 : error.message);
        } finally {
          this._wallet._handleDisconnect = handleDisconnect;
        }
      } else {
        await this.connectWithProvider(this._wallet);
      }

      if (!this._wallet.publicKey) throw _base.WalletLoginError.connectionError();

      this._wallet.on("disconnect", this._onDisconnect);

      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = _base.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
      throw error;
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (!this.isWalletConnected) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");

    try {
      var _this$_wallet2;

      await ((_this$_wallet2 = this._wallet) === null || _this$_wallet2 === void 0 ? void 0 : _this$_wallet2.disconnect());

      if (options.cleanup) {
        this.status = _base.ADAPTER_STATUS.NOT_READY;
        this.phantomProvider = null;
        this._wallet = null;
      }

      this.emit(_base.ADAPTER_EVENTS.DISCONNECTED);
    } catch (error) {
      this.emit(_base.ADAPTER_EVENTS.ERRORED, _base.WalletLoginError.disconnectionError(error === null || error === void 0 ? void 0 : error.message));
    }
  }

  async getUserInfo() {
    if (!this.isWalletConnected) throw _base.WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async connectWithProvider(injectedProvider) {
    if (!this.phantomProvider) throw _base.WalletLoginError.connectionError("No phantom provider");
    await this.phantomProvider.setupProvider(injectedProvider);
    this.status = _base.ADAPTER_STATUS.CONNECTED;
    this.emit(_base.ADAPTER_EVENTS.CONNECTED, {
      adapter: _base.WALLET_ADAPTERS.PHANTOM,
      reconnected: this.rehydrated
    });
    return this.provider;
  }

}

exports.PhantomAdapter = PhantomAdapter;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@web3auth/base":"node_modules/@web3auth/base/dist/base.esm.js","@web3auth/solana-provider":"node_modules/@web3auth/solana-provider/dist/solanaProvider.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/phantomAdapter.esm.3e16abad.js.map