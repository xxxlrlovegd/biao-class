<template>
  <view>
   <uni-list>
       <uni-list-item title="账号中心" :show-arrow="false"></uni-list-item>
       <uni-list-item title="修改密码" @click="test"></uni-list-item>
       <uni-list-item title="关于我们" :show-badge="true" badge-text="12"></uni-list-item>
       <uni-list-item title="客服中心" :disabled="true" :show-badge="true" badge-text="12"></uni-list-item>
   </uni-list>
  </view>
</template>
<script>
	export default{
		methods:{
			test(){
				console.log("test11111")
				uni.navigateTo({
					url:'userInfo'
				})
			}
		},
	}
</script>