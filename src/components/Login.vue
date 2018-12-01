<template>
<div id="login-component">
    <div id="login-card">
        <h1>Login</h1>
        <input id="username" type="text" name="username" v-model="input.username" placeholder="Username" />
        <input id="password" type="password" name="password" v-model="input.password" placeholder="Password" />
        <button id="login-button" type="button" v-on:click="login()">Login</button>
    </div>
</div>    
</template>

<script>
    
    export default {
        name: 'login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "home" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>
<style>
    #login-card{
        
        align-content: center;
        align-items: center;
        display: inline-flex;
        flex-direction: column;
        justify-content: space-around;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #login-component{
        margin: auto;
        margin-bottom: 35%;
    }
    #username{
        border-bottom-style: solid;
        border-color: black;
        margin:5%;
    }
    #password{
        border-block-end-style: solid;
        border-color: black;
        margin:5%;
    }
    #login-button{
        border-style: solid;
        border-color: black;
        margin:5%;
    }
</style>

