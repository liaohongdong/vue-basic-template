import * as types from './mutations-type'

const mutations = {
  // 设置加载状态
  [types.SET_LOADING_STATUS](state, data) {
    state.loading = data.loading
  },
  // 登出
  [types.SET_LOGOUT](state, data) {
    state.user = data
  },
}

export default mutations
