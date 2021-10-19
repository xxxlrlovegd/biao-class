//基础类
class selectGirl {
    constructor(private girls: string[]) { }
    getGirl(index: number): string {
        return this.girls[index]
    }
}

const myGirl = new selectGirl(["张三", "李四", "王五", "赵六"])
console.log(myGirl.getGirl(2))

//泛型在类中的应用
class selectGirl1<T>{
    constructor(private girls: T[]) { }
    getGirl(index: number): T {
        return this.girls[index]
    }
}
const myGirl1 = new selectGirl1<string>(["张三", "李四", "王五", "赵六"])
console.log(myGirl1.getGirl(0))
const myGirl2 = new selectGirl1<number>([1, 2, 3, 4])
console.log(myGirl2.getGirl(3))

//泛型中继承
//
interface Girl {
    name: string
}
class getGilrInfo<T extends Girl>{
    constructor(private girl: T[]) { }
    getGilrInfo(index: number): string {
        return this.girl[index].name
    }
}

let amy = new getGilrInfo([{ name: "11dsd1" }, { name: "222" }])
console.log(amy.getGilrInfo(0))

