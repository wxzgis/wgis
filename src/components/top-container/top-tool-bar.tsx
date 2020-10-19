import { defineComponent } from 'vue'
import ToolBarMap from './items/tool-bar-map'

export default defineComponent({
  name: 'TopToolBar',
  props: {
    height: { type: String, default: '100%' },
  },
  components: {
    'tool-bar-map': ToolBarMap
  },
  setup (props) {

    return () => <>
        <a-tabs
          class="top-tool-bar"
          style = {{
            height: props.height
          }}
          tabBarStyle = {{
            marginBottom: '5px'
          }}
          size="small"
          defaultActiveKey="1"
        >
          <a-tab-pane key="0" tab="WGIS" disabled />
          <a-tab-pane key="1" tab="地图">
            <tool-bar-map />
          </a-tab-pane>
          <a-tab-pane key="2" tab="插入">
            Content of Tab Pane 2
          </a-tab-pane>
          <a-tab-pane key="3" tab="分析">
            Content of Tab Pane 3
          </a-tab-pane>
          <a-tab-pane key="4" tab="视图">
            Content of Tab Pane 3
          </a-tab-pane>
        </a-tabs>
    </>
  }
})