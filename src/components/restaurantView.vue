<template>
  <div>
    <h1>Restaurant Queue System</h1>
    
    <div id="currToCompleted">
      <h2> - Current Queue Number - </h2>
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
            v-on:click="changeStatus(queue['queueNumber'], 'completed')"
          >
            Have Arrived
          </button>            
          </td>          
        </tr>
      </table>
    </div>

    
    <div id="waitingToCurr">
      <h2> - Waiting Queue Numbers - </h2>
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
            v-on:click="changeStatus(queue['queueNumber'], 'current')"
          >
            Push to Current
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
    changeStatus: function (queueNum, newStatus) {
      database
        .collection("bookings")
        .where("restaurantId", "==", `${auth.currentUser.uid}`)
        .where("queueNumber","==",queueNum)
        .limit(1)
        .get().then((query) => {
          const queueData = query.docs[0];
          queueData.ref.update({queueStatus: newStatus});
        })
    },
  },
};
</script>

<style>
#wrapper {
  margin-left: 300px;
  font-family: sans-serif;
}

h2 {
  margin-top: 4%;
  text-align: center;
}

table, td, th {
  border-collapse: collapse;
}

table {
  box-shadow: 11px 11px 10px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
}

#currToCompleted > table {
  width: 70%;
  margin-left: 15%;
  margin-bottom: 5%;
}

#waitingToCurr > table {
  width: 80%;
  margin-left: 10%;
}

th {
  padding: 7px;
  background: url("../../images/waitingQ-dashboard.jpeg");
}

th:first-of-type {
  border-radius: 10px 0 0 0;
}

th:last-of-type {
  border-radius: 0 10px 0 0;
}

button {
  color: black; 
  background-color: white;
  border: 2px solid #e7e7e7;
  transition-duration: 0.4s;
  text-align: center;
}

button:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}

</style>
