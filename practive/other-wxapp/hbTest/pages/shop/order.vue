<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
        <button class="mini-btn" type="primary" size="mini"  @click="tz()">按钮</button>
    </view>
  </view>
</template>
<script>
export default {
  methods: {
    tz(){
        uni.navigateTo({
        url: 'shop',
      })
    }
  }
}
</script>