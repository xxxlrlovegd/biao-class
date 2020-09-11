import Http from '../lib/http';

let LoginService = {
  getList() {

  },
  //获取登录信息
  async login(params) {
    let res = await Http.post('/loginweb/user/login', params)
    return res;
  },
  async fetchUserInfo() {
    let res = await Http.get('/loginweb/user/about')
    return res;
  },
  async updatePassword() {
    let res = await Http.get('/loginweb/user/updatepassword', params)
    return res;
  },
}

export default LoginService