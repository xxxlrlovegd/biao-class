new Vue({
    el:绑定需要操作的dom
    data(){
        return{

        }
    },
    template:''   //先行渲染
    components:{
        组件名
    }
})
1.指令
v-text
v-html
v-show(display:none)
v-if(createElement,removElemnt)
v-for
v-on:(缩写@)
v-bind:(缩写：)
v-model（语法糖  :value='绑定value的值' @input='方法接收value值'）

2.局部组件和全局组件通信
父与子
prop=======$emit
$attrs======$listeners
bus中央空调

3生命周期
4keep-alive
 $nextTcik(callback)
5自定义指令
全局定义
Vue.directive('指令名',{
    bind: function (el,binding) {},
    inserted: function () {},
    update: function () {},
    componentUpdated: function () {},
    unbind: function () {}
})