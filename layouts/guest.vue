<template>
  <section class="guest-layout">
    <mu-notification class="notification" />
    <nuxt />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MuNotification from '~/components/organisms/mu-notification/index.vue'

export default Vue.extend({
  name: 'GuestLayout',
  components: {
    MuNotification
  }
})
</script>

<style lang="scss" scoped>
.guest-layout {
  height: 100%;
  width: 100%;
  position: relative;
  .notification {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 9999;
  }
}
</style>
