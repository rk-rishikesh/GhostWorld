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
})({"node_modules/@metamask/detect-provider/dist/index.js":[function(require,module,exports) {
"use strict";
/**
 * Returns a Promise that resolves to the value of window.ethereum if it is
 * set within the given timeout, or null.
 * The Promise will not reject, but an error will be thrown if invalid options
 * are provided.
 *
 * @param options - Options bag.
 * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
 * Default: false
 * @param options.silent - Whether to silence console errors. Does not affect
 * thrown errors. Default: false
 * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
 * be dispatched. Default: 3000
 * @returns A Promise that resolves with the Provider if it is detected within
 * given timeout, otherwise null.
 */

function detectEthereumProvider() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$mustBeMetaMask = _ref.mustBeMetaMask,
      mustBeMetaMask = _ref$mustBeMetaMask === void 0 ? false : _ref$mustBeMetaMask,
      _ref$silent = _ref.silent,
      silent = _ref$silent === void 0 ? false : _ref$silent,
      _ref$timeout = _ref.timeout,
      timeout = _ref$timeout === void 0 ? 3000 : _ref$timeout;

  _validateInputs();

  var handled = false;
  return new Promise(function (resolve) {
    if (window.ethereum) {
      handleEthereum();
    } else {
      window.addEventListener('ethereum#initialized', handleEthereum, {
        once: true
      });
      setTimeout(function () {
        handleEthereum();
      }, timeout);
    }

    function handleEthereum() {
      if (handled) {
        return;
      }

      handled = true;
      window.removeEventListener('ethereum#initialized', handleEthereum);
      var _window = window,
          ethereum = _window.ethereum;

      if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
        resolve(ethereum);
      } else {
        var message = mustBeMetaMask && ethereum ? 'Non-MetaMask window.ethereum detected.' : 'Unable to detect window.ethereum.';
        !silent && console.error('@metamask/detect-provider:', message);
        resolve(null);
      }
    }
  });

  function _validateInputs() {
    if (typeof mustBeMetaMask !== 'boolean') {
      throw new Error("@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.");
    }

    if (typeof silent !== 'boolean') {
      throw new Error("@metamask/detect-provider: Expected option 'silent' to be a boolean.");
    }

    if (typeof timeout !== 'number') {
      throw new Error("@metamask/detect-provider: Expected option 'timeout' to be a number.");
    }
  }
}

module.exports = detectEthereumProvider;
},{}],"node_modules/@web3auth/metamask-adapter/dist/metamaskAdapter.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetamaskAdapter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _detectProvider = _interopRequireDefault(require("@metamask/detect-provider"));

var _base = require("@web3auth/base");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MetamaskAdapter extends _base.BaseAdapter {
  constructor() {
    let adapterOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();
    (0, _defineProperty2.default)(this, "adapterNamespace", _base.ADAPTER_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "currentChainNamespace", _base.CHAIN_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "type", _base.ADAPTER_CATEGORY.EXTERNAL);
    (0, _defineProperty2.default)(this, "name", _base.WALLET_ADAPTERS.METAMASK);
    (0, _defineProperty2.default)(this, "status", _base.ADAPTER_STATUS.NOT_READY);
    (0, _defineProperty2.default)(this, "rehydrated", false);
    (0, _defineProperty2.default)(this, "metamaskProvider", null);
    this.chainConfig = adapterOptions.chainConfig || null;
  }

  get provider() {
    if (this.status === _base.ADAPTER_STATUS.CONNECTED && this.metamaskProvider) {
      return this.metamaskProvider;
    }

    return null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    super.checkInitializationRequirements();
    this.metamaskProvider = await (0, _detectProvider.default)({
      mustBeMetaMask: true
    });
    if (!this.metamaskProvider) throw _base.WalletInitializationError.notInstalled("Metamask extension is not installed");
    this.status = _base.ADAPTER_STATUS.READY;
    this.emit(_base.ADAPTER_EVENTS.READY, _base.WALLET_ADAPTERS.METAMASK);

    try {
      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
    }
  }

  setAdapterSettings(_) {}

  async connect() {
    super.checkConnectionRequirements(); // set default to mainnet

    if (!this.chainConfig) this.chainConfig = (0, _base.getChainConfig)(_base.CHAIN_NAMESPACES.EIP155, 1);
    this.status = _base.ADAPTER_STATUS.CONNECTING;
    this.emit(_base.ADAPTER_EVENTS.CONNECTING, {
      adapter: _base.WALLET_ADAPTERS.METAMASK
    });
    if (!this.metamaskProvider) throw _base.WalletLoginError.notConnectedError("Not able to connect with metamask");

    try {
      await this.metamaskProvider.request({
        method: "eth_requestAccounts"
      });
      const {
        chainId
      } = this.metamaskProvider;

      if (chainId !== this.chainConfig.chainId) {
        await this.switchChain(this.chainConfig);
      }

      this.status = _base.ADAPTER_STATUS.CONNECTED;
      if (!this.provider) throw _base.WalletLoginError.notConnectedError("Failed to connect with provider");
      this.provider.once("disconnect", () => {
        // ready to be connected again
        this.disconnect();
      });
      this.emit(_base.ADAPTER_EVENTS.CONNECTED, {
        adapter: _base.WALLET_ADAPTERS.METAMASK,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = _base.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
      throw _base.WalletLoginError.connectionError("Failed to login with metamask wallet");
    }
  }

  async disconnect() {
    var _this$provider;

    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== _base.ADAPTER_STATUS.CONNECTED) throw _base.WalletLoginError.disconnectionError("Not connected with wallet");
    (_this$provider = this.provider) === null || _this$provider === void 0 ? void 0 : _this$provider.removeAllListeners();

    if (options.cleanup) {
      this.status = _base.ADAPTER_STATUS.NOT_READY;
      this.metamaskProvider = null;
    } else {
      // ready to be connected again
      this.status = _base.ADAPTER_STATUS.READY;
    }

    this.rehydrated = false;
    this.emit(_base.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== _base.ADAPTER_STATUS.CONNECTED) throw _base.WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async switchChain(chainConfig) {
    if (!this.metamaskProvider) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");

    try {
      await this.metamaskProvider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainConfig.chainId
        }]
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        await this.metamaskProvider.request({
          method: "wallet_addEthereumChain",
          params: [{
            chainId: chainConfig.chainId,
            chainName: chainConfig.displayName,
            rpcUrls: [chainConfig.rpcTarget]
          }]
        });
      } else {
        throw switchError;
      }
    }
  }

}

exports.MetamaskAdapter = MetamaskAdapter;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@metamask/detect-provider":"node_modules/@metamask/detect-provider/dist/index.js","@web3auth/base":"node_modules/@web3auth/base/dist/base.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/metamaskAdapter.esm.57a5ee88.js.map