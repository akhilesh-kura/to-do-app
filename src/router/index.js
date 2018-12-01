import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/Login.vue"
import Home from "../components/home.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/home",
            name: "home",
            component: Home
        }
    ]
})