/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/AppContext.js":
/*!***************************!*\
  !*** ./src/AppContext.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQXBwQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsTUFBTUMsMkJBQWFELG9EQUFhQSxDQUFDLENBQUM7QUFFbEMsaUVBQWVDLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZC1sYW5kaW5nLXBhZ2UvLi9zcmMvQXBwQ29udGV4dC5qcz8yZmY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dCJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiQXBwQ29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/AppContext.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ \"./src/AppContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    // useEffect(() => {\n    //     const cookieValue = Cookies.get('user_cookie');\n    //     if(cookieValue){\n    //        console.log(cookieValue)\n    //        const decodedToken = jwt(cookieValue)\n    //        console.log(decodedToken)\n    //        if (cookieValue) {\n    //           setData(decodedToken)\n    //        }\n    //     }\n    //   }, []);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    let userInfo = {\n        name: \"GUSTAVO\",\n        email: \"\",\n        UID: \"\",\n        admin: false,\n        analyses: {}\n    };\n    const [globalUserState, setGlobalUserState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(userInfo);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            globalUserState,\n            setGlobalUserState\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/pages/_app.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/pages/_app.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVTtBQUNLO0FBRTdCLFNBQVNHLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUVwRCxvQkFBb0I7SUFDcEIsc0RBQXNEO0lBQ3RELHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsK0NBQStDO0lBQy9DLG1DQUFtQztJQUVuQyw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxRQUFRO0lBRVIsWUFBWTtJQUVaLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxELElBQUlNLFdBQVc7UUFDYkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsT0FBTyxLQUFLO1FBQ1pDLFVBQVUsQ0FBQztJQUNiO0lBRUEsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQ007SUFFdkQscUJBQ0UsOERBQUNSLDREQUFtQjtRQUFDaUIsT0FBTztZQUFDSDtZQUFpQkM7UUFBa0I7a0JBQzlELDRFQUFDWDtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZC1sYW5kaW5nLXBhZ2UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuLi9BcHBDb250ZXh0JztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgICAgY29uc3QgY29va2llVmFsdWUgPSBDb29raWVzLmdldCgndXNlcl9jb29raWUnKTtcbiAgLy8gICAgIGlmKGNvb2tpZVZhbHVlKXtcbiAgLy8gICAgICAgIGNvbnNvbGUubG9nKGNvb2tpZVZhbHVlKVxuICAvLyAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0KGNvb2tpZVZhbHVlKVxuICAvLyAgICAgICAgY29uc29sZS5sb2coZGVjb2RlZFRva2VuKVxuXG4gIC8vICAgICAgICBpZiAoY29va2llVmFsdWUpIHtcbiAgLy8gICAgICAgICAgIHNldERhdGEoZGVjb2RlZFRva2VuKVxuICAvLyAgICAgICAgfVxuICAvLyAgICAgfVxuXG4gIC8vICAgfSwgW10pO1xuXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBsZXQgdXNlckluZm8gPSB7XG4gICAgbmFtZTogJ0dVU1RBVk8nLFxuICAgIGVtYWlsOiAnJyxcbiAgICBVSUQ6ICcnLFxuICAgIGFkbWluOiBmYWxzZSxcbiAgICBhbmFseXNlczoge31cbiAgfVxuXG4gIGNvbnN0IFtnbG9iYWxVc2VyU3RhdGUsIHNldEdsb2JhbFVzZXJTdGF0ZV0gPSB1c2VTdGF0ZSh1c2VySW5mbylcblxuICByZXR1cm4gKFxuICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7Z2xvYmFsVXNlclN0YXRlLCBzZXRHbG9iYWxVc2VyU3RhdGV9fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VySW5mbyIsIm5hbWUiLCJlbWFpbCIsIlVJRCIsImFkbWluIiwiYW5hbHlzZXMiLCJnbG9iYWxVc2VyU3RhdGUiLCJzZXRHbG9iYWxVc2VyU3RhdGUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();