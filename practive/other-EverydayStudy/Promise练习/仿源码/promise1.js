class MyPromise {
    //构造方法
    constructor(executor) {
      //添加属性
      this.PromiseState = 'pending';
      this.PromiseResult = null;
      //声明属性
      this.callbacks = [];
      //保存实例对象的 this 的值
      //resolve 函数
      let resolve = (data) => {
        //判断状态
        if (this.PromiseState !== 'pending') return;
        //1. 修改对象的状态 (promiseState)
        this.PromiseState = 'fulfilled'; // resolved
        //2. 设置对象结果值 (promiseResult)
        this.PromiseResult = data;
        //调用成功的回调函数
        setTimeout(() => {
          this.callbacks.forEach(item => {
            item.onResolved(data);
          });
        });
      }
      //reject 函数
      let reject = (data) => {
        //判断状态
        if (this.PromiseState !== 'pending') return;
        //1. 修改对象的状态 (promiseState)
        this.PromiseState = 'rejected'; // 
        //2. 设置对象结果值 (promiseResult)
        this.PromiseResult = data;
        //执行失败的回调
        setTimeout(() => {
          this.callbacks.forEach(item => {
            item.onRejected(data);
          });
        });
      }
      try {
        //同步调用『执行器函数』
        executor(resolve, reject);
      } catch (e) {
        //修改 promise 对象状态为『失败』
        reject(e);
      }
    }
    //then 方法封装
    then(onResolved, onRejected) {
      //判断回调函数参数
      if (typeof onRejected !== 'function') {
        onRejected = reason => {
          throw reason;
        }
      }
      if (typeof onResolved !== 'function') {
        onResolved = value => value;
        //value => { return value};
      }
      return new MyPromise((resolve, reject) => {
        //封装函数
        let callback = (type) => {
          try {
            //获取回调函数的执行结果
            let result = type(this.PromiseResult);
            //判断
            if (result instanceof MyPromise) {
              //如果是 MyPromise 类型的对象
              result.then(v => {
                resolve(v);
              }, r => {
                reject(r);
              })
            } else {
              //结果的对象状态为『成功』
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        }
        //调用回调函数  PromiseState
        if (this.PromiseState === 'fulfilled') {
          setTimeout(() => {
            callback(onResolved);
          });
        }
        if (this.PromiseState === 'rejected') {
          setTimeout(() => {
            callback(onRejected);
          });
        }
        //判断 pending 状态
        if (this.PromiseState === 'pending') {
          //保存回调函数
          this.callbacks.push({
            onResolved: function () {
              callback(onResolved);
            },
            onRejected: function () {
              callback(onRejected);
            }
          });
        }
      })
    }
    //catch 方法
    catch (onRejected) {
      return this.then(undefined, onRejected);
    }
    //添加 resolve 方法
    static resolve(value) {
      //返回promise对象
      return new MyPromise((resolve, reject) => {
        if (value instanceof MyPromise) {
          value.then(v => {
            resolve(v);
          }, r => {
            reject(r);
          })
        } else {
          //状态设置为成功
          resolve(value);
        }
      });
    }
    //添加 reject 方法
    static reject(reason) {
      return new MyPromise((resolve, reject) => {
        reject(reason);
      });
    }
    //添加 all 方法
    static all(promises) {
      //返回结果为promise对象
      return new MyPromise((resolve, reject) => {
        //声明变量
        let count = 0;
        let arr = [];
        //遍历
        for (let i = 0; i < promises.length; i++) {
          //
          promises[i].then(v => {
            //得知对象的状态是成功
            //每个promise对象 都成功
            count++;
            //将当前promise对象成功的结果 存入到数组中
            arr[i] = v;
            //判断
            if (count === promises.length) {
              //修改状态
              resolve(arr);
            }
          }, r => {
            reject(r);
          });
        }
      });
    }
    //添加 race 方法
    static race(promises) {
      return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i].then(v => {
            //修改返回对象的状态为 『成功』
            resolve(v);
          }, r => {
            //修改返回对象的状态为 『失败』
            reject(r);
          })
        }
      });
    }
   }
