import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function goBack(backStep) {
    this.isBack = true
    window.history.go(backStep || -1)
}
Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            component: resolve => require(['./views/homeShow'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
            path: '/login',
            component: resolve => require(['./views/Login'], resolve),
            meta: {
                needLogin: false
            }
        }, {
            path: '/register',
            component: resolve => require(['./views/Register'], resolve),
            meta: {
                needLogin: false
            }
        }, {
            path: '/home',
            component: resolve => require(['./Home'], resolve),
            meta: {
                needLogin: true
            },
            children: [{
                    path: '/homePage',
                    component: resolve => require(['./views/homePage'], resolve)
                },
                // 接口管理模块
                // {
                //     path: '/developerInfo',
                //     name: 'developerInfo',
                //     component: resolve => require(['views/content/interfaceAccess/DeveloperInfo.vue'], resolve)
                // }, {
                //     path: '/applyForDeveloper',
                //     name: 'applyForDeveloper',
                //     component: resolve => require(['views/content/interfaceAccess/developers/ApplyForDeveloper.vue'], resolve)
                // }, {
                //     path: '/devInfo',
                //     name: 'devInfo',
                //     component: resolve => require(['views/content/interfaceAccess/developers/SuccInfo.vue'], resolve)
                // }, {
                //     path: '/modifyInfo',
                //     name: 'modifyInfo',
                //     component: resolve => require(['views/content/interfaceAccess/developers/ModifyInfo.vue'], resolve)
                // }, {
                //     path: '/applyForInterface',
                //     component: resolve => require(['views/content/interfaceAccess/ApplyForInterface.vue'], resolve)

                // }, {
                //     path: '/referenceData',
                //     component: resolve => require(['views/content/interfaceAccess/reference/ReferenceData.vue'], resolve)
                // },

            ]
        }
    ]
})