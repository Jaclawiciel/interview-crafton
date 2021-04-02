import {createStore} from 'vuex'

// standard store
import {loaders} from './modules/loaders.module'
import {footer} from './modules/footer.module'

// Vue.use(Vuex)

const store = createStore({
    modules: {
        loaders,
        footer
    },
    // strict: debug,
    plugins: []
})
export default store
