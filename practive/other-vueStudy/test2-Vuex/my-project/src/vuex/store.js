import Vue from 'vue';
import Vuex from 'vuex';
import Zanwei from '../assets/logo.png'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //类似于data
    //这里写入数据
    goods: {
      totalPrice: 0,
      totalNum: 0,
      goodsData: [{
          id: '1',
          title: '大芒果',
          price: 8.00,
          image: {
            Zanwei
          },
          num: 0
        },
        {
          id: '2',
          title: '大苹果',
          price: 5.00,
          image: {
            Zanwei
          },
          num: 0
        },
      ]
    }
  },
  getters: {
    //类似computed
    //写function
    totalNum(state) {
      let aTotalNum = 0;
      state.goods.goodsData.forEach((value, index) => {
        console.log(index)
        if (value.num < 0) value.num = 0
        aTotalNum += value.num;
      })
      return aTotalNum;
    },
    totalPrice(state) {
      let aTotalPrice = 0;
      state.goods.goodsData.forEach((value, index) => {
        console.log(index)
        if (value.num < 0) value.num = 0
        aTotalPrice += value.num * value.price
      })
      return aTotalPrice.toFixed(2);
    }
  },
  mutations: {
    //类似methods
    //写方法对数据做出更改(同步操作)
    reselt(state, msg) {
      console.log(msg)
      state.goods.totalPrice = this.getters.totalPrice;
      state.goods.totalNum = this.getters.totalNum;
    },
    reduceGoods(state, index) {
      state.goods.goodsData[index].num -= 1;
      let msg = '减执行了一次'
      this.commit('reselt', msg);
    },
    addGoods(state, index) {
      state.goods.goodsData[index].num += 1;
      let msg = '加执行了一次'
      this.commit('reselt', msg)
      /**
       *重新渲染store中的方法，一律用commit方法
       *commit('reselt',{state:state}) 
       * 也可commit({type:'reselt',state:state})
       **/

    }
  },
  actions: {
    //类似methods
    //写方法对数据做出更改(异步操作)
  }
})