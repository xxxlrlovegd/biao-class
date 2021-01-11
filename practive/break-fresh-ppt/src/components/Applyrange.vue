<template>
  <div class="securityresearch">
    <div class="title">
      <Divider><span style="font-size:18px;font-weight:bold;"> 应用范围 </span></Divider>
      <p>
        <Tag color="cyan">手机号识别</Tag>
        <Tag color="blue">快递面单识别</Tag>
        <Tag color="purple">手机端</Tag>
        <Tag color="geekblue">PDA端</Tag>
      </p>
    </div>
    <Row>
      <i-Col span="12">
        <div class="skill">
          <span
            class='kdmd'
            @click="getModel()"
          >面单识别</span>
          <span class='kdcs'>快递超市</span>
          <span class='PDA'>PDA红外扫描</span>
          <span class='phone'>手机端识别</span>
          <span class='yzyz'>邮政驿站App</span>
          <!-- <span class='echarts'>Echarts</span>
          <span class='linux'>linux</span> -->
        </div>
      </i-Col>
      <i-Col span="12">
        <p class="text">
          业务场景需要录入快递面单运单号、手机号信息的地方，都能运用OCR技术来实现。目前邮政驿站项目中PDA端的极速入库、手机端的入库扫描，已在生产系统得到很好的应用。
        </p>
        <div>
          <vueMiniPlayer
            ref="vueMiniPlayer"
            :video="video"
            :mutex="true"
            @fullscreen="handleFullscreen"
          />
        </div>
      </i-Col>
    </Row>
    <Modal
      v-model="isShow"
      draggable
      scrollable
      title="快递面单在邮政驿站项目中的应用详情"
    >
      <div slot="footer">
      </div>
      <Carousel
        v-model="value1"
        loop
        v-if="isShow"
      >
        <CarouselItem>
          <div class="demo-carousel">
            <span class="text">逻辑层面在PDA端的极速入库模块应用展示：</span>
            <img
              src="../assets/jsrk.png"
              alt=""
              class="imgStyle"
              style="width: 124%;margin-left: -11%;margin-top: 6%;"
            >
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <span class="text">表示层面在PDA端的极速入库模块应用展示：</span>
            <img
              src="../assets/jsrky.png"
              alt=""
              class="imgStyle"
            >
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <span class="text">逻辑层面在扫描入库模块应用展示：</span>
            <img
              src="../assets/rksm.png"
              alt=""
              class="imgStyle"
              style="margin-top: 6%;"
            >
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <span class="text">表示层面在扫描入库模块应用展示：</span>
            <img
              src="../assets/rksmy.png"
              alt=""
              class="imgStyle"
            >
          </div>
        </CarouselItem>
      </Carousel>
    </Modal>
  </div>
</template>
<style scoped>
.securityresearch {
  font-size: 14px;
  padding: 0px 100px;
}
.title p {
  color: #8c8888;
  font-size: 15px;
  margin-bottom: 50px;
  text-align: center;
}
.content p {
  font-size: 20px;
  color: #8c8888;
}
.text {
  font-size: 14px;
  text-align: left;
  line-height: 30px;
  text-indent: 2em;
}
.skill {
  margin: 70px 80px;
  position: relative;
}
.skill span {
  display: inline-block;
  color: #fff;
  border-radius: 50%;
}
span.kdmd {
  background-color: rgba(102, 153, 204, 1);
  width: 200px;
  height: 200px;
  line-height: 200px;
  font-size: 28px;
  z-index: 100;
  padding-left: 10%;
  cursor: pointer;
}
span.kdcs {
  background-color: rgba(255, 153, 102, 0.5);
  width: 130px;
  height: 130px;
  line-height: 130px;
  font-size: 20px;
  position: absolute;
  left: 0%;
  bottom: 150px;
  z-index: 0;
  padding-left: 3%;
}
span.PDA {
  background-color: rgba(102, 204, 204, 0.8);
  width: 100px;
  height: 100px;
  font-size: 26px;
  line-height: 90px;
  font-size: 13px;
  position: absolute;
  left: -10%;
  top: 100px;
  z-index: 0;
  padding-left: 1%;
}
span.echarts {
  background-color: rgba(255, 153, 153, 0.7);
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 24px;
  position: absolute;
  left: 62%;
  bottom: 10px;
  z-index: 0;
}
span.yzyz {
  background-color: rgba(255, 204, 51, 0.8);
  width: 70px;
  height: 70px;
  line-height: 70px;
  font-size: 12px;
  position: absolute;
  left: 32%;
  top: 20px;
  z-index: 0;
}
span.phone {
  background-color: rgba(204, 102, 102, 0.5);
  width: 70px;
  height: 70px;
  line-height: 60px;
  font-size: 12px;
  position: absolute;
  left: 34%;
  bottom: -10px;
  z-index: 0;
  padding-left: 1%;
}
span.linux {
  background-color: rgba(153, 153, 255, 0.8);
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  position: absolute;
  left: 60%;
  top: -50px;
  z-index: 0;
}
.imgStyle {
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
  name: "SecurityResearch",
  data() {
    return {
      video: {
        url: require("../assets/proVedio.mp4"),
        cover: "",
        muted: false,
        loop: false,
        preload: "auto",
        poster: "",
        volume: 1,
        autoplay: false,
      },
      isShow: false,
      value1: 0,
    };
  },
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    },
  },
  methods: {
    handleFullscreen() {},
    getModel() {
      this.isShow = true;
    },
  },
};
</script>