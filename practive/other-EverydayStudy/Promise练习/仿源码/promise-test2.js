class MyPromise2 { 
    constructor(executor) { 
        this.PromiseState = 'pending';
        this.PromiseResult = null;
        this.callbacks = [];
        let resolve = (data) => { 
            if (this.PromiseState !== 'pending') return;
            this.PromiseState="fulfilled"
            this.PromiseResult = data;
            setTimeout(() => { 
                this.callbacks.forEach(item => { 
                    item.onResolved(data);
                })
            })
        }
        let reject = data => { 
            if (this.PromiseState !== 'pending') return;
            this.PromiseState = "rejected";
            this.PromiseResult = data;
            setTimeout(() => {
                this.callbacks.forEach(item => {
                    item.onRejected(data);
                });
            });
        }
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }
    then(onResolved, onRejected) { 

    }
    catch(onRejected) { 

    }
    static resolve(value) { 

    }
    static reject(reason) { 

    }
    static all(promises) { 

    }
    static race(promises) { 

    }
}