import Vue from 'vue'
import App from './App.vue'
import Signup from "./components/Signup.vue"
import NavBar from "./components/NavBar.vue"
// import Malls from "./components/Malls.vue"
// import MyProfile from './components/MyProfile.vue'
// import JoinQ from './components/JoinQ.vue'
// import WaitingQueue from './components/WaitingQueue.vue'

import VueRouter from 'vue-router'
import Routes from './routes.js'

Vue.config.productionTip = false
Vue.component('NavBar', NavBar)
Vue.component('Signup', Signup)
// Vue.component('Malls', Malls)
// Vue.component('JoinQ', JoinQ)
// Vue.component('MyProfile', MyProfile)
// Vue.component('WaitingQueue', WaitingQueue)
Vue.use(VueRouter)

const myRouter =  new VueRouter({
  routes:Routes,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')