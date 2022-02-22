class MyPromise4 {
    constructor(executor) {
        this.promiseState = "pending";
        this.promiseResult = null;
        this.callBacks = [];
        let resolve = (data) => {
            if (this.promiseState !== "pending") return;
            this.promiseState = "fulfilled";
            this.promiseResult = data;
            setTimeout(() => {
                this.callBacks.forEach((item) => {
                    item.onResolved(data);
                });
            });
        };
        let reject = (data) => {
            if (this.promiseState !== "pending") return;
            this.promiseState = "rejected";
            this.promiseResult = data;
            setTimeout(() => {
                this.callBacks.forEach((item) => {
                    this.callBacks.forEach((item) => {
                        item.onRejected(data);
                    });
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
        return new MyPromise4((resolve, reject) => {
            let callback = (type) => {
                try {
                    let result = type(this.promiseResult);
                    if (result instanceof MyPromise4) {
                        result.then(
                            (v) => {
                                resolve(v);
                            },
                            (e) => {
                                reject(e);
                            }
                        );
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            if (this.promiseState === "fulfilled") {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this.promiseState === "rejected") {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            if (this.promiseState === "pending") {
                this.callBacks.push({
                    onResolved: function () {
                        callback(onRejected);
                    },
                    onRejected: function () {
                        callback(onRejected);
                    },
                });
            }
        });
    }
    catch (onRejected) {
        this.then(undefined, onRejected);
    }
    static resolve(value) {
        return new MyPromise4((resolve, reject) => {
            if (value instanceof MyPromise4) {
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
        return new MyPromise4((resolve, reject) => {
            reject(reason);
        });
    }
    static all(promises) {
        return new MyPromise4((resolve, reject) => {
            let count = 0,
                arr = [],
                len = promises.length;
            for (let index = 0; index < len; index++) {
                promises[index].then(
                    (v) => {
                        count++;
                        arr[index] = v;
                        if (count == len) {
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
        return new MyPromise4((resolve, reject) => {
            promises.forEach(item => {
                item.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            })
        })
    }
}

