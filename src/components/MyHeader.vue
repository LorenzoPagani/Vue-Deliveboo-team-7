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
          routeName: "owners",
          label: "Ristoratori",
        },
      ],
    };

  },

  methods: {
    cartItems() {
      if (this.store.cart && this.store.cart.restaurant) {

        let cart = this.store.cart;
        let items = 0
        cart.dishes.forEach(element => {
          items = items + element.quantity
        });
        return items;

      }
    }
  },
  mounted() {
    this.store.cart = JSON.parse(localStorage.getItem("cart")) || {};
    console.log(this.store.cart);
  }
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand mynavbar">
      <div class="container-fluid d-flex align-items-center justify-content-around">
        <a class="navbar-brand" href="#">
          <img class="small-logo" src="../../public/deliveboo_logo.jpeg" alt="">
        </a>
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
        <div class=" navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center justify-content-between w-30">

            <div class="nav-item px-2  " v-for="(item, index) in menuItems" :key="index">
              <router-link :to="{ name: item.routeName }" class="nav-link p-3">
                <button class="button-78"><span>{{ item.label
                    }}</span></button>
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
          <button class="button-78 position-relative me-4" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-cart">
            <span><i class="fa-solid fa-cart-shopping fa-lg" style="color: #ffffff;"></i></span>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {{ this.cartItems() }}
            </span>
          </button>
        </div>

      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background: rgb(254, 184, 54);
  background: radial-gradient(circle, rgba(254, 184, 54, 1) 0%, rgba(255, 149, 0, 1) 100%);
}

.menù-items {
  background-color: #000046;
  color: white;
}

.small-logo {
  width: 4rem;
  border-radius: 10px;
}

.link {
  text-decoration: none;
  color: black;
}

.mynavbar {
  box-shadow: inset 0 -3px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0%;
  width: 100vw;
  z-index: 1000;
}
</style>
