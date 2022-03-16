class MyPromise8 {
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
        } catch (r) {
            reject(r);
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
        return new MyPromise8((resolve, reject) => {
            let callback = (type) => {
                try {
                    let result = type(this.PromiseResult);
                    if (result instanceof MyPromise8) {
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
                    reject(error)
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
        return new MyPromise8((resolve, reject) => {
            if (value instanceof MyPromise8) {
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
        return new MyPromise8((resolve, reject) => {
            reject(reason);
        });
    }
    static all(promises) {
        return new MyPromise8((resolve, reject) => {
            let count = 0,
                arr = [],
                len = promises.length;
            for (let index = 0; index < len; index++) {
                const element = promises[index];
                element.then(
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
        return new MyPromise8((resolve, reject) => {
            promises.forEach((element) => {
                element.then(
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