<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MuInput',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  background: none;
  border: none;
  border-bottom: 1px solid $light-gray;
  font-size: 16px;
  padding: 8px;
  &:focus {
    outline: none;
    border-bottom: 1px solid black;
  }
}
</style>
