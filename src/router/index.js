import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RegionsView from '../views/RegionsView.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/region/:region_name', name: 'Regions', component: RegionsView },
    //   { path: '/about', component: AboutView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

// Counter animation
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

export default router;