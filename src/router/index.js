import Vue from 'vue';

//import components here
import Contact from '../components/Contact-us.vue';
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import CreateItem from '../components/items/Create.vue';
import AllItems from '../components/items/ItemsAll.vue';

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
            path: '/all-items',
            component: AllItems,
            name: 'all-items',
        },
        {
            path:'/contact-us',
            component: Contact,
            name: 'contact-us'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
        {
            path: '/create-item',
            component: CreateItem,
            name: 'create-item',
            meta: {
                requireAuth: true
            }
        },

    ],
    mode: 'history',
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'));
        if(auth_user && auth_user.access_token){
            next()
        } else next('login')
    }
    if(to.meta.requiresAdmin){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'));
        if(auth_user.role === 'admin'){
            next()
        } else next('/')
    }
    next()
});

export default router