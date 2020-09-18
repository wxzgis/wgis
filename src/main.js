import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './WXZ/index'

const app = createApp(App);


import antdConf from './config/antd.conf'
antdConf(app);

WXZ.ESRI.Utils.load([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/WebTileLayer',
]).then(([
  ArcGISMap, MapView, WebTileLayer
]) => {
  WXZ.ESRI.Map = ArcGISMap;
  WXZ.ESRI.MapView = MapView;
  WXZ.ESRI.Layers = { WebTileLayer };
  app.use(router).mount('#app')
})
