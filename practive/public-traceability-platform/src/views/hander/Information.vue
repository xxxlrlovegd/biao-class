<style lang="less" scoped>
.information {
  * {
    text-align: left;
    font-size: 18px;
    color: #4d4d4d;
  }
}
</style>
<template>
  <div class="information">
    <Dropdown>
      <a href="javascript:void(0)">
        <Icon type="md-person" />11111
      </a>
      <DropdownMenu slot="list">
        <DropdownItem @on-click="readInfo">个人信息</DropdownItem>
        <DropdownItem @on-click="logout">退出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo: sessionStorage.setItem('UserInfo'),
    }
  },
  methods: {
    readInfo() {
      this.$router.push('/information')
    },
    logout() {},
  },
}
</script>