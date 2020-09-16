<template>
  <a-layout class="main">
    <a-layout-content class="header">
      <a-tabs class="tabs" type="card">
        <a-tab-pane key="1">
          <template v-slot:tab><AimOutlined />地 图</template>
          1
        </a-tab-pane>
        <a-tab-pane key="2">
          <template v-slot:tab><AimOutlined />插 入</template>
          2
        </a-tab-pane>
        <a-tab-pane key="3">
          <template v-slot:tab><AimOutlined />分 析</template>
          3
        </a-tab-pane>
        <a-tab-pane key="4">
          <template v-slot:tab><AimOutlined />编 辑</template>
          4
        </a-tab-pane>
        <a-tab-pane key="5">
          <template v-slot:tab><AimOutlined />共 享</template>
          5
        </a-tab-pane>
      </a-tabs>
    </a-layout-content>
    <div id="view" class="content"></div>
  </a-layout>
</template>

<script>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
import { loadModules } from 'esri-loader'
import { AimOutlined } from '@ant-design/icons-vue';
export default {
  name: '',
  components: {
    AimOutlined
  },
  setup(prop, { attrs, slots, emit }) {
    const _app = getCurrentInstance().ctx;

    onMounted(() => {
      loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
        .then(([ArcGISMap, MapView]) => {
          const map = new ArcGISMap({
            basemap: 'topo-vector'
          });

          const view = new MapView({
            container: 'view',
            map: map,
            center: [-118, 34],
            zoom: 8
          });
          view.ui.components = [];
        });
    })

    return {
      
    }
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
</style>
