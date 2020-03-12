<template>
  <div >
    <div class="cardSort">
    <router-link to="/admin/post">文章管理</router-link>
    <router-link to="/admin/card">分类管理</router-link>
    <router-link to="/admin/comment">评论管理</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {};
</script>
<style>
.cardSort{
    float: left;
    width:80px;
    margin: 0px 50px;
}
.cardSort>*{
   padding: 2px;
}
</style>
