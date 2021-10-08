export  //ts在不同文件夹下变量名会冲突
    //解释如下： 在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中，
    //使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。改成使用文件模块，文件中包含import或者export，
    //就会在当前文件中创建一个本地作用域
    let count: number;
count = 211
console.log("===4", count)

//TypeScript 能推断就让它推断，推断不出来的时候你要进行注释；