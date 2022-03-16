class MyPromise10 {
    constructor(executor) {
        this.PromiseState = 'pending'
        this.PromiseResult = null
        this.callbacks = []
        let resolve = (data) => {
            if (this.PromiseState != 'pending') return
            this.PromiseState = 'fulfilled'
            this.PromiseResult = data
            setTimeout(() => {
                this.callbacks.forEach(item => {
                    item.onResolved(data)
                })
            })
        };
        let reject = (data) => {
            if (this.PromiseState != 'pending') return
            this.PromiseState = 'rejected'
            this.PromiseResult = data
            setTimeout(() => {
                this.callbacks.forEach(item => {
                    item.onRejected(data)
                })
            })
        };
        try {
            executor(resolve, reject)
        } catch (r) {
            reject(r)
        }
    };
    then(onResolved, onRejected) {
        if (typeof onResolved != 'function') {
            onResolved = value => value
        }
        if (typeof onRejected != 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        return new MyPromise10((resolve, reject) => {
            let callback = (type) => {
                try {
                    let res = type(this.PromiseResult)
                    if (res instanceof MyPromise10) {
                        res.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    } else {
                        resolve(res)
                    }
                } catch (r) {
                    reject(r)
                }
            }
            if (this.PromiseState == 'fulfilled') { 
                setTimeout(() => { 
                    callback(onResolved)
                })
            }
            if (this.PromiseState == 'rejected') { 
                setTimeout(() => { 
                    callback(onRejected)
                })
            }
            if (this.PromiseState == 'pending') { 
                this.callbacks.push({
                    onResolved: function () { callback(onResolved) },
                    onRejected: function () { callback(onRejected)}
                })
            }
        })
    };
    catch(onRejected) {
       return this.then(undefined,onRejected)
    };
    static resolve(value) {
        return new MyPromise10((resolve, reject) => { 
            if (value instanceof MyPromise10) {
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else { 
                resolve(value)
            }
        })
    };
    static reject(reason) {
        return new MyPromise10((resolve, reject) => { 
            reject(reason)
        })
    };
    static all(promises) {
        return new MyPromise10((resolve, reject) => { 
            let len = promises.len;
            let count = 0;
            let arr = [];
            for (let index = 0; index < len; index++) {
                promises[index].then(v => { 
                    count++
                    arr[index] = v
                    if (count == len) { 
                        resolve(arr)
                    }
                }, r => { 
                    reject(r)
                })
                
            }
        })
    };
    static race(promises) {
        return new MyPromise10((resolve, reject) => { 
            let len = promises.len;
            for (let index = 0; index < len; index++) {
                promises[index].then(v => { 
                    resolve(v)
                }, r => { 
                    reject(r)
                })
                
            }
        })
    };

}