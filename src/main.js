import firebase from 'firebase';
import Vue from 'vue'
import App from './App.vue'
import Signup from "./components/Signup.vue"
import NavBar from "./components/NavBar.vue"
import Calendar from "./components/Calendar.vue"
import Login from "./components/Login.vue"
import LogOutButton from "./components/LogOutButton.vue"

import VueRouter from 'vue-router'
import Routes from './routes.js'
import { MapInstaller } from '@progress/kendo-map-vue-wrapper'

Vue.config.productionTip = false

Vue.component('NavBar', NavBar)
Vue.component('Signup', Signup)
Vue.component('Calendar', Calendar)
Vue.component('Login', Login)
Vue.component('LogOutButton', LogOutButton)
Vue.use(VueRouter)
Vue.use(MapInstaller)

const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
})

myRouter.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (firebase.auth().currentUser) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/',
      });
    }
  } else {
    next();
  }
});

new Vue({
  render: h => h(App),
  router: myRouter
}).$mount('#app')