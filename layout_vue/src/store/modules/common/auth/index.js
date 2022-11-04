import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_ERROR
} from './actions'

import api from '@/utils/api'
import router from '@/router'

const {http} = api.getInstance()

const defaultState = () => ({
    token:localStorage.getItem('token') || null, 
    isLoadingAuth: ''
})

const state = defaultState();

const getters = {
    twoAuthHash: (state) => state.twoAuthHash,
    loaderDoEstado: (state) => state.loaderDoEstado === 'loading',
};

const mutations = {
    [LOGIN_REQUEST]: (state) => {
        localStorage.removeItem('token');
        localStorage.removeItem('last');
        Object.assign(state, defaultState());
    },
    [LOGIN_REQUEST]: (state) => {
        state.isLoginLoading = 'loading';
    },
    [LOGIN_REQUEST_SUCCESS]: (state, { data }) => {
        localStorage.setItem(`token`, data.token);
        state.twoAuthHash = data.hashCode;
        state.isLoginLoading = 'success';
    },
    [LOGIN_REQUEST_ERROR]: (state) => {
        state.twoAuthHash = null;
        state.isLoginLoading = 'error';
    },
};

const actions = {
    [LOGIN_REQUEST]({ commit }, { login }) {
        return new Promise((resolve, reject) => {
            commit(LOGIN_REQUEST);

            http({
                method: 'post',
                url: `/auth`,
                data: login,
            })
                .then((response) => {
                    commit(LOGIN_REQUEST_SUCCESS, { data: response.data });
                    resolve(response);
                })
                .catch((error) => {
                    commit(LOGIN_REQUEST_ERROR);
                    localStorage.removeItem('token');
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