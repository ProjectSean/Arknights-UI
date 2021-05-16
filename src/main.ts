import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import './assets/css/font.scss'
import { router } from './network/router'


const app = createApp(App)
app.use(router).mount('#app')
