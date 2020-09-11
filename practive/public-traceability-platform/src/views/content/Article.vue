<template>
  <div class="article">
      <router-view></router-view>
    <!-- <keep-alive :include="inclube">
    
    </keep-alive> -->
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapState(['nub', 'inclube']),
  },
  created() {},
  methods: {
    ...mapMutations(['popup']),
  },
  mounted() {},
}
</script>
<style lang='less' scoped>
</style>
