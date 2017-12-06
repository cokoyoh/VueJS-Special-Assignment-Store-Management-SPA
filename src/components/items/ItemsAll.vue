<template>
    <div class = "index" id = "index">
        <div class = "row">
            <div class = "medium-9 large-9 columns"><h2>Available Items</h2></div>
            <div class = "medium-3 large-3 columns"><input type = "search"
                                                           placeholder = "Search items here.."
                                                           v-model = "search"></div>
        </div>
        <div class = "items" v-for = "item in itemsStore.items_list">
            <div class = "medium-3 columns">
                <div class = "item">
                    <!--<strong> {{item.name}}</strong> <br>-->
                    <img :src = "'http://app.special/uploads/items/' + item.image"
                         style = "height: 255px; width: 255px; position: relative">
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
            }
        },
        methods: {
            ...mapActions(['setItemsList']),
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