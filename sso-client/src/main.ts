import '@/styles/index.less'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/permission'

const app = createApp(App)
app.use(router).mount('#app')
