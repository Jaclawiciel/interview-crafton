import axiosInstance from "axios";

let config = {
    // baseURL: "http://localhost:8080/api",
    baseURL: "https://336cf581-3944-4a73-8ade-f156549a163e.mock.pstmn.io",
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
