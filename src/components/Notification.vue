<script>
import { store } from "../store";
export default {
  name: "Notification",
  data(){
    return{
        store
    }
  }
};
</script>

<template>
  <div aria-live="polite" aria-atomic="true" class="position-relative" v-if="this.store.showNotification">

    <div class="toast-container position-absolute top-0 end-0 p-3">
      <div
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        class="toast show fade"
        data-bs-autohide="true"
      >
        <div class="toast-header">
          <strong class="me-auto text-dark">Piatto aggiunto</strong>
          <small>ora</small>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body text-dark">Piatto aggiunto con successo</div>
      </div>
    </div>
  </div>
</template>
