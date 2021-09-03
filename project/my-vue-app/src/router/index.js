import {
    createRouter,
    createWebHistory
} from "vue-router";
const routes = [{
    path: '/',
    redirect: '/dashboard'
}, {
    path: "/",
    name: "Home",
    component: () => import("../view/Home.vue"),
    children: [{
        path: "/dashboard",
        name: "dashbooard",
        meta: {
            title: '系统首页',
        },
        component: () => import("../view/dashboard.vue")
    }]
}, {
    path: '/login',
    name: 'Login',
    meta: {
        title: "登录"
    },
    component: () => import("../view/Login.vue")
}]
//vue3.router——createWebHashHistory 带#的hash路由模式；createWebHistory 历史模式
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;