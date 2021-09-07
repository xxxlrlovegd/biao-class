<template>
  <div id="Home">
    <el-container>
      <el-header>
        <vHeader />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <vSidebar />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
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

.el-aside {
  background-color: #d3dce6;
  text-align: center;
  line-height: 200px;
 
}

</style>