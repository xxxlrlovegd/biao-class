// TypeScript 给我们提供的类似模块化开发的语法
//它的好处就是让全局变量减少了很多，实现了基本的封装，减少了全局变量的污染。

namespace Home {
    class Header {
        constructor() {
            const ele = document.createElement('div')
            ele.innerText = "This is header"
            document.body.appendChild(ele)
        }
    }
    class Content {
        constructor() {
            const ele = document.createElement('div')
            ele.innerText = "This is content"
            document.body.appendChild(ele)
        }
    }
    class Footer {
        constructor() {
            const ele = document.createElement('div')
            ele.innerText = "This is footer"
            document.body.appendChild(ele)
        }
    }
    export class Page {
        constructor() {
            new Header()
            new Content()
            new Footer()
        }
    }
}

//深入namespace 就是使代码更加组件化
//可以详见page3