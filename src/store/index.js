import {createStore} from 'vuex'

// standard store
import {loaders} from './modules/loaders.module'
import {footer} from './modules/footer.module'
import {header} from "@/store/modules/header.module";
import {carousel} from "@/store/modules/carousel.module";
import {main} from "@/store/modules/main.module";

// Vue.use(Vuex)

const store = createStore({
    modules: {
        loaders,
        footer,
        header,
        carousel,
        main
    },
    // strict: debug,
    plugins: []
})
export default store
