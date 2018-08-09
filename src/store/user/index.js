import * as API from '@/api/index';
import app from '@/main';

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
    userLanding(state) {
      const token = getToken();
      if (token === undefined) {
        app.$router.push({ name: 'login' });
      }
    },
    updateToken(state, token) {
      state.token = token;
      localStorage.setItem(LOCASTORAGE_TOKEN_NAME, token);
    },
  },
  actions: {
    async login({ commit, dispatch, state, getters }, loginInfo) {
      const result = await API.postWithoutAuth(API.path.login, {
        un: loginInfo.username,
        pwd: loginInfo.password
      });
      if (result.code === 403) {
        app.$router.push({ name: 'login' });
      }
    },

    async signup({ commit, dispatch, state, getters }, signupInfo) {
      const result = await API.postWithoutAuth(API.path.signup, {
        un: signupInfo.username,
        pwd: signupInfo.password
      });
    }

  }
}