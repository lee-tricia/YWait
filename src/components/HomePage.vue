<template>
  <div>
    <NavBar></NavBar>
    <div id="wrapper">
    <h1>Hi {{ this.name }}!</h1>
    <Calendar></Calendar>
    </div>
  </div>
</template>

<script>
import { database } from "../firebase.js";
import { auth } from "../firebase.js";
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    fetchItems() {
      database
        .collection("users")
        .doc(`${auth.currentUser.uid}`)
        .get()
        .then((querySnapShot) => {
          this.name = querySnapShot.data().name;
        });
    },
  },
  created() {
    this.fetchItems();
  },
};
</script>

<style scoped>
#wrapper {
  text-align: center;
  margin-left: 300px;
}
h1 {
  margin-left: 20px;
  text-align: left;
  margin-top: 30px;
  font-size: 100px;
}
</style>
