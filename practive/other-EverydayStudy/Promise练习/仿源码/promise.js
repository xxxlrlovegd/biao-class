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
    setTimeout(function () {
      self.callbacks.forEach((element) => {
        element.onResolved(data);
      });
    });
  }
  //reject函数
  function reject(data) {
    if (self.PromiseState != "pending") return; //状态只能是 pending->rejected
    self.PromiseState = "rejected";
    self.PromiseResult = data;
    //执行回调函数
    setTimeout(function () {
      self.callbacks.forEach(function (element) {
        element.onRejected(data);
      });
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
  if (typeof onResolved !== "function") {
    onResolved = (value) => {
      value;
    };
  }
  if (typeof onRejected !== "function") {
    onRejected = (reason) => {
      throw reason;
    };
  }
  return new Promise((resolve, reject) => {
    //调用回调函数  PromiseState
    function callback(type) {
      try {
        let result = type(this.PromiseResult);
        if (result instanceof Promise) {
          result.then(
            (v) => this.resolve(v),
            (e) => this.reject(e)
          );
        } else {
          resolve(result);
        }
      } catch (error) {
        reject(error);
      }
    }
    if (this.PromiseState === "fulfilled") {
      setTimeout(function () {
        callback(onResolved);
      }, 0);
    }
    if (this.PromiseState === "rejected") {
      setTimeout(function () {
        callback(onRejected);
      }, 0);
    }

    //判断 pending 状态
    if (this.PromiseState === "pending") {
      this.callbacks.push({
        onResolved: () => {
          callback(onResolved);
        },
        onRejected: function () {
          callback(onRejected);
        },
      });
    }
  });
};

Promise.prototype.catch = function () {
  return this.then(undefined, onRejected);
};

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(
        (v) => resolve(v),
        (e) => reject(e)
      );
    } else {
      resolve(value);
    }
  });
};

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  });
};

Promise.all = function (promise) {
  return new Promise((resolve, reject) => {
    const arr = [];
    let count = 0;
    let len = promise.length;
    for (let i = 0; i < len; i++) {
      promise[i].then(
        (v) => {
          arr[i] = v;
          if (++count == len) {
            resolve(v);
          }
        },
        (err) => {
          reject(err);
        }
      );
    }
  });
};

Promise.race = function (promise) {
  return new Promise((resolve, reject) => {
    let len = promise.length;
    for (let i = 0; i < len; i++) {
      promise[i].then(
        (v) => {
          resolve(v);
        },
        (e) => {
          reject(e);
        }
      );
    }
  });
};
