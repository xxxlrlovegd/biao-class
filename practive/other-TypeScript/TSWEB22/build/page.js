"use strict";
var Header = /** @class */ (function () {
    function Header() {
        var elem = document.createElement("div");
        elem.innerText = "This is Header";
        document.body.appendChild(elem);
    }
    return Header;
}());
var Content = /** @class */ (function () {
    function Content() {
        var elem = document.createElement("div");
        elem.innerText = "This is Content";
        document.body.appendChild(elem);
    }
    return Content;
}());
var Footer = /** @class */ (function () {
    function Footer() {
        var elem = document.createElement("div");
        elem.innerText = "This is Footer";
        document.body.appendChild(elem);
    }
    return Footer;
}());
var Page = /** @class */ (function () {
    function Page() {
        new Header();
        new Content();
        new Footer();
    }
    return Page;
}());
//此时在控制台可以打出header() content() foorter() page() 相应方法 全局暴露出去
//当我们只想暴露page 其他模块的不设置成全局变量 可以使用namespace 模式和webpack的模块化思想很像但是原理不一样
//示例见page1.ts
