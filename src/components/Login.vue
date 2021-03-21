<template>
  <form id="login" @submit.prevent="login()">
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
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Password"
        required
      />
    </p>
    <button type="submit">Login</button>
    <p>
      Don't have an account? Sign up
      <router-link to="/signup" exact>here</router-link>!
    </p>
  </form>
</template>

<script>
import { auth } from "../firebase.js";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: "Home" });
        })
        .catch((error) => {
          if (error.code == "auth/invalid-email") {
            alert(
              "The email you entered is invalid. Please check your email and try again."
            );
          } else if (error.code == "auth/user-not-found") {
            alert(
              "The email you entered does not appear to belong to an account. Please check your email and try again."
            );
          } else if (error.code == "auth/wrong-password") {
            alert(
              "Incorrect password. Please check your password and try again."
            );
          }
        });
    },
  },
};
</script>

<style></style>
