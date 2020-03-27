const state = {
  token: ''
}

const getters = {
  token: state => {
    return state.token
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token
  }
}

const actions = {
  async setToken({ commit }, token) {
    commit('setToken', token)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
