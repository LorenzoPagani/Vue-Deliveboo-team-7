import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppOwners from './pages/AppOwners.vue';
import AppRestaurant from "./pages/AppRestaurant.vue";
import AppCheckout from "./pages/AppCheckout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/owners',
            name: 'owners',
            component: AppOwners
        },
        {
            path: '/restaurant/:id',
            name: "restaurant",
            component: AppRestaurant
        },
        {
            path: '/checkout',
            name: "checkout",
            component: AppCheckout
        }

    ]
});

export { router };