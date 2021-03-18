<template>
  <div>
    <nav>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/waitingqueue" exact>Waiting Queues</router-link></li>
        <li><router-link to="/malls" exact>Malls</router-link></li>
        <li><router-link to="/joinq" exact>Join a Queue</router-link></li>
        <li><router-link to="/myprofile" exact>My Profile</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
ul{
    list-style-type: none;
}


</style>