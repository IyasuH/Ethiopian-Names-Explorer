import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import 'primeicons/primeicons.css'
import { createHead } from '@unhead/vue/client'

const app = createApp(App)
const head = createHead();

app.use(router);
app.use(head);
app.mount('#app');

