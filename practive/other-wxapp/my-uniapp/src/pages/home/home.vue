<template>
  <view>
     <scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
            <view id="demo1" class="scroll-view-item_H uni-bg-red">A</view>
            <view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
            <view id="demo3" class="scroll-view-item_H uni-bg-blue">C</view>
      </scroll-view>
  </view>
</template>
<script>
export default {
    data() {
        return {
            old: {
                scrollTop: 0
            }
        }
    },
    methods: {
        scroll: function(e) {
            console.log(e)
            this.old.scrollTop = e.detail.scrollTop
        },
    }
}
</script>