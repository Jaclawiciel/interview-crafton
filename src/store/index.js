import {createStore} from 'vuex'

// standard store
import {loaders} from './modules/loaders.module'
import {footer} from './modules/footer.module'
import {header} from "@/store/modules/header.module";
import {carousel} from "@/store/modules/carousel.module";

// Vue.use(Vuex)

const store = createStore({
    modules: {
        loaders,
        footer,
        header,
        carousel
    },
    // strict: debug,
    plugins: []
})
export default store
