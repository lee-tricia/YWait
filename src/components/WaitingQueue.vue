<template>
  <div>
    <NavBar></NavBar>
    <h1>Waiting Queue Page</h1>

    <select v-model="filterMall">
      <option v-for="mall in mallsList" v-bind:key="mall.id">
        {{ mall }}
      </option>
    </select>
    
    <p><input type="text" v-model="searchRestaurant" placeholder="Search Restaurant Name"></p>
    <p><input type="text" v-model="sortBy" placeholder="Sort By"></p>

    <br>
    {{getGroupedData()}}

    <ul>
      <li v-for="(value, key) in getGroupedData()" v-bind:key="key">
        {{key}} <br>
        <p> less than 2: {{value['less than 2']}} </p> 
        <p> more than 2: {{value['more than 2']}} </p> 
        <p> 2 to 5: {{value['2 to 5']}} </p>
      </li>
    </ul>

  </div>
</template>

<script>
import { database } from "../firebase.js"

export default {
  data() {
    return {
      // all details from database
      mallsList: ['All'],
      // filter starts here
      filterMall: null,
      searchRestaurant: null,
      sortBy: null,
      // filtered data using getFilteredData method
      displayedData: []
    }
  },
  watch: {
    filterMall: function() {
      var query = this.filterQuery()
      this.displayedData = this.getDataFromQuery(query)
    },
    searchRestaurant: function() {
      var query = this.filterQuery()
      this.displayedData = this.getDataFromQuery(query)
    },
    sortBy: function() {
      var query = this.filterQuery()
      this.displayedData = this.getDataFromQuery(query)
    }
  },
  methods: {
    // for displayedData
    filterQuery: function() {
      var query = database.collection('Bookings').where('queueStatus','==','waiting')
      if (this.filterMall != 'All') {
        query = query.where('mallName','==',this.filterMall)
      }
      if (this.searchRestaurant) {
        query = query.where('restaurantName','==',this.searchRestaurant)
      }
      if (this.sortBy) {
        query = query.orderBy(this.sortBy)
      }
      return query
    },
    getDataFromQuery: function(query) {
      var data = []
      query.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          data.push(doc.data())
        })
      })
      return data
    },
    // display on WaitingQueue page: for displayedData
    getGroupedData: function() {
      const groupAll = list => list.reduce((data, doc) => {
        const numWait = data[doc.restaurantMall] || 0
          if (numWait == 0) {
            // when restaurantMall key does not exist
            return Object.assign({}, data, { [doc.restaurantMall]: {[doc.paxGroup]: numWait + parseInt(1)} })
          } else {
            // when restaurantMall key exists
            const numWait2 = data[doc.restaurantMall][doc.paxGroup] || 0
            var obj = Object.assign({}, data[doc.restaurantMall], {[doc.paxGroup]: numWait2 + parseInt(1)})
            return Object.assign({}, data, { [doc.restaurantMall]: obj  })
          }
        }, {})
      return groupAll(this.displayedData)
    },

    // task to do: estimate waiting time, conditional formatting, sort

    // getDetails is for when created stage
    getDetails: function() {
      database.collection('malls').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          var curr = doc.data()
          this.mallsList.push(curr.mallName)
        })
      })
      this.filterMall = this.mallsList[0]
    }
  },
  created() {
    this.getDetails();
  }
}
</script>

<style>

</style>
