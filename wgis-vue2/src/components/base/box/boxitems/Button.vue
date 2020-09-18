<template>
  <div class="box-item" @click="onClick">
    <img :src="img">
    <div class="name">{{name}}</div>
  </div>
</template>

<script>
export default {
  props: {
    img: { type: String },
    name: { type: String },
    onClick: { type: Function, default: () => {} }
  },
  name: 'box-button',
}
</script>

<style lang="scss" scoped>

</style>
