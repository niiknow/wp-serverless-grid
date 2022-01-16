import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import '@src/shared/index'
import VueAxios from 'vue-axios'

// @ts-ignore
import config from '@src/shared/config'
const win: any = config(window)
const app = createApp(App)

app.config.globalProperties.$win = win;

// @ts-ignore
import MyDs from '@src/shared/vueds.js'
MyDs(app)

app.use(router)
   .use(VueAxios, win.$appConfig.axios);
app.mount('#serverless-grid-vue-app')
