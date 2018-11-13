/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.js":
/*!***********************!*\
  !*** ./client/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/darren/B/client/App.js: Unexpected token (83:10)\\n\\n\\u001b[0m \\u001b[90m 81 | \\u001b[39m  render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 82 | \\u001b[39m      \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 83 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"hm\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m          \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 84 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"topContainer\\\"\\u001b[39m style\\u001b[33m=\\u001b[39m{topContainer}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 85 | \\u001b[39m              \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"reviewsDescription\\\"\\u001b[39m style\\u001b[33m=\\u001b[39m{reviewDescr}\\u001b[33m>\\u001b[39m\\u001b[33mReviews\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 86 | \\u001b[39m              \\u001b[33m<\\u001b[39m\\u001b[33mform\\u001b[39m style\\u001b[33m=\\u001b[39m{searchForm}\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33minput\\u001b[39m style\\u001b[33m=\\u001b[39m{searchInput} onChange\\u001b[33m=\\u001b[39m{\\u001b[36mthis\\u001b[39m\\u001b[33m.\\u001b[39mhanddleChange\\u001b[33m.\\u001b[39mbind(\\u001b[36mthis\\u001b[39m)} type\\u001b[33m=\\u001b[39m\\u001b[32m\\\"text\\\"\\u001b[39m placeholder\\u001b[33m=\\u001b[39m\\u001b[32m\\\"Search reviews\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33minput\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33mbutton\\u001b[39m type\\u001b[33m=\\u001b[39m\\u001b[32m\\\"submit\\\"\\u001b[39m style\\u001b[33m=\\u001b[39m{searchBtn} disabled\\u001b[33m>\\u001b[39m🔍\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mbutton\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mform\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/darren/B/node_modules/@babel/parser/lib/index.js:4028:15)\\n    at Parser.unexpected (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5343:16)\\n    at Parser.parseExprAtom (/Users/darren/B/node_modules/@babel/parser/lib/index.js:6432:20)\\n    at Parser.parseExprSubscripts (/Users/darren/B/node_modules/@babel/parser/lib/index.js:6019:21)\\n    at Parser.parseMaybeUnary (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5998:21)\\n    at Parser.parseExprOps (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5907:21)\\n    at Parser.parseMaybeConditional (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5879:21)\\n    at Parser.parseMaybeAssign (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5826:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/darren/B/node_modules/@babel/parser/lib/index.js:6588:28)\\n    at Parser.parseExprAtom (/Users/darren/B/node_modules/@babel/parser/lib/index.js:6388:21)\\n    at Parser.parseExprSubscripts (/Users/darren/B/node_modules/@babel/parser/lib/index.js:6019:21)\\n    at Parser.parseMaybeUnary (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5998:21)\\n    at Parser.parseExprOps (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5907:21)\\n    at Parser.parseMaybeConditional (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5879:21)\\n    at Parser.parseMaybeAssign (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5826:21)\\n    at Parser.parseExpression (/Users/darren/B/node_modules/@babel/parser/lib/index.js:5779:21)\\n    at Parser.parseReturnStatement (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7631:28)\\n    at Parser.parseStatementContent (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7311:21)\\n    at Parser.parseStatement (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7277:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7829:23)\\n    at Parser.parseBlockBody (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7816:10)\\n    at Parser.parseBlock (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7805:10)\\n    at Parser.parseFunctionBody (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7042:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7024:10)\\n    at Parser.parseMethod (/Users/darren/B/node_modules/@babel/parser/lib/index.js:6966:10)\\n    at Parser.pushClassMethod (/Users/darren/B/node_modules/@babel/parser/lib/index.js:8208:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/darren/B/node_modules/@babel/parser/lib/index.js:8133:12)\\n    at Parser.parseClassMember (/Users/darren/B/node_modules/@babel/parser/lib/index.js:8075:10)\\n    at Parser.parseClassBody (/Users/darren/B/node_modules/@babel/parser/lib/index.js:8030:12)\\n    at Parser.parseClass (/Users/darren/B/node_modules/@babel/parser/lib/index.js:7980:10)\");\n\n//# sourceURL=webpack:///./client/App.js?");

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./client/App.js\");\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_js__WEBPACK_IMPORTED_MODULE_0__);\n// import React, {Component} from 'react';\n// import ReactDOM from 'react-dom';\n\nwindow.Reviews = _App_js__WEBPACK_IMPORTED_MODULE_0___default.a; //index file renders the App to our html\n// ReactDOM.render(<App />, document.getElementById('app'))\n\n//# sourceURL=webpack:///./client/index.js?");

/***/ })

/******/ });