<template>
  <button
    :type="type"
    :class="[state]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MuButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    state: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}
</style>
