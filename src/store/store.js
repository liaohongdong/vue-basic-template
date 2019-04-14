import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import * as getters from './getters'

import index from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    liao: 'haha',
    user: 'liao_user',
    loading: false
  },
  mutations,
  actions,
  getters,
  modules: {
    index: index
  }
})
