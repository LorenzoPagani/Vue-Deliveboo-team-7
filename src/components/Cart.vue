<script>
export default {
  name: "Cart",

  methods: {
    checkCart() {
      return localStorage.getItem("cart");
    },

    getCart() {
      if (this.checkCart()) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    },

    getTotal(){
        let tot= 0;

        this.getCart().dishes.forEach(dish => {
            tot += (dish.prezzo * dish.quantity);

        });
        return tot.toFixed(2)

    },

    deleteItem(id){

        let cart = this.getCart();
        let newCart = cart.dishes.filter(dish =>{
            return dish.id !== id
        })
        cart.dishes = newCart;

        localStorage.setItem("cart",JSON.stringify(cart));
    }
  },

  mounted() {
    console.log(this.getCart());
  },
};
</script>
<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvas-cart"
    aria-labelledby="offcanvasLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasLabel">Cart</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="this.checkCart()">
        <h5>{{ this.getCart().restaurant }}</h5>
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
            <tr v-for="item in getCart().dishes">
              <td>{{ item.nome }}</td>
              <td>{{ item.prezzo }}</td>
              <td>{{ item.quantity }}</td>
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
  </div>
</template>
<style scoped></style>

<!-- {
    "restaurant": "Pizzeria da Luigi",
    "dishes":[
    {
        "nome": "Pizza Margherita",
        "prezzo": 6.00,
        "quantity": 1
    },
    {
        "nome": "Pizza Capricciosa",
        "prezzo": 6.00,
        "quantity": 2
    },
    {
        "nome": "Pizza Quattro Stagioni",
        "prezzo": 6.00,
        "quantity": 1
    }
    ]
} -->
