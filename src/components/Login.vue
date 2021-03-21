<template>
    <div id="wrapper">
    <h1>YWait</h1>
    <p>a Virtual Online Queueing System</p>
        <form id="login" @submit.prevent="login()">
            
            <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                placeholder="Email Address"
                required
            /><br>
            
            
            <input
                type="password"
                name="password"
                id="password"
                v-model="password"
                placeholder="Password"
                required
            /><br>
            
            <button type="submit">Login</button><br>
        
            Don't have an account? Sign up
            <router-link to="/signup" exact>here</router-link>!
        
        </form>
    </div>
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
}
</script>

<style scoped>
 button {
  -webkit-appearance:  none; 
  width:  auto;
  min-width:  100px;
  border-radius:  24px; 
  text-align:  center; 
  padding:  15px 40px;
  margin-top:  5px; 
  background-color:  black; 
  color:  #fff; 
  font-size:  14px;
  margin-left:  auto; 
  font-weight:  500; 
  box-shadow:  0px 2px 6px -1px rgba(0,0,0,.13); 
  border:  none;
  transition:  all .3s ease; 
  outline: 0; 
  &:hover {
    transform:  translateY(-3px);
    box-shadow:  0 2px 6px -1px rgba($primary, .65);
    &:active {
      transform:  scale(.99);
    }
  }
}

input {
  font-size:  16px; 
  padding:  20px 0px; 
  height:  56px; 
  border:  none; 
  border-bottom:  solid 1px rgba(0,0,0,.1); 
  background:  #fff; 
  width:  280px; 
  box-sizing:  border-box; 
  transition:  all .3s linear; 
  color:  #000; 
  font-weight:  400;
  -webkit-appearance:  none; 
  &:focus {
    border-bottom:  solid 1px $primary; 
    outline: 0; 
    box-shadow:  0 2px 6px -8px rgba($primary, .45);
  }
}


#wrapper {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    background-image: url("https://images.summitmedia-digital.com/spotph/images/2020/08/05/pretty-plates-shops-ruth-carmen-home-1-1596627030.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    }




</style>
