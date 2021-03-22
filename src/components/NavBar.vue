<template>
  <div class="sidenav">
    <nav>
      <h1>YWait</h1>
      <ul>
        <li>
          <homeIcon class="icon" /><router-link to="/home" exact
            >Home</router-link
          >
        </li>
        <br />
        <li>
          <clockIcon class="icon" />
          <router-link to="/waitingqueue" exact>Waiting Queues</router-link>
        </li>
        <br />
        <li>
          <mapIcon class="icon" /><router-link to="/malls" exact
            >Malls</router-link
          >
        </li>
        <br />
        <li>
          <calendarIcon class="icon" /><router-link to="/joinq" exact
            >Join a Queue</router-link
          >
        </li>
        <br />
        <li>
          <profileIcon class="icon" /><router-link to="/myprofile" exact
            >My Profile</router-link
          >
        </li>
        <br /><br /><br />
        <li><LogOutButton /></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import homeIcon from "vue-material-design-icons/HomeOutline";
import clockIcon from "vue-material-design-icons/ClockOutline";
import mapIcon from "vue-material-design-icons/MapMarkerOutline";
import calendarIcon from "vue-material-design-icons/CalendarMonthOutline";
import profileIcon from "vue-material-design-icons/AccountCircleOutline";
export default {
  data() {
    return {};
  },
  components: {
    homeIcon,
    clockIcon,
    mapIcon,
    calendarIcon,
    profileIcon,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 35px;
  padding-bottom: 30px;
}
li {
  text-align: center;
  margin-right: 40px;
  color: black;
}
ul {
  list-style-type: none;
}
nav {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 40px;
  background-color: #eee;
  overflow-x: hidden;
  font-size: 20px;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: grey;
}
a:active {
  color: grey;
}
.material-design-icon.icon {
  margin-right: 5px;
}
</style>
