<style lang="less" scoped>
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <div>hhhhhhhhhh</div>
    <Layout>
      <Header :style="{position: 'fixed', width: '100%'}">Header</Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '570px'}">Content</Content>
      <Footer class="layout-footer-center">Footer</Footer>
    </Layout>
  </div>
</template>