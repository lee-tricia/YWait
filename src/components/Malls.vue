<template>
    <div>
        <NavBar></NavBar>
        <h1>Malls</h1>

        <ul>
            <li v-for = "mall in mallsList" v-bind:key = "mall.id">
                <h3>{{ mall.mallName }}</h3>
                <h6>{{ mall.address }}</h6>
                <h6>Singapore {{ mall.postalCode }}</h6>
            </li>
        </ul>        
    </div>
</template>

<script>
import { database } from "../firebase.js";

export default {
    data() {
        return {
            mallsList: []
        }
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

ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 10px;
        margin: 10px;
        border: 1px solid #222;
    }

<style>