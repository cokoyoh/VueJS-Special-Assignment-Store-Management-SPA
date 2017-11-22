<template>
    <div class = "app" id = "app">
        <nav-bar></nav-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import NavBar from './components/Nav.vue'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            'nav-bar': NavBar,
        }
    }
</script>

<style lang = "scss">

</style>
