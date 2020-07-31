<template>
  <view>
	  <view class="tx-w">
	  	<view class="tx">
	  		<image class="tx-img" :src="yonghuwx.avatarUrl"></image>
	  		<view class="zx"></view>
	  	</view>
	  	<view class="name">{{yonghuwx.nickName}} </view>
	  	<view class="name-qm">自然的美好的，你的</view>
	  </view>
   <uni-list>
       <uni-list-item title="账号中心"   @click="tzmineInfo"></uni-list-item>
       <uni-list-item title="关于我们" :show-badge="true" badge-text="2"></uni-list-item>
       <uni-list-item title="客服中心" :show-badge="true" badge-text="12"></uni-list-item>
   </uni-list>
  </view>
</template>
<script>
	import {
		mapState
	} from 'vuex'
	export default{
		data() {
			return {
				yonghuwx: []
			}
		},
		computed: {
			...mapState(['uersData']),
		},
		onLoad(){
			let that = this;
			uni.login({
				provider: 'weixin',
				success: function(loginRes) {
					// 获取用户信息				
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {				
							that.yonghuwx = infoRes.userInfo
							//需要往store里面定义的数据存值uersData
							console.log(that.yonghuwx)
						}
					});
				}
			});
		},
		methods:{
			tzmineInfo(){
				uni.navigateTo({
					url:'userInfo'
				})
			},
		},
	}
</script>
<style>
	.tx-w{
		margin:15rpx 0;
	}
	
	.tx{
		text-align:center;
	}
	
	.tx image{
		width:140rpx;
		height:140rpx;
		border-radius: 50%;
	}
	
	.name{
		text-align:center;
		margin-top:20rpx;
	}
	
	.name-qm{
		text-align:center;
		margin-top:20rpx;
		font-size:30rpx;
	}
</style>