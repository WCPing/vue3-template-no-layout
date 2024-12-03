import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        component: () => import('@/views/home/Home.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes,
})

export default router
