import { createRouter, createWebHistory } from 'vue-router'
import newsView from '../views/newsView.vue'
import homeView from '../views/homeView.vue'
import contactView from '../views/contactView.vue'

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
        },
        {
            path: '/contact',
            component: contactView
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     // Fade out animation for the current page
//     document.body.classList.add('fade-out');

//     // Wait for the fade out animation to complete
//     setTimeout(() => {
//       // Remove fade-out class to revert the effect
//     document.body.classList.remove('fade-out');
//     // Proceed to the next page
//     next();
//     }, 500); // Adjust the duration as needed
// });
export default router
