import Vue from 'vue'
import VueRouter from 'vue-router'
import FirstPage  from '../components/FirstPage.vue'
import Home from '../components/Home.vue'
import Achievement  from '../components/Achievement.vue'
import Applyrange from '../components/Applyrange.vue'
import Innovalue from '../components/Innovalue.vue'
import Design from '../components/Design.vue'
import OCRIntroduce from '../components/OCRIntroduce.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: FirstPage },
  {
    path: '/home', component: Home, 
    children: [
      { path: '/achievement', component: Achievement},
      { path: '/applyrange', component: Applyrange },
      { path: '/innovalue', component: Innovalue },
      { path: '/design', component: Design },
      { path: '/ocrIntroduce', component: OCRIntroduce},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
