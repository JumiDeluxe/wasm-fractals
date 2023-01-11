(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_fractals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-fractals */ \"./node_modules/wasm-fractals/wasm_fractals.js\");\n/* harmony import */ var wasm_fractals_wasm_fractals_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-fractals/wasm_fractals_bg */ \"./node_modules/wasm-fractals/wasm_fractals_bg.wasm\");\n\n\n\nlet fractal = wasm_fractals__WEBPACK_IMPORTED_MODULE_0__[\"JuliaSet\"].new(420, -0.7269, 0.1889);\nconst width = fractal.width();\nconst height = fractal.height();\nconsole.log(\"height \"+height+\" width \"+width);\n\nconst canvas = document.getElementById(\"fractal-canvas\");\nconst ctx = canvas.getContext(\"2d\");\n\nconst getIndex = (row, column) => {\n  return row * width + column;\n};\n\nconst hueToRgb = (hue) => {\n  let r = hue << 2;\n  let g = hue << 1;\n  let b = hue;\n\n  return \"rgb(\"+r+\", \"+g+\", \"+b+\")\";\n}\n\nconst drawFractal = () => {\n  fractal.render();\n  const huesPtr = fractal.hues();\n  const hues = new Uint8Array(wasm_fractals_wasm_fractals_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, huesPtr, width * height);\n\n  ctx.beginPath();\n\n  for (let row = 0; row < height; row++) {\n    for (let col = 0; col < width; col++) {\n      const idx = getIndex(row, col);\n      let hue = hues[idx];\n      ctx.fillStyle = hueToRgb(hue);\n      ctx.fillRect(col, row, 1, 1);\n    }\n  }\n\n  ctx.stroke();\n\n  console.log(\"drawn\");\n};\n\ndrawFractal();\n\nconst realInput = document.getElementById(\"real\");\nconst imagInput = document.getElementById(\"imag\");\n\nconst renderBtn = document.getElementById(\"render\");\nrenderBtn.addEventListener(\"click\", event => {\n  fractal = wasm_fractals__WEBPACK_IMPORTED_MODULE_0__[\"JuliaSet\"].new(\n    420,\n    realInput.value,\n    imagInput.value\n  );\n  drawFractal();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);