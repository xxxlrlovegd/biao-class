<template>
  <view>
      <view class="uni-padding-wrap uni-common-mt">
            <button type="primary" :hidden="isshow"> 页面主操作 Normal</button>
              <input class="uni-input" type="number" placeholder="这是一个数字输入框" />
      </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      isshow:false
    }
  },
  mounted () {
    setTimeout(() => {
        this.isshow=true
    }, 3500);
  }
  // data() {
  //   return {
  //     old: {
  //       scrollTop: 0,
  //     },
  //   }
  // },
  // methods: {
  //   scroll: function (e) {
  //     console.log(e)
  //     this.old.scrollTop = e.detail.scrollTop
  //   },
  // },
}
</script>