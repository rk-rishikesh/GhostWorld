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
})({"node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":[function(require,module,exports) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/objectWithoutProperties.js":[function(require,module,exports) {
var objectWithoutPropertiesLoose = require("./objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./objectWithoutPropertiesLoose.js":"node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"}],"node_modules/@toruslabs/fetch-node-details/dist/fetchNodeDetails.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.abi = exports.ETHEREUM_NETWORK = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _web3EthContract = _interopRequireDefault(require("web3-eth-contract"));

var _web3Utils = require("web3-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ETHEREUM_NETWORK = {
  ROPSTEN: "ropsten",
  MAINNET: "mainnet",
  POLYGON: "polygon-mainnet"
};
exports.ETHEREUM_NETWORK = ETHEREUM_NETWORK;
var abi = [{
  inputs: [{
    internalType: "string",
    name: "_verifier",
    type: "string"
  }, {
    internalType: "bytes32",
    name: "hashedVerifierId",
    type: "bytes32"
  }],
  name: "getNodeSet",
  outputs: [{
    internalType: "uint256",
    name: "currentEpoch",
    type: "uint256"
  }, {
    internalType: "string[]",
    name: "torusNodeEndpoints",
    type: "string[]"
  }, {
    internalType: "uint256[]",
    name: "torusNodePubX",
    type: "uint256[]"
  }, {
    internalType: "uint256[]",
    name: "torusNodePubY",
    type: "uint256[]"
  }, {
    internalType: "uint256[]",
    name: "torusIndexes",
    type: "uint256[]"
  }],
  stateMutability: "view",
  type: "function"
}];
exports.abi = abi;

var NodeDetailManager = /*#__PURE__*/function () {
  function NodeDetailManager() {
    _classCallCheck(this, NodeDetailManager);

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$network = _ref2.network,
        network = _ref2$network === void 0 ? ETHEREUM_NETWORK.MAINNET : _ref2$network,
        _ref2$proxyAddress = _ref2.proxyAddress,
        proxyAddress = _ref2$proxyAddress === void 0 ? "0xf20336e16B5182637f09821c27BDe29b0AFcfe80" : _ref2$proxyAddress;

    (0, _defineProperty2.default)(this, "_currentEpoch", "19");
    (0, _defineProperty2.default)(this, "_torusNodeEndpoints", ["https://torus-19.torusnode.com/jrpc", "https://torus-node.ens.domains/jrpc", "https://torus-node.matic.network/jrpc", "https://torus.zilliqa.network/jrpc", "https://torus-mainnet.cosmos.network/jrpc", "https://torus2.etherscan.com/jrpc", "https://torus-node-v2.skalelabs.com/jrpc", "https://torus-node.binancex.dev/jrpc", "https://torusnode.ont.io/jrpc"]);
    (0, _defineProperty2.default)(this, "_torusNodePub", [{
      X: "bbe83c64177c3775550e6ba6ac2bc059f6847d644c9e4894e42c60d7974d8c2b",
      Y: "82b49a7caf70def38cdad2740af45c1e4f969650105c5019a29bb18b21a9acb5"
    }, {
      X: "c208cac4ef9a47d386097a9c915b28e9cb89213abee8d26a17198ee261201b0d",
      Y: "c7db2fe4631109f40833de9dc78d07e35706549ee48fa557b33e4e75e1047873"
    }, {
      X: "ca1766bb426d4ca5582818a0c5439d560ea64f5baa060793ab29dd3d0ceacfe",
      Y: "d46c1d08c40e1306e1bca328c2287b8268166b11a1ba4b8442ea2ad0c5e32152"
    }, {
      X: "c3934dd2f6f4b3d2e1e398cc501e143c1e1a381b52feb6d1525af34d16253768",
      Y: "71f5141a5035799099f5ea3e241e66946bc55dc857ac3bd7d6fcdb8dcd3eeeef"
    }, {
      X: "22e66f1929631d00bf026227581597f085fd94fd952fc0dca9f0833398b5c064",
      Y: "6088b3912e10a1e9d50355a609c10db7d188f16a2e2fd7357e51bf4f6a74f0a1"
    }, {
      X: "9dc9fa410f3ce9eb70df70cdea00a49f2c4cc7a31c08c0dab5f863ed35ff5139",
      Y: "627a291cb87a75c61da3f65d6818e1e05e360217179817ed27e8c73bca7ec122"
    }, {
      X: "118b9fc07e97b096d899b9f6658463ce6a8caa64038e37fc969df4e6023dd8c6",
      Y: "baf9fa4e51770f4796ea165dd03a769b8606681a38954a0a92c4cbffd6609ce9"
    }, {
      X: "8a6d8b925da15a273dec3d8f8395ec35cd6878f274b2b180e4e106999db64043",
      Y: "96f67f870c157743da0b1eb84d89bf30500d74dc84c11f501ee1cb013acc8c46"
    }, {
      X: "39cecb62e863729f572f7dfc46c24867981bf04bb405fed0df39e33984bfade5",
      Y: "61c2364434012e68a2be2e9952805037e52629d7762fafc8e10e9fb5bad8f790"
    }]);
    (0, _defineProperty2.default)(this, "_torusIndexes", [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    (0, _defineProperty2.default)(this, "_network", ETHEREUM_NETWORK.MAINNET);
    (0, _defineProperty2.default)(this, "nodeListAddress", void 0);
    (0, _defineProperty2.default)(this, "updated", void 0);
    (0, _defineProperty2.default)(this, "nodeListContract", void 0);
    var url;

    try {
      var localUrl = new URL(network);
      url = localUrl.href;
    } catch (_) {
      var projectId = "b8cdb0e4cff24599a286bf8e87ff1c96";
      url = "https://".concat(network, ".infura.io/v3/").concat(projectId);
    }

    _web3EthContract.default.setProvider(url);

    this.nodeListContract = new _web3EthContract.default(abi, proxyAddress);
    this.nodeListAddress = proxyAddress;
    this.updated = false;
    this._network = network;
  }

  _createClass(NodeDetailManager, [{
    key: "_nodeDetails",
    get: function get() {
      return {
        currentEpoch: this._currentEpoch,
        nodeListAddress: this.nodeListAddress,
        torusNodeEndpoints: this._torusNodeEndpoints,
        torusNodePub: this._torusNodePub,
        torusIndexes: this._torusIndexes,
        updated: this.updated
      };
    }
  }, {
    key: "getNodeDetails",
    value: function () {
      var _getNodeDetails = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
        var _ref$skip, skip, verifier, verifierId, hashedVerifierId, nodeDetails, currentEpoch, torusNodeEndpoints, torusNodePubX, torusNodePubY, torusIndexes, updatedEndpoints, updatedNodePub, index, endPointElement, pubKx, pubKy, endpoint;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$skip = _ref.skip, skip = _ref$skip === void 0 ? false : _ref$skip, verifier = _ref.verifier, verifierId = _ref.verifierId;
                _context.prev = 1;

                if (!(skip && this._network === ETHEREUM_NETWORK.MAINNET)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", this._nodeDetails);

              case 4:
                if (!(this.updated && this._network === ETHEREUM_NETWORK.MAINNET)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", this._nodeDetails);

              case 6:
                hashedVerifierId = (0, _web3Utils.keccak256)(verifierId);
                _context.next = 9;
                return this.nodeListContract.methods.getNodeSet(verifier, hashedVerifierId).call();

              case 9:
                nodeDetails = _context.sent;
                currentEpoch = nodeDetails.currentEpoch, torusNodeEndpoints = nodeDetails.torusNodeEndpoints, torusNodePubX = nodeDetails.torusNodePubX, torusNodePubY = nodeDetails.torusNodePubY, torusIndexes = nodeDetails.torusIndexes;
                this._currentEpoch = currentEpoch;
                this._torusIndexes = torusIndexes.map(function (x) {
                  return Number(x);
                });
                updatedEndpoints = [];
                updatedNodePub = [];

                for (index = 0; index < torusNodeEndpoints.length; index += 1) {
                  endPointElement = torusNodeEndpoints[index];
                  pubKx = torusNodePubX[index];
                  pubKy = torusNodePubY[index];
                  endpoint = "https://".concat(endPointElement.split(":")[0], "/jrpc");
                  updatedEndpoints.push(endpoint);
                  updatedNodePub.push({
                    X: (0, _web3Utils.toHex)(pubKx).replace("0x", ""),
                    Y: (0, _web3Utils.toHex)(pubKy).replace("0x", "")
                  });
                }

                this._torusNodeEndpoints = updatedEndpoints;
                this._torusNodePub = updatedNodePub;
                this.updated = true;
                return _context.abrupt("return", this._nodeDetails);

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](1);

                if (!(this._network === ETHEREUM_NETWORK.MAINNET)) {
                  _context.next = 26;
                  break;
                }

                return _context.abrupt("return", this._nodeDetails);

              case 26:
                throw _context.t0;

              case 27:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 22]]);
      }));

      function getNodeDetails(_x) {
        return _getNodeDetails.apply(this, arguments);
      }

      return getNodeDetails;
    }()
  }]);

  return NodeDetailManager;
}();

exports.default = NodeDetailManager;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","web3-eth-contract":"node_modules/web3-eth-contract/lib/index.js","web3-utils":"node_modules/web3-utils/lib/index.js"}],"node_modules/@toruslabs/torus.js/node_modules/bn.js/lib/bn.js":[function(require,module,exports) {
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
    if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') {
      Buffer = window.Buffer;
    } else {
      Buffer = require('buffer').Buffer;
    }
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
      this.negative = 1;
    }

    if (start < number.length) {
      if (base === 16) {
        this._parseHex(number, start, endian);
      } else {
        this._parseBase(number, base, start);
        if (endian === 'le') {
          this._initArray(this.toArray(), base, endian);
        }
      }
    }
  };

  BN.prototype._initNumber = function _initNumber (number, base, endian) {
    if (number < 0) {
      this.negative = 1;
      number = -number;
    }
    if (number < 0x4000000) {
      this.words = [number & 0x3ffffff];
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
      this.words = [0];
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
    return this._strip();
  };

  function parseHex4Bits (string, index) {
    var c = string.charCodeAt(index);
    // '0' - '9'
    if (c >= 48 && c <= 57) {
      return c - 48;
    // 'A' - 'F'
    } else if (c >= 65 && c <= 70) {
      return c - 55;
    // 'a' - 'f'
    } else if (c >= 97 && c <= 102) {
      return c - 87;
    } else {
      assert(false, 'Invalid character in ' + string);
    }
  }

  function parseHexByte (string, lowerBound, index) {
    var r = parseHex4Bits(string, index);
    if (index - 1 >= lowerBound) {
      r |= parseHex4Bits(string, index - 1) << 4;
    }
    return r;
  }

  BN.prototype._parseHex = function _parseHex (number, start, endian) {
    // Create possibly bigger array to ensure that it fits the number
    this.length = Math.ceil((number.length - start) / 6);
    this.words = new Array(this.length);
    for (var i = 0; i < this.length; i++) {
      this.words[i] = 0;
    }

    // 24-bits chunks
    var off = 0;
    var j = 0;

    var w;
    if (endian === 'be') {
      for (i = number.length - 1; i >= start; i -= 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    } else {
      var parseLength = number.length - start;
      for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
        w = parseHexByte(number, start, i) << off;
        this.words[j] |= w & 0x3ffffff;
        if (off >= 18) {
          off -= 18;
          j += 1;
          this.words[j] |= w >>> 26;
        } else {
          off += 8;
        }
      }
    }

    this._strip();
  };

  function parseBase (str, start, end, mul) {
    var r = 0;
    var b = 0;
    var len = Math.min(str.length, end);
    for (var i = start; i < len; i++) {
      var c = str.charCodeAt(i) - 48;

      r *= mul;

      // 'a'
      if (c >= 49) {
        b = c - 49 + 0xa;

      // 'A'
      } else if (c >= 17) {
        b = c - 17 + 0xa;

      // '0' - '9'
      } else {
        b = c;
      }
      assert(c >= 0 && b < mul, 'Invalid character');
      r += b;
    }
    return r;
  }

  BN.prototype._parseBase = function _parseBase (number, base, start) {
    // Initialize as zero
    this.words = [0];
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

    this._strip();
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

  function move (dest, src) {
    dest.words = src.words;
    dest.length = src.length;
    dest.negative = src.negative;
    dest.red = src.red;
  }

  BN.prototype._move = function _move (dest) {
    move(dest, this);
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
  BN.prototype._strip = function strip () {
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

  // Check Symbol.for because not everywhere where Symbol defined
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
  if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') {
    try {
      BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e) {
      BN.prototype.inspect = inspect;
    }
  } else {
    BN.prototype.inspect = inspect;
  }

  function inspect () {
    return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
  }

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
        var r = c.modrn(groupBase).toString(base);
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
    return this.toString(16, 2);
  };

  if (Buffer) {
    BN.prototype.toBuffer = function toBuffer (endian, length) {
      return this.toArrayLike(Buffer, endian, length);
    };
  }

  BN.prototype.toArray = function toArray (endian, length) {
    return this.toArrayLike(Array, endian, length);
  };

  var allocate = function allocate (ArrayType, size) {
    if (ArrayType.allocUnsafe) {
      return ArrayType.allocUnsafe(size);
    }
    return new ArrayType(size);
  };

  BN.prototype.toArrayLike = function toArrayLike (ArrayType, endian, length) {
    this._strip();

    var byteLength = this.byteLength();
    var reqLength = length || Math.max(1, byteLength);
    assert(byteLength <= reqLength, 'byte array longer than desired length');
    assert(reqLength > 0, 'Requested array length <= 0');

    var res = allocate(ArrayType, reqLength);
    var postfix = endian === 'le' ? 'LE' : 'BE';
    this['_toArrayLike' + postfix](res, byteLength);
    return res;
  };

  BN.prototype._toArrayLikeLE = function _toArrayLikeLE (res, byteLength) {
    var position = 0;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position++] = word & 0xff;
      if (position < res.length) {
        res[position++] = (word >> 8) & 0xff;
      }
      if (position < res.length) {
        res[position++] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position < res.length) {
          res[position++] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position < res.length) {
      res[position++] = carry;

      while (position < res.length) {
        res[position++] = 0;
      }
    }
  };

  BN.prototype._toArrayLikeBE = function _toArrayLikeBE (res, byteLength) {
    var position = res.length - 1;
    var carry = 0;

    for (var i = 0, shift = 0; i < this.length; i++) {
      var word = (this.words[i] << shift) | carry;

      res[position--] = word & 0xff;
      if (position >= 0) {
        res[position--] = (word >> 8) & 0xff;
      }
      if (position >= 0) {
        res[position--] = (word >> 16) & 0xff;
      }

      if (shift === 6) {
        if (position >= 0) {
          res[position--] = (word >> 24) & 0xff;
        }
        carry = 0;
        shift = 0;
      } else {
        carry = word >>> 24;
        shift += 2;
      }
    }

    if (position >= 0) {
      res[position--] = carry;

      while (position >= 0) {
        res[position--] = 0;
      }
    }
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

      w[bit] = (num.words[off] >>> wbit) & 0x01;
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

    return this._strip();
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

    return this._strip();
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

    return this._strip();
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
    return this._strip();
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

    return this._strip();
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

    return this._strip();
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

    return out._strip();
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

    return out._strip();
  }

  function jumboMulTo (self, num, out) {
    // Temporary disable, see https://github.com/indutny/bn.js/issues/211
    // var fftm = new FFTM();
    // return fftm.mulp(self, num, out);
    return bigMulTo(self, num, out);
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
    return out._strip();
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
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

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

    return isNegNum ? this.ineg() : this;
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

    return this._strip();
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

    return this._strip();
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

    return this._strip();
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
      if (this.length === 1 && (this.words[0] | 0) <= num) {
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

    return this._strip();
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

    if (carry === 0) return this._strip();

    // Subtraction overflow
    assert(carry === -1);
    carry = 0;
    for (i = 0; i < this.length; i++) {
      w = -(this.words[i] | 0) + carry;
      carry = w >> 26;
      this.words[i] = w & 0x3ffffff;
    }
    this.negative = 1;

    return this._strip();
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
      q._strip();
    }
    a._strip();

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
          mod: new BN(this.modrn(num.words[0]))
        };
      }

      return {
        div: this.divn(num.words[0]),
        mod: new BN(this.modrn(num.words[0]))
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
    if (cmp < 0 || (r2 === 1 && cmp === 0)) return dm.div;

    // Round up
    return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
  };

  BN.prototype.modrn = function modrn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);
    var p = (1 << 26) % num;

    var acc = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      acc = (p * acc + (this.words[i] | 0)) % num;
    }

    return isNegNum ? -acc : acc;
  };

  // WARNING: DEPRECATED
  BN.prototype.modn = function modn (num) {
    return this.modrn(num);
  };

  // In-place division by number
  BN.prototype.idivn = function idivn (num) {
    var isNegNum = num < 0;
    if (isNegNum) num = -num;

    assert(num <= 0x3ffffff);

    var carry = 0;
    for (var i = this.length - 1; i >= 0; i--) {
      var w = (this.words[i] | 0) + carry * 0x4000000;
      this.words[i] = (w / num) | 0;
      carry = w % num;
    }

    this._strip();
    return isNegNum ? this.ineg() : this;
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

    this._strip();

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
      if (r.strip !== undefined) {
        // r is a BN v4 instance
        r.strip();
      } else {
        // r is a BN v5 instance
        r._strip();
      }
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

    move(a, a.umod(this.m)._forceRed(this));
    return a;
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

},{"buffer":"node_modules/parcel-bundler/src/builtins/_empty.js"}],"node_modules/jsonify/lib/parse.js":[function(require,module,exports) {
var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};

},{}],"node_modules/jsonify/lib/stringify.js":[function(require,module,exports) {
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};

},{}],"node_modules/jsonify/index.js":[function(require,module,exports) {
exports.parse = require('./lib/parse');
exports.stringify = require('./lib/stringify');

},{"./lib/parse":"node_modules/jsonify/lib/parse.js","./lib/stringify":"node_modules/jsonify/lib/stringify.js"}],"node_modules/json-stable-stringify/index.js":[function(require,module,exports) {
var json = typeof JSON !== 'undefined' ? JSON : require('jsonify');

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};

},{"jsonify":"node_modules/jsonify/index.js"}],"node_modules/@babel/runtime/helpers/isNativeFunction.js":[function(require,module,exports) {
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":[function(require,module,exports) {
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"node_modules/@babel/runtime/helpers/construct.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");

var isNativeReflectConstruct = require("./isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":"node_modules/@babel/runtime/helpers/setPrototypeOf.js","./isNativeReflectConstruct.js":"node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js"}],"node_modules/@babel/runtime/helpers/wrapNativeSuper.js":[function(require,module,exports) {
var getPrototypeOf = require("./getPrototypeOf.js");

var setPrototypeOf = require("./setPrototypeOf.js");

var isNativeFunction = require("./isNativeFunction.js");

var construct = require("./construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./getPrototypeOf.js":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","./setPrototypeOf.js":"node_modules/@babel/runtime/helpers/setPrototypeOf.js","./isNativeFunction.js":"node_modules/@babel/runtime/helpers/isNativeFunction.js","./construct.js":"node_modules/@babel/runtime/helpers/construct.js"}],"node_modules/@toruslabs/torus.js/dist/torusUtils.esm.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitKeyLookup = exports.keyLookup = exports.keyAssign = exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _eccrypto = require("@toruslabs/eccrypto");

var _httpHelpers = require("@toruslabs/http-helpers");

var _bn = _interopRequireDefault(require("bn.js"));

var _elliptic = require("elliptic");

var _jsonStableStringify = _interopRequireDefault(require("json-stable-stringify"));

var _web3Utils = require("web3-utils");

var _loglevel = _interopRequireDefault(require("loglevel"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _loglevel.default.getLogger('torus.js');

log.disableAll();

function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

var SomeError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(SomeError, _Error);

  var _super = _createSuper$1(SomeError);

  function SomeError(_ref) {
    var _this;

    var errors = _ref.errors,
        responses = _ref.responses,
        predicate = _ref.predicate;
    (0, _classCallCheck2.default)(this, SomeError);
    _this = _super.call(this, 'Unable to resolve enough promises.');
    _this.errors = errors;
    _this.responses = responses;
    _this.predicate = predicate;
    return _this;
  }

  return (0, _createClass2.default)(SomeError);
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

var Some = function Some(promises, predicate) {
  return new Promise(function (resolve, reject) {
    var finishedCount = 0;
    var sharedState = {
      resolved: false
    };
    var errorArr = new Array(promises.length).fill(undefined);
    var resultArr = new Array(promises.length).fill(undefined);
    var predicateError;
    promises.forEach(function (x, index) {
      x.then(function (resp) {
        resultArr[index] = resp;
        return undefined;
      }).catch(function (error) {
        errorArr[index] = error;
      }).finally(function () {
        if (sharedState.resolved) return;
        predicate(resultArr.slice(0), sharedState).then(function (data) {
          sharedState.resolved = true;
          resolve(data);
          return undefined;
        }).catch(function (error) {
          // log only the last predicate error
          predicateError = error;
        }).finally(function (_) {
          finishedCount += 1;

          if (finishedCount === promises.length) {
            var errors = Object.values(resultArr.reduce(function (acc, z) {
              var _error$data;

              var _ref2 = z || {},
                  id = _ref2.id,
                  error = _ref2.error;

              if ((error === null || error === void 0 ? void 0 : (_error$data = error.data) === null || _error$data === void 0 ? void 0 : _error$data.length) > 0) {
                if (error.data.startsWith('Error occurred while verifying params')) acc[id] = capitalizeFirstLetter(error.data);else acc[id] = error.data;
              }

              return acc;
            }, {}));

            if (errors.length > 0) {
              // Format-able errors
              var msg = errors.length > 1 ? "\n".concat(errors.map(function (it) {
                return "\u2022 ".concat(it);
              }).join('\n')) : errors[0];
              reject(new Error(msg));
            } else {
              var _predicateError;

              reject(new SomeError({
                errors: errorArr,
                responses: resultArr,
                predicate: ((_predicateError = predicateError) === null || _predicateError === void 0 ? void 0 : _predicateError.message) || predicateError
              }));
            }
          }
        });
      });
    });
  });
};

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      (0, _defineProperty2.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var GetOrSetNonceError = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(GetOrSetNonceError, _Error);

  var _super = _createSuper(GetOrSetNonceError);

  function GetOrSetNonceError() {
    (0, _classCallCheck2.default)(this, GetOrSetNonceError);
    return _super.apply(this, arguments);
  }

  return (0, _createClass2.default)(GetOrSetNonceError);
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));

var kCombinations = function kCombinations(s, k) {
  var set = s;

  if (typeof set === 'number') {
    set = Array.from({
      length: set
    }, function (_, i) {
      return i;
    });
  }

  if (k > set.length || k <= 0) {
    return [];
  }

  if (k === set.length) {
    return [set];
  }

  if (k === 1) {
    return set.reduce(function (acc, cur) {
      return [].concat((0, _toConsumableArray2.default)(acc), [[cur]]);
    }, []);
  }

  var combs = [];
  var tailCombs = [];

  for (var i = 0; i <= set.length - k + 1; i += 1) {
    tailCombs = kCombinations(set.slice(i + 1), k - 1);

    for (var j = 0; j < tailCombs.length; j += 1) {
      combs.push([set[i]].concat((0, _toConsumableArray2.default)(tailCombs[j])));
    }
  }

  return combs;
};

var thresholdSame = function thresholdSame(arr, t) {
  var hashMap = {};

  for (var i = 0; i < arr.length; i += 1) {
    var str = (0, _jsonStableStringify.default)(arr[i]);
    hashMap[str] = hashMap[str] ? hashMap[str] + 1 : 1;

    if (hashMap[str] === t) {
      return arr[i];
    }
  }

  return undefined;
};

var keyLookup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(endpoints, verifier, verifierId) {
    var lookupPromises;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lookupPromises = endpoints.map(function (x) {
              return (0, _httpHelpers.post)(x, (0, _httpHelpers.generateJsonRPCObject)('VerifierLookupRequest', {
                verifier: verifier,
                verifier_id: verifierId.toString()
              })).catch(function (err) {
                return log.error('lookup request failed', err);
              });
            });
            return _context.abrupt("return", Some(lookupPromises, function (lookupResults) {
              var lookupShares = lookupResults.filter(function (x1) {
                return x1;
              });
              var errorResult = thresholdSame(lookupShares.map(function (x2) {
                return x2 && x2.error;
              }), ~~(endpoints.length / 2) + 1);
              var keyResult = thresholdSame(lookupShares.map(function (x3) {
                return x3 && x3.result;
              }), ~~(endpoints.length / 2) + 1);

              if (keyResult || errorResult) {
                return Promise.resolve({
                  keyResult: keyResult,
                  errorResult: errorResult
                });
              }

              return Promise.reject(new Error("invalid results ".concat(JSON.stringify(lookupResults))));
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function keyLookup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.keyLookup = keyLookup;

var waitKeyLookup = function waitKeyLookup(endpoints, verifier, verifierId, timeout) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      keyLookup(endpoints, verifier, verifierId).then(resolve).catch(reject);
    }, timeout);
  });
};

exports.waitKeyLookup = waitKeyLookup;

var keyAssign = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref2) {
    var endpoints, torusNodePubs, lastPoint, firstPoint, verifier, verifierId, signerHost, network, nodeNum, initialPoint, data, signedData, acceptedErrorMsgs;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            endpoints = _ref2.endpoints, torusNodePubs = _ref2.torusNodePubs, lastPoint = _ref2.lastPoint, firstPoint = _ref2.firstPoint, verifier = _ref2.verifier, verifierId = _ref2.verifierId, signerHost = _ref2.signerHost, network = _ref2.network;

            if (lastPoint === undefined) {
              nodeNum = Math.floor(Math.random() * endpoints.length);
              initialPoint = nodeNum;
            } else {
              nodeNum = lastPoint % endpoints.length;
            }

            if (!(nodeNum === firstPoint)) {
              _context2.next = 4;
              break;
            }

            throw new Error('Looped through all');

          case 4:
            if (firstPoint !== undefined) initialPoint = firstPoint;
            data = (0, _httpHelpers.generateJsonRPCObject)('KeyAssign', {
              verifier: verifier,
              verifier_id: verifierId.toString()
            });
            _context2.prev = 6;
            _context2.next = 9;
            return (0, _httpHelpers.post)(signerHost, data, {
              headers: {
                pubKeyX: torusNodePubs[nodeNum].X,
                pubKeyY: torusNodePubs[nodeNum].Y,
                network: network
              }
            }, {
              useAPIKey: true
            });

          case 9:
            signedData = _context2.sent;
            return _context2.abrupt("return", (0, _httpHelpers.post)(endpoints[nodeNum], _objectSpread$1(_objectSpread$1({}, data), signedData), {
              headers: {
                'Content-Type': 'application/json; charset=utf-8'
              }
            }));

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](6);
            log.error(_context2.t0);
            acceptedErrorMsgs = [// Slow node
            'Timed out', // Happens when the node is not reachable (dns issue etc)
            'TypeError: Failed to fetch', // All except iOS and Firefox
            'TypeError: cancelled', // iOS
            'TypeError: NetworkError when attempting to fetch resource.' // Firefox
            ];

            if (!acceptedErrorMsgs.includes(_context2.t0.message)) {
              _context2.next = 19;
              break;
            }

            return _context2.abrupt("return", keyAssign({
              endpoints: endpoints,
              torusNodePubs: torusNodePubs,
              lastPoint: nodeNum + 1,
              firstPoint: initialPoint,
              verifier: verifier,
              verifierId: verifierId,
              signerHost: signerHost,
              network: network
            }));

          case 19:
            throw new Error("Sorry, the Torus Network that powers Web3Auth is currently very busy.\n    We will generate your key in time. Pls try again later. \n\n    ".concat(_context2.t0.message || ''));

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 13]]);
  }));

  return function keyAssign(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.keyAssign = keyAssign;

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
} // of Torus nodes to handle malicious node responses


