<template>
  <div id="app">
  <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
export default{
  name:'app',
  data(){
    return{

    };
  },
  components:{Nav},
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
