<template>
    <div>
        <NavBar></NavBar>
        <h1>Join Queue </h1>

        <form @submit.prevent="joinQueue()"> 
            <p>
                <select v-model="mallSelected" required>
                    <option v-for="mall in mallsList" v-bind:key="mall.id">
                        {{ mall }}
                    </option>
                </select>
            </p>

            <p>
                <select v-model="restaurantSelected" required>
                    <option v-for="restaurant in restaurantList" v-bind:key="restaurant.id">
                        {{ restaurant }}
                    </option>
                </select>
            </p>

            <p><label for="numAdult"> No. of Pax (Adult) </label></p>
            <p><input type="number" v-model="numAdult" id="numAdult" required></p>
            
            <p><label for="numChildren"> No. of Pax (Children) </label></p>
            <p><input type="number" v-model="numChildren" id="numChildren"></p>
            
            <p><input type="checkbox" v-model="babyChair" id="babychair" value=1>
            <label for="babychair"> Baby Chair</label></p>

            <p><input type="checkbox" v-model="wheelChair" id="wheelchair" value=1>
            <label for="wheelchair"> Wheel Chair</label></p>

            <p><label for="additionalMessage"> Addition Message </label></p>
            <p><textarea v-model="additionalMessage" id="additionalMessage" rows="4" cols="50"></textarea></p>
            
            <button type="submit"> Join Queue </button>

        </form>
    </div>
</template>

<script>
import { database } from "../firebase.js"
import { auth } from "../firebase.js"

export default {
    data() {
        return {
            // all details from database
            mallsList: ['All'],
            restaurantList: [],

            //FORM
            customerID: `${auth.currentUser.uid}`,
            mallSelected: "",
            restaurantSelected: "",
            numAdult: 0,
            numChildren: 0,
            babyChair: 0,
            wheelChair: 0,
            additionalMessage: ""
        }
    },
    methods: {
        // to do: make the mallsList and restaurantList dynamic using watch & queueNumber assignment not done
        joinQueue: function() {
            database.collection('Bookings').add({
                customerID: null,
                mallName: this.mallSelected,
                restaurantName: this.restaurantSelected,
                restaurantMall: this.restaurantSelected + " @ " + this.mallSelected,
                numAdult: this.numAdult,
                numChildren: this.numChildren,
                paxGroup: this.getPaxGroup(this.numAdult + this.numChildren),
                queueNumber: this.getQueueNumber(this.numAdult + this.numChildren),
                babyChair: this.babyChair,
                wheelChair: this.wheelChair,
                additionalMessage: this.additionalMessage,
                queueStatus: "waiting",
                bookedTiming: this.getCurrentTime()
            })
        },
        getCurrentTime: function() {
            const today = new Date()
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time
            return(dateTime)
        },
        getPaxGroup: function(totalPax) {
            var paxGroup
            if (totalPax < 3) paxGroup = "1 to 2 people"
            else if (totalPax < 5) paxGroup = "3 to 4 people"
            else paxGroup = "5 or more people"
            return paxGroup
        },
        getQueueNumber: function(totalPax) {
            var qCategory
            if (totalPax < 3) qCategory = "A"
            else if (totalPax < 5) qCategory = "B"
            else qCategory = "C"
            return qCategory
        },
        // getDetails is for when created stage
        getDetails: function() {
            // get mallList
            database.collection('malls').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    var curr = doc.data()
                    this.mallsList.push(curr.mallName)
                })
            })
            // get restaurantList
            database.collection('restaurant').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    var curr = doc.data()
                    this.restaurantList.push(curr.restaurantName)
                })
            })
        }
    },
    created() {
        this.getDetails();
    }
}
</script>