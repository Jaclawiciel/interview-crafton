import {createStore} from 'vuex'

// standard store
import {loaders} from './modules/loaders.module'
import {footer} from './modules/footer.module'
import {header} from "@/store/modules/header.module";

// Vue.use(Vuex)

const store = createStore({
    modules: {
        loaders,
        footer,
        header
    },
    // strict: debug,
    plugins: []
})
export default store
