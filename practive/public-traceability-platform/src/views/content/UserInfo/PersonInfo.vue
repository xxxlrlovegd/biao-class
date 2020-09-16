<style  lang="less" scoped>
.personinfo {
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
  .formShStyle {
    margin: 0px 100px;
    // /deep/.
  }
}
</style>
  <template>
  <div class="personinfo">
    <Layout :style="{background:'#F1F6FC'}">
      <Header>
        <authHeader />
      </Header>
      <Content :style="{padding: '0 50px'}">
        <div style="min-height: 568px;margin:20px 0px;">
          <Card style="width:700px;position: relative;top: 70px;left: 25%;">
            <div v-if="isLoginType=='gr'">
              <Form
                ref="formInline"
                :model="formInline"
                :rules="ruleInline"
                class="formStyle"
                :label-width="80"
                :hide-required-mark="true"
                :label-colon="true"
                style="margin-top:6%"
              >
                <FormItem label="姓名" prop="name">
                  <i-Input v-model="formInline.name" placeholder="请输入"></i-Input>
                </FormItem>
                <FormItem label="联系电话" prop="tel">
                  <i-Input v-model="formInline.tel" placeholder="请输入"></i-Input>
                </FormItem>
                <FormItem label="证件类型" prop="zjtype">
                  <Select v-model="formInline.zjtype" placeholder=" 请选择">
                    <Option value="sfz">居民身份证</Option>
                  </Select>
                </FormItem>
                <FormItem label="证件号码" prop="shfcard">
                  <i-Input v-model="formInline.shfcard" placeholder="请输入"></i-Input>
                </FormItem>
                <FormItem label="证件图片">
                  <Upload
                    :before-upload="fjUpload"
                    action="http"
                    accept=".png, .jpg, .jpeg"
                    show-upload-list="true"
                  >
                    <Button tyspe="primary">点击上传图片</Button>
                  </Upload>
                </FormItem>
                <FormItem>
                  <Button type="primary" size="large" long @click="handleSubmit('formInline')">提交</Button>
                </FormItem>
              </Form>
            </div>
            <div v-else>
              <Form
                ref="formShInline"
                :model="formShInline"
                :rules="ruleShInline"
                class="formShStyle"
                :label-width="80"
                :hide-required-mark="true"
                :label-colon="true"
                style="margin-top:6%"
              >
                <FormItem label="商家名称" prop="shname">
                  <i-Input v-model="formShInline.shname" placeholder="请输入商家名称"></i-Input>
                </FormItem>
                <FormItem label="联系人" prop="name">
                  <i-Input v-model="formShInline.name" placeholder="请输入联系人"></i-Input>
                </FormItem>
                <FormItem label="联系电话" prop="tel">
                  <i-Input v-model="formShInline.tel" placeholder="请输入联系电话"></i-Input>
                </FormItem>
                <FormItem label="企业性质" prop="qytype">
                  <Select v-model="formShInline.qytype" placeholder="请选择企业性质">
                    <Option value="gq">国企</Option>
                    <Option value="yq">央企</Option>
                    <Option value="sq">私企</Option>
                    <Option value="wq">外企</Option>
                  </Select>
                </FormItem>
                <FormItem label="经营范围" prop="jyfw">
                  <i-Input v-model="formShInline.jyfw" placeholder="请输入经营范围"></i-Input>
                </FormItem>
                <FormItem label="企业规模" prop="qygm">
                  <Select v-model="formShInline.qygm" placeholder="请选择企业规模">
                    <Option
                      v-for="item in qygmSelect"
                      :key="item.value"
                      :value="item.value"
                    >{{item.name}}</Option>
                  </Select>
                </FormItem>
                <FormItem label="企业法人" prop="qyfr">
                  <i-Input v-model="formShInline.qyfr" placeholder="请输入企业法人"></i-Input>
                </FormItem>
                <FormItem label="注册资金" prop="zczj">
                  <i-Input v-model="formShInline.zczj" placeholder="请输入邮箱"></i-Input>
                </FormItem>
                <FormItem label="注册时间" prop="zcsj">
                  <i-Input v-model="formShInline.zcsj" placeholder="请输入邮箱"></i-Input>
                </FormItem>
                <FormItem label="信用代码" prop="xydm">
                  <i-Input v-model="formShInline.xydm" placeholder="请输入邮箱"></i-Input>
                </FormItem>
                <FormItem label="办公地址" prop="bgdz">
                  <i-Input v-model="formShInline.bgdz" placeholder="请输入邮箱"></i-Input>
                </FormItem>
                <FormItem label="营业执照">
                  <Button type="primary">点击上传图片</Button>
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    size="large"
                    long
                    @click="handleShSubmit('formShInline')"
                  >提交</Button>
                </FormItem>
              </Form>
            </div>
          </Card>
        </div>
      </Content>
      <Footer class="layout-footer-center">黑龙江邮政易通信息网络有限责任公司所属</Footer>
    </Layout>
  </div>
</template>
<script>
// import axios from 'axios'
import authHeader from '../../../views/authHeader'
//身份证验证
//const reg = /( ^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
//电话验证
//const isPhone = /^(1[3,4,5,6,7,8,9][0-9])\d{8}$/;
export default {
  components: {
    authHeader,
  },
  data() {
    return {
      isLoginType: 'gr',
      formInline: {
        name: '',
        tel: '',
        zjtype: 'sfz',
        shfcard: '',
        userFlag: 1,
      },
      ruleInline: {
        name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
        tel: [{ required: true, message: '联系电话不能为空', trigger: 'blur' }],
        zjtype: [
          { required: true, message: '证件类型不能为空', trigger: 'blur' },
        ],
        shfcard: [
          {
            required: true,
            message: '证件号码不能为空',
            trigger: 'blur',
          },
          // { type: 'email', message: '证件号码不正确', trigger: 'blur' },
        ],
      },
      registerModal: false,
      formShInline: {
        shname: '',
        name: '',
        tel: '',
        qytype: '',
        jyfw: '',
        qygm: '',
        qyfr: '',
        zczj: '',
        zcsj: '',
        xydm: '',
        bgdz: '',
      },
      ruleShInline: {},
      qygmSelect: [
        {
          name: '微型企业(人数<50)',
          value: 'wx',
        },
        {
          name: '小型企业 (50<人数<500)',
          value: 'xx',
        },
        {
          name: '中型企业(500<人数<20000)',
          value: 'zx',
        },
        {
          name: '大型企业(人数>20000)',
          value: 'dx',
        },
      ],
      file: null,
    }
  },
  mounted() {
    this.isLoginType = 'g22r'

    this.formInline = {
      name: '',
      tel: '',
      zjtype: 'sfz',
      shfcard: '',
      userFlag: 1,
    }
  },
  created() {
    this.$nextTick(() => {
      this.handleReset('formInline')
      this.handleReset('formShInline')
    })
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          console.log('--------', this.formInline)
          this.$Modal.info({
            title: '温馨提示',
            content: '提交成功，请耐心等待审核',
            onOk: () => {
              this.$router.push('/Login')
            },
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleShSubmit(name) {
      console.log('----', name)
      this.$Modal.info({
        title: '温馨提示',
        content: '提交成功，请耐心等待审核',
        onOk: () => {
          this.$router.push('/Login')
        },
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    },
    fjUpload(file) {
      this.file = file
      console.log(this.file)
      return false
    },
  },
}
</script>