
<style lang="less" scoped>
.homeShow {
  width: 100%;
  .bgStyle {
    min-height: 960px;
    background: url(../assets/img/homeshow.jpg);
    background-size: 100% 100%;
  }
}
</style>
<template>
  <div class="homeShow">
    <div class="bgStyle">
      <Row>
        <i-Col span="12">
          <a href>接口文档</a>
        </i-Col>
        <i-Col span="12">
          <Button type="primary" to="/Login">登录</Button>
          <Button type="primary" to="/Register">注册</Button>
        </i-Col>
      </Row>
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