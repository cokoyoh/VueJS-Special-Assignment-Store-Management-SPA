<template>
    <div class = "index" id = "index">
        <div class = "row">
            <div class = "medium-9 large-9 columns"><h2>Available Items</h2></div>
            <div class = "medium-3 large-3 columns"><input type = "search"
                                                           placeholder = "Search items here.."
                                                           v-model = "search"></div>
        </div>
        <div class = "items" v-for = "item in itemsStore.items_list" @click="selectedChanged(item)">
            <div class = "medium-3 columns">
                <div class = "item" v-model="selected" >
                    <!--<strong> {{item.name}}</strong> <br>-->
                    <router-link :to="'/item-details/' + item.id + '/show'">
                        <img :src = "'http://app.special/uploads/items/' + item.image"
                             style = "height: 255px; width: 255px; position: relative">
                    </router-link>
                    <p style = "text-align: center"><strong>KSh {{item.price}}</strong></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {mapActions} from 'vuex'
    import searchMixin from  '../../mixins/search'

    export default {
        data() {
            return {
//                items: [this.itemsStore.items_list] ,
                search: '',
                selected:'',
            }
        },
        methods: {
            ...mapActions(['setItemsList']),
            selectedChanged(item){
                this.selected = item;
                console.log('Selected Item',this.selected.id);
                this.$store.dispatch('setCurrentItem',item)
            },
        },
        computed: mapState({
            itemsStore: state => state.itemsStore
        }),
        created() {
            console.log("I have been created");
            this.$store.dispatch('setItemsList');
        },
        mixins:[searchMixin],
    }

</script>

<style type = "scss">
    .index {
        padding: 30px 30px;

        img {
            height: 225px;
            width: 225px;
        }
    }
</style>