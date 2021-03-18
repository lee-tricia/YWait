//Step 2 -- Define Routes
import App from './App.vue'
import Malls from './components/Malls.vue'
import MyProfile from './components/MyProfile.vue'
import WaitingQueue from './components/WaitingQueue.vue'

export default[
    { path: '/', component: App},
    { path: '/malls', component: Malls},
    { path: '/myprofile', component: MyProfile},
    { path: '/waitingqueue', component: WaitingQueue}
]



