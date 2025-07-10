import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import App from '../App.vue'
import Games from "../components/Games/Games.vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Games },
    { path: `/:id`, component: App, props: true},
]

export function createAppRouter() {
    return createRouter({ history: createWebHistory(), routes })
}

const router = createAppRouter()
export default router