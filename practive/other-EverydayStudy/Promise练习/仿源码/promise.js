//声明构造函数
function Promise(executor) {
  //设置状态和结果属性
  this.PromiseState = "pending";
  this.PromiseResult = null;
  this.callbacks = []; //放入回调函数的容器
  //保存实例对象
  const self = this;
  //resolve函数
  function resolve(data) {
    //判断状态
    if (self.PromiseState != "pending") return; //状态只能是 pending->fulfilled
    self.PromiseState = "fulfilled";
    self.PromiseResult = data;
    //执行回调函数
    self.callbacks.forEach(function (element) {
      element.onResolved(data);
    });
  }
  //reject函数
  function reject(data) {
    if (self.PromiseState != "pending") return; //状态只能是 pending->rejected
    self.PromiseState = "rejected";
    self.PromiseResult = data;
    //执行回调函数
    self.callbacks.forEach(function (element) {
      element.onRejected(data);
    });
  }
  //用try catch 对 throw错误进行处理
  try {
    //同步调用 执行器函数
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
Promise.prototype.then = function (onResolved, onRejected) {
  return new Promise((resolve, reject) => {
    //调用回调函数  PromiseState
    //  if(this.PromiseState === 'fulfilled'){ onResolved(this.PromiseResult);} 未修改时代码
    let result = onResolved(this.PromiseResult);
    console.log(result);
    if (this.PromiseState === "fulfilled") {
      try {
        //获取回调函数的执行结果
        let result = onResolved(this.PromiseResult);
        console.log(result);
        //判断
        if (result instanceof Promise) {
          //如果是 Promise 类型的对象,我就将下一个promise结果赋予外层
          result.then(
            (v) => {
              resolve(v);
            },
            (r) => {
              reject(r);
            }
          );
        } else {
          resolve(result);
        } //如果返回的不是promise对象,都将其赋予成功状态
      } catch (e) {
        alert(e);
        rejerect(e); //如果出错了,则返回失败状态
      }
    }
    if (this.PromiseState === "rejected") {
      onRejected(this.PromiseResult);
    }
    //判断 pending 状态
    if (this.PromiseState === "pending") {
      this.callbacks.push({ onResolved: onResolved, onRejected: onRejected });
    }
  });
};
