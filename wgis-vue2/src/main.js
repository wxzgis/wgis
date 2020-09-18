import Vue from 'vue'
import App from './App.vue'

import './config/antd.conf'
import './exts-vue'
import webgis from './webgis'

Vue.config.productionTip = false

webgis().then(() => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
})

