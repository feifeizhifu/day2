import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    getData(state,params){
          state.list = params
    }
  },
  actions: {
     getData({commit}){
      axios.get("/api/data").then(res=>{
       commit("getData",res.data)
       })
     }
  },
  modules: {
  }
})
