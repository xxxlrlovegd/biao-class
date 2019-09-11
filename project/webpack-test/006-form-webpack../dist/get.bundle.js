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
/******/ 	return __webpack_require__(__webpack_require__.s = "./get.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./get.js":
/*!****************!*\
  !*** ./get.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lrForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lrForm */ \"./lrForm.js\");\n\r\nlet data = _lrForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(document.querySelector('#main-form1'))\r\nconsole.log(\"data=\", data)\r\nlet data1 = _lrForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getData(document.querySelector('#main-form2'))\r\nconsole.log(\"data1=\", data1)\n\n//# sourceURL=webpack:///./get.js?");

/***/ }),

/***/ "./lrForm.js":
/*!*******************!*\
  !*** ./lrForm.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 将lrForm暴露出去,否则别的文件访问不到\r\nfunction lrForm() {\r\n    return {\r\n        getData, //相当于getData:getData,ES6语法如果value即方法名与key相同value可省略\r\n        setData, //同上\r\n    }\r\n}\r\n\r\n/**\r\n * 解析表单数据（取值）\r\n * @param {HTMLFormElement} form 选好的form元素\r\n * @return {Object}\r\n */\r\n\r\nfunction getData(form) {\r\n    //初始化空对象，否则解析后的数据没有地方存\r\n    let data = {};\r\n    //取到form表单下所有输入框有name属性\r\n    let inputs = form.querySelectorAll('[name]');\r\n    //循环所有的输入框\r\n    inputs.forEach(input => {\r\n        // 检查输入框的类型\r\n        switch (input.type) {\r\n            //如果是数字,将value转换成数字类型\r\n            case 'number':\r\n                data[input.name] = parseFloat(input.value);\r\n                break;\r\n                // 如果是单选，查看是否勾选\r\n            case 'radio':\r\n                // 如果没勾选则跳过\r\n                if (!input.checked)\r\n                    return\r\n                data[input.name] = input.value;\r\n                break;\r\n            case 'checkbox':\r\n                // 如果第一次碰到复选框,则将值转换成数组\r\n                if (!Array.isArray(data[input.name])) {\r\n                    data[input.name] = [];\r\n                }\r\n                // 如勾选则推到数组中\r\n                if (input.checked)\r\n                    data[input.name].push(input.value);\r\n                break;\r\n            case \"date\":\r\n            case \"week\":\r\n                data[input.name] = input.valueAsDate;\r\n                break;\r\n                //默认情况直接取字符串\r\n            default:\r\n                data[input.name] = input.value;\r\n                break;\r\n        }\r\n    });\r\n    // 返回解析好的数据\r\n    return data\r\n}\r\n\r\n/**\r\n * 通过纯数据填充表单（存值）\r\n * @param {HTMLFormElement} form\r\n * @param {Object} data\r\n */\r\nfunction setData(form, data) {\r\n    // 循环数据的每一项\r\n    for (let key in data) {\r\n        // 取到本项对应的输入框\r\n        let input = form.querySelector(`[name='${key}']`);\r\n        // 检查输入框类型\r\n        switch (input.type) {\r\n            case 'radio':\r\n                let radio = form.querySelector(`[type='radio'][name='${key}'][value='${data[key]}']`);\r\n                radio && (radio.checked = true);\r\n                break;\r\n            case 'checkbox':\r\n                if (Array.isArray(data[key])) {\r\n                    data[key].forEach(i => {\r\n                        let checkbox = form.querySelector(`[type='checkbox'][name='${key}'][value='${i}']`);\r\n                        checkbox && (checkbox.checked = true);\r\n                    })\r\n                }\r\n                break;\r\n            default:\r\n                input.value = data[key];\r\n                break;\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (lrForm);\n\n//# sourceURL=webpack:///./lrForm.js?");

/***/ })

/******/ });