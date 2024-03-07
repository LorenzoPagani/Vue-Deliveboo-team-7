<script>
import { store } from '../store';
export default {
  name: "Cart",
  data() {
    return {
      store
    }
  },

  methods: {
    checkCart() {
      return localStorage.getItem("cart");
    },

    getCart() {
      if (this.checkCart()) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    },

    getTotal() {
      let tot = 0;

      if (!this.store.cart.dishes) {
        return;
      }
      this.store.cart.dishes.forEach(dish => {
        tot += (dish.prezzo * dish.quantity);

      });
      return tot.toFixed(2)

    },

    deleteItem(id) {

      let cart = this.getCart();
      let newCart = cart.dishes.filter(dish => {
        return dish.id !== id
      })

      cart.dishes = newCart;
      if (cart.dishes.length == 0) {
        localStorage.removeItem('cart');
        this.store.cart = {};
        return;
      }
      this.store.cart = cart;
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    emptyCart() {
      localStorage.removeItem('cart');
      this.store.cart = {};
      return;
    },
    updateCart(item) {
      if (item.quantity == 0) {
        this.deleteItem(item.id)
      }

      this.getTotal()
    }
  },

  mounted() {
  },
};
</script>
<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas-cart" aria-labelledby="offcanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">Cart</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="store.cart.restaurant">
        <h5>{{ store.cart.restaurant.name }}</h5>
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Dish</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Cancel</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in store.cart.dishes">
              <td>{{ item.nome }}</td>
              <td>{{ item.prezzo }}</td>
              <td><button class="btn btn-danger" @click="item.quantity-- ; updateCart(item)">-</button><input class="form-controlc w-25 ms-1 me-1 text-center" type="number" min="0" v-model="item.quantity" @change="updateCart(item)"><button class="btn btn-primary" @click="item.quantity++ ; updateCart(item)">+</button></td>
              <td>
                <button class="btn btn-danger" @click="deleteItem(item.id)">
                  <i class="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        Tot: {{ this.getTotal() }} €
      </div>
      <div v-else>Cart is empty!</div>
    </div>

    <div class="mb-2 ms-2" v-if="store.cart.restaurant">
      <button class="btn btn-danger" @click="emptyCart()">
        Svuota carrello
      </button>
    </div>
  </div>
</template>
<style scoped>

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>

