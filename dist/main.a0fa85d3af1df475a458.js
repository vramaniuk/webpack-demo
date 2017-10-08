webpackJsonp([1],{

/***/ "3Di9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(text) {
    console.log(text);
};


/***/ }),

/***/ "lVK7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print__ = __webpack_require__("3Di9");



function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['Hello', 'webpack'], ' ');
    element.onclick = __WEBPACK_IMPORTED_MODULE_1__print__["a" /* default */].bind(null, 'Hello webpack!');

    return element;
}

document.body.appendChild(component());


/***/ })

},["lVK7"]);