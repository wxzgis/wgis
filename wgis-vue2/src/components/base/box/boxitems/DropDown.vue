<template>
  <a-dropdown class="box-item" :trigger="['click']">
    <div class="ant-dropdown-link" @click="e => e.preventDefault()">
      <img :src="img"><br>
      {{name}}
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
  name: 'box-drop-down',
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