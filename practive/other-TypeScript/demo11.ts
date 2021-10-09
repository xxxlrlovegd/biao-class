//类的类型
export
    class Person {
    name: string | undefined;
}

const person = new Person();
person.name = "ssss sss ";

console.log(person.name);
//public 类内部外部都能进行调用
class Person1 {
    public name: string | undefined;
    public say() {
        return this.name + " hello!"
    }
}
const per1 = new Person1()
per1.name = "lr"
console.log(per1.say())
//private 类内部可以使用类的外部不能调用
class Person2 {
    private name: string ='xxxx';
    public say() {
        return this.name + " hello!"
    }
}
const per2 = new Person2()
console.log(per2.say())
//protected 允许在类内及继承子类中进行使用
class Person3 {
    protected name: string = "666";
    public sayHi() {
        return this.name+" hi!"
    }
}
class test extends Person3 {
    sayBye() {
     return   this.name +" bye!"
    }
   
}
const per3 = new test()
console.log(per3.sayHi())
console.log(per3.sayBye())

