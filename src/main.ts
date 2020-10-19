import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import antd from './config/antd.conf'
import { initEsri } from './config/esri.conf'
import './assets/styles/app.scss'

initEsri().then(() => {
  createApp(App)
    .use(store)
    .use(router)
    .use(antd)
    .mount('#app')
})

