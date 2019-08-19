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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/store */ \"./js/store.js\");\n/* harmony import */ var _js_as_action_c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/as-action_c */ \"./js/as-action_c.js\");\n/* harmony import */ var _js_as_action_c__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_as_action_c__WEBPACK_IMPORTED_MODULE_1__);\nconsole.log(\"hahahh\")\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/as-action_c.js":
/*!***************************!*\
  !*** ./js/as-action_c.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Vue.component('as-action', {\n    template: `\n    <div class=\"as-action-body\">\n    <row>\n        <i-col span=\"4\" style=\"padding-right:10px;\">\n            <i-select v-model=\"selectionRes\" @on-change=\"selectionOnChange\" :class=\"{'as-action-error':isEmpty}\"\n                      :disabled=\"disabled\">\n                <i-option v-for=\"(item,index) in selectionData\" :key=\"index+indexing\" :value=\"item.value\">\n                    {{item.label}}\n                </i-option>\n            </i-select>\n        </i-col>\n        <i-col span=\"18\" v-for=\"(item,index) in selectionData\" :key=\"index\"\n               v-if=\"selectionRes === item.value\">\n            <component :is=\"item.comp\" :indexing=\"indexing\" :group=\"group\" :disabled=\"disabled\"\n                       :control=\"control\"></component>\n        </i-col>\n        <i-col span=\"2\" class=\"as-icon-body\">\n            <Icon title=\"上移\" size=\"20\" class=\"as-action-icon\" style=\"color:#2D8CF0;\" type=\"ios-arrow-up\"\n                  @click=\"upStepAction(indexing)\" v-if=\"showUp\"></Icon>\n            <Icon title=\"下移\" size=\"20\" class=\"as-action-icon\" style=\"color:#2D8CF0;\" type=\"ios-arrow-down\"\n                  @click=\"downStepAction(indexing)\" v-if=\"showDown\"></Icon>\n            <Icon title=\"删除\" size=\"20\" class=\"as-action-icon\" style=\"color:#e92322;\" type=\"ios-close-outline\"\n                  @click=\"deleteStepAction(indexing)\" v-if=\"showDel\"></Icon>\n        </i-col>\n    </row>\n</div>\n    `,\n    name: 'as-action',\n    store,\n    props: {\n        selectionData: {\n            type: Array,\n            default () {\n                return this.$store.state.selectionData;\n            }\n        },\n        current: {\n            type: Object,\n            default () {\n                return {};\n            }\n        },\n        group: {\n            type: String,\n            default: 'group0'\n        },\n        showUp: {\n            type: Boolean,\n            default: true,\n        },\n        showDown: {\n            type: Boolean,\n            default: true,\n        },\n        showDel: {\n            type: Boolean,\n            default: true,\n        },\n        disabled: {\n            type: Boolean,\n            default: false,\n        },\n        control: {\n            type: Boolean,\n            default: false,\n        }\n    },\n    data() {\n        return {\n            selectionRes: \"\",\n            isEmpty: false,\n        }\n    },\n    watch: {\n        selectionData(val) {\n            this.selectionData = val;\n        },\n    },\n    computed: {\n        indexing() {\n            return this.current.step - 1;\n        },\n        allActionRes() {\n            return this.$store.state.allActionRes;\n        },\n    },\n    components: componentList,\n    methods: {\n        selectionOnChange(value) {\n            this.validateValue();\n            this.$store.state.allActionRes[this.group][this.indexing].action.name = value;\n            let current = {};\n            for (let i = 0; i < this.selectionData.length; i++) {\n                if (this.selectionData[i].value == value) {\n                    current = this.selectionData[i];\n                    break;\n                }\n            }\n            this.$emit('as-action-select-change', current, this.indexing);\n        },\n        backValue() {\n            if (this.$store.state.allActionRes[this.group].length != 0 && this.$store.state.allActionRes[this.group][this.indexing] != undefined) {\n                this.selectionRes = this.$store.state.allActionRes[this.group][this.indexing].action.name;\n            } else {\n                this.selectionRes = \"\";\n            }\n        },\n        validateValue() {\n            if (this.selectionRes == \"\") {\n                this.isEmpty = true;\n            } else {\n                this.isEmpty = false;\n            }\n            return this.isEmpty;\n        },\n        deleteStepAction(index) {\n            let temp = JSON.parse(JSON.stringify(this.allActionRes[this.group]));\n            this.allActionRes[this.group].splice(0, this.allActionRes[this.group].length);\n            temp.map(item => {\n                if (item.step > index) {\n                    item.step -= 1;\n                }\n                return item;\n            });\n            temp.splice(index, 1);\n            temp.forEach(item => {\n                this.allActionRes[this.group].push(item);\n            });\n            this.$store.state.validateFun[this.group].splice(this.indexing, 1);\n            this.allActionRes[this.group].forEach((item, ind) => {\n                this.$store.commit('updateValue', { group: this.group, index: ind });\n            });\n            this.$store.commit('setValiateFun', this.group);\n        },\n        upStepAction(index) {\n            if (index > 0) {\n                let temp = JSON.parse(JSON.stringify(this.allActionRes[this.group]));\n                this.allActionRes[this.group].splice(0, this.allActionRes[this.group].length);\n                temp[index].step -= 1;\n                temp[index - 1].step += 1;\n                let tempOption = temp[index - 1];\n                this.$set(temp, index - 1, temp[index]);\n                this.$set(temp, index, tempOption);\n\n                if (temp[index - 1].action.name == temp[index].action.name) {\n                    setTimeout(() => {\n                        temp.forEach(item => {\n                            this.allActionRes[this.group].push(item);\n                        });\n                    }, 0);\n                } else {\n                    temp.forEach(item => {\n                        this.allActionRes[this.group].push(item);\n                    });\n                }\n\n                this.allActionRes[this.group].forEach((item, ind) => {\n                    this.$store.commit('updateValue', { group: this.group, index: ind });\n                });\n            }\n        },\n        downStepAction(index) {\n            if (index < this.allActionRes[this.group].length - 1) {\n                let temp = JSON.parse(JSON.stringify(this.allActionRes[this.group]));\n                this.allActionRes[this.group].splice(0, this.allActionRes[this.group].length);\n                temp[index].step += 1;\n                temp[index + 1].step -= 1;\n                let tempOption = temp[index + 1];\n                this.$set(temp, index + 1, temp[index]);\n                this.$set(temp, index, tempOption);\n\n                if (temp[index + 1].action.name == temp[index].action.name) {\n                    setTimeout(() => {\n                        temp.forEach(item => {\n                            this.allActionRes[this.group].push(item);\n                        });\n                    }, 0);\n                } else {\n                    temp.forEach(item => {\n                        this.allActionRes[this.group].push(item);\n                    });\n                }\n\n\n                this.allActionRes[this.group].forEach((item, ind) => {\n                    this.$store.commit('updateValue', { group: this.group, index: ind });\n                });\n            }\n        }\n    },\n    mounted() {\n        this.backValue();\n        this.$store.state.updateFun[this.group][this.indexing] = this.backValue;\n        this.$store.state.validateFun[this.group][this.indexing] = { select: this.validateValue };\n    },\n    beforeUpdate() {\n        this.backValue();\n        this.$store.state.updateFun[this.group][this.indexing] = this.backValue;\n        this.$store.state.validateFun[this.group][this.indexing] = { select: this.validateValue };\n    },\n})\n\n//# sourceURL=webpack:///./js/as-action_c.js?");

/***/ }),

