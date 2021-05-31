import './lib/ark.scss'
import './index.scss'
import './assets/css/font.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './network/router'
import 'github-markdown-css'
import "../node_modules/prismjs/themes/prism-okaidia.css"

const app = createApp(App)
app.use(router).mount('#app')
