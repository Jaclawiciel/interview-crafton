import axiosInstance from "axios";

let config = {
    // baseURL: "http://localhost:8080/api",
    baseURL: "https://6068426f0add49001733fe2f.mockapi.io",
    withCredentials: false, // Check cross-site Access-Control
    headers: {
        common: {}
    },
    cache: {
        maxAge: 15 * 60 * 1000
    }
};


const _axios = axiosInstance.create(config);

Plugin.install = function (Vue) {
    Vue.config.globalProperties.$axios = _axios;
    window.axios = _axios;
};


export const axios = _axios;
export const axiosPlugin = Plugin;
