class MyPromise6 {
    constructor(executor) {
        this.PromiseState = "pending";
        this.PromsieResult = null;
        this.callbacks = [];
        let resolve = (data) => {
            if (this.PromiseState !== "pending") return;
            this.PromiseState = "fulfilled";
            this.PromsieResult = data;
            setTimeout(() => {
                this.callbacks.forEach((item) => {
                    item.onResolved(data);
                });
            });
            let reject = (data) => {
                if (this.PromiseState !== "pending") return;
                this.PromiseState = "rejected";
                this.PromsieResult = data;
                setTimeout(() => {
                    this.callbacks.forEach((item) => {
                        item.onRejected(data);
                    });
                });
            };
            try {
                executor(resolve, reject);
            } catch (r) {
                reject(r);
            }
        };
    }
    then(onResolved, onRejected) {
        if (typeof onRejected !== "function") {
            onResolved = (value) => value;
        }
        if (typeof onResolved !== "function") {
            onRejected = (reason) => {
                throw reason;
            };
        }
        return new MyPromise6((resovle, reject) => {
            let callback = (type) => {
                let result=type(this.PromsieResult)
                try {
                    if (result instanceof MyPromise6) {
                        result.then(
                            (v) => {
                                resovle(v);
                            },
                            (r) => {
                                reject(r);
                            }
                        );
                    } else {
                        resovle(result);
                    }
                } catch (r) {
                    reject(r);
                }
            };
            if (this.PromiseState == "fulfilled") {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this.PromiseState == "rejected") {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            if (this.PromiseState == "pending") {
                this.callbacks.push({
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
    catch (onRejected) {
      return  this.then(undefined, onRejected);
    }
    static resolve(value) {
        return new MyPromise6((resolve, reject) => {
            if (value instanceof MyPromise6) {
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
        return new MyPromise6((resolve, reject) => {
            reject(reason);
        });
    }
    static all(promises) {
        return new MyPromise6((resolve, reject) => {
            let len = promises.length;
            let count = 0
            let arr = []
            for (let index = 0; index < len; index++) {
                promises[index].then(
                    (v) => {
                        arr[index] = v
                        count++
                        if (count == len) {
                            resolve(arr)
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
        return new MyPromise6((resolve, reject) => {
            promises.forEach(item => {
                item.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            });
        })
    }
}