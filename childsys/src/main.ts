import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Auth from './utils/auth'
import './utils/permission'

const url = import.meta.env.VITE_SSO as string
Auth.init(url)

createApp(App).use(router).mount('#app')
