<script>

import axios from "axios"; //importo Axios
import { store } from "../store.js"
import Modal from "../components/Modal.vue";
import { RouterLink } from "vue-router";

export default {
    name: "AppRestaurant",

    components: {
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
                this.store.restaurant.dishes.forEach(element => {
                    element.quantity = 1
                });
            }).catch(errore => {
                console.error(errore);
            });
        },
        visible(isVisible) {
            return isVisible ? '' : 'greyed';
        },
        addToCart(dish) {
            if (this.store.cart.restaurant && this.store.cart.restaurant.name !== this.store.restaurant.name) {
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
                    restaurant: {
                        name: this.store.restaurant.name,
                        id: this.store.restaurant.id
                    },
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
            <div class="col-sm-12 mt-3">
                <div class="restaurantContainer">
                    <div class="d-flex justify-content-between align-items-center">
                        <h1> {{ this.store.restaurant.name }}</h1>
                        <router-link class="button-87 text-decoration-none" :to="{ name: 'home' }"
                            style="width:18rem;">Torna ai ristoranti</router-link>
                    </div>

                    <table class="table table-borderless  myTable">
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col"></th>
                                <th class="d-none d-md-block" scope="col">Descrizione</th>
                                <th scope="col">Ingredienti</th>
                                <th scope="col">Prezzo</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="dish in this.store.restaurant.dishes" :class="visible(dish.visible)">
                                <td>{{ dish.name }}</td>
                                <td>
                                    <img v-if="!dish.picture.includes('http')" class="dish-img"
                                        :src="'http://localhost:8000/storage/' + dish.picture" alt="">
                                    <img v-else class="dish-img" :src="dish.picture" alt="">
                                </td>
                                <td class="d-none d-md-block">{{ dish.description }}</td>
                                <td>{{ dish.ingredients }}</td>
                                <td>€ {{ dish.price }}</td>
                                <td><button type="button" class="btn btn-success" :disabled="dish.visible == 0"
                                        @click="addToCart(dish)">+</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <Modal></Modal>
</template>
<style scoped lang="scss">
.restaurantContainer {
    margin-top: 150px;
    border-radius: 10px;
    padding: 10px;
    /* background-color:
        #feb836d2
        rgb(9 8 43 / 74%); */
    background: linear-gradient(90deg, rgb(186 138 69 / 88%) 0%, rgb(234 152 55) 100%);
}

.myTable {

    th,
    td {
        color: white;
        background-color: transparent;
        padding: 0, 30px;
    }





}

h1 {
    color: white;
    background-color: #00000061;
    padding: 10px;
    border-radius: 10px;
}

img {
    border-radius: 10px;
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