import './assets/main.css'

import App from './App.vue'
import router from './routes'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).mount('#app')
