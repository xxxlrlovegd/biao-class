<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>
<script>
// import { mapState } from 'vuex'
// import Article from './content/Article.vue'

export default {
  components: {
    // Article,
  },
  data() {
    return {}
  },
  computed: {
    // ...mapState(['dir']),
  },
  mounted() {},
}
</script>
<style lang='less' scoped>
.content {
  margin-top: 1px;
}
</style>

