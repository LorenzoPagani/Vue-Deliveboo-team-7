<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console
import axios from "axios" //importo Axios

export default {
    name: "Appsearch_cards",
    emits: ['restaurantsLoaded'],
    data() {
        return {
            store
        }
    },
    methods: {
        selectType(type) {
            if (this.store.selected_types.includes(type)) {
                this.store.selected_types.splice(this.store.selected_types.indexOf(type), 1);
            }
            else {
                this.store.selected_types.push(type);
            }
            console.log(this.store.selected_types);
            this.loadRestaurants(store.selected_types)
        },
        loadRestaurants(lista) {
            let types = []
            lista.forEach(type => {
                types.push(type.id)
            })
            console.log(types)
            /* axios.interceptors.request.use(request => {
                console.log('Starting Request', JSON.stringify(request, null, 2))
                return request
            }) */
            axios.get("http://localhost:8000/api/restaurants/types", { params: { "types": types } }).then(risultato => {
                console.log(risultato);
                this.store.restaurants = risultato.data.restaurants;
                this.$emit('restaurantsLoaded');
            }).catch(errore => {
                console.error(errore);
            });
        },
    },


    mounted() {
        register(this); //per debuggare il componente da console

    }
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-12 wrapper">
                <h1 class="text-center">Scegli Il Tuo Ristorante</h1>
                <div class="col-12 d-flex flex-wrap justify-content-center gap-2">
                    <div class="card p-2 type-badge " v-for="type in store.types" @click="selectType(type)"
                        :class="store.selected_types.includes(type) ? 'button-87 selected' : 'button-87'">
                        <h5>{{ type.name }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.type-badge {
    cursor: pointer;
}

.selected {
    transform: scale(0.95);
    border: 4px solid #000046;
}

h1 {
    color: white;
    font-size: 3rem;

}

.wrapper {
    background-color: #00000061;
    border-radius: 10px;
    margin-top: 20px;
    width: 100vw;
}
</style>