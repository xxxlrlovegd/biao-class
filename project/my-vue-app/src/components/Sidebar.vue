<template>
  <div class="sidebar">
    <el-menu
      default-active="onRoutes"
      @open="handleOpen"
      @close="handleClose"
      :collapse="collapse"
      unique-opened
      router
      background-color="#242f42"
      text-color="#bfcbd9"
    >
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <el-sub-menu :index="item.index" :key="item.title">
            <template #title>
              <i :class="item.icon"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-sub-menu v-if="subItem.subs" :key="subItem.title">
                <template #title> {{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.subs"
                  :index="threeItem.index"
                  :key="i"
                >
                  {{ threeItem.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.title">
                {{ subItem.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <template #title>{{ item.title }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const collapse = computed(() => {
      return store.state.collapse;
    });
    const menuList = store.state.menuList;
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      collapse,
      menuList,
      handleOpen,
      handleClose,
    };
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
  width: 250px;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>