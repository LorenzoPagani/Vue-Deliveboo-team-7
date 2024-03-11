<script>
import { store } from "../store.js";
import axios from "axios"; //importo Axios
import Jumbo from "../components/Jumbo.vue";
export default {
    name: "AppHome",
    components: {
        Jumbo,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        trimDescription(description, length) {
            if (description.length > length) {
                for (let i = length; i > 0; i--) {
                    if (description.charAt(i) == " ") {
                        length = i
                        break
                    }
                }
                return description.substring(0, length) + " ..."
            }
            else {
                return description
            }
        },
    },
}
</script>

<template>
    <Jumbo />

    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <div v-if="store.restaurants.length == 0">
                    <div class="mt-5 d-flex align-items-center justify-content-center">
                        <h4 class="text-black">Hai fame? Clicca sulle categorie qui sopra per trovare ciò che vuoi
                            mangiare!</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="container p-3">
                <div class="d-flex flex-wrap justify-content-evenly">
                    <router-link v-for="restaurants in store.restaurants"
                        :to="{ name: 'restaurant', params: { id: restaurants.id } }" class="card m-2"
                        style="width:18rem;">
                        <img v-if="!restaurants.picture.includes('https')"
                            :src="'http://localhost:8000/storage/' + restaurants.picture" class="card-img-top"
                            alt="...">
                        <img v-else :src="restaurants.picture" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ restaurants.name }}</h5>
                            <h6 class="card-subtitle mb-2 text-muted ">{{ restaurants.address }}</h6>
                            <p class="card-text">{{ trimDescription(restaurants.description, 100) }}</p>
                        </div>
                    </router-link>
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

.card {
    text-decoration: none;
}

.card:hover {
    .card-title {
        text-decoration: underline;
        color: blue;
    }
}
</style>