<template>
  <div>
    <wxz-box name="导航">
      <wxz-box-button name="放大" :img="'./img/zoom-in.png'" :on-click="zoomIn"></wxz-box-button>
      <wxz-box-button name="缩小" :img="'./img/zoom-out.png'" :on-click="zoomOut"></wxz-box-button>
    </wxz-box>
    <wxz-box name="图层">
      <wxz-box-drop-down name="底图" img="./img/basemap.png" :items="basemapItems"></wxz-box-drop-down>
    </wxz-box>
  </div>
</template>

<script>
export default {
  name: 'map-module',
  components: {
    'wxz-box': () => import('../base/box/Box'),
    'wxz-box-button': () => import('../base/box/boxitems/Button'),
    'wxz-box-drop-down': () => import('../base/box/boxitems/DropDown')
  },
  data() {
    const { basemaps, map } = this.$webgis
    const basemapItems = [];
    basemaps.forEach(basemap => {
      basemapItems.push({
        ...basemap,
        onClick() {
          map.setBasemap({ ...basemap });
        }
      })
    });
    return {
      basemapItems,
    }
  },
  methods: {
    zoomIn() {
      const { view } = this.$webgis;
      view.addZoom(1);
    },
    zoomOut() {
      const { view } = this.$webgis;
      view.addZoom(-1);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
