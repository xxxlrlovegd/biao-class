"use strict";
console.log("1");
var Preson = /** @class */ (function () {
    function Preson(name) {
        this.name = name;
    }
    Preson.prototype.greet = function () {
        return this.name + "\u4ECA\u5929\u662F\u5468\u4E94\u9E2D\uFF0C\u6240\u4EE5\u51B2\u9E2D\uFF01";
    };
    return Preson;
}());
var whh = new Preson("lurui xxxx");
console.log(whh.greet());
