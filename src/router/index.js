import {createRouter, createWebHistory} from 'vue-router'

import Home from "../views/Home";
import Dlaczego from "@/views/Dlaczego";

const routes = [
    {
        path: "/interview-crafton",
        component: Home,
        meta: {
            transition: "slow-fade"
        }
    },
    {
        path: "/interview-crafton/home",
        component: Home,
        meta: {
            transition: "slow-fade"
        }
    },
    {
        path: "/interview-crafton/dlaczego",
        component: Dlaczego
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
