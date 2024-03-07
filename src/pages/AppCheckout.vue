<script>

import axios from "axios"; //importo Axios
import { store } from "../store.js"
import { RouterLink } from "vue-router";

export default {
    name: "AppCheckout",
    data() {
        return {
            store,
        };
    },
    methods: {
        getRestaurantInfo(restaurant_id) {
            axios.get("http://localhost:8000/api/restaurant/" + restaurant_id).then(risultato => {
                console.log(risultato);
                this.store.restaurant = risultato.data.restaurant;
            }).catch(errore => {
                console.error(errore);
            });
        },
        visible(isVisible) {
            return isVisible ? '' : 'greyed';
        },
        addToCart(dish) {
            if (this.store.cart.restaurant && this.store.cart.restaurant !== this.store.restaurant.name) {
                //alert("Esiste già un ordine per un altro ristorante");
                store.showModal = true;
                return;
            }
            if (this.store.cart.restaurant) {
                const existingDishIndex = this.store.cart.dishes.findIndex(item => item.id === dish.id);
                console.log(existingDishIndex)
                if (existingDishIndex !== -1) {
                    this.store.cart.dishes[existingDishIndex].quantity += dish.quantity;
                    return;
                }
                const newDish = {
                    id: dish.id,
                    nome: dish.name,
                    prezzo: dish.price,
                    quantity: dish.quantity
                };

                this.store.cart.dishes.push(newDish);
                localStorage.setItem('cart', JSON.stringify(this.store.cart));
            }
            else {
                //create restaurant
                const newCart = {
                    restaurant: this.store.restaurant.name,
                    dishes: [
                        {
                            id: dish.id,
                            nome: dish.name,
                            prezzo: dish.price,
                            quantity: dish.quantity
                        }
                    ]
                };
                this.store.cart = newCart;
                localStorage.setItem('cart', JSON.stringify(newCart));
            }
            this.store.showNotification = true;
            setTimeout(() => {
                this.store.showNotification = false;
            }, 3000);
        }
    },
    mounted() {
        this.getRestaurantInfo(this.$route.params.id);
        this.store.cart = JSON.parse(localStorage.getItem("cart")) || {};
        console.log(this.store.cart);
    },
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h1>Checkout</h1>
                    <router-link :to="{ name: 'home' }" style="width:18rem;">Back to restaurants</router-link>
                </div>

                <form>
                    <div class="form-group">
                        <label class="text-black" for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter your name">
                    </div>
                    <div class="form-group">
                        <label class="text-black" for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter your email address">
                    </div>
                    <div class="form-group">
                        <label class="text-black" for="address">Address</label>
                        <input type="text" class="form-control" id="address"
                            placeholder="Enter the address to deliver the order">
                    </div>



                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    <Modal></Modal>
</template>
<style scoped>
h1 {
    color: black;
}

p {
    color: black;
}

.dish-img {
    width: 100px;
}

.greyed {
    opacity: 50%;
}
</style>