import { defineConfig } from 'vite'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // root: path.resolve(__dirname, 'src'), //ToDo: necessario?
})
