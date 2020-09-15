import Vue from 'vue'
import Router from 'vue-router'

Router.prototype.goBack = function goBack(backStep) {
    this.isBack = true
    window.history.go(backStep || -1)
}
//push 
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
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
        },
        {
            path: '/register',
            component: resolve => require(['./views/Register'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
            path: '/developer',
            component: resolve => require(['./views/developerManager/developerInfo'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
            path: '/saveData',
            component: resolve => require(['./views/content/HomeSearch/SaveDataDetail'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
            path: '/information',
            component: resolve => require(['./views/content/UserInfo/Information'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
            path: '/resetPassword',
            component: resolve => require(['./views/content/UserInfo/ResetPossword'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
            path: '/personInfo',
            component: resolve => require(['./views/content/UserInfo/PersonInfo'], resolve),
            meta: {
                needLogin: false
            }
        },
        {
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