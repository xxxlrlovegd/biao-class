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
}
function getReumse1(per: person) {
    per.age > 20 && (per.xueli == '211' || per.xueli == '985') && console.log(per.name + 'pass');
    per.age < 20 || ((!per.xueli && per.xueli != '211' && per.xueli != '985') && console.log(per.name + 'no'));
}

function getInfo1(info: person) {
    console.log(info.name + '年龄：' + info.age + ',学历' + info.xueli)
}

getReumse('绿绿', 18, '211')
getReumse('红红', 16, '')
getReumse('晃晃', 24, '985')
let girl = {
    name: 'Amy',
    age: 18,
    xueli:''
}
getReumse1(girl)
getInfo1(girl)