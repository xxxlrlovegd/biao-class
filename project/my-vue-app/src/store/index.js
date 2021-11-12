import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        collapse: false,
    },
    mutations: {
        //侧边栏折叠方法
        handleCollapse(state, data) {
            alert("看值"+data)
            state.collapse=data
        }
    },
    action: {},
})