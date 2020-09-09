<style  lang="less" scoped>
.register {
  background: #fff;
  position: relative;
  overflow: hidden;

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
  /deep/.ivu-card-head {
    border-bottom: 1px solid #e8eaec;
    padding: 0px 16px;
    line-height: 1;
    margin: 0px 110px;
  }
  .ivu-card-body {
    padding: 0px 16px;
  }
  .formStyle {
    margin: 0px 100px;
  }
  .menuItem {
    margin: 0 50px 0 50px;
    font-size: 20px;
  }
}
</style>
  <template>
  <div class="register">
    <Layout :style="{background:'#F1F6FC'}">
      <Header>
        <authHeader />
      </Header>
      <Content :style="{padding: '0 50px'}">
        <div style="min-height: 568px;margin:20px 0px;">
          <Card style="width:700px;position: relative;top: 70px;left: 25%;">
            <Menu
              slot="title"
              mode="horizontal"
              theme="light"
              active-name="1"
              @on-select="selectMenu"
            >
              <MenuItem name="1" class="menuItem">企业注册</MenuItem>
              <MenuItem name="2" class="menuItem">用户注册</MenuItem>
            </Menu>
            <!-- <p slot="title">
              <span style="font-size:26px;color:#2CA987;font-weight: bold;">注册</span>
            </p>-->

            <Form
              ref="formInline"
              :model="formInline"
              :rules="ruleInline"
              class="formStyle"
              :label-width="80"
              :hide-required-mark="true"
              :label-colon="true"
            >
              <FormItem label="用户名" prop="user">
                <i-Input v-model="formInline.user" placeholder="请输入用户名"></i-Input>
              </FormItem>
              <FormItem label="用户密码" prop="password">
                <i-Input type="password" v-model="formInline.password" placeholder="请输入用户密码"></i-Input>
              </FormItem>
              <FormItem label="确认密码" prop="repassword">
                <i-Input type="password" v-model="formInline.repassword" placeholder="请输入用户密码"></i-Input>
              </FormItem>
              <FormItem label="邮箱" prop="email">
                <i-Input v-model="formInline.email" placeholder="请输入邮箱"></i-Input>
              </FormItem>
              <FormItem>
                <Button type="primary" size="large" long @click="handleSubmit('formInline')">提交</Button>
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
const reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$)([^(0-9a-zA-Z)]||[a-z]|[A-Z]|[0-9])$/
export default {
  components: {
    authHeader,
  },

  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'))
      } else {
        if (value.length < 8 || value.length > 16 || reg.test(value)) {
          callback(
            new Error('字母、数字或者特殊字符组成，长度为8到16位，区分大小写')
          )
        }
        if (this.formInline.passwdCheck !== '') {
          this.$refs.formInline.validateField('repassword')
        }
        callback()
      }
    }
    const validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('确认密码不能为空'))
      } else if (value !== this.formInline.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      formInline: {
        user: '',
        password: '',
        repassword: '',
        email: '',
        userFlag: 1,
      },
      ruleInline: {
        user: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        repassword: [{ validator: validateRePass, trigger: 'blur' }],
        email: [
          {
            required: true,
            message: '邮箱不能为空',
            trigger: 'blur',
          },
          { type: 'email', message: '邮箱地址不正确', trigger: 'blur' },
        ],
      },
      registerModal: false,
    }
  },
  mounted() {
    this.formInline = {
      user: '',
      password: '',
      repassword: '',
      email: '',
      userFlag: 1,
    }
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
        if (valid) {
          console.log('--------', this.formInline)
          this.formInline.password = this.encrypt(this.formInline.password)
          this.$router.push('/Login')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    selectMenu(name) {
      console.log('-----', name)
      this.formInline.userFlag = name
      console.log('0000', this.formInline.userFlag)
    },
  },
}
</script>