import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import Tracker from "./tracker";

const app = createApp(App)

app.use(Tracker, {
    APP_ID: import.meta.env.VITE_DIGITANALYTICS_APP_ID
})
app.use(createPinia())
app.use(router)

app.mount('#app')
