"use strict";
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
exports.id = "pages/posts/[postId]";
exports.ids = ["pages/posts/[postId]"];
exports.modules = {

/***/ "./pages/posts/[postId].js":
/*!*********************************!*\
  !*** ./pages/posts/[postId].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\sipang klinhom\\\\Documents\\\\GitHub\\\\Midterm-Project-Full-Stack-Node.js\\\\frontend\\\\pages\\\\posts\\\\[postId].js\";\nasync function getStaticPaths() {\n  const response = await fetch('https://fswd-wp.devnss.com/wp-json/wp/v2/posts');\n  const data = await response.json();\n  const paths = data.map(post => {\n    return {\n      params: {\n        postId: post.id.toString()\n      }\n    };\n  });\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps(context) {\n  const {\n    params\n  } = context;\n  const responsse = await fetch(`https://fswd-wp.devnss.com/wp-json/wp/v2/posts/${params.postId}`);\n  const data = await responsse.json();\n  return {\n    props: {\n      post: data\n    }\n  };\n}\n\n\n\n\nconst PostId = ({\n  post\n}) => {\n  return (\n    /*#__PURE__*/\n    // <div className=\"container\">\n    //     <p className=\"is-size-4\">Post ID : {post.id}</p>\n    //     <div>\n    //         <p className=\"is-size-2 is-titles\">{post.title.rendered}</p>\n    //         <p>Date : {post.date}</p>\n    //         <p>Tag : {post.tags}</p>\n    //         <p>Categories : {post.categories}</p>\n    //         <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>\n    //     </div>\n    // </div>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Container, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"title\", {\n          children: post.title.rendered\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Row, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__.Col, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n            children: [\"Post ID : \", post.id]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h1\", {\n              children: post.title.rendered\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n              children: [\"Date : \", post.date]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n              children: [\"Tag : \", post.tags]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h6\", {\n              children: [\"Categories : \", post.categories]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 25\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              dangerouslySetInnerHTML: {\n                __html: post.content.rendered\n              }\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 25\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 17\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }, undefined)\n  );\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostId);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcG9zdElkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU8sZUFBZUEsY0FBZixHQUFnQztBQUNuQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGdEQUFELENBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUNBLFFBQU1DLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVVDLElBQUQsSUFBVTtBQUM3QixXQUFPO0FBQ0hDLE1BQUFBLE1BQU0sRUFBRTtBQUFFQyxRQUFBQSxNQUFNLEVBQUVGLElBQUksQ0FBQ0csRUFBTCxDQUFRQyxRQUFSO0FBQVY7QUFETCxLQUFQO0FBR0gsR0FKYSxDQUFkO0FBTUEsU0FBTztBQUNITixJQUFBQSxLQURHO0FBRUhPLElBQUFBLFFBQVEsRUFBRTtBQUZQLEdBQVA7QUFJSDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU07QUFBRU4sSUFBQUE7QUFBRixNQUFhTSxPQUFuQjtBQUNBLFFBQU1DLFNBQVMsR0FBRyxNQUFNYixLQUFLLENBQUUsa0RBQWlETSxNQUFNLENBQUNDLE1BQU8sRUFBakUsQ0FBN0I7QUFDQSxRQUFNTixJQUFJLEdBQUcsTUFBTVksU0FBUyxDQUFDWCxJQUFWLEVBQW5CO0FBQ0EsU0FBTztBQUNIWSxJQUFBQSxLQUFLLEVBQUU7QUFDSFQsTUFBQUEsSUFBSSxFQUFFSjtBQURIO0FBREosR0FBUDtBQUtIO0FBRUQ7QUFDQTs7O0FBRUEsTUFBTWtCLE1BQU0sR0FBRyxDQUFDO0FBQUVkLEVBQUFBO0FBQUYsQ0FBRCxLQUFjO0FBQ3pCO0FBQUE7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFDLHNEQUFEO0FBQUEsOEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSwrQkFDSTtBQUFBLG9CQUFRQSxJQUFJLENBQUNlLEtBQUwsQ0FBV0M7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSSw4REFBQyxnREFBRDtBQUFBLCtCQUNJLDhEQUFDLGdEQUFEO0FBQUEsa0NBQ0k7QUFBQSxxQ0FBZWhCLElBQUksQ0FBQ0csRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBQSxvQ0FDSTtBQUFBLHdCQUFLSCxJQUFJLENBQUNlLEtBQUwsQ0FBV0M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJO0FBQUEsb0NBQVloQixJQUFJLENBQUNpQixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkosZUFHSTtBQUFBLG1DQUFXakIsSUFBSSxDQUFDa0IsSUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKLGVBSUk7QUFBQSwwQ0FBa0JsQixJQUFJLENBQUNtQixVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFLSTtBQUFLLHFDQUF1QixFQUFFO0FBQUVDLGdCQUFBQSxNQUFNLEVBQUVwQixJQUFJLENBQUNxQixPQUFMLENBQWFMO0FBQXZCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEo7QUE2QkgsQ0E5QkQ7O0FBZ0NBLGlFQUFlRixNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9wb3N0cy9bcG9zdElkXS5qcz9jMjRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZnN3ZC13cC5kZXZuc3MuY29tL3dwLWpzb24vd3AvdjIvcG9zdHMnKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgY29uc3QgcGF0aHMgPSBkYXRhLm1hcCgocG9zdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBwb3N0SWQ6IHBvc3QuaWQudG9TdHJpbmcoKSB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0XHJcbiAgICBjb25zdCByZXNwb25zc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mc3dkLXdwLmRldm5zcy5jb20vd3AtanNvbi93cC92Mi9wb3N0cy8ke3BhcmFtcy5wb3N0SWR9YClcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zc2UuanNvbigpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3Q6IGRhdGEsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcblxyXG5jb25zdCBQb3N0SWQgPSAoeyBwb3N0IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgLy8gPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAvLyAgICAgPHAgY2xhc3NOYW1lPVwiaXMtc2l6ZS00XCI+UG9zdCBJRCA6IHtwb3N0LmlkfTwvcD5cclxuICAgICAgICAvLyAgICAgPGRpdj5cclxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXNpemUtMiBpcy10aXRsZXNcIj57cG9zdC50aXRsZS5yZW5kZXJlZH08L3A+XHJcbiAgICAgICAgLy8gICAgICAgICA8cD5EYXRlIDoge3Bvc3QuZGF0ZX08L3A+XHJcbiAgICAgICAgLy8gICAgICAgICA8cD5UYWcgOiB7cG9zdC50YWdzfTwvcD5cclxuICAgICAgICAvLyAgICAgICAgIDxwPkNhdGVnb3JpZXMgOiB7cG9zdC5jYXRlZ29yaWVzfTwvcD5cclxuICAgICAgICAvLyAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0+PC9kaXY+XHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlLnJlbmRlcmVkfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0PlBvc3QgSUQgOiB7cG9zdC5pZH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZS5yZW5kZXJlZH08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+RGF0ZSA6IHtwb3N0LmRhdGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PlRhZyA6IHtwb3N0LnRhZ3N9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg2PkNhdGVnb3JpZXMgOiB7cG9zdC5jYXRlZ29yaWVzfTwvaDY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LmNvbnRlbnQucmVuZGVyZWQgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RJZCJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQYXRocyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInBhdGhzIiwibWFwIiwicG9zdCIsInBhcmFtcyIsInBvc3RJZCIsImlkIiwidG9TdHJpbmciLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlc3BvbnNzZSIsInByb3BzIiwiQ29udGFpbmVyIiwiUm93IiwiQ29sIiwiSGVhZCIsIlBvc3RJZCIsInRpdGxlIiwicmVuZGVyZWQiLCJkYXRlIiwidGFncyIsImNhdGVnb3JpZXMiLCJfX2h0bWwiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[postId].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/posts/[postId].js"));
module.exports = __webpack_exports__;

})();