import {headerService} from "@/api/header.service";

const state = () => ({
    content: {}
})

// getters
const getters = {}

// actions
const actions = {
    async getContent({commit}) {
        commit('loaders/loadingStart', "header", {root: true});
        try {
            const headerContent = await headerService.getContent();
            commit('setContent', {headerContent: headerContent.data})
            commit('loaders/loadingStop', "header", {root: true});
            return headerContent.data
        } catch (error) {
            console.error("[header.module] error! " + error.message)
            commit('loaders/loadingStop', "header", {root: true});
            throw error.message
        }
    }
}

// mutations
const mutations = {
    setContent(state, {headerContent}) {
        state.content = headerContent
    }
}

export const header = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
