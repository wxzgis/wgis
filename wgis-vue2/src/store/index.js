import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const ESRI = Vue.prototype.$ESRI;
const {
  createMap, createMapView,
} = ESRI.Utils;

export default new Vuex.Store({
  state: {
    map: {},
    view: {}
  },
  mutations: {
    setMap(state, map) { state.map = map; },
    setMapView(state, view) { state.view = view; },
  },
  actions: {
    async initGIS({commit}, { mapOptions, viewOptions }) {
      const map = await createMap(mapOptions);
      const view = await createMapView({
        map, ...viewOptions
      });
      commit('setMap', map);
      commit('setMapView', view);
    },
  },
  getters: {

  }
})