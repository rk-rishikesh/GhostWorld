parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lbTK":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getOpenloginDefaultOptions=exports.OpenloginAdapter=void 0;var e=a(require("@toruslabs/openlogin")),i=require("@web3auth/base"),t=o(require("@babel/runtime/helpers/defineProperty")),n=o(require("lodash.merge"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if("function"!=typeof WeakMap)return null;var i=new WeakMap,t=new WeakMap;return(r=function(e){return e?t:i})(e)}function a(e,i){if(!i&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=r(i);if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var s=o?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n}const s=(t,n)=>({adapterSettings:{network:e.OPENLOGIN_NETWORK.MAINNET,clientId:"",uxMode:e.UX_MODE.POPUP},chainConfig:t?(0,i.getChainConfig)(t,n):null,loginSettings:{relogin:!0}});function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?l(Object(n),!0).forEach(function(i){(0,t.default)(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}exports.getOpenloginDefaultOptions=s;class h extends i.BaseAdapter{constructor(n){var o,r,a;super(),(0,t.default)(this,"name",i.WALLET_ADAPTERS.OPENLOGIN),(0,t.default)(this,"adapterNamespace",i.ADAPTER_NAMESPACES.MULTICHAIN),(0,t.default)(this,"type",i.ADAPTER_CATEGORY.IN_APP),(0,t.default)(this,"openloginInstance",null),(0,t.default)(this,"status",i.ADAPTER_STATUS.NOT_READY),(0,t.default)(this,"currentChainNamespace",i.CHAIN_NAMESPACES.EIP155),(0,t.default)(this,"openloginOptions",void 0),(0,t.default)(this,"loginSettings",{}),(0,t.default)(this,"privKeyProvider",null),i.log.debug("const openlogin adapter",n);const l=s(null===(o=n.chainConfig)||void 0===o?void 0:o.chainNamespace,null===(r=n.chainConfig)||void 0===r?void 0:r.chainId);if(this.openloginOptions=c(c({clientId:"",network:e.OPENLOGIN_NETWORK.MAINNET},l.adapterSettings),n.adapterSettings||{}),this.loginSettings=c(c({},l.loginSettings),n.loginSettings),null!==(a=n.chainConfig)&&void 0!==a&&a.chainNamespace){var h;this.currentChainNamespace=null===(h=n.chainConfig)||void 0===h?void 0:h.chainNamespace;const e=l.chainConfig?l.chainConfig:{};if(this.chainConfig=c(c({},e),null==n?void 0:n.chainConfig),i.log.debug("const openlogin chainConfig",this.chainConfig),!this.chainConfig.rpcTarget)throw i.WalletInitializationError.invalidParams("rpcTarget is required in chainConfig")}}get chainConfigProxy(){return this.chainConfig?c({},this.chainConfig):null}get provider(){var e;return(null===(e=this.privKeyProvider)||void 0===e?void 0:e.provider)||null}set provider(e){throw new Error("Not implemented")}async init(t){var n;if(super.checkInitializationRequirements(),null===(n=this.openloginOptions)||void 0===n||!n.clientId)throw i.WalletInitializationError.invalidParams("clientId is required before openlogin's initialization");if(!this.chainConfig)throw i.WalletInitializationError.invalidParams("chainConfig is required before initialization");let o=!1;if(this.openloginOptions.uxMode===e.UX_MODE.REDIRECT){const i=(0,e.getHashQueryParams)();Object.keys(i).length>0&&i._pid&&(o=!0)}this.openloginOptions=c(c({},this.openloginOptions),{},{replaceUrlOnRedirect:o}),this.openloginInstance=new e.default(this.openloginOptions),await this.openloginInstance.init(),this.status=i.ADAPTER_STATUS.READY,this.emit(i.ADAPTER_EVENTS.READY,i.WALLET_ADAPTERS.OPENLOGIN);try{this.openloginInstance.privKey&&(t.autoConnect||o)&&await this.connect()}catch(r){i.log.error("Failed to connect with cached openlogin provider",r),this.emit("ERRORED",r)}}async connect(e){super.checkConnectionRequirements(),this.status=i.ADAPTER_STATUS.CONNECTING,this.emit(i.ADAPTER_EVENTS.CONNECTING,c(c({},e),{},{adapter:i.WALLET_ADAPTERS.OPENLOGIN}));try{return await this.connectWithProvider(e),this.provider}catch(t){if(i.log.error("Failed to connect with openlogin provider",t),this.status=i.ADAPTER_STATUS.READY,this.emit(i.ADAPTER_EVENTS.ERRORED,t),null!=t&&t.message.includes("user closed popup"))throw i.WalletLoginError.popupClosed();throw i.WalletLoginError.connectionError("Failed to login with openlogin")}}async disconnect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};if(this.status!==i.ADAPTER_STATUS.CONNECTED)throw i.WalletLoginError.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw i.WalletInitializationError.notReady("openloginInstance is not ready");await this.openloginInstance.logout(),e.cleanup?(this.status=i.ADAPTER_STATUS.NOT_READY,this.openloginInstance=null,this.privKeyProvider=null):this.status=i.ADAPTER_STATUS.READY,this.emit(i.ADAPTER_EVENTS.DISCONNECTED)}async getUserInfo(){if(this.status!==i.ADAPTER_STATUS.CONNECTED)throw i.WalletLoginError.notConnectedError("Not connected with wallet");if(!this.openloginInstance)throw i.WalletInitializationError.notReady("openloginInstance is not ready");return await this.openloginInstance.getUserInfo()}setAdapterSettings(e){if(this.status===i.ADAPTER_STATUS.READY)return;const t=s();this.openloginOptions=c(c(c({},t.adapterSettings),this.openloginOptions||{}),e)}setChainConfig(e){super.setChainConfig(e),this.currentChainNamespace=e.chainNamespace}async connectWithProvider(e){if(!this.chainConfig)throw i.WalletInitializationError.invalidParams("chainConfig is required before initialization");if(!this.openloginInstance)throw i.WalletInitializationError.notReady("openloginInstance is not ready");if(this.currentChainNamespace===i.CHAIN_NAMESPACES.SOLANA){const{SolanaPrivateKeyProvider:e}=await require("_bundle_loader")(require.resolve("@web3auth/solana-provider"));this.privKeyProvider=new e({config:{chainConfig:this.chainConfig}})}else{if(this.currentChainNamespace!==i.CHAIN_NAMESPACES.EIP155)throw new Error("Invalid chainNamespace: ".concat(this.currentChainNamespace," found while connecting to wallet"));{const{EthereumPrivateKeyProvider:e}=await require("_bundle_loader")(require.resolve("@web3auth/ethereum-provider"));this.privKeyProvider=new e({config:{chainConfig:this.chainConfig}})}}var t;!this.openloginInstance.privKey&&e&&await this.openloginInstance.login((0,n.default)(this.loginSettings,{loginProvider:e.loginProvider},{extraLoginOptions:c(c({},e.extraLoginOptions||{}),{},{login_hint:e.login_hint||(null===(t=e.extraLoginOptions)||void 0===t?void 0:t.login_hint)})}));let o=this.openloginInstance.privKey;if(o){if(this.currentChainNamespace===i.CHAIN_NAMESPACES.SOLANA){const{getED25519Key:e}=await require("_bundle_loader")(require.resolve("@toruslabs/openlogin-ed25519"));o=e(o).sk.toString("hex")}await this.privKeyProvider.setupProvider(o),this.status=i.ADAPTER_STATUS.CONNECTED,this.emit(i.ADAPTER_EVENTS.CONNECTED,{adapter:i.WALLET_ADAPTERS.OPENLOGIN,reconnected:!e})}}}exports.OpenloginAdapter=h;
},{"@toruslabs/openlogin":"qe9j","@web3auth/base":"BZvL","@babel/runtime/helpers/defineProperty":"xwXl","lodash.merge":"qcR7","_bundle_loader":"z1Am","@web3auth/solana-provider":[["script.a07149c5.js","mpVp"],"script.a07149c5.js.map","LAMg"],"@web3auth/ethereum-provider":[["script.a07149c5.js","mpVp"],"script.a07149c5.js.map","w1io"],"@toruslabs/openlogin-ed25519":[["openloginEd25519.esm.7b2f0a72.js","UdHS"],"openloginEd25519.esm.7b2f0a72.js.map","UdHS"]}],"Bh1I":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"z1Am":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"Bh1I"}],"Ijyk":[function(require,module,exports) {
module.exports=function(n){return new Promise(function(e,o){var r=document.createElement("script");r.async=!0,r.type="text/javascript",r.charset="utf-8",r.src=n,r.onerror=function(n){r.onerror=r.onload=null,o(n)},r.onload=function(){r.onerror=r.onload=null,e()},document.getElementsByTagName("head")[0].appendChild(r)})};
},{}],0:[function(require,module,exports) {
var b=require("z1Am");b.register("js",require("Ijyk"));b.load([]).then(function(){require("lbTK");});
},{}]},{},[0], null)
//# sourceMappingURL=/openloginAdapter.esm.55550b4d.js.map