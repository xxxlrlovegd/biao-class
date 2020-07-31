<template>
	<view>
		<view class="example-body">
			<uni-card isShadow v-for="(list,index) in goods.goodsData" :key="list.id" v-if="list.num!=0">
				<view class="flex">
					<view class="left">
						<image :src="list.url" mode=""></image>
					</view>
					<view class="right">
						<text style="font-size: 38rpx;margin: 10rpx 0;">{{list.title}}</text>
						<view class="flex flex-item-V">
							<view class="item item2 text-small">
								售价:{{list.price}}
							</view>
							<view class="item"></view>
							<view class="item item3">
								<button type="primary" plain="true" @click="reduceGoods(index)">-</button>
							</view>
							<view class="item item3 text-small">{{list.num}}</view>
							<view class="item item3">
								<button type="primary" plain="true" @click="addGoods(index)">+</button>
							</view>
						</view>
					</view>
				</view>
				<view class="flex">
					<view class="item item1">购买一件，即可享受换购优惠~</view>
					<view class="item text-right">去选择></view>
				</view>
			</uni-card>
			<view  v-if="goods.totalPrice==0">
				<image src="../../static/shopPackeg.png" mode="" style="width: 100px;height: 100px;margin: 100rpx 250rpx 60rpx 250rpx;
"></image>
				<view class="text text-center">
						空空如也，去逛逛可好
				</view>
			    <button type="warn" size="mini" style="border-radius: 50px;margin: 20rpx 278rpx;" @click="tzHome">逛一逛</button>
			</view>
			<view v-else>
				<view class="flex" style="margin: 5px 15px;">
					<view class="item">
						<view class="text">
							合计：¥ {{ goods.totalPrice }}
						</view>
					</view>
					<view class="item">
						<button type="warn" @click="tzShopDetail()">去结账({{ goods.totalNum }})</button>
					</view>
				</view>
			</view>
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
		data() {
			return {
				isRadio: false
			}
		},
		computed: {
			...mapState(['goods']),
			...mapGetters(['totalPrice', 'totalNum']),
		},
		methods: {
			...mapMutations(['reduceGoods', 'addGoods']),
			tzShopDetail() {
				uni.navigateTo({
					url: 'order',
				})
			},
			tzHome(){
			uni.switchTab({
			    url: '/pages/home/home'
			});
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.flex-item-V {
		max-width: 160px;
	}

	.flex {
		display: flex;
		justify-content: left;
		align-items: center;
	}
     
	.left {
		flex: none;
		width: 40%;
		height: 120px;
	}

	.right {
		flex: none;
		width: 70%
	}

	.item {
		flex: 1;
	}

	.item1 {
		flex: 0 0 60%;

	}
	.item2{
		flex: 0 0 30%;
	}
	.item3{
		flex: 0 0 10%;
		text-align: center;
	}
	button{
		line-height: 1.5;
		padding: 0 10px;
	}

	image {
		width: 100%;
		height: 100%;
	}
	.text{
		font-size: 36rpx;
		
	}
	.text-center{
		text-align: center;
	}
	.text-small{
		font-size: 30rpx;
		
	}
	.text-right {
		text-align: right;
		color: #777;
	}
</style>
