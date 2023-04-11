webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/emil/Desktop/React-JS Course/next-app-2/pages/index.js\";\n// import { MongoClient } from \"mongodb\";\n\n\n\n\nfunction HomePage(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Meetups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      meetups: props.meetups\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n} // let's say the data array is on an external db and we need to use fetch to get it\n//  in Reactjs we will define a state\n// create useEffect to fetch the data\n// update the state value with the request response data\n// then pass the array to MeetupList\n// this will create a problem -> next will render the html page then the useEffect will be triggered\n// that is bad for SEO\n// to fix that we will use static props function\n// this function is made by next and it should be named getStaticProps()\n// what will happen is that next will execute the function before rendering the html page\n// by that we can fetch the data with that function -> then render the page\n// and we are using async to stop the browser from rendering the page before getting the async promise\n// this method called ----- Static Site Generating SSG ---------\n\n\n_c = HomePage;\n// // the other method is ----------- Server Side Rendering SSR  -----------\n// // this method means that the server will execute the function after building the site\n// // runs only on the server and the name should be getServerSideProps()\n// // here no need for revalidate bcz the server will rerender on the data change\n// // use this method only if the data is changeing alot like every second or if we nned access to context.req or res\n// export async function getServerSideProps(context) {\n//   const req = context.req;  // not available for getStaticProps\n//   const res = context.res;  // not available for getStaticProps\n//   // fetch the data here\n//   return {\n//     props: { meetups: DUMMY_MEETUPS },\n//   };\n// }\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInByb3BzIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN2QixzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtFLHFFQUFDLHNFQUFEO0FBQVksYUFBTyxFQUFFQSxLQUFLLENBQUNDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBeEJTRixRO0FBc0RUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuZnVuY3Rpb24gSG9tZVBhZ2UocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1lZXR1cHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn1cblxuLy8gbGV0J3Mgc2F5IHRoZSBkYXRhIGFycmF5IGlzIG9uIGFuIGV4dGVybmFsIGRiIGFuZCB3ZSBuZWVkIHRvIHVzZSBmZXRjaCB0byBnZXQgaXRcbi8vICBpbiBSZWFjdGpzIHdlIHdpbGwgZGVmaW5lIGEgc3RhdGVcbi8vIGNyZWF0ZSB1c2VFZmZlY3QgdG8gZmV0Y2ggdGhlIGRhdGFcbi8vIHVwZGF0ZSB0aGUgc3RhdGUgdmFsdWUgd2l0aCB0aGUgcmVxdWVzdCByZXNwb25zZSBkYXRhXG4vLyB0aGVuIHBhc3MgdGhlIGFycmF5IHRvIE1lZXR1cExpc3Rcbi8vIHRoaXMgd2lsbCBjcmVhdGUgYSBwcm9ibGVtIC0+IG5leHQgd2lsbCByZW5kZXIgdGhlIGh0bWwgcGFnZSB0aGVuIHRoZSB1c2VFZmZlY3Qgd2lsbCBiZSB0cmlnZ2VyZWRcbi8vIHRoYXQgaXMgYmFkIGZvciBTRU9cbi8vIHRvIGZpeCB0aGF0IHdlIHdpbGwgdXNlIHN0YXRpYyBwcm9wcyBmdW5jdGlvblxuLy8gdGhpcyBmdW5jdGlvbiBpcyBtYWRlIGJ5IG5leHQgYW5kIGl0IHNob3VsZCBiZSBuYW1lZCBnZXRTdGF0aWNQcm9wcygpXG4vLyB3aGF0IHdpbGwgaGFwcGVuIGlzIHRoYXQgbmV4dCB3aWxsIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGJlZm9yZSByZW5kZXJpbmcgdGhlIGh0bWwgcGFnZVxuLy8gYnkgdGhhdCB3ZSBjYW4gZmV0Y2ggdGhlIGRhdGEgd2l0aCB0aGF0IGZ1bmN0aW9uIC0+IHRoZW4gcmVuZGVyIHRoZSBwYWdlXG4vLyBhbmQgd2UgYXJlIHVzaW5nIGFzeW5jIHRvIHN0b3AgdGhlIGJyb3dzZXIgZnJvbSByZW5kZXJpbmcgdGhlIHBhZ2UgYmVmb3JlIGdldHRpbmcgdGhlIGFzeW5jIHByb21pc2Vcbi8vIHRoaXMgbWV0aG9kIGNhbGxlZCAtLS0tLSBTdGF0aWMgU2l0ZSBHZW5lcmF0aW5nIFNTRyAtLS0tLS0tLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAvLyBuZXh0IHdpbGwgY3JlYXRlIGEgc2VydmVyIHNpZGUgYnVuZGxlIGZvciB0aGlzIHNlY3Rpb24gb2YgdGhlIGNvZGUgLT4gaXQncyBzYWZlIGFsc28gdG8gdXNlIHRoZSBjcmVkZW50aWFscyBoZXJlXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL01PTkdPREJfQURNSU5fRU1JTDp4a1NiclpfUyo5M011djVAY2x1c3RlcjAudGpleTgubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIlxuICApO1xuXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG4gIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihcIm1lZXR1cHNcIik7XG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xuICBjbGllbnQuY2xvc2UoKTtcblxuICAvLyBpdCdzIHZlcnkgaW1wb3J0YW50IHRvIHJldHVybiBhbiBvYmplY3QgaGVyZVxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBzOiBtZWV0dXBzLm1hcCgoZWwpID0+ICh7XG4gICAgICAgIHRpdGxlOiBlbC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogZWwuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IGVsLmltYWdlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZWwuZGVzY3JpcHRpb24sXG4gICAgICAgIGlkOiBlbC5faWQudG9TdHJpbmcoKSxcbiAgICAgIH0pKSxcbiAgICB9LCAvLyB0aGUgcHJvcHMgaGVyZSB3aWxsIGJlIHBhc3NlZCB0byB0aGUgY29tcG9uZW50IHByb3BzXG4gICAgLy8gdGhpcyBtZWFucyB0aGF0IHRoZSBzZXJ2ZXIgd2lsbCB1cGRhdGUgYXQgbGVhc3QgZXZlcnkgMTAgc2VjIGlmIHRoZXJlIGlzIGNvbWluZyByZXF1ZXN0c1xuICAgIC8vIHRvIHByZXZlbnQgYnVpbGRpbmcgdGhlIHByb2plY3QgYWZ0ZXIgZWFjaCBjaG5hZ2Ugb24gdGhlIGRhdGFcbiAgICByZXZhbGlkYXRlOiAxMDAwMDAsIC8vIGl0J3Mgbm90IG5hY2Vzc2FyeSB0byB1c2UgaXRcbiAgfTtcbn1cblxuLy8gLy8gdGhlIG90aGVyIG1ldGhvZCBpcyAtLS0tLS0tLS0tLSBTZXJ2ZXIgU2lkZSBSZW5kZXJpbmcgU1NSICAtLS0tLS0tLS0tLVxuLy8gLy8gdGhpcyBtZXRob2QgbWVhbnMgdGhhdCB0aGUgc2VydmVyIHdpbGwgZXhlY3V0ZSB0aGUgZnVuY3Rpb24gYWZ0ZXIgYnVpbGRpbmcgdGhlIHNpdGVcbi8vIC8vIHJ1bnMgb25seSBvbiB0aGUgc2VydmVyIGFuZCB0aGUgbmFtZSBzaG91bGQgYmUgZ2V0U2VydmVyU2lkZVByb3BzKClcbi8vIC8vIGhlcmUgbm8gbmVlZCBmb3IgcmV2YWxpZGF0ZSBiY3ogdGhlIHNlcnZlciB3aWxsIHJlcmVuZGVyIG9uIHRoZSBkYXRhIGNoYW5nZVxuLy8gLy8gdXNlIHRoaXMgbWV0aG9kIG9ubHkgaWYgdGhlIGRhdGEgaXMgY2hhbmdlaW5nIGFsb3QgbGlrZSBldmVyeSBzZWNvbmQgb3IgaWYgd2Ugbm5lZCBhY2Nlc3MgdG8gY29udGV4dC5yZXEgb3IgcmVzXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgcmVxID0gY29udGV4dC5yZXE7ICAvLyBub3QgYXZhaWxhYmxlIGZvciBnZXRTdGF0aWNQcm9wc1xuLy8gICBjb25zdCByZXMgPSBjb250ZXh0LnJlczsgIC8vIG5vdCBhdmFpbGFibGUgZm9yIGdldFN0YXRpY1Byb3BzXG4vLyAgIC8vIGZldGNoIHRoZSBkYXRhIGhlcmVcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTIH0sXG4vLyAgIH07XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})