import Vue from 'vue'



async function initBasemaps () {
  const { $ajax, $webgis } = Vue.prototype;
  const basemaps = await $ajax.get('./json/basemaps.json');
  Object.assign($webgis, { basemaps });
}

export default async () => {
  const [
    ArcGISMap,
    MapView,
    WebTileLayer
  ] = await Vue.prototype.$esri.load([
    'esri/Map',
    'esri/views/MapView',
    'esri/layers/WebTileLayer',
  ]);
  extMapView();
  extMap();


  Vue.prototype.$esri.Map = ArcGISMap;
  Vue.prototype.$esri.MapView = MapView;
  Vue.prototype.$esri.Layers = {
    WebTileLayer,
  };

  Vue.prototype.$webgis = {};
  await initBasemaps();

  
  function extMapView() {
    MapView.prototype.addZoom = function(number) {
      const zoom = this.zoom + number;
      this.goTo({ zoom });
    }
  }

  function extMap() {
    ArcGISMap.prototype.setBasemap = function({ url = '', type = '' }) {
      if(type.toLowerCase() === 'webtilelayer') {
        this.basemap = {
          baseLayers: [ new WebTileLayer({ urlTemplate: url }) ]
        }
      }
      
    }
  }

}