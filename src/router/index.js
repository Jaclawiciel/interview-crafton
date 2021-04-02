import {createRouter, createWebHistory} from 'vue-router'

import Home from "../views/Home";
import Dlaczego from "@/views/Dlaczego";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/dlaczego",
        component: Dlaczego
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
