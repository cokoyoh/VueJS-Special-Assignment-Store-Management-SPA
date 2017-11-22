import Vue from 'vue';

//import components here
import Home from '../components/Home.vue';
import Contact from '../components/Contact-us.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/contact-us',
            component: Contact,
            name: 'contact-us'
        },
    ],
    mode: 'history',
});
export default router