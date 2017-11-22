<template>
    <div class = "home" id = "home">
        <form  @submit.prevent="onSweetAlert">
            <div class = "grid-container">
                <div class = "grid-x grid-padding-x">
                    <div class = "medium-6 cell">
                        <label>Name
                            <input type = "text" placeholder = "Your name here..." v-model = "user.name" name = "name"
                                   v-validate = "'required'">
                        </label>
                        <span v-show = "errors.has('name')"
                              class = "help is-danger">{{ errors.first('name')}}</span>
                    </div>
                    <div class = "medium-6 cell">
                        <label>Email
                            <input type = "text" placeholder = "xyz@cytonn.com" v-model = "user.email"
                                   v-validate = "'required|email'" name = "email">
                        </label>
                        <span v-show = "errors.has('email')"
                              class = "help is-danger">{{ errors.first('email')}}</span>
                    </div>
                    <button class = "button success" typeof="submit">Submit Form</button>
                </div>
            </div>
        </form>

    </div>
</template>
<script>
    import swal from 'sweetalert2'

    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: ''
                }
            }
        },
        methods: {
            onSweetAlert() {
                this.$validator.validateAll().then(() => {
                    let post_data = this.user;
                    swal('Trial', 'This is a success', 'success');
                    console.log(post_data)
                })
            }
        }
    }

</script>

<style type = "scss">
    .home {
        padding: 30px 30px;
        .is-danger {
            color: red;
            margin-top: 0;
        }
    }
</style>