/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/aside.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/aside.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/close.svg */ "./src/assets/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/plus.svg */ "./src/assets/images/plus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/magnify.svg */ "./src/assets/images/magnify.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "aside {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: orange;\n    width: 500px;\n    min-height: 100vh;\n    transition: all 0.33s;\n    transform: translateX(-100%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px;\n}\n  \n  aside .search {\n    display: flex;\n  }\n  \n  aside .current-filters {\n    margin-top: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  aside .buttons {\n    margin: 20px;\n  }\n  \n  aside .unused-filters {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  aside .filter {\n    color: azure;\n    padding: 5px;\n    border-radius: 5px;\n    margin: 5px;\n    display: flex;\n  }\n  \n  aside .filter input[type=\"checkbox\"] {\n    appearance: none;\n    background-color: transparent;\n    width: 20px;\n    height: 20px;\n    background-size: cover;\n    border: none;\n    margin-right: 5px;\n    filter: invert(100%);\n  }\n  \n  aside .filter input[type=\"checkbox\"]:hover {\n    filter: invert(90%);\n  }\n  \n  aside .current-filters .filter {\n    background: rgb(84, 84, 161);\n  }\n  \n  aside .unused-filters .filter {\n    background: rgb(161, 127, 127);\n  }\n  \n  aside .current-filters input[type=\"checkbox\"] {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  }\n  \n  aside .unused-filters .filter input[type=\"checkbox\"] {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  }\n  \n  label[for=\"search-bar\"] {\n    display: block;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n  }\n  \n  aside .nothing-found {\n    display: none;\n    background: rgb(230, 116, 116);\n    color: rgb(30, 33, 38);\n    border-radius: 10px;\n    padding: 10px;\n    font-size: 2rem;\n  \n  }\n  \n  .open-aside {\n    background: purple;\n    width: 50px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 100px;\n    right: -50px;\n    z-index: 10;\n    transition: all 0.33s;\n  }\n  \n  .close-aside {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 40px;\n    height: 40px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-color: transparent;\n    border: none;\n    transition: all 0.33s;\n  }\n  \n  .close-aside:hover {\n    transform: rotate(90deg);\n  }\n  \n  aside .seraph {\n    width: 100%;\n    border-bottom: 4px dotted red;\n    margin: 10px 0 50px 0;\n  }\n  \n  @media screen and (max-width: 500px) {\n    aside {\n      top: auto;\n      padding: 10px;\n      width: 95%;\n      height: fit-content;\n    }\n  \n    aside .seraph {\n      margin: 20px;\n    }\n  }", "",{"version":3,"sources":["webpack://./src/css/aside.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,kBAAkB;IAClB,YAAY;IACZ,iBAAiB;IACjB,qBAAqB;IACrB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;EAEE;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,eAAe;IACf,uBAAuB;EACzB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,eAAe;IACf,uBAAuB;EACzB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;IACjB,oBAAoB;EACtB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,4BAA4B;EAC9B;;EAEA;IACE,8BAA8B;EAChC;;EAEA;IACE,yDAAmD;EACrD;;EAEA;IACE,yDAAkD;EACpD;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,qBAAqB;IACrB,yDAAqD;IACrD,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,eAAe;;EAEjB;;EAEA;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,WAAW;IACX,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,yDAAmD;IACnD,sBAAsB;IACtB,6BAA6B;IAC7B,YAAY;IACZ,qBAAqB;EACvB;;EAEA;IACE,wBAAwB;EAC1B;;EAEA;IACE,WAAW;IACX,6BAA6B;IAC7B,qBAAqB;EACvB;;EAEA;IACE;MACE,SAAS;MACT,aAAa;MACb,UAAU;MACV,mBAAmB;IACrB;;IAEA;MACE,YAAY;IACd;EACF","sourcesContent":["aside {\n    position: fixed;\n    top: 0;\n    left: 0;\n    background: orange;\n    width: 500px;\n    min-height: 100vh;\n    transition: all 0.33s;\n    transform: translateX(-100%);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 50px;\n}\n  \n  aside .search {\n    display: flex;\n  }\n  \n  aside .current-filters {\n    margin-top: 20px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  aside .buttons {\n    margin: 20px;\n  }\n  \n  aside .unused-filters {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n  \n  aside .filter {\n    color: azure;\n    padding: 5px;\n    border-radius: 5px;\n    margin: 5px;\n    display: flex;\n  }\n  \n  aside .filter input[type=\"checkbox\"] {\n    appearance: none;\n    background-color: transparent;\n    width: 20px;\n    height: 20px;\n    background-size: cover;\n    border: none;\n    margin-right: 5px;\n    filter: invert(100%);\n  }\n  \n  aside .filter input[type=\"checkbox\"]:hover {\n    filter: invert(90%);\n  }\n  \n  aside .current-filters .filter {\n    background: rgb(84, 84, 161);\n  }\n  \n  aside .unused-filters .filter {\n    background: rgb(161, 127, 127);\n  }\n  \n  aside .current-filters input[type=\"checkbox\"] {\n    background-image: url(\"../assets/images/close.svg\");\n  }\n  \n  aside .unused-filters .filter input[type=\"checkbox\"] {\n    background-image: url(\"../assets/images/plus.svg\");\n  }\n  \n  label[for=\"search-bar\"] {\n    display: block;\n    width: 30px;\n    height: 30px;\n    background-color: red;\n    background-image: url(\"../assets/images/magnify.svg\");\n    background-size: cover;\n  }\n  \n  aside .nothing-found {\n    display: none;\n    background: rgb(230, 116, 116);\n    color: rgb(30, 33, 38);\n    border-radius: 10px;\n    padding: 10px;\n    font-size: 2rem;\n  \n  }\n  \n  .open-aside {\n    background: purple;\n    width: 50px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 100px;\n    right: -50px;\n    z-index: 10;\n    transition: all 0.33s;\n  }\n  \n  .close-aside {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 40px;\n    height: 40px;\n    background-image: url(\"../assets/images/close.svg\");\n    background-size: cover;\n    background-color: transparent;\n    border: none;\n    transition: all 0.33s;\n  }\n  \n  .close-aside:hover {\n    transform: rotate(90deg);\n  }\n  \n  aside .seraph {\n    width: 100%;\n    border-bottom: 4px dotted red;\n    margin: 10px 0 50px 0;\n  }\n  \n  @media screen and (max-width: 500px) {\n    aside {\n      top: auto;\n      padding: 10px;\n      width: 95%;\n      height: fit-content;\n    }\n  \n    aside .seraph {\n      margin: 20px;\n    }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/burger.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/burger.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".burger {\n    --burger-color: rgb(85, 2, 2);\n    width: 30px;\n    height: 30px;\n    position: relative;\n    /* display: flex; */\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n\n.burger input[type=\"checkbox\"] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    appearance: none;\n    width: 100%;\n    height: 100%;\n}\n\n.burger .bars {\n    width: 100%;\n    height: 3px;\n    background: var(--burger-color);\n    z-index: 1;\n    border-radius: 5px;\n    pointer-events: none;\n    transition: all 0.33s ease-in-out;\n}\n\n.burger .bars::before,\n.burger .bars::after {\n    background: var(--burger-color);\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    border-radius: 5px;\n    transition: all 0.33s ease-in-out;\n}\n\n.burger .bars::before {\n    transform: translateY(-10px);\n}\n\n.burger .bars::after {\n    transform: translateY(10px);\n}\n\n.burger input[type=\"checkbox\"]:checked+.bars {\n    width: 0;\n    left: 50%;\n}\n\n.burger input[type=\"checkbox\"]:checked+.bars::before {\n    transform: rotate(45deg) translate(-10px, 10px);\n}\n\n.burger input[type=\"checkbox\"]:checked+.bars::after {\n    transform: rotate(-45deg) translate(-10px, -10px);\n}\n\n/* @media screen and (max-width: 480px) {\n    .burger {\n        display: block;\n    }\n} */", "",{"version":3,"sources":["webpack://./src/css/burger.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,gBAAgB;IAChB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,+BAA+B;IAC/B,UAAU;IACV,kBAAkB;IAClB,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;;IAEI,+BAA+B;IAC/B,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,iCAAiC;AACrC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,iDAAiD;AACrD;;AAEA;;;;GAIG","sourcesContent":[".burger {\n    --burger-color: rgb(85, 2, 2);\n    width: 30px;\n    height: 30px;\n    position: relative;\n    /* display: flex; */\n    align-items: center;\n    justify-content: center;\n    display: none;\n}\n\n.burger input[type=\"checkbox\"] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    appearance: none;\n    width: 100%;\n    height: 100%;\n}\n\n.burger .bars {\n    width: 100%;\n    height: 3px;\n    background: var(--burger-color);\n    z-index: 1;\n    border-radius: 5px;\n    pointer-events: none;\n    transition: all 0.33s ease-in-out;\n}\n\n.burger .bars::before,\n.burger .bars::after {\n    background: var(--burger-color);\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 3px;\n    border-radius: 5px;\n    transition: all 0.33s ease-in-out;\n}\n\n.burger .bars::before {\n    transform: translateY(-10px);\n}\n\n.burger .bars::after {\n    transform: translateY(10px);\n}\n\n.burger input[type=\"checkbox\"]:checked+.bars {\n    width: 0;\n    left: 50%;\n}\n\n.burger input[type=\"checkbox\"]:checked+.bars::before {\n    transform: rotate(45deg) translate(-10px, 10px);\n}\n\n.burger input[type=\"checkbox\"]:checked+.bars::after {\n    transform: rotate(-45deg) translate(-10px, -10px);\n}\n\n/* @media screen and (max-width: 480px) {\n    .burger {\n        display: block;\n    }\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/menu.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".menu {\n    padding-top: 75px;\n    padding-bottom: 50px;\n}\n\n.menu-section {\n    background: rgba(11, 35, 66, 0.5);\n    margin: 20px;\n    padding: 20px;\n    border-radius: 20px;\n}\n\n.menu-section>.seraph {\n    border-bottom: 3px dotted azure;\n    margin: 20px 0;\n}\n\n.menu-items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.menu-item {\n    background: rgb(240, 244, 246);\n    border-radius: 10px;\n    padding: 10px;\n    width: 500px;\n    margin: 10px;\n    position: relative;\n}\n\n.menu-item>.seraph {\n    margin: 10px;\n    border-bottom: 2px dotted black;\n}\n\n.menu-item .details {\n    display: flex;\n    align-items: center;\n}\n\n.menu-item h2 {\n    color: rgb(233, 202, 26);\n    text-shadow: 1px 1px 1px rgb(212, 20, 190);\n}\n\n.menu-item img {\n    width: 200px;\n    height: 200px;\n    border-radius: 10px;\n    margin-right: 20px;\n    object-fit: cover;\n}\n\n.menu-item .description {\n    color: gray;\n}\n\n.menu-item .price {\n    color: rgb(233, 202, 26);\n    text-shadow: 1px 1px 1px rgb(212, 20, 190);\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    font-size: 1.5rem;\n}\n\n.menu-section>h2 {\n    font-size: 3rem;\n    color: azure;\n}\n\n.menu-item {\n    border: none;\n}\n\n@media screen and (max-width: 600px) {\n    .menu-item {\n        width: 300px;\n    }\n\n    .menu-item .details {\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .menu-item .price {\n        position: static;\n        width: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/menu.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,+BAA+B;IAC/B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,wBAAwB;IACxB,0CAA0C;IAC1C,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI;QACI,YAAY;IAChB;;IAEA;QACI,sBAAsB;QACtB,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;QAChB,WAAW;IACf;AACJ","sourcesContent":[".menu {\n    padding-top: 75px;\n    padding-bottom: 50px;\n}\n\n.menu-section {\n    background: rgba(11, 35, 66, 0.5);\n    margin: 20px;\n    padding: 20px;\n    border-radius: 20px;\n}\n\n.menu-section>.seraph {\n    border-bottom: 3px dotted azure;\n    margin: 20px 0;\n}\n\n.menu-items {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.menu-item {\n    background: rgb(240, 244, 246);\n    border-radius: 10px;\n    padding: 10px;\n    width: 500px;\n    margin: 10px;\n    position: relative;\n}\n\n.menu-item>.seraph {\n    margin: 10px;\n    border-bottom: 2px dotted black;\n}\n\n.menu-item .details {\n    display: flex;\n    align-items: center;\n}\n\n.menu-item h2 {\n    color: rgb(233, 202, 26);\n    text-shadow: 1px 1px 1px rgb(212, 20, 190);\n}\n\n.menu-item img {\n    width: 200px;\n    height: 200px;\n    border-radius: 10px;\n    margin-right: 20px;\n    object-fit: cover;\n}\n\n.menu-item .description {\n    color: gray;\n}\n\n.menu-item .price {\n    color: rgb(233, 202, 26);\n    text-shadow: 1px 1px 1px rgb(212, 20, 190);\n    position: absolute;\n    bottom: 20px;\n    right: 20px;\n    font-size: 1.5rem;\n}\n\n.menu-section>h2 {\n    font-size: 3rem;\n    color: azure;\n}\n\n.menu-item {\n    border: none;\n}\n\n@media screen and (max-width: 600px) {\n    .menu-item {\n        width: 300px;\n    }\n\n    .menu-item .details {\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .menu-item .price {\n        position: static;\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/kolkerbrush-regular-webfont.woff2 */ "./src/assets/fonts/kolkerbrush-regular-webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/kolkerbrush-regular-webfont.woff */ "./src/assets/fonts/kolkerbrush-regular-webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/background.jpg */ "./src/assets/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: Kolker;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody {\n    position: relative;\n    min-height: 100vh;\n    height: 100%;\n}\n\nnav {\n    background: rgb(241, 189, 105);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nnav .seres img {\n    width: 75px;\n}\n\nnav .logo {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    font-family: Kolker;\n    letter-spacing: .5rem;\n}\n\nnav .links {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nnav .links>* {\n    margin: 20px;\n}\n\nnav .links a {\n    color: rgb(160, 17, 17);\n    padding: 5px;\n    border: 4px solid rgb(2, 21, 55);\n    border-radius: 10px;\n    font-size: 1.5rem;\n    text-decoration: none;\n    transition: all .33s;\n}\n\nnav #active {\n    background: rgb(236, 236, 48);\n    color: azure;\n    text-shadow: 1px 1px 2px rgb(103, 5, 5);\n    border-bottom-color: gold;\n    border-right-color: gold;\n    border-top-color: rgb(255, 255, 121);\n    border-left-color: rgb(255, 255, 121);\n}\n\nnav .links a:hover {\n    color: azure;\n    background: rgb(2, 21, 55);\n}\n\nnav .links a:active {\n    text-decoration: underline;\n}\n\nmain {\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    /* z-index: -2; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nmain .text {\n    background: rgb(3, 18, 47, .5);\n    color: azure;\n    border-radius: 10px;\n    padding: 20px;\n    width: 50%;\n    margin: 20px;\n    text-align: center;\n}\n\nmain .text h2 {\n    font-size: 5rem;\n}\n\nmain .info {\n    display: flex;\n    justify-content: space-around;\n    width: 80%;\n}\n\nmain .info > div {\n    padding: 20px;\n    min-width: 250px;\n    border-radius: 10px;\n}\n\nmain .info .hours {\n    background: rgb(3, 18, 47, .5);\n    color: azure;\n    font-size: 1.15rem;\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n}\n\nmain .hours p {\n    display: flex;\n    justify-content: space-between;\n}\n\nmain .hours span {\n    margin-left: 10px;\n}\n\nmain .hours img {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3; \n    width: 30px;\n    margin-right: 10px;\n    filter: invert(88%) sepia(9%) saturate(1076%) hue-rotate(287deg) brightness(98%) contrast(92%);\n}\n\nmain .location {\n    background: rgb(3, 18, 47, .5);\n    color: azure;\n    display: flex;\n    align-items: center;\n}\n\nmain .location img {\n    width: 30px;\n    margin-right: 10px;\n    filter: invert(88%) sepia(9%) saturate(1076%) hue-rotate(287deg) brightness(98%) contrast(92%);\n}\n\nmain .company-logo {\n    background: rgba(255, 205, 199, 0.5);\n    width: 210px;\n    border-radius: 10px;;\n    padding: 10px;\n    filter: invert(100%);\n}\n\nfooter {\n    background: rgb(241, 189, 105);\n    position: absolute;\n    width: 100%;\n    height: 50px;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@media screen and (max-width: 1000px) {\n    nav .links>* {\n        margin: 10px;\n    }\n}\n\n@media screen and (max-width: 900px) {\n    body {\n        z-index: -1;\n    }\n    \n    .burger {\n        display: flex;\n    }\n\n    nav {\n        position: relative;\n        display: block;\n    }\n\n    nav .logo {\n        z-index: 1;\n    }\n\n    nav .links {\n        background: rgb(241, 189, 105);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position: absolute;\n        width: 100%;\n        z-index: -1;\n        transform: translateY(-100%);\n        transition: transform .33s;\n    }\n\n    nav .links a {\n        color: rgb(160, 17, 17);\n        padding: 0;\n        border: none;\n        font-size: 1.5rem;\n        text-decoration: none;\n    }\n\n    nav .links a:hover {\n        color: black;\n        background: transparent;\n        text-decoration: underline;\n    }\n\n    nav #active {\n        background: transparent;\n        text-decoration: underline;\n    }\n\n    nav .seres {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 10px;\n    }\n\n    main {\n        background-position: 0;\n    }\n\n    main .text {\n        width: 90%;\n    }\n\n    main .text h2 {\n        font-size: 2rem;\n    }\n\n    main .info {\n        flex-direction: column;\n    }\n\n    main .info > div {\n        margin-bottom: 20px;\n    }\n\n    main .company-logo {\n        margin-bottom: 50px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"AAAA;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB;8DAC0E;IAC1E,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,gCAAgC;IAChC,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;IACrB,oBAAoB;AACxB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,uCAAuC;IACvC,yBAAyB;IACzB,wBAAwB;IACxB,oCAAoC;IACpC,qCAAqC;AACzC;;AAEA;IACI,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,yDAAwD;IACxD,sBAAsB;IACtB,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,UAAU;IACV,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,UAAU;AACd;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,gCAAgC;IAChC,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,8FAA8F;AAClG;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,8FAA8F;AAClG;;AAEA;IACI,oCAAoC;IACpC,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,8BAA8B;IAC9B,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;QACI,YAAY;IAChB;AACJ;;AAEA;IACI;QACI,WAAW;IACf;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,kBAAkB;QAClB,cAAc;IAClB;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,8BAA8B;QAC9B,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,kBAAkB;QAClB,WAAW;QACX,WAAW;QACX,4BAA4B;QAC5B,0BAA0B;IAC9B;;IAEA;QACI,uBAAuB;QACvB,UAAU;QACV,YAAY;QACZ,iBAAiB;QACjB,qBAAqB;IACzB;;IAEA;QACI,YAAY;QACZ,uBAAuB;QACvB,0BAA0B;IAC9B;;IAEA;QACI,uBAAuB;QACvB,0BAA0B;IAC9B;;IAEA;QACI,aAAa;QACb,8BAA8B;QAC9B,mBAAmB;QACnB,aAAa;IACjB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,mBAAmB;IACvB;;IAEA;QACI,mBAAmB;IACvB;AACJ","sourcesContent":["*,\n*::before,\n*::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: Kolker;\n    src: url(\"../assets/fonts/kolkerbrush-regular-webfont.woff2\") format('woff2'),\n        url(\"../assets/fonts/kolkerbrush-regular-webfont.woff\") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\nbody {\n    position: relative;\n    min-height: 100vh;\n    height: 100%;\n}\n\nnav {\n    background: rgb(241, 189, 105);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nnav .seres img {\n    width: 75px;\n}\n\nnav .logo {\n    display: flex;\n    align-items: center;\n    font-size: 2rem;\n    font-family: Kolker;\n    letter-spacing: .5rem;\n}\n\nnav .links {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\nnav .links>* {\n    margin: 20px;\n}\n\nnav .links a {\n    color: rgb(160, 17, 17);\n    padding: 5px;\n    border: 4px solid rgb(2, 21, 55);\n    border-radius: 10px;\n    font-size: 1.5rem;\n    text-decoration: none;\n    transition: all .33s;\n}\n\nnav #active {\n    background: rgb(236, 236, 48);\n    color: azure;\n    text-shadow: 1px 1px 2px rgb(103, 5, 5);\n    border-bottom-color: gold;\n    border-right-color: gold;\n    border-top-color: rgb(255, 255, 121);\n    border-left-color: rgb(255, 255, 121);\n}\n\nnav .links a:hover {\n    color: azure;\n    background: rgb(2, 21, 55);\n}\n\nnav .links a:active {\n    text-decoration: underline;\n}\n\nmain {\n    width: 100%;\n    height: 100%;\n    background-image: url(\"../assets/images/background.jpg\");\n    background-size: cover;\n    background-position: center;\n    position: relative;\n    /* z-index: -2; */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nmain .text {\n    background: rgb(3, 18, 47, .5);\n    color: azure;\n    border-radius: 10px;\n    padding: 20px;\n    width: 50%;\n    margin: 20px;\n    text-align: center;\n}\n\nmain .text h2 {\n    font-size: 5rem;\n}\n\nmain .info {\n    display: flex;\n    justify-content: space-around;\n    width: 80%;\n}\n\nmain .info > div {\n    padding: 20px;\n    min-width: 250px;\n    border-radius: 10px;\n}\n\nmain .info .hours {\n    background: rgb(3, 18, 47, .5);\n    color: azure;\n    font-size: 1.15rem;\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n}\n\nmain .hours p {\n    display: flex;\n    justify-content: space-between;\n}\n\nmain .hours span {\n    margin-left: 10px;\n}\n\nmain .hours img {\n    grid-column: 1 / 2;\n    grid-row: 1 / 3; \n    width: 30px;\n    margin-right: 10px;\n    filter: invert(88%) sepia(9%) saturate(1076%) hue-rotate(287deg) brightness(98%) contrast(92%);\n}\n\nmain .location {\n    background: rgb(3, 18, 47, .5);\n    color: azure;\n    display: flex;\n    align-items: center;\n}\n\nmain .location img {\n    width: 30px;\n    margin-right: 10px;\n    filter: invert(88%) sepia(9%) saturate(1076%) hue-rotate(287deg) brightness(98%) contrast(92%);\n}\n\nmain .company-logo {\n    background: rgba(255, 205, 199, 0.5);\n    width: 210px;\n    border-radius: 10px;;\n    padding: 10px;\n    filter: invert(100%);\n}\n\nfooter {\n    background: rgb(241, 189, 105);\n    position: absolute;\n    width: 100%;\n    height: 50px;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n@media screen and (max-width: 1000px) {\n    nav .links>* {\n        margin: 10px;\n    }\n}\n\n@media screen and (max-width: 900px) {\n    body {\n        z-index: -1;\n    }\n    \n    .burger {\n        display: flex;\n    }\n\n    nav {\n        position: relative;\n        display: block;\n    }\n\n    nav .logo {\n        z-index: 1;\n    }\n\n    nav .links {\n        background: rgb(241, 189, 105);\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        position: absolute;\n        width: 100%;\n        z-index: -1;\n        transform: translateY(-100%);\n        transition: transform .33s;\n    }\n\n    nav .links a {\n        color: rgb(160, 17, 17);\n        padding: 0;\n        border: none;\n        font-size: 1.5rem;\n        text-decoration: none;\n    }\n\n    nav .links a:hover {\n        color: black;\n        background: transparent;\n        text-decoration: underline;\n    }\n\n    nav #active {\n        background: transparent;\n        text-decoration: underline;\n    }\n\n    nav .seres {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding: 10px;\n    }\n\n    main {\n        background-position: 0;\n    }\n\n    main .text {\n        width: 90%;\n    }\n\n    main .text h2 {\n        font-size: 2rem;\n    }\n\n    main .info {\n        flex-direction: column;\n    }\n\n    main .info > div {\n        margin-bottom: 20px;\n    }\n\n    main .company-logo {\n        margin-bottom: 50px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".check-container {\n  --width: 52px;\n  --height: 28px;\n  --span-radius: 20px;\n  --padding: calc(0.5 * (var(--height) - var(--span-radius)));\n  --off-bg: rgb(201 213 213);\n  --on-bg: rgb(24, 182, 103);\n  --off-span-bg: rgb(122 115 115);\n  --on-span-bg: rgb(246, 250, 255);\n  position: relative;\n  border-radius: 16px;\n  width: var(--width);\n  height: var(--height);\n}\n\n.check-container * {\n  transition: all 0.33s;\n}\n\n.check-container input[type=\"checkbox\"] {\n  background: var(--off-bg);\n  border-radius: var(--height);\n  appearance: none;\n  width: 100%;\n  height: 100%;\n}\n\n.check-container span {\n  background: var(--off-span-bg);\n  position: absolute;\n  width: var(--span-radius);\n  height: var(--span-radius);\n  top: var(--padding);\n  left: var(--padding);\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.check-container input[type=\"checkbox\"]:checked {\n  background: var(--on-bg);\n}\n\n.check-container input[type=\"checkbox\"]:checked + span {\n  transform: translateX(\n    calc(var(--width) - 2 * var(--padding) - var(--span-radius))\n  );\n  background: var(--on-span-bg);\n}\n", "",{"version":3,"sources":["webpack://./src/css/toggle.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,2DAA2D;EAC3D,0BAA0B;EAC1B,0BAA0B;EAC1B,+BAA+B;EAC/B,gCAAgC;EAChC,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,gBAAgB;EAChB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,yBAAyB;EACzB,0BAA0B;EAC1B,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;;GAEC;EACD,6BAA6B;AAC/B","sourcesContent":[".check-container {\n  --width: 52px;\n  --height: 28px;\n  --span-radius: 20px;\n  --padding: calc(0.5 * (var(--height) - var(--span-radius)));\n  --off-bg: rgb(201 213 213);\n  --on-bg: rgb(24, 182, 103);\n  --off-span-bg: rgb(122 115 115);\n  --on-span-bg: rgb(246, 250, 255);\n  position: relative;\n  border-radius: 16px;\n  width: var(--width);\n  height: var(--height);\n}\n\n.check-container * {\n  transition: all 0.33s;\n}\n\n.check-container input[type=\"checkbox\"] {\n  background: var(--off-bg);\n  border-radius: var(--height);\n  appearance: none;\n  width: 100%;\n  height: 100%;\n}\n\n.check-container span {\n  background: var(--off-span-bg);\n  position: absolute;\n  width: var(--span-radius);\n  height: var(--span-radius);\n  top: var(--padding);\n  left: var(--padding);\n  border-radius: 50%;\n  pointer-events: none;\n}\n\n.check-container input[type=\"checkbox\"]:checked {\n  background: var(--on-bg);\n}\n\n.check-container input[type=\"checkbox\"]:checked + span {\n  transform: translateX(\n    calc(var(--width) - 2 * var(--padding) - var(--span-radius))\n  );\n  background: var(--on-span-bg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/aside.css":
/*!***************************!*\
  !*** ./src/css/aside.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./aside.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/aside.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/burger.css":
/*!****************************!*\
  !*** ./src/css/burger.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./burger.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/burger.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_burger_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/menu.css":
/*!**************************!*\
  !*** ./src/css/menu.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/toggle.css":
/*!****************************!*\
  !*** ./src/css/toggle.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./toggle.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/toggle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_toggle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/burger.js":
/*!***********************!*\
  !*** ./src/burger.js ***!
  \***********************/
/***/ (() => {

const burger = document.querySelector(".burger input[type='checkbox']");
const links = document.querySelector(".links");

burger.addEventListener("click", () => {
    if (burger.checked)
        links.style.transform = "translateY(0)";
    else    
        links.style.transform = "translateY(-100%)";
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        links.style.setProperty("transform", "translateY(0)");
        burger.checked = true;
    }
});

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeObj": () => (/* binding */ homeObj)
/* harmony export */ });
const homeObj = (
    () => {
        const text = document.createElement("div");
        const info = document.createElement("div");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const hours = document.createElement("div");
        const clockImg = document.createElement("img");
        const intraweek = document.createElement("p");
        const intraSpan1 = document.createElement("span")
        const intraSpan2 = document.createElement("span");
        const weekendSpan1 = document.createElement("span")
        const weekendSpan2 = document.createElement("span")
        const weekend = document.createElement("p");
        const location = document.createElement("div")
        const locationImg = document.createElement("img");
        const locationP = document.createElement("p");

        text.append(h2);
        text.append(p)
        info.append(hours);
        info.append(location);
        hours.append(clockImg);
        hours.append(intraweek);
        hours.append(weekend);
        location.append(locationImg);
        location.append(locationP);
        intraweek.append(intraSpan1);
        intraweek.append(intraSpan2);
        weekend.append(weekendSpan1);
        weekend.append(weekendSpan2);

        h2.innerText = "Lorem ipsum dolor sit amet.";
        p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus consequatur ipsam est? Distinctio impedit vel voluptas aperiam animi corrupti facere veritatis suscipit assumenda dolores voluptate eos praesentium, velit enim officiis error illum! Aliquid similique, quaerat tempore fugiat omnis maiores amet. Recusandae culpa nisi amet suscipit adipisci voluptates eligendi nostrum. Q Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, hic! uasi quas molestias aspernatur laudantium excepturi! Incidunt!";
        clockImg.src = "./clock.svg";
        intraSpan1.innerText = "Mon - Thu :";
        intraSpan2.innerText = "07:00 - 20:00";
        weekendSpan1.innerText = "Fri - Sun :";
        weekendSpan2.innerText = "07:00 - 13:00";
        locationImg.src = "./location.svg";
        locationP.innerText = "4235 Brakel Lake Ave Sneedville, CA 23642";
        img.src = "./gnu.svg";

        text.classList.add("text");
        info.classList.add("info");
        img.classList.add("company-logo");
        hours.classList.add("hours");
        intraweek.classList.add("intraweek");
        weekend.classList.add("weekend");
        location.classList.add("location");

        function switch_to_home(main) {
            main.style.display = "flex";
            main.style.flexDirection = "column";
            main.style.alignItems = "column";
            main.innerHTML = '';
            main.append(text);
            main.append(info);
            main.append(img)
        }
        return { switch_to_home }
    }
)();

/***/ }),

/***/ "./src/imports.js":
/*!************************!*\
  !*** ./src/imports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/normalize.css */ "./src/css/normalize.css");
/* harmony import */ var _css_burger_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/burger.css */ "./src/css/burger.css");
/* harmony import */ var _css_toggle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/toggle.css */ "./src/css/toggle.css");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_aside_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/aside.css */ "./src/css/aside.css");
/* harmony import */ var _css_menu_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/menu.css */ "./src/css/menu.css");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./burger.js */ "./src/burger.js");
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_gnu_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/gnu.svg */ "./src/assets/images/gnu.svg");
/* harmony import */ var _assets_images_background_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/background.jpg */ "./src/assets/images/background.jpg");
/* harmony import */ var _assets_images_clock_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/clock.svg */ "./src/assets/images/clock.svg");
/* harmony import */ var _assets_images_location_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/location.svg */ "./src/assets/images/location.svg");
/* harmony import */ var _assets_images_close_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/close.svg */ "./src/assets/images/close.svg");
/* harmony import */ var _assets_images_magnify_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/magnify.svg */ "./src/assets/images/magnify.svg");
/* harmony import */ var _assets_images_plus_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/plus.svg */ "./src/assets/images/plus.svg");



















/***/ }),

/***/ "./src/main_height.js":
/*!****************************!*\
  !*** ./src/main_height.js ***!
  \****************************/
/***/ (() => {


const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

window.addEventListener("resize", resize_main);

function resize_main() {
    const headStyle = window.getComputedStyle(header).getPropertyValue("height");
    const footerStyle = window.getComputedStyle(footer).getPropertyValue("height");
    main.style.setProperty("min-height", `calc(${window.innerHeight}px - ${headStyle} - ${footerStyle})`);
}

resize_main();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuObj": () => (/* binding */ menuObj)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/utilities.js");


const menuObj = (
    () => {
        const sections = [
            {
                name: "Night",
                items: [
                    {
                        name: "1 2 3",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "1",
                            "2",
                            "3",
                        ]
                    },
                    {
                        name: "2 4 6 8 10",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "2",
                            "4",
                            "6",
                            "8",
                            "10",
                        ]
                    },
                    {
                        name: "3 6 9 12 15 18",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "3",
                            "6",
                            "9",
                            "12",
                            "15",
                            "18"
                        ]
                    },
                ]
            },
            {
                name: "Blue Sky",
                items: [
                    {
                        name: "8 12 3 7 18 0",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "8",
                            "12",
                            "3",
                            "7",
                            "18",
                            "0"
                        ]
                    },
                    {
                        name: "1 9 0 5",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "1",
                            "9",
                            "0",
                            "5",
                        ]
                    },
                    {
                        name: "3 5 8 10 13 17",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "3",
                            "5",
                            "8",
                            "10",
                            "13",
                            "17"
                        ]
                    },
                    {
                        name: "0 5 16 19",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "0",
                            "5",
                            "16",
                            "19",
                        ]
                    },
                    {
                        name: "1 2 3 4 5 6",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6"
                        ]
                    },
                ]
            },
            {
                name: "Cityscape",
                items: [
                    {
                        name: "7 8 9 10 11 12",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "7",
                            "8",
                            "9",
                            "10",
                            "11",
                            "12"
                        ]
                    },
                    {
                        name: "13 14 15 16 17 18",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "13",
                            "14",
                            "15",
                            "16",
                            "17",
                            "18"
                        ]
                    },
                    {
                        name: "8 10 11 13",
                        src: "./background.jpg",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat necessitatibus dolorum quas e Lorem ipsum lorem2  dolor sit amet consectetur adipisicing elit. Ipsam, itaque. ligendi eum numquam aliquid laudantium dolorem magnam cupiditate",
                        price: "$24.32",
                        filters: [
                            "8",
                            "10",
                            "11",
                            "13",
                        ]
                    },
                ]
            }
        ];
        const filterData = [
            { name: 0, tag: 0 },
            { name: 1, tag: 1 },
            { name: 2, tag: 2 },
            { name: 3, tag: 3 },
            { name: 4, tag: 4 },
            { name: 5, tag: 5 },
            { name: 6, tag: 6 },
            { name: 7, tag: 7 },
            { name: 8, tag: 8 },
            { name: 9, tag: 9 },
            { name: 10, tag: 10 },
            { name: 11, tag: 11 },
            { name: 12, tag: 12 },
            { name: 13, tag: 13 },
            { name: 14, tag: 14 },
            { name: 15, tag: 15 },
            { name: 16, tag: 16 },
            { name: 17, tag: 17 },
            { name: 18, tag: 18 },
            { name: 19, tag: 19 },

        ];
        const menu = create_menu(sections);
        const aside = create_aside(filterData);

        function create_menu(sections) {
            const menu = document.createElement("div");

            for (let secs of sections) {
                const section = document.createElement("div");
                const sectionName = document.createElement("h2");
                const itemsContainer = document.createElement("div");
                const seraph = document.createElement("div");

                for (let it of secs.items) {
                    const item = document.createElement("div");
                    const itemName = document.createElement("h2");
                    const seraphItem = document.createElement("div");
                    const itemInfo = document.createElement("div");
                    const itemImg = document.createElement("img");
                    const itemDescription = document.createElement("div");
                    const description = document.createElement("p");
                    const price = document.createElement("p");

                    item.append(itemName);
                    item.append(seraphItem);
                    item.append(itemInfo);
                    itemInfo.append(itemImg);
                    itemInfo.append(itemDescription);
                    itemDescription.append(description);
                    itemDescription.append(price);

                    item.classList.add("menu-item");
                    seraphItem.classList.add("seraph");
                    itemInfo.classList.add("details");
                    itemDescription.classList.add("item-description");
                    description.classList.add("description");
                    price.classList.add("price");

                    itemName.innerText = it.name;
                    itemImg.src = it.src;
                    description.innerText = it.description;
                    price.innerText = it.price;
                    item.setAttribute("data-filter", it.filters.join(' '));

                    itemsContainer.append(item);
                }

                section.append(sectionName);
                section.append(itemsContainer);
                section.append(seraph);

                section.classList.add("menu-section");
                itemsContainer.classList.add("menu-items");
                seraph.classList.add("seraph");

                sectionName.innerText = secs.name;

                menu.classList.add("menu");
                menu.append(section);
            }
            return menu;
        }

        function create_aside(filterData) {
            const aside = document.createElement("aside");
            const openAside = document.createElement("button");
            const closeAside = document.createElement("button");
            const search = document.createElement("div");
            const searchLabel = document.createElement("label");
            const searchBar = document.createElement("input");
            const currentFilters = document.createElement("div");
            const buttons = document.createElement("div");
            const clearFilters = document.createElement("button");
            const applyFilters = document.createElement("button");
            const seraph = document.createElement("div");
            const unusedFilters = document.createElement("div");
            const nothing = document.createElement("h3");
            let filters;

            aside.append(openAside);
            aside.append(closeAside);
            aside.append(search);
            aside.append(currentFilters);
            aside.append(buttons);
            aside.append(seraph);
            aside.append(unusedFilters);
            aside.append(nothing);
            search.append(searchLabel);
            search.append(searchBar);
            buttons.append(clearFilters);
            buttons.append(applyFilters);

            openAside.classList.add("open-aside");
            closeAside.classList.add("close-aside");
            closeAside.classList.add("close-aside");
            search.classList.add("search");
            currentFilters.classList.add("current-filters");
            buttons.classList.add("buttons");
            clearFilters.classList.add("clear-filters");
            applyFilters.classList.add("apply-filters");
            seraph.classList.add("seraph");
            unusedFilters.classList.add("unused-filters");
            nothing.classList.add("nothing-found");

            openAside.innerText = "Filters";
            clearFilters.innerText = "Clear Filters";
            applyFilters.innerText = "Apply Filters";
            nothing.innerText = "No Filters Found!";
            searchBar.setAttribute("type", "search");
            searchBar.setAttribute("name", "search-item");
            searchLabel.setAttribute("for", "search-bar");

            filters = [];
            for (let filter of filterData) {
                let newFilter;

                newFilter = add_filter(filter.name, filter.tag, currentFilters, unusedFilters);
                unusedFilters.append(newFilter);
                filters.push(newFilter);
            }

            openAside.addEventListener("click", () => {
                aside.style.transform = "translateX(0)";
                openAside.style.opacity = 0;
            });

            closeAside.addEventListener("click", () => {
                aside.style.transform = "translateX(-100%)";
                openAside.style.opacity = 1;
            });

            clearFilters.addEventListener("click", () => {
                let items;

                items = document.querySelectorAll(".menu-item");
                items.forEach(item => item.style.display = "block");
                hide_empty_sections();
                filters.forEach(filter => {
                    let checkbox;

                    checkbox = filter.querySelector("input[type='checkbox']");
                    if (checkbox.checked)
                        checkbox.click();
                });
            });

            applyFilters.addEventListener("click", () => {
                let items, toHide;

                items = document.querySelectorAll(".menu-item");
                toHide = [];
                items.forEach(item => {
                    let currents, itemTags;

                    currents = [...currentFilters.querySelectorAll(".filter")].map(filter => filter.getAttribute("data-filter"));
                    if (!currents.length) {
                        item.style.display = "block";
                        return;
                    }
                    itemTags = item.getAttribute("data-filter").split(' ');

                    if (!(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.intersect)(currents, itemTags))
                        toHide.push(item);
                    else
                        item.style.display = "block";
                });
                toHide.forEach(item => item.style.display = "none");
                hide_empty_sections();
            });

            search.addEventListener("input", () => {
                if (!searchBar.value.trim()) {
                    filters.forEach(filter => filter.style.display = "flex");
                    nothing.style.display = "none";
                    return;
                }

                let count;

                count = 0;
                filters.forEach(filter => {
                    if (filter.querySelector("input").checked)
                        return;

                    let name;

                    name = filter.querySelector("p").innerText.toLowerCase();
                    if ((0,_utilities__WEBPACK_IMPORTED_MODULE_0__.is_substring)(searchBar.value.toLowerCase(), name)) {
                        filter.style.display = "flex";
                        count++;
                    }
                    else
                        filter.style.display = "none";

                    if (count) {
                        nothing.style.display = "none";
                    }
                    else
                        nothing.style.display = "block";
                });
            });

            function hide_empty_sections() {
                let sections, toHide;

                sections = document.querySelectorAll(".menu-section");
                toHide = [];
                sections.forEach(section => {
                    let items;

                    items = [...section.querySelectorAll(".menu-item")];
                    if (items.every(item => {
                        let style;

                        style = window.getComputedStyle(item);
                        return style.getPropertyValue("display") == "none";
                    }))
                        toHide.push(section);
                    section.style.display = "block";
                });
                toHide.forEach(section => section.style.display = "none");
            }

            function add_filter(name, tag, currentContainer, unusedContainer) {
                const filter = document.createElement("div");
                const check = document.createElement("input");
                const para = document.createElement("p");

                filter.append(check);
                filter.append(para);

                filter.classList.add("filter");

                filter.setAttribute("data-filter", tag);
                check.setAttribute("type", "checkbox");
                para.innerText = name;

                check.addEventListener("click", () => {
                    filter.parentElement.removeChild(filter);
                    if (check.checked)
                        currentContainer.append(filter);
                    else
                        unusedContainer.append(filter);
                });

                return filter;
            }

            return aside;
        }

        function switch_to_menu(main) {
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            main.style.display = "block";
            main.innerHTML = '';
            main.append(menu);
            main.append(aside);
        }

        return { switch_to_menu }
    }
)();

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "intersect": () => (/* binding */ intersect),
/* harmony export */   "is_substring": () => (/* binding */ is_substring)
/* harmony export */ });
/**
 * This function checks if str1 is a substring of str2.
 * @param {string} str1 First String
 * @param {string} str2 Second String
 */
 function is_substring(str1, str2) {
    for (let i = 0; i < str2.length; i++)
        if (str2[i] == str1[0])
            for (let j = 0; j < str1.length; j++) {
                if (str1[j] != str2[i + j])
                    break;
                else if (j == str1.length - 1)
                    return true;
            }
    return false;
}

