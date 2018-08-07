import * as API from '@/api/index';

const LOCASTORAGE_TOKEN_NAME = 'usertoken';
function getToken() {
  return localStorage.getItem(LOCASTORAGE_TOKEN_NAME);
}

export default {
  namespaced: true,
  state: {
    token: '',
    isLogin: false,
  },
  mutations: {
    updateToken(state, token) {
      state.token = token;
      localStorage.setItem(LOCASTORAGE_TOKEN_NAME, token);
    },
  },
  actions: {
    async login({ commit, dispatch, state, getters }) {
      const result = API.post(API.path.login, {

      })
    },

    async signup({ commit, dispatch, state, getters }) {
      const result = API.post(API.path.signup, {

      });
    }

  }
}