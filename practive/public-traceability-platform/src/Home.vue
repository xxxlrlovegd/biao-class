<style lang="less" scoped>
.layout-footer-center {
  text-align: center;
}
.imgStyle {
  width: 2%;
}
.ivu-layout-header {
  background: #27a1b8;
  padding: 0 25px;
}
.userInfoStyle {
  margin: 0 50px;
  .personStyle {
    text-align: right;
  }
}
</style>
<template>
  <div class="layout">
    <Row class="userInfoStyle">
      <i-Col span="20">
        <img src="./assets/img/icon/dhIcon.png" class="imgStyle" />
        <span style="margin-left:8px;font-style: italic;color:#32C098;font-size:20px;">0451-86292460</span>
      </i-Col>
      <i-Col span="4" class="personStyle">
        <Information />
      </i-Col>
    </Row>
    <Layout>
      <Header>
        <HanderMenu />
      </Header>
      <Content :style="{margin: '20px',minHeight: '460px'}">
        <PageContent />
      </Content>
      <Footer class="layout-footer-center">黑龙江邮政易通信息网络有限责任公司所属</Footer>
    </Layout>
  </div>
</template>
<script>
import HanderMenu from './views/hander/HanderMenu'
import Information from './views/hander/Information'
import PageContent from './views/Content'
export default {
  components: {
    HanderMenu,
    Information,
    PageContent,
  },
}
</script>