/**
 * This function determines if there's at least one element common to both arrays.
 * @param {array} arr1 an array
 * @param {array} arr2 an array
 */
function intersect(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++)
        for (let j = 0; j < arr2.length; j++)
            if (arr1[i] == arr2[j])
                return true;
    return false;
}

/***/ }),

/***/ "./src/assets/fonts/kolkerbrush-regular-webfont.woff":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/kolkerbrush-regular-webfont.woff ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "kolkerbrush-regular-webfont.woff";

/***/ }),

/***/ "./src/assets/fonts/kolkerbrush-regular-webfont.woff2":
/*!************************************************************!*\
  !*** ./src/assets/fonts/kolkerbrush-regular-webfont.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "kolkerbrush-regular-webfont.woff2";

/***/ }),

/***/ "./src/assets/images/background.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/background.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "background.jpg";

/***/ }),

/***/ "./src/assets/images/clock.svg":
/*!*************************************!*\
  !*** ./src/assets/images/clock.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "clock.svg";

/***/ }),

/***/ "./src/assets/images/close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "close.svg";

/***/ }),

/***/ "./src/assets/images/gnu.svg":
/*!***********************************!*\
  !*** ./src/assets/images/gnu.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "gnu.svg";

/***/ }),

/***/ "./src/assets/images/location.svg":
/*!****************************************!*\
  !*** ./src/assets/images/location.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "location.svg";

/***/ }),

