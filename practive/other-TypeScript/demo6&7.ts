export
    let arr = [1, 2, 3]
//数字类型的数组
let numberArr: number[]
numberArr = [1, 2, 3]
console.log(typeof numberArr)

//字符串类型的数组
const stringArr: string[] = ["a", "b", "c"]

//既是字符串类型又是数字类型的数组
const Arr: (number | string)[] = [1, "fds", 2]

//数组对象 普通的定义
const person: { name: string, age: number }[] = [
    { name: 'zhangsan', age: 18 },
    { name: 'lisi', age: 20 },
]
console.log("普通定义对象数组", person)
//这样定义 代码很麻烦 ts提供了个类型别名的概念
//先定义 type关键字 定义个对象
type obj = { name: string, age: number }
const person1: obj[] = [{ name: 'test', age: 16 }, { name: 'test2', age: 18 }]
console.log("type 关键字", person1)

//同样 用 class 来定义对象也是可以的
class obj1 {
    name: string;
    age: number;
}
const person2: obj1[] = [
    { name: '111', age: 111 },
    { name: '222', age: 222 }
]

console.log("class来定义数组对象", person2)


//元组 与 数组 区别就是 元组更加强大更加严格 数组的每一项对应的每个位置都需要去注释
const xiaojiejie: [string, string, number] = ["111", "teacher", 28];

//多维数组格式 用元组来定义

const xiaojiejies: [string, string, number][] = [
    ["111", "teacher", 28],
    ["222", "teacher", 18],
    ["333", "teacher", 25],
];