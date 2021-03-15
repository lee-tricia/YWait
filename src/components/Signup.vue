<template>
  <div id="Signup">
    <p>
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        placeholder="Name"
      />
    </p>
    <p>
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Email Address"
      />
    </p>
    <p>
      <input
        type="tel"
        name="contact"
        id="contact"
        v-model="contact"
        placeholder="Contact Number"
      />
    </p>
    <p>
      <input
        type="date"
        name="dob"
        id="dob"
        v-model="dob"
        placeholder="Date of Birth"
      />
      {{ this.dob }}
    </p>
    <p>
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Password"
      />
      {{ this.password }}
    </p>
    <p>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        v-model="confirmPassword"
        placeholder="Confirm Password"
      />
      {{ this.confirmPassword }}
    </p>
    <button @click="signup()">Sign Up Now</button>
  </div>
</template>

<script>
//import { database } from "../firebase.js";
import { auth } from "../firebase.js";
export default {
  data() {
    return {
      name: "",
      email: "",
      contact: null,
      dob: null,
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    signup() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          if (this.password != this.confirmPassword) {
            throw new Error();
          } else {
            alert("Successfully registered! Please login.");
          }
        })
        .catch((error) => {
          if (error.code == "auth/invalid-email") {
            alert(
              "The email you entered is invalid. Please check your email and try again."
            );
          } else if (error.code == "auth/email-already-in-use") {
            alert(
              "Email already exists. Please enter a different email and try again."
            );
          } else if (this.password.length < 6) {
            alert(
              "Password must contain at least 6 characters. Please check your password and try again."
            );
          } else if (this.password != this.confirmPassword) {
            alert(
              "Passwords do not match. Please check your password and try again."
            );
          }
        });
    },
  },
};
</script>

<style></style>
