import { createWebHistory, createRouter } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import RegionsView from '../views/RegionsView.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/region/:region_name', name: 'Regions', component: RegionsView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // Catch-all route for 404
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;