var Torus = /*#__PURE__*/function () {
  function Torus() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$enableOneKey = _ref.enableOneKey,
        enableOneKey = _ref$enableOneKey === void 0 ? false : _ref$enableOneKey,
        _ref$metadataHost = _ref.metadataHost,
        metadataHost = _ref$metadataHost === void 0 ? 'https://metadata.tor.us' : _ref$metadataHost,
        _ref$allowHost = _ref.allowHost,
        allowHost = _ref$allowHost === void 0 ? 'https://signer.tor.us/api/allow' : _ref$allowHost,
        _ref$signerHost = _ref.signerHost,
        signerHost = _ref$signerHost === void 0 ? 'https://signer.tor.us/api/sign' : _ref$signerHost,
        _ref$serverTimeOffset = _ref.serverTimeOffset,
        serverTimeOffset = _ref$serverTimeOffset === void 0 ? 0 : _ref$serverTimeOffset,
        _ref$network = _ref.network,
        network = _ref$network === void 0 ? 'mainnet' : _ref$network;

    (0, _classCallCheck2.default)(this, Torus);
    this.ec = new _elliptic.ec('secp256k1');
    this.metadataHost = metadataHost;
    this.allowHost = allowHost;
    this.enableOneKey = enableOneKey;
    this.serverTimeOffset = serverTimeOffset || 0; // ms

    this.signerHost = signerHost;
    this.network = network;
  }

  (0, _createClass2.default)(Torus, [{
    key: "getUserTypeAndAddress",
    value:
    /**
     * Note: use this function only for openlogin tkey account lookups.
     */
    function () {
      var _getUserTypeAndAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(endpoints, torusNodePubs, _ref2) {
        var verifier,
            verifierId,
            doesKeyAssign,
            _ref3,
            keyResult,
            errorResult,
            isNewKey,
            finalKeyResult,
            assignResult,
            _finalKeyResult$keys$,
            X,
            Y,
            typeOfUser,
            nonce,
            pubNonce,
            modifiedPubKey,
            upgraded,
            _yield$this$getOrSetN,
            finalX,
            finalY,
            address,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                verifier = _ref2.verifier, verifierId = _ref2.verifierId;
                doesKeyAssign = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                _context.next = 4;
                return keyLookup(endpoints, verifier, verifierId);

              case 4:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 7;
                  break;
                }

                _context.t0 = {};

              case 7:
                _ref3 = _context.t0;
                keyResult = _ref3.keyResult;
                errorResult = _ref3.errorResult;
                isNewKey = false;

                if (!(errorResult && JSON.stringify(errorResult).includes('Verifier + VerifierID has not yet been assigned'))) {
                  _context.next = 26;
                  break;
                }

                if (doesKeyAssign) {
                  _context.next = 14;
                  break;
                }

                throw new Error('Verifier + VerifierID has not yet been assigned');

              case 14:
                _context.next = 16;
                return keyAssign({
                  endpoints: endpoints,
                  torusNodePubs: torusNodePubs,
                  lastPoint: undefined,
                  firstPoint: undefined,
                  verifier: verifier,
                  verifierId: verifierId,
                  signerHost: this.signerHost,
                  network: this.network
                });

              case 16:
                _context.next = 18;
                return waitKeyLookup(endpoints, verifier, verifierId, 1000);

              case 18:
                _context.t1 = _context.sent;

                if (_context.t1) {
                  _context.next = 21;
                  break;
                }

                _context.t1 = {};

              case 21:
                assignResult = _context.t1;
                finalKeyResult = assignResult.keyResult;
                isNewKey = true;
                _context.next = 31;
                break;

              case 26:
                if (!keyResult) {
                  _context.next = 30;
                  break;
                }

                finalKeyResult = keyResult;
                _context.next = 31;
                break;

              case 30:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(keyResult || {}), ", ").concat(JSON.stringify(errorResult || {})));

              case 31:
                if (!finalKeyResult) {
                  _context.next = 61;
                  break;
                }

                _finalKeyResult$keys$ = finalKeyResult.keys[0], X = _finalKeyResult$keys$.pub_key_X, Y = _finalKeyResult$keys$.pub_key_Y;
                _context.prev = 33;
                _context.next = 37;
                return this.getOrSetNonce(X, Y, undefined, !isNewKey);

              case 37:
                _yield$this$getOrSetN = _context.sent;
                typeOfUser = _yield$this$getOrSetN.typeOfUser;
                nonce = _yield$this$getOrSetN.nonce;
                pubNonce = _yield$this$getOrSetN.pubNonce;
                upgraded = _yield$this$getOrSetN.upgraded;
                nonce = new _bn.default(nonce || '0', 16);
                _context.next = 48;
                break;

              case 45:
                _context.prev = 45;
                _context.t2 = _context["catch"](33);
                throw new GetOrSetNonceError();

              case 48:
                if (!(typeOfUser === 'v1')) {
                  _context.next = 52;
                  break;
                }

                modifiedPubKey = this.ec.keyFromPublic({
                  x: X.toString(16),
                  y: Y.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());
                _context.next = 57;
                break;

              case 52:
                if (!(typeOfUser === 'v2')) {
                  _context.next = 56;
                  break;
                }

                modifiedPubKey = this.ec.keyFromPublic({
                  x: X.toString(16),
                  y: Y.toString(16)
                }).getPublic().add(this.ec.keyFromPublic({
                  x: pubNonce.x,
                  y: pubNonce.y
                }).getPublic());
                _context.next = 57;
                break;

              case 56:
                throw new Error('getOrSetNonce should always return typeOfUser.');

              case 57:
                finalX = modifiedPubKey.getX().toString(16);
                finalY = modifiedPubKey.getY().toString(16);
                address = this.generateAddressFromPubKey(modifiedPubKey.getX(), modifiedPubKey.getY());
                return _context.abrupt("return", {
                  typeOfUser: typeOfUser,
                  nonce: nonce,
                  pubNonce: pubNonce,
                  upgraded: upgraded,
                  X: finalX,
                  Y: finalY,
                  address: address
                });

              case 61:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(keyResult || {}), ", ").concat(JSON.stringify(errorResult || {})));

              case 62:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[33, 45]]);
      }));

      function getUserTypeAndAddress(_x, _x2, _x3) {
        return _getUserTypeAndAddress.apply(this, arguments);
      }

      return getUserTypeAndAddress;
    }()
  }, {
    key: "setCustomKey",
    value: function () {
      var _setCustomKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var privKeyHex, metadataNonce, torusKeyHex, customKeyHex, torusKey, privKey, customKey, newMetadataNonce, data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                privKeyHex = _ref4.privKeyHex, metadataNonce = _ref4.metadataNonce, torusKeyHex = _ref4.torusKeyHex, customKeyHex = _ref4.customKeyHex;

                if (torusKeyHex) {
                  torusKey = new _bn.default(torusKeyHex, 16);
                } else {
                  privKey = new _bn.default(privKeyHex, 16);
                  torusKey = privKey.sub(metadataNonce).umod(this.ec.curve.n);
                }

                customKey = new _bn.default(customKeyHex, 16);
                newMetadataNonce = customKey.sub(torusKey).umod(this.ec.curve.n);
                data = this.generateMetadataParams(newMetadataNonce.toString(16), torusKey.toString(16));
                _context2.next = 7;
                return this.setMetadata(data);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setCustomKey(_x4) {
        return _setCustomKey.apply(this, arguments);
      }

      return setCustomKey;
    }()
  }, {
    key: "retrieveShares",
    value: function () {
      var _retrieveShares = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(endpoints, indexes, verifier, verifierParams, idToken) {
        var _this = this;

        var extraParams,
            promiseArr,
            tmpKey,
            pubKey,
            pubKeyX,
            pubKeyY,
            tokenCommitment,
            i,
            p,
            _args5 = arguments;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                extraParams = _args5.length > 5 && _args5[5] !== undefined ? _args5[5] : {};
                promiseArr = [];
                _context5.next = 4;
                return (0, _httpHelpers.get)(this.allowHost, {
                  headers: {
                    verifier: verifier,
                    verifier_id: verifierParams.verifier_id,
                    network: this.network
                  }
                }, {
                  useAPIKey: true
                });

              case 4:
                /*
                  CommitmentRequestParams struct {
                    MessagePrefix      string `json:"messageprefix"`
                    TokenCommitment    string `json:"tokencommitment"`
                    TempPubX           string `json:"temppubx"`
                    TempPubY           string `json:"temppuby"`
                    VerifierIdentifier string `json:"verifieridentifier"`
                  } 
                  */
                // generate temporary private and public key that is used to secure receive shares
                tmpKey = (0, _eccrypto.generatePrivate)();
                pubKey = (0, _eccrypto.getPublic)(tmpKey).toString('hex');
                pubKeyX = pubKey.slice(2, 66);
                pubKeyY = pubKey.slice(66);
                tokenCommitment = (0, _web3Utils.keccak256)(idToken); // make commitment requests to endpoints

                for (i = 0; i < endpoints.length; i += 1) {
                  p = (0, _httpHelpers.post)(endpoints[i], (0, _httpHelpers.generateJsonRPCObject)('CommitmentRequest', {
                    messageprefix: 'mug00',
                    tokencommitment: tokenCommitment.slice(2),
                    temppubx: pubKeyX,
                    temppuby: pubKeyY,
                    verifieridentifier: verifier
                  })).catch(function (err) {
                    return log.error('commitment', err);
                  });
                  promiseArr.push(p);
                }
                /*
                  ShareRequestParams struct {
                    Item []bijson.RawMessage `json:"item"`
                  }
                  ShareRequestItem struct {
                    IDToken            string          `json:"idtoken"`
                    NodeSignatures     []NodeSignature `json:"nodesignatures"`
                    VerifierIdentifier string          `json:"verifieridentifier"`
                  }
                  NodeSignature struct {
                    Signature   string
                    Data        string
                    NodePubKeyX string
                    NodePubKeyY string
                  }
                  CommitmentRequestResult struct {
                    Signature string `json:"signature"`
                    Data      string `json:"data"`
                    NodePubX  string `json:"nodepubx"`
                    NodePubY  string `json:"nodepuby"`
                  }
                  */
                // send share request once k + t number of commitment requests have completed


                return _context5.abrupt("return", Some(promiseArr, function (resultArr) {
                  var completedRequests = resultArr.filter(function (x) {
                    if (!x || (0, _typeof2.default)(x) !== 'object') {
                      return false;
                    }

                    if (x.error) {
                      return false;
                    }

                    return true;
                  });

                  if (completedRequests.length >= ~~(endpoints.length / 4) * 3 + 1) {
                    return Promise.resolve(resultArr);
                  }

                  return Promise.reject(new Error("invalid ".concat(JSON.stringify(resultArr))));
                }).then(function (responses) {
                  var promiseArrRequest = [];
                  var nodeSigs = [];

                  for (var _i = 0; _i < responses.length; _i += 1) {
                    if (responses[_i]) nodeSigs.push(responses[_i].result);
                  }

                  for (var _i2 = 0; _i2 < endpoints.length; _i2 += 1) {
                    // eslint-disable-next-line promise/no-nesting
                    var _p = (0, _httpHelpers.post)(endpoints[_i2], (0, _httpHelpers.generateJsonRPCObject)('ShareRequest', {
                      encrypted: 'yes',
                      item: [_objectSpread(_objectSpread({}, verifierParams), {}, {
                        idtoken: idToken,
                        nodesignatures: nodeSigs,
                        verifieridentifier: verifier
                      }, extraParams)]
                    })).catch(function (err) {
                      return log.error('share req', err);
                    });

                    promiseArrRequest.push(_p);
                  }

                  return Some(promiseArrRequest, /*#__PURE__*/function () {
                    var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(shareResponses, sharedState) {
                      var completedRequests, thresholdPublicKey, sharePromises, nodeIndex, _i3, metadata, sharesResolved, decryptedShares, allCombis, privateKey, _loop, j, _ret;

                      return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              /*
                                  ShareRequestResult struct {
                                    Keys []KeyAssignment
                                  }
                                          / KeyAssignmentPublic -
                                  type KeyAssignmentPublic struct {
                                    Index     big.Int
                                    PublicKey common.Point
                                    Threshold int
                                    Verifiers map[string][]string // Verifier => VerifierID
                                  }
                                   // KeyAssignment -
                                  type KeyAssignment struct {
                                    KeyAssignmentPublic
                                    Share big.Int // Or Si
                                  }
                                */
                              // check if threshold number of nodes have returned the same user public key
                              completedRequests = shareResponses.filter(function (x) {
                                return x;
                              });
                              thresholdPublicKey = thresholdSame(shareResponses.map(function (x) {
                                return x && x.result && x.result.keys[0].PublicKey;
                              }), ~~(endpoints.length / 2) + 1); // optimistically run lagrange interpolation once threshold number of shares have been received
                              // this is matched against the user public key to ensure that shares are consistent

                              if (!(completedRequests.length >= ~~(endpoints.length / 2) + 1 && thresholdPublicKey)) {
                                _context3.next = 25;
                                break;
                              }

                              sharePromises = [];
                              nodeIndex = [];

                              for (_i3 = 0; _i3 < shareResponses.length; _i3 += 1) {
                                if (shareResponses[_i3] && shareResponses[_i3].result && shareResponses[_i3].result.keys && shareResponses[_i3].result.keys.length > 0) {
                                  shareResponses[_i3].result.keys.sort(function (a, b) {
                                    return new _bn.default(a.Index, 16).cmp(new _bn.default(b.Index, 16));
                                  });

                                  if (shareResponses[_i3].result.keys[0].Metadata) {
                                    metadata = {
                                      ephemPublicKey: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.ephemPublicKey, 'hex'),
                                      iv: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.iv, 'hex'),
                                      mac: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.mac, 'hex'),
                                      mode: Buffer.from(shareResponses[_i3].result.keys[0].Metadata.mode, 'hex')
                                    };
                                    sharePromises.push( // eslint-disable-next-line promise/no-nesting
                                    (0, _eccrypto.decrypt)(tmpKey, _objectSpread(_objectSpread({}, metadata), {}, {
                                      ciphertext: Buffer.from(atob(shareResponses[_i3].result.keys[0].Share).padStart(64, '0'), 'hex')
                                    })).catch(function (err) {
                                      return log.debug('share decryption', err);
                                    }));
                                  } else {
                                    sharePromises.push(Promise.resolve(Buffer.from(shareResponses[_i3].result.keys[0].Share.padStart(64, '0'), 'hex')));
                                  }
                                } else {
                                  sharePromises.push(Promise.resolve(undefined));
                                }

                                nodeIndex.push(new _bn.default(indexes[_i3], 16));
                              }

                              _context3.next = 8;
                              return Promise.all(sharePromises);

                            case 8:
                              sharesResolved = _context3.sent;

                              if (!sharedState.resolved) {
                                _context3.next = 11;
                                break;
                              }

                              return _context3.abrupt("return", undefined);

                            case 11:
                              decryptedShares = sharesResolved.reduce(function (acc, curr, index) {
                                if (curr) acc.push({
                                  index: nodeIndex[index],
                                  value: new _bn.default(curr)
                                });
                                return acc;
                              }, []); // run lagrange interpolation on all subsets, faster in the optimistic scenario than berlekamp-welch due to early exit
                              // run lagrange interpolation on all subsets, faster in the optimistic scenario than berlekamp-welch due to early exit

                              allCombis = kCombinations(decryptedShares.length, ~~(endpoints.length / 2) + 1);

                              _loop = function _loop(j) {
                                var currentCombi = allCombis[j];
                                var currentCombiShares = decryptedShares.filter(function (v, index) {
                                  return currentCombi.includes(index);
                                });
                                var shares = currentCombiShares.map(function (x) {
                                  return x.value;
                                });
                                var indices = currentCombiShares.map(function (x) {
                                  return x.index;
                                });

                                var derivedPrivateKey = _this.lagrangeInterpolation(shares, indices);

                                var decryptedPubKey = (0, _eccrypto.getPublic)(Buffer.from(derivedPrivateKey.toString(16, 64), 'hex')).toString('hex');
                                var decryptedPubKeyX = decryptedPubKey.slice(2, 66);
                                var decryptedPubKeyY = decryptedPubKey.slice(66);

                                if (new _bn.default(decryptedPubKeyX, 16).cmp(new _bn.default(thresholdPublicKey.X, 16)) === 0 && new _bn.default(decryptedPubKeyY, 16).cmp(new _bn.default(thresholdPublicKey.Y, 16)) === 0) {
                                  privateKey = derivedPrivateKey;
                                  return "break";
                                }
                              };

                              j = 0;

                            case 15:
                              if (!(j < allCombis.length)) {
                                _context3.next = 22;
                                break;
                              }

                              _ret = _loop(j);

                              if (!(_ret === "break")) {
                                _context3.next = 19;
                                break;
                              }

                              return _context3.abrupt("break", 22);

                            case 19:
                              j += 1;
                              _context3.next = 15;
                              break;

                            case 22:
                              if (!(privateKey === undefined)) {
                                _context3.next = 24;
                                break;
                              }

                              throw new Error('could not derive private key');

                            case 24:
                              return _context3.abrupt("return", privateKey);

                            case 25:
                              throw new Error('invalid');

                            case 26:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x10, _x11) {
                      return _ref5.apply(this, arguments);
                    };
                  }());
                }).then( /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(returnedKey) {
                    var privateKey, decryptedPubKey, decryptedPubKeyX, decryptedPubKeyY, metadataNonce, _yield$_this$getNonce, nonce, ethAddress;

                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            privateKey = returnedKey;
                            decryptedPubKey = (0, _eccrypto.getPublic)(Buffer.from(privateKey.toString(16, 64), 'hex')).toString('hex');
                            decryptedPubKeyX = decryptedPubKey.slice(2, 66);
                            decryptedPubKeyY = decryptedPubKey.slice(66);

                            if (!_this.enableOneKey) {
                              _context4.next = 12;
                              break;
                            }

                            _context4.next = 7;
                            return _this.getNonce(decryptedPubKeyX, decryptedPubKeyY, privateKey);

                          case 7:
                            _yield$_this$getNonce = _context4.sent;
                            nonce = _yield$_this$getNonce.nonce;
                            metadataNonce = new _bn.default(nonce || '0', 16);
                            _context4.next = 15;
                            break;

                          case 12:
                            _context4.next = 14;
                            return _this.getMetadata({
                              pub_key_X: decryptedPubKeyX,
                              pub_key_Y: decryptedPubKeyY
                            });

                          case 14:
                            metadataNonce = _context4.sent;

                          case 15:
                            log.debug('> torus.js/retrieveShares', {
                              privKey: privateKey.toString(16),
                              metadataNonce: metadataNonce.toString(16)
                            });
                            privateKey = privateKey.add(metadataNonce).umod(_this.ec.curve.n);
                            ethAddress = _this.generateAddressFromPrivKey(privateKey);
                            log.debug('> torus.js/retrieveShares', {
                              ethAddress: ethAddress,
                              privKey: privateKey.toString(16)
                            }); // return reconstructed private key and ethereum address

                            return _context4.abrupt("return", {
                              ethAddress: ethAddress,
                              privKey: privateKey.toString('hex', 64),
                              metadataNonce: metadataNonce
                            });

                          case 20:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x12) {
                    return _ref6.apply(this, arguments);
                  };
                }()));

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function retrieveShares(_x5, _x6, _x7, _x8, _x9) {
        return _retrieveShares.apply(this, arguments);
      }

      return retrieveShares;
    }()
  }, {
    key: "getMetadata",
    value: function () {
      var _getMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data, options) {
        var metadataResponse;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return (0, _httpHelpers.post)("".concat(this.metadataHost, "/get"), data, options, {
                  useAPIKey: true
                });

              case 3:
                metadataResponse = _context6.sent;

                if (!(!metadataResponse || !metadataResponse.message)) {
                  _context6.next = 6;
                  break;
                }

                return _context6.abrupt("return", new _bn.default(0));

              case 6:
                return _context6.abrupt("return", new _bn.default(metadataResponse.message, 16));

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                log.error('get metadata error', _context6.t0);
                return _context6.abrupt("return", new _bn.default(0));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 9]]);
      }));

      function getMetadata(_x13, _x14) {
        return _getMetadata.apply(this, arguments);
      }

      return getMetadata;
    }()
  }, {
    key: "generateMetadataParams",
    value: function generateMetadataParams(message, privateKey) {
      var key = this.ec.keyFromPrivate(privateKey.toString('hex', 64));
      var setData = {
        data: message,
        timestamp: new _bn.default(~~(this.serverTimeOffset + Date.now() / 1000)).toString(16)
      };
      var sig = key.sign((0, _web3Utils.keccak256)((0, _jsonStableStringify.default)(setData)).slice(2));
      return {
        pub_key_X: key.getPublic().getX().toString('hex'),
        pub_key_Y: key.getPublic().getY().toString('hex'),
        set_data: setData,
        signature: Buffer.from(sig.r.toString(16, 64) + sig.s.toString(16, 64) + new _bn.default(sig.v).toString(16, 2), 'hex').toString('base64')
      };
    }
  }, {
    key: "setMetadata",
    value: function () {
      var _setMetadata = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data, options) {
        var metadataResponse;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return (0, _httpHelpers.post)("".concat(this.metadataHost, "/set"), data, options, {
                  useAPIKey: true
                });

              case 3:
                metadataResponse = _context7.sent;
                return _context7.abrupt("return", metadataResponse.message);

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](0);
                log.error('set metadata error', _context7.t0);
                return _context7.abrupt("return", '');

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[0, 7]]);
      }));

      function setMetadata(_x15, _x16) {
        return _setMetadata.apply(this, arguments);
      }

      return setMetadata;
    }()
  }, {
    key: "lagrangeInterpolation",
    value: function lagrangeInterpolation(shares, nodeIndex) {
      if (shares.length !== nodeIndex.length) {
        return null;
      }

      var secret = new _bn.default(0);

      for (var i = 0; i < shares.length; i += 1) {
        var upper = new _bn.default(1);
        var lower = new _bn.default(1);

        for (var j = 0; j < shares.length; j += 1) {
          if (i !== j) {
            upper = upper.mul(nodeIndex[j].neg());
            upper = upper.umod(this.ec.curve.n);
            var temp = nodeIndex[i].sub(nodeIndex[j]);
            temp = temp.umod(this.ec.curve.n);
            lower = lower.mul(temp).umod(this.ec.curve.n);
          }
        }

        var delta = upper.mul(lower.invm(this.ec.curve.n)).umod(this.ec.curve.n);
        delta = delta.mul(shares[i]).umod(this.ec.curve.n);
        secret = secret.add(delta);
      }

      return secret.umod(this.ec.curve.n);
    }
  }, {
    key: "generateAddressFromPrivKey",
    value: function generateAddressFromPrivKey(privateKey) {
      var key = this.ec.keyFromPrivate(privateKey.toString('hex', 64), 'hex');
      var publicKey = key.getPublic().encode('hex').slice(2);
      var ethAddressLower = "0x".concat((0, _web3Utils.keccak256)(Buffer.from(publicKey, 'hex')).slice(64 - 38));
      return (0, _web3Utils.toChecksumAddress)(ethAddressLower);
    }
  }, {
    key: "generateAddressFromPubKey",
    value: function generateAddressFromPubKey(publicKeyX, publicKeyY) {
      var key = this.ec.keyFromPublic({
        x: publicKeyX.toString('hex', 64),
        y: publicKeyY.toString('hex', 64)
      });
      var publicKey = key.getPublic().encode('hex').slice(2);
      var ethAddressLower = "0x".concat((0, _web3Utils.keccak256)(Buffer.from(publicKey, 'hex')).slice(64 - 38));
      return (0, _web3Utils.toChecksumAddress)(ethAddressLower);
    }
    /**
     * Note: use this function only with custom auth, don't use to lookup openlogin accounts.
     */

  }, {
    key: "getPublicAddress",
    value: function () {
      var _getPublicAddress = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(endpoints, torusNodePubs, _ref7) {
        var verifier,
            verifierId,
            isExtended,
            finalKeyResult,
            isNewKey,
            _ref8,
            keyResult,
            errorResult,
            assignResult,
            _nonce,
            _finalKeyResult$keys$2,
            X,
            Y,
            typeOfUser,
            nonce,
            pubNonce,
            modifiedPubKey,
            upgraded,
            _yield$this$getOrSetN2,
            address,
            _args8 = arguments;

        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                verifier = _ref7.verifier, verifierId = _ref7.verifierId;
                isExtended = _args8.length > 3 && _args8[3] !== undefined ? _args8[3] : false;
                log.debug('> torus.js/getPublicAddress', {
                  endpoints: endpoints,
                  torusNodePubs: torusNodePubs,
                  verifier: verifier,
                  verifierId: verifierId,
                  isExtended: isExtended
                });
                isNewKey = false;
                _context8.next = 6;
                return keyLookup(endpoints, verifier, verifierId);

              case 6:
                _context8.t0 = _context8.sent;

                if (_context8.t0) {
                  _context8.next = 9;
                  break;
                }

                _context8.t0 = {};

              case 9:
                _ref8 = _context8.t0;
                keyResult = _ref8.keyResult;
                errorResult = _ref8.errorResult;

                if (!(errorResult && JSON.stringify(errorResult).includes('Verifier not supported'))) {
                  _context8.next = 16;
                  break;
                }

                throw new Error("Verifier not supported. Check if you: \n\n      1. Are on the right network (Torus testnet/mainnet) \n\n      2. Have setup a verifier on dashboard.web3auth.io?");

              case 16:
                if (!(errorResult && JSON.stringify(errorResult).includes('Verifier + VerifierID has not yet been assigned'))) {
                  _context8.next = 29;
                  break;
                }

                _context8.next = 19;
                return keyAssign({
                  endpoints: endpoints,
                  torusNodePubs: torusNodePubs,
                  lastPoint: undefined,
                  firstPoint: undefined,
                  verifier: verifier,
                  verifierId: verifierId,
                  signerHost: this.signerHost,
                  network: this.network
                });

              case 19:
                _context8.next = 21;
                return waitKeyLookup(endpoints, verifier, verifierId, 1000);

              case 21:
                _context8.t1 = _context8.sent;

                if (_context8.t1) {
                  _context8.next = 24;
                  break;
                }

                _context8.t1 = {};

              case 24:
                assignResult = _context8.t1;
                finalKeyResult = assignResult.keyResult;
                isNewKey = true;
                _context8.next = 34;
                break;

              case 29:
                if (!keyResult) {
                  _context8.next = 33;
                  break;
                }

                finalKeyResult = keyResult;
                _context8.next = 34;
                break;

              case 33:
                throw new Error("node results do not match at first lookup ".concat(JSON.stringify(keyResult || {}), ", ").concat(JSON.stringify(errorResult || {})));

              case 34:
                log.debug('> torus.js/getPublicAddress', {
                  finalKeyResult: finalKeyResult,
                  isNewKey: isNewKey
                });

                if (!finalKeyResult) {
                  _context8.next = 76;
                  break;
                }

                _finalKeyResult$keys$2 = finalKeyResult.keys[0], X = _finalKeyResult$keys$2.pub_key_X, Y = _finalKeyResult$keys$2.pub_key_Y;

                if (!this.enableOneKey) {
                  _context8.next = 64;
                  break;
                }

                _context8.prev = 38;
                _context8.next = 42;
                return this.getOrSetNonce(X, Y, undefined, !isNewKey);

              case 42:
                _yield$this$getOrSetN2 = _context8.sent;
                typeOfUser = _yield$this$getOrSetN2.typeOfUser;
                nonce = _yield$this$getOrSetN2.nonce;
                pubNonce = _yield$this$getOrSetN2.pubNonce;
                upgraded = _yield$this$getOrSetN2.upgraded;
                nonce = new _bn.default(nonce || '0', 16);
                _context8.next = 53;
                break;

              case 50:
                _context8.prev = 50;
                _context8.t2 = _context8["catch"](38);
                throw new GetOrSetNonceError();

              case 53:
                if (!(typeOfUser === 'v1')) {
                  _context8.next = 57;
                  break;
                }

                modifiedPubKey = this.ec.keyFromPublic({
                  x: X.toString(16),
                  y: Y.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());
                _context8.next = 62;
                break;

              case 57:
                if (!(typeOfUser === 'v2')) {
                  _context8.next = 61;
                  break;
                }

                if (upgraded) {
                  // OneKey is upgraded to 2/n, returned address is address of Torus key (postbox key), not tKey
                  modifiedPubKey = this.ec.keyFromPublic({
                    x: X.toString(16),
                    y: Y.toString(16)
                  }).getPublic();
                } else {
                  modifiedPubKey = this.ec.keyFromPublic({
                    x: X.toString(16),
                    y: Y.toString(16)
                  }).getPublic().add(this.ec.keyFromPublic({
                    x: pubNonce.x,
                    y: pubNonce.y
                  }).getPublic());
                }

                _context8.next = 62;
                break;

              case 61:
                throw new Error('getOrSetNonce should always return typeOfUser.');

              case 62:
                _context8.next = 69;
                break;

              case 64:
                typeOfUser = 'v1';
                _context8.next = 67;
                return this.getMetadata({
                  pub_key_X: X,
                  pub_key_Y: Y
                });

              case 67:
                nonce = _context8.sent;
                modifiedPubKey = this.ec.keyFromPublic({
                  x: X.toString(16),
                  y: Y.toString(16)
                }).getPublic().add(this.ec.keyFromPrivate(nonce.toString(16)).getPublic());

              case 69:
                X = modifiedPubKey.getX().toString(16);
                Y = modifiedPubKey.getY().toString(16);
                address = this.generateAddressFromPubKey(modifiedPubKey.getX(), modifiedPubKey.getY());
                log.debug('> torus.js/getPublicAddress', {
                  X: X,
                  Y: Y,
                  address: address,
                  typeOfUser: typeOfUser,
                  nonce: (_nonce = nonce) === null || _nonce === void 0 ? void 0 : _nonce.toString(16),
                  pubNonce: pubNonce
                });

                if (isExtended) {
                  _context8.next = 75;
                  break;
                }

                return _context8.abrupt("return", address);

              case 75:
                return _context8.abrupt("return", {
                  typeOfUser: typeOfUser,
                  address: address,
                  X: X,
                  Y: Y,
                  metadataNonce: nonce,
                  pubNonce: pubNonce
                });

              case 76:
                throw new Error("node results do not match at final lookup ".concat(JSON.stringify(keyResult || {}), ", ").concat(JSON.stringify(errorResult || {})));

              case 77:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[38, 50]]);
      }));

      function getPublicAddress(_x17, _x18, _x19) {
        return _getPublicAddress.apply(this, arguments);
      }

      return getPublicAddress;
    }()
    /**
     * Internal functions for OneKey (OpenLogin v2), only call these functions if you know what you're doing
     */

  }, {
    key: "getOrSetNonce",
    value: function () {
      var _getOrSetNonce = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(X, Y, privKey) {
        var getOnly,
            data,
            msg,
            _args9 = arguments;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                getOnly = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : false;
                msg = getOnly ? 'getNonce' : 'getOrSetNonce';

                if (privKey) {
                  data = this.generateMetadataParams(msg, privKey);
                } else {
                  data = {
                    pub_key_X: X,
                    pub_key_Y: Y,
                    set_data: {
                      data: msg
                    }
                  };
                }

                return _context9.abrupt("return", (0, _httpHelpers.post)("".concat(this.metadataHost, "/get_or_set_nonce"), data, undefined, {
                  useAPIKey: true
                }));

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getOrSetNonce(_x20, _x21, _x22) {
        return _getOrSetNonce.apply(this, arguments);
      }

      return getOrSetNonce;
    }()
  }, {
    key: "getNonce",
    value: function () {
      var _getNonce = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(X, Y, privKey) {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", this.getOrSetNonce(X, Y, privKey, true));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getNonce(_x23, _x24, _x25) {
        return _getNonce.apply(this, arguments);
      }

      return getNonce;
    }()
  }, {
    key: "getPostboxKeyFrom1OutOf1",
    value: function getPostboxKeyFrom1OutOf1(privKey, nonce) {
      var privKeyBN = new _bn.default(privKey, 16);
      var nonceBN = new _bn.default(nonce, 16);
      return privKeyBN.sub(nonceBN).umod(this.ec.curve.n).toString('hex');
    }
  }], [{
    key: "enableLogging",
    value: function enableLogging() {
      var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (v) log.enableAll();else log.disableAll();
    }
  }, {
    key: "setAPIKey",
    value: function setAPIKey$1(apiKey) {
      (0, _httpHelpers.setAPIKey)(apiKey);
    }
  }, {
    key: "setEmbedHost",
    value: function setEmbedHost$1(embedHost) {
      (0, _httpHelpers.setEmbedHost)(embedHost);
    }
  }, {
    key: "isGetOrSetNonceError",
    value: function isGetOrSetNonceError(err) {
      return err instanceof GetOrSetNonceError;
    }
  }]);
  return Torus;
}();

