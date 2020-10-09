import {
  defineComponent,
  getCurrentInstance,
  onMounted,
} from 'vue';
import { useStore } from 'vuex'
import { VIEW_DEFAULT_OPTIONS } from '@/config/esri.conf'
import { useEsri, useEsriUtils } from '@/hooks/esri';

export default defineComponent({
  setup () {
    const { ArcGISMap, MapView } = useEsri()
    const store = useStore()

    const { createBasemap } = useEsriUtils()

    onMounted(() => {
      const map = new ArcGISMap({
        basemap: createBasemap('彩色中文含兴趣点版中国基础地图')
      })

      const view = new MapView({
        map, ...VIEW_DEFAULT_OPTIONS
      })

      store.commit('setMapView', { map, view })
    })

    return () => 
      <div id="view-container"></div>
  }
})