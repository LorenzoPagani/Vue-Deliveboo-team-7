<script>
import axios from "axios"; //importo Axios
import { store } from "../store.js"; //state management

export default {
  name: "AppSearch",
  data() {
    return {
      store,
      text: ""
    };
  },
  methods: {
    loadRestaurants(lista) {
      let types = []
      lista.forEach(type => {
        types.push(type.id)
      })
      console.log(types)
      axios.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request, null, 2))
        return request
      })
      axios.get("http://localhost:8000/api/restaurants/types", { params: { "types": types } }).then(risultato => {
        console.log(risultato);
        this.store.restaurants = risultato.data.restaurants;
      }).catch(errore => {
        console.error(errore);
      });
    },
    searchType() {
      let text = this.text
      let found = false
      this.store.types.forEach(function (type, index) {
        if (text == type.name) {
          store.selected_types.push(type)
          found = true
        }
      });
      if (found == false) {
        alert("Type not found")
      }
      else {
        this.loadRestaurants(store.selected_types)
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="selected-types mt-3 mb-2">
      <div v-for="(type, index) in this.store.selected_types" class="selected-type me-1">
        <span class="badge badge-pill badge-secondary"><button type="button"
            class="btn btn-secondary btn-sm ps-0 pe-1 pt-0 pb-0"
            @click="this.store.selected_types.splice(index, 1); loadRestaurants(this.store.selected_types)">x</button>{{
        type.name }}</span>
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default">Restaurant Types</span>
      </div>
      <input type="text" class="form-control" name="types" id="search-type" v-model="this.text"
        aria-describedby="inputGroup-sizing-default" v-on:keyup.enter="searchType(); this.text = ''">
    </div>
  </div>
</template>

<style scoped>
.jumbobg {
  background-image: url("https://t3.ftcdn.net/jpg/02/79/75/74/360_F_279757406_PjHAMPHNAEyf5NvyEYlC7mJNRKHHkmCz.jpg");
  background-size: cover;
  height: 500px;
}

.badge-secondary {
  background-color: #6c757d;
}

.selected-types {
  display: flex;
  flex-direction: row;
}
</style>
