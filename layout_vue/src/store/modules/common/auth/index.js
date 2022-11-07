import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGIN_REQUEST_ERROR } from "./actions";

import api from "@/utils/api";
import router from "@/router";

const { http } = api.getInstance();

const defaultState = () => ({
  token: localStorage.getItem("token") || null,
  isLoadingAuth: "",
});

const state = defaultState();

const getters = {
  token: (state) => state.token,
  isLoadingAuth: (state) => state.isLoadingAuth === "loading",
};

const mutations = {
  [LOGIN_REQUEST]: (state) => {
    localStorage.removeItem("token");
    Object.assign(state, defaultState());
  },
  [LOGIN_REQUEST]: (state) => {
    state.isLoadingAuth = "loading";
  },
  [LOGIN_REQUEST_SUCCESS]: (state, { data }) => {
    localStorage.setItem(`token`, data.token);
    state.token = data.token;
    state.isLoadingAuth = "success";
  },
  [LOGIN_REQUEST_ERROR]: (state) => {
    state.token = null;
    state.isLoadingAuth = "error";
    localStorage.removeItem("token");
  },
};

const actions = {
  [LOGIN_REQUEST]({ commit }, { body }) {
    return new Promise((resolve, reject) => {
      commit(LOGIN_REQUEST);

      http({
        method: "post",
        url: `/auth/login`,
        data: body,
      })
        .then((response) => {
          commit(LOGIN_REQUEST_SUCCESS, { data: response.data });
          resolve(response);
        })
        .catch((error) => {
          commit(LOGIN_REQUEST_ERROR);
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
