import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[]
  },
  getters: {
  },
  mutations: {
    SET_MEJORES_PRODUCTOS(state,mejoresproductos){
      state.mejoresproductos=mejoresproductos
    },
    SET_TIPOS_PRODUCTOS(state,tiposproductos){
      state.tiposproductos=tiposproductos
    }
  },
  actions: {
    async fetchInfo({commit}){
      try{
        let response = await fetch("/home.json")
        let home = await response.json()
        let mejoresproductos = home.mejoresproductos
        let tiposproductos = home.tiposproductos
        commit("SET_MEJORES_PRODUCTOS",mejoresproductos)
        commit("SET_TIPOS_PRODUCTOS",tiposproductos)
      }
      catch(error){
        console.log(error)
      }}
  },
  modules: {
  }
})
