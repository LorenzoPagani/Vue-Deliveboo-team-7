<script>

import axios from "axios"; //importo Axios
import { store } from "../store.js"
import Modal from "../components/Modal.vue";

export default{
    name: "AppRestaurant",

    components:{
        Modal
    },

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
                    quantity: 1
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
                            quantity: 1
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
    components: { Modal }
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="col-md-12 mt-3">
                <h1>Dishes of {{ this.store.restaurant.name }}</h1>
                <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Description</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="dish in this.store.restaurant.dishes" :class="visible(dish.visible)">
                    <td>{{ dish.name }}</td>
                    <td>
                        <img v-if="!dish.picture.includes('http')" class="dish-img" :src="'http://localhost:8000/storage/' + dish.picture" alt="">
                        <img v-else class="dish-img" :src="dish.picture" alt="">
                    </td>
                    <td>{{ dish.description }}</td>
                    <td>{{ dish.ingredients }}</td>
                    <td>€ {{ dish.price }}</td>
                    <td><button type="button" class="btn btn-success" :disabled="dish.visible == 0" @click="addToCart(dish)">Aggiungi al carrello</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
    <Modal></Modal>
</template>
<style scoped>
h1{color: black;}
p{color: black;}

.dish-img{
    width: 100px;
}

.greyed{
    opacity: 50%;
}
</style>