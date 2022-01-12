import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@/shared/index'
import MyDs from '@/shared/vueds.js'
import VueAxios from 'vue-axios'
import config from '@/shared/config'

// @ts-ignore
const win: any = config(window)
const app = createApp(App)

app.config.globalProperties.$win = win;

MyDs(app)

app.use(router)
   .use(VueAxios, win.$appConfig.axios);
app.mount('#vue-frontend-app')
