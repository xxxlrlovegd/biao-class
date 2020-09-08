import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './my-theme/index.less';
import SlideVerify from 'vue-monoplasty-slide-verify';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.use(SlideVerify);
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')