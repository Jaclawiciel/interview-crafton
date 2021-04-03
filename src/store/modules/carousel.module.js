import {carouselService} from "@/api/carousel.service";

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
            const carouselContent = await carouselService.getContent();
            commit('setContent', {carouselContent: carouselContent.data})
            commit('loaders/loadingStop', "carousel", {root: true});
            return carouselContent.data
        } catch (error) {
            console.error("[carousel.module] error! " + error.message)
            commit('loaders/loadingStop', "carousel", {root: true});
            throw error.message
        }
    }
}

// mutations
const mutations = {
    setContent(state, {carouselContent}) {
        state.content = carouselContent
    }
}

export const carousel = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
