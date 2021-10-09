//类的getter setter static
class xiaojiejie {
    constructor(private age: number) { }
    get getAge() {
        return this.age - 16
    }
    set setAge(age: number) {
        this.age = age + 5
    }
    static sayHello() {
        return "Hello world"
    }
}
console.log(xiaojiejie.sayHello()) //static 关键可以直接在类中调用方法
let mv = new xiaojiejie(36)
mv.setAge = 15
console.log(mv.getAge)
