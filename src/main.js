import { createApp } from 'vue'
import App from './App.vue'

import * as bootstrap from 'bootstrap'

window.vue = {}
window.vue.App = createApp(App)
   .mount('#app')
