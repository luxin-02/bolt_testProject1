import * as userApi from '@/api/modules/user'

const state = {
  profile: null,
}

const mutations = {
  SET_PROFILE(state, profile) {
    state.profile = profile
  },
  CLEAR_PROFILE(state) {
    state.profile = null
  },
}

const actions = {
  async fetchProfile({ commit }) {
    const profile = await userApi.getProfile()
    commit('SET_PROFILE', profile)
    return profile
  },
  async updateProfile({ commit }, data) {
    const profile = await userApi.updateProfile(data)
    commit('SET_PROFILE', profile)
    return profile
  },
  logout({ commit }) {
    commit('CLEAR_PROFILE')
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