exports.default = Torus;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@babel/runtime/helpers/typeof":"node_modules/@babel/runtime/helpers/typeof.js","@babel/runtime/helpers/asyncToGenerator":"node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/regenerator":"node_modules/@babel/runtime/regenerator/index.js","@toruslabs/eccrypto":"node_modules/@toruslabs/eccrypto/browser.js","@toruslabs/http-helpers":"node_modules/@toruslabs/http-helpers/dist/httpHelpers.esm.js","bn.js":"node_modules/@toruslabs/torus.js/node_modules/bn.js/lib/bn.js","elliptic":"node_modules/elliptic/lib/elliptic.js","json-stable-stringify":"node_modules/json-stable-stringify/index.js","web3-utils":"node_modules/web3-utils/lib/index.js","loglevel":"node_modules/loglevel/lib/loglevel.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/wrapNativeSuper":"node_modules/@babel/runtime/helpers/wrapNativeSuper.js","@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js","buffer":"node_modules/buffer/index.js"}],"node_modules/@metamask/obs-store/dist/asStream.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeAsStream = void 0;

var stream_1 = require("stream");

var ObservableStoreStream = /*#__PURE__*/function (_stream_1$Duplex) {
  _inherits(ObservableStoreStream, _stream_1$Duplex);

  var _super = _createSuper(ObservableStoreStream);

  function ObservableStoreStream(obsStore) {
    var _this;

    _classCallCheck(this, ObservableStoreStream);

    _this = _super.call(this, {
      // pass values, not serializations
      objectMode: true
    }); // dont buffer outgoing updates

    _this.resume(); // save handler so we can unsubscribe later


    _this.handler = function (state) {
      return _this.push(state);
    }; // subscribe to obsStore changes


    _this.obsStore = obsStore;

    _this.obsStore.subscribe(_this.handler);

    return _this;
  } // emit current state on new destination


  _createClass(ObservableStoreStream, [{
    key: "pipe",
    value: function pipe(dest, options) {
      var result = _get(_getPrototypeOf(ObservableStoreStream.prototype), "pipe", this).call(this, dest, options);

      dest.write(this.obsStore.getState());
      return result;
    } // write from incoming stream to state

  }, {
    key: "_write",
    value: function _write(chunk, _encoding, callback) {
      this.obsStore.putState(chunk);
      callback();
    } // noop - outgoing stream is asking us if we have data we arent giving it

  }, {
    key: "_read",
    value: function _read(_size) {
      return undefined;
    } // unsubscribe from event emitter

  }, {
    key: "_destroy",
    value: function _destroy(err, callback) {
      this.obsStore.unsubscribe(this.handler);

      _get(_getPrototypeOf(ObservableStoreStream.prototype), "_destroy", this).call(this, err, callback);
    }
  }]);

  return ObservableStoreStream;
}(stream_1.Duplex);

function storeAsStream(obsStore) {
  return new ObservableStoreStream(obsStore);
}

exports.storeAsStream = storeAsStream;
},{"stream":"node_modules/stream-browserify/index.js"}],"node_modules/@metamask/safe-event-emitter/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    }
    catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(() => {
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for (let i = 0; i < n; i += 1) {
        copy[i] = arr[i];
    }
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === 'error';
        const events = this._events;
        if (events !== undefined) {
            doError = doError && events.error === undefined;
        }
        else if (!doError) {
            return false;
        }
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) {
                [er] = args;
            }
            if (er instanceof Error) {
                // Note: The comments on the `throw` lines are intentional, they show
                // up in Node's output if this results in an unhandled exception.
                throw er; // Unhandled 'error' event
            }
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ''}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) {
            return false;
        }
        if (typeof handler === 'function') {
            safeApply(handler, this, args);
        }
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for (let i = 0; i < len; i += 1) {
                safeApply(listeners[i], this, args);
            }
        }
        return true;
    }
}
exports.default = SafeEventEmitter;

},{"events":"node_modules/events/events.js"}],"node_modules/@metamask/obs-store/dist/ObservableStore.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObservableStore = void 0;

