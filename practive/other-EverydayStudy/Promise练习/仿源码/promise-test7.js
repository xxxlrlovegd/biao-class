class MyPromise7 {
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
        return new MyPromise7((resolve, reject) => {
            let callback = (type) => {
                let result = type(this.PromiseResult);
                try {
                    if (result instanceof MyPromise7) {
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
        return this.then(undefined, onRejected);
    }
    static resolve(value) {
        return new MyPromise7((resolve, reject) => {
            if (value instanceof MyPromise7) {
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
        return new MyPromise7((resolve, reject) => {
            reject(reason);
        });
    }
    static all(promises) {
        return new MyPromise7((resolve, reject) => {
            let len = promises.length,
                count = 0,
                arr = [];
            for (let index = 0; index < len; index++) {
                promises[index].then(
                    (v) => {
                        arr[index] = v;
                        count++;
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
        return new MyPromise7((resolve, reject) => {
            promises.forEach((item) => {
                item.then(
                    (v) => {
                        resolve(v);
                    },
                    (r) => {
                        reject(r);
                    }
                );
            });
        });
    }
}