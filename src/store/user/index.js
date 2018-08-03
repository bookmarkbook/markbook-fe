
export default {
  namespaced: true,
  state: {
    token: '',
    isLogin: false,
  },
  mutations: {
    setImageList(state, list) {
      state.imageList = list;
    },
  },
  actions: {
    async login({ commit, dispatch, state, getters }) {
      //
    },

  }
}