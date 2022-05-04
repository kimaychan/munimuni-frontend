<template>
  <mu-card class="register-form">
    <form @submit.prevent="submit">
      <mu-input
        id="username"
        v-model="username"
        class="field"
        placeholder="Username"
        required
      />
      <mu-input
        id="password"
        v-model="username"
        class="field"
        type="password"
        placeholder="Password"
        required
      />
      <mu-button type="submit"> Register </mu-button>
    </form>
  </mu-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
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
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions({
      register: 'auth/register'
    }),
    async submit () {
      try {
        await this.register({
          username: this.username,
          password: this.password
        })
        this.$router.push('/notes')
      } catch (e: any) {
        this.$notification.isShow = true
        this.$notification.type = 'destructive'
        this.$notification.message = e.message
      }
    }
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
