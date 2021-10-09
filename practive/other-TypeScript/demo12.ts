//类的构造函数
export
    class Person {
    public name: string
    constructor(name: string) {
        this.name = name
    }
}
let per = new Person("Lurui")
console.log(per.name)
//类的构造函数简写
class Person1 {
    constructor(public name: string) { }
}
let per1 = new Person1("Luruixx")
console.log(per1.name)

//类继承中的构造函数的写法 ——super必须要写不管父类有没有构造函数 都需要用这个关键字
class teacher extends Person1 {
    constructor(public age: number) {
        super("dddd")
    }
}
let teacPer = new teacher(23)
console.log(teacPer.name + teacPer.age)