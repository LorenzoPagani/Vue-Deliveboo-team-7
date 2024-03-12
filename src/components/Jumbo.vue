<script>
import axios from "axios"; //importo Axios
import { store } from "../store.js"; //state management
/* import AppSearch from "./AppSearch.vue"; */
import Appsearch_cards from "./Appsearch_cards.vue";
export default {
  name: "Jumbo",
  emits: ['restaurantsLoaded'],
  components: {
    /* AppSearch */
    Appsearch_cards,
  },
  data() {
    return {
      store
    };
  },
  methods: {
    emit() {
      this.$emit("restaurantsLoaded");
    }
  },
};
</script>

<template>
  <div class="container-fluid jumbobg position-relative mt-5">
    <div class="row d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
      <div class="col-12">
        <!-- <AppSearch></AppSearch> -->
        <Appsearch_cards @restaurantsLoaded="emit()"></Appsearch_cards>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbobg {
  background-image: url("../assets/street-chinese-food-with-copy-space.jpg");
  background-size: cover;


  height: 720px;
}
</style>
