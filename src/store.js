import { reactive } from 'vue'

export const store = reactive({
  types: '',
  restaurants: "",
  restaurant: "",
  cart: "",
  showModal : false,
  showNotification : false,
  selected_types: []
})
