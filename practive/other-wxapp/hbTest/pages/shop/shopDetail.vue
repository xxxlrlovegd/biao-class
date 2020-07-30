<template>
	<view>参数接收{{msg}}</view>
</template>

<script>
	export default {
	    onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
	        console.log(option); //打印出上个页面传递的参数。
			this.msg=JSON.stringify(option)
			console.log(this.msg)
	    },
		data() {
			return {
				msg:Object
			}
		},
	}
</script>

<style>
</style>
