<template>
  <a-card class="box" size="small">
    <slot></slot>
    <div class="box-name">{{name}}</div>
  </a-card>
</template>

<script>
export default {
  name: 'box',
  props: {
    name: { type: String, default: '选项卡' }
  },
}
</script>

<style lang="scss" scoped>
.box {
  float: left;
  // background-color: #1E1E1E;
  // color: #FFFFFF;
  border-right: 1px #1e1e1e solid;
  height: 100%;
  // min-width: 100px;

  .box-name {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  ::v-deep .box-item {
    float: left;
  }

}
::v-deep .box-item:hover {
  background-color: #ADE0FF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

::v-deep .box-item {
  text-align: center;
  padding: 10px 10px;
  margin: 0 5px;
  cursor: pointer;

  ::v-deep .name {

    padding-top: 5px;
  }
}
</style>
