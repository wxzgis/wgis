<template>
  <a-dropdown class="tool-item" :trigger="['click']">
    <div @click="e => e.preventDefault()">
      <img :src="img">
    <div class="tool-item-name">{{name}}</div>
    </div>
    <a-menu slot="overlay">
      <a-menu-item v-for="(item, index) in items" :key="index" @click="item.onClick">
        {{item.name}}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'tool-item-drop-down',
  props: {
    img: { type: String },
    name: { type: String },
    items: { type: Array, default() { return []; } },
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss" scoped>

</style>