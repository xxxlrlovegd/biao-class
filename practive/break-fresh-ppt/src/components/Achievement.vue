<template>
  <div class="aboutus">
    <div class="title">
      <Divider><span style="font-size:18px;font-weight:bold;"> 成果内容 </span></Divider>
      <p>
        <Tag color="cyan">传统OCR</Tag>
        <Tag color="blue">深度学习OCR</Tag>
        <Tag color="geekblue">人工智能</Tag>
      </p>
    </div>
    <Card
      class="box-card"
      style="margin-bottom: 20px;"
    >
      <div class="text item">
        <Row :gutter="110">
          <i-Col :span="8">
            <div class="grid-content bg-purple">
             <span class="large">手工补录面单信息</span>一直是影响业务作业效率的<span style="color:red;">痛点</span>，而ocr技术通过利用光学技术和计算机技术把印在或写在纸上的文字读取出来，并转换成一种计算机能够理解、人又可以使用的格式输出出来，不光大大提升业务人员的作业效率，也使得业务操作变得更加智能化。
            </div>
          </i-Col>
          <i-Col :span="8">
            <div class="grid-content bg-purple" @click="checkDetail()" style="cursor: pointer;">
            OCR识别其目的很简单，要把影像作一个转换，使影像内的图形继续保存。有表格则表格内资料及影像内的文字，一律变成计算机文字，达到影像资料的存储量减少、识别出的文字可再使用及分析，当然也可节省因键盘输入的人力和时间。影响识别准确率的技术瓶颈是文字检测和文本识别。
            </div>
          </i-Col>
          <i-Col :span="8">
            <div class="grid-content bg-purple">
              目前应用OCR技术我们可以<span class="large">识别运单号</span>、<span class="large">手机号</span>，可以根据应用的场景的不同提供单独的接口返回想要的面单数据，同时扫描大量的面单来提高OCR的识别准确率。例如预约投递时，可以调用手机号的识别接口返回手机号信息。做入库收录信息时，可以循环调用运单号、手机号识别接口返回运单号，手机号进行快速入库。
            </div>
          </i-Col>
        </Row>
      </div>
      <div class='topMask square'></div>
      <div class='topMask circular'></div>
    </Card>
  </div>
</template>
<script>
export default {
  methods: {
         checkDetail(){ 
          //指定跳转地址
          this.$router.replace('/ocrIntroduce')
        }

    }
};
</script>
<style>
.aboutus .grid-content.line {
  border-right: 1px solid #ddd;
  height: 150px;
}
.aboutus .el-card__header {
  background: #545c64;
}
.aboutus .el-card__body {
  padding: 50px 20px;
}
.aboutus .el-timeline-item__wrapper {
  top: -8px;
}
.aboutus .title p .el-tag {
  margin: 0px 5px;
  cursor: pointer;
}
</style>
<style scoped>
.aboutus {
  font-size: 14px;
  text-align: left;
  padding: 0px 100px;
}
.intro {
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
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
.item {
  display: inline-block;
  margin: 30px 50px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix span {
  color: #fff;
  font-weight: bold;
}
.title p {
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 50px;
  text-align: center;
}
.grid-content .large {
  font-size: 16px;
  color: #409eff;
  font-weight: bold;
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
  top: 0px;
}
.circular {
  border-radius: 50%;
  top: 80px;
  left: 80%;
  background-color: rgba(255, 208, 75, 0.2);
}
</style>