/***/ "./js/store.js":
/*!*********************!*\
  !*** ./js/store.js ***!
  \*********************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"store\", function() { return store; });\nconst storeObject = {\n    state: {\n        selectionData: [\n            { label: '下载介质', value: 'download', comp: 'download-medium' },\n            { label: '修改文件', value: 'modifyfile', comp: 'edit-file' },\n            { label: '执行工具', value: 'exec', comp: 'perform-tools' },\n            { label: '执行命令', value: 'script', comp: 'perform-command' },\n            { label: '替换文件', value: 'alter', comp: 'alternate-file' },\n            { label: '删除文件', value: 'deletefile', comp: 'delete-file' },\n            { label: '创建文件', value: 'createfile', comp: 'creat-file' },\n            { label: '执行SQL', value: 'sql', comp: 'perform-sql' },\n            { label: '备份文件', value: 'backup', comp: 'backup-file' },\n        ],\n        allActionRes: new Object(),\n        updateFun: new Object(),\n        validateFun: new Object(),\n        emptyFlag: {},\n    },\n    getters: {},\n    mutations: {\n        saveActionRes(state, obj) {\n            let group = obj.group;\n            group = obj.group == undefined ? 'group0' : obj.group;\n            if (!state.allActionRes.hasOwnProperty(group)) {\n                state.allActionRes[group] = new Array();\n            }\n            let flag = state.allActionRes[group].some(item => {\n                if (item.step == obj.newValue.step) return true;\n            })\n            if (!flag) {\n                state.allActionRes[group].push(obj.newValue);\n            }\n        },\n        getActionRes(state, obj) {\n            let group = obj.group;\n            group = obj.group == undefined ? 'group0' : obj.group;\n            Vue.set(state.allActionRes, group, obj.data);\n        },\n        updateValue(state, obj) {\n            let group = obj.group;\n            group = obj.group == undefined ? 'group0' : obj.group;\n            state.updateFun[group][obj.index]();\n        },\n        setUpdateFun(state, group) {\n            group = group == undefined || group == '' ? 'group0' : group;\n            Vue.set(state.updateFun, group, new Array);\n        },\n        setValiateFun(state, group) {\n            group = group == undefined || group == '' ? 'group0' : group;\n            Vue.set(state.validateFun, group, new Array);\n        },\n        validate(state, group) {\n            let flagSelect = false;\n            let flagInput = false;\n            group = group == undefined ? 'group0' : group;\n            state.allActionRes[group].forEach((item, index) => {\n                if (state.validateFun[group][index].select && state.validateFun[group][index].select()) {\n                    flagSelect = true;\n                } else if (state.validateFun[group][index].input && state.validateFun[group][index].input()) {\n                    flagInput = true;\n                }\n            });\n            state.emptyFlag[group] = { flagSelect: flagSelect, flagInput: flagInput };\n        }\n    },\n    actions: {}\n}\nconst store = window.store = new Vuex.Store({\n    state: storeObject.state,\n    getters: storeObject.getters,\n    mutations: storeObject.mutations,\n    actions: storeObject.actions,\n});\n\n\n//# sourceURL=webpack:///./js/store.js?");

/***/ })

/******/ });