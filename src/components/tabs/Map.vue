<template>
    <wxz-box name="导航">
      <wxz-box-button name="放大" :img="'./img/zoom-in.png'" :on-click="zoomIn"></wxz-box-button>
      <wxz-box-button name="缩小" :img="'./img/zoom-out.png'"></wxz-box-button>
    </wxz-box>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import Box from '../base/box/Box'
import BoxButton from '../base/box/boxitems/Button'
import gis from '../../hooks/gis'
export default {
  name: 'Map',
  components: {
    'wxz-box': Box,
    'wxz-box-button': BoxButton
  },
  setup(prop, { attrs, slots, emit }) {

    

    const zoomIn = () => {
      console.log(gis.view.zoom);
      const view = toRefs(gis.view)
      console.log(view)
    }

    return {
      zoomIn,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
