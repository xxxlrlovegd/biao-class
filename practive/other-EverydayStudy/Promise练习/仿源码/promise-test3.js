class MyPromise3 {
    constructor(executor) {
        this.PromiseState = "pending";
        this.PromiseResult = null;
        this.callbacks = [];
        let resolve = (data) => {
            if (this.PromiseState !== "pending") return;
            this.PromiseState = "fulfilled";
            this.PromiseResult = data;
            setTimeout(() => {
                this.callbacks.forEach((item) => {
                    item.onResolved(data);
                });
            });
        };
        let reject = (data) => {
            if (this.PromiseState !== "pending") return;
            this.PromiseState = "rejected";
            this.PromiseResult = data;
            setTimeout(() => {
                this.callbacks.forEach((item) => {
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
        return new MyPromise3((resolve, reject) => {
            let callback = (type) => {
                try {
                    let result = type(this.PromiseResult);
                    if (result instanceof MyPromise3) {
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
                    }
                } catch (error) {
                    reject(error);
                }
            };
            if (this.PromiseState === "fulfilled") {
                setTimeout(() => {
                    callback(onResolved);
                });
            }
            if (this.PromiseState === "rejected") {
                setTimeout(() => {
                    callback(onRejected);
                });
            }
            if (this.PromiseState === "pending") {
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
        return this.then(undefined, onRejected);
    }
    static resolve(value) {
        return new MyPromise3((resolve, reject) => {
            if (value instanceof MyPromise3) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            }
        })
    }
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason);
        })
    }
    static all(promises) {
        return new MyPromise3((resolve, reject) => {
            let count = 0;
            let arr = [];
            for (let i = 0; i < Promise.length; i++) {
                promises[i].then(v => {
                    count++;
                    arr[i] = v;
                    if (count === promises.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                })
            }
        })
    }
    static race(promises) {
        return new MyPromise3((resolve, reject) => {
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

