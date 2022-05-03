<template>
  <mu-card class="register-form">
    <form @submit.prevent="submit">
      <mu-input
        id="username"
        class="field"
        placeholder="Username"
      />
      <mu-input
        id="password"
        class="field"
        type="password"
        placeholder="Password"
      />
      <mu-button type="submit"> Register </mu-button>
    </form>
  </mu-card>
</template>

<script lang="ts">
import Vue from 'vue'
import MuCard from '~/components/atoms/mu-card/index.vue'
import MuInput from '~/components/atoms/mu-input/index.vue'
import MuButton from '~/components/atoms/mu-button/index.vue'

export default Vue.extend({
  name: 'MuRegisterForm',
  components: {
    MuCard,
    MuInput,
    MuButton
  },
  methods: {
    submit () {}
  }
})
</script>

<style lang="scss" scoped>
.register-form {
  padding: 40px;
  width: 550px;
  form {
    display: flex;
    flex-direction: column;
    .field {
      margin-bottom: 30px;
    }
  }
}
</style>
