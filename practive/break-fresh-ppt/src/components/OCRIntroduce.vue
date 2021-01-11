<template>
  <div class="aboutus">
    <Tabs>
      <TabPane label="OCR技术原理及流程">
        <p class="text">通过图像预处理，做角度矫正和去噪。然后我们要对文档版面进行分析，进每一行进行行分割，把每一行的文字切割下来，最后再对每一行文本进行列分割，切割出每个字符，将该字符送入训练好的OCR识别模型进行字符识别，得到结果。但是模型识别结果往往是不太准确的，我们需要对其进行识别结果的矫正和优化，比如我们可以设计一个语法检测器，去检测字符的组合逻辑是否合理。从大的模块总结而言，一套OCR流程可以分为：</p>
        <img
          src="../assets/ocrImg.jpg"
          alt=""
          style="width: 60%;height: 50%;margin: -10px 0px 0 260px;"
        >
        <p class="text">从上面的流程图可以看出，要做字符识别并不是单纯一个OCR模块就能实现的（如果单纯的OCR模块，识别率相当低）。</p>
      </TabPane>
      <TabPane label="深度学习的OCR技术">
        <p class="text">与传统的OCR技术不同深度学习使端到端的OCR成为可能，将文本的检测和识别统一到同一个工作流中，收集广泛而优质的数据，通过数据训练来提高OCR识别的准确性。由于简化了工作流，网络可以在极低运算开销下进行验证，达到实时速度。</p>
        <p class="text">尽管基于深度学习的OCR表现相较于传统方法更为出色，但是深度学习技术仍需要在OCR领域进行特化，而其中的关键正式传统OCR方法的精髓。因此我们仍需要从传统方法中汲取经验，使其与深度学习有机结合进一步提升OCR的性能表现。另一方面，作为深度学习的推动力，数据起到了至关重要的作用，因此收集广泛而优质的数据也是现阶段OCR性能的重要举措之一。</p>
      </TabPane> 
    </Tabs>
<div class='topMask square'></div>
      <div class='topMask circular'></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
/deep/.ivu-tabs-nav .ivu-tabs-tab-active {
    color: #19be6b;
    padding: 20px 16px;
    font-weight: bold;
}
.aboutus {
  font-size: 16px;
  text-align: left;
  padding: 0px 100px;
}
.text {
  font-size: 16px;
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
  top: 360px;
  left: 10%;
}
.circular {
  border-radius: 50%;
  top: 150px;
  left: 80%;
  background-color: rgba(255, 208, 75, 0.2);
}
</style>