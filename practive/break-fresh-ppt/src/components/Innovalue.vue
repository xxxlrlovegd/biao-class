<template>
  <div class="aboutus">
    <Divider><span style="font-size:18px;font-weight:bold;"> 创新价值 </span></Divider>
    <p
      class="text"
      style="margin-top:5%"
    >OCR技术已经在八一农垦大学实际应用，日均入库300件，日均入库时间20分钟左右，平均一件入库时间4秒左右（扫描+核对），（除破损面单外）使用过程中没有发生识别缓慢问题。用户对使用效果较为满意，对使用OCR技术实现的入库模式表示非常认可。</p>
    <p class="text">总体来说，OCR技术的应用提高了一线邮政业务人员的面单扫描录入效率，可有效节省人工录入成本，提升作业效率，从而节省大量人力成本。驿站项目的上线，对公司后续研发快递超市起到了示范效应，大幅缩短了工期,节省了研发成本，也为后续推广自主快递驿站衍生的产品提供坚实的基础。</p>
    <p class="text">支持不同物流面单不同条码位置图片的信息提取和识别，助力物流快递行业自动化效率提升。业务人员通过PDA红外识别扫描面单，OCR自动识别运单号和手机号。高精度的OCR识别，可处理复杂背景、光照不均、模糊以及不同面单类型条码位置不同等问题，减少异常情况的人工处理时间，大幅提升业务人员的作业效率。真正的实现高速扫描入库，实现降本增效。</p>

    <div class='topMask square'></div>
    <div class='topMask circular'></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
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