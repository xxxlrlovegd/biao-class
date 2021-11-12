<template>
  <div id="Home">
    <el-container>
      <el-header>
        <vHeader />
      </el-header>
      <el-container>
        <el-aside width="250px">
          <vSidebar />
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";
export default {
  name: "Home",
  components: {
    vHeader,
    vSidebar,
  },
};
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  margin: 0;
  padding: 0;
  height: 58px;
}

</style>