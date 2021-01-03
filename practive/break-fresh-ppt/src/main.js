import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import './my-theme/index.less';
import './assets/css/global.css'
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'
Vue.use(vueMiniPlayer)
Vue.config.productionTip = false
Vue.use(ViewUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
