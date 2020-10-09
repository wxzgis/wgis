import { createStore } from 'vuex'

export default createStore({
  state: {
    map: null,
    view: null,
  },
  mutations: {
    setMap (state, map) {
      state.map = map
    },
    setView (state, view) {
      state.view = view
    },
    setMapView (state, { map, view }) {
      state.map = map
      state.view = view
    }
  },
  actions: {
    setMap (context, map) {
      context.commit('setMap', map)
    },
    setView (context, view) {
      context.commit('setView', view)
    },
    setMapView (context, { map, view }) {
      context.commit('setMapView', { map, view })
    }
  },
  modules: {
  }
})
