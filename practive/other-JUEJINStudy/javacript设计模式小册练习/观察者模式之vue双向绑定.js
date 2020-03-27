// 实现observer
function observe(target) {
    if (target && typeof target === 'object') {
        Object.keys(target).forEach((key) => {
            defineReactive(target, key, target[key])
        })
    }
}

function defineReactive(target, key, val) {
    const dep = new Dep()
    observe(val)
    Object.defineProperties(target, key, {
        enumerable: true,
        configurable: false,
        get: function() {
            return val
        },
        set: function(value) {
            console.log(`${target}属性的${val}值变成了${value}`)
            val = value
            dep.notify()
        }
    });
}

// 实现订阅者Dep
class Dep {
    constructor() {
        this.subs = []
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.forEach((sub) => {
            sub.update()
        })
    }
}