<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li><br>
        <li><router-link to="/waitingqueue" exact>Waiting Queues</router-link></li><br>
        <li><router-link to="/malls" exact>Malls</router-link></li><br>
        <li><router-link to="/joinq" exact>Join a Queue</router-link></li><br>
        <li><router-link to="/myprofile" exact>My Profile</router-link></li><br>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
}

nav {
  float: left;
  width: 15%;
  background: #e9e9e2;
  height: 800px;
  font-size: 20px;
}
</style>