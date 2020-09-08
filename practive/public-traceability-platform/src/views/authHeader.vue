<style  lang="less" >

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
</style>
  <template>
  <div>
        <Row type="flex" align="top">
          <i-Col span="8" class="layout-logo">
            <img src="../assets/img/login/logo.png" alt style="width: 32%;margin: 3px 0px;" />
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
          <i-Col span="1"></i-Col>
          <i-Col span="10" class="layout-nav">
            <Menu mode="horizontal" theme="light" active-name="0">
              <MenuItem
                v-for="(item,index) in menuItem"
                :key="index"
                :name="item.id"
                to="/Login"
              >{{item.name}}</MenuItem>
            </Menu>
          </i-Col>
          <i-Col span="3">
            <img src="../assets/img/icon/dhIcon.png" class="imgStyle" />
            <span
              style="margin-left:8px;font-style: italic;color:#32C098;font-size:20px;"
            >0451-86292460</span>
          </i-Col>
          <i-Col span="2"></i-Col>
        </Row>
     
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
  mounted() {
  },
  methods: {
  },
}
</script>