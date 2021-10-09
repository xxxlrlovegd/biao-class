//类的只读属性
export
    class Person {
    public readonly name: string;
    constructor(name: string) { this.name = name }
}

let person = new Person("lurui11")
//person.name="fffff" //vscode 会报错 因为name是只读属性
console.log(person.name)

//抽象类 抽象方法 抽象属性 需要放在抽象类里面进行使用
abstract class XXX {
    abstract abs():any ;//抽象的属性不能有具体的实现
}
class teacher extends XXX {
    abs() {
        console.log("我喜欢传授知识！！")
    }
}
let teacheer = new teacher()
console.log(teacheer.abs())


