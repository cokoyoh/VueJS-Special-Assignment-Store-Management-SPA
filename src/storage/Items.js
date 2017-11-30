import axios from 'axios';
import {get_all_items_url} from "../global/config";
const state = {
    items_list:{},
};

const mutations = {
    SET_ITEMS_LIST(state, items_list){
        state.projects_list = items_list
    },
};

const actions = {
    setItemsList: ({commit}, items_list) => {
         axios.get(get_all_items_url).then(response => {
             console.log(response);
             commit('SET_ITEMS_LIST', response.body.data);
         })
    },
};

export default {
    state, mutations, actions
};