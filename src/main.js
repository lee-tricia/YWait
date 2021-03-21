import Vue from 'vue'
import App from './App.vue'
import Signup from "./components/Signup.vue"
import NavBar from "./components/NavBar.vue"
import Calendar from "./components/Calendar.vue"
import Login from "./components/Login.vue"

import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.config.productionTip = false
Vue.component('NavBar', NavBar)
Vue.component('Signup', Signup)
Vue.component('Calendar', Calendar)
Vue.component('Login', Login)
Vue.use(VueRouter)

const myRouter =  new VueRouter({
  routes:Routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')