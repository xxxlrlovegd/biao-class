console.log("1")
 
class Preson{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    greet(){
        return `${this.name}今天是周五鸭，所以冲鸭！`
    }
}
let whh=new Preson("lurui xxxx");
console.log(whh.greet())

