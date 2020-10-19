import {
  defineComponent,
  ref,
  reactive,
  onMounted,
} from 'vue';
import { useStore } from 'vuex'
import { VIEW_DEFAULT_OPTIONS } from '@/config/esri.conf'
import { useEsri, useEsriUtils } from '@/hooks/esri';

export default defineComponent({
  name: 'map-view',
  setup () {
    const { ArcGISMap, MapView } = useEsri()
    const store = useStore()

    const { createBasemap } = useEsriUtils()

    onMounted(() => {
      const map = reactive(new ArcGISMap({
        basemap: createBasemap('彩色中文含兴趣点版中国基础地图')
      }));

      console.log(map.basemap)

      // const view = new MapView({
      //   map, ...VIEW_DEFAULT_OPTIONS
      // });

      // store.commit('setMapView', { map, view })
    })

    return () => 
      <div id="view-container"
        style={{
          height: 'inherit',
        }} 
        
      />
  }
})