(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("glitchie", [], factory);
	else if(typeof exports === 'object')
		exports["glitchie"] = factory();
	else
		root["glitchie"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/glitch.js":
/*!***********************!*\
  !*** ./src/glitch.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Reading material
// 
// Setting up automatic semantic versioning
// https://egghead.io/lessons/javascript-publishing-to-npm
// http://www.macaalay.com/2014/09/26/rendering-images-from-byte-arrays-and-converting-images-to-byte-arrays-using-angularjs/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer
var Glitch =
/*#__PURE__*/
function () {
  function Glitch() {
    _classCallCheck(this, Glitch);

    this._currentImageIndex = -1;
    this._imageHistory = [];
    this.loaded = false;
    this._imageInBytes; // Uint32Array
  }
  /**
   * read
   * 
   * @desc 
   * @param {File} file of type png, jpeg
   */


  _createClass(Glitch, [{
    key: "read",
    value: function read(file) {
      var _this = this;

      var input = file.target;
      var reader = new FileReader();

      reader.onload = function () {
        debugger;
        var output = document.getElementById("output");
        var image = new Image();
        var width;
        var height;
        var dataURL;
        dataURL = reader.result;
        image.src = dataURL;
        /**
         * Wait for the image to load
         */

        image.onload = function () {
          _this._setupGlitchImage(image, image.width, image.height);

          _this._renderImage(dataURL);
        };
      };

      reader.readAsDataURL(input.files[0]);
    }
    /**
     * @private _setupGlitchImage
     *
     * @desc Convert image file to a byte array
     * and place it in a local variable so that we can
     * manipulate it.
     *
     * @param {File} file of type png, jpeg
     * @param {Number} width
     * @param {Number} height
     */

  }, {
    key: "_setupGlitchImage",
    value: function _setupGlitchImage(image, width, height) {
      var canvas = document.createElement("canvas");
      var context;
      var imageData;
      canvas.width = width;
      canvas.height = height;
      context = canvas.getContext("2d");
      context.drawImage(image, 0, 0);
      imageData = context.getImageData(0, 0, width, height);
      this._imageInBytes = new Uint32Array(imageData.data.buffer);
    }
    /**
     * @private _clean
     *
     * @desc Clean the images in memory.
     */

  }, {
    key: "_clean",
    value: function _clean() {}
  }, {
    key: "_addImageToMemory",
    value: function _addImageToMemory(file) {}
  }, {
    key: "_removeImageFromMemory",
    value: function _removeImageFromMemory() {}
    /**
     * _renderImage
     * 
     * @desc Renders the image to the display.
     * @param {String} encoded data url
     */

  }, {
    key: "_renderImage",
    value: function _renderImage(dataURL) {
      var output = document.getElementById('output');
      output.src = dataURL;
    }
  }, {
    key: "redo",
    value: function redo() {}
  }, {
    key: "glitch",
    value: function glitch(iterations) {}
  }]);

  return Glitch;
}();

exports.default = Glitch;
module.exports = exports["default"];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glitch = _interopRequireDefault(__webpack_require__(/*! ./glitch.js */ "./src/glitch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Ready");
var _default = _glitch.default;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=glitchie.js.map