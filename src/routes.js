//Step 2 -- Define Routes
import HomePage from './components/HomePage.vue'
import WaitingQueue from './components/WaitingQueue.vue'
import Malls from './components/Malls.vue'
import JoinQ from './components/JoinQ.vue'
import MyProfile from './components/MyProfile.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import restaurantView from './components/restaurantView.vue'

export default [
    { path: '/home', name: 'Home', component: HomePage, meta:{authRequired: true}},
    { path: '/malls', name: 'Malls', component: Malls, meta:{authRequired: true} },
    { path: '/myprofile', name: 'Profile', component: MyProfile, meta:{authRequired: true} },
    { path: '/joinq', name: 'JoinQ', component: JoinQ, meta:{authRequired: true} },
    { path: '/waitingqueue', name: 'WaitingQueue', component: WaitingQueue, meta:{authRequired: true} },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/', name: 'Login', component: Login },
    { path: '/restauranthome', name: 'RestaurantHome', component: restaurantView, meta:{authRequired: true} }
]

