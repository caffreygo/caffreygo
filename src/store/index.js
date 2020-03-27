import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations

  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  // state 存放状态
  // mutations state成员操作  this.$store.commit('mutations func',param)
  // getters 加工state成员给外界
  // actions 异步操作  this.$store.dispatch('aEdit',{age:15})
  // modules 模块化状态管理
})