/***/ "./src/assets/images/magnify.svg":
/*!***************************************!*\
  !*** ./src/assets/images/magnify.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "magnify.svg";

/***/ }),

/***/ "./src/assets/images/plus.svg":
/*!************************************!*\
  !*** ./src/assets/images/plus.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "plus.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports.js */ "./src/imports.js");
/* harmony import */ var _main_height_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main_height.js */ "./src/main_height.js");
/* harmony import */ var _main_height_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_height_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");






const links = document.querySelectorAll(".links a");
const main = document.querySelector("main");
// const homeObj = (
//     () => {
//         const text = document.createElement("div");
//         const info = document.createElement("div");
//         const img = document.createElement("img");
//         const h2 = document.createElement("h2");
//         const p = document.createElement("p");
//         const hours = document.createElement("div");
//         const clockImg = document.createElement("img");
//         const intraweek = document.createElement("p");
//         const intraSpan1 = document.createElement("span")
//         const intraSpan2 = document.createElement("span");
//         const weekendSpan1 = document.createElement("span")
//         const weekendSpan2 = document.createElement("span")
//         const weekend = document.createElement("p");
//         const location = document.createElement("div")
//         const locationImg = document.createElement("img");
//         const locationP = document.createElement("p");

//         text.append(h2);
//         text.append(p)
//         info.append(hours);
//         info.append(location);
//         hours.append(clockImg);
//         hours.append(intraweek);
//         hours.append(weekend);
//         location.append(locationImg);
//         location.append(locationP);
//         intraweek.append(intraSpan1);
//         intraweek.append(intraSpan2);
//         weekend.append(weekendSpan1);
//         weekend.append(weekendSpan2);

