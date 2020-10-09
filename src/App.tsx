import { defineComponent } from 'vue'
import View from './components/View'
import '@/assets/style/app.scss'

export default defineComponent({
  components: {
    View
  },
  setup () {
    return () => 
      <div id="app">
        <View class="view" />
      </div>
  }
})