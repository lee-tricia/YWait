//Step 2 -- Define Routes
import HomePage from './components/HomePage.vue'
import WaitingQueue from './components/WaitingQueue.vue'
import Malls from './components/Malls.vue'
import JoinQ from './components/JoinQ.vue'
import MyProfile from './components/MyProfile.vue'

export default[
    { path: '/', component: HomePage},
    { path: '/malls', component: Malls},
    { path: '/myprofile', component: MyProfile},
    { path: '/joinq', component: JoinQ},
    { path: '/waitingqueue', component: WaitingQueue}
]



