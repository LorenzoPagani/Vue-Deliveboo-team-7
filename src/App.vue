<script>
// import AppComponent from "./components/AppComponent.vue"
import Header from "./components/Header.vue";


import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management
import Jumbo from "./components/Jumbo.vue";



export default {
  components: {
    Header,
    Jumbo
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.getRestaurants();

    // axios.get("indirizzo").then(risultato => {
    // 	console.log(risultato);
    // }).catch(errore => {
    // 	console.error(errore);
    // });
  },
  methods: {
    getRestaurants() {
      axios.get("http://localhost:8000/api/restaurants").then(risultato => {
        console.log(risultato.data.data.restaurants);
        this.store.restaurants = risultato.data.data.restaurants;
      }).catch(errore => {
        console.error(errore);
      });
    },
  },
};
</script>

<template>
  <Header />
  <Jumbo />
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
  <main></main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
  padding: 1rem;
}
</style>
