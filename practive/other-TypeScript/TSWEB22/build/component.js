"use strict";
var Component;
(function (Component) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement("div");
            ele.innerText = "THIS IS HEADER";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    Component.Header = Header;
    // 子命名空间应用-控制台打印 component.SubComponent
    var SubComponent;
    (function (SubComponent) {
        var test = /** @class */ (function () {
            function test() {
                console.log("hhh,testing");
            }
            return test;
        }());
        SubComponent.test = test;
    })(SubComponent = Component.SubComponent || (Component.SubComponent = {}));
})(Component || (Component = {}));
