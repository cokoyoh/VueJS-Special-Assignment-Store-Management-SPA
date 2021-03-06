import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate'
import VueResource from 'vue-resource'
import store  from './storage/store';

Vue.use(VeeValidate);
Vue.use(VueResource);

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store,
});
