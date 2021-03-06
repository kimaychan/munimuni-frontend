import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Plugin } from '@nuxt/types'
import axios from 'axios'

declare module 'vue/types/vue' {
  interface Vue {
    $api: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $api: NuxtAxiosInstance
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
     $api: NuxtAxiosInstance
  }
  interface Context {
     $api: NuxtAxiosInstance
  }
}

// Create a custom axios instance
const muAxios = axios.create({
  baseURL: 'http://localhost:9000/api',
  headers: {
    common: {
      Accept: 'application/json, */*'
    }
  },
  withCredentials: true
})

const api: Plugin = (_, inject) => {
  inject('api', muAxios)
}

export default api
