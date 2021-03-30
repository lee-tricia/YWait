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
    { path: '/home', name: 'Home', component: HomePage },
    { path: '/malls', name: 'Malls', component: Malls },
    { path: '/myprofile', name: 'Profile', component: MyProfile },
    { path: '/joinq', name: 'JoinQ', component: JoinQ },
    { path: '/waitingqueue', name: 'WaitingQueue', component: WaitingQueue },
    { path: '/signup', name: 'Signup', component: Signup },
    { path: '/', name: 'Login', component: Login },
    { path: '/restauranthome', name: 'RestaurantHome', component: restaurantView }
]



