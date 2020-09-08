<style  lang="less" scoped>
.layout {
  background: #fff;
  position: relative;
  overflow: hidden;
}
.ivu-layout-header {
  background: #fff;
  padding: 0 10px;
  height: 64px;
  line-height: 64px;
}
.ivu-card-head p,
.ivu-card-head-inner {
  height: 32px;
  line-height: 32px;
}
.ivu-card-extra {
  position: absolute;
  right: 18px;
  top: 32px;
}
.ivu-layout-content {
  flex: auto;
}
.layout-footer-center {
  background: #f1f6fc;
  text-align: center;
}
.ivu-layout-footer {
  background: #f5f7f9;
  padding: 18px 50px;
}
.ivu-card-head {
    border-bottom: 1px solid #e8eaec;
    padding: 0px 16px;
    line-height: 1;
}
.ivu-card-body {
    padding: 0px 16px;
}
.ivu-input,
.ivu-input:hover,
.ivu-input:focus {
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: 0 0 0 2px transparent;
  border-bottom: 1px solid #dcdee2;
}
.ivu-form-item-error .ivu-input,
.ivu-form-item-error .ivu-input:hover,
.ivu-form-item-error .ivu-input:focus {
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: 0 0 0 2px transparent;
  border-bottom: 1px solid #ed4014;
}
.imgStyle {
  width: 12%;
  position: relative;
  top: 4px;
}
</style>
  <template>
  <div class="layout">
    <Layout :style="{background:'#F1F6FC'}">
      <Header>
       <authHeader/>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <div style="min-height: 568px;margin:20px 0px; background: url(../assets/img/login/back.png) 100% 100%; no-repeat;">
          <Card style="width:700px;position: relative;top: 70px;left: 25%;">
            <Menu slot="title" mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            企业注册
        </MenuItem>
        <MenuItem name="2">
            用户注册
        </MenuItem>
    </Menu>
            <!-- <p slot="title">
              <span style="font-size:26px;color:#2CA987;font-weight: bold;">注册</span>
            </p> -->
           
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
              <FormItem prop="user">
                <i-Input
                  prefix="ios-contact"
                  type="text"
                  v-model="formInline.user"
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
                <Button type="primary" size="large" long @click="handleSubmit('formInline')">注册</Button>
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
import authHeader from '../views/authHeader'
export default {
   components: {
    authHeader
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
        user: '',
        password: '',
      },
      ruleInline: {
        user: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
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
    }
  },
  mounted() {
  },
  methods: {
    // 加密方法
    encrypt(password) {
      const key = CryptoJS.enc.Utf8.parse('10ynnr3j4wzvzsht')
      const iv = CryptoJS.enc.Utf8.parse('vbujk8lhfmr19jb2')
      const encrypted = CryptoJS.AES.encrypt(password, key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
      })
      return encrypted.toString()
    },
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log("--------",this.formInline)
          this.formInline.password=this.encrypt(this.formInline.password)
          this.$router.push('/Register')
        } else {
            this.$Message.error('Fail!')
        }
      })
    },
  },
}
</script>