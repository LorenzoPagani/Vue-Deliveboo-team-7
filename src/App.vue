<script>
// import AppComponent from "./components/AppComponent.vue"
import MyHeader from "./components/MyHeader.vue";

import axios, { all } from "axios"; //importo Axios
import { store } from "./store.js"; //state management
import Jumbo from "./components/Jumbo.vue";
import Cart from "./components/Cart.vue";
import Notification from "./components/Notification.vue";

export default {
  components: {
    MyHeader,
    Jumbo,
    Cart,
    Notification
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
      ],
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
    getRestaurantTypes() {
      axios
        .get("http://localhost:8000/api/types")
        .then((risultato) => {
          console.log(risultato);
          this.store.types = risultato.data.types;
        })
        .catch((errore) => {
          console.error(errore);
        });
    },
  },
};
</script>

<template>
  <Notification/>
  <MyHeader />
  <Jumbo />
  <router-view></router-view>
  <Cart />
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
