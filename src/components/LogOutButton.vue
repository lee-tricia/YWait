<template>
  <button v-on:click.prevent="logout()">Log Out</button>
</template>

<script>
import { auth } from "../firebase.js";

export default {
  methods: {
    logout() {
      auth.signOut().then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style scoped>
button {
  -webkit-appearance: none;
  width: auto;
  min-width: 100px;
  border-radius: 24px;
  text-align: center;
  padding: 15px 40px;
  margin-top: 5px;
  background-color: black;
  color: #fff;
  font-size: 14px;
  margin-left: auto;
  font-weight: 500;
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.13);
  border: none;
  transition: all 0.3s ease;
  outline: 0;
  cursor: pointer;
}

button:hover {
  box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.65);
}

button:active {
  opacity: 0.6;
  transform: translateY(3px);
}
</style>
