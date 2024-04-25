import { createRouter, createWebHistory } from 'vue-router'
import newsView from '../views/newsView.vue'
import homeView from '../views/homeView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: homeView,
            props: true
        },
        {
            path: '/news',
            component: newsView
        }
    ]
});
export default router
