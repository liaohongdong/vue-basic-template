import * as types from './mutations-type'

const actions = {
  // 退出登录
  [types.LOGOUT]({ commit, state, dispatch }, data) {
    commit('SET_LOGOUT', data)
  },
}

export default actions
