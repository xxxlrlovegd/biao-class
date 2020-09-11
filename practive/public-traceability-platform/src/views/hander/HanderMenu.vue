<style  lang="less">
.ivu-menu-light {
  &:after {
    height: 0px !important;
  }
}
.layout-logo {
  margin: 10px 0;
  text-align: center;
}
.imgStyle {
  width: 12%;
  position: relative;
  top: 4px;
}
.ivu-btn-text:hover {
  color: #fff;
  border-bottom: 2px solid #fff;
  border-radius: 0px;
}
</style>
  <template>
  <div>
    <Row type="flex" align="top">
      <i-Col span="8" class="layout-logo">
        <img src="../../assets/img/login/logo.png" alt style="width: 32%;margin: 3px 0px;" />
        <span
          style="display: inline-block;border-right: 2px solid #dcdee2;height: 24px;position: relative;top: -6px;left: 8px;"
        ></span>
        <span
          style="position: relative;top: -22px;left: 3%;font-size: 21px;font-weight: bold;"
        >公&nbsp;共&nbsp;溯&nbsp;源&nbsp;平&nbsp;台</span>

        <span
          style="position: absolute;top: 10%;left: 54%;font-size: 12px;font-weight: bold;"
        >Blockchain&nbsp;Platform&nbsp;of&nbsp;China&nbsp;Post</span>
      </i-Col>
     
      <i-Col span="10" class="layout-nav">
        <div
          v-for="(item,index) in menuItem"
          :key="index"
          :name="item.id"
          style="display: inline-block;position: relative;top: -6px;"
        >
          <Button
            type="text"
            ghost
            size="large"
            style="font-size:16px; margin: 20px;"
            @click="selectMenu(item.id)"
          >{{item.name}}</Button>
        </div>
      </i-Col>
      <i-Col span="6" style="text-align:right">
        <Select v-model="model" style="width: 96px;margin-right:2px">
          <Option v-for="item in selectList" :value="item.name" :key="item.id">{{ item.name }}</Option>
        </Select>
        <Input suffix="ios-search" placeholder="请输入" style="width: auto" class="inputStyle" />
      </i-Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: '交易hash',
      menuItem: [
        { id: 1, name: '首页' },
        { id: 2, name: '接口文档' },
        { id: 3, name: '农产品系统' },
      ],
      selectList: [
        { id: 1, name: '交易hash' },
        { id: 2, name: '区块高度' },
        { id: 3, name: '区块hash' },
      ],
    }
  },
  mounted() {},
  methods: {
    selectMenu(name) {
      console.log(name)
      if (name == 1) {
        this.$router.push({ path: '/home/homePage' })
      }
      if (name == 2) {
        this.$router.push({ path: '/developer' })
      }
      if (name == 3) {
        console.log('444444444444')
        //路由跳转有问题呢！！
        this.$router.push({ path: '/developer' })
        console.log('555555555555')
      }
    },
  },
}
</script>