<template>
    <div class = "login" id = "login">
        <form @submit.prevent = "onLogin">
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
                    <div class = "login-button">
                        <button class = "button success" typeof = "submit">Login</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import axios from 'axios'
    import {get_header, login_url, user_url} from "../../global/config";
    import {client_id, client_secret} from "../../global/env";
    export default {
        data() {
            return {
                login: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            onLogin: function () {
                this.$validator.validateAll().then(() => {
                    let post_data = {
                        client_id: client_id,
                        client_secret: client_secret,
                        grant_type: 'password',
                        username: this.login.email,
                        password: this.login.password,
                    };
                    const auth_user = {};

                    axios.post(login_url, post_data)
                        .then(response => {
                            if (response.status === 200) {
                                console.log('Oauth Token', response);

                                auth_user.access_token = response.data.access_token;
                                auth_user.resfresh_token = response.data.resfresh_token;
                                window.localStorage.setItem('auth_user', JSON.stringify(auth_user));

                                //get a user token
                                axios.get(user_url, {headers: get_header()})
                                    .then(response => {
                                        if (response.status === 200) {
                                            console.log("User Object", response)

                                            //set auth user details
                                            auth_user.email = response.data.email;
                                            auth_user.name = response.data.name;
                                            window.localStorage.setItem('auth_user', JSON.stringify(auth_user));
                                        }
                                    })
                            }
                        })
                });
            }
        }
    }

</script>

<style type = "scss">
    .login {
        padding: 60px 60px;
        .help .is-danger {
            color: red;
            font-size: 14px;
        }
    }
</style>