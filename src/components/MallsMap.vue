<template>
<div class="hello">
  <h2>Map</h2>
  <div class="card">
      <div class="card-body">
        <kendo-map :center="[1.3051315545985274, 103.83224131197983]"          :zoom="13" style="width: 100%; height: 500px;">
        <kendo-map-layer :type="'tile'"
                         :url-template="'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png'"
                         :subdomains="['a', 'b', 'c']"
                         :attribution="'&copy; <a href=\'https://osm.org/copyright\'>OpenStreetMap contributors</a>'">
        </kendo-map-layer>

        <kendo-map-marker v-for="mall in mallsList" :location="mall.coor" v-bind: key="mall.id">        </kendo-map-marker>

        <kendo-map-marker           :location="[1.3347372693919985, 103.74265061197976]">        </kendo-map-marker>

        <kendo-map-marker           :location="[1.2646981711296041, 103.822110540476]">        </kendo-map-marker>

        <kendo-map-marker           :location="[1.2991516889234715, 103.85561997301599]">        </kendo-map-marker>

        <kendo-map-marker           :location="[1.2952635060359494, 103.85827269134388]">        </kendo-map-marker>
      
      </kendo-map>
    </div>
  </div>
</div>
</template>

<script>

import { database } from "../firebase.js";

    export default {
        name: "Map",

        data() {
            return {
                mallsList: []
            }
        },

        methods: {

            fetchItems: function() {
                database.collection('malls').get().then((querySnapShot) => {
                    let mall = {};
                    querySnapShot.forEach(doc => {
                        let coor = doc.data().coordinate;
                        mall.coor = [coor.latitude, coor.longitude];
                        console.log(mall.coor)
                        mall.id = doc.id;
                        this.mallsList.push(mall);
                    })
                })
        }
    },

        created() {
            this.fetchItems()
        }
    };
</script>

<style scoped>
  .card-body {
  width: 500px;
  }

</style>