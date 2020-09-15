<style lang="less" scoped>
.cardTitle {
  color: #47b393;
  text-align: center;
  margin: 10px 0px;
}
.fontSizeBig {
  font-size: 26px;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
}
.fontSizeSamll {
  font-size: 18px;
}
.dlmmStyle {
  text-align: right;
  margin-top: 2%;
  * {
    color: #29a986;
  }
}
/deep/.ivu-form-item {
  margin-bottom: 8px;
}
/deep/.ivu-form .ivu-form-item-label {
  font-size: 16px;
  font-weight: bold;
}
/deep/.ivu-form-item-content {
  font-size: 16px;
  line-height: 36px;
}
</style>
<template>
  <div class="information">
    <Card style="width:50%;margin:2% 26%">
      <p slot="title" class="cardTitle fontSizeBig">个人信息详情</p>
      <Form :model="formItem" :label-width="250" style="margin:0 8%;" :label-colon="true">
        <FormItem label="姓名">
          <span>{{formItem.name}}</span>
        </FormItem>
        <FormItem label="年龄">
          <span>{{formItem.age}}</span>
        </FormItem>
        <FormItem label="身份证号">
          <span>{{formItem.idcard}}</span>
        </FormItem>
        <FormItem label="联系电话">
          <span>{{formItem.tel}}</span>
        </FormItem>
        <FormItem label="注册时间">
          <span>{{formItem.creatDate}}</span>
        </FormItem>
        <FormItem label="现住址">
          <span>{{formItem.addres}}</span>
        </FormItem>
        <FormItem label="籍贯">
          <span>{{formItem.jg}}</span>
        </FormItem>
        <FormItem label="区块链BaaS平台API接口申请">
          <Button type="primary" @click="instance('info')" :disabled="lpFlag">令牌申请</Button>
        </FormItem>
        <FormItem label="令牌">
          <span>{{formItem.lp}}</span>
        </FormItem>
        <FormItem label="key">
          <span>{{formItem.lpkey}}</span>
        </FormItem>
      </Form>
      <div class="dlmmStyle">
        <a href="/#/resetPassword">重置登录密码</a>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formItem: {
        name: '张三',
        age: '26',
        idcard: '230222111109219921',
        tel: '12345678901',
        creatDate: '2020-9-15 10:23:27',
        addres: '北京西城区xxxx',
        jg: '北京市',
        lp: '',
        lpkey: '',
      },
      lpFlag: false,
    }
  },
  mounted() {
    this.lpFlag = this.formItem.lp ? true : false
  },
  methods: {
    instance(type) {
      if (type == 'info') {
        this.$Modal.info({
          title: '令牌申请',
          content: '是否进行令牌申请',
          onOk: () => {
            //令牌请求
            console.log('这是令牌请求~')
            this.formItem.lp = '123456789'
            this.formItem.lpkey = 'fdsfsaffds3242fds'
            this.lpFlag = true
          },
        })
      } else {
        return
      }
    },
  },
}
</script>