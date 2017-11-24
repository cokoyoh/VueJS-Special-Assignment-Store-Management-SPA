import Vue from 'vue';

//import components here
import Home from '../components/Home.vue';
import Contact from '../components/Contact-us.vue';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Login,
            name: 'login'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
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