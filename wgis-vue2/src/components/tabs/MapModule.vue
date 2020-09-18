<template>
  <div>
    <wxz-box name="导航">
      <wxz-box-button name="放大" :img="'./img/zoom-in.png'" :on-click="zoomIn"></wxz-box-button>
      <wxz-box-button name="缩小" :img="'./img/zoom-out.png'" :on-click="zoomOut"></wxz-box-button>
    </wxz-box>
    <wxz-box name="图层">
      <wxz-box-drop-down name="底图" img="./img/basemap.png"></wxz-box-drop-down>
    </wxz-box>
  </div>
</template>

<script>
import Box from '../base/box/Box'
import BoxButton from '../base/box/boxitems/Button'
import { mapMutations } from 'vuex'
export default {
  name: 'map-module',
  components: {
    'wxz-box': Box,
    'wxz-box-button': BoxButton,
    'wxz-box-drop-down': () => import('../base/box/boxitems/DropDown')
  },
  data() {
    return {
      basemapItems: [
        
      ]
    }
  },
  methods: {
    zoomIn() {
      const { view } = this.$store.state;
      view.addZoom(1);
    },
    zoomOut() {
      const { view } = this.$store.state;
      view.addZoom(-1);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
