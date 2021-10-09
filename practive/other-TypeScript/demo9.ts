export
    //按条件通过或者不通过
    function getReumse(name: string, age: number, xueli: string) {
    age > 20 && (xueli == '211' || xueli == '985') && console.log(name + "pass");
    age < 20 && (xueli != '211' && xueli != '985') && console.log(name + 'no');
}
//查看详细信息
function getInfo(name: string, age: number, xueli: string) {
    console.log(name + '年龄：' + age + ',学历' + xueli)
}

interface person {
    name: string,
    age: number,
    xueli?: string, //?:不是必需
    [propname: string]: any//允许加入任何值！！
    jn(): string //接口也可有方法 ，此方法的返回值是字符串！！
}
function getReumse1(per: person) {
    per.age > 20 && (per.xueli == '211' || per.xueli == '985') && console.log(per.name + 'pass');
    per.age < 20 || ((!per.xueli && per.xueli != '211' && per.xueli != '985') && console.log(per.name + 'no'));
}

function getInfo1(info: person) {
    console.log(info.name + '年龄：' + info.age + ',学历' + info.xueli + '性别：' + info.sex)
    console.log(info.jn())
}

getReumse('绿绿', 18, '211')
getReumse('红红', 16, '')
getReumse('晃晃', 24, '985')
let girl = {
    name: 'Amy',
    age: 18,
    xueli: '',
    sex: '男',
    jn() {
        return "咱会敲代码！！"
    },
    teach() {
        return "咱会传递知识！！"
    }
}
getReumse1(girl)
getInfo1(girl)

//类和接口结合使用
class people implements person {
    name = 'xxxx';
    age= 16;
    jn() {
        return "xixixi"
    }
}
console.log(people)
//接口间也能实现继承
interface teacher extends person {
    teach(): string
}

function getTeach(teacher:teacher) {
    console.log(teacher.teach())
}

getTeach(girl)