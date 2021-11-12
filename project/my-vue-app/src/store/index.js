import { createStore } from "vuex";

export default createStore({
  state: {
    collapse: false,
    menuList: [
      {
        icon: "el-icon-house",
        index: "/dashboard",
        title: "系统首页",
      },
      {
        icon: "el-icon-menu",
        index: "/table",
        title: "基础表格",
      },
      {
        icon: "el-icon-document",
        index: "2",
        title: "表单相关",
        subs: [
          {
            index: "/form",
            title: "基本表单",
          },
          {
            index: "3",
            title: "三级菜单",
            subs: [
              {
                index: "/editor",
                title: "富文本编辑器",
              },
            ],
          },
        ],
      },
    ],
  },
  mutations: {
    //侧边栏折叠方法
    handleCollapse(state, data) {
      state.collapse = data;
    },
  },
  action: {},
});
