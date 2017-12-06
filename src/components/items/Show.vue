<template>
    <div class = "show" id = "show">
        <div class = "medium-8 columns">
            <h2>{{itemsStore.current_item.title}}</h2>
            <div class = "row">
                <div class = "medium-4 columns">
                    <img :src = "'http://app.special/uploads/items/' + itemsStore.current_item.image"
                         style = "height: 225px; width: 225px;">
                </div>
                <div class = "medium-8 columns">
                    <p>{{itemsStore.current_item.description}}</p>
                    <p>Price {{itemsStore.current_item.price}}</p>
                    <router-link :to="{name:'all-items'}" class="button success medium">
                         Back
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        data() {
            return {}
        },
        computed: mapState({
            itemsStore: state => state.itemsStore
        })
    }

</script>

<style type = "scss">

</style>