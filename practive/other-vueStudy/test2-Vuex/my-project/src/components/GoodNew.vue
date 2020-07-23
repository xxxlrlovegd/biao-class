<template>
  <div id="goods" class="container">
    <Button to="/" target="_blank" type="text">{{$route.name}}</Button>
      <Card style="width:500px;margin:0 auto">
        <div v-for="(list,index) in goods.goodsData" :key="list.id">
        <Row >
          <i-col span="4" style="margin-top:7px;">{{list.title}}</i-col>
          <i-col span="14" style="margin-top:2px;text-align: right;">售价：{{list.price}} *   
            <Button>{{list.num}}</Button>
          </i-col>
             <i-col span="6">   
            <Button style="margin:2px;" type="success" @click="reduceGoods(index)">-</Button>
            <Button style="margin:2px;" type="error" @click="addGoods(index)">+</Button></i-col>
        </Row>
        </div>
        <div style="margin-top:20px;text-align: right;">合计：¥ {{ goods.totalPrice }}</div>
      </Card>
  </div>
</template>
<script>
// 三个属性是vuex自己的辅助函数，名称不能改变，对应分别是state,getters,mutations
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  name: 'Goods',
  computed: {
   ...mapState(['goods']),
   ...mapGetters(['totalPrice','totalNum'])
   /**
    * 更改store.js中数据名称
    * ...mapState({goodsData:state=>state.goods})
    */
  },
  methods:{
    ...mapMutations(['reduceGoods','addGoods']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  overflow: auto;
  max-width: 960px;
  margin: 0 auto;
}
</style>
