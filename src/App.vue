<template>
    <div id="app">
        <div id="nav">
            <!-- <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link> -->
            <HeaderElement></HeaderElement>

        </div>
        
        <router-view @authenticated="setAuthenticated"/>
    </div>
</template>

<script>
import HeaderElement from './components/header';
import BootstrapVue from 'bootstrap-vue'

    export default {
        name: 'App',
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "test",
                    password: "test"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        },
        components:{
          HeaderElement
        }
    }
</script>

<style>
    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 100%;
        height: 100%;
        display: inline-flex;
        flex-direction: column;
    }
</style>