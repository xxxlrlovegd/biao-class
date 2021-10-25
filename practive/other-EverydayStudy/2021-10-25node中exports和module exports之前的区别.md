### node中 exports 与 module exports之间的区别
### exports是module exports的引用
### exports可以直接调用，module exports 需要new对象之后才可以调用
### exports辅助module exports 去操作内存数据，最后真正require的还是module exports

### export 和 export default区别
### 相同:export与export default均可用于导出常量、函数、文件、模块等
### 不同：在一个文件或模块中，export、import可以有多个，export default仅有一个
###       通过export方式导出，在导入时要加{ }，export default则不需要
###       export能直接导出变量表达式，export default不行

