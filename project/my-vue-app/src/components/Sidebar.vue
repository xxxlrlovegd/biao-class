<template>
  <div class="sidebar">
    <el-menu
      default-active="onRoutes"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template #title>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <template #title>导航二</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <template #title>导航三</template>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <template #title>导航四</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const isCollapse = ref(true);
      const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
     return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
};
</script>
<style lang="less" scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 58px;
  bottom: 0;
  overflow-y: scroll;
  width: 200px;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
</style>