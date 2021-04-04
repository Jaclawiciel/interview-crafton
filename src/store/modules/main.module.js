import {mainService} from "@/api/main.service";

const state = () => ({
    content: {}
})

// getters
const getters = {}

// actions
const actions = {
    async getContent({commit}) {
        commit('loaders/loadingStart', "main", {root: true});
        try {
            const mainContent = await mainService.getContent();
            commit('setContent', {mainContent: mainContent.data})
            commit('loaders/loadingStop', "main", {root: true});
            console.log(mainContent.data)
            return mainContent.data
        } catch (error) {
            console.error("[main.module] error! " + error.message)
            commit('loaders/loadingStop', "main", {root: true});
            throw error.message
        }
    }
}

// mutations
const mutations = {
    setContent(state, {mainContent}) {
        state.content = mainContent
    }
}

export const main = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
