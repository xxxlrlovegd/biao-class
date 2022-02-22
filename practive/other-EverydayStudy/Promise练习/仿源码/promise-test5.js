class MyPromise5 {
    constructor(executor) {
        this.PromiseState = "pending";
        this.PromiseResult = null;
        this.callBacks = [];
        let reject = (data) => {
            if (this.PromiseState !== "pending") return;
            this.PromiseState = "fulfilled";
            this.PromiseResult = data;
            setTimeout(() => {
                this.callBacks.forEach((item) => {
                    item.onResolved(data);
                });
            });
        };
        let resolve = (data) => {
            if (this.PromiseState !== "pending") return;
            this.PromiseState = "rejected";
            this.PromsieResult = data;
            setTimeout(() => {
                this.callBacks.forEach((item) => {
                    item.onRejected(data);
                });
            });
        };
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    then(onResolve, onReject) {
        if (typeof onResolve !== "function") {
            onResolve = (value) => value;
        }
        if (typeof onReject !== "function") {
            onReject = (reason) => {
                throw reason;
            };
        }
        return new MyPromise5((resolve, reject) => {
            let callback = (type) => {
                try {
                    let result = type(this.PromiseResult);
                    if (result instanceof MyPromise5) {
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
                    callback(onResolve);
                });
            }
            if (this.PromiseState === "rejected") {
                setTimeout(() => {
                    callback(onReject);
                });
            }
            if (this.PromiseState === "pending") {
                this.callBacks.push({
                    onResolve: function () {
                        callback(onResolve);
                    },
                    onReject: function () {
                        callback(onReject);
                    },
                });
            }
        });
    }
    catch (reject) {
        return this.then(undefined, reject);
    }
    static resolve(value) {
        return new MyPromise5((resolve, reject) => {
            if (value instanceof MyPromise5) {
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
        return new MyPromise5((resolve, reject) => {
            reject(reason);
        });
    }
    static all(promises) {
        return new MyPromise5((resolve, reject) => {
            let count = 0,
                arr = [],
                len = promises.len;
            for (let i = 0; i < len; i++) {
                promises[i].then(
                    (v) => {
                        arr[i] = v;
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
        return new MyPromise5((resolve, reject) => {
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