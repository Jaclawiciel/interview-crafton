import {createApp} from 'vue'
import App from './App.vue'

// router
import router from './router'

// store
import store from "./store"

// plugins
import {axiosPlugin} from './plugins/axios'

// layout system
import AppLayout from "./layouts/AppLayout";

// initialize vue instance
const vueApp = createApp(App)

// initialize components and plugins
vueApp.use(router)
vueApp.use(store)
vueApp.use(axiosPlugin)

// mount app
vueApp.component('AppLayout', AppLayout)
vueApp.mount('#app')
