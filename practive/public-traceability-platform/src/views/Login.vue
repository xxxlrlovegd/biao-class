<style  lang="less">
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
.ivu-menu-light {
  &:after {
    height: 0px !important;
  }
}
.layout-logo {
  background: #fff;
  text-align: center;
}
.layout-nav {
  margin: 0px;
}
.ivu-card-head {
  border: none;
  padding: 26px 20px 20px 20px;
  line-height: 1;
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
  background: url(../assets/img/login/back.png) no-repeat;
  background-size: 100% 100%;
}
.layout-footer-center {
  background: #f1f6fc;
  text-align: center;
}
.ivu-layout-footer {
  background: #f5f7f9;
  padding: 18px 50px;
}
</style>
  <template>
  <div class="layout">
    <Layout :style="{background:'#F1F6FC'}">
      <Header>
        <Row>
          <i-Col span="8" class="layout-logo">
            <span style="margin:0px 10px">中国邮政</span>
            <span>公共溯源平台</span>
          </i-Col>
          <i-Col span="12" class="layout-nav">
            <Menu mode="horizontal" theme="light" active-name="1">
              <MenuItem
                v-for="(item,index) in menuItem"
                :key="index"
                :name="item.id"
                to="/Login"
              >{{item.name}}</MenuItem>
            </Menu>
          </i-Col>
          <i-Col span="4">0451-86292460</i-Col>
        </Row>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <div style="min-height: 568px;margin:20px 0px">
          <Card style="width:400px;position: relative;top: 70px;left: 58%;">
            <p slot="title">
              <span style="font-size:26px;color:#2CA987;font-weight: bold;">欢迎登录</span>
            </p>
            <a type="primary" href="/#/Register" slot="extra">
              <span style="color:#999;">没有账户？</span>
              <span style="color:#4EA477;">去注册>></span>
            </a>
            <Form ref="formInline" :model="form" :rules="ruleInline">
              <Input prefix="ios-contact" placeholder="请输入手机号/邮箱" style="width: auto" />
              <Input prefix="ios-lock" placeholder="请输入登录密码" style="width: auto" />
              <Button type="primary" size="large" long>登录</Button>
            </Form>
          </Card>
        </div>
      </Content>
      <Footer class="layout-footer-center">黑龙江邮政易通信息网络有限责任公司所属</Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuItem: [
        { id: 1, name: '首页' },
        { id: 2, name: '联盟管理' },
        { id: 3, name: '接口文档' },
        { id: 4, name: '农产品系统' },
        { id: 5, name: '高考录取通知书系统' },
      ],
    }
  },
  mounted() {},
  methods: {},
}
</script>