"use strict";
// TypeScript 给我们提供的类似模块化开发的语法
//它的好处就是让全局变量减少了很多，实现了基本的封装，减少了全局变量的污染。
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var ele = document.createElement('div');
            ele.innerText = "This is header";
            document.body.appendChild(ele);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var ele = document.createElement('div');
            ele.innerText = "This is content";
            document.body.appendChild(ele);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var ele = document.createElement('div');
            ele.innerText = "This is footer";
            document.body.appendChild(ele);
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
    Home.Page = Page;
})(Home || (Home = {}));
//深入namespace 就是使代码更加组件化
//可以详见page3
