<script>
// import AppComponent from "./components/AppComponent.vue"
import MyHeader from "./components/MyHeader.vue";


import axios, { all } from "axios"; //importo Axios
import { store } from "./store.js"; //state management
import Jumbo from "./components/Jumbo.vue";




export default {
  components: {
    MyHeader,
    Jumbo
  },
  data() {
    return {
      store,
      menuItems: [
        {
          routeName: "home",
          label: "Homepage",
        },
        {
          routeName: "about",
          label: "About us",
        },
        {
          routeName: "contacts",
          label: "contacts",
        },
      ]
    };
  },
  mounted() {
    this.getRestaurantTypes();

    // axios.get("indirizzo").then(risultato => {
    // 	console.log(risultato);
    // }).catch(errore => {
    // 	console.error(errore);
    // });
  },
  methods: {
    getRestaurants() {
      axios.get("http://localhost:8000/api/restaurants")
        .then(response => {
          const filteredRestaurants = response.data.data.restaurants.filter(restaurant => {
            return restaurant.types && restaurant.types.some(type => type.id == this.store.selectedType);
          });
          console.log(response.data.data.types);
          this.store.restaurants = filteredRestaurants;
          this.store.types = response.data.data.types;
          console.log(this.store.restaurants);
        }).catch(errore => {
          console.error(errore);
        });
    getRestaurantTypes() {
      axios.get("http://localhost:8000/api/types").then(risultato => {
        console.log(risultato);
        this.store.types = risultato.data.types;
      }).catch(errore => {
        console.error(errore);
      });
    },
  },


};
</script>

<template>
  <MyHeader />
  <Jumbo @selectType="getRestaurants" />
  <router-view></router-view>

  <main>

  </main>
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
