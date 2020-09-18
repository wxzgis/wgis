<template>
  <a-layout class="main">
    <a-layout-content class="header">
      <a-tabs class="tabs" type="card" :tabBarGutter="15">
        <a-tab-pane key="1">
          <template v-slot:tab>地 图</template>
          <wxz-tab-map-module></wxz-tab-map-module>
        </a-tab-pane>
        <a-tab-pane key="2">
          <template v-slot:tab>插 入</template>
          2
        </a-tab-pane>
        <a-tab-pane key="3">
          <template v-slot:tab>分 析</template>
          3
        </a-tab-pane>
        <a-tab-pane key="4">
          <template v-slot:tab>编 辑</template>
          4
        </a-tab-pane>
        <a-tab-pane key="5">
          <template v-slot:tab>共 享</template>
          5
        </a-tab-pane>
      </a-tabs>
    </a-layout-content>
    <div id="view" class="content"></div>
  </a-layout>
</template>

<script>
export default {
  name: 'app',
  components: {
    'wxz-tab-map-module': () => import('./components/tabs/MapModule')
  },
  data() {
    return {
      
    }
  },
  methods: {
    async init() {
      const { Map: ArcGISMap, MapView } = this.$esri;
      const { WebTileLayer } = this.$esri.Layers;


      const map = new ArcGISMap();
      map.setBasemap({
        ...this.$webgis.basemaps[0]
      });
      const view = new MapView({
        container: 'view',
        map,
        zoom: 3,
        center: [110, 10],
        ui: { components: [] },
        constraints: {
          rotationEnabled: false
        }
      });
      view.loadEvent();

      Object.assign(this.$webgis, {
        map, view
      })

    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  
  .header {
    height: 150px;
    position: relative;
    z-index: 2;
  }
  .content {
    height: calc(100% - 150px);
  }
  .tabs {
    height: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
}
::v-deep .ant-tabs-bar {
  margin: 0;
}
::v-deep .ant-tabs-content {
  height: calc(100% - 40px);
}
::v-deep  .ant-tabs-tabpane {
  height: 100%;
}
</style>
