import {footerService} from "@/api/footer.service";

const state = () => ({
    content: {}
})

// getters
const getters = {}

// actions
const actions = {
    async getContent({commit}) {
        commit('loaders/loadingStart', "footer", {root: true});
        try {
            const footerContent = await footerService.getContent();
            commit('setContent', {footerContent: footerContent.data})
            commit('loaders/loadingStop', "footer", {root: true});
            return footerContent.data
        } catch (error) {
            console.error("[footer.module] error!")
            commit('loaders/loadingStop', "footer", {root: true});
            return null
        }
    }
}

// mutations
const mutations = {
    setContent(state, {footerContent}) {
        state.content = footerContent
    }
}

export const footer = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
