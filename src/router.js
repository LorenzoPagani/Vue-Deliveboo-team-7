import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppOwners from './pages/AppOwners.vue';
import AppContacts from './pages/AppContacts.vue';
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
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
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