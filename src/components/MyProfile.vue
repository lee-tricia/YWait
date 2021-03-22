<template>
  <div>
    <NavBar></NavBar>
    <div id="wrapper">
      <h1>Profile Page</h1>
      <div id="details">
        <p class="name">{{ this.name }}</p>
        <p class="details">
          Email Address: {{ this.email }}<br />
          Contact Number: {{ this.contact }} <br />
          Date of Birth: {{ this.dob }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from "../firebase.js";
import { auth } from "../firebase.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: 0,
      dob: "",
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
          this.email = querySnapShot.data().email;
          this.contact = querySnapShot.data().contact;
          this.dob = querySnapShot.data().dob;
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
  margin-left: 300px;
  text-align: center;
  
}
#details {
  text-align: center;
  border: 1px solid #222;
  background-color: white;
  width: 800px;
  border-radius: 10px;
}
p.name {
  font-size: 30px;
  font-weight: bold;
}
</style>
