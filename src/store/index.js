import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import todo from './todo'
import cate from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user, todo, cate
  },
})
