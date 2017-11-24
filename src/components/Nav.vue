<template>
    <div class = "navbar" id = "navbar">
        <div class="top-bar">
            <div class="top-bar-left">
                <ul class="dropdown menu" data-dropdown-menu>
                    <li class="menu-text"><router-link :to="{name:'login'}">Store</router-link></li>
                    <li><a href="#"><router-link :to="{name:'contact-us'}">Contact Us</router-link></a></li>
                    <li><a href="#"><router-link :to="{name:'register'}">Register</router-link></a></li>
                </ul>
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                    <li><input type="search" placeholder="Search"></li>
                    <li><button type="button" class="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return{

            }
        }
    }

</script>

<style type = "scss">
    .navbar{
         .top-bar{
             height: 20px !important;
         }
    }
</style>