import {
  Layout,
  Tabs,
} from 'ant-design-vue'
import { App } from 'vue'

export default {
  install (app : App<Element>) {
    [
      Layout,
      Tabs
    ].forEach(item => app.use(item))
  }
}
