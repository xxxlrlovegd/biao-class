### Promise 是一个解决异步编程的解决方案，对于传统的回调函数事件来说，能更好的去解决回调地狱，减少回调嵌套。

### Promise对象是一种异步操作，有三种状态pending，resolved（fulfilled）,rejected;
### 状态变化只能是 pending->resolved;pedding->rejected

### 啊啊啊 一天天啥都没学习明白 真是好烦啊啊啊啊啊

### 振作起来


### Promise.all是promise数组状态都是成功则按照先后顺序返回结果不伦执行快慢；出现失败则直接返回第一个失败状态；
### Promise.race是谁先执行完就先返回谁,不关心返回状态成功与否；
### Promise.any只关心返回最快且成功的promise对象，所有promise失败则会返回失败，AggregateError: All promises were rejected
### Promise.all和Promise.any 相反结果，all全部成功则返回成功；race全部失败则返回失败；
### Promise.any和Promise.race 都是只关心执行最快的那个，但是any需要关心状态是成功的；
### Promise.allSettled 返回结果一直都是成功状态，返回结果集就是promise对象的结果集，promise对象是成功那状态就是fulfilled,是失败就是rejeced

### ES5实现promise