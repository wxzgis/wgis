<template>
  <div>

    <tool-panel name="导航">
      <tool-item-button name="放大" :img="'./img/zoom-in.png'" :on-click="zoomIn"></tool-item-button>
      <tool-item-button name="缩小" :img="'./img/zoom-out.png'" :on-click="zoomOut"></tool-item-button>
    </tool-panel>

    <tool-panel name="图层">
      <tool-item-drop-down name="底图" img="./img/basemap.png" :items="basemapItems"></tool-item-drop-down>
    </tool-panel>

  </div>
</template>

<script>
export default {
  name: 'map-module',
  components: {
    'tool-panel': () => import('../base/tool/ToolPanel'),
    'tool-item-button': () => import('../base/tool/tool-items/Button'),
    'tool-item-drop-down': () => import('../base/tool/tool-items/DropDown'),
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