var safe_event_emitter_1 = __importDefault(require("@metamask/safe-event-emitter"));

var ObservableStore = /*#__PURE__*/function (_safe_event_emitter_) {
  _inherits(ObservableStore, _safe_event_emitter_);

  var _super = _createSuper(ObservableStore);

  function ObservableStore(initState) {
    var _this;

    _classCallCheck(this, ObservableStore);

    _this = _super.call(this);

    if (initState) {
      _this._state = initState;
    } else {
      // Typecast/default state: Preserve existing behavior
      _this._state = {};
    }

    return _this;
  } // wrapper around internal getState


  _createClass(ObservableStore, [{
    key: "getState",
    value: function getState() {
      return this._getState();
    } // wrapper around internal putState

  }, {
    key: "putState",
    value: function putState(newState) {
      this._putState(newState);

      this.emit('update', newState);
    }
  }, {
    key: "updateState",
    value: function updateState(partialState) {
      // if non-null object, merge
      if (partialState && _typeof(partialState) === 'object') {
        var state = this.getState();
        this.putState(Object.assign(Object.assign({}, state), partialState)); // if not object, use new value
      } else {
        this.putState(partialState);
      }
    } // subscribe to changes

  }, {
    key: "subscribe",
    value: function subscribe(handler) {
      this.on('update', handler);
    } // unsubscribe to changes

  }, {
    key: "unsubscribe",
    value: function unsubscribe(handler) {
      this.removeListener('update', handler);
    } //
    // private
    //
    // read from persistence

  }, {
    key: "_getState",
    value: function _getState() {
      return this._state;
    } // write to persistence

  }, {
    key: "_putState",
    value: function _putState(newState) {
      this._state = newState;
    }
  }]);

  return ObservableStore;
}(safe_event_emitter_1.default);

exports.ObservableStore = ObservableStore;
},{"@metamask/safe-event-emitter":"node_modules/@metamask/safe-event-emitter/index.js"}],"node_modules/@metamask/obs-store/dist/ComposedStore.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComposedStore = void 0;

var ObservableStore_1 = require("./ObservableStore");

var ComposedStore = /*#__PURE__*/function (_ObservableStore_1$Ob) {
  _inherits(ComposedStore, _ObservableStore_1$Ob);

  var _super = _createSuper(ComposedStore);

  function ComposedStore(children) {
    var _this;

    _classCallCheck(this, ComposedStore);

    // Typecast: Preserve existing behavior
    _this = _super.call(this, {}); // subscribe to children

    _this._children = children || {};
    Object.keys(_this._children).forEach(function (childKey) {
      var child = _this._children[childKey];

      _this._addChild(childKey, child);
    });
    return _this;
  }

  _createClass(ComposedStore, [{
    key: "_addChild",
    value: function _addChild(childKey, child) {
      var _this2 = this;

      var updateFromChild = function updateFromChild(childValue) {
        var state = _this2.getState();

        state[childKey] = childValue;

        _this2.putState(state);
      };

      child.subscribe(updateFromChild);
      updateFromChild(child.getState());
    }
  }]);

  return ComposedStore;
}(ObservableStore_1.ObservableStore);

exports.ComposedStore = ComposedStore;
},{"./ObservableStore":"node_modules/@metamask/obs-store/dist/ObservableStore.js"}],"node_modules/@metamask/obs-store/dist/MergedStore.js":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MergedStore = void 0;

var ObservableStore_1 = require("./ObservableStore");

var MergedStore = /*#__PURE__*/function (_ObservableStore_1$Ob) {
  _inherits(MergedStore, _ObservableStore_1$Ob);

  var _super = _createSuper(MergedStore);

  function MergedStore() {
    var _this;

    var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, MergedStore);

    // Typecast: Preserve existing behavior
    _this = _super.call(this, {});
    _this._children = children; // subscribe to children

    children.forEach(function (child) {
      return _this._addChild(child);
    });

    _this._updateWholeState();

    return _this;
  }

  _createClass(MergedStore, [{
    key: "_addChild",
    value: function _addChild(child) {
      var _this2 = this;

      child.subscribe(function () {
        return _this2._updateWholeState();
      });
    }
  }, {
    key: "_updateWholeState",
    value: function _updateWholeState() {
      var childStates = this._children.map(function (child) {
        return child.getState();
      }); // apply shallow merge over states


      var state = Object.assign.apply(Object, [{}].concat(_toConsumableArray(childStates)));
      this.putState(state);
    }
  }]);

  return MergedStore;
}(ObservableStore_1.ObservableStore);

exports.MergedStore = MergedStore;
},{"./ObservableStore":"node_modules/@metamask/obs-store/dist/ObservableStore.js"}],"node_modules/through2/through2.js":[function(require,module,exports) {
var process = require("process");
var Transform = require('readable-stream').Transform
  , inherits  = require('util').inherits
  , xtend     = require('xtend')

function DestroyableTransform(opts) {
  Transform.call(this, opts)
  this._destroyed = false
}

inherits(DestroyableTransform, Transform)

DestroyableTransform.prototype.destroy = function(err) {
  if (this._destroyed) return
  this._destroyed = true
  
  var self = this
  process.nextTick(function() {
    if (err)
      self.emit('error', err)
    self.emit('close')
  })
}

// a noop _transform function
function noop (chunk, enc, callback) {
  callback(null, chunk)
}


// create a new export function, used by both the main export and
// the .ctor export, contains common logic for dealing with arguments
function through2 (construct) {
  return function (options, transform, flush) {
    if (typeof options == 'function') {
      flush     = transform
      transform = options
      options   = {}
    }

    if (typeof transform != 'function')
      transform = noop

    if (typeof flush != 'function')
      flush = null

    return construct(options, transform, flush)
  }
}


// main export, just make me a transform stream!
module.exports = through2(function (options, transform, flush) {
  var t2 = new DestroyableTransform(options)

  t2._transform = transform

  if (flush)
    t2._flush = flush

  return t2
})


// make me a reusable prototype that I can `new`, or implicitly `new`
// with a constructor call
module.exports.ctor = through2(function (options, transform, flush) {
  function Through2 (override) {
    if (!(this instanceof Through2))
      return new Through2(override)

    this.options = xtend(options, override)

    DestroyableTransform.call(this, this.options)
  }

  inherits(Through2, DestroyableTransform)

  Through2.prototype._transform = transform

  if (flush)
    Through2.prototype._flush = flush

  return Through2
})


module.exports.obj = through2(function (options, transform, flush) {
  var t2 = new DestroyableTransform(xtend({ objectMode: true, highWaterMark: 16 }, options))

  t2._transform = transform

  if (flush)
    t2._flush = flush

  return t2
})

},{"readable-stream":"node_modules/readable-stream/readable-browser.js","util":"node_modules/util/util.js","xtend":"node_modules/xtend/immutable.js","process":"node_modules/process/browser.js"}],"node_modules/@metamask/obs-store/dist/transform.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeTransformStream = void 0;

var through2_1 = require("through2");

function storeTransformStream(syncTransformFn) {
  return through2_1.obj(function (state, _encoding, cb) {
    try {
      var newState = syncTransformFn(state);
      cb(null, newState);
      return undefined;
    } catch (err) {
      cb(err);
      return undefined;
    }
  });
}

exports.storeTransformStream = storeTransformStream;
},{"through2":"node_modules/through2/through2.js"}],"node_modules/@metamask/obs-store/dist/index.js":[function(require,module,exports) {
"use strict";

var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function get() {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) {
    if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

__exportStar(require("./asStream"), exports);

__exportStar(require("./ComposedStore"), exports);

__exportStar(require("./MergedStore"), exports);

__exportStar(require("./ObservableStore"), exports);

__exportStar(require("./transform"), exports);
},{"./asStream":"node_modules/@metamask/obs-store/dist/asStream.js","./ComposedStore":"node_modules/@metamask/obs-store/dist/ComposedStore.js","./MergedStore":"node_modules/@metamask/obs-store/dist/MergedStore.js","./ObservableStore":"node_modules/@metamask/obs-store/dist/ObservableStore.js","./transform":"node_modules/@metamask/obs-store/dist/transform.js"}],"node_modules/@toruslabs/torus-embed/node_modules/is-stream/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDuplexStream = isDuplexStream;
exports.isReadableStream = isReadableStream;
exports.isStream = isStream;
exports.isTransformStream = isTransformStream;
exports.isWritableStream = isWritableStream;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function isStream(stream) {
  return stream !== null && _typeof(stream) === 'object' && typeof stream.pipe === 'function';
}

function isWritableStream(stream) {
  return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && _typeof(stream._writableState) === 'object';
}

function isReadableStream(stream) {
  return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && _typeof(stream._readableState) === 'object';
}

function isDuplexStream(stream) {
  return isWritableStream(stream) && isReadableStream(stream);
}

function isTransformStream(stream) {
  return isDuplexStream(stream) && typeof stream._transform === 'function';
}
},{}],"node_modules/@toruslabs/torus-embed/dist/torus.esm.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WALLET_OPENLOGIN_VERIFIER_MAP = exports.TorusInpageProvider = exports.TORUS_BUILD_ENV = exports.PAYMENT_PROVIDER = exports.LOGIN_PROVIDER = exports.BUTTON_POSITION = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fetchNodeDetails = _interopRequireDefault(require("@toruslabs/fetch-node-details"));

var _httpHelpers = require("@toruslabs/http-helpers");

var _openloginJrpc = require("@toruslabs/openlogin-jrpc");

var _torus = _interopRequireDefault(require("@toruslabs/torus.js"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _obsStore = require("@metamask/obs-store");

var _ethRpcErrors = require("eth-rpc-errors");

var _fastDeepEqual = _interopRequireDefault(require("fast-deep-equal"));

var _isStream = require("is-stream");

var _pump = _interopRequireDefault(require("pump"));

var _loglevel = _interopRequireDefault(require("loglevel"));

var _createHash = _interopRequireDefault(require("create-hash"));

var _events = require("events");

var _WALLET_OPENLOGIN_VER, _paymentProviders$, _defaultVerifiers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  TWITCH: "twitch",
  REDDIT: "reddit",
  DISCORD: "discord"
};
exports.LOGIN_PROVIDER = LOGIN_PROVIDER;
var WALLET_OPENLOGIN_VERIFIER_MAP = (_WALLET_OPENLOGIN_VER = {}, _defineProperty2(_WALLET_OPENLOGIN_VER, LOGIN_PROVIDER.GOOGLE, "tkey-google"), _defineProperty2(_WALLET_OPENLOGIN_VER, LOGIN_PROVIDER.FACEBOOK, "tkey-facebook"), _defineProperty2(_WALLET_OPENLOGIN_VER, LOGIN_PROVIDER.TWITCH, "tkey-twitch"), _defineProperty2(_WALLET_OPENLOGIN_VER, LOGIN_PROVIDER.REDDIT, "tkey-reddit"), _defineProperty2(_WALLET_OPENLOGIN_VER, LOGIN_PROVIDER.DISCORD, "tkey-discord"), _WALLET_OPENLOGIN_VER);
exports.WALLET_OPENLOGIN_VERIFIER_MAP = WALLET_OPENLOGIN_VERIFIER_MAP;
var PAYMENT_PROVIDER = {
  MOONPAY: "moonpay",
  WYRE: "wyre",
  RAMPNETWORK: "rampnetwork",
  XANPOOL: "xanpool",
  MERCURYO: "mercuryo",
  TRANSAK: "transak"
};
exports.PAYMENT_PROVIDER = PAYMENT_PROVIDER;
var TORUS_BUILD_ENV = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
  BINANCE: "binance",
  TESTING: "testing",
  LRC: "lrc",
  BETA: "beta"
};
exports.TORUS_BUILD_ENV = TORUS_BUILD_ENV;
var BUTTON_POSITION = {
  BOTTOM_LEFT: "bottom-left",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_RIGHT: "top-right"
};
exports.BUTTON_POSITION = BUTTON_POSITION;
var paymentProviders$1 = (_paymentProviders$ = {}, _defineProperty2(_paymentProviders$, PAYMENT_PROVIDER.RAMPNETWORK, {
  line1: "Debit Card/ Apple Pay/ Bank transfer",
  line2: "0.49% - 2.9%",
  line3: "5,000€/purchase, 20,000€/mo",
  supportPage: "https://instant.ramp.network/",
  minOrderValue: 50,
  maxOrderValue: 20000,
  validCurrencies: ["GBP", "EUR", "USD"],
  validCryptoCurrencies: ["ETH", "DAI", "USDC", "BSC_BNB"],
  includeFees: true,
  enforceMax: false
}), _defineProperty2(_paymentProviders$, PAYMENT_PROVIDER.MOONPAY, {
  line1: "Credit / Debit Card / Apple Pay",
  line2: "4.5% or 5 USD",
  line3: "2,000€/day, 10,000€/mo",
  supportPage: "https://help.moonpay.io/en/",
  minOrderValue: 24.99,
  maxOrderValue: 50000,
  validCurrencies: ["USD", "EUR", "GBP", "AUD", "CAD", "SGD", "RUB"],
  validCryptoCurrencies: ["ETH", "DAI", "TUSD", "USDC", "USDT", "BNB_BSC", "BUSD_BSC"],
  includeFees: true,
  enforceMax: false
}), _defineProperty2(_paymentProviders$, PAYMENT_PROVIDER.WYRE, {
  line1: "Apple Pay/ Debit/ Credit Card",
  line2: "4.9% + 30¢ or 5 USD",
  line3: "$250/day",
  supportPage: "https://support.sendwyre.com/en/",
  minOrderValue: 5,
  maxOrderValue: 500,
  validCurrencies: ["USD", "AUD", "CAD", "GBP", "EUR"],
  validCryptoCurrencies: ["ETH", "DAI", "USDC", "USDT"],
  includeFees: false,
  enforceMax: false
}), _defineProperty2(_paymentProviders$, PAYMENT_PROVIDER.XANPOOL, {
  line1: "PayNow/ InstaPay/ FPS/ GoJekPay/ UPI/ PromptPay/ VietelPay/ DuitNow",
  line2: "2.5% buying, 3% selling",
  line3: "$2,500 / day",
  supportPage: "mailto:support@xanpool.com",
  minOrderValue: 100,
  maxOrderValue: 2500,
  validCurrencies: ["SGD", "HKD", "MYR", "PHP", "INR", "VND", "THB", "IDR"],
  validCryptoCurrencies: ["ETH", "USDT"],
  includeFees: true,
  sell: true,
  enforceMax: false
}), _defineProperty2(_paymentProviders$, PAYMENT_PROVIDER.MERCURYO, {
  line1: "Credit/ Debit Card/ Apple Pay",
  line2: "3.95% or 4 USD",
  line3: "10,000€/day, 25,000€/mo",
  supportPage: "mailto:support@mercuryo.io",
  minOrderValue: 30,
  maxOrderValue: 5000,
  validCurrencies: ["USD", "EUR", "RUB", "TRY", "GBP", "UAH"],
  validCryptoCurrencies: ["ETH", "DAI", "BAT", "USDT", "OKB"],
  includeFees: true,
  enforceMax: false
}), _defineProperty2(_paymentProviders$, PAYMENT_PROVIDER.TRANSAK, {
  line1: "Credit/ Debit Card/ <br/>Bank Transfer (sepa/gbp)",
  line2: "0.99% - 5.5% or 5 USD",
  line3: "500€/day",
  supportPage: "https://support.transak.com/hc/en-US",
  minOrderValue: 20,
  maxOrderValue: 500,
  validCurrencies: ["USD", "EUR", "GBP", "AUD", "CAD", "SGD"],
  validCryptoCurrencies: ["ETH", "DAI", "USDC", "USDT"],
  includeFees: true,
  enforceMax: false
}), _paymentProviders$);
var translations = {
  en: {
    embed: {
      continue: "Continue",
      actionRequired: "Authorization required",
      pendingAction: "Click continue to proceed with your request in a popup",
      cookiesRequired: "Cookies Required",
      enableCookies: "Please enable cookies in your browser preferences to access Torus",
      clickHere: "More Info"
    }
  },
  de: {
    embed: {
      continue: "Fortsetzen",
      actionRequired: "Autorisierung erforderlich",
      pendingAction: "Klicken Sie in einem Popup auf Weiter, um mit Ihrer Anfrage fortzufahren",
      cookiesRequired: "Cookies benötigt",
      enableCookies: "Bitte aktivieren Sie Cookies in Ihren Browsereinstellungen, um auf Torus zuzugreifen",
      clickHere: "Mehr Info"
    }
  },
  ja: {
    embed: {
      continue: "継続する",
      actionRequired: "認証が必要です",
      pendingAction: "続行をクリックして、ポップアップでリクエストを続行します",
      cookiesRequired: "必要なクッキー",
      enableCookies: "Torusにアクセスするには、ブラウザの設定でCookieを有効にしてください。",
      clickHere: "詳しくは"
    }
  },
  ko: {
    embed: {
      continue: "계속하다",
      actionRequired: "승인 필요",
      pendingAction: "팝업에서 요청을 진행하려면 계속을 클릭하십시오.",
      cookiesRequired: "쿠키 필요",
      enableCookies: "브라우저 환경 설정에서 쿠키를 활성화하여 Torus에 액세스하십시오.",
      clickHere: "더 많은 정보"
    }
  },
  zh: {
    embed: {
      continue: "继续",
      actionRequired: "需要授权",
      pendingAction: "单击继续以在弹出窗口中继续您的请求",
      cookiesRequired: "必填Cookie",
      enableCookies: "请在您的浏览器首选项中启用cookie以访问Torus。",
      clickHere: "更多信息"
    }
  }
};
var configuration = {
  supportedVerifierList: [LOGIN_PROVIDER.GOOGLE, LOGIN_PROVIDER.REDDIT, LOGIN_PROVIDER.DISCORD],
  paymentProviders: paymentProviders$1,
  api: "https://api.tor.us",
  translations: translations,
  prodTorusUrl: "",
  localStorageKey: "torus-".concat(window.location.hostname)
};

var runOnLoad = function runOnLoad(fn) {
  return new Promise(function (resolve, reject) {
    if (window.document.body != null) {
      Promise.resolve(fn()).then(resolve).catch(reject);
    } else {
      window.document.addEventListener("DOMContentLoaded", function () {
        Promise.resolve(fn()).then(resolve).catch(reject);
      });
    }
  });
};

var htmlToElement = function htmlToElement(html) {
  var template = window.document.createElement("template");
  var trimmedHtml = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = trimmedHtml;
  return template.content.firstChild;
};

var handleEvent = function handleEvent(handle, eventName, handler) {
  for (var _len = arguments.length, handlerArgs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    handlerArgs[_key - 3] = arguments[_key];
  }

  var handlerWrapper = function handlerWrapper() {
    handler.apply(void 0, handlerArgs);
    handle.removeEventListener(eventName, handlerWrapper);
  };

  handle.addEventListener(eventName, handlerWrapper);
};

var handleStream = function handleStream(handle, eventName, handler) {
  var handlerWrapper = function handlerWrapper(chunk) {
    handler(chunk);
    handle.removeListener(eventName, handlerWrapper);
  };

  handle.on(eventName, handlerWrapper);
};

function documentReady() {
  return _documentReady.apply(this, arguments);
}

function _documentReady() {
  _documentReady = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
    return regeneratorRuntime.wrap(function _callee13$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
            return _context13.abrupt("return", new Promise(function (resolve) {
              if (document.readyState !== "loading") {
                resolve();
              } else {
                handleEvent(document, "DOMContentLoaded", resolve);
              }
            }));

          case 1:
          case "end":
            return _context13.stop();
        }
      }
    }, _callee13);
  }));
  return _documentReady.apply(this, arguments);
}

var log = _loglevel.default.getLogger("torus-embed");

