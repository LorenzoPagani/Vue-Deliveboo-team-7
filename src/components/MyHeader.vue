<script>
import { store } from '../store';
export default {
  name: "MyHeader",
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
          label: "Contacts",
        },
      ],
    };

  },

  methods:{
    cartItems(){
      if(this.store.cart && this.store.cart.restaurant){

        let cart= this.store.cart;
        return cart.dishes.length;

      }
    }
  }
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid d-flex align-items-center justify-content-around">
        <a class="navbar-brand" href="#"><b>Logo</b></a>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-between w-30">
            
            <div class="nav-item px-4 mx-4 " v-for="(item, index) in menuItems" :key="index">
              <router-link :to="{ name: item.routeName }" class="nav-link p-3">
                {{ item.label }}
              </router-link>
            </div>
          </div>

          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
         <button class="btn btn-primary position-relative me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart" >
          Cart
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ this.cartItems() }}
          </span>
         </button>
        </div>
        <div>
          <a class="btn btn-primary" href="http://127.0.0.1:8000/">Accedi all'area ristoratori</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background-color: #feb836;
}

.link{
    text-decoration: none;
    color: black;
}
</style>
