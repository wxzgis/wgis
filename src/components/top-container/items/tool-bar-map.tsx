import { defineComponent } from 'vue'
import ToolPanel from '@/components/base/tool-panel/tool-panel'

export default defineComponent({
  name: 'ToolBarMap',
  components: {
    'tool-panel': ToolPanel
  },
  setup () {

    return () => <>
      <tool-panel>
        222
      </tool-panel>
    </>
  }
})