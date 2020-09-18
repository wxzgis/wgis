import Vue from 'vue'
import App from './App.vue'

import './config/antd.conf'
import './exts-vue'

// import store from './store'

Vue.config.productionTip = false

Vue.prototype.$esri.load([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/WebTileLayer',
]).then(([
  ArcGISMap, MapView, WebTileLayer
]) => {
  Vue.prototype.$esri.Map = ArcGISMap;
  Vue.prototype.$esri.MapView = MapView;
  Vue.prototype.$esri.Layers = {
    WebTileLayer,
  };
  new Vue({
    render: h => h(App),
  }).$mount('#app');
})

