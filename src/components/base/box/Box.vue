<template>
  <a-card class="box" size="small">
    <slot></slot>
    <div class="box-name">{{name}}</div>
  </a-card>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  name: 'box',
  props: {
    name: { type: String, default: '选项卡' }
  },
  setup(prop, { attrs, slots, emit }) {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  float: left;
  // background-color: #1E1E1E;
  // color: #FFFFFF;
  border-right: 1px #1e1e1e solid;
  height: 100%;
  min-width: 100px;

  .box-name {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 2px;
  }

  ::v-deep .box-item {
    float: left;
  }

}
</style>
