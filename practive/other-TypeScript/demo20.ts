//泛型——感觉这块的知识模糊
function join<type>(first: type, second: type) {
  return `${first}${second}`
}

console.log(join<string>("xxxx", "jjjjjjj"))
console.log(join<number>(234, 567))
console.log(join<string[]>(['222', "333"], ['666', '888']))
function myFun<Type>(params: Array<Type>) {
  console.log(params.length)
  return params;
}
myFun<string>(["123", "456"]);