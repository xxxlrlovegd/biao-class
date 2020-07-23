import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import store from './vuex/store.js';
import Good from '../src/components/Goods';
import GoodNew from '../src/components/GoodNew';
import Errors from '../src/components/Error';
Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ViewUI);
const RouterConfig = [{
  path: '/',
  name: "购物车",
  component: Good,
}, {
  path: '/GoodNew',
  name: "订单详情",
  component: GoodNew,
}, {
  path: '*',
  component: Errors,
}]
new Vue({
  store,
  render: h => h(App),
  router: new VueRouter({
    routes: RouterConfig,
  }),
}).$mount('#app')