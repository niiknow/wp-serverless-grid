import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/shared/index'
import MyDs from '@/shared/vueds.js'

const app = createApp(App)

MyDs(app)
app.use(router)
app.mount('#vue-frontend-app')
