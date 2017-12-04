<template>
    <div class = "index" id = "index">
        <h2>All Items will be Displayed here</h2>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {mapActions} from 'vuex'
    export default {
        methods:{
            ...mapActions(['setItemsList']),
        },
        computed: mapState({
            itemsStore: state => state.itemsStore
        }),
        created() {
            console.log("I have been created");
            this.$store.dispatch('setItemsList');
        }
    }

</script>

<style type = "scss">
    .index {
        padding: 30px 30px;
    }
</style>