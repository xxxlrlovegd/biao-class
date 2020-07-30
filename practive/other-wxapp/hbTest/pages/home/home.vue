<template>
	<view>
		<view class="uni-padding-wrap uni-common-mt">
			<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item v-for="(item ,index) in info" :key="index">
						<view :class="item.colorClass" class="swiper-item">
							<image class="image" :src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
				</swiper>
				<view class="example-body">
					<uni-notice-bar background-color="#d5ffda" color="#27aa19" :single="true" :show-icon="true" :text="text" />
				</view>
				<!-- <text class="example-info">商品展示</text> -->
				<view class="grid-body">
					<uni-grid :column="2" :show-border="false" :square="false" @change="change">
						<uni-grid-item v-for="(item ,index) in goods.goodsData" :index="index" :key="index">
							<view class="grid-item-box">
								<image class="image" :src="item.url" mode="aspectFill" />
								<text class="grid-text">{{item.title}}</text>
								<view class="grid-dot">
									<view class="grid-left">
										售价:¥{{item.price}}
									</view>
									<view class="grid-right">
										<uni-icons type="cart" @click="addCart(index)" color='red' style="padding: 20rpx;"></uni-icons>
									</view>
								</view>
							</view>
						</uni-grid-item>
					</uni-grid>
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
		data() {
			return {
				isshow: false,
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				info: [{
						colorClass: 'uni-bg-red',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg',
						content: '内容 A'
					},
					{
						colorClass: 'uni-bg-green',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg',
						content: '内容 B'
					},
					{
						colorClass: 'uni-bg-blue',
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg',
						content: '内容 C'
					}
				],
				text: '商品均已严格消毒 请放心选购',
				tzShow: true,
			}
		},
		computed: {
			...mapState(['goods']),
		},
		mounted() {},
		methods: {
			...mapMutations(['addGoods']),
			search(e) {
				console.log("999", e)
			},
			change(e) {
				let {
					index
				} = e.detail
				console.log(index)
				if (this.tzShow) {
					uni.navigateTo({
						url: `../shop/shopDetail?id=${index+1}`
					})
				} else {
					this.tzShow = true
				}
			},
			addCart(index) {
				this.tzShow = false
				this.addGoods(index)
				uni.showToast({
					title: `添加成功，在购物车等亲~`,
					icon: 'none',
					position:'center',
				})
			},
		}
	}
</script>
<style lang='less' scoped>
	.swiper {
		height: 300rpx;
	}

	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}

	.image {
		width: 100%;
		height: 100%;
		display: inline-block;
		overflow: hidden;
	}

	.example-body {
		margin-top: 2px;
	}

	.example-info {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		color: #3b4144;
		background-color: #ffffff;
		font-size: 14px;
		line-height: 20px;
	}

	.grid-body {
		flex-direction: column;
		padding: 15px;
		background-color: #ffffff;
        .grid-text{
			font-size:36rpx;
		}
		.grid-item-box {
			flex: 1;
			/* position: relative;
 */
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding: 15px 0;

			.text {
				text-align: left !important;
			}

			.image {
				width: 150rpx;
				height: 120rpx;
			}

			.grid-dot {
				display: flex;
				font-size: 32rpx;
				margin-top: 5px;

				.grid-left {
					width: 180rpx;
					text-align: left;
					margin-top: 12rpx;

				}

				.grid-right {
					width: 70%;
					text-align: right;
				}
			}
		}
	}
</style>
