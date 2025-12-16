import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'

const app = createApp(App);

app.use(router); // Tell the application to use the router

app.mount('#app');