<script>
import { store } from '../store';
export default {
  name: "Modal",
  data() {
    return {
      store
    }
  },
  methods: {
    deleteOrders() {
      this.store.cart = {};
      localStorage.removeItem('cart');
      this.store.showModal = false
    }
  }
}
</script>
<template>
  <div class="modal fade show" tabindex="-1" style="display:block;" v-if="store.showModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-dark">Ordine già nel carrello</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            @click="store.showModal = false"></button>
        </div>
        <div class="modal-body">
          <p class="text-dark">C'è già un ordine nel carrello per un ristorante differente.Vuoi cancellarlo?</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            @click="store.showModal = false">Annulla</button>
          <button type="button" class="btn btn-primary" @click="this.deleteOrders">Cancella ordine</button>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped></style>