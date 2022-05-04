<template>
  <section class="register-page">
    <mu-register-form class="form" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import MuRegisterForm from '~/components/organisms/mu-register-form/index.vue'

export default Vue.extend({
  name: 'RegisterPage',
  components: {
    MuRegisterForm
  },
  head () {
    return {
      title: 'Register'
    }
  },
  layout: 'guest'
})
</script>

<style lang="scss" scoped>
.register-page {
  height: 100%;
  position: relative;
  .form {
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
