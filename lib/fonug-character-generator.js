(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("fonug-character-generator", [], factory);
	else if(typeof exports === 'object')
		exports["fonug-character-generator"] = factory();
	else
		root["fonug-character-generator"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _package = __webpack_require__(1);

var config = _interopRequireWildcard(_package);

var _character = __webpack_require__(2);

var _character2 = _interopRequireDefault(_character);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The class defining the character generator
 * Instanciate it whith the contentProvider wanted, are use the default ones
 * The generate random generate characters that will use the given content providers
 * @export
 * @class FonugGenerator
 */
var FonugCharacterGenerator = function () {
  function FonugCharacterGenerator() {
    _classCallCheck(this, FonugCharacterGenerator);

    this.version = config.version;
  }

  /**
   * Generate a new random Character
   * @returns Object The character generated
   * @memberof FonugGenerator
   */


  _createClass(FonugCharacterGenerator, [{
    key: 'generateCharacter',
    value: function generateCharacter() {
      var character = new _character2.default();

      return Object.assign({}, character, {
        version: this.version
      });
    }
  }]);

  return FonugCharacterGenerator;
}();

exports.default = FonugCharacterGenerator;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {"name":"fonug-character-generator","version":"0.0.1","description":"A character generator","main":"lib/library.js","scripts":{"build":"webpack --env dev && webpack --env build && npm run test","dev":"webpack --progress --colors --watch --env dev","test":"mocha --require babel-core/register --colors ./test/*.spec.js","test:watch":"mocha --require babel-core/register --colors -w ./test/*.spec.js"},"repository":{"type":"git","url":"https://github.com/SebDez/npc-generator"},"keywords":["webpack","es6","starter","library","universal","umd","commonjs"],"author":"Sébastien Dez","license":"MIT","devDependencies":{"babel-cli":"^6.26.0","babel-core":"^6.26.0","babel-eslint":"^8.0.3","babel-loader":"^7.1.2","babel-plugin-add-module-exports":"^0.2.1","babel-preset-env":"^1.6.1","chai":"^4.1.2","eslint":"^4.13.1","eslint-loader":"^1.9.0","mocha":"^4.0.1","webpack":"^3.10.0","yargs":"^10.0.3"},"dependencies":{"eslint-config-standard":"^11.0.0","eslint-plugin-import":"^2.11.0","eslint-plugin-node":"^6.0.1","eslint-plugin-promise":"^3.7.0","eslint-plugin-standard":"^3.1.0"}}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A class representing a generated character
 * @export
 * @class Character
 */
var Character = function Character() {
  _classCallCheck(this, Character);
};

exports.default = Character;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=fonug-character-generator.js.map