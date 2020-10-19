import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToolPanel',
  setup (props, { slots }) {
    const _slots = slots as any
    return () => <>
      <div class="tool-panel">
        { _slots.default && _slots.default() || 'null' }
      </div>
    </>
  }
})