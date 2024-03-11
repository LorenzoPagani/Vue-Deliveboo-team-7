<script>

import axios from "axios"; //importo Axios
import { store } from "../store.js"
import { RouterLink } from "vue-router";

export default {
    name: "AppCheckout",
    data() {
        return {
            store,
            total: 0.0,
            instance: "",
            payload: "",
            err: "",
            order_success: false,
            order_info: ""
        };
    },
    methods: {
        emptyCart() {
            localStorage.removeItem('cart');
            this.store.cart = {};
            return;
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
        closeOffCanvas() {
            const close_button = document.getElementById("cart-close")
            close_button?.click()
        },
        loadBrainTree() {
            const plugin = document.createElement("script");
            plugin.setAttribute(
                "src",
                "https://js.braintreegateway.com/web/dropin/1.42.0/js/dropin.js"
            );
            document.head.appendChild(plugin);
            plugin.onload = () => {
                this.preparePayment()
            }
        },
        preparePayment() {
            braintree.dropin.create({
                authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
                selector: '#dropin-container'
            }, (err, instance) => {
                if (err) {
                    this.err = err
                    this.instance = ""
                }
                else {
                    this.err = ""
                    this.instance = instance
                }
            })
        },
        prepareForm() {
            //e.preventDefault()
            if (this.instance == "") {
                console.log(this.err)
                return
            }
            const data = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                address: document.getElementById("address").value,
                restaurant_id: this.store.cart.restaurant.id,
                total: this.getTotal(),
                dishes: []
            }
            this.store.cart.dishes.forEach(dish => {
                const d = {
                    id: dish.id,
                    quantity: dish.quantity
                }
                data.dishes.push(d)
            })
            this.instance.requestPaymentMethod((err, payload) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(payload)
                    axios.post("http://localhost:8000/api/orders", data).then((risposta) => {
                        console.log(risposta)
                        this.order_info = risposta.data
                        this.order_success = true
                        this.$nextTick(() => {
                            this.emptyCart()
                            document.getElementById("success").focus()
                        })
                    }).catch(function (error) {
                        console.log(error)
                    })
                }
            })

        }
    },
    mounted() {
        this.loadBrainTree()
        this.closeOffCanvas()
        this.store.cart = JSON.parse(localStorage.getItem("cart")) || {};
        console.log(this.store.cart);
        this.total = this.getTotal()
    },
}
</script>

<template>

    <div class="container">
        <div class="row">
            <div class="wrapper col-md-12 mt-3">
                <div class=" d-flex justify-content-between align-items-center">
                    <h1>Checkout</h1>
                    <router-link class="button-87 text-decoration-none" :to="{ name: 'home' }" style="width:18rem;">Back
                        to
                        restaurants</router-link>
                </div>

                <div v-if="this.order_success" id="success" class="alert alert-success" role="alert">
                    <h4 class="alert-heading">Well done! The order is now confirmed</h4>
                    <p>The order has been sent to the restaurant. Order ID {{ this.order_info.order_id }}</p>
                </div>

                <form v-if="!this.order_success" id="form-checkout" @submit.prevent="this.prepareForm()">
                    <div class="form-group mb-2">
                        <label class="" for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name"
                            required>
                    </div>
                    <div class="form-group mb-2">
                        <label class="" for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email"
                            placeholder="Enter your email address" required>
                    </div>
                    <div class="form-group mb-2">
                        <label class="" for="address">Address</label>
                        <input type="text" class="form-control" id="address" name="address"
                            placeholder="Enter the address to deliver the order" required>
                    </div>

                    <div v-if="store.cart != {}" class=" mt-3">
                        <h4>Order details of restaurant {{ store.cart.restaurant.name }}:</h4>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Dish</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="dish in store.cart.dishes">
                                    <td>{{ dish.nome }}</td>
                                    <td>{{ dish.quantity }}</td>
                                    <td>€ {{ dish.prezzo }}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>Total: € <span id="total">{{ total }}</span></h4>
                    </div>

                    <div id="dropin-container"></div>
                    <button type="submit" id="submit-button"
                        class="button button--small button--green">Purchase</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
.row {
    margin-top: 150px;

}

.wrapper,
h4,
label {
    color: white;
}

.wrapper {
    background: linear-gradient(90deg, rgb(186 138 69 / 88%) 0%, rgb(234 152 55) 100%);
    border-radius: 10px;

    padding: 30px;
}

.button {
    cursor: pointer;
    font-weight: 500;
    left: 3px;
    line-height: inherit;
    position: relative;
    text-decoration: none;
    text-align: center;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    display: inline-block;
}

.button--small {
    padding: 10px 20px;
    font-size: 0.875rem;
}

.button--green {
    outline: none;
    background-color: #64d18a;
    border-color: #64d18a;
    color: white;
    transition: all 200ms ease;
}

.button--green:hover {
    background-color: #8bdda8;
    color: white;
}
</style>