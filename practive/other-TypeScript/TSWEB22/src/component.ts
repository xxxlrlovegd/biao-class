namespace Component {
    export class Header {
        constructor() {
            const ele = document.createElement("div")
            ele.innerText = "THIS IS HEADER"
            document.body.appendChild(ele)
        }
    }
    // 子命名空间应用-控制台打印 component.SubComponent
   export namespace SubComponent {
       export class test {
            constructor() {
                 console.log("hhh,testing")
            }
        }
    }
}