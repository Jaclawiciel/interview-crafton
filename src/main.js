import {createApp} from 'vue'
import App from './App.vue'

// router
import router from './router'

// layout
import AppLayout from "@/layouts/AppLayout";

// initialize vue instance
const vueApp = createApp(App)

// initialize components and plugins
vueApp.use(router)

// mount app
vueApp.component('AppLayout', AppLayout)
vueApp.mount('#app')
