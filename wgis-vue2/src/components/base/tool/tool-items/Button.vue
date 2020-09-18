<template>
  <div class="tool-item" @click="onClick">
    <img :src="img">
    <div class="tool-item-name">{{name}}</div>
  </div>
</template>

<script>
export default {
  name: 'tool-item-button',
  props: {
    img: { type: String },
    name: { type: String },
    onClick: { type: Function, default: () => {} }
  },
}
</script>

<style lang="scss" scoped>

</style>
