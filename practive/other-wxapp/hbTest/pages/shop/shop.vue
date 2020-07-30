<template>

	<view>
		<view class="example-body" v-for="(list,index) in goods.goodsData" :key="list.id" v-if="list.num!=0">
			<uni-card isShadow>
				<view class="uni-flex uni-column">
					<view class="flex-item flex-item-V">
						<view class="text" style="-webkit-flex: 1;flex: 1;">
							店铺{{index+1}}</view>
						<view class="text" style="-webkit-flex: 1;flex: 1;">
							去凑单></view>
					</view>
					<view class="flex-item flex-item-V">
						<view class="text uni-flex" style="width: 200rpx;height: 220rpx;-webkit-justify-content: center;justify-content: center;-webkit-align-items: center;align-items: center;">
							<image :src="list.url" style="width: 50rpx;height: 150rpx;"></image>
						</view>
						<view class="uni-flex uni-column" style="-webkit-flex: 1;flex: 1;-webkit-justify-content: space-between;justify-content: space-between;">
							<view class="text" style="height: 120rpx;text-align: left;padding-left: 20rpx;padding-top: 10rpx;">
								<view class="uni-flex uni-row">
								{{list.title}}
								</view>
								<view class="uni-flex uni-row">
								<view class="text" style="width: 40rpx;">
									<button type="primary" plain="true" @click="reduceGoods(index)">-</button>
								</view>
								<view class="text" style="-webkit-flex: 1;flex: 1;">{{list.num}}</view>
								<view class="text" style="width: 40rpx;">
									<button type="primary" plain="true" @click="addGoods(index)">+</button>
								</view>
								</view>
							</view>
						</view>
						<view class="uni-flex uni-row">
							<view class="text" style="-webkit-flex: 1;flex: 1;">购买一件即可享受优惠！</view>
							<view class="text" style="-webkit-flex: 1;flex: 1;">去选择></view>
						</view>
					</view>
				</view>
			</uni-card>
		</view>
<!-- 		<view class="uni-flex uni-row">
			<view class="text" style="width: 120rpx;">
				<view>店铺{{index+1}}></view>
				<view></view>
			</view>
			<view class="text" style="-webkit-flex: 1;flex: 1;">
				<view>{{list.title}}</view>
				<view>{{list.title}}+{{index}}</view>
				<view style="display:flex">
					<view class="text" style="width: 20rpx;margin-right: 20rpx;">售价：{{list.price}}</view>
					<view class="text" style="-webkit-flex: 1;flex: 1;">
						<view class="text" style="width: 40rpx;">
							<button type="primary" plain="true" @click="reduceGoods(index)">-</button>
						</view>
						<view class="text" style="-webkit-flex: 1;flex: 1;">{{list.num}}</view>
						<view class="text" style="width: 40rpx;">
							<button type="primary" plain="true" @click="addGoods(index)">+</button>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<view v-if="goods.totalPrice==0">
			空空如也，去逛逛可好
		</view>
		<view v-else>
			<div>合计：¥ {{ goods.totalPrice }}</div>
			<Button :class="{activeChecke: goods.totalNum <= 0}" @click="tz()">去结账({{ goods.totalNum }})</Button>
		</view>

	</view>
</template>
<script>
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex'
	export default {
		name: 'Goods',
		props: {
			msg: String,
		},
		computed: {
			...mapState(['goods']),
			...mapGetters(['totalPrice', 'totalNum']),
		},
		methods: {
			...mapMutations(['reduceGoods', 'addGoods']),
			tz() {
				uni.navigateTo({
					url: 'order',
				})
			},
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}

</style>
