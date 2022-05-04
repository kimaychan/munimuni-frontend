import { Context } from '@nuxt/types'

export default function ({ store, redirect }: Context) {
  if (store.getters['auth/user']) {
    redirect('/notes')
  } else {
    redirect('/login')
  }
}