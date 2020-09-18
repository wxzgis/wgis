<template>
  <a-layout class="main">
    <a-layout-content class="header">
      <a-tabs class="tabs" type="card" :tabBarGutter="15">
        <a-tab-pane key="1">
          <template v-slot:tab><AimOutlined />地 图</template>
          <wxz-tabs-map></wxz-tabs-map>
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
import { ref, reactive, onMounted } from 'vue'
import { AimOutlined } from '@ant-design/icons-vue'
import { map, view, setMap, setView } from './hooks/gis'
import WxzTabsMap from './components/tabs/Map'
export default {
  name: '',
  components: {
    AimOutlined,
    'wxz-tabs-map': WxzTabsMap,
  },
  setup(prop, { attrs, slots, emit }) {

    const initGIS = async () => {
      
      const { Map: ArcGISMap, MapView } = WXZ.ESRI;
      const { WebTileLayer } = WXZ.ESRI.Layers;

      const _map = reactive(new ArcGISMap({
        basemap: {
          baseLayers: [new WebTileLayer({
            urlTemplate: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{level}/{row}/{col}'
          })]
        }
      }));
      console.log(_map); 
      setMap(_map);
      const _view = reactive(new MapView({
        container: 'view',
        map: _map,
        zoom: 3,
        center: [110, 10]
      }));


      console.log(_view);
      setView(_view);
      
      // gis.map = map;
      // gis.view = view;

      return;
    }

    onMounted(() => {
      initGIS().then(() => {
        WXZ.Message.show({
          title: 'Welcome To WGIS!'
        }, 'success');
      }).catch(err => {
        console.log(err);
        WXZ.Message.show({
          title: '地图加载失败',
          content: '建议重新打开或联系开发者'
        }, 'error');
      })
    });

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
::v-deep .ant-tabs-content {
  height: calc(100% - 40px);
}
::v-deep  .ant-tabs-tabpane {
  height: 100%;
}
</style>
