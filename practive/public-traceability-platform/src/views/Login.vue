<style  lang="less" scoped>
.layout {
  background: #fff;
  position: relative;
  overflow: hidden;
}
/deep/.ivu-layout-header {
  background: #fff;
  padding: 0 10px;
  height: 64px;
  line-height: 64px;
}
/deep/.ivu-card-head {
  border: none;
  padding: 26px 20px 20px 20px;
  line-height: 1;
}
/deep/.ivu-card-head p,
/deep/.ivu-card-head-inner {
  height: 32px;
  line-height: 32px;
}
/deep/.ivu-card-extra {
  position: absolute;
  right: 18px;
  top: 32px;
}
/deep/.ivu-layout-content {
  flex: auto;
  background: url(../assets/img/login/back.png) no-repeat;
  background-size: 100% 100%;
}
.layout-footer-center {
  background: #f1f6fc;
  text-align: center;
}
/deep/.ivu-layout-footer {
  background: #f5f7f9;
  padding: 18px 50px;
}
/deep/.ivu-card-body {
  padding: 0px 16px;
}
/deep/.ivu-input,
/deep/.ivu-input:hover,
/deep/.ivu-input:focus {
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: 0 0 0 2px transparent;
  border-bottom: 1px solid #dcdee2;
}
/deep/.ivu-form-item-error .ivu-input,
/deep/.ivu-form-item-error .ivu-input:hover,
/deep/.ivu-form-item-error .ivu-input:focus {
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: 0 0 0 2px transparent;
  border-bottom: 1px solid #ed4014;
}
</style>
  <template>
  <div class="layout">
    <Layout :style="{background:'#F1F6FC'}">
      <Header>
        <authHeader />
      </Header>
      <Content :style="{padding: '0 50px'}">
        <div style="min-height: 568px;margin:20px 0px;">
          <Card style="width:400px;position: relative;top: 35px;left: 58%;">
            <p slot="title">
              <span style="font-size:26px;color:#2CA987;font-weight: bold;">欢迎登录</span>
            </p>
            <a type="primary" href="/#/Register" slot="extra">
              <span style="color:#999;">没有账户？</span>
              <span style="color:#4EA477;">去注册>></span>
            </a>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem prop="name">
                <i-Input
                  prefix="ios-contact"
                  type="text"
                  v-model="formInline.name"
                  placeholder="请输入账号/邮箱"
                ></i-Input>
              </FormItem>
              <FormItem prop="password">
                <i-Input
                  prefix="ios-lock"
                  type="password"
                  v-model="formInline.password"
                  placeholder="请输入登录密码"
                ></i-Input>
              </FormItem>
              <FormItem>
                <slide-verify
                  ref="slideblock"
                  :l="42"
                  :r="10"
                  :w="360"
                  :h="155"
                  slider-text="向右滑动滑块填充拼图"
                  :accuracy="verify.accuracy"
                  @success="onSuccess"
                  @fail="onFail"
                  @refresh="onRefresh"
                  @again="onAgain"
                  :imgs="verify.imgs"
                ></slide-verify>
              </FormItem>
              <FormItem>
                <Button type="primary" size="large" long @click="handleSubmit('formInline')">登录</Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </Content>
      <Footer class="layout-footer-center">黑龙江邮政易通信息网络有限责任公司所属</Footer>
    </Layout>
  </div>
</template>
<script>
// import axios from 'axios'
import * as CryptoJS from 'crypto-js'
import yz1Img from '../assets/img/login/yz1.jpg'
import yz2Img from '../assets/img/login/yz2.jpg'
import yz3Img from '../assets/img/login/yz3.jpg'
import yz4Img from '../assets/img/login/yz4.jpg'
import authHeader from '../views/authHeader'
export default {
  components: {
    authHeader,
  },
  data() {
    return {
      menuItem: [
        { id: 1, name: '首页' },
        { id: 2, name: '联盟管理' },
        { id: 3, name: '接口文档' },
        { id: 4, name: '农产品系统' },
        { id: 5, name: '高考录取通知书系统' },
      ],
      formInline: {
        name: '',
        password: '',
      },
      ruleInline: {
        name: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur',
          },
        ],
      },
      verify: {
        accuracy: 1,
        imgs: [yz1Img, yz2Img, yz3Img, yz4Img],
        flag: false,
      },
    }
  },
  mounted() {
    this.verify.flag = false
  },
  methods: {
    // 加密方法
    encrypt(password) {
      const key = CryptoJS.enc.Utf8.parse('10ynnr3j4wzvzsht')
      const iv = CryptoJS.enc.Utf8.parse('vbujk8lhfmr19jb2')
      const encrypted = CryptoJS.AES.encrypt(password, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding,
      })
      return encrypted.toString()
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid && this.verify.flag) {
          console.log('--------', this.formInline)
          this.formInline.password = this.encrypt(this.formInline.password)
          sessionStorage.setItem('UserInfo', this.formInline)
          this.$router.push('/home')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    onSuccess(times) {
      console.log('验证通过，耗时 ' + times + '毫秒')
      this.verify.flag = true
    },
    onFail() {
      this.$Message.error('验证不通过,请重新验证!')
      this.verify.flag = false
    },
    onRefresh() {
      console.log('点击了刷新小图标')
    },
    onAgain() {
      console.log('检测到非人为操作的哦！')
      // 刷新
      this.$refs.slideblock.reset()
    },
  },
}
</script>