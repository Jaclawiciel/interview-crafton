const state = () => ({
    footer: {isLoading: false},
    header: {isLoading: false},
    carousel: {isLoading: false},
    main: {isLoading: false},
    contactForm: {isLoading: false}
})
const getters = {
    loading: state => serviceName => {
        return state[serviceName].isLoading
    }
}

const actions = {
    setLoadingStart({commit}, moduleName) {
        commit('loadingStart', moduleName)
    },
    setLoadingStop({commit}, moduleName) {
        commit('loadingStop', moduleName)
    }
}
const mutations = {
    loadingStart(state, serviceName) {
        state[serviceName].isLoading = true
    },
    loadingStop(state, serviceName) {
        state[serviceName].isLoading = false
    }
}
export const loaders = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
