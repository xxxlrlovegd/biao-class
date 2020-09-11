import Vue from 'vue'
import Vuex from 'vuex'
import Getters from './getters'
import Actions from './actions'
import Mutations from './mutations'

Vue.use(Vuex)
const inclube = []
const state = {
    LOADING: false,
    nub: [],
    handerMenu: [{
        name: '首页',
        key: '/homePage'
    }],
    dir: [],
    inclube,
}

export default new Vuex.Store({
    state,
    getters: Getters,
    mutations: Mutations,
    actions: Actions
})