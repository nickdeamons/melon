import { createApp } from 'vue'
import App from './App.vue'
import vfmPlugin from 'vue-final-modal'
import { createPinia } from 'pinia'
import './assets/tailwind.css'

createApp(App).use(createPinia()).use(vfmPlugin).mount('#app')