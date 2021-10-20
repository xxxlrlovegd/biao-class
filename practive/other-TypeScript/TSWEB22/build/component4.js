"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
//用export之后运用require
var Header = /** @class */ (function () {
    function Header() {
        var ele = document.createElement("div");
        ele.innerText = "This is XXXX";
        document.body.appendChild(ele);
    }
    return Header;
}());
exports.Header = Header;
