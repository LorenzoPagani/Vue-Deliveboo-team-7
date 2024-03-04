<script>
// import AppComponent from "./components/AppComponent.vue"
import MyHeader from "./components/MyHeader.vue";


import axios from "axios"; //importo Axios
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
  <MyHeader />
  <router-view></router-view>
  <Jumbo/>
  
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