var messages = {
  errors: {
    disconnected: function disconnected() {
      return "Torus: Lost connection to Torus.";
    },
    permanentlyDisconnected: function permanentlyDisconnected() {
      return "Torus: Disconnected from iframe. Page reload required.";
    },
    sendSiteMetadata: function sendSiteMetadata() {
      return "Torus: Failed to send site metadata. This is an internal error, please report this bug.";
    },
    unsupportedSync: function unsupportedSync(method) {
      return "Torus: The Torus Ethereum provider does not support synchronous methods like ".concat(method, " without a callback parameter.");
    },
    invalidDuplexStream: function invalidDuplexStream() {
      return "Must provide a Node.js-style duplex stream.";
    },
    invalidOptions: function invalidOptions(maxEventListeners, shouldSendMetadata) {
      return "Invalid options. Received: { maxEventListeners: ".concat(maxEventListeners, ", shouldSendMetadata: ").concat(shouldSendMetadata, " }");
    },
    invalidRequestArgs: function invalidRequestArgs() {
      return "Expected a single, non-array, object argument.";
    },
    invalidRequestMethod: function invalidRequestMethod() {
      return "'args.method' must be a non-empty string.";
    },
    invalidRequestParams: function invalidRequestParams() {
      return "'args.params' must be an object or array if provided.";
    },
    invalidLoggerObject: function invalidLoggerObject() {
      return "'args.logger' must be an object if provided.";
    },
    invalidLoggerMethod: function invalidLoggerMethod(method) {
      return "'args.logger' must include required method '".concat(method, "'.");
    }
  },
  info: {
    connected: function connected(chainId) {
      return "Torus: Connected to chain with ID \"".concat(chainId, "\".");
    }
  },
  warnings: {
    // deprecated methods
    enableDeprecation: 'Torus: ""ethereum.enable()" is deprecated and may be removed in the future. ' + 'Please use "ethereum.send("eth_requestAccounts")" instead. For more information, see: https://eips.ethereum.org/EIPS/eip-1102',
    sendDeprecation: 'Torus: "ethereum.send(...)" is deprecated and may be removed in the future.' + ' Please use "ethereum.sendAsync(...)" or "ethereum.request(...)" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
    events: {
      close: 'Torus: The event "close" is deprecated and may be removed in the future. Please use "disconnect" instead.' + "\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193",
      data: 'Torus: The event "data" is deprecated and will be removed in the future.' + 'Use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message',
      networkChanged: 'Torus: The event "networkChanged" is deprecated and may be removed in the future.' + ' Please use "chainChanged" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193',
      notification: 'Torus: The event "notification" is deprecated and may be removed in the future. ' + 'Please use "message" instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193'
    },
    publicConfigStore: 'Torus: The property "publicConfigStore" is deprecated and WILL be removed in the future.'
  }
};
var paymentProviders = configuration.paymentProviders;

var validatePaymentProvider = function validatePaymentProvider(provider, params) {
  var errors = {};

  if (!provider) {
    return {
      errors: errors,
      isValid: true
    };
  }

  if (provider && !paymentProviders[provider]) {
    errors.provider = "Invalid Provider";
    return {
      errors: errors,
      isValid: Object.keys(errors).length === 0
    };
  }

  var selectedProvider = paymentProviders[provider];
  var selectedParams = params || {}; // set default values
  // if (!selectedParams.selectedCurrency) [selectedParams.selectedCurrency] = selectedProvider.validCurrencies
  // if (!selectedParams.fiatValue) selectedParams.fiatValue = selectedProvider.minOrderValue
  // if (!selectedParams.selectedCryptoCurrency) [selectedParams.selectedCryptoCurrency] = selectedProvider.validCryptoCurrencies
  // validations

  if (selectedParams.fiatValue) {
    var requestedOrderAmount = +parseFloat(selectedParams.fiatValue.toString()) || 0;
    if (requestedOrderAmount < selectedProvider.minOrderValue) errors.fiatValue = "Requested amount is lower than supported";
    if (requestedOrderAmount > selectedProvider.maxOrderValue && selectedProvider.enforceMax) errors.fiatValue = "Requested amount is higher than supported";
  }

  if (selectedParams.selectedCurrency && !selectedProvider.validCurrencies.includes(selectedParams.selectedCurrency)) {
    errors.selectedCurrency = "Unsupported currency";
  }

  if (selectedParams.selectedCryptoCurrency && !selectedProvider.validCryptoCurrencies.includes(selectedParams.selectedCryptoCurrency)) {
    errors.selectedCryptoCurrency = "Unsupported cryptoCurrency";
  }

  return {
    errors: errors,
    isValid: Object.keys(errors).length === 0
  };
}; // utility functions

/**
 * json-rpc-engine middleware that logs RPC errors and and validates req.method.
 *
 * @param log - The logging API to use.
 * @returns  json-rpc-engine middleware function
 */


function createErrorMiddleware() {
  return function (req, res, next) {
    // json-rpc-engine will terminate the request when it notices this error
    if (typeof req.method !== "string" || !req.method) {
      res.error = _ethRpcErrors.ethErrors.rpc.invalidRequest({
        message: "The request 'method' must be a non-empty string.",
        data: req
      });
    }

    next(function (done) {
      var error = res.error;

      if (!error) {
        return done();
      }

      log.error("MetaMask - RPC Error: ".concat(error.message), error);
      return done();
    });
  };
} // resolve response.result or response, reject errors

/**
 * Logs a stream disconnection error. Emits an 'error' if given an
 * EventEmitter that has listeners for the 'error' event.
 *
 * @param log - The logging API to use.
 * @param remoteLabel - The label of the disconnected stream.
 * @param error - The associated error to log.
 * @param emitter - The logging API to use.
 */


function logStreamDisconnectWarning(remoteLabel, error, emitter) {
  var warningMsg = "MetaMask: Lost connection to \"".concat(remoteLabel, "\".");

  if (error !== null && error !== void 0 && error.stack) {
    warningMsg += "\n".concat(error.stack);
  }

  log.warn(warningMsg);

  if (emitter && emitter.listenerCount("error") > 0) {
    emitter.emit("error", warningMsg);
  }
}

var getPreopenInstanceId = function getPreopenInstanceId() {
  return Math.random().toString(36).slice(2);
};

var getTorusUrl = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(buildEnv, integrity) {
    var torusUrl, logLevel, version, versionUsed, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Do not change this line
            version = "1.21.0";
            versionUsed = integrity.version || version;
            _context.prev = 2;

            if (!((buildEnv === "binance" || buildEnv === "production") && !integrity.version)) {
              _context.next = 13;
              break;
            }

            if (configuration.prodTorusUrl) {
              _context.next = 10;
              break;
            }

            _context.next = 7;
            return (0, _httpHelpers.get)("".concat(configuration.api, "/latestversion?name=@toruslabs/torus-embed&version=").concat(version), {}, {
              useAPIKey: true
            });

          case 7:
            response = _context.sent;
            _context.next = 11;
            break;

          case 10:
            response = {
              data: configuration.prodTorusUrl
            };

          case 11:
            versionUsed = response.data; // eslint-disable-next-line require-atomic-updates

            configuration.prodTorusUrl = response.data;

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            log.error(_context.t0, "unable to fetch latest version");

          case 18:
            log.info("version used: ", versionUsed);
            _context.t1 = buildEnv;
            _context.next = _context.t1 === "binance" ? 22 : _context.t1 === "testing" ? 25 : _context.t1 === "lrc" ? 28 : _context.t1 === "beta" ? 31 : _context.t1 === "development" ? 34 : 37;
            break;

          case 22:
            torusUrl = "https://binance.tor.us/v".concat(versionUsed);
            logLevel = "info";
            return _context.abrupt("break", 40);

          case 25:
            torusUrl = "https://testing.tor.us";
            logLevel = "debug";
            return _context.abrupt("break", 40);

          case 28:
            torusUrl = "https://lrc.tor.us";
            logLevel = "debug";
            return _context.abrupt("break", 40);

          case 31:
            torusUrl = "https://beta.tor.us";
            logLevel = "debug";
            return _context.abrupt("break", 40);

          case 34:
            torusUrl = "http://localhost:4050";
            logLevel = "debug";
            return _context.abrupt("break", 40);

          case 37:
            torusUrl = "https://app.tor.us/v".concat(versionUsed);
            logLevel = "error";
            return _context.abrupt("break", 40);

          case 40:
            return _context.abrupt("return", {
              torusUrl: torusUrl,
              logLevel: logLevel
            });

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 15]]);
  }));

  return function getTorusUrl(_x, _x2) {
    return _ref4.apply(this, arguments);
  };
}();

var getUserLanguage = function getUserLanguage() {
  var userLanguage = window.navigator.language || "en-US";
  var userLanguages = userLanguage.split("-");
  userLanguage = Object.prototype.hasOwnProperty.call(configuration.translations, userLanguages[0]) ? userLanguages[0] : "en";
  return userLanguage;
};

var EMITTED_NOTIFICATIONS = ["eth_subscription" // per eth-json-rpc-filters/subscriptionManager
];

var NOOP = function NOOP() {// empty function
};

var FEATURES_PROVIDER_CHANGE_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=660,width=375";
var FEATURES_DEFAULT_WALLET_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=740,width=1315";
var FEATURES_CONFIRM_WINDOW = "directories=0,titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=700,width=450";

function storageAvailable(type) {
  var storage;

  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e && ( // everything except Firefox
    e.code === 22 || // Firefox
    e.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    e.name === "QuotaExceededError" || // Firefox
    e.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}

function getPopupFeatures() {
  // Fixes dual-screen position                             Most browsers      Firefox
  var dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  var dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  var w = 1200;
  var h = 700;
  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
  var systemZoom = 1; // No reliable estimate

  var left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  var top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  var features = "titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(h / systemZoom, ",width=").concat(w / systemZoom, ",top=").concat(top, ",left=").concat(left);
  return features;
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread$1(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
      (0, _defineProperty3.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

_openloginJrpc.SafeEventEmitter.defaultMaxListeners = 100; // resolve response.result, reject errors

var getRpcPromiseCallback = function getRpcPromiseCallback(resolve, reject) {
  var unwrapResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return function (error, response) {
    if (error || response.error) {
      return reject(error || response.error);
    }

    return !unwrapResult || Array.isArray(response) ? resolve(response) : resolve(response.result);
  };
};

var TorusInpageProvider = /*#__PURE__*/function (_SafeEventEmitter) {
  _inherits(TorusInpageProvider, _SafeEventEmitter);

  var _super = _createSuper(TorusInpageProvider);

  /**
   * The chain ID of the currently connected Ethereum chain.
   * See [chainId.network]{@link https://chainid.network} for more information.
   */

  /**
   * The user's currently selected Ethereum address.
   * If null, MetaMask is either locked or the user has not permitted any
   * addresses to be viewed.
   */

  /**
   * Indicating that this provider is a MetaMask provider.
   */
  function TorusInpageProvider(connectionStream) {
    var _this;

    _classCallCheck(this, TorusInpageProvider);

    var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref5$maxEventListene = _ref5.maxEventListeners,
        maxEventListeners = _ref5$maxEventListene === void 0 ? 100 : _ref5$maxEventListene,
        _ref5$shouldSendMetad = _ref5.shouldSendMetadata,
        shouldSendMetadata = _ref5$shouldSendMetad === void 0 ? true : _ref5$shouldSendMetad,
        _ref5$jsonRpcStreamNa = _ref5.jsonRpcStreamName,
        jsonRpcStreamName = _ref5$jsonRpcStreamNa === void 0 ? "provider" : _ref5$jsonRpcStreamNa;

    _this = _super.call(this);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "chainId", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "selectedAddress", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "_rpcEngine", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "networkVersion", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "shouldSendMetadata", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "isTorus", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "_publicConfigStore", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "tryPreopenHandle", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "enable", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "_state", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "_jsonRpcConnection", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this), "_sentWarnings", {
      // methods
      enable: false,
      experimentalMethods: false,
      send: false,
      publicConfigStore: false,
      // events
      events: {
        close: false,
        data: false,
        networkChanged: false,
        notification: false
      }
    });

    if (!(0, _isStream.isDuplexStream)(connectionStream)) {
      throw new Error(messages.errors.invalidDuplexStream());
    }

    _this.isTorus = true;

    _this.setMaxListeners(maxEventListeners); // private state


    _this._state = _objectSpread$1({}, TorusInpageProvider._defaultState); // public state

    _this.selectedAddress = null;
    _this.networkVersion = null;
    _this.chainId = null;
    _this.shouldSendMetadata = shouldSendMetadata; // bind functions (to prevent e.g. web3@1.x from making unbound calls)

    _this._handleAccountsChanged = _this._handleAccountsChanged.bind(_assertThisInitialized(_this));
    _this._handleChainChanged = _this._handleChainChanged.bind(_assertThisInitialized(_this));
    _this._handleUnlockStateChanged = _this._handleUnlockStateChanged.bind(_assertThisInitialized(_this));
    _this._handleConnect = _this._handleConnect.bind(_assertThisInitialized(_this));
    _this._handleDisconnect = _this._handleDisconnect.bind(_assertThisInitialized(_this));
    _this._handleStreamDisconnect = _this._handleStreamDisconnect.bind(_assertThisInitialized(_this));
    _this._sendSync = _this._sendSync.bind(_assertThisInitialized(_this));
    _this._rpcRequest = _this._rpcRequest.bind(_assertThisInitialized(_this));
    _this._warnOfDeprecation = _this._warnOfDeprecation.bind(_assertThisInitialized(_this));
    _this._initializeState = _this._initializeState.bind(_assertThisInitialized(_this));
    _this.request = _this.request.bind(_assertThisInitialized(_this));
    _this.send = _this.send.bind(_assertThisInitialized(_this));
    _this.sendAsync = _this.sendAsync.bind(_assertThisInitialized(_this)); // this.enable = this.enable.bind(this);
    // setup connectionStream multiplexing

    var mux = new _openloginJrpc.ObjectMultiplex();
    (0, _pump.default)(connectionStream, mux, connectionStream, _this._handleStreamDisconnect.bind(_assertThisInitialized(_this), "MetaMask")); // subscribe to metamask public config (one-way)

    _this._publicConfigStore = new _obsStore.ObservableStore({
      storageKey: "Metamask-Config"
    }); // handle isUnlocked changes, and chainChanged and networkChanged events
    // this._publicConfigStore.subscribe((stringifiedState) => {
    //   // This is because we are using store as string
    //   const state = JSON.parse(stringifiedState as unknown as string);
    //   if ("isUnlocked" in state && state.isUnlocked !== this._state.isUnlocked) {
    //     this._state.isUnlocked = state.isUnlocked;
    //     if (!this._state.isUnlocked) {
    //       // accounts are never exposed when the extension is locked
    //       this._handleAccountsChanged([]);
    //     } else {
    //       // this will get the exposed accounts, if any
    //       try {
    //         this._rpcRequest(
    //           { method: "eth_accounts", params: [] },
    //           NOOP,
    //           true // indicating that eth_accounts _should_ update accounts
    //         );
    //       } catch (_) {
    //         // Swallow error
    //       }
    //     }
    //   }
    //   if ("selectedAddress" in state && this.selectedAddress !== state.selectedAddress) {
    //     try {
    //       this._rpcRequest(
    //         { method: "eth_accounts", params: [] },
    //         NOOP,
    //         true // indicating that eth_accounts _should_ update accounts
    //       );
    //     } catch (_) {
    //       // Swallow error
    //     }
    //   }
    //   // Emit chainChanged event on chain change
    //   if ("chainId" in state && state.chainId !== this.chainId) {
    //     this.chainId = state.chainId || null;
    //     this.emit("chainChanged", this.chainId);
    //     // indicate that we've connected, for EIP-1193 compliance
    //     // we do this here so that iframe can initialize
    //     if (!this._state.hasEmittedConnection) {
    //       this._handleConnect(this.chainId);
    //       this._state.hasEmittedConnection = true;
    //     }
    //   }
    //   // Emit networkChanged event on network change
    //   if ("networkVersion" in state && state.networkVersion !== this.networkVersion) {
    //     this.networkVersion = state.networkVersion || null;
    //     this.emit("networkChanged", this.networkVersion);
    //   }
    // });

    (0, _pump.default)(mux.createStream("publicConfig"), (0, _obsStore.storeAsStream)(_this._publicConfigStore), // RPC requests should still work if only this stream fails
    logStreamDisconnectWarning.bind(_assertThisInitialized(_this), "MetaMask PublicConfigStore")); // ignore phishing warning message (handled elsewhere)

    mux.ignoreStream("phishing"); // setup own event listeners
    // EIP-1193 connect

    _this.on("connect", function () {
      _this._state.isConnected = true;
    }); // connect to async provider


    var jsonRpcConnection = (0, _openloginJrpc.createStreamMiddleware)();
    (0, _pump.default)(jsonRpcConnection.stream, mux.createStream(jsonRpcStreamName), jsonRpcConnection.stream, _this._handleStreamDisconnect.bind(_assertThisInitialized(_this), "MetaMask RpcProvider")); // handle RPC requests via dapp-side rpc engine

    var rpcEngine = new _openloginJrpc.JRPCEngine();
    rpcEngine.push((0, _openloginJrpc.createIdRemapMiddleware)());
    rpcEngine.push(createErrorMiddleware());
    rpcEngine.push(jsonRpcConnection.middleware);
    _this._rpcEngine = rpcEngine; // json rpc notification listener

    jsonRpcConnection.events.on("notification", function (payload) {
      var method = payload.method,
          params = payload.params;

      if (method === "wallet_accountsChanged") {
        _this._handleAccountsChanged(params);
      } else if (method === "wallet_unlockStateChanged") {
        _this._handleUnlockStateChanged(params);
      } else if (method === "wallet_chainChanged") {
        _this._handleChainChanged(params);
      } else if (EMITTED_NOTIFICATIONS.includes(payload.method)) {
        // EIP 1193 subscriptions, per eth-json-rpc-filters/subscriptionManager
        _this.emit("data", payload); // deprecated


        _this.emit("notification", params.result);

        _this.emit("message", {
          type: method,
          data: params
        });
      } // Backward compatibility for older non EIP 1193 subscriptions
      // this.emit('data', null, payload)

    });
    return _this;
  }

  _createClass(TorusInpageProvider, [{
    key: "publicConfigStore",
    get: function get() {
      if (!this._sentWarnings.publicConfigStore) {
        log.warn(messages.warnings.publicConfigStore);
        this._sentWarnings.publicConfigStore = true;
      }

      return this._publicConfigStore;
    }
    /**
     * Returns whether the inpage provider is connected to Torus.
     */

  }, {
    key: "isConnected",
    value: function isConnected() {
      return this._state.isConnected;
    }
    /**
     * Submits an RPC request for the given method, with the given params.
     * Resolves with the result of the method call, or rejects on error.
     *
     * @param args - The RPC request arguments.
     * @returns A Promise that resolves with the result of the RPC method,
     * or rejects if an error is encountered.
     */

  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(args) {
        var _this2 = this;

        var method, params;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!args || _typeof(args) !== "object" || Array.isArray(args))) {
                  _context2.next = 2;
                  break;
                }

                throw _ethRpcErrors.ethErrors.rpc.invalidRequest({
                  message: messages.errors.invalidRequestArgs(),
                  data: args
                });

              case 2:
                method = args.method, params = args.params;

                if (!(typeof method !== "string" || method.length === 0)) {
                  _context2.next = 5;
                  break;
                }

                throw _ethRpcErrors.ethErrors.rpc.invalidRequest({
                  message: messages.errors.invalidRequestMethod(),
                  data: args
                });

              case 5:
                if (!(params !== undefined && !Array.isArray(params) && (_typeof(params) !== "object" || params === null))) {
                  _context2.next = 7;
                  break;
                }

                throw _ethRpcErrors.ethErrors.rpc.invalidRequest({
                  message: messages.errors.invalidRequestParams(),
                  data: args
                });

              case 7:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  _this2._rpcRequest({
                    method: method,
                    params: params
                  }, getRpcPromiseCallback(resolve, reject));
                }));

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function request(_x3) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Submits an RPC request per the given JSON-RPC request object.
     *
     * @param payload - The RPC request object.
     * @param cb - The callback function.
     */

  }, {
    key: "sendAsync",
    value: function sendAsync(payload, callback) {
      this._rpcRequest(payload, callback);
    }
    /**
     * We override the following event methods so that we can warn consumers
     * about deprecated events:
     *   addListener, on, once, prependListener, prependOnceListener
     */

  }, {
    key: "addListener",
    value: function addListener(eventName, listener) {
      this._warnOfDeprecation(eventName);

      return _get(_getPrototypeOf(TorusInpageProvider.prototype), "addListener", this).call(this, eventName, listener);
    }
  }, {
    key: "on",
    value: function on(eventName, listener) {
      this._warnOfDeprecation(eventName);

      return _get(_getPrototypeOf(TorusInpageProvider.prototype), "on", this).call(this, eventName, listener);
    }
  }, {
    key: "once",
    value: function once(eventName, listener) {
      this._warnOfDeprecation(eventName);

      return _get(_getPrototypeOf(TorusInpageProvider.prototype), "once", this).call(this, eventName, listener);
    }
  }, {
    key: "prependListener",
    value: function prependListener(eventName, listener) {
      this._warnOfDeprecation(eventName);

      return _get(_getPrototypeOf(TorusInpageProvider.prototype), "prependListener", this).call(this, eventName, listener);
    }
  }, {
    key: "prependOnceListener",
    value: function prependOnceListener(eventName, listener) {
      this._warnOfDeprecation(eventName);

      return _get(_getPrototypeOf(TorusInpageProvider.prototype), "prependOnceListener", this).call(this, eventName, listener);
    } // Private Methods
    //= ===================

    /**
     * Constructor helper.
     * Populates initial state by calling 'wallet_getProviderState' and emits
     * necessary events.
     */

  }, {
    key: "_initializeState",
    value: function () {
      var _initializeState2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _yield$this$request, accounts, chainId, isUnlocked, networkVersion;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.request({
                  method: "wallet_getProviderState"
                });

              case 3:
                _yield$this$request = _context3.sent;
                accounts = _yield$this$request.accounts;
                chainId = _yield$this$request.chainId;
                isUnlocked = _yield$this$request.isUnlocked;
                networkVersion = _yield$this$request.networkVersion;
                // indicate that we've connected, for EIP-1193 compliance
                this.emit("connect", {
                  chainId: chainId
                });

                this._handleChainChanged({
                  chainId: chainId,
                  networkVersion: networkVersion
                });

                this._handleUnlockStateChanged({
                  accounts: accounts,
                  isUnlocked: isUnlocked
                });

                this._handleAccountsChanged(accounts);

                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                log.error("MetaMask: Failed to get initial state. Please report this bug.", _context3.t0);

              case 17:
                _context3.prev = 17;
                log.info("initialized state");
                this._state.initialized = true;
                this.emit("_initialized");
                return _context3.finish(17);

              case 22:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 14, 17, 22]]);
      }));

      function _initializeState() {
        return _initializeState2.apply(this, arguments);
      }

      return _initializeState;
    }()
    /**
     * Internal RPC method. Forwards requests to background via the RPC engine.
     * Also remap ids inbound and outbound.
     *
     * @param payload - The RPC request object.
     * @param callback - The consumer's callback.
     * @param isInternal - false - Whether the request is internal.
     */

  }, {
    key: "_rpcRequest",
    value: function _rpcRequest(payload, callback) {
      var _this3 = this;

      var isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var cb = callback;
      var _payload = payload;

      if (!Array.isArray(_payload)) {
        if (!_payload.jsonrpc) {
          _payload.jsonrpc = "2.0";
        }

        if (_payload.method === "eth_accounts" || _payload.method === "eth_requestAccounts") {
          // handle accounts changing
          cb = function cb(err, res) {
            _this3._handleAccountsChanged(res.result || [], _payload.method === "eth_accounts", isInternal);

            callback(err, res);
          };
        } else if (_payload.method === "wallet_getProviderState") {
          this._rpcEngine.handle(payload, cb);

          return;
        }
      }

      this.tryPreopenHandle(_payload, cb);
    }
  }, {
    key: "send",
    value: function send(methodOrPayload, callbackOrArgs) {
      var _this4 = this;

      if (!this._sentWarnings.send) {
        log.warn(messages.warnings.sendDeprecation);
        this._sentWarnings.send = true;
      }

      if (typeof methodOrPayload === "string" && (!callbackOrArgs || Array.isArray(callbackOrArgs))) {
        return new Promise(function (resolve, reject) {
          try {
            _this4._rpcRequest({
              method: methodOrPayload,
              params: callbackOrArgs
            }, getRpcPromiseCallback(resolve, reject, false));
          } catch (error) {
            reject(error);
          }
        });
      }

      if (methodOrPayload && _typeof(methodOrPayload) === "object" && typeof callbackOrArgs === "function") {
        return this._rpcRequest(methodOrPayload, callbackOrArgs);
      }

      return this._sendSync(methodOrPayload);
    }
    /**
     * DEPRECATED.
     * Internal backwards compatibility method, used in send.
     */

  }, {
    key: "_sendSync",
    value: function _sendSync(payload) {
      var result;

      switch (payload.method) {
        case "eth_accounts":
          result = this.selectedAddress ? [this.selectedAddress] : [];
          break;

        case "eth_coinbase":
          result = this.selectedAddress || null;
          break;

        case "eth_uninstallFilter":
          this._rpcRequest(payload, NOOP);

          result = true;
          break;

        case "net_version":
          result = this.networkVersion || null;
          break;

        default:
          throw new Error(messages.errors.unsupportedSync(payload.method));
      }

      return {
        id: payload.id,
        jsonrpc: payload.jsonrpc,
        result: result
      };
    }
    /**
     * When the provider becomes connected, updates internal state and emits
     * required events. Idempotent.
     *
     * @param chainId - The ID of the newly connected chain.
     * emits MetaMaskInpageProvider#connect
     */

  }, {
    key: "_handleConnect",
    value: function _handleConnect(chainId) {
      if (!this._state.isConnected) {
        this._state.isConnected = true;
        this.emit("connect", {
          chainId: chainId
        });
        log.debug(messages.info.connected(chainId));
      }
    }
    /**
     * When the provider becomes disconnected, updates internal state and emits
     * required events. Idempotent with respect to the isRecoverable parameter.
     *
     * Error codes per the CloseEvent status codes as required by EIP-1193:
     * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
     *
     * @param isRecoverable - Whether the disconnection is recoverable.
     * @param errorMessage - A custom error message.
     * emits MetaMaskInpageProvider#disconnect
     */

  }, {
    key: "_handleDisconnect",
    value: function _handleDisconnect(isRecoverable, errorMessage) {
      if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !isRecoverable) {
        this._state.isConnected = false;
        var error;

        if (isRecoverable) {
          error = new _ethRpcErrors.EthereumRpcError(1013, // Try again later
          errorMessage || messages.errors.disconnected());
          log.debug(error);
        } else {
          error = new _ethRpcErrors.EthereumRpcError(1011, // Internal error
          errorMessage || messages.errors.permanentlyDisconnected());
          log.error(error);
          this.chainId = null;
          this._state.accounts = null;
          this.selectedAddress = null;
          this._state.isUnlocked = false;
          this._state.isPermanentlyDisconnected = true;
        }

        this.emit("disconnect", error);
      }
    }
    /**
     * Called when connection is lost to critical streams.
     *
     * emits MetamaskInpageProvider#disconnect
     */

  }, {
    key: "_handleStreamDisconnect",
    value: function _handleStreamDisconnect(streamName, error) {
      logStreamDisconnectWarning(streamName, error, this);

      this._handleDisconnect(false, error ? error.message : undefined);
    }
    /**
     * Called when accounts may have changed.
     */

  }, {
    key: "_handleAccountsChanged",
    value: function _handleAccountsChanged(accounts) {
      var isEthAccounts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var isInternal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false; // defensive programming

      var finalAccounts = accounts;

      if (!Array.isArray(finalAccounts)) {
        log.error("MetaMask: Received non-array accounts parameter. Please report this bug.", finalAccounts);
        finalAccounts = [];
      }

      var _iterator = _createForOfIteratorHelper(accounts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var account = _step.value;

          if (typeof account !== "string") {
            log.error("MetaMask: Received non-string account. Please report this bug.", accounts);
            finalAccounts = [];
            break;
          }
        } // emit accountsChanged if anything about the accounts array has changed

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (!(0, _fastDeepEqual.default)(this._state.accounts, finalAccounts)) {
        // we should always have the correct accounts even before eth_accounts
        // returns, except in cases where isInternal is true
        if (isEthAccounts && Array.isArray(this._state.accounts) && this._state.accounts.length > 0 && !isInternal) {
          log.error('MetaMask: "eth_accounts" unexpectedly updated accounts. Please report this bug.', finalAccounts);
        }

        this._state.accounts = finalAccounts;
        this.emit("accountsChanged", finalAccounts);
      } // handle selectedAddress


      if (this.selectedAddress !== finalAccounts[0]) {
        this.selectedAddress = finalAccounts[0] || null;
      }
    }
    /**
     * Upon receipt of a new chainId and networkVersion, emits corresponding
     * events and sets relevant public state.
     * Does nothing if neither the chainId nor the networkVersion are different
     * from existing values.
     *
     * emits MetamaskInpageProvider#chainChanged
     * @param networkInfo - An object with network info.
     */

  }, {
    key: "_handleChainChanged",
    value: function _handleChainChanged() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          chainId = _ref6.chainId,
          networkVersion = _ref6.networkVersion;

      if (!chainId || !networkVersion) {
        log.error("MetaMask: Received invalid network parameters. Please report this bug.", {
          chainId: chainId,
          networkVersion: networkVersion
        });
        return;
      }

      if (networkVersion === "loading") {
        this._handleDisconnect(true);
      } else {
        this._handleConnect(chainId);

        if (chainId !== this.chainId) {
          this.chainId = chainId;

          if (this._state.initialized) {
            this.emit("chainChanged", this.chainId);
          }
        }
      }
    }
    /**
     * Upon receipt of a new isUnlocked state, sets relevant public state.
     * Calls the accounts changed handler with the received accounts, or an empty
     * array.
     *
     * Does nothing if the received value is equal to the existing value.
     * There are no lock/unlock events.
     *
     * @param opts - Options bag.
     */

  }, {
    key: "_handleUnlockStateChanged",
    value: function _handleUnlockStateChanged() {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          accounts = _ref7.accounts,
          isUnlocked = _ref7.isUnlocked;

      if (typeof isUnlocked !== "boolean") {
        log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.", {
          isUnlocked: isUnlocked
        });
        return;
      }

      if (isUnlocked !== this._state.isUnlocked) {
        this._state.isUnlocked = isUnlocked;

        this._handleAccountsChanged(accounts || []);
      }
    }
    /**
     * Warns of deprecation for the given event, if applicable.
     */

  }, {
    key: "_warnOfDeprecation",
    value: function _warnOfDeprecation(eventName) {
      if (this._sentWarnings.events[eventName] === false) {
        log.warn(messages.warnings.events[eventName]);
        this._sentWarnings.events[eventName] = true;
      }
    }
  }]);

  return TorusInpageProvider;
}(_openloginJrpc.SafeEventEmitter);

