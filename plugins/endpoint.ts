import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Plugin } from '@nuxt/types'
import axios from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $endpoint: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $endpoint: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $endpoint: NuxtAxiosInstance
  }
  interface Context {
    $endpoint: NuxtAxiosInstance
  }
}

// Create a custom axios instance
const muAxios = axios.create({
  baseURL: 'http://localhost:9000/api',
  headers: {
    common: {
      Accept: 'application/json, */*'
    }
  }
})

const endpoint: Plugin = (_, inject) => {
  inject('endpoint', muAxios)
}

export default endpoint
