//类的使用
class Lady {
    content = "hi 靓女！"
    say() {
        return this.content
    }
}
let people=new Lady()
console.log(people.say())

//类的继承
class xiaojj extends Lady {
    sayLove() {
        return 'i love you!'
    }
    say() {
        // return 'Hi myDear!' 
        // super关键字的使用,super它代表父类中的方法！！
        return super.say()+'爱你~~'
    }
}
 
let xjj = new xiaojj()
console.log(xjj.sayLove())
console.log(xjj.say())
