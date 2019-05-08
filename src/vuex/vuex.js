import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
    test:'牛牛',
    userName:'',
}

const mutations = {
    testFn:(state,userName) => {
        state.userName = userName
    }
}

const actions = {
    
}

const getters = {
    abc:state => {
        if(state.test == '牛牛'){
            return '猪猪'
        }
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})