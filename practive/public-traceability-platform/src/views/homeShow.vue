
<style lang="less" scoped>
.homeShow {
  width: 100%;
  .bgStyle {
    min-height: 960px;
    background: url(../assets/img/homeshow.jpg) no-repeat center;
    background-size: 100% 100%;
    .nav {
      margin: 0 80px;
      text-align: right;
      * {
        margin: 0 20px 20px 20px;

        position: relative;
        top: 10px;
      }
      .linkStyle {
        color: #d7ffff;
        margin: 20px;
      }
      .btStyle {
        top: 18px;
        margin: 0 16px 16px 16px;
      }
      a.ivu-btn-large {
        line-height: 36px;
      }
      .ivu-btn-large {
        height: 36px;
        padding: 0 28px;
        font-size: 16px;
        border-radius: 4px;
      }
      .ivu-btn-primary {
        color: #fff;
        background-color: #5eb0d5;
        border-color: #5eb0d5;
      }
      .ivu-btn-ghost.ivu-btn-primary,
      .ivu-btn-ghost.ivu-btn-default {
        color: #98eaff;
        border-color: #98eaff;
      }
    }
  }
}
</style>
<template>
  <div class="homeShow">
    <div class="bgStyle">
      <div class="nav">
        <a href="/#/developer" class="linkStyle">接口文档</a>
        <a href="#" class="linkStyle"></a>
        <a href="#" class="linkStyle">农产品系统</a>
        <a href="#" class="linkStyle"></a>
        <Button type="primary" to="/Login" class="btStyle" size="large">登录</Button>
        <Button type="default" to="/Register" class="btStyle" size="large" :ghost="true">注册</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
   