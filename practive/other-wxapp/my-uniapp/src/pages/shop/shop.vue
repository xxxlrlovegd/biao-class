<template>
<view>
  <view v-for="(list,index) in goods.goodsData" :key="list.id">
  	<view class="uni-flex uni-row" >
					<view class="text" style="width: 200rpx;">{{list.title}}</view>
					<view class="text" style="-webkit-flex: 1;flex: 1;">售价：{{list.price}}</view>
				</view>
        <view class="uni-flex uni-row" >
            	<view class="text" style="width: 100rpx;"><button type="primary" plain="true"  @click="reduceGoods(index)">-</button></view>
              	<view class="text" style="-webkit-flex: 1;flex: 1;">{{list.num}}</view>
              <view class="text" style="width: 100rpx;"><button type="primary" plain="true" @click="addGoods(index)">+</button></view>
        </view>
  </view>
    <div>合计：¥ {{ goods.totalPrice }}</div>
    <Button :class="{activeChecke: goods.totalNum <= 0}"  @click="tz()">去结账({{ goods.totalNum }})</Button>
  </view>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  name: 'Goods',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['goods']),
   ...mapGetters(['totalPrice','totalNum'])
  },
   methods:{
    ...mapMutations(['reduceGoods','addGoods']),
    tz(){
      uni.navigateTo({
    url: 'order'
});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  overflow: auto;
  max-width: 960px;
  margin: 0 auto;
}
.uni-flex{
  display: flex;
}
.flex-item {
		width: 33.3%;
		height: 200rpx;
		text-align: center;
		line-height: 200rpx;
	}

	.flex-item-V {
		width: 100%;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}

	.text {
		margin: 15rpx 10rpx;
		padding: 0 20rpx;
		background-color: #ebebeb;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}
</style>
