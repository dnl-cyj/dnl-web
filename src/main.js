import { createApp } from 'vue'
import pinia from "@/stores";
import router from "@/routers";
import './style.css'
import 'uno.css'
import App from './App.vue'

createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
