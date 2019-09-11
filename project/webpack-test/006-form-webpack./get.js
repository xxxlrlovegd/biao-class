import lrform from '../006-form-webpack/lrForm'
let lrForm1 = lrform('#main-form1')
let data = lrForm1.getData()
let lrForm2 = lrform('#main-form2')
console.log("data=", data)
let data1 = lrForm2.getData()
console.log("data1=", data1)