exports.TorusInpageProvider = TorusInpageProvider;
(0, _defineProperty3.default)(TorusInpageProvider, "_defaultState", {
  accounts: null,
  isConnected: false,
  isUnlocked: false,
  initialized: false,
  isPermanentlyDisconnected: false,
  hasEmittedConnection: false
});

var defaults = function defaults(options) {
  return {
    algorithms: options.algorithms || ["sha256"],
    delimiter: options.delimiter || " ",
    full: options.full || false
  };
}; // Generate list of hashes


var hashes = function hashes(options, data) {
  var internalHashes = {};
  options.algorithms.forEach(function (algorithm) {
    internalHashes[algorithm] = (0, _createHash.default)(algorithm).update(data, "utf8").digest("base64");
  });
  return internalHashes;
}; // Build an integrity string


var integrity = function integrity(options, sri) {
  var output = ""; // Hash list

  output += Object.keys(sri.hashes).map(function (algorithm) {
    return "".concat(algorithm, "-").concat(sri.hashes[algorithm]);
  }).join(options.delimiter);
  return output;
};

var main = function main(options, data) {
  // Defaults
  var finalOptions = defaults(options);
  var sri = {
    hashes: hashes(finalOptions, data),
    integrity: undefined
  };
  sri.integrity = integrity(finalOptions, sri);
  return finalOptions.full ? sri : sri.integrity;
};

var PopupHandler = /*#__PURE__*/function (_EventEmitter) {
  _inherits(PopupHandler, _EventEmitter);

  var _super2 = _createSuper(PopupHandler);

  function PopupHandler(_ref) {
    var _this5;

    _classCallCheck(this, PopupHandler);

    var url = _ref.url,
        target = _ref.target,
        features = _ref.features;
    _this5 = _super2.call(this);
    (0, _defineProperty3.default)(_assertThisInitialized(_this5), "url", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this5), "target", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this5), "features", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this5), "window", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this5), "windowTimer", void 0);
    (0, _defineProperty3.default)(_assertThisInitialized(_this5), "iClosedWindow", void 0);
    _this5.url = url;
    _this5.target = target || "_blank";
    _this5.features = features || getPopupFeatures();
    _this5.window = undefined;
    _this5.windowTimer = undefined;
    _this5.iClosedWindow = false;

    _this5._setupTimer();

    return _this5;
  }

  _createClass(PopupHandler, [{
    key: "_setupTimer",
    value: function _setupTimer() {
      var _this6 = this;

      this.windowTimer = Number(setInterval(function () {
        if (_this6.window && _this6.window.closed) {
          clearInterval(_this6.windowTimer);

          if (!_this6.iClosedWindow) {
            _this6.emit("close");
          }

          _this6.iClosedWindow = false;
          _this6.window = undefined;
        }

        if (_this6.window === undefined) clearInterval(_this6.windowTimer);
      }, 500));
    }
  }, {
    key: "open",
    value: function open() {
      var _this$window;

      this.window = window.open(this.url.href, this.target, this.features);
      if ((_this$window = this.window) !== null && _this$window !== void 0 && _this$window.focus) this.window.focus();
      return Promise.resolve();
    }
  }, {
    key: "close",
    value: function close() {
      this.iClosedWindow = true;
      if (this.window) this.window.close();
    }
  }, {
    key: "redirect",
    value: function redirect(locationReplaceOnRedirect) {
      if (locationReplaceOnRedirect) {
        window.location.replace(this.url.href);
      } else {
        window.location.href = this.url.href;
      }
    }
  }]);

  return PopupHandler;
}(_events.EventEmitter);
/**
 * Returns whether the given image URL exists
 * @param url - the url of the image
 * @returns - whether the image exists
 */


function imgExists(url) {
  return new Promise(function (resolve, reject) {
    try {
      var img = document.createElement("img");

      img.onload = function () {
        return resolve(true);
      };

      img.onerror = function () {
        return resolve(false);
      };

      img.src = url;
    } catch (e) {
      reject(e);
    }
  });
}
/**
 * Extracts a name for the site from the DOM
 */


var getSiteName = function getSiteName(window) {
  var document = window.document;
  var siteName = document.querySelector('head > meta[property="og:site_name"]');

  if (siteName) {
    return siteName.content;
  }

  var metaTitle = document.querySelector('head > meta[name="title"]');

  if (metaTitle) {
    return metaTitle.content;
  }

  if (document.title && document.title.length > 0) {
    return document.title;
  }

  return window.location.hostname;
};
/**
 * Extracts an icon for the site from the DOM
 */


function getSiteIcon(_x4) {
  return _getSiteIcon.apply(this, arguments);
}
/**
 * Gets site metadata and returns it
 *
 */


function _getSiteIcon() {
  _getSiteIcon = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(window) {
    var document, icon;
    return regeneratorRuntime.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            document = window.document; // Use the site's favicon if it exists

            icon = document.querySelector('head > link[rel="shortcut icon"]');
            _context14.t0 = icon;

            if (!_context14.t0) {
              _context14.next = 7;
              break;
            }

            _context14.next = 6;
            return imgExists(icon.href);

          case 6:
            _context14.t0 = _context14.sent;

          case 7:
            if (!_context14.t0) {
              _context14.next = 9;
              break;
            }

            return _context14.abrupt("return", icon.href);

          case 9:
            // Search through available icons in no particular order
            icon = Array.from(document.querySelectorAll('head > link[rel="icon"]')).find(function (_icon) {
              return Boolean(_icon.href);
            });
            _context14.t1 = icon;

            if (!_context14.t1) {
              _context14.next = 15;
              break;
            }

            _context14.next = 14;
            return imgExists(icon.href);

          case 14:
            _context14.t1 = _context14.sent;

          case 15:
            if (!_context14.t1) {
              _context14.next = 17;
              break;
            }

            return _context14.abrupt("return", icon.href);

          case 17:
            return _context14.abrupt("return", null);

          case 18:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));
  return _getSiteIcon.apply(this, arguments);
}

var getSiteMetadata = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = getSiteName(window);
            _context4.next = 3;
            return getSiteIcon(window);

          case 3:
            _context4.t1 = _context4.sent;
            return _context4.abrupt("return", {
              name: _context4.t0,
              icon: _context4.t1
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getSiteMetadata() {
    return _ref8.apply(this, arguments);
  };
}();
/**
 * Sends site metadata over an RPC request.
 */


function sendSiteMetadata(_x5) {
  return _sendSiteMetadata.apply(this, arguments);
}

function _sendSiteMetadata() {
  _sendSiteMetadata = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(engine) {
    var domainMetadata;
    return regeneratorRuntime.wrap(function _callee15$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return getSiteMetadata();

          case 3:
            domainMetadata = _context15.sent;
            // call engine.handle directly to avoid normal RPC request handling
            engine.handle({
              jsonrpc: "2.0",
              id: getPreopenInstanceId(),
              method: "wallet_sendDomainMetadata",
              params: domainMetadata
            }, NOOP);
            _context15.next = 10;
            break;

          case 7:
            _context15.prev = 7;
            _context15.t0 = _context15["catch"](0);
            log.error({
              message: messages.errors.sendSiteMetadata(),
              originalError: _context15.t0
            });

          case 10:
          case "end":
            return _context15.stop();
        }
      }
    }, _callee15, null, [[0, 7]]);
  }));
  return _sendSiteMetadata.apply(this, arguments);
}

var _excluded = ["host", "chainId", "networkName"];

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
      (0, _defineProperty3.default)(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

var defaultVerifiers = (_defaultVerifiers = {}, _defineProperty2(_defaultVerifiers, LOGIN_PROVIDER.GOOGLE, true), _defineProperty2(_defaultVerifiers, LOGIN_PROVIDER.FACEBOOK, true), _defineProperty2(_defaultVerifiers, LOGIN_PROVIDER.REDDIT, true), _defineProperty2(_defaultVerifiers, LOGIN_PROVIDER.TWITCH, true), _defineProperty2(_defaultVerifiers, LOGIN_PROVIDER.DISCORD, true), _defaultVerifiers);
var iframeIntegrity = "sha384-I1qqxsIO3trXzTO78PZoXvNamECKTo3uCnztKxjV0MmFWtmZY3uBpnJlhO7z/WBw";
var expectedCacheControlHeader = "max-age=3600";
var UNSAFE_METHODS = ["eth_sendTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign", "eth_getEncryptionPublicKey", "eth_decrypt"];
var isLocalStorageAvailable = storageAvailable("localStorage"); // preload for iframe doesn't work https://bugs.chromium.org/p/chromium/issues/detail?id=593267

(function () {
  var _preLoadIframe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var torusIframeHtml, _yield$getTorusUrl, torusUrl;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            if (!(typeof document === "undefined")) {
              _context5.next = 3;
              break;
            }

            return _context5.abrupt("return");

          case 3:
            torusIframeHtml = document.createElement("link");
            _context5.next = 6;
            return getTorusUrl("production", {
              check: false,
              hash: iframeIntegrity,
              version: ""
            });

          case 6:
            _yield$getTorusUrl = _context5.sent;
            torusUrl = _yield$getTorusUrl.torusUrl;
            torusIframeHtml.href = "".concat(torusUrl, "/popup");
            torusIframeHtml.crossOrigin = "anonymous";
            torusIframeHtml.type = "text/html";
            torusIframeHtml.rel = "prefetch";

            if (torusIframeHtml.relList && torusIframeHtml.relList.supports) {
              if (torusIframeHtml.relList.supports("prefetch")) {
                document.head.appendChild(torusIframeHtml);
              }
            }

            _context5.next = 18;
            break;

          case 15:
            _context5.prev = 15;
            _context5.t0 = _context5["catch"](0);
            log.warn(_context5.t0);

          case 18:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 15]]);
  }));

  function preLoadIframe() {
    return _preLoadIframe.apply(this, arguments);
  }

  return preLoadIframe;
})()();

