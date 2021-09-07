<template>
  <div class="header">
    <!-- 折叠按钮变化 -->
    <div class="collapse-btn" @click="collapseChange">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">test管理系统（仿3）</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip
            effect="dark"
            :content="message ? `有${message}条未读消息` : `消息中心`"
            placement="bottom"
          >
            <router-link to="/login">
              <el-badge :is-dot="message" class="item">
                <i style="color: #fff" class="el-icon-bell"></i>
              </el-badge>
            </router-link>
          </el-tooltip>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <el-avatar
            :size="30"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </div>
        <!-- 用户功能下拉 -->
        <el-dropdown class="user-name" trigger="click">
          <span class="el-dropdown-link">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>项目仓库</el-dropdown-item>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "vue";

export default {
  setup() {},
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 58px;
  font-size: 22px;
  background-color: #242f42;
  color: #fff;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 58px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 58px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 58px;
  align-items: center;
}
.user-avator {
  padding-left: 16px;
}
.user-name {
  .el-dropdown-link {
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
  }
}
</style>