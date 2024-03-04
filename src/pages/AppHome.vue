<script>
import { store } from "../store.js";
import axios from "axios"; //importo Axios
export default {
    name: "AppHome",
    data() {
        return {
            store,
        };
    },
    methods: {

    },
}
</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>HomePage</h1>
            </div>
        </div>
        <div class="row">
            <div class="container p-3">
                <div class="d-flex flex-wrap justify-content-between">
                    <div v-for="restaurants in store.restaurants" class="card m-2" style="width:18rem;">
                        <img :src="restaurants.picture" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ restaurants.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted ">{{ restaurants.address }}</h6>
                            <p class="card-text">{{ restaurants.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    background-color: green;
    color: black;
}

h1 {
    color: black;
}

p {
    color: black;
}
</style>