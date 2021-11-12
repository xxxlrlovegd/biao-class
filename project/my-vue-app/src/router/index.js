import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: "/dashboard",
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../view/Home.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashbooard",
        meta: {
          title: "系统首页",
        },
        component: () => import("../view/Dashboard.vue"),
      },
      {
        path: "/table",
        name: "basetable",
        meta: {
          title: "表格",
        },
        component: () => import("../view/BaseTable.vue"),
      },
      {
        path: "/form",
        name: "baseform",
        meta: {
          title: "表单",
        },
        component: () => import("../view/BaseForm.vue"),
      },
      {
        path: "/editor",
        name: "editor",
        meta: {
          title: "富文本编辑器",
        },
        component: () => import("../view/Editor.vue"),
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: "个人中心",
        },
        component: () => import("../view/User.vue"),
      },
      {
        path: "/message",
        name: "message",
        meta: {
          title: "消息列表",
        },
        component: () => import("../view/Message.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () => import("../view/Login.vue"),
  },
];
//vue3.router——createWebHash/History 带#的hash路由模式；createWebHistory 历史模式
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title}`
//     //1.登录前验证role值，若无值且没在登录页就跳转到登录页
//     //2.默认是普通用户，当你是管理员权限时会进入管理员权限页面，否则403
// })

export default router;
