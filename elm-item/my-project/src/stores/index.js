import Vue from 'vue'
import Vuex from 'vuex'
//仓库
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        author:'jing',
        search:{
            value:''
        }
    },
    getters:{
        getAuthor(state){
           return state.search
        }
    },
    mutations:{
        setAuthor(state,data){
            state.search=data
        }
    },
    actions:{
        setAuthor(context,data){
            context.commit('setAuthor',data)
        }
    }
})