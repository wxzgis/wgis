<template>
  <a-card class="tool-panel" size="small">
    <slot></slot>
    <div class="tool-panel-name">{{name}}</div>
  </a-card>
</template>

<script>
export default {
  name: 'tool-panel',
  props: {
    name: { type: String, default: '选项卡' }
  },
}
</script>

<style lang="scss" scoped>
.tool-panel {
  float: left;
  border-right: 1px #1e1e1e solid;
  height: 100%;

  .tool-panel-name {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  ::v-deep .tool-item {
    float: left;
  }

}
::v-deep .tool-item:hover {
  background-color: #ADE0FF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  
}

::v-deep .tool-item {
  text-align: center;
  padding: 10px 10px;
  margin: 0 5px;
  cursor: pointer;

  ::v-deep .tool-item-name {

    padding-top: 5px;
  }
}
</style>
