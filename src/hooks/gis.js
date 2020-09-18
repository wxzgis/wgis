import { ref, reactive } from 'vue'


// const gis = reactive({
//   map: null,
//   view: null,

//   async setGIS({mapOptions, viewOptions}) {
//     const { createMap, createMapView } = WXZ.ESRI.Utils;

//     const map = reactive(await createMap(mapOptions));
//     viewOptions.map = map;
//     this.view = reactive(await createMapView(viewOptions));
//     this.map = map;
//   }
// });

// export default gis;

export const map = ref();

export const view = ref();

export const setMap = _map => {
  map.value = _map
}
export const setView = _view => {
  view.value = _view
}
