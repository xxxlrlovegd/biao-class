<template>
  <div class="banner">
    <img
      src="../assets/仓库存货.png"
      alt=""
      style="width: 55%;height: 90%;margin-top: 4%;margin-left: 22%;"
    >
    <div
      class="title"
      @click="gotolink"
    >基于OCR技术<br>
      <div class="smtitle">实现面单信息极速采集</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotolink() {
      //指定跳转地址
      this.$router.replace("/achievement");
    },
  },
};
</script>
<style lang="less" scoped>
.banner {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #19be6b);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  color: #fff;
  @keyframes gradientBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .title {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 46px;
    letter-spacing: 1em;
    text-shadow: 2px 2px 10px #eee;
    color: #17233d;
    background: linear-gradient(#fff, #fff) left top,
      linear-gradient(#fff, #fff) left top,
      linear-gradient(#fff, #fff) right top,
      linear-gradient(#fff, #fff) right top,
      linear-gradient(#fff, #fff) left bottom,
      linear-gradient(#fff, #fff) left bottom,
      linear-gradient(#fff, #fff) right bottom,
      linear-gradient(#fff, #fff) right bottom;
    background-repeat: no-repeat;
    background-size: 10px 40px, 40px 10px;
    cursor: pointer;
  }
  .smtitle {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 28px;
    letter-spacing: .5em;
    text-shadow: 2px 5px 5px #eee;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>