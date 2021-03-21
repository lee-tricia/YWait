<template>
  <div id="profile">
    <NavBar></NavBar>
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
#profile {
  background-color: rgb(247, 247, 247);
}
#details {
  text-align: center;
  border: 1px solid #222;
  background-color: white;
  width: 900px;
  border-radius: 10px;
  margin-left: 350px;
}
p.name {
  font-size: 30px;
  font-weight: bold;
}
</style>
