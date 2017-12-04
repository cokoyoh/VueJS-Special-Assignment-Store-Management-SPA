import Vue from 'vue'
import Vuex from 'vuex'

//import stores here
import itemsStore from './Items';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
         itemsStore,
    },
    strict: debug
})