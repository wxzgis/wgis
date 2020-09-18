import { loadModules } from 'esri-loader'
import esriConf from '@/config/esri.conf'

namespace.reg('WXZ.ESRI')
namespace.reg('WXZ.ESRI.Utils')

const load = modules => {
  return new Promise((resolve, reject) => {
    loadModules(modules, esriConf).then(classes => resolve(classes)).catch(err => reject(err));
  });
}

WXZ.ESRI = {

}

WXZ.ESRI.Utils = {
  load,
  async createMap(options) {
    const [ ArcGISMap ] = await _load(['esri/Map']);
    namespace.reg('WXZ.ESRI.Map');
    WXZ.ESRI.Map = ArcGISMap;
    const map = new ArcGISMap(options);
    return map;
  },
  async createMapView(options) {
    const [ MapView ] = await _load(['esri/views/MapView']);
    namespace.reg('WXZ.ESRI.Views.MapView');
    WXZ.ESRI.Views.MapView = MapView;
    MapView.prototype.addZoom = function() {
      console.log(this.zoom);
    }
    const view = new MapView(options);
    return view;
  },
}
