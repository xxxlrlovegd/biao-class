<template>
    <Menu mode="horizontal" theme="primary" active-name="achievement">
      <MenuItem name="achievement" to="/achievement">
       <Icon type="ios-paper-outline" />成果内容
      </MenuItem>
      <MenuItem name="applyrange" to="/applyrange">
       <Icon type="ios-trophy" />应用范围
      </MenuItem>
      <MenuItem name="innovalue" to="innovalue">
       <Icon type="logo-yen" />创新价值
      </MenuItem>
      <MenuItem name="design" to="design">
       <Icon type="ios-stats" />创新程度
      </MenuItem>
    </Menu>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {

    }
};
</script>
<style lang="less" scoped>
.ivu-menu-item {
   font-weight: bold;
    font-size: 18px;
}
// .menu {
//   position: fixed;
//   top: 0;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   height: 100px;
//   background-color: #515a6e;
//     .menu_title {
//     color: #eee;
//     display: inline-block;
//     height: 100px;
//     line-height: 100px;
//     font-size: 28px;
//     font-weight: 700;
//     margin-right: 20px;
//     text-shadow: 2px 3px 7px #f2f2f7;
//   }
//   .ivu-menu {
//     height: 100%;
//     line-height: 100px;
//     .ivu-menu-item {
//       margin: 0 30px;
//       font-size: 20px;
//       font-weight: 700;
//     }
//   }
// }
</style>