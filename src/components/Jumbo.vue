<script>
import axios from "axios"; //importo Axios
import { store } from "../store.js"; //state management
import AppSearch from "./AppSearch.vue";

export default {
  name: "Jumbo",
  components:{
    AppSearch
  },
  data() {
    return {
      store
    };
  },
  methods: {
  },
};
</script>

<template>
  <div class="container-fluid jumbobg position-relative">
    <div class="row d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
      <div class="col-12">
        <AppSearch></AppSearch>
      </div>
    </div>
  </div>
</template>

<style scoped>
.jumbobg {
  background-image: url("https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg");
  background-size: cover;
  height: 500px;
}
</style>
