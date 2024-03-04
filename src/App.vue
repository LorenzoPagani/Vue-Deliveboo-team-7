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
    this.doThings();

    // axios.get("indirizzo").then(risultato => {
    // 	console.log(risultato);
    // }).catch(errore => {
    // 	console.error(errore);
    // });
  },
  methods: {
    doThings() {
      console.log("App.vue does things");
    },
  },
};
</script>

<template>
  <Header/>
  <Jumbo/>
  
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
