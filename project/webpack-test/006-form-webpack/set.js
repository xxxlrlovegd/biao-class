import lrform from '../006-form-webpack/lrForm'
let lrForm = lrform("#main-form")
let user = {
    name: 'lr',
    age: 18,
    sex: 'female',
    email: '6666@qq.com',
    haobit: ['play', 'eat']
}
lrForm.setData(user)