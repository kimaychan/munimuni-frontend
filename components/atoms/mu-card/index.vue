<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'MuCard'
})
</script>

<style lang="scss" scoped>
.card {
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 3px 1px $shadow;
}
</style>
