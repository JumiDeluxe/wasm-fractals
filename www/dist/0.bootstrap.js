(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/wasm-fractals/wasm_fractals.js":
/*!*****************************************************!*\
  !*** ./node_modules/wasm-fractals/wasm_fractals.js ***!
  \*****************************************************/
/*! exports provided: JuliaSet, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_fractals_bg.wasm */ \"./node_modules/wasm-fractals/wasm_fractals_bg.wasm\");\n/* harmony import */ var _wasm_fractals_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_fractals_bg.js */ \"./node_modules/wasm-fractals/wasm_fractals_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"JuliaSet\", function() { return _wasm_fractals_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"JuliaSet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_fractals_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///./node_modules/wasm-fractals/wasm_fractals.js?");

/***/ }),

/***/ "./node_modules/wasm-fractals/wasm_fractals_bg.js":
/*!********************************************************!*\
  !*** ./node_modules/wasm-fractals/wasm_fractals_bg.js ***!
  \********************************************************/
/*! exports provided: JuliaSet, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JuliaSet\", function() { return JuliaSet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_fractals_bg.wasm */ \"./node_modules/wasm-fractals/wasm_fractals_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = new Uint8Array();\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nclass JuliaSet {\n\n    static __wrap(ptr) {\n        const obj = Object.create(JuliaSet.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_juliaset_free\"](ptr);\n    }\n    /**\n    * @param {number} iterations\n    * @param {number} cx\n    * @param {number} cy\n    * @returns {JuliaSet}\n    */\n    static new(iterations, cx, cy) {\n        const ret = _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"juliaset_new\"](iterations, cx, cy);\n        return JuliaSet.__wrap(ret);\n    }\n    /**\n    */\n    render() {\n        _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"juliaset_render\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"juliaset_width\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"juliaset_height\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    hues() {\n        const ret = _wasm_fractals_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"juliaset_hues\"](this.ptr);\n        return ret;\n    }\n}\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/wasm-fractals/wasm_fractals_bg.js?");

/***/ }),

/***/ "./node_modules/wasm-fractals/wasm_fractals_bg.wasm":
/*!**********************************************************!*\
  !*** ./node_modules/wasm-fractals/wasm_fractals_bg.wasm ***!
  \**********************************************************/
/*! exports provided: memory, __wbg_juliaset_free, juliaset_new, juliaset_render, juliaset_width, juliaset_height, juliaset_hues */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_fractals_bg.js */ \"./node_modules/wasm-fractals/wasm_fractals_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./node_modules/wasm-fractals/wasm_fractals_bg.wasm?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);