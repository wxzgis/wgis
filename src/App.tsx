import { defineComponent } from 'vue'
import MapView from './components/map-container/map-view'
import TopToolBar from './components/top-container/top-tool-bar'

export default defineComponent({
  components: {
    'map-view': MapView,
    'top-tool-bar': TopToolBar,
  },
  setup () {

    const height = '150px' // 头部工具栏高度

    return () =>  <>
        <top-tool-bar height={ height } />
        <div class="main-container"
          style={{
            height: `calc(100vh - ${height})`
          }}
        >
          <map-view />
        </div>
      </>
        
  }
})