var Torus = /*#__PURE__*/function () {
  function Torus() {
    _classCallCheck(this, Torus);

    var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref9$buttonPosition = _ref9.buttonPosition,
        buttonPosition = _ref9$buttonPosition === void 0 ? BUTTON_POSITION.BOTTOM_LEFT : _ref9$buttonPosition,
        _ref9$modalZIndex = _ref9.modalZIndex,
        modalZIndex = _ref9$modalZIndex === void 0 ? 99999 : _ref9$modalZIndex,
        _ref9$apiKey = _ref9.apiKey,
        apiKey = _ref9$apiKey === void 0 ? "torus-default" : _ref9$apiKey;

    (0, _defineProperty3.default)(this, "buttonPosition", BUTTON_POSITION.BOTTOM_LEFT);
    (0, _defineProperty3.default)(this, "torusUrl", void 0);
    (0, _defineProperty3.default)(this, "torusIframe", void 0);
    (0, _defineProperty3.default)(this, "styleLink", void 0);
    (0, _defineProperty3.default)(this, "isLoggedIn", void 0);
    (0, _defineProperty3.default)(this, "isInitialized", void 0);
    (0, _defineProperty3.default)(this, "torusWidgetVisibility", void 0);
    (0, _defineProperty3.default)(this, "torusAlert", void 0);
    (0, _defineProperty3.default)(this, "nodeDetailManager", void 0);
    (0, _defineProperty3.default)(this, "torusJs", void 0);
    (0, _defineProperty3.default)(this, "apiKey", void 0);
    (0, _defineProperty3.default)(this, "modalZIndex", void 0);
    (0, _defineProperty3.default)(this, "alertZIndex", void 0);
    (0, _defineProperty3.default)(this, "torusAlertContainer", void 0);
    (0, _defineProperty3.default)(this, "isIframeFullScreen", void 0);
    (0, _defineProperty3.default)(this, "whiteLabel", void 0);
    (0, _defineProperty3.default)(this, "requestedVerifier", void 0);
    (0, _defineProperty3.default)(this, "currentVerifier", void 0);
    (0, _defineProperty3.default)(this, "embedTranslations", void 0);
    (0, _defineProperty3.default)(this, "ethereum", void 0);
    (0, _defineProperty3.default)(this, "provider", void 0);
    (0, _defineProperty3.default)(this, "communicationMux", void 0);
    (0, _defineProperty3.default)(this, "isLoginCallback", void 0);
    (0, _defineProperty3.default)(this, "dappStorageKey", void 0);
    (0, _defineProperty3.default)(this, "paymentProviders", configuration.paymentProviders);
    (0, _defineProperty3.default)(this, "loginHint", "");
    (0, _defineProperty3.default)(this, "useWalletConnect", void 0);
    this.buttonPosition = buttonPosition;
    this.torusUrl = "";
    this.isLoggedIn = false; // ethereum.enable working

    this.isInitialized = false; // init done

    this.torusWidgetVisibility = true;
    this.requestedVerifier = "";
    this.currentVerifier = "";
    this.nodeDetailManager = new _fetchNodeDetails.default();
    this.torusJs = new _torus.default({
      metadataHost: "https://metadata.tor.us",
      allowHost: "https://signer.tor.us/api/allow"
    });
    this.apiKey = apiKey;

    _torus.default.setAPIKey(apiKey);

    (0, _httpHelpers.setAPIKey)(apiKey);
    this.modalZIndex = modalZIndex;
    this.alertZIndex = modalZIndex + 1000;
    this.isIframeFullScreen = false;
    this.dappStorageKey = "";
  }

  _createClass(Torus, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _this7 = this;

        var _ref10,
            _ref10$buildEnv,
            buildEnv,
            _ref10$enableLogging,
            enableLogging,
            _ref10$enabledVerifie,
            enabledVerifiers,
            _ref10$network,
            network,
            _ref10$loginConfig,
            loginConfig,
            _ref10$showTorusButto,
            showTorusButton,
            _ref10$integrity,
            integrity,
            whiteLabel,
            _ref10$skipTKey,
            skipTKey,
            _ref10$useLocalStorag,
            useLocalStorage,
            _ref10$useWalletConne,
            useWalletConnect,
            _yield$getTorusUrl2,
            torusUrl,
            logLevel,
            dappStorageKey,
            storedKey,
            generatedKey,
            torusIframeUrl,
            link,
            _ref11,
            _ref11$defaultLanguag,
            defaultLanguage,
            _ref11$customTranslat,
            customTranslations,
            mergedTranslations,
            languageTranslations,
            handleSetup,
            fetchUrl,
            resp,
            response,
            calculatedIntegrity,
            _args8 = arguments;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _ref10 = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {}, _ref10$buildEnv = _ref10.buildEnv, buildEnv = _ref10$buildEnv === void 0 ? TORUS_BUILD_ENV.PRODUCTION : _ref10$buildEnv, _ref10$enableLogging = _ref10.enableLogging, enableLogging = _ref10$enableLogging === void 0 ? false : _ref10$enableLogging, _ref10$enabledVerifie = _ref10.enabledVerifiers, enabledVerifiers = _ref10$enabledVerifie === void 0 ? defaultVerifiers : _ref10$enabledVerifie, _ref10$network = _ref10.network, network = _ref10$network === void 0 ? {
                  host: "mainnet",
                  chainId: null,
                  networkName: "",
                  blockExplorer: "",
                  ticker: "",
                  tickerName: ""
                } : _ref10$network, _ref10$loginConfig = _ref10.loginConfig, loginConfig = _ref10$loginConfig === void 0 ? {} : _ref10$loginConfig, _ref10$showTorusButto = _ref10.showTorusButton, showTorusButton = _ref10$showTorusButto === void 0 ? true : _ref10$showTorusButto, _ref10$integrity = _ref10.integrity, integrity = _ref10$integrity === void 0 ? {
                  check: false,
                  hash: iframeIntegrity,
                  version: ""
                } : _ref10$integrity, whiteLabel = _ref10.whiteLabel, _ref10$skipTKey = _ref10.skipTKey, skipTKey = _ref10$skipTKey === void 0 ? false : _ref10$skipTKey, _ref10$useLocalStorag = _ref10.useLocalStorage, useLocalStorage = _ref10$useLocalStorag === void 0 ? false : _ref10$useLocalStorag, _ref10$useWalletConne = _ref10.useWalletConnect, useWalletConnect = _ref10$useWalletConne === void 0 ? false : _ref10$useWalletConne;

                if (!this.isInitialized) {
                  _context8.next = 3;
                  break;
                }

                throw new Error("Already initialized");

              case 3:
                _context8.next = 5;
                return getTorusUrl(buildEnv, integrity);

              case 5:
                _yield$getTorusUrl2 = _context8.sent;
                torusUrl = _yield$getTorusUrl2.torusUrl;
                logLevel = _yield$getTorusUrl2.logLevel;
                log.info(torusUrl, "url loaded");
                this.torusUrl = torusUrl;
                this.whiteLabel = whiteLabel;
                this.useWalletConnect = useWalletConnect;
                log.setDefaultLevel(logLevel);
                if (enableLogging) log.enableAll();else log.disableAll();
                this.torusWidgetVisibility = showTorusButton;
                dappStorageKey = "";

                if (isLocalStorageAvailable && useLocalStorage) {
                  storedKey = window.localStorage.getItem(configuration.localStorageKey);
                  if (storedKey) dappStorageKey = storedKey;else {
                    generatedKey = "torus-app-".concat(getPreopenInstanceId());
                    window.localStorage.setItem(configuration.localStorageKey, generatedKey);
                    dappStorageKey = generatedKey;
                  }
                }

                this.dappStorageKey = dappStorageKey;
                torusIframeUrl = new URL(torusUrl);
                if (torusIframeUrl.pathname.endsWith("/")) torusIframeUrl.pathname += "popup";else torusIframeUrl.pathname += "/popup";

                if (dappStorageKey) {
                  torusIframeUrl.hash = "#dappStorageKey=".concat(dappStorageKey);
                } // Iframe code


                this.torusIframe = htmlToElement("<iframe\n        id=\"torusIframe\"\n        allow=".concat(useWalletConnect ? "camera" : "", "\n        class=\"torusIframe\"\n        src=\"").concat(torusIframeUrl.href, "\"\n        style=\"display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ").concat(this.modalZIndex, "\"\n      ></iframe>"));
                this.torusAlertContainer = htmlToElement('<div id="torusAlertContainer"></div>');
                this.torusAlertContainer.style.display = "none";
                this.torusAlertContainer.style.setProperty("z-index", this.alertZIndex.toString());
                link = window.document.createElement("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("href", "".concat(torusUrl, "/css/widget.css"));
                this.styleLink = link;
                _ref11 = this.whiteLabel || {}, _ref11$defaultLanguag = _ref11.defaultLanguage, defaultLanguage = _ref11$defaultLanguag === void 0 ? getUserLanguage() : _ref11$defaultLanguag, _ref11$customTranslat = _ref11.customTranslations, customTranslations = _ref11$customTranslat === void 0 ? {} : _ref11$customTranslat;
                mergedTranslations = (0, _lodash.default)(configuration.translations, customTranslations);
                languageTranslations = mergedTranslations[defaultLanguage] || configuration.translations[getUserLanguage()];
                this.embedTranslations = languageTranslations.embed;

                handleSetup = /*#__PURE__*/function () {
                  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                    return regeneratorRuntime.wrap(function _callee7$(_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return documentReady();

                          case 2:
                            return _context7.abrupt("return", new Promise(function (resolve, reject) {
                              _this7.torusIframe.onload = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                var initStream;
                                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                  while (1) {
                                    switch (_context6.prev = _context6.next) {
                                      case 0:
                                        // only do this if iframe is not full screen
                                        _this7._setupWeb3();

                                        initStream = _this7.communicationMux.getStream("init_stream");
                                        initStream.on("data", function (chunk) {
                                          var name = chunk.name,
                                              data = chunk.data,
                                              error = chunk.error;

                                          if (name === "init_complete" && data.success) {
                                            // resolve promise
                                            _this7.isInitialized = true;

                                            _this7._displayIframe(_this7.isIframeFullScreen);

                                            resolve(undefined);
                                          } else if (error) {
                                            reject(new Error(error));
                                          }
                                        });
                                        initStream.write({
                                          name: "init_stream",
                                          data: {
                                            enabledVerifiers: enabledVerifiers,
                                            loginConfig: loginConfig,
                                            whiteLabel: _this7.whiteLabel,
                                            buttonPosition: _this7.buttonPosition,
                                            torusWidgetVisibility: _this7.torusWidgetVisibility,
                                            apiKey: _this7.apiKey,
                                            skipTKey: skipTKey,
                                            network: network
                                          }
                                        });

                                      case 4:
                                      case "end":
                                        return _context6.stop();
                                    }
                                  }
                                }, _callee6);
                              }));
                              window.document.head.appendChild(_this7.styleLink);
                              window.document.body.appendChild(_this7.torusIframe);
                              window.document.body.appendChild(_this7.torusAlertContainer);
                            }));

                          case 3:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, _callee7);
                  }));

                  return function handleSetup() {
                    return _ref12.apply(this, arguments);
                  };
                }();

                if (!(buildEnv === "production" && integrity.check)) {
                  _context8.next = 56;
                  break;
                }

                // hacky solution to check for iframe integrity
                fetchUrl = "".concat(torusUrl, "/popup");
                _context8.next = 39;
                return fetch(fetchUrl, {
                  cache: "reload"
                });

              case 39:
                resp = _context8.sent;

                if (!(resp.headers.get("Cache-Control") !== expectedCacheControlHeader)) {
                  _context8.next = 42;
                  break;
                }

                throw new Error("Unexpected Cache-Control headers, got ".concat(resp.headers.get("Cache-Control")));

              case 42:
                _context8.next = 44;
                return resp.text();

              case 44:
                response = _context8.sent;
                calculatedIntegrity = main({
                  algorithms: ["sha384"]
                }, response);
                log.info(calculatedIntegrity, "integrity");

                if (!(calculatedIntegrity === integrity.hash)) {
                  _context8.next = 52;
                  break;
                }

                _context8.next = 50;
                return handleSetup();

              case 50:
                _context8.next = 54;
                break;

              case 52:
                this.clearInit();
                throw new Error("Integrity check failed");

              case 54:
                _context8.next = 58;
                break;

              case 56:
                _context8.next = 58;
                return handleSetup();

              case 58:
                return _context8.abrupt("return", undefined);

              case 59:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "login",
    value: function login() {
      var _ref14 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref14$verifier = _ref14.verifier,
          verifier = _ref14$verifier === void 0 ? "" : _ref14$verifier,
          _ref14$login_hint = _ref14.login_hint,
          loginHint = _ref14$login_hint === void 0 ? "" : _ref14$login_hint;

      if (!this.isInitialized) throw new Error("Call init() first");
      this.requestedVerifier = verifier;
      this.loginHint = loginHint;
      return this.ethereum.enable();
    }
  }, {
    key: "logout",
    value: function logout() {
      var _this8 = this;

      return new Promise(function (resolve, reject) {
        if (!_this8.isLoggedIn) {
          reject(new Error("User has not logged in yet"));
          return;
        }

        var logOutStream = _this8.communicationMux.getStream("logout");

        logOutStream.write({
          name: "logOut"
        });

        var statusStream = _this8.communicationMux.getStream("status");

        var statusStreamHandler = function statusStreamHandler(status) {
          if (!status.loggedIn) {
            _this8.isLoggedIn = false;
            _this8.currentVerifier = "";
            _this8.requestedVerifier = "";
            resolve();
          } else reject(new Error("Some Error Occured"));
        };

        handleStream(statusStream, "data", statusStreamHandler);
      });
    }
  }, {
    key: "cleanUp",
    value: function () {
      var _cleanUp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!this.isLoggedIn) {
                  _context9.next = 3;
                  break;
                }

                _context9.next = 3;
                return this.logout();

              case 3:
                this.clearInit();

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function cleanUp() {
        return _cleanUp.apply(this, arguments);
      }

      return cleanUp;
    }()
  }, {
    key: "clearInit",
    value: function clearInit() {
      function isElement(element) {
        return element instanceof Element || element instanceof HTMLDocument;
      }

      if (isElement(this.styleLink) && window.document.body.contains(this.styleLink)) {
        this.styleLink.remove();
        this.styleLink = undefined;
      }

      if (isElement(this.torusIframe) && window.document.body.contains(this.torusIframe)) {
        this.torusIframe.remove();
        this.torusIframe = undefined;
      }

      if (isElement(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer)) {
        this.torusAlert = undefined;
        this.torusAlertContainer.remove();
        this.torusAlertContainer = undefined;
      }

      this.isInitialized = false;
    }
  }, {
    key: "hideTorusButton",
    value: function hideTorusButton() {
      this.torusWidgetVisibility = false;

      this._sendWidgetVisibilityStatus(false);

      this._displayIframe();
    }
  }, {
    key: "showTorusButton",
    value: function showTorusButton() {
      this.torusWidgetVisibility = true;

      this._sendWidgetVisibilityStatus(true);

      this._displayIframe();
    }
  }, {
    key: "setProvider",
    value: function setProvider() {
      var _this9 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var _ref$host = _ref.host,
          host = _ref$host === void 0 ? "mainnet" : _ref$host,
          _ref$chainId = _ref.chainId,
          chainId = _ref$chainId === void 0 ? null : _ref$chainId,
          _ref$networkName = _ref.networkName,
          networkName = _ref$networkName === void 0 ? "" : _ref$networkName,
          rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
      return new Promise(function (resolve, reject) {
        var providerChangeStream = _this9.communicationMux.getStream("provider_change");

        var handler = function handler(chunk) {
          var _chunk$data = chunk.data,
              err = _chunk$data.err,
              success = _chunk$data.success;
          log.info(chunk);

          if (err) {
            reject(err);
          } else if (success) {
            resolve();
          } else reject(new Error("some error occured"));
        };

        handleStream(providerChangeStream, "data", handler);
        var preopenInstanceId = getPreopenInstanceId();

        _this9._handleWindow(preopenInstanceId, {
          target: "_blank",
          features: FEATURES_PROVIDER_CHANGE_WINDOW
        });

        providerChangeStream.write({
          name: "show_provider_change",
          data: {
            network: _objectSpread({
              host: host,
              chainId: chainId,
              networkName: networkName
            }, rest),
            preopenInstanceId: preopenInstanceId,
            override: false
          }
        });
      });
    }
  }, {
    key: "showWallet",
    value: function showWallet(path) {
      var _this10 = this;

      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var showWalletStream = this.communicationMux.getStream("show_wallet");
      var finalPath = path ? "/".concat(path) : "";
      showWalletStream.write({
        name: "show_wallet",
        data: {
          path: finalPath
        }
      });

      var showWalletHandler = function showWalletHandler(chunk) {
        if (chunk.name === "show_wallet_instance") {
          // Let the error propogate up (hence, no try catch)
          var instanceId = chunk.data.instanceId;
          var finalUrl = new URL("".concat(_this10.torusUrl, "/wallet").concat(finalPath)); // Using URL constructor to prevent js injection and allow parameter validation.!

          finalUrl.searchParams.append("integrity", "true");
          finalUrl.searchParams.append("instanceId", instanceId);
          Object.keys(params).forEach(function (x) {
            finalUrl.searchParams.append(x, params[x]);
          });

          if (_this10.dappStorageKey) {
            finalUrl.hash = "#dappStorageKey=".concat(_this10.dappStorageKey);
          }

          var walletWindow = new PopupHandler({
            url: finalUrl,
            features: FEATURES_DEFAULT_WALLET_WINDOW
          });
          walletWindow.open();
        }
      };

      handleStream(showWalletStream, "data", showWalletHandler);
    }
  }, {
    key: "getPublicAddress",
    value: function () {
      var _getPublicAddress = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref2) {
        var verifier, verifierId, _ref2$isExtended, isExtended, nodeDetails, endpoints, torusNodePubs, walletVerifier, openloginVerifier, existingV1User, v2User, newV2User;

        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                verifier = _ref2.verifier, verifierId = _ref2.verifierId, _ref2$isExtended = _ref2.isExtended, isExtended = _ref2$isExtended === void 0 ? false : _ref2$isExtended;

                if (!(!configuration.supportedVerifierList.includes(verifier) || !WALLET_OPENLOGIN_VERIFIER_MAP[verifier])) {
                  _context10.next = 3;
                  break;
                }

                throw new Error("Unsupported verifier");

              case 3:
                _context10.next = 5;
                return this.nodeDetailManager.getNodeDetails({
                  verifier: verifier,
                  verifierId: verifierId
                });

              case 5:
                nodeDetails = _context10.sent;
                endpoints = nodeDetails.torusNodeEndpoints;
                torusNodePubs = nodeDetails.torusNodePub;
                walletVerifier = verifier;
                openloginVerifier = WALLET_OPENLOGIN_VERIFIER_MAP[verifier];
                _context10.prev = 10;
                _context10.next = 13;
                return this.torusJs.getUserTypeAndAddress(endpoints, torusNodePubs, {
                  verifier: walletVerifier,
                  verifierId: verifierId
                });

              case 13:
                existingV1User = _context10.sent;

                if (!(existingV1User.typeOfUser === "v1")) {
                  _context10.next = 18;
                  break;
                }

                if (isExtended) {
                  _context10.next = 17;
                  break;
                }

                return _context10.abrupt("return", existingV1User.address);

              case 17:
                return _context10.abrupt("return", existingV1User);

              case 18:
                _context10.next = 20;
                return this.torusJs.getUserTypeAndAddress(endpoints, torusNodePubs, {
                  verifier: openloginVerifier,
                  verifierId: verifierId
                }, true);

              case 20:
                v2User = _context10.sent;

                if (isExtended) {
                  _context10.next = 23;
                  break;
                }

                return _context10.abrupt("return", v2User.address);

              case 23:
                return _context10.abrupt("return", v2User);

              case 26:
                _context10.prev = 26;
                _context10.t0 = _context10["catch"](10);

                if (!(_context10.t0 !== null && _context10.t0 !== void 0 && _context10.t0.message.includes("Verifier + VerifierID has not yet been assigned"))) {
                  _context10.next = 35;
                  break;
                }

                _context10.next = 31;
                return this.torusJs.getUserTypeAndAddress(endpoints, torusNodePubs, {
                  verifier: openloginVerifier,
                  verifierId: verifierId
                }, true);

              case 31:
                newV2User = _context10.sent;

                if (isExtended) {
                  _context10.next = 34;
                  break;
                }

                return _context10.abrupt("return", newV2User.address);

              case 34:
                return _context10.abrupt("return", newV2User);

              case 35:
                throw _context10.t0;

              case 36:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[10, 26]]);
      }));

      function getPublicAddress(_x6) {
        return _getPublicAddress.apply(this, arguments);
      }

      return getPublicAddress;
    }()
  }, {
    key: "getUserInfo",
    value: function getUserInfo(message) {
      var _this11 = this;

      return new Promise(function (resolve, reject) {
        if (_this11.isLoggedIn) {
          var userInfoAccessStream = _this11.communicationMux.getStream("user_info_access");

          userInfoAccessStream.write({
            name: "user_info_access_request"
          });

          var userInfoAccessHandler = function userInfoAccessHandler(chunk) {
            var name = chunk.name,
                _chunk$data2 = chunk.data,
                approved = _chunk$data2.approved,
                payload = _chunk$data2.payload,
                rejected = _chunk$data2.rejected,
                newRequest = _chunk$data2.newRequest;

            if (name === "user_info_access_response") {
              if (approved) {
                resolve(payload);
              } else if (rejected) {
                reject(new Error("User rejected the request"));
              } else if (newRequest) {
                var userInfoStream = _this11.communicationMux.getStream("user_info");

                var userInfoHandler = function userInfoHandler(handlerChunk) {
                  if (handlerChunk.name === "user_info_response") {
                    if (handlerChunk.data.approved) {
                      resolve(handlerChunk.data.payload);
                    } else {
                      reject(new Error("User rejected the request"));
                    }
                  }
                };

                handleStream(userInfoStream, "data", userInfoHandler);
                var preopenInstanceId = getPreopenInstanceId();

                _this11._handleWindow(preopenInstanceId, {
                  target: "_blank",
                  features: FEATURES_PROVIDER_CHANGE_WINDOW
                });

                userInfoStream.write({
                  name: "user_info_request",
                  data: {
                    message: message,
                    preopenInstanceId: preopenInstanceId
                  }
                });
              }
            }
          };

          handleStream(userInfoAccessStream, "data", userInfoAccessHandler);
        } else reject(new Error("User has not logged in yet"));
      });
    }
  }, {
    key: "initiateTopup",
    value: function initiateTopup(provider, params) {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        if (_this12.isInitialized) {
          var _validatePaymentProvi = validatePaymentProvider(provider, params),
              errors = _validatePaymentProvi.errors,
              isValid = _validatePaymentProvi.isValid;

          if (!isValid) {
            reject(new Error(JSON.stringify(errors)));
            return;
          }

          var topupStream = _this12.communicationMux.getStream("topup");

          var topupHandler = function topupHandler(chunk) {
            if (chunk.name === "topup_response") {
              if (chunk.data.success) {
                resolve(chunk.data.success);
              } else {
                reject(new Error(chunk.data.error));
              }
            }
          };

          handleStream(topupStream, "data", topupHandler);
          var preopenInstanceId = getPreopenInstanceId();

          _this12._handleWindow(preopenInstanceId);

          topupStream.write({
            name: "topup_request",
            data: {
              provider: provider,
              params: params,
              preopenInstanceId: preopenInstanceId
            }
          });
        } else reject(new Error("Torus is not initialized yet"));
      });
    }
  }, {
    key: "loginWithPrivateKey",
    value: function () {
      var _loginWithPrivateKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(loginParams) {
        var _this13 = this;

        var privateKey, userInfo;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                privateKey = loginParams.privateKey, userInfo = loginParams.userInfo;
                return _context11.abrupt("return", new Promise(function (resolve, reject) {
                  if (_this13.isInitialized) {
                    if (Buffer.from(privateKey, "hex").length !== 32) {
                      reject(new Error("Invalid private key, Please provide a 32 byte valid secp25k1 private key"));
                      return;
                    }

                    var loginPrivKeyStream = _this13.communicationMux.getStream("login_with_private_key");

                    var loginHandler = function loginHandler(chunk) {
                      if (chunk.name === "login_with_private_key_response") {
                        if (chunk.data.success) {
                          resolve(chunk.data.success);
                        } else {
                          reject(new Error(chunk.data.error));
                        }
                      }
                    };

                    handleStream(loginPrivKeyStream, "data", loginHandler);
                    loginPrivKeyStream.write({
                      name: "login_with_private_key_request",
                      data: {
                        privateKey: privateKey,
                        userInfo: userInfo
                      }
                    });
                  } else reject(new Error("Torus is not initialized yet"));
                }));

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function loginWithPrivateKey(_x7) {
        return _loginWithPrivateKey.apply(this, arguments);
      }

      return loginWithPrivateKey;
    }()
  }, {
    key: "showWalletConnectScanner",
    value: function () {
      var _showWalletConnectScanner = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
        var _this14 = this;

        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (this.useWalletConnect) {
                  _context12.next = 2;
                  break;
                }

                throw new Error("Set `useWalletConnect` as true in init function options to use wallet connect scanner");

              case 2:
                return _context12.abrupt("return", new Promise(function (resolve, reject) {
                  if (_this14.isLoggedIn) {
                    var walletConnectStream = _this14.communicationMux.getStream("wallet_connect_stream");

                    var walletConnectHandler = function walletConnectHandler(chunk) {
                      if (chunk.name === "wallet_connect_stream_res") {
                        if (chunk.data.success) {
                          resolve(chunk.data.success);
                        } else {
                          reject(new Error(chunk.data.error));
                        }

                        _this14._displayIframe();
                      }
                    };

                    handleStream(walletConnectStream, "data", walletConnectHandler);
                    walletConnectStream.write({
                      name: "wallet_connect_stream_req"
                    });

                    _this14._displayIframe(true);
                  } else reject(new Error("User has not logged in yet"));
                }));

              case 3:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function showWalletConnectScanner() {
        return _showWalletConnectScanner.apply(this, arguments);
      }

      return showWalletConnectScanner;
    }()
  }, {
    key: "_handleWindow",
    value: function _handleWindow(preopenInstanceId) {
      var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          url = _ref15.url,
          target = _ref15.target,
          features = _ref15.features;

      if (preopenInstanceId) {
        var windowStream = this.communicationMux.getStream("window");
        var finalUrl = new URL(url || "".concat(this.torusUrl, "/redirect?preopenInstanceId=").concat(preopenInstanceId));

        if (this.dappStorageKey) {
          // If multiple instances, it returns the first one
          if (finalUrl.hash) finalUrl.hash += "&dappStorageKey=".concat(this.dappStorageKey);else finalUrl.hash = "#dappStorageKey=".concat(this.dappStorageKey);
        }

        var handledWindow = new PopupHandler({
          url: finalUrl,
          target: target,
          features: features
        });
        handledWindow.open();

        if (!handledWindow.window) {
          this._createPopupBlockAlert(preopenInstanceId, finalUrl.href);

          return;
        }

        windowStream.write({
          name: "opened_window",
          data: {
            preopenInstanceId: preopenInstanceId
          }
        });

        var closeHandler = function closeHandler(_ref3) {
          var receivedId = _ref3.preopenInstanceId,
              close = _ref3.close;

          if (receivedId === preopenInstanceId && close) {
            handledWindow.close();
            windowStream.removeListener("data", closeHandler);
          }
        };

        windowStream.on("data", closeHandler);
        handledWindow.once("close", function () {
          windowStream.write({
            data: {
              preopenInstanceId: preopenInstanceId,
              closed: true
            }
          });
          windowStream.removeListener("data", closeHandler);
        });
      }
    }
  }, {
    key: "_setEmbedWhiteLabel",
    value: function _setEmbedWhiteLabel(element) {
      // Set whitelabel
      var _ref16 = this.whiteLabel || {},
          theme = _ref16.theme;

      if (theme) {
        var _theme$isDark = theme.isDark,
            isDark = _theme$isDark === void 0 ? false : _theme$isDark,
            _theme$colors = theme.colors,
            colors = _theme$colors === void 0 ? {} : _theme$colors;
        if (isDark) element.classList.add("torus-dark");
        if (colors.torusBrand1) element.style.setProperty("--torus-brand-1", colors.torusBrand1);
        if (colors.torusGray2) element.style.setProperty("--torus-gray-2", colors.torusGray2);
      }
    }
  }, {
    key: "_getLogoUrl",
    value: function _getLogoUrl() {
      var _this$whiteLabel, _this$whiteLabel$them;

      var logoUrl = "".concat(this.torusUrl, "/images/torus_icon-blue.svg");

      if ((_this$whiteLabel = this.whiteLabel) !== null && _this$whiteLabel !== void 0 && (_this$whiteLabel$them = _this$whiteLabel.theme) !== null && _this$whiteLabel$them !== void 0 && _this$whiteLabel$them.isDark) {
        var _this$whiteLabel2;

        logoUrl = ((_this$whiteLabel2 = this.whiteLabel) === null || _this$whiteLabel2 === void 0 ? void 0 : _this$whiteLabel2.logoLight) || logoUrl;
      } else {
        var _this$whiteLabel3;

        logoUrl = ((_this$whiteLabel3 = this.whiteLabel) === null || _this$whiteLabel3 === void 0 ? void 0 : _this$whiteLabel3.logoDark) || logoUrl;
      }

      return logoUrl;
    }
  }, {
    key: "_sendWidgetVisibilityStatus",
    value: function _sendWidgetVisibilityStatus(status) {
      var torusWidgetVisibilityStream = this.communicationMux.getStream("torus-widget-visibility");
      torusWidgetVisibilityStream.write({
        data: status
      });
    }
  }, {
    key: "_displayIframe",
    value: function _displayIframe() {
      var isFull = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var style = {}; // set phase

      if (!isFull) {
        style.display = this.torusWidgetVisibility ? "block" : "none";
        style.height = "70px";
        style.width = "70px";

        switch (this.buttonPosition) {
          case BUTTON_POSITION.TOP_LEFT:
            style.top = "0px";
            style.left = "0px";
            style.right = "auto";
            style.bottom = "auto";
            break;

          case BUTTON_POSITION.TOP_RIGHT:
            style.top = "0px";
            style.right = "0px";
            style.left = "auto";
            style.bottom = "auto";
            break;

          case BUTTON_POSITION.BOTTOM_RIGHT:
            style.bottom = "0px";
            style.right = "0px";
            style.top = "auto";
            style.left = "auto";
            break;

          case BUTTON_POSITION.BOTTOM_LEFT:
          default:
            style.bottom = "0px";
            style.left = "0px";
            style.top = "auto";
            style.right = "auto";
            break;
        }
      } else {
        style.display = "block";
        style.width = "100%";
        style.height = "100%";
        style.top = "0px";
        style.right = "0px";
        style.left = "0px";
        style.bottom = "0px";
      }

      Object.assign(this.torusIframe.style, style);
      this.isIframeFullScreen = isFull;
    }
  }, {
    key: "_setupWeb3",
    value: function _setupWeb3() {
      var _this15 = this;

      log.info("setupWeb3 running"); // setup background connection

      var metamaskStream = new _openloginJrpc.BasePostMessageStream({
        name: "embed_metamask",
        target: "iframe_metamask",
        targetWindow: this.torusIframe.contentWindow,
        targetOrigin: new URL(this.torusUrl).origin
      }); // Due to compatibility reasons, we should not set up multiplexing on window.metamaskstream
      // because the MetamaskInpageProvider also attempts to do so.
      // We create another LocalMessageDuplexStream for communication between dapp <> iframe

      var communicationStream = new _openloginJrpc.BasePostMessageStream({
        name: "embed_comm",
        target: "iframe_comm",
        targetWindow: this.torusIframe.contentWindow,
        targetOrigin: new URL(this.torusUrl).origin
      }); // Backward compatibility with Gotchi :)
      // window.metamaskStream = this.communicationStream
      // compose the inpage provider

      var inpageProvider = new TorusInpageProvider(metamaskStream); // detect eth_requestAccounts and pipe to enable for now

      var detectAccountRequestPrototypeModifier = function detectAccountRequestPrototypeModifier(m) {
        var originalMethod = inpageProvider[m];

        inpageProvider[m] = function providerFunc(method) {
          if (method && method === "eth_requestAccounts") {
            return inpageProvider.enable();
          }

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return originalMethod.apply(this, [method].concat(args));
        };
      };

      detectAccountRequestPrototypeModifier("send");
      detectAccountRequestPrototypeModifier("sendAsync");

      inpageProvider.enable = function () {
        return new Promise(function (resolve, reject) {
          // If user is already logged in, we assume they have given access to the website
          inpageProvider.sendAsync({
            jsonrpc: "2.0",
            id: getPreopenInstanceId(),
            method: "eth_requestAccounts",
            params: []
          }, function (err, response) {
            var _ref17 = response || {},
                res = _ref17.result;

            if (err) {
              setTimeout(function () {
                reject(err);
              }, 50);
            } else if (Array.isArray(res) && res.length > 0) {
              // If user is already rehydrated, resolve this
              // else wait for something to be written to status stream
              var handleLoginCb = function handleLoginCb() {
                if (_this15.requestedVerifier !== "" && _this15.currentVerifier !== _this15.requestedVerifier) {
                  var requestedVerifier = _this15.requestedVerifier; // eslint-disable-next-line promise/no-promise-in-callback

                  _this15.logout() // eslint-disable-next-line promise/always-return
                  .then(function (_) {
                    _this15.requestedVerifier = requestedVerifier;

                    _this15._showLoginPopup(true, resolve, reject);
                  }).catch(function (error) {
                    return reject(error);
                  });
                } else {
                  resolve(res);
                }
              };

              if (_this15.isLoggedIn) {
                handleLoginCb();
              } else {
                _this15.isLoginCallback = handleLoginCb;
              }
            } else {
              // set up listener for login
              _this15._showLoginPopup(true, resolve, reject);
            }
          });
        });
      };

      inpageProvider.tryPreopenHandle = function (payload, cb) {
        var _payload = payload;

        if (!Array.isArray(_payload) && UNSAFE_METHODS.includes(_payload.method)) {
          var preopenInstanceId = getPreopenInstanceId();

          _this15._handleWindow(preopenInstanceId, {
            target: "_blank",
            features: FEATURES_CONFIRM_WINDOW
          });

          _payload.preopenInstanceId = preopenInstanceId;
        }

        inpageProvider._rpcEngine.handle(_payload, cb);
      }; // Work around for web3@1.0 deleting the bound `sendAsync` but not the unbound
      // `sendAsync` method on the prototype, causing `this` reference issues with drizzle


      var proxiedInpageProvider = new Proxy(inpageProvider, {
        // straight up lie that we deleted the property so that it doesnt
        // throw an error in strict mode
        deleteProperty: function deleteProperty() {
          return true;
        }
      });
      this.ethereum = proxiedInpageProvider;
      var communicationMux = (0, _openloginJrpc.setupMultiplex)(communicationStream);
      this.communicationMux = communicationMux;
      var windowStream = communicationMux.getStream("window");
      windowStream.on("data", function (chunk) {
        if (chunk.name === "create_window") {
          // url is the url we need to open
          // we can pass the final url upfront so that it removes the step of redirecting to /redirect and waiting for finalUrl
          _this15._createPopupBlockAlert(chunk.data.preopenInstanceId, chunk.data.url);
        }
      }); // show torus widget if button clicked

      var widgetStream = communicationMux.getStream("widget");
      widgetStream.on("data", function (chunk) {
        var data = chunk.data;

        _this15._displayIframe(data);
      }); // Show torus button if wallet has been hydrated/detected

      var statusStream = communicationMux.getStream("status");
      statusStream.on("data", function (status) {
        // login
        if (status.loggedIn) {
          _this15.isLoggedIn = status.loggedIn;
          _this15.currentVerifier = status.verifier;
        } // logout
        else _this15._displayIframe();

        if (_this15.isLoginCallback) {
          _this15.isLoginCallback();

          delete _this15.isLoginCallback;
        }
      });
      this.provider = proxiedInpageProvider;
      if (this.provider.shouldSendMetadata) sendSiteMetadata(this.provider._rpcEngine);

      inpageProvider._initializeState();

      log.debug("Torus - injected provider");
    }
  }, {
    key: "_showLoginPopup",
    value: function _showLoginPopup(calledFromEmbed, resolve, reject) {
      var _this16 = this;

      var loginHandler = function loginHandler(data) {
        var err = data.err,
            selectedAddress = data.selectedAddress;

        if (err) {
          log.error(err);
          if (reject) reject(err);
        } // returns an array (cause accounts expects it)
        else if (resolve) resolve([selectedAddress]);

        if (_this16.isIframeFullScreen) _this16._displayIframe();
      };

      var oauthStream = this.communicationMux.getStream("oauth");

      if (!this.requestedVerifier) {
        this._displayIframe(true);

        handleStream(oauthStream, "data", loginHandler);
        oauthStream.write({
          name: "oauth_modal",
          data: {
            calledFromEmbed: calledFromEmbed
          }
        });
      } else {
        handleStream(oauthStream, "data", loginHandler);
        var preopenInstanceId = getPreopenInstanceId();

        this._handleWindow(preopenInstanceId);

        oauthStream.write({
          name: "oauth",
          data: {
            calledFromEmbed: calledFromEmbed,
            verifier: this.requestedVerifier,
            preopenInstanceId: preopenInstanceId,
            login_hint: this.loginHint
          }
        });
      }
    }
  }, {
    key: "_createPopupBlockAlert",
    value: function _createPopupBlockAlert(preopenInstanceId, url) {
      var _this17 = this;

      var logoUrl = this._getLogoUrl();

      var torusAlert = htmlToElement('<div id="torusAlert" class="torus-alert--v2">' + "<div id=\"torusAlert__logo\"><img src=\"".concat(logoUrl, "\" /></div>") + "<div>" + "<h1 id=\"torusAlert__title\">".concat(this.embedTranslations.actionRequired, "</h1>") + "<p id=\"torusAlert__desc\">".concat(this.embedTranslations.pendingAction, "</p>") + "</div>" + "</div>");
      var successAlert = htmlToElement("<div><a id=\"torusAlert__btn\">".concat(this.embedTranslations.continue, "</a></div>"));
      var btnContainer = htmlToElement('<div id="torusAlert__btn-container"></div>');
      btnContainer.appendChild(successAlert);
      torusAlert.appendChild(btnContainer);

      var bindOnLoad = function bindOnLoad() {
        successAlert.addEventListener("click", function () {
          _this17._handleWindow(preopenInstanceId, {
            url: url,
            target: "_blank",
            features: FEATURES_CONFIRM_WINDOW
          });

          torusAlert.remove();
          if (_this17.torusAlertContainer.children.length === 0) _this17.torusAlertContainer.style.display = "none";
        });
      };

      this._setEmbedWhiteLabel(torusAlert);

      var attachOnLoad = function attachOnLoad() {
        _this17.torusAlertContainer.style.display = "block";

        _this17.torusAlertContainer.appendChild(torusAlert);
      };

      runOnLoad(attachOnLoad);
      runOnLoad(bindOnLoad);
    }
  }]);

  return Torus;
}();