//         h2.innerText = "Lorem ipsum dolor sit amet.";
//         p.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus consequatur ipsam est? Distinctio impedit vel voluptas aperiam animi corrupti facere veritatis suscipit assumenda dolores voluptate eos praesentium, velit enim officiis error illum! Aliquid similique, quaerat tempore fugiat omnis maiores amet. Recusandae culpa nisi amet suscipit adipisci voluptates eligendi nostrum. Q Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, hic! uasi quas molestias aspernatur laudantium excepturi! Incidunt!";
//         clockImg.src = "./clock.svg";
//         intraSpan1.innerText = "Mon - Thu :";
//         intraSpan2.innerText = "07:00 - 20:00";
//         weekendSpan1.innerText = "Fri - Sun :";
//         weekendSpan2.innerText = "07:00 - 13:00";
//         locationImg.src = "./location.svg";
//         locationP.innerText = "4235 Brakel Lake Ave Sneedville, CA 23642";
//         img.src = "./gnu.svg";

//         text.classList.add("text");
//         info.classList.add("info");
//         img.classList.add("company-logo");
//         hours.classList.add("hours");
//         intraweek.classList.add("intraweek");
//         weekend.classList.add("weekend");
//         location.classList.add("location");

//         function switch_to_home(main) {
//             main.innerHTML = '';
//             main.append(text);
//             main.append(info);
//             main.append(img)
//         }
//         return { switch_to_home }
//     }
// )();

links.forEach(link => link.addEventListener("click", event => {
    event.preventDefault();

    if (link.id == "active")
        return;

    links.forEach(myLinks => myLinks.id = '');
    link.id = "active";

    if (link.classList.contains("home"))
        _home_js__WEBPACK_IMPORTED_MODULE_2__.homeObj.switch_to_home(main);
    else if (link.classList.contains("menu"))
        _menu_js__WEBPACK_IMPORTED_MODULE_3__.menuObj.switch_to_menu(main);
    else if (link.classList.contains("about"))
        console.log("about us");
    else if (link.classList.contains("contact"))
        console.log("contact");
}));

_menu_js__WEBPACK_IMPORTED_MODULE_3__.menuObj.switch_to_home(main);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map