import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'

import { loadModules } from 'esri-loader'
import { ESRI_CONFIG } from './config/esri.conf'
import { useEsriUtils } from './hooks/esri'

const app = createApp(App)

loadModules([
  'esri/Map',
  'esri/views/MapView',
  'esri/layers/WebTileLayer',
], ESRI_CONFIG).then(([
  ArcGISMap,
  MapView,
  WebTileLayer,
]) => {
  const { set } = useEsriUtils()
  set({
    ArcGISMap,
    MapView,
    WebTileLayer,
  })

  app.use(store).use(router).mount('#app')
})

