var msg = require('./b').msg
console.log("msg", msg)
var item = require('./b').item
item.forEach(e => {
    console.log("用户名", e.name)
})

console.log("=============")
console.log("test--------", require('./b').test)
console.log("-----------------")
console.log('npx webpack -w 指令牛逼鸭！6666')