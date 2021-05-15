import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Sean from './components/Sean.vue'
import Sean2 from './components/Sean2.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Sean
    },
    {
      path: '/xxx',
      component: Sean2
    }
  ]
})
const app = createApp(App)
app.use(router).mount('#app')
