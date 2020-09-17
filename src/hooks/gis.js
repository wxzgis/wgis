import { reactive } from 'vue'


const gis = reactive({
  map: {
    basemap: null
  },
  view: {
    
  },

  async setGIS({mapOptions, viewOptions}) {
    const { createMap, createMapView } = WXZ.ESRI.Utils;

    const map = await createMap(mapOptions);
    viewOptions.map = map;
    this.view = await createMapView(viewOptions);
    this.map = map;
  }
});

export default gis;
