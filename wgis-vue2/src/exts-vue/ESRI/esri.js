import Vue from 'vue'
import { loadModules } from 'esri-loader'
import esriConf from '@/config/esri.conf'



Vue.prototype.$esri = {
  load(modules) {
    return new Promise((resolve, reject) => {
      loadModules(modules, esriConf).then(classes => resolve(classes)).catch(err => reject(err));
    });
  }
}

// Vue.prototype.$esri.Utils = {
//   async createMap(options) {
//     const [ ArcGISMap ] = await _load(['esri/Map']);
//     const map = new ArcGISMap(options);
//     return map;
//   },
//   async createMapView(options) {
//     const [ MapView ] = await _load(['esri/views/MapView']);
//     extMapView(MapView);
//     const view = new MapView(options);
//     return view
//   },
// }

// function extMapView(MapView) {
//   MapView.prototype.addZoom = function(number) {
//     // this.zoom += number; use goTo is better
//     const zoom = this.zoom + number;
//     this.goTo({ zoom });
//   }
// }