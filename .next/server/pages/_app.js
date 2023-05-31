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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppContext */ \"./src/AppContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    // useEffect(() => {\n    //     const cookieValue = Cookies.get('user_cookie');\n    //     if(cookieValue){\n    //        // console.log(cookieValue)\n    //        const decodedToken = jwt(cookieValue)\n    //        // console.log(decodedToken)\n    //        if (cookieValue) {\n    //           setData(decodedToken)\n    //        }\n    //     }\n    //   }, []);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    let userInfo = {\n        name: \"GUSTAVO\",\n        email: \"\",\n        UID: \"\",\n        admin: false,\n        analyses: {}\n    };\n    const [globalUserState, setGlobalUserState] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(userInfo);\n    // console.log('MY_SECRET_FROM_GITHUB', process.env.MY_SECRET_KEY)\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AppContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            globalUserState,\n            setGlobalUserState\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/gux.mac/Projects/PersonalWebsite/PersonalWebiste_v1/src/pages/_app.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/gux.mac/Projects/PersonalWebsite/PersonalWebiste_v1/src/pages/_app.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkI7QUFDVTtBQUNLO0FBRTdCLFNBQVNHLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUVwRCxvQkFBb0I7SUFDcEIsc0RBQXNEO0lBQ3RELHVCQUF1QjtJQUN2QixxQ0FBcUM7SUFDckMsK0NBQStDO0lBQy9DLHNDQUFzQztJQUV0Qyw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxRQUFRO0lBRVIsWUFBWTtJQUVaLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxELElBQUlNLFdBQVc7UUFDYkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLEtBQUs7UUFDTEMsT0FBTyxLQUFLO1FBQ1pDLFVBQVUsQ0FBQztJQUNiO0lBRUEsTUFBTSxDQUFDQyxpQkFBaUJDLG1CQUFtQixHQUFHYiwrQ0FBUUEsQ0FBQ007SUFFdkQsa0VBQWtFO0lBRWxFLHFCQUNFLDhEQUFDUiw0REFBbUI7UUFBQ2lCLE9BQU87WUFBRUg7WUFBaUJDO1FBQW1CO2tCQUNoRSw0RUFBQ1g7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmQtbGFuZGluZy1wYWdlLy4vc3JjL3BhZ2VzL19hcHAuanM/OGZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi4vQXBwQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gQ29va2llcy5nZXQoJ3VzZXJfY29va2llJyk7XG4gIC8vICAgICBpZihjb29raWVWYWx1ZSl7XG4gIC8vICAgICAgICAvLyBjb25zb2xlLmxvZyhjb29raWVWYWx1ZSlcbiAgLy8gICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dChjb29raWVWYWx1ZSlcbiAgLy8gICAgICAgIC8vIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbilcblxuICAvLyAgICAgICAgaWYgKGNvb2tpZVZhbHVlKSB7XG4gIC8vICAgICAgICAgICBzZXREYXRhKGRlY29kZWRUb2tlbilcbiAgLy8gICAgICAgIH1cbiAgLy8gICAgIH1cblxuICAvLyAgIH0sIFtdKTtcblxuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHVzZXJJbmZvID0ge1xuICAgIG5hbWU6ICdHVVNUQVZPJyxcbiAgICBlbWFpbDogJycsXG4gICAgVUlEOiAnJyxcbiAgICBhZG1pbjogZmFsc2UsXG4gICAgYW5hbHlzZXM6IHt9XG4gIH1cblxuICBjb25zdCBbZ2xvYmFsVXNlclN0YXRlLCBzZXRHbG9iYWxVc2VyU3RhdGVdID0gdXNlU3RhdGUodXNlckluZm8pXG5cbiAgLy8gY29uc29sZS5sb2coJ01ZX1NFQ1JFVF9GUk9NX0dJVEhVQicsIHByb2Nlc3MuZW52Lk1ZX1NFQ1JFVF9LRVkpXG5cbiAgcmV0dXJuIChcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBnbG9iYWxVc2VyU3RhdGUsIHNldEdsb2JhbFVzZXJTdGF0ZSB9fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNMb2dnZWRJbiIsInNldElzTG9nZ2VkSW4iLCJ1c2VySW5mbyIsIm5hbWUiLCJlbWFpbCIsIlVJRCIsImFkbWluIiwiYW5hbHlzZXMiLCJnbG9iYWxVc2VyU3RhdGUiLCJzZXRHbG9iYWxVc2VyU3RhdGUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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