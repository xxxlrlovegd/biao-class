import { stat } from "fs"

const Status = {
    Message: 0,
    SPA: 1,
    Xijiao: 2,
}
function getServe(status: any) {
    if (status == Status.Message) {
        return "message"
    } else if (status == Status.SPA) {
        return "spa"
    } else {
        return "xijiao"
    }
}
const res = getServe(1)
console.log(`"今天要去" + ${res}`)
//枚举enum
//通常枚举的下标都是从0开始的
//如果想从1开始可以进行赋值操作；
enum STATUS {
    Message,   //重新定义下标值 Message=1,
    Spa,
    Xijiao
}
function getServe1(status: any) {
    if (status == STATUS.Message) {
        return "message"
    } else if (status == STATUS.Spa) {
        return 'spa'
    } else {
        return "xijiao"
    }
}

const res1 = getServe1(2)
console.log(`今天要去${res1}`)

console.log(STATUS.Message,STATUS.Spa,STATUS[2])