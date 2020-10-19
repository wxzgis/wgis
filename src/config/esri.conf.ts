import { useEsriUtils } from '@/hooks/esri'
import { loadModules } from 'esri-loader'


const ARCGIS_API_URL : string = 'https://wuxizhe.fun/arcgisjs/api/4.15'
const ESRI_CONFIG = {
  url: `${ARCGIS_API_URL}/init.js`,
  css: `${ARCGIS_API_URL}/esri/themes/light/main.css`,
}

export const BASEMAPS = {
  "彩色中文含兴趣点版中国基础地图": {
    type: "WebTileLayer",
    url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{level}/{row}/{col}",
  },
  "灰色中文不含兴趣点版中国基础地图": {
    type: "WebTileLayer",
    url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer/tile/{level}/{row}/{col}",
  },
  "蓝黑色中文不含兴趣点版中国基础地图": {
    type: "WebTileLayer",
    url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{level}/{row}/{col}",
  },
  "暖色中文不含兴趣点版中国基础地图": {
    type: "WebTileLayer",
    url: "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer/tile/{level}/{row}/{col}",
  }
}

export const VIEW_DEFAULT_OPTIONS = {
  container: 'view-container',
  zoom: 3,
  center: [110, 10],
  ui: {
    components: []
  }
}

export const initEsri = function () {
  return new Promise((resolve, reject) => {
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
      resolve()
    }).catch(err => reject(err))
  })
}