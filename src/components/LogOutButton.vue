<template>
    <button v-on:click.prevent="logout()" >Log Out</button>
</template>

<script>
import { auth } from "../firebase.js";

export default {

    methods: {
        logout() {
            auth.signOut().then(() => {
                this.$router.push('/');
            });

        }
    }
    
}
</script>

<styles scoped>

    button {
        border: none;
    }
    
</style>

