<template>
  <form id="signup" @submit.prevent="signup()">
    <p>
      <input
        type="text"
        name="name"
        id="name"
        v-model="name"
        placeholder="Name"
        required
      />
    </p>
    <p>
      <input
        type="email"
        name="email"
        id="email"
        v-model="email"
        placeholder="Email Address"
        required
      />
    </p>
    <p>
      <input
        type="tel"
        name="contact"
        id="contact"
        v-model="contact"
        placeholder="Contact Number"
        required
      />
    </p>
    <p>
      <input
        type="date"
        name="dob"
        id="dob"
        v-model="dob"
        placeholder="Date of Birth"
        required
      />
    </p>
    <p>
      <input
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Password"
        required
      />
    </p>
    <p>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        v-model="confirmPassword"
        placeholder="Confirm Password"
        required
      />
    </p>
    <button type="submit">Sign Up</button>
    <p>Have an account? Login <router-link to="/" exact>here</router-link>!</p>
  </form>
</template>

<script>
import { database } from "../firebase.js";
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
      if (this.password.length < 6) {
        alert(
          "Password must contain at least 6 characters. Please check your password and try again."
        );
      } else if (this.password != this.confirmPassword) {
        alert(
          "Passwords do not match. Please check your password and try again."
        );
      } else {
        auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            if (this.password != this.confirmPassword) {
              throw new Error();
            } else {
              this.$router.replace({ name: 'Login' });
              this.registerUser();
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
            }
          });
      }
    },
    registerUser() {
      database
        .collection("users")
        .doc(`${auth.currentUser.uid}`)
        .set({
          customerID: auth.currentUser.uid,
          name: this.name,
          email: auth.currentUser.email,
          contact: this.contact,
          dob: this.dob,
        });
    },
  },
};
</script>

<style></style>
