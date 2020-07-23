<template>
  <div id="goods" class="container">
    <Button type="text">{{$route.name}}</Button>
    <div v-for="(list,index) in goods.goodsData" :key="list.id">
      <Card style="width:350px;margin:20px;display:inline-block">
        <Row slot="title">
          <i-col span="4">{{list.title}}</i-col>
          <i-col span="16">
            <img src="../../src/assets/logo.png" alt srcset style="width:12px;height:12px;" />
          </i-col>
          <i-col span="4">售价：{{list.price}}</i-col>
        </Row>
        <Row>
          <i-col span="4">
            <Button type="success" @click="$store.commit('reduceGoods',index)">-</Button>
          </i-col>
          <i-col span="16">
            <Input readonly v-model="list.num" />
          </i-col>
          <i-col span="4">
            <Button type="error" @click="$store.commit('addGoods',index)">+</Button>
          </i-col>
        </Row>
      </Card>
    </div>
    <div>合计：¥ {{ goods.totalPrice }}</div>
    <Button :class="{activeChecke: goods.totalNum <= 0}"  to="/GoodNew" target="_blank">去结账({{ goods.totalNum }})</Button>
  </div>
</template>
<script>
export default {
  name: 'Goods',
  props: {
    msg: String
  },
  computed: {
    goods() {
      return this.$store.state.goods
    }
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
