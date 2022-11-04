import router from '../router/index';
import axios from 'axios';
class Http {
    constructor() {
        this.http = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
        });

        this.http.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                if (error.response.status === 401) {
                    //TODO
                    const token = localStorage.getItem(`token`);
                    if (!token) return router.push('/login');
                }
                return Promise.reject(error);
            },
        );
    }
}

export default class SingletonHttp {
    constructor() {
        throw new Error('Use SingletonHttp.getInstance()');
    }

    static getInstance() {
        if (!SingletonHttp.instance) {
            SingletonHttp.instance = new Http();

            SingletonHttp.instance.http.defaults.headers.common['Accept-Language'] = 'pt-br';

            if (localStorage.getItem('token')) {
                SingletonHttp.instance.http.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
                    'token',
                )}`;
            }
        }

        return SingletonHttp.instance;
    }
}