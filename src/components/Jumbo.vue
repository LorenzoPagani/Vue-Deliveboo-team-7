<script>
import axios from "axios"; //importo Axios
import { store } from "../store.js"; //state management

export default {
  name: "Jumbo",
  data() {
    return {
      store
    };
  },
  methods: {
    loadRestaurants(event){
      axios.get("http://localhost:8000/api/restaurants/type/"+event.target.value).then(risultato => {
        console.log(risultato);
        this.store.restaurants = risultato.data.restaurants;
      }).catch(errore => {
        console.error(errore);
      });
    }
  },
};
</script>

<template>
  <div class="container-fluid jumbobg position-relative">
    <div class="row d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
      <div class="col-12">
        <select class="form-select" aria-label="Default select example" @change="loadRestaurants($event)">
          <option selected>Select restaurant type</option>
          <option v-for="item in store.types" :value="item.id">{{item.name}}</option>
        </select>
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
