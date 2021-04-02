<template>
  <div>
    <h1>Restaurant Queue System</h1>
    <div id="currToCompleted">
      <table>
        <tr>
          <th>No. Pax</th>
          <th>Current Queue Number</th>
          <th>Customer ID</th>
          <th>Baby Chair</th>
          <th>Wheel Chair</th>
          <th>Additional Message</th>
          <th>Button</th>
        </tr>

        <tr v-for="queue in currentQueueNumber" v-bind:key="queue.id">
          <td> {{queue['paxGroup']}} </td>
          <td> {{queue['queueNumber']}} </td>
          <td> {{queue['customerID']}} </td>
          <td> {{queue['babyChair']}} </td>
          <td> {{queue['wheelChair']}} </td>
          <td> {{queue['additionalMessage']}} </td>
          <td> 
            <button
            v-bind:id="queue['bookingID']"
            v-on:click="changeStatus($event, 'completed')"
          >
            Update
          </button>            
          </td>          
        </tr>
      </table>
    </div>

    <div id="waitingToCurr">
      <table>
        <tr>
          <th>No. Pax</th>
          <th>Queue Number</th>
          <th>Customer ID</th>
          <th>Baby Chair</th>
          <th>Wheel Chair</th>
          <th>Additional Message</th>
          <th>Arrival Time</th>
          <th>Button</th>
        </tr>

        <tr v-for="queue in waitingQueue" v-bind:key="queue.id">
          <td> {{queue['paxGroup']}} </td>
          <td> {{queue['queueNumber']}} </td>
          <td> {{queue['customerID']}} </td>
          <td> {{queue['babyChair']}} </td>
          <td> {{queue['wheelChair']}} </td>
          <td> {{queue['additionalMessage']}} </td>
          <td> {{queue['arrivalTime']}} </td>
          <td> 
            <button
            v-bind:id="queue['bookingID']"
            v-on:click="changeStatus($event, 'current')"
          >
            Push
          </button>          
          </td>          
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import { database } from "../firebase.js";
import { auth } from "../firebase.js";

export default {
  data() {
    return {
      currentQueueNumber: this.queueData("current"),
      waitingQueue: this.queueData("waiting"),
    };
  },

  methods: {
    getDataFromQuery: function (query) {
      var data = [];
      query.get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          data.push(doc.data());
        });
      });
      return data;
    },
    queueData: function (status) {
      var query = database
        .collection("bookings")
        .where("restaurantId", "==", `${auth.currentUser.uid}`)
        .where("queueStatus", "==", status);
      return this.getDataFromQuery(query);
    },
    changeStatus: function (event, newStatus) {
      let doc_id = event.target.id;
      database
        .collection("bookings")
        .doc(doc_id)
        .update({
          queueStatus: newStatus,
        })
        .then(() => location.reload());
    },
  },
};
</script>

<style>
</style>
