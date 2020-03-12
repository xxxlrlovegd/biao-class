<template>
 
  <div id="app"> 
   
 <i-Button style="display:none"  @click="test"></i-Button>
 <Modal title="亲爱的"  v-model="modalShow" :mask-closable="false" :closable="false"  :styles="{top: '380px'}" width="680" >
       <p slot="header" style="color:#F6ACCD;font-size: 32px;font-weight: bolder;">
            <Icon type="ios-heart" />
            <span>亲爱的</span>
        </p>
        <br/>
        <p :style="classObject">{{modalStr}}</p>
         <br/>
         <div slot="footer" style="padding:16px 20px;">
            <i-Button size="large" type="info"  @click="modalEvent('ok')" style="margin-right: 20px;">Yes</i-Button>
             <i-Button size="large"   @click="modalEvent('cancel')">No</i-Button>
         </div>
  </Modal>
  <div v-show="!modalShow">
  <Divider orientation="left" style="font-size: 40px;font-weight: bold;color:#F6ACCD"><Icon type="ios-beer-outline" />2020年你与我的第一个情人节</Divider>
  <p style="font-weight: bold;color:#F6ACCD;font-size: 26px;text-align: right;position: relative;top: -36px;right: 46px;">{{gettime}}</p>
    <div style="width: 75%;margin: 5%;">
        <List :split="false">
            <ListItem style="font-size: 24px;font-weight: bolder;color:rgb(189, 146, 218)">一房二人三餐四季， 星辰大海， 雅俗共度</ListItem>
            <ListItem style="font-size: 24px;font-weight: bolder;color:#BE99D7;padding-left: 84px">四海三山二心一生， 清风草木， 风雨并肩</ListItem> 
        </List>
    </div>
    <Carousel autoplay v-model="value" :autoplay-speed="3500" loop>
        <CarouselItem>
            <div class="demo-carousel">
                <img style="width:85%;height:548px" src="../src/assets/logo.png" />
            </div>
        </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
                <img style="width:85%;height:548px" src="../src/assets/lunbo3.png" />
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
                <img style="width:85%;height:548px" src="../src/assets/lunbo.png" />
            </div>
        </CarouselItem>
    </Carousel>
    <div class="contentStyle">
    <p>幸福是温暖而柔软的</p>
    <p>你便是如此</p>
    <p>我想 我在学着如何去爱一个人</p>
    <p>看到你本来的样子</p>
    <p>而不是期待你像我所期待的那个样子</p>
    <p>学习如何和你慢慢变亲密</p>
    <p>慢慢接受磨合找到舒服的相处方式</p>
    <p>我也希望自己学会清晰的表达</p>
    <p>我想要什么 我希望什么 我怎么了</p>
    <p>太远的未来 就让我们一起填满 你和我的故事还在继续</p>
    <Button v-if="!qzStr" type="text" ghost   @click="buttonEvent">碰我有惊喜</Button>
    <P v-else>{{qzStr}}</P>
    <Modal  v-model="modal1Show" :mask-closable="false" :closable="false"  :styles="{top: '380px'}" width="680" >
       <p slot="header" style="color:#ff9900;font-size: 32px;font-weight: bolder;">
            <Icon type="ios-happy" />
            <span>小笨蛋</span>
        </p>
        <br/>
        <p :style="classObject">骗你的 如果可以 我想骗你一辈子</p>
         <br/>
         <div slot="footer">
         </div>
  </Modal>
    </div>
     <audio class="audioStyle" autoplay="autoplay" 
       controls="controls"
       preload="auto"
       loop="loop"
       src="../src/assets/love.mp3">
    </audio>
   </div>
  </div>
   
</template>

<script>
 
export default {
  name: "app",
  data(){
    return{
      modalShow:false,
      modalStr:'是否确定跟着您的小可爱开启本次旅程？',
      classObject:{
        'text-align':'center',
         'color':'#2db7f5',
         'font-size': '24px',
      },
      gettime:'',
      value: 0,
      modal1Show:false,
      qzStr:''
    }
  },
  created() {
    this.currentTime();    
  },
  mounted() {
    this.test()
  },
  methods: {
      test(){
        this.modalShow = true
      },
      modalEvent(param){
        if (param=='ok') {
          this.classObject.color='#19be6b'
           this.modalStr="好的，您的小可爱已收到~ 现为您系上安全带！"
              setTimeout(() => {
               this.modalShow=false
              }, 1800);  
        } else {
           this.classObject.color='#ed4014'
          this.modalShow=true
          this.modalStr="哼，你是大笨笨么？ 还不快去选重新选！"   
        }        
      },
     currentTime(){
      setInterval(this.getTime,500)
     },
     getTime(){
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth()+1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
      let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
      _this.gettime = yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
    },
    buttonEvent(){
      this.modal1Show=true
      setTimeout(() => {
         this.modal1Show=false
         this.qzStr="顺利养鸭60天 成功做猪两月 再接再厉 继续努力"
      }, 2200);
        
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ivu-modal-header p, .ivu-modal-header-inner {
    height: 32px !important;
}
audio {
    display: none !important;
    position: absolute;
    top: 22px;
    right: 26px;
}
.contentStyle{
  margin-top: 28px
}
.contentStyle>*{
  color:antiquewhite;
  font-size: 24px;
  margin-bottom:10px; 
}
</style>
