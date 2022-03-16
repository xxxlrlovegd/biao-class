class Promise12 {
  //加油鸭lr
  constructor(executor) {
    this.promiseState = "pending";
    this.promiseResult = null;
    this.callBacks = [];
    let resolve = (data) => {
      if (this.promiseState != "pending") return;
      this.promiseState = "fulfilled";
      this.promiseResult = data;
      setTimeout(() => {
        this.callBacks.forEach((element) => {
          element.onResolved(data);
        });
      });
    };
    let reject = (data) => {
      if (this.promiseState != "pending") return;
      this.promiseState = "rejected";
      this.promiseResult = data;
      setTimeout(() => {
        this.callBacks.forEach((element) => {
          element.onRejected(data);
        });
      });
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onResolved, onRjected) {
    if (typeof onResolved != "function") {
      onResolved = (value) => value;
    }
    if (typeof onRjected != "function") {
      onResolved = (reason) => {
        throw reason;
      };
    }
    return new Promise12((resolve, reject) => {
      let callback = (type) => {
        try {
          let res = type(this.promiseResult);
          if (res instanceof Promise12) {
            res.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            resolve(res);
          }
        } catch (error) {
          reject(error);
        }
      };
      if (this.promiseState == "fulfilled") {
        setTimeout(() => {
          callback(onResolved);
        });
      }
      if (this.promiseState == "rejected") {
        setTimeout(() => {
          callback(onRjected);
        });
      }
      if (this.promiseState == "pending") {
        this.callBacks.push({
          onResolved: function () {
            callback(onResolved);
          },
          onRjected: function () {
            callback(onRjected);
          },
        });
      }
    });
  }
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }
  static resovle(value) {
    return new Promise12((resolve, reject) => {
      if (value instanceof Promise12) {
        value.then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      } else {
        resolve(value);
      }
    });
  }
  static reject(reason) {
    return new Promise12((resovle, reject) => {
      reject(reason);
    });
  }
  static all(promises) {
    return new Promise12((resolve, reject) => {
      let count = 0;
      let arr = [];
      let len = promises.length;
      for (let i = 0; i < len; i++) {
        promises[i].then(
          (v) => {
            arr[i] = v;
            if (++count == len) {
              resolve(arr);
            }
          },
          (r) => {
            reject(r);
          }
        );
      }
    });
  }
  static race(promises) {
    return new Promise12((resolve, reject) => {
      let len = promises.length;
      for (let i = 0; i < len; i++) {
        promises[i].then(
          (v) => {
            resolve(v);
          },
          (r) => {
            reject(r);
          }
        );
      }
    });
  }
}
