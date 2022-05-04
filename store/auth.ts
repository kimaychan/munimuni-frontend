import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { User, LoginForm } from '~/types/common'

export const state = () => ({
  user: {
    id: '',
    username: ''
  } as User
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: state => state.user
}

export const mutations: MutationTree<RootState> = {
  SET_USER: (state, user: User) => (state.user = user)
}

export const actions: ActionTree<RootState, RootState> = {
  async login ({ commit }, form: LoginForm) {
    try {
      const { data } = await this.$api.post('/login', form)
      commit('SET_USER', {
        id: data.id,
        username: form.username
      })
    } catch (e) {
      throw e
    }
  },
  async register ({ commit }, form: LoginForm) {
    try {
      const { data } = await this.$endpoint.post('/register', form)
      commit('SET_USER', {
        id: data.id,
        username: form.username
      })
    } catch (e) {
      throw e
    }
  }
}
