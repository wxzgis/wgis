<template>
  <div class="box-item box-button" @click="onClick">
    <img :src="img"><br>
    {{name}}
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  props: {
    img: { type: String },
    name: { type: String },
    onClick: { type: Function, default: () => {} }
  },
  name: 'box-button',
  setup(prop, { attrs, slots, emit }) {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.box-button {
  text-align: center;
  padding: 10px 10px;
  margin: 0 5px;
  cursor: pointer;
}
.box-button:hover {
  background-color: #ADE0FF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
</style>
