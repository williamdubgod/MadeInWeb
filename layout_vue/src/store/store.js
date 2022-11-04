import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/common/auth/index.js'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);
const dataState = createPersistedState({ storage: window.sessionStorage });

const store = new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
    dataState
  ]
}) 

export default store;
