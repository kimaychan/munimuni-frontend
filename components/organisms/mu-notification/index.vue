<template>
  <mu-card :class="['notification', type, { 'hidden': !isShow }]">
    <span>{{ message }}</span>
    <button class="close" @click="close">Close</button>
  </mu-card>
</template>

<script lang="ts">
import Vue from 'vue'
import MuCard from '~/components/atoms/mu-card/index.vue'

export default Vue.extend({
  name: 'MuNotification',
  components: {
    MuCard
  },
  computed: {
    isShow (): boolean {
      return this.$notification.isShow
    },
    type (): string {
      return this.$notification.type
    },
    message (): string {
      return this.$notification.message
    }
  },
  methods: {
    close () {
      this.$notification.isShow = false
    }
  }
})
</script>

<style lang="scss" scoped>
.notification {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 10px 15px;
  width: 700px;
  // position: relative;
  min-height: 25px;
  .close {
    // position: absolute;
    background: none;
    border: none;
    cursor: pointer;
    right: 10px;
    text-decoration: underline;
    font-size: 12px;
  }
  &.primary {
    background: $aqua-spring;
  }
  &.destructive {
    background: $light-pink;
    color: red;
    .close {
      color: red;
    }
  }
  &.hidden {
    visibility: hidden;
  }
}
</style>
