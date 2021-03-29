<template>
  <div>

    {{ currentQueueNumber }}
    <ul>
      <li v-for="queue in currentQueueNumber" v-bind:key="queue.id">
        {{queue}} <br>
        <button v-bind:id="queue['bookingID']" v-on:click="changeStatus($event, 'completed')">Update</button>
      </li>
    </ul>
    
    {{ waitingQueue }}
    <ul>
      <li v-for="queue in waitingQueue" v-bind:key="queue.id">
        {{queue}} <br>
        <button v-bind:id="queue['bookingID']" v-on:click="changeStatus($event, 'current')">Push</button>
      </li>
    </ul>

  </div>
</template>

<script>
import { database } from "../firebase.js"
import { auth } from "../firebase.js"

export default {
  data() {
    return {
      restaurantName: "",
      currentQueueNumber: this.queueData('current'),
      waitingQueue: this.queueData('waiting')
    }
  },

  methods: {
    getDataFromQuery: function(query) {
      var data = []
      query.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          data.push(doc.data())
        })
      })
      return data
    },
    queueData: function(status) {
      var query = database.collection('bookings').where('restaurantName','==',this.restaurantName).where('queueStatus','==',status)
      return this.getDataFromQuery(query)
    },
    changeStatus: function(event, newStatus) {
      let doc_id = event.target.id
      database.collection('bookings').doc(doc_id).update({
        queueStatus: newStatus
      }).then(() => location.reload())
    },
    getRestaurantName: function() {
      database.collection('restaurants').doc(`${auth.currentUser.uid}`).get().then(doc => {
        this.restaurantName = doc.data().restaurantName
      })
    }
  },
  created() {
    this.getRestaurantName()
  }
}
</script>

<style>

</style>
