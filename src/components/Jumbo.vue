<script>
import { store } from "../store.js";
export default {
  name: "Jumbo",
  data() {
    return {
      store,

    };
  },

};
</script>

<template>
  <div class="container-fluid jumbobg position-relative">
    <div class="row d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
      <div class="col-12">
        <select class="form-select" aria-label="Default select example" v-model="store.selectedType"
          @change="$emit('selectType')">
          <option selected disabled>Choose restaurant type</option>
          <option v-for="type in store.types" :value="type.id"> {{ type.name }}
          </option>
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
