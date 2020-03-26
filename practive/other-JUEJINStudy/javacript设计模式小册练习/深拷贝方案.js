// 深拷贝没有完美方案，每一个方案都有它的边界case
// 方案一取巧利用Json,局限性在于无法处理function正则等————只有当对象是个严格的JSON对象时才可
let a = ['aa', 'bb', 'cc']
let b = JSON.parse(JSON.stringify(a)) //此时对b进行数据处理将不会改变a里面的数据，及完成深拷贝！
    //方案二利用递归思想实现深拷贝
function deepclone(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let copy = {}
    if (obj.constructor === Array) {
        copy = []
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepclone(obj[key])
        }
    }
    return copy
}