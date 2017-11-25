<template>
    <div class = "login" id = "login">
        <form  @submit.prevent="onLogin">
            <div class = "grid-container">
                <div class = "grid-x grid-padding-x">
                    <div class = "medium-6 cell">
                        <label>Email
                            <input type = "text" placeholder = "xyz@cytonn.com" v-model = "login.email"
                                   v-validate = "'required|email'" name = "email">
                        </label>
                        <span v-show = "errors.has('email')"
                              class = "help is-danger">{{ errors.first('email')}}</span>
                    </div>
                    <div class = "medium-6 cell">
                        <label>Password
                            <input type = "password" placeholder = "xyz@cytonn.com" v-model = "login.password"
                                   v-validate = "'required'" name = "password ">
                        </label>
                        <span v-show = "errors.has('password')"
                              class = "help is-danger">{{ errors.first('password')}}</span>
                    </div>
                    <div class="login-button">
                        <button class = "button success" typeof="submit">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                login: {
                    email: 'cokoyoh@cytonn.com',
                    password: 'secret',
                }
            }
        },
        methods: {
            onLogin(){
                this.$validator.validateAll().then(() => {
                    console.log("You are logging in");
                });
            }
        }
    }

</script>

<style type = "scss">
.login{
    padding: 60px 60px;
    .help .is-danger{
        color: red;
        font-size: 14px;
    }
}
</style>