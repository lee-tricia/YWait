<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="card">
      <h3>Map</h3>
      <div class="card-body">
        <kendo-map
          :center="[1.3051315545985274, 103.83224131197983]"
          :zoom="13"
          style="width: 100%; height: 500px; margin-left: 35px"
        >
          <kendo-map-layer
            :type="'tile'"
            :url-template="'https://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png'"
            :subdomains="['a', 'b', 'c']"
            :attribution="'&copy; <a href=\'https://osm.org/copyright\'> OpenStreetMap contributors</a>'"
          >
          </kendo-map-layer>
          <kendo-map-marker :location="[1.3042291286530805, 103.8319619254719]">
          </kendo-map-marker>

          <kendo-map-marker
            :location="[1.3347372693919985, 103.74265061197976]"
          >
          </kendo-map-marker>

          <kendo-map-marker :location="[1.2646981711296041, 103.822110540476]">
          </kendo-map-marker>

          <kendo-map-marker
            :location="[1.2991516889234715, 103.85561997301599]"
          >
          </kendo-map-marker>

          <kendo-map-marker
            :location="[1.2952635060359494, 103.85827269134388]"
          >
          </kendo-map-marker>
        </kendo-map>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.card-body {
  width: 95%;
}
</style>
