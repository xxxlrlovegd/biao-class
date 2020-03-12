import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from './page/Home';
import Post from './page/Post';
import Admin from './page/Admin';
import AdminPost from './page/AdminPost';
import AdminCard from './page/AdminCard';
import AdminComment from './page/AdminComment';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routeConfig = [{
        path: '/',
        component: Home,
    },
    {
        path: '/post/:id',
        component: Post,
    },
    {
        path: '/admin',
        component: Admin,
        children: [{
            path: 'post/',
            component: AdminPost
        }, {
            path: 'card/',
            component: AdminCard
        }, {
            path: 'comment/',
            component: AdminComment
        }]
    },
];

new Vue({
    render: h => h(App),
    router: new VueRouter({
        routes: routeConfig,
    }),
}).$mount('#app');