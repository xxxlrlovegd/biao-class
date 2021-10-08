//普通函数 注释参数类型
function totalNum(one: number, two: number) {
    return one+two
}

let total = totalNum(1, 2)
console.log(total)

//普通函数 注释参数类型 返回值类型 这种写法比较严谨
function totalNum1(one: number, two: number): number {
    return one+two
}

//普通函数 传参类型是对象 ts写法（用ts你记住无规矩不成方圆 又曲了一波）
function add({ one,two}:{ one: number, two: number }):number {
    return one+two
}

console.log(add({one:1,two:3}))

