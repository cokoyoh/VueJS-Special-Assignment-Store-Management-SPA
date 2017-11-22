<template>
    <div class = "home" id = "home">
        <div class = "button success" @click="onSweetAlert">Trial Foundation Home</div>
    </div>
</template>
<script>
    import swal from 'sweetalert2'
    export default {
        data() {
            return{

            }
        },
        methods: {
            onSweetAlert(){
                swal('Trial','This is a success','success');
            }
        }
    }

</script>

<style type = "scss">

</style>