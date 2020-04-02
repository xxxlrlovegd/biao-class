import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Home from './page/Home';
import About from './page/About';
import Login from './page/Login';
import Registe from './page/Registe';
import Setting from './page/Setting';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(ViewUI);
const RouterConfig = [{
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/Login',
        component: Login,
    },
    {
        path: '/registe',
        component: Registe,
    },
    {
        path: '/setting',
        component: Setting,
    },
];

new Vue({
    render: h => h(App),
    router: new VueRouter({
        routes: RouterConfig,
    }),
}).$mount('#app')