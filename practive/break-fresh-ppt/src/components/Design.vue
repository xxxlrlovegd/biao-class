<template>
  <div class="aboutus">
    <Divider><span style="font-size:18px;font-weight:bold;"> 创新程度</span></Divider>
      <Steps :current="-1" direction="vertical">
        <Step title="识别精度高、速度快" content="采用先进的深度学习算法，优化业务场景，文字识别精度高。识别准确率已经大于90%，做到每秒一张图片的识别速度并且同时返回运单号和手机号。"></Step>
        <Step title="支持复杂背景" content="面单类型（国际面单、普通面单）、倾斜角度、双条码面单等不同场景下的面单识别"></Step>
        <Step title="支持PDA端和手机端应用" content="PDA手持设备通过红外、手机端通过自带的摄像功能对面单进行识别。其中PDA手持红外根据业务人员的作业习惯，点击中间scan为红外常亮扫描，两侧为闪亮扫描，两种扫描都可应用OCR技术进行运单号和手机号的识别。"></Step>
    </Steps>
    <p class="text" style="margin-top:5%"></p>
     <p class="text">总体来说，OCR技术的应用提高了一线邮政业务人员的面单扫描录入效率，可有效节省人工录入成本，提升作业效率，从而节省大量人力成本。本成果完全通过自行对OCR技术的深入研究，实现技术创新。</p>
    <div class='topMask square'></div>
    <div class='topMask circular'></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
/deep/.ivu-steps-vertical .ivu-steps-main .ivu-steps-title {
    line-height: 40px;
}
/deep/.ivu-steps-item.ivu-steps-status-wait .ivu-steps-title {
    color:#17233d;
    font-size: 17px;
}
/deep/.ivu-steps-vertical .ivu-steps-main .ivu-steps-content {
    padding-bottom: 10px;
    padding-left: 0;
}
/deep/.ivu-steps-item.ivu-steps-status-wait .ivu-steps-content {
    color:  #515a6e;
    line-height: 24px;
}
.aboutus {
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
}
.text {
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  text-indent: 2em;
}
.box-card {
  position: relative;
}
.topMask {
  width: 100px;
  height: 100px;
  background-color: rgba(68, 138, 255, 0.2);
  transform: rotate(45deg);
  position: absolute;
}
.square {
  border-radius: 5px;
  top: 140px;
}
.circular {
  border-radius: 50%;
  top: 220px;
  left: 80%;
  background-color: rgba(255, 208, 75, 0.2);
}
</style>