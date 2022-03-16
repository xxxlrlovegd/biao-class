class Promise11 {
  constructor(executor) {
    this.promiseStat = "pending";
    this.promiseResult = null;
    this.callBacks = [];
    let resolve = (data) => {
      if (this.promiseStat != "pending") return;
      this.promiseStat = "fulfilled";
      this.promiseResult = data;
      setTimeout(() => {
        this.callBacks.forEach((item) => {
          item.onResolved(data);
        });
      });
    };
    let reject = (data) => {
      if (this.promiseStat != "pending") return;
      this.promiseStat = "rejected";
      this.promiseResult = data;
      setTimeout(() => {
        this.callBacks.forEach((item) => {
          item.onRejected(data);
        });
      });
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onResolved, onRejected) {
    if (typeof onResolved !== "function") {
      onResolved = (value) => value;
    }
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }
    return new Promise11((resolve, reject) => {
      let callback = (type) => {
        try {
          let res = type(this.promiseResult);
          if (res instanceof Promise11) {
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
      if (this.promiseStat == "fulfilled") {
        setTimeout(() => {
          callback(onResolved);
        });
      }
      if (this.promiseStat == "rejected") {
        setTimeout(() => {
          callback(onRejected);
        });
      }
      if (this.promiseStat == "pending") {
        this.callBacks.push({
          onResolved: function () {
            callback(onResolved);
          },
          onRejected: function () {
            callback(onRejected);
          },
        });
      }
    });
  }
  catch(onRejected) {
    this.then(undefined, onRejected);
  }
  static resolve(value) {
    return new Promise11((resolve, reject) => {
      if (value instanceof Promise11) {
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
    return new Promise11((resolve, reject) => {
      reject(reason);
    });
  }
  static all(promises) {
    return new Promise11((resolve, reject) => {
      let len = promises.length;
      let arr = [];
      let count = 0;
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
    return new Promise11((resolve, reject) => {
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

const data = [
  { name: "John", age: 18 },
  { name: "Michael", age: 17 },
  { name: "Sara", age: 16 },
];

const find = (data) => {
  const instance = {
    value: data,
    select: function (query = {}) {
      for (let key in query) {
        this.value = this.value.filter((item) => {
          return query[key].test(item[key]);
        });
      }
      console.log(this)
      return this;
    },
    orderBy: function (key, order) {
      this.value = this.value.sort((a, b) => {
        if (order === "asc") {
          return a[key] - b[key];
        }
        return b[key] - a[key];
      });
      return this;
    },
  };
  return instance;
};
const result = find(data)
  .select({
    name: /a/,
  })
  .orderBy("age", "asc");
console.log(result.value);