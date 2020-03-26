import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(ViewUI);
Vue.config.productionTip = false
    // const RouterConfig = {
    //     // routes: Routers
    // };
    // const router = new VueRouter(RouterConfig);

new Vue({
    render: h => h(App),
}).$mount('#app')