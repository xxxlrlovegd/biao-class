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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _006_form_webpack_lrForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../006-form-webpack/lrForm */ \"./lrForm.js\");\n\r\nlet lrForm1 = Object(_006_form_webpack_lrForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#main-form1')\r\nlet data = lrForm1.getData()\r\nlet lrForm2 = Object(_006_form_webpack_lrForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('#main-form2')\r\nconsole.log(\"data=\", data)\r\nlet data1 = lrForm2.getData()\r\nconsole.log(\"data1=\", data1)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9nZXQuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nZXQuanM/ZjVjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbHJmb3JtIGZyb20gJy4uLzAwNi1mb3JtLXdlYnBhY2svbHJGb3JtJ1xyXG5sZXQgbHJGb3JtMSA9IGxyZm9ybSgnI21haW4tZm9ybTEnKVxyXG5sZXQgZGF0YSA9IGxyRm9ybTEuZ2V0RGF0YSgpXHJcbmxldCBsckZvcm0yID0gbHJmb3JtKCcjbWFpbi1mb3JtMicpXHJcbmNvbnNvbGUubG9nKFwiZGF0YT1cIiwgZGF0YSlcclxubGV0IGRhdGExID0gbHJGb3JtMi5nZXREYXRhKClcclxuY29uc29sZS5sb2coXCJkYXRhMT1cIiwgZGF0YTEpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./get.js\n");

/***/ }),

