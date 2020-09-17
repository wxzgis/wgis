import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './WXZ/index'

const app = createApp(App);


import antdConf from './config/antd.conf'
antdConf(app);


app.use(router).mount('#app')