exports.default = Torus;
},{"@babel/runtime/helpers/objectWithoutProperties":"node_modules/@babel/runtime/helpers/objectWithoutProperties.js","@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@toruslabs/fetch-node-details":"node_modules/@toruslabs/fetch-node-details/dist/fetchNodeDetails.esm.js","@toruslabs/http-helpers":"node_modules/@toruslabs/http-helpers/dist/httpHelpers.esm.js","@toruslabs/openlogin-jrpc":"node_modules/@toruslabs/openlogin-jrpc/dist/openloginJrpc.esm.js","@toruslabs/torus.js":"node_modules/@toruslabs/torus.js/dist/torusUtils.esm.js","lodash.merge":"node_modules/lodash.merge/index.js","@metamask/obs-store":"node_modules/@metamask/obs-store/dist/index.js","eth-rpc-errors":"node_modules/eth-rpc-errors/dist/index.js","fast-deep-equal":"node_modules/fast-deep-equal/index.js","is-stream":"node_modules/@toruslabs/torus-embed/node_modules/is-stream/index.js","pump":"node_modules/pump/index.js","loglevel":"node_modules/loglevel/lib/loglevel.js","create-hash":"node_modules/create-hash/browser.js","events":"node_modules/events/events.js","buffer":"node_modules/buffer/index.js"}],"node_modules/@web3auth/torus-evm-adapter/dist/torusEvmAdapter.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TorusWalletAdapter = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _torusEmbed = _interopRequireDefault(require("@toruslabs/torus-embed"));

var _base = require("@web3auth/base");

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

class TorusWalletAdapter extends _base.BaseAdapter {
  constructor() {
    let params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();
    (0, _defineProperty2.default)(this, "name", _base.WALLET_ADAPTERS.TORUS_EVM);
    (0, _defineProperty2.default)(this, "adapterNamespace", _base.ADAPTER_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "currentChainNamespace", _base.CHAIN_NAMESPACES.EIP155);
    (0, _defineProperty2.default)(this, "type", _base.ADAPTER_CATEGORY.EXTERNAL);
    (0, _defineProperty2.default)(this, "status", _base.ADAPTER_STATUS.NOT_READY);
    (0, _defineProperty2.default)(this, "torusInstance", null);
    (0, _defineProperty2.default)(this, "torusWalletOptions", void 0);
    (0, _defineProperty2.default)(this, "initParams", void 0);
    (0, _defineProperty2.default)(this, "loginSettings", {});
    (0, _defineProperty2.default)(this, "rehydrated", false);
    this.torusWalletOptions = params.adapterSettings || {};
    this.initParams = params.initParams || {};
    this.loginSettings = params.loginSettings || {};
    this.chainConfig = params.chainConfig || null;
  }

  get provider() {
    if (this.status === _base.ADAPTER_STATUS.CONNECTED && this.torusInstance) {
      return this.torusInstance.provider;
    }

    return null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  async init(options) {
    super.checkInitializationRequirements(); // set chainConfig for mainnet by default if not set

    let network;

    if (!this.chainConfig) {
      this.chainConfig = (0, _base.getChainConfig)(_base.CHAIN_NAMESPACES.EIP155, 1);
      const {
        blockExplorer,
        displayName
      } = this.chainConfig;
      network = {
        chainId: 1,
        host: "mainnet",
        blockExplorer,
        networkName: displayName
      };
    } else {
      const {
        chainId,
        blockExplorer,
        displayName,
        rpcTarget
      } = this.chainConfig;
      network = {
        chainId: parseInt(chainId, 16),
        host: rpcTarget,
        blockExplorer,
        networkName: displayName
      };
    }

    this.torusInstance = new _torusEmbed.default(this.torusWalletOptions);
    await this.torusInstance.init(_objectSpread(_objectSpread({
      showTorusButton: false
    }, this.initParams), {}, {
      network
    }));
    this.status = _base.ADAPTER_STATUS.READY;
    this.emit(_base.ADAPTER_EVENTS.READY, _base.WALLET_ADAPTERS.TORUS_EVM);

    try {
      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      _base.log.error("Failed to connect with torus evm provider", error);

      this.emit(_base.ADAPTER_EVENTS.ERRORED, error);
    }
  }

  async connect() {
    super.checkConnectionRequirements();
    if (!this.torusInstance) throw _base.WalletInitializationError.notReady("Torus wallet is not initialized");
    this.status = _base.ADAPTER_STATUS.CONNECTING;
    this.emit(_base.ADAPTER_EVENTS.CONNECTING, {
      adapter: _base.WALLET_ADAPTERS.TORUS_EVM
    });

    try {
      await this.torusInstance.login(this.loginSettings);
      const {
        chainId
      } = this.torusInstance.provider;

      if (chainId && parseInt(chainId) !== parseInt(this.chainConfig.chainId, 16)) {
        throw _base.WalletInitializationError.fromCode(5000, "Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId, ", Current: ").concat(chainId));
      }

      this.status = _base.ADAPTER_STATUS.CONNECTED;
      this.torusInstance.showTorusButton();
      this.emit(_base.ADAPTER_STATUS.CONNECTED, {
        adapter: _base.WALLET_ADAPTERS.TORUS_EVM,
        reconnected: this.rehydrated
      });
      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = _base.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(_base.ADAPTER_STATUS.ERRORED, error);
      throw error instanceof _base.Web3AuthError ? error : _base.WalletLoginError.connectionError("Failed to login with torus wallet");
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (this.status !== _base.ADAPTER_STATUS.CONNECTED) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw _base.WalletInitializationError.notReady("Torus wallet is not initialized");
    await this.torusInstance.logout();
    this.torusInstance.hideTorusButton();

    if (options.cleanup) {
      this.status = _base.ADAPTER_STATUS.NOT_READY;
      this.torusInstance = null;
    } else {
      // ready to be connected again
      this.status = _base.ADAPTER_STATUS.READY;
    }

    this.rehydrated = false;
    this.emit(_base.ADAPTER_EVENTS.DISCONNECTED);
  }

  async getUserInfo() {
    if (this.status !== _base.ADAPTER_STATUS.CONNECTED) throw _base.WalletLoginError.notConnectedError("Not connected with wallet");
    if (!this.torusInstance) throw _base.WalletInitializationError.notReady("Torus wallet is not initialized");
    const userInfo = await this.torusInstance.getUserInfo("");
    return userInfo;
  }

  setAdapterSettings(_) {}

}

exports.TorusWalletAdapter = TorusWalletAdapter;
},{"@babel/runtime/helpers/defineProperty":"node_modules/@babel/runtime/helpers/defineProperty.js","@toruslabs/torus-embed":"node_modules/@toruslabs/torus-embed/dist/torus.esm.js","@web3auth/base":"node_modules/@web3auth/base/dist/base.esm.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
//# sourceMappingURL=/torusEvmAdapter.esm.1a8b1094.js.map