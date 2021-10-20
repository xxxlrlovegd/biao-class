class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }
  
  class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }
  
  class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }
  
  class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
}
  //此时在控制台可以打出header() content() foorter() page() 相应方法 全局暴露出去
  //当我们只想暴露page 其他模块的不设置成全局变量 可以使用namespace 模式和webpack的模块化思想很像但是原理不一样
  //示例见page1.ts