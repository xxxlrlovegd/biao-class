TypeScript学习

安装环境配置：npm i typescript -g
tsc -v 出现版本号则安装成功！
tsc --help 相应的命令操作
tsc test.ts会自动产生相应的js文件
node test.js 调用js文件
tsc -w test.ts监听ts文件的变化方便使用
一.原型类型
boolean布尔类型
语法：let isAdmin: boolean =true;
any(任意类型)
number数字类型
语法：let age: number=1;
string字符串类型
语法：let name:string ='whh';
let greeting: string=`Yo ${name}`; //也可使用模板字符串
void空类型
语法：null、underfined
应用场景最多的是函数不返回任何值的时候
如 let count:number =1;
funnction increment():void{
    count++;
}
increment();
console.log(count)
二引用类型
object对象类型（{}，[]，function/.prototype._proto_.constructor）
tuple元祖类型与Array几乎一样，但是会更加严格的限制到数组元素里面的类型和数组元素的个数；let rule:[number,number,number]
enum枚举类型
enum Size {L=10,M,S}
console.log(Size.M,Size.S)
三Class类 默认是public;子类可见可用protected;当被标记为private时，不能在它的类的外部访问;
class Preson{
    name:string;
    constructor(name:string){
        this.name=name;
    }//构造函数将name传到greet中
    greet(){
        return `${this.name}向你问好`
    }
}
let whh=new Preson('王华华');
console.log(whh.greet());//王华华向你问好
继承
class Student extends Person{
   major:string;
   constructor(name string,major string){
       super(name);
       this.major=major;
       studerGreet(){
           return `来自${this.major}的${this.name}向你问好！`
       }
   }
}
let whh=new Student('王华华','大白话系');
console.log(whh.studerGreet());
四接口
interface User{
    name:string,//必填
    age:number,//必填
    gender?:string,//可选
    [key:string]:any//其他属性
}
function createUser(data:User){
    console.log(data)
}

/**
 * 函数接口
 */
interface UserFunction {
  /**
   * @param name
   * @param age
   * @return 空类型
   */
  (name: string, age: number): void;
}

let createUser: UserFunction = (name, age) => {
  console.log(name, age);
}

createUser('王花花', 18);

/**
 * 接口在类上的限制
 */

 interface PersonInterface {
  name: string; // 必填
  age?: number; // 可选

  greeting(): string; // 必填
}

/**
 * 学生
 */
class Student implements PersonInterface {
  name: string;
  score: number;

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }

  greeting(): string {
    return `Yo, 我叫${this.name}~`
  }
}

/**
 * 老师
 */
class Teacher implements PersonInterface {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  greeting(): string {
    return `大家好，我是${this.name}老师。`
  }
}

let whh = new Student('王花花', 60);
let lsd = new Teacher('李拴蛋', 60);
console.log(whh.greeting());
console.log(lsd.greeting());
字符串新特性：模板拆分转化
参数默认值：给方法赋默认值的时候，默认值一定要写在最后
可选参数：需要处理可选参数没传参数的需要怎么做，可选参数一定放在必传参数的后面