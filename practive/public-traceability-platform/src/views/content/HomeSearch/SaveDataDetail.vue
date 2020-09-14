<style  lang="less" scoped >
.cardTitle {
  color: #47b393;
  text-align: center;
  margin: 10px 0px;
}
.fontSizeBig {
  font-size: 26px;
  font-weight: bold;
  height: 32px;
  line-height: 32px;
}
.fontSizeSamll {
  font-size: 18px;
}
.circleStyle {
  display: inline-block;
  background-color: #47b393;
  width: 10px;
  height: 10px;
  border: 1px solid #47b393;
  border-radius: 50%;
}
.xqStyle {
  font-size: 16px;
  .nrStyle {
    margin: 15px;
    color: #adadad;
  }
}
</style>
<template>
  <Card style="width:50%;margin:8% 26%">
    <p slot="title" class="cardTitle fontSizeBig">存证数据详情查询结果</p>
    <div v-if="!flag">
      <div v-if="search &&czData">
        <p class="cardTitle fontSizeSamll">区块结构详情</p>
        <Row style="margin:25px 10px;">
          <i-col span="18">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              区块hash:
              <span class="nrStyle">{{czData.qk.qk}}</span>
            </span>
          </i-col>
          <i-col span="6">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              个数:
              <span class="nrStyle">{{czData.qk.qkNum}}</span>
            </span>
          </i-col>
        </Row>
        <Row style="margin:25px 10px;">
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              Root&nbsp;Hash:
              <span class="nrStyle">{{czData.qk.Root}}</span>
            </span>
          </i-col>
          <i-col span="6">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              块高:
              <span class="nrStyle">{{czData.qk.height}}</span>
            </span>
          </i-col>
          <i-col span="6">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              区块版本:
              <span class="nrStyle">{{czData.qk.revison}}</span>
            </span>
          </i-col>
        </Row>
        <Row style="margin:25px 10px;">
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              上一块Hash:
              <span class="nrStyle">{{czData.qk.preHash}}</span>
            </span>
          </i-col>
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              成块时间:
              <span class="nrStyle">{{czData.qk.ckTIme}}</span>
            </span>
          </i-col>
        </Row>
        <p class="cardTitle fontSizeSamll">交易记录</p>
        <Row style="margin:25px 10px;">
          <i-col span="24">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              存证hash:
              <span class="nrStyle">{{czData.jy.cz}}</span>
            </span>
          </i-col>
        </Row>
        <Row style="margin:25px 10px;">
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              业务时间:
              <span class="nrStyle">{{czData.jy.ywsj}}</span>
            </span>
          </i-col>
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              存证时间:
              <span class="nrStyle">{{czData.jy.czsj}}</span>
            </span>
          </i-col>
        </Row>
      </div>
      <div v-else style="height:250px;margin-left:20%;margin-top:10%;">
        <Row style="margin:25px 10px;">
          <i-col span="24">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              交易hash:
              <span class="nrStyle">{{czData.xx.name}}</span>
            </span>
          </i-col>
        </Row>
        <Row style="margin:25px 10px;text-ali">
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              时间戳:
              <span class="nrStyle">{{czData.xx.sjc}}</span>
            </span>
          </i-col>
          <i-col span="12">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              Nonce:
              <span class="nrStyle">{{czData.xx.nonce}}</span>
            </span>
          </i-col>
        </Row>
        <Row style="margin:25px 10px;">
          <i-col span="24">
            <div class="circleStyle"></div>
            <span class="xqStyle">
              区块高度:
              <span class="nrStyle">{{czData.xx.height}}</span>
            </span>
          </i-col>
        </Row>
      </div>
    </div>
    <div v-else>
      <p>暂无数据</p>
    </div>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      search: false,
      czData: {
        qk: {
          qk: 'sdfjdks2433dsfsdfwfd4353dsfsfdfdgfdgfddsgdss',
          qkNum: '1',
          Root: 'sf32j4kjfdsg',
          height: '345353',
          revison: '2',
          preHash: '435jfkdjdsfsk',
          ckTIme: '2020-9-14 16:52:10',
        },
        jy: {
          cz: '435234jfdksjgkfdskfsfds',
          ywsj: '2020-9-14 16:52:49',
          czsj: '2020-9-14 16:53:10',
        },
        xx: {
          name: '23djkdsj324hjhfdsajfs',
          sjc: '2020-9-14 17:38:34',
          nonce: '1',
          height: '89434',
        },
      },
    }
  },
  mounted() {
    console.log('------', Object.keys(this.czData).length === 0)
    this.flag = Object.keys(this.czData).length === 0
  },
  methods: {},
}
</script>