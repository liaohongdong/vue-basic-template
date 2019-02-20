export default {
  namespaced: true,
  state: {
    testModules: 0
  },
  getters: {
    getTestModule: (state) => {
      let testModules = state.testModules
      return { testModules }
    },
  },
  mutations: {
    set_getTestModule(state, val) {
      state.testModules = val
    }
  },
  actions: {
    set_getTestModule({ commit, dispatch }, data) {
      commit('set_getTestModule', data)
    }
  }
}
