<template>
    <div class = "register" id = "register">
        <form  @submit.prevent="register">
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
                    <div class = "medium-6 cell">
                        <label>Password
                            <input type = "password" placeholder = "Password" v-model = "user.password"
                                   v-validate = "'required'" name = "password ">
                        </label>
                        <span v-show = "errors.has('password')"
                              class = "help is-danger">{{ errors.first('password')}}</span>
                    </div>
                    <div class = "medium-6 cell">
                        <label> Confirm Password
                            <input type = "password" placeholder = "Confirm Password"
                                   v-validate = "'required'" name = "confirm_password ">
                        </label>
                        <span v-show = "errors.has('password')"
                              class = "help is-danger">{{ errors.first('password')}}</span>
                    </div>
                   <div class="register-button">
                       <button class = "button success" typeof="submit">Register</button>
                   </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            register() {
                this.$validator.validateAll().then(() => {
                     console.log("Register new user")
                })
            }
        }
    }

</script>

<style type = "scss">
    .register {
        padding: 30px 30px;
        .is-danger {
            color: red;
            margin-top: 0;
        }
    }
</style>