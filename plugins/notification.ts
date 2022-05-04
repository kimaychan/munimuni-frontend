import { Notification } from '~/types/common'
import { Plugin } from '@nuxt/types'
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $notification: Notification
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
     $notification: Notification
  }
  interface Context {
     $notification: Notification
  }
}

const notification: Plugin = (_, inject) => {
  inject('notification', Vue.observable({ isShow: false, type: 'primary', message: 'message' }))
}

export default notification
