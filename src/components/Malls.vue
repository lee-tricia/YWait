<template>
    <div id="content">
        <NavBar></NavBar>
        <h1>Malls</h1>
        <div id="wrapper">

            <ul id="malls">
                <li class="mall-items" v-for = "mall in mallsList" v-bind:key = "mall.id">
                    <h3>{{ mall.mallName }}</h3>
                    <h5>{{ mall.address }}</h5>
                    <h6>Singapore {{ mall.postalCode }}</h6>
                </li>
            </ul>

            <Map/>

        </div>
        
    </div>
</template>

<script>
import { database } from "../firebase.js";
import Map from "./MallsMap.vue";

export default {

    name: "Malls",

    data() {
        return {
            mallsList: []
        }
    },

    components: {
        Map
    },

    methods: {

        fetchItems: function() {
            database.collection('malls').get().then((querySnapShot) => {
                let mall = {};
                querySnapShot.forEach(doc => {
                    mall = doc.data();
                    mall.show = false;
                    mall.id = doc.id;
                    this.mallsList.push(mall);
                })
            })
        }
    },

    created() {
        this.fetchItems()
    }
}

</script>

<style scoped>
    * {
        text-align: center;
    }

    #wrapper {
        display: grid;
        grid-template-rows: 50% 50%;
        gap: 30px;
        grid-template-areas:
            "a"
            "b";
    }

    #malls {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        grid-area: a;
    }

    .mall-items {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 10px;
        margin: 10px;
    }

    Map {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        margin-left: 60px;
        grid-area: b;
        align-items: center;
        justify-content: center;
        
    }

</style>