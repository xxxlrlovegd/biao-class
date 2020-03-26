//实现静态方法版

class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }
    getItem(key) {
        return localStorage.getItem(key)
    }
    setItem(key, value) {
        return localStorage.setItem(key, value)
    }
}
const storage1 = storage.getInstance()
const storage2 = storage.getInstance()

storage1.setItem('name', 'lr')
storage1.getItem('name') //lr
storage2.getItem('name') //lr
storage1 === storage2 //true

// 闭包版
function StorageBase() {}
StorageBase.prototype.getItem = function(key) {
    return localStorage.getItem(key)
}
StorageBase.prototype.setItem = function(key, vlaue) {
    return localStorage.setItem(key, value)
}
const Storage = (function() {
    let instance = null
    return function() {
        if (!instance) {
            instance = new StorageBase()
        }
        return instance
    }
})()

const storage3 = new Storage()
const storage4 = new Storage()
storage3.setItem('name', 'lr')
storage3.getItem('name') //lr
storage4.getItem('name') //lr
storage3 = storage4 //true