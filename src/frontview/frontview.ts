import { createApp, provide } from 'vue'
import App from './App.vue'
import '@src/shared/index'
import VueAxios from 'vue-axios'
import router from './router/index'

// @ts-ignore
import config from '@src/shared/config'
const win: any = config(window)
const app = createApp(App)

// allow for using this.$win inside of a component
app.config.globalProperties.$win = win;

app.use(router)
   .use(VueAxios, win.$appConfig.axios);
app.mount('#vue-frontview-app')
