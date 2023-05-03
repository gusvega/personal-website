/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/containers/aboutMe/AboutMe.jsx":
/*!********************************************!*\
  !*** ./src/containers/aboutMe/AboutMe.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home */ \"./src/containers/aboutMe/Home.jsx\");\n/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Resume */ \"./src/containers/aboutMe/Resume.jsx\");\n/* harmony import */ var _Resume__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Resume__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Home = ()=>{\n    _s();\n    let [menuItems, setMenuItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        home: {\n            container: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/containers/aboutMe/AboutMe.jsx\",\n                lineNumber: 10,\n                columnNumber: 21\n            }, undefined),\n            name: \"home\"\n        },\n        resume: {\n            name: \"resume\",\n            container: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Resume__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {\n                fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/containers/aboutMe/AboutMe.jsx\",\n                lineNumber: 15,\n                columnNumber: 21\n            }, undefined)\n        }\n    });\n    let [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(menuItems.home.name);\n    const handleItemClick = (item)=>{\n        setSelectedItem(item);\n    };\n    let message = \"App is still being developed. Some things might not work as expected. I openly have it live so the progress can be seen by interested people.\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" h-screen w-full flex flex-col bg-slate-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-between mt-10 pl-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: Object.entries(menuItems).map((param)=>{\n                        let [key, value] = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-3 justify-center font-light text-gray-600 hover:bg-slate-200  \".concat(selectedItem === key ? \"active\" : \"\", \" \").concat(selectedItem === key ? \"bg-white active:bg-slate-100\" : \"bg-slate-200\", \"}\"),\n                            onClick: ()=>handleItemClick(key),\n                            children: key\n                        }, value.name, false, {\n                            fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/containers/aboutMe/AboutMe.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 22\n                        }, undefined);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/containers/aboutMe/AboutMe.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/containers/aboutMe/AboutMe.jsx\",\n                lineNumber: 34,\n                columnNumber: 10\n            }, undefined),\n            selectedItem === \"resume\" ? menuItems.resume.container : \"\",\n            selectedItem === \"home\" ? menuItems.home.container : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gux.mac/Projects/Vega Digital/landing-page/src/containers/aboutMe/AboutMe.jsx\",\n        lineNumber: 33,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Home, \"0FpW7j//qEkwH8I3Cpl1pTj4I64=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9hYm91dE1lL0Fib3V0TWUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDZ0M7QUFDSDtBQUNDO0FBRTlCLE1BQU1HLE9BQU8sSUFBTTs7SUFFaEIsSUFBSSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdMLCtDQUFRQSxDQUFDO1FBQ3RDTSxNQUFNO1lBQ0hDLHlCQUFXLDhEQUFDTiw2Q0FBT0E7Ozs7O1lBQ25CTyxNQUFNO1FBQ1Q7UUFDQUMsUUFBUTtZQUNMRCxNQUFNO1lBQ05ELHlCQUFXLDhEQUFDTCxnREFBTUE7Ozs7O1FBQ3JCO0lBQ0g7SUFJQSxJQUFJLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FDM0NJLFVBQVVFLElBQUksQ0FBQ0UsSUFBSTtJQUd0QixNQUFNSSxrQkFBa0IsQ0FBQ0MsT0FBUztRQUMvQkYsZ0JBQWdCRTtJQUNuQjtJQUVBLElBQUlDLFVBQVU7SUFHZCxxQkFDRyw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1osOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDWEMsT0FBT0MsT0FBTyxDQUFDZCxXQUFXZSxHQUFHLENBQUMsU0FBa0I7NEJBQWpCLENBQUNDLEtBQUtDLE1BQU07d0JBQ3pDLHFCQUNHLDhEQUFDTjs0QkFFRUMsV0FBVyxtRUFDSk4sT0FEdUVBLGlCQUFpQlUsTUFBTSxXQUFXLEVBQUUsRUFDOUcsS0FHQSxPQUhHVixpQkFBaUJVLE1BQ2hCLGlDQUNBLGNBQWMsRUFDbEI7NEJBQ0pFLFNBQVMsSUFBTVYsZ0JBQWdCUTtzQ0FDaENBOzJCQVBNQyxNQUFNYixJQUFJOzs7OztvQkFTeEI7Ozs7Ozs7Ozs7O1lBR0xFLGlCQUFpQixXQUFXTixVQUFVSyxNQUFNLENBQUNGLFNBQVMsR0FBRyxFQUFFO1lBQzNERyxpQkFBaUIsU0FBU04sVUFBVUUsSUFBSSxDQUFDQyxTQUFTLEdBQUcsRUFBRTs7Ozs7OztBQUdqRTtHQWpETUo7S0FBQUE7QUFtRE4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvYWJvdXRNZS9BYm91dE1lLmpzeD8xYjAxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEFib3V0TWUgZnJvbSBcIi4vSG9tZVwiO1xuaW1wb3J0IFJlc3VtZSBmcm9tIFwiLi9SZXN1bWVcIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICAgbGV0IFttZW51SXRlbXMsIHNldE1lbnVJdGVtc10gPSB1c2VTdGF0ZSh7XG4gICAgICBob21lOiB7XG4gICAgICAgICBjb250YWluZXI6IDxBYm91dE1lPjwvQWJvdXRNZT4sXG4gICAgICAgICBuYW1lOiAnaG9tZSdcbiAgICAgIH0sXG4gICAgICByZXN1bWU6IHtcbiAgICAgICAgIG5hbWU6ICdyZXN1bWUnLFxuICAgICAgICAgY29udGFpbmVyOiA8UmVzdW1lPjwvUmVzdW1lPlxuICAgICAgfVxuICAgfSlcblxuXG5cbiAgIGxldCBbc2VsZWN0ZWRJdGVtLCBzZXRTZWxlY3RlZEl0ZW1dID0gdXNlU3RhdGUoXG4gICAgICBtZW51SXRlbXMuaG9tZS5uYW1lXG4gICApO1xuXG4gICBjb25zdCBoYW5kbGVJdGVtQ2xpY2sgPSAoaXRlbSkgPT4ge1xuICAgICAgc2V0U2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgfTtcblxuICAgbGV0IG1lc3NhZ2UgPSAnQXBwIGlzIHN0aWxsIGJlaW5nIGRldmVsb3BlZC4gU29tZSB0aGluZ3MgbWlnaHQgbm90IHdvcmsgYXMgZXhwZWN0ZWQuIEkgb3Blbmx5IGhhdmUgaXQgbGl2ZSBzbyB0aGUgcHJvZ3Jlc3MgY2FuIGJlIHNlZW4gYnkgaW50ZXJlc3RlZCBwZW9wbGUuJ1xuXG5cbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nIGgtc2NyZWVuIHctZnVsbCBmbGV4IGZsZXgtY29sIGJnLXNsYXRlLTEwMCc+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG10LTEwIHBsLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhtZW51SXRlbXMpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcC0zIGp1c3RpZnktY2VudGVyIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1zbGF0ZS0yMDAgICR7c2VsZWN0ZWRJdGVtID09PSBrZXkgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAke3NlbGVjdGVkSXRlbSA9PT0ga2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmctd2hpdGUgYWN0aXZlOmJnLXNsYXRlLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYmctc2xhdGUtMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIH19YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhrZXkpfVxuICAgICAgICAgICAgICAgICAgICAgPntrZXl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICB7c2VsZWN0ZWRJdGVtID09PSBcInJlc3VtZVwiID8gbWVudUl0ZW1zLnJlc3VtZS5jb250YWluZXIgOiBcIlwifVxuICAgICAgICAge3NlbGVjdGVkSXRlbSA9PT0gXCJob21lXCIgPyBtZW51SXRlbXMuaG9tZS5jb250YWluZXIgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBYm91dE1lIiwiUmVzdW1lIiwiSG9tZSIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsImhvbWUiLCJjb250YWluZXIiLCJuYW1lIiwicmVzdW1lIiwic2VsZWN0ZWRJdGVtIiwic2V0U2VsZWN0ZWRJdGVtIiwiaGFuZGxlSXRlbUNsaWNrIiwiaXRlbSIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/aboutMe/AboutMe.jsx\n"));

/***/ }),

/***/ "./src/containers/aboutMe/Resume.jsx":
/*!*******************************************!*\
  !*** ./src/containers/aboutMe/Resume.jsx ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});