import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
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
            path: '/about',
            name: 'about',
            component: AppAbout
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