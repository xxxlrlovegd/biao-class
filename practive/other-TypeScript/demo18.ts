//联合类型
export
    interface Waiter {
    isShow: boolean,
    sayHi(): () => {}
}

interface Teacher {
    isShow: boolean,
    teach(): () => {}
}

function getInfo(person: Waiter | Teacher) {
    // person.sayHi() //报错 无法判断person 所属于哪个实例
    //所以就用到了类型保护
    //类型保护——断言
    if (person.isShow) {
        (person as Waiter).sayHi()
    } else {
        (person as Teacher).teach()
    }
    //类型保护——in语法
    if ('teach' in person) {
        person.teach()
    } else {
        person.sayHi()
    }
}
//类型保护——typeof
function add(first: number | string, second: number | string) {
    // return first+second //报错 找不到指定类型
    if (typeof first == 'string' || typeof second == 'string') {
        return `${first}${second}`
    }
    return first + second
}

//类型保护——instanceof 注意 instanceof只能应用在类上
class NumberObj {
    count!: number
}

function add1(first: string | NumberObj, second: string | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    } else {
        return `${first}${second}`
    }
}
