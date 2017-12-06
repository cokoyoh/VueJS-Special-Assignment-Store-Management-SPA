import axios from 'axios';
import {get_all_items_url} from "../global/config";

const state = {
    items_list:{},
    current_item: null,
};

const mutations = {
    SET_ITEMS_LIST(state, items_list){
        state.items_list = items_list
    },
    SET_CURRENT_ITEM(state,item){
        state.current_item = item
    },
};

const actions = {
    setItemsList: ({commit}, items_list) => {
         axios.get(get_all_items_url).then(response => {
             console.log(response);
             commit('SET_ITEMS_LIST', response.data.data);
         })
    },
    setCurrentItem: ({commit}, item) => {
        commit('SET_CURRENT_ITEM', item)
    },
};

export default {
    state, mutations, actions
};