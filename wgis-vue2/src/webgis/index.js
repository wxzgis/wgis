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
    MapView.prototype.loadEvent = function(type = 'default') {
      switch (type) {
        case 'default':
          this.on("drag", evt => evt.stopPropagation ());
          this.on('pointer-down', evt => {
            let pt = this.toMap({ x: evt.x, y: evt.y });
            if(evt.button === 1) {
              document.getElementById('view').style.cursor = `url('./img/cur/paning.cur'), auto`;
              const pointerMove = this.on('pointer-move', evt2 => {
                const pt2 = this.toMap({ x: evt2.x, y: evt2.y });
                this.center = {
                  x: this.center.x - (pt2.x - pt.x),
                  y: this.center.y - (pt2.y - pt.y),
                  spatialReference: this.spatialReference,
                }
              });
              const pointerUp = this.on('pointer-up', _ => {
                document.getElementById('view').style.cursor = 'default';
                pointerMove.remove();
                pointerUp.remove();
              });
            }
          });
          break;
      }
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