/***/ "./lrForm.js":
/*!*******************!*\
  !*** ./lrForm.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet form\r\n    // 将lrForm暴露出去,否则别的文件访问不到\r\nfunction lrForm(selector) {\r\n    form = document.querySelector(selector)\r\n    return {\r\n        getData, //相当于getData:getData,ES6语法如果value即方法名与key相同value可省略\r\n        setData, //同上\r\n    }\r\n}\r\n\r\n/**\r\n * 解析表单数据（取值）\r\n * @param {HTMLFormElement} form 选好的form元素\r\n * @return {Object}\r\n */\r\n\r\nfunction getData() {\r\n    //初始化空对象，否则解析后的数据没有地方存\r\n    let data = {};\r\n    //取到form表单下所有输入框有name属性\r\n    let inputs = form.querySelectorAll('[name]');\r\n    //循环所有的输入框\r\n    inputs.forEach(input => {\r\n        // 检查输入框的类型\r\n        switch (input.type) {\r\n            //如果是数字,将value转换成数字类型\r\n            case 'number':\r\n                data[input.name] = parseFloat(input.value);\r\n                break;\r\n                // 如果是单选，查看是否勾选\r\n            case 'radio':\r\n                // 如果没勾选则跳过\r\n                if (!input.checked)\r\n                    return\r\n                data[input.name] = input.value;\r\n                break;\r\n            case 'checkbox':\r\n                // 如果第一次碰到复选框,则将值转换成数组\r\n                if (!Array.isArray(data[input.name])) {\r\n                    data[input.name] = [];\r\n                }\r\n                // 如勾选则推到数组中\r\n                if (input.checked)\r\n                    data[input.name].push(input.value);\r\n                break;\r\n            case \"date\":\r\n            case \"week\":\r\n                data[input.name] = input.valueAsDate;\r\n                break;\r\n                //默认情况直接取字符串\r\n            default:\r\n                data[input.name] = input.value;\r\n                break;\r\n        }\r\n    });\r\n    // 返回解析好的数据\r\n    return data\r\n}\r\n\r\n/**\r\n * 通过纯数据填充表单（存值）\r\n * @param {HTMLFormElement} form\r\n * @param {Object} data\r\n */\r\nfunction setData(data) {\r\n    // 循环数据的每一项\r\n    for (let key in data) {\r\n        // 取到本项对应的输入框\r\n        let input = form.querySelector(`[name='${key}']`);\r\n        // 检查输入框类型\r\n        switch (input.type) {\r\n            case 'radio':\r\n                let radio = form.querySelector(`[type='radio'][name='${key}'][value='${data[key]}']`);\r\n                radio && (radio.checked = true);\r\n                break;\r\n            case 'checkbox':\r\n                if (Array.isArray(data[key])) {\r\n                    data[key].forEach(i => {\r\n                        let checkbox = form.querySelector(`[type='checkbox'][name='${key}'][value='${i}']`);\r\n                        checkbox && (checkbox.checked = true);\r\n                    })\r\n                }\r\n                break;\r\n            default:\r\n                input.value = data[key];\r\n                break;\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (lrForm);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9sckZvcm0uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9sckZvcm0uanM/YmE1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZm9ybVxyXG4gICAgLy8g5bCGbHJGb3Jt5pq06Zyy5Ye65Y67LOWQpuWImeWIq+eahOaWh+S7tuiuv+mXruS4jeWIsFxyXG5mdW5jdGlvbiBsckZvcm0oc2VsZWN0b3IpIHtcclxuICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXREYXRhLCAvL+ebuOW9k+S6jmdldERhdGE6Z2V0RGF0YSxFUzbor63ms5XlpoLmnpx2YWx1ZeWNs+aWueazleWQjeS4jmtleeebuOWQjHZhbHVl5Y+v55yB55WlXHJcbiAgICAgICAgc2V0RGF0YSwgLy/lkIzkuIpcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOino+aekOihqOWNleaVsOaNru+8iOWPluWAvO+8iVxyXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZm9ybSDpgInlpb3nmoRmb3Jt5YWD57SgXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICovXHJcblxyXG5mdW5jdGlvbiBnZXREYXRhKCkge1xyXG4gICAgLy/liJ3lp4vljJbnqbrlr7nosaHvvIzlkKbliJnop6PmnpDlkI7nmoTmlbDmja7msqHmnInlnLDmlrnlrZhcclxuICAgIGxldCBkYXRhID0ge307XHJcbiAgICAvL+WPluWIsGZvcm3ooajljZXkuIvmiYDmnInovpPlhaXmoYbmnIluYW1l5bGe5oCnXHJcbiAgICBsZXQgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV0nKTtcclxuICAgIC8v5b6q546v5omA5pyJ55qE6L6T5YWl5qGGXHJcbiAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgLy8g5qOA5p+l6L6T5YWl5qGG55qE57G75Z6LXHJcbiAgICAgICAgc3dpdGNoIChpbnB1dC50eXBlKSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5pWw5a2XLOWwhnZhbHVl6L2s5o2i5oiQ5pWw5a2X57G75Z6LXHJcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gcGFyc2VGbG9hdChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+WNlemAie+8jOafpeeci+aYr+WQpuWLvumAiVxyXG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmsqHli77pgInliJnot7Pov4dcclxuICAgICAgICAgICAgICAgIGlmICghaW5wdXQuY2hlY2tlZClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpznrKzkuIDmrKHnorDliLDlpI3pgInmoYYs5YiZ5bCG5YC86L2s5o2i5oiQ5pWw57uEXHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YVtpbnB1dC5uYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhW2lucHV0Lm5hbWVdID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLli77pgInliJnmjqjliLDmlbDnu4TkuK1cclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5jaGVja2VkKVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaW5wdXQubmFtZV0ucHVzaChpbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgY2FzZSBcIndlZWtcIjpcclxuICAgICAgICAgICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZUFzRGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy/pu5jorqTmg4XlhrXnm7TmjqXlj5blrZfnrKbkuLJcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGRhdGFbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgLy8g6L+U5Zue6Kej5p6Q5aW955qE5pWw5o2uXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG4vKipcclxuICog6YCa6L+H57qv5pWw5o2u5aGr5YWF6KGo5Y2V77yI5a2Y5YC877yJXHJcbiAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXREYXRhKGRhdGEpIHtcclxuICAgIC8vIOW+queOr+aVsOaNrueahOavj+S4gOmhuVxyXG4gICAgZm9yIChsZXQga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAvLyDlj5bliLDmnKzpobnlr7nlupTnmoTovpPlhaXmoYZcclxuICAgICAgICBsZXQgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPScke2tleX0nXWApO1xyXG4gICAgICAgIC8vIOajgOafpei+k+WFpeahhuexu+Wei1xyXG4gICAgICAgIHN3aXRjaCAoaW5wdXQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFkaW8gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFt0eXBlPSdyYWRpbyddW25hbWU9JyR7a2V5fSddW3ZhbHVlPScke2RhdGFba2V5XX0nXWApO1xyXG4gICAgICAgICAgICAgICAgcmFkaW8gJiYgKHJhZGlvLmNoZWNrZWQgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtrZXldLmZvckVhY2goaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjaGVja2JveCA9IGZvcm0ucXVlcnlTZWxlY3RvcihgW3R5cGU9J2NoZWNrYm94J11bbmFtZT0nJHtrZXl9J11bdmFsdWU9JyR7aX0nXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveCAmJiAoY2hlY2tib3guY2hlY2tlZCA9IHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtrZXldO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGxyRm9ybSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lrForm.js\n");

/***/ })

/******/ });