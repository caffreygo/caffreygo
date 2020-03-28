const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
}

const getters = {
  token: state => {
    return state.token
  }
}

const mutations = {
  setToken(state, token) {
    state.token = token
    localStorage.setItem('